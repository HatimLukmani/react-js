import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import CustomInput from "./Input";
const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        <CustomInput
          label="Email"
          type="email"
          // className={emailNotValid ? 'invalid' : undefined}
          invalid={emailNotValid}
          onChange={(event) => handleInputChange("email", event.target.value)}
        />

        <p>
          <CustomInput
            label="Password"
            type="password"
            invalid={passwordNotValid}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </ControlContainer>
      <div className="actions">
        <Button type="button">Create a new account</Button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
