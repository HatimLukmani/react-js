import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const goalInputChangeHandler = (event) => {
    if (enteredValue.trim().length > 0) {
      setIsEmpty(false);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      console.log("setting is empty");
      setIsEmpty(true);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label
          className={isEmpty ? "isValid" : undefined}
          // style={{
          //   color: isEmpty ? "red" : "black",
          // }}
        >
          Course Goal
        </label>
        <input
          className={isEmpty ? "isValid" : undefined}
          // style={{
          //   border: isEmpty ? "1px solid red" : "1px solid #ccc",
          // }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
