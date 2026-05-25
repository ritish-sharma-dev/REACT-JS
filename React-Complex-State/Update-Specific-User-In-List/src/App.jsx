import React from "react";
import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "A" },
    { id: 2, name: "B" },
  ])

  const buttonHandler = ()=>{
    let updatedUser = users.map((user)=>{
      if (user.id == 2){
        return {...user, name : "Updated User"}
      }
      return user
    })
    setUsers(updatedUser)
  }

  return (
    <div>
      <h4>User List</h4>
      {
        users.map((user, index)=>{
          return (
            <p key={index}>user {user.id}: {user.name}</p>
          )
        })
      }
      <button onClick={buttonHandler}>Update User</button>
    </div>
  )
};

export default App;
