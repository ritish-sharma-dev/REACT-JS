import React, { useState } from "react"

const App = ()=>{
  const quotes = ["Chaos isn't a pit. Chaos is a ladder",
    "When you play the game of thrones, you win or you die. There is no middle ground",
    "The only way to do great work is to love what you do",
    "Be the change that you wish to see in the world",
    "Fight every battle, everywhere, always, in your mind. Everyone is your enemy, everyone is your friend. Every possible series of events is happening all at once. Live that way and nothing will surprise you. Everything that happens will be something that you've seen before"
  ]

  const [quote, setQuote] = useState("");

  const quoteGeneratorHandler = ()=>{
    let random = Math.floor(Math.random()*quotes.length);
    // console.log(random);
    setQuote(quotes[random]);
    // console.log(quote);
  }

  return (
    <>
    <p>{quote}</p>
    <button onClick={quoteGeneratorHandler}>Generate Quote</button>
    </>
  )
}

export default App