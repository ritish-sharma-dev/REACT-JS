import React, { useState } from "react";

const App = () => {
  const colors = ["red", "blue", "green", "yellow", "pink", "grey"];
  const [color, setColor] = useState("");

  const colorChangerHandler = ()=>{
    let random = Math.floor(Math.random()*(colors.length));
    // console.log(random);
    setColor(colors[random]);
    // console.log(color);
  }

  return (
    <>
      <div style={
        {
          width : "500px",
          height : "500px",
          border : "1px solid black",
          display : "flex",
          justifyContent : "center",
          alignItems : "center",
          backgroundColor : color
        }
      }>
        <button type="submit" onClick={colorChangerHandler}>Change Color</button>
      </div>
    </>
  )
};

export default App
