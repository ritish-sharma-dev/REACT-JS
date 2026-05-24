import React, {useState} from "react"

const App = ()=>{
  const [visible, setVisible] = useState(false);

  const visibilityHandler = ()=>{
    if (visible == false) setVisible(true);
    else setVisible(false);
  }

  return (
    <>
      <input type={visible ? "text" : "password"} />
      <button onClick={visibilityHandler}>{visible ? "Hide" : "Show"}</button>
    </>
  )
}

export default App