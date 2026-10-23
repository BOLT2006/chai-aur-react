import React from "react";
import { useState } from "react";
import { useMemo } from "react";

const Index = () => {
  const [count, setcount] = useState(0);
  const [num, setnum] = useState(10);

  //complex or expensive function runs on every render
  const complexCalculation = useMemo(() => {
    console.log("Calculating...");
    for (let i = 0; i < 1000; i++) {}
    return num * 2;
  }, [num]); // only re run when num state changes
  const result = complexCalculation;
  return (
    <div>
      <h2>Result = {result}</h2>
      <button onClick={() => setcount(count + 1)}>Increase</button>
      <h4>Count : {count}</h4>
    </div>
  );
};

export default Index;
