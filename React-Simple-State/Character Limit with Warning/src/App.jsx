import React, { useState } from "react";

const App = () => {
  const [remaining, setRemaining] = useState(20);

  const inputHandler = (e)=>{
    let maxLen = 20;
    let inputLen = e.target.value.length;
    let remainingLen = maxLen - inputLen;
    if (remainingLen >= 0){
      setRemaining(remainingLen);
    }
  }

  return (
    <>
      <input onChange={inputHandler} type="text" maxLength={20}/>
      <p>Remaining: {remaining}</p>
      <p>{remaining == 0 ? "Limit Reached" : ""}</p>
    </>
  );
};

export default App;