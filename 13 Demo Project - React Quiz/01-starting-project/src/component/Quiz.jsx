import questions from "../questions";
import { useState, useEffect, useRef } from "react";
import QuizComplete from "../assets/quiz-complete.png";
let shuffledAnswersArray = questions.map((question) =>
  question.answers.sort(() => Math.random() - 0.5)
);
console.log("shuffled", shuffledAnswersArray);
let selectedAnswer = "";
export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);
  const [remainingTime, setRemainingTime] = useState(3000);
  const [state, setState] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(
    Array.from(questions, () => 0)
  );
  const progress = useRef();

  const questionIndex = userAnswer.length;
  useEffect(() => {
    console.log("set timeout main");
    const Timer = setTimeout(() => {
      // console.log("infinte");
      if (questionIndex < questions.length) {
        setUserAnswer((prevUserAnswer) => {
          let updatedUserAnswer = [...prevUserAnswer, []];
          return updatedUserAnswer;
        });
      }
    }, 10000);
    return () => {
      console.log("set timeout clean");
      clearTimeout(Timer);
    };
  }, [userAnswer, questionIndex, questions.length]);

  useEffect(() => {
    console.log("set internal main");

    const timerInterval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    if (questionIndex >= questions.length) {
      clearInterval(timerInterval);
    }
    // Stop the timer if the quiz is completed
    if (questionIndex >= questions.length) {
      clearInterval(timerInterval);
    }

    return () => {
      console.log("set internal  clean");
      setRemainingTime(10000);
      if (progress.current) {
        progress.current.style.display = "";
      }
      clearInterval(timerInterval);
    };
  }, [userAnswer, questionIndex, questions.length]);

  if (questionIndex >= questions.length) {
    console.log(userAnswer);
    return (
      <div id="summary">
        <img src={QuizComplete} alt="quiz complete logo" />
        <h2>Quiz is completed</h2>
      </div>
    );
  }
  function clickHandeler(userAnswer) {
    console.log(userAnswer);
    selectedAnswer = userAnswer;
    progress.current.style.display = "none";
    console.log(questions[questionIndex].answers[0]);
    console.log(questionIndex);
    setButtonDisabled((prevButtonDisabled) => {
      console.log("deh", questionIndex);
      let updatedButtonDisabled = [...prevButtonDisabled];
      updatedButtonDisabled[questionIndex] = 1;
      return updatedButtonDisabled;
    });
    if (userAnswer === questions[questionIndex].answers[0]) {
      console.log(questionIndex);

      setState(() => {
        return "Correct";
      });
    } else {
      setState(() => {
        return "Incorrect";
      });
    }
    setTimeout(() => {
      setUserAnswer((prevUserAnswer) => {
        let upadtedUserAnswer = [...prevUserAnswer, userAnswer];
        return upadtedUserAnswer;
      });
    }, 2000);
  }
  return (
    <div id="quiz">
      <div id="question">
        <progress
          ref={progress}
          id="question-time"
          value={remainingTime}
          max={10000}
        ></progress>
        <h2>{questions[questionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswersArray[questionIndex].map((options) => {
            let classes = "";
            let isSelected = selectedAnswer === options;

            if (state === "Correct" && isSelected) {
              classes = "correct";
            } else if (state === "Incorrect" && isSelected) {
              classes = "wrong";
            }
            return (
              <li key={options} className={"answer"}>
                <button
                  onClick={() => clickHandeler(options)}
                  className={classes}
                  disabled={buttonDisabled[questionIndex] == 1 ? true : false}
                >
                  {options}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
