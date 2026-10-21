import React from "react";
import IndianGov from "./components/IndianGov";

const App = () => {
  const money = 1000;
  return (
    <div>
      <IndianGov money = {money} />
    </div>
  );
};

export default App;
