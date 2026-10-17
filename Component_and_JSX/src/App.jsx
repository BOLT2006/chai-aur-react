import React from "react";

const App = () => {
  const name = "YASH SATHE";
  const employee = {
    name: "Yash",
    email: "qwerty234@gmail.com",
  };
  return (
    <>
      <div>
        <h1>Hello</h1>
        <h1>{name}</h1>
        <h1>{2 + 2 + 2}</h1>
        <h1>{employee.email}</h1>
      </div>
    </>
  );
};

export default App;
