import { useState, useRef } from "react";
import ResultDialog from "./ResultDialog";
export default function TimerChallenge({ title, seconds }) {
  const [remainingTime, setRemainingTime] = useState(
    Number.parseInt(seconds) * 1000
  );
  const reference = useRef();
  const forward = useRef();

  const isTimerOn =
    remainingTime > 0 && remainingTime < Number.parseInt(seconds) * 1000;
  if (remainingTime <= 0) {
    clearInterval(reference.current);
    setRemainingTime(Number.parseInt(seconds) * 1000);
    forward.current.open();
  }
  function clickHandelerStart() {
    // Assuming you have a state variable called remainingTime and a setter function setRemainingTime
    console.log("start");
    reference.current = setInterval(() => {
      setRemainingTime((prevRemainingTime) => {
        return prevRemainingTime - 10;
      });
    }, 10);
  }

  function clickHandelerStop() {
    // setTimerSet(false);
    console.log("stop");
    clearInterval(reference.current);
    forward.current.open();
    // setRemainingTime(Number.parseInt(seconds) * 1000);
  }
  function handelReset() {
    setRemainingTime(Number.parseInt(seconds) * 1000);
  }
  return (
    <>
      <ResultDialog
        ref={forward}
        result="Loss"
        targetTime={Number.parseInt(seconds)}
        remainingTime={remainingTime}
        submitHandeler={handelReset}
      ></ResultDialog>

      <section className="challenge">
        <h2>{title}</h2>
        <p>{isTimerOn ? null : "You Lost"}</p>
        <p className="challenge-time">
          {seconds} second{Number.parseInt(seconds) > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isTimerOn ? clickHandelerStop : clickHandelerStart}>
            {isTimerOn ? "stop" : "start"}
          </button>
        </p>
        <p className="">{isTimerOn ? "Timer is running" : "Start timer"}</p>
      </section>
    </>
  );
}
