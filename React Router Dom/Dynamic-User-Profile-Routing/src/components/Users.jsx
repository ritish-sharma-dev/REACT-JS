import React from "react";
import { NavLink, Outlet } from "react-router";

const Users = ({usersData}) => {
  return (
    <div>
      <div>
        {
            usersData.map((user, index)=>{
                return (
                     <NavLink key={index} to={`${user.id}`}><button>{user.name}</button></NavLink>
                )
            })
        }
      </div>
      <Outlet/>
    </div>
  )
};

export default Users;
