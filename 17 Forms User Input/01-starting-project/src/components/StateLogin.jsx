import { useState } from "react";
import useInput from "../Hooks/useInput";
export default function stateLogin() {
  // const [enteredValue, setEnteredValue] = useState({
  //   email: "",
  //   password: "",
  // });
  // const [isEdit, setIsEdit] = useState({
  //   email: false,
  //   password: false,
  // });
  const {
    value: emailValue,
    handelChangeInput: handelEmailChangeInput,
    handleFocus: handelEmailFocus,
    isValid: isValidEmail,
  } = useInput("", (value) => isEdit.email && !value.includes("@"));
  const {
    value: passwordValue,
    handelChangeInput: handelPasswordChangeInput,
    handleFocus: handelPasswordFocus,
  } = useInput("");
  // const isValidEmail = isEdit.email && !enteredValue.email.includes("@");
  function handelSubmit(event) {
    event.preventDefault();
    console.log("clicked");

    if (isValidEmail) {
      console.log("invalid email");
      return;
    }
    console.log("Http request ");
  }

  return (
    <form onSubmit={handelSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            // type="email"
            name="email"
            onBlur={() => handelEmailFocus()}
            onChange={(event) => handelEmailChangeInput(event)}
            value={emailValue}
          />
          <div className="control-error">
            {isValidEmail && <p>Enter your email appropriately</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={() => handelPasswordFocus}
            onChange={(event) => handelPasswordChangeInput(event)}
            value={passwordValue}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
