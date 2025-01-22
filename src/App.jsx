import './App.css'
import React, { useState } from 'react';

export default function App() {
  let sum = 0;
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);

  function calculation() {

  }

  return (
    <>
      <h1>Simple Addition</h1>
      <input id="numberOne" type="number" />
      &nbsp;
      <input id="numberTwo" type="number" />
      <p>
        The sum of these two numbers is:
      </p>

    </>
  );
}

