import React from "react";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      title: "Learn REACT JS",
      completedStatus: false,
    },
    {
      title: "Learn NODE JS",
      completedStatus: false,
    },
    {
      title: "Learn MONGO DB",
      completedStatus: false,
    },
    {
      title: "Learn JAVASCRIPT",
      completedStatus: false,
    }
  ])

  let statusHandler = (index)=>{
    let t = tasks.map((task, idx)=>{
      if (idx == index){
        return {
          ...task,
          completedStatus : !task.completedStatus
        }
      }
      return task
    })

    setTasks(t)
  }

  return (
    <div>
      {
        tasks.map((task, index)=>{
          return (
            <div key={index}>
              <p>{task.title} ------- {task.completedStatus ? "Completed" : "Pending"}</p>
              <button onClick={()=> statusHandler(index)}>{task.completedStatus ? "Pending" : "Completed"}</button>
            </div>
          )
        })
      }
    </div>
  )
};

export default App;
