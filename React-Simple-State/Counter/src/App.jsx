import React, { useState } from 'react'

const App = () => {
  let [count, setCount] =  useState(0);

  let incrementHandler = ()=>{
    if (count < 10) setCount(count+1);
  }

  let decrementHandler = ()=>{
    if (count > 0) setCount(count-1);
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
    </>
  )
}

export default App