import React from "react";

const App = () => {
  const students = [
    { id: 1, name: "Amit" },
    { id: 2, name: "Riya" },
    { id: 3, name: "John" },
    { id: 4, name: "Sneha" },
  ]
  
  return (
    <div>
      <h4>Student Dropdown</h4>
      <select name="" id="">
        <option value="">Select Student</option>
        {
          students.map((student, index)=>{
            return (
              <option key={index} value={student.name}>{student.name}</option>
            )
          })
        }
      </select>

    </div>
  )

};

export default App;
