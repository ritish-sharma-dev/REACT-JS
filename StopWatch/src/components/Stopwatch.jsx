import React, { useEffect, useRef, useState } from 'react'

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  let intervalId = useRef(null);

  const startHandler = ()=>{
    if (!running){
      intervalId.current = setInterval(()=>{
        setSeconds((seconds)=> seconds+1);
      },1000);
    }
    setRunning(true);
  }

  const stopHandler = ()=>{
    if (running){
      clearInterval(intervalId.current);
      setRunning(false);
    }
  }

  useEffect(()=>{
    console.log(seconds, running);
  },[seconds, running])

  return (
    <div>
      <p>Time: {seconds} seconds</p>
      <button type='submit' onClick={startHandler}>Start</button>
      <button type='submit' onClick={stopHandler}>Stop</button>
    </div>
  )
}

export default Stopwatch