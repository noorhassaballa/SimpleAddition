import './App.css'
import React, { useState } from 'react';

export default function App() {
  let sum = 0;
  const [numberOne, setNumberOne] = useState('');
  const [numberTwo, setNumberTwo] = useState('');
  const oneAsNumber = Number.parseInt(numberOne);
  const twoAsNumber = Number.parseInt(numberTwo);

  function calculation() {
    sum = {oneAsNumber} + {twoAsNumber};
    return sum;
  }

  return (
    <>
      <h1>Simple Addition</h1>
      <input id="numberOne" type="number" value={numberOne} onChange={e => setNumberOne(e.target.value)} />
      &nbsp;
      <input id="numberTwo" type="number" value={numberTwo} onChange={e => setNumberTwo(e.target.value)}/>
      <p>
        The sum of these two numbers is:<span></span>
      </p>

    </>
  );
}

