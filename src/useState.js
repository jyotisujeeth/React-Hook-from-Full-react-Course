import React, { useState } from 'react';
import './App.css';

 function App() {

  const [count, setCount] = useState(4)
// const [count, setCount] = useState(0);
// const [color, setColor] = useState("red");
  function decrementcount() {
    setCount(prevCount => prevCount -1)
   // setCount(prevCount => prevCount -1)
  }

  function incrementcount() {
    setCount(prevCount => prevCount + 1)
  }
  return (
    <>
      <button onClick={decrementcount}>-</button>
      <span>{count}</span>
      <button onClick={incrementcount} >+</button>
    </>
  );
}

export default App;
