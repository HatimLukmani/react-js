import { useState } from "react";
export default function useInput(initialValue, validChecker) {
  const [enteredValue, setEnteredValue] = useState(initialValue);
  const [isEdit, setIsEdit] = useState(false);
  function handelChangeInput(event) {
    setEnteredValue(event.target.value);
    setIsEdit(false);
  }
  const isValid = isEdit && !enteredValue.includes("@");
  function handleFocus() {
    setIsEdit(true);
  }
  return {
    value: enteredValue,
    isValid,
    handelChangeInput,
    handleFocus,
  };
}
