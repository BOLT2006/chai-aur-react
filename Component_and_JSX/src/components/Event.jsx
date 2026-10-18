import React from "react";

const Event = () => {
    const showAlert = () => {
        alert("Event called")
    }
    const bg_light = () => {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black"
    }
    const bg_dark = () => {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white"
    }
    let count = 0;
    let counter = (value) => {
        alert("This is new alert " + value)
    }
  return (
    <>
      <h1>Events</h1>
      <button onClick={showAlert}>Click</button>
    
      <div>
          <br />
        <button onClick={bg_light}>Change_to_light</button>
        <button onClick={bg_dark}>Change_to_dark</button>
      </div>

      <div>
        <h2>Counter : {count}</h2>
        <button onClick={() => counter(65)}>Inc counter by 1</button>
      </div>
    </>
  );
};

export default Event;
