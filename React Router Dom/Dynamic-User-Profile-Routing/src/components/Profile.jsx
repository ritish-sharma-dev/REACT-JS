import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router";

const Profile = ({ usersData }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const user = usersData.filter((user) => user.id == id)[0]
//   console.log(user)

  return (
    <div>
      {user ? (
        <div>
          <h1>Profile Page</h1>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <div>
            Posts:
            {user.posts.map((post, index) => {
              return <p key={index}>{post}</p>;
            })}
          </div>
        </div>
      ) : (
        <h1>User Not Found</h1>
      )}
      <button onClick={()=> navigate("/users")}>Back</button>
    </div>
  );
};

export default Profile;
