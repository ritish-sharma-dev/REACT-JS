import React from 'react'
import { useState } from 'react'

const App = () => {
  const [active, setActive] = useState(0)

  const buttonHandler = (e)=>{
    console.log(e.target.id)
    if (e.target.id == active){
      setActive(0)
    }else{
      setActive(e.target.id)
    }

  }

  return (
    <div>
      <div>
        <button id='1' onClick={buttonHandler}>Item 1</button>
        <p style={{display : active == 1 ? "block" : "none"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam id quod sequi necessitatibus magni officiis ipsam eos, deserunt dolorem accusantium!</p>
      </div>

      <div>
        <button id='2' onClick={buttonHandler}>Item 2</button>
        <p style={{display : active == 2 ? "block" : "none"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sapiente animi voluptas, optio incidunt debitis ipsa eius ut esse reprehenderit.</p>
      </div>

      <div>
        <button id='3' onClick={buttonHandler}>Item 3</button>
        <p style={{display : active == 3 ? "block" : "none"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga odit quod porro, natus quisquam doloremque dolorum ratione dicta quos dolores!</p>
      </div>
    </div>
  )
}

export default App