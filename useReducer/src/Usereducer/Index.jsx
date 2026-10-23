import React from "react";
import { useReducer } from "react";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { counter: state.counter + 1 };

    case "Decrement":
      return { counter: state.counter - 1 };

    default:
      break;
  }
};

const Index = () => {
  const [state, dispatch] = useReducer(counterReducer, { counter: 0 });

  return <div>
    <h1>Counter : {state.counter}</h1>
    <button onClick={() => dispatch({type : "Increment"})}>Increase</button>
    <br />
    <button onClick={() => dispatch({type : "Decrement"})}>Decrease</button>
  </div>;
};

export default Index;
