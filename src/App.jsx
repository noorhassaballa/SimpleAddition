import './App.css'
import { useState } from 'react';

function calculation() {
  const number = document.getElementById("#number").value;
  console.log(number);

}

export default function App() {
  return (
    <>
      <h1>Simple Addition</h1>
      <input id="number" type="number"/>
      &nbsp;
      <input id="addedNumber" type="number"/>
      <p>
        The sum of these two numbers is: <span id="sum">0</span>
      </p>


    </>
  );
}


