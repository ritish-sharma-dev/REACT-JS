import React, { useEffect, useState } from 'react'

const App = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  const formHandler = (e)=>{
    e.preventDefault()
    setFormSubmitted(true)
  }

  let resetHandler = ()=>{
    setFormSubmitted(false)
    setName("")
    setDepartment("")
    setSalary("")
  }

  // useEffect(()=>{
  //   console.log(name, department, salary)
  // },[name, department, salary])


  return (
    <div>
      <form onSubmit={formHandler}>
        <input value={name} onChange={(e)=> setName(e.target.value) } type="text" placeholder='Enter Employee Name'/>
        <input value={department} onChange={(e)=> setDepartment(e.target.value) }  type="text" placeholder='Department'/>
        <input value={salary} onChange={(e)=> setSalary(e.target.value) }  type="number" placeholder='Salary'/>
        <button type='submit'>Submit</button>
      </form>
      {
        formSubmitted ? 
        <div>
          <button onClick={resetHandler}>Reset</button>
          <p>Name: {name}</p>
          <p>Department: {department}</p>
          <p>Salary: {salary}</p>
        </div> : ""
      }
    </div>
  )
}

export default App