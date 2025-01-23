import './App.css'
import React, { useState } from 'react';

export default function App() {
  let [sum, setSum] = useState(0);
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);

  function calculation() {
    sum = numberOne + numberTwo;
  }

  calculation();

  return (
    <>
      <h1>Simple Addition</h1>
      <input id="numberOne" type="number" value={numberOne} onChange={e => setNumberOne(Number.parseInt(e.target.value))} />
      &nbsp;
      <input id="numberTwo" type="number" value={numberTwo} onChange={e => setNumberTwo(Number.parseInt(e.target.value))} />
      <p>
        The sum of these two numbers is: <span>{sum}</span>
      </p>

    </>
  );
}

