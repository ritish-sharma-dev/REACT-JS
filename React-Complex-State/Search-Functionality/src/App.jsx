import React, { useState } from "react";

const App = () => {
  const [usersData, setUsersData] = useState([
    { id: 1, name: "Amit Sharma", city: "Delhi" },
    { id: 2, name: "Neha Verma", city: "Mumbai" },
    { id: 3, name: "Rahul Singh", city: "Chandigarh" },
    { id: 4, name: "Priya Mehta", city: "Pune" },
  ])
  const [filteredData, setFilteredData] = useState(usersData)

  let searchHandler = (e)=>{
    // console.log(e.target.value)
    let filteredData = usersData.filter((userData)=>
      userData.name.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setFilteredData(filteredData)
  }

  return (
    <div>
      <h4>User Search</h4>
      <input type="text" onChange={searchHandler}  placeholder="Search by name..."/>
      <div>
        {
          filteredData.map((userData, index)=>{
            return (
              <p key={index}>{userData.name} ------------- {userData.city}</p>
            )
          })
        }
      </div>
    </div>
  )
};

export default App;
