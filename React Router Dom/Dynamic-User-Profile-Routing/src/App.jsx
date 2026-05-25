import React from "react";
import Users from "./components/Users";
import { Route, Routes } from "react-router";
import Profile from "./components/Profile";

const App = () => {
  const usersData = [
    {
      id: 101,
      name: "Rahul Sharma",
      email: "rahul@example.com",
      posts: [
        "Learning React Router is fun!",
        "Just built my first React app 🚀",
      ],
    },
    {
      id: 102,
      name: "Priya Verma",
      email: "priya@example.com",
      posts: ["JavaScript is powerful 💡", "Exploring useParams hook today"],
    },
    {
      id: 103,
      name: "Amit Singh",
      email: "amit@example.com",
      posts: [
        "Dynamic routing makes UI clean.",
        "Don't forget to handle edge cases!",
      ],
    },
  ];
  return (
    <div>
      <Routes>
        <Route path="/users" element={<Users usersData={usersData}/>}></Route>
        <Route path="users/:id" element={<Profile usersData={usersData}/>} ></Route>
      </Routes>
    </div>
  );
};

export default App;
