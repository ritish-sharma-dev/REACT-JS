import React from "react"
import {useState} from "react"

let App = ()=>{
  let [buttonDisabled, setButtonDisabled] = useState(false);

  let clickHandler = ()=>{
    alert("Button is Disabled");
    setButtonDisabled(true);
  }

  return (
    <>
      <button onClick={clickHandler} disabled={buttonDisabled}>Click Me : I will Disabled</button>
    </>
  )
}

export default App