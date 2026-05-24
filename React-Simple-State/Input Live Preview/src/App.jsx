import React, {useState} from "react"

const App = ()=>{
  const [inputText, setInputText] = useState("");

  const inputChangeHandler = (e)=>{
    setInputText(e.target.value);
  }

  return ( 
    <>
      <input onChange={inputChangeHandler} type="text" name="" id="" />
      <p>You Typed : {inputText}</p>
    </>
  )
}

export default App