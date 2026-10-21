import React, { useState } from "react";
import MyContext from "./MyContext";

const MoneyState = (props) => {
  const money = 1000;
  const name = "yash";
  const [counter, setcounter] = useState(0);
  const data = "batman";
  return (
    <>
      <MyContext.Provider value={{ money, name, counter, setcounter ,data }}>
        {props.children}
      </MyContext.Provider>
    </>
  );
};

export default MoneyState;
