import React from "react";
import { useState } from "react";

const UseState = () => {
  //useState
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((prev) => prev + 1 );
    setCounter((prev) => prev + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>UseState hook</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={increase}>Inc</button>
      <button onClick={decrease}>Dec</button>
    </>
  );
};

export default UseState;
