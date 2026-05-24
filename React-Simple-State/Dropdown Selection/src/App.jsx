import React from "react"
import {useState} from "react"

const App = ()=>{
  let technology = ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js"];
  let [selectedTechnology, setSelectedTechnology] = useState(technology[0]);

  let handler = (e)=>{
    // console.log(e.target);
    // console.log(e.target.value);
    setSelectedTechnology(e.target.value);
  }

  return (
    <>
    <select onClick={handler} name="technology" id="">
      {
        technology.map((tech, index)=>{
          return (
            <option key={index} value={tech}>{tech}</option>
          )
        })
      }
    </select>

    <p>You Selected : {selectedTechnology}</p>
    </>
  )
}

export default App