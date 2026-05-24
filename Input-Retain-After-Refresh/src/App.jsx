// import {useState, useEffect} from 'react'

// function App() {
//   const [name, setName] = useState(localStorage.getItem("name"))
//   const [group, setGroup] = useState(localStorage.getItem("group"))
//   const [gender, setGender] = useState(localStorage.getItem("gender"))
//   const [visible, setVisible] = useState(false)

//   useEffect(()=>{
//     localStorage.setItem("name", name)
//     localStorage.setItem("group", group)
//     localStorage.setItem("gender", gender)
//   }, [name, group, gender])

//   return (
//     <div>
//       name:
//       <input type="text"
//         onChange={(event)=> setName(event.target.value)}
//         value={name}
//       /><br/>

//       group:
//       <select
//         onChange={(event)=> setGroup(event.target.value)}
//         value={group}
//       >
//         <option value="">---select group---</option>
//         <option value="A">A</option>
//         <option vlaue="B">B</option>
//         <option value="C">C</option>
//         <option value="E">E</option>
//       </select> <br/>

//       gender:

//       <input type='radio'
//         onChange={()=> setGender("M")}
//         checked={gender == "M"}
//       name='gender' value="M"/> male

//       <input type='radio'
//         onChange={()=> setGender("F")}
//         checked={gender == "F"}
//       name='gender' value="F"/> female
//       <br />

//     <button onClick={()=> setVisible(!visible)}>show</button>

//     {
//       visible ? <div>
//          <p>name : {name}</p>
//          <p>group : {group}</p>
//          <p>gender : {gender}</p>

//          </div>: <></>
//     }

//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from "react";

const App = () => {
  let localStorageData = JSON.parse(localStorage.getItem("data")) || {};

  const [data, setData] = useState({
    name: localStorageData.name || "",
    age: localStorageData.age || "",
    gender: localStorageData.gender || "",
    section: localStorageData.section || "",
    marriedStatus: localStorageData.marriedStatus || false,
  });

  useEffect(() => {
    console.log(data);
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("data");
    setData({
      name: "",
      age: "",
      gender: "",
      section: "",
      marriedStatus: false,
    });
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            onChange={(e) => setData({ ...data, name: e.target.value })}
            value={data.name}
            id="name"
            type="text"
          />
        </div>

        <div>
          <label htmlFor="age">Age: </label>
          <input
            onChange={(e) => setData({ ...data, age: e.target.value })}
            value={data.age}
            id="age"
            type="number"
          />
        </div>

        <div>
          <label>Gender: </label>
          <input
            onChange={(e) => setData({ ...data, gender: e.target.value })}
            name="gender"
            type="radio"
            value="male"
            checked={data.gender == "male"}
          />
          <label>Male</label>
          <input
            onChange={(e) => setData({ ...data, gender: e.target.value })}
            name="gender"
            type="radio"
            value="female"
            checked={data.gender == "female"}
          />
          <label>Female</label>
        </div>

        <div>
          <label htmlFor="section">Section: </label>
          <select
            onChange={(e) => setData({ ...data, section: e.target.value })}
            value={data.section}
            name="section"
            id="section"
          >
            <option value="">------</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </select>
        </div>

        <div>
          <input
            onChange={(e) =>
              setData({ ...data, marriedStatus: e.target.checked })
            }
            type="checkbox"
            id="marriedstatus"
            checked={data.marriedStatus == true}
          />
          <label htmlFor="marriedstatus">Married Status</label>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
