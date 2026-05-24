import React, { useEffect, useState } from "react";
import {
  checkfirstCapital,
  checkContainSmaller,
  checkContainSpecial,
  checkContainDigit,
} from "./helpers/passwordValidator";

const App = () => {
  const [password, setPassword] = useState("");
  const [firstCapitalLetter, setFirstCapitalLetter] = useState(false);
  const [containSmallLetter, setContainSmallLetter] = useState(false);
  const [containSpecialCharacter, setContainSpecialCharacter] = useState(false);
  const [containDigit, setContainDigit] = useState(false);

  useEffect(() => {
    setFirstCapitalLetter(checkfirstCapital(password));
    setContainSmallLetter(checkContainSmaller(password));
    setContainDigit(checkContainDigit(password));
    setContainSpecialCharacter(checkContainSpecial(password));
  }, [password]);

  return (
    <div>
      <h2>Password Validator</h2>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="Enter Password"
      />
      <p style={{ color: firstCapitalLetter ? "green" : "red" }}>
        First character should be capital
      </p>
      <p style={{ color: containSmallLetter ? "green" : "red" }}>
        Must contain one small letter
      </p>
      <p style={{ color: containSpecialCharacter ? "green" : "red" }}>
        Must contain one special chacter
      </p>
      <p style={{ color: containDigit ? "green" : "red" }}>
        The password should contain at least one number (0–9)
      </p>
    </div>
  );
};

export default App;
