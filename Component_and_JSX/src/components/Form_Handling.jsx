import React from "react";
import { useState } from "react";

const Form_Handling = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  // To handle multiple Inputs
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  //Change Handler
  const changeHandler = (e) => {

    // de-structure from e.target
    const { name, value } = e.target;

    //To setformData
    setformData({...formData , [name] : value})
  };

  // To prevent the page reload
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div>
          Name :{" "}
          <input
            onChange={changeHandler}
            name="name"
            value={formData.name}
            type="text"
          />
        </div>
        <br />
        <div>
          Email :{" "}
          <input
            onChange={changeHandler}
            name="email"
            value={formData.email}
            type="email"
          />
        </div>
        <br />
        <div>
          Password :{" "}
          <input
            onChange={changeHandler}
            name="password"
            value={formData.password}
            type="password"
          />
        </div>
        <br />
        <div>
          Phone :{" "}
          <input
            onChange={changeHandler}
            name="phone"
            value={formData.phone}
            type="number"
          />
        </div>
        <br />
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </>
  );
};

export default Form_Handling;
