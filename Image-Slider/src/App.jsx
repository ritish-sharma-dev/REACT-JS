import React, { useEffect, useState } from "react";

const App = () => {
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
  ]
  const [index, setIndex] = useState(0)

  // useEffect(()=>{
  //   console.log(index);
  // },[index])

  return (
  <div>
    <div>
    <img width={300} height={300} src={images[index]} alt="image" />
    </div>
    <button onClick={()=> (index > 0) ? setIndex(index-1) : setIndex(images.length-1)}>Prev</button>
    <button onClick={()=> (index < images.length-1) ? setIndex(index+1) : setIndex(0)}>Next</button>
  </div>
  )
};

export default App;
