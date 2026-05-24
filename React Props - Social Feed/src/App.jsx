import "./App.css";
import PostCard from "./PostCard";

function App() {
  const POSTS_DATA = [
    {
      id: 1,
      username: "dev_traveler",
      content: "Just finished my first React project!",
      likes: 24,
      comments: ["Great job!", "Keep it up!", "React is awesome."],
    },
    {
      id: 2,
      username: "chef_logic",
      content: "The secret to a perfect steak is the sear.",
      likes: 85,
      comments: ["Recipe please?", "Cast iron or grill?"],
    },
  ];
  return (
  <>
  {
  POSTS_DATA.map((object,index)=>{
    return (
    <PostCard post={object} key={index+1}/>
    )
  })
  }</>);
}

export default App;
