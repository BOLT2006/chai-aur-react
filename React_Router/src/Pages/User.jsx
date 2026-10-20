import React from "react";
import { Link, Links } from "react-router-dom";

const User = () => {
  const users = [
    {
      id: 1,
      name: "Rahul Sharma",
      gmail: "rahul.sharma@example.com",
    },
    {
      id: 2,
      name: "Priya Patel",
      gmail: "priya.patel@example.com",
    },
    {
      id: 3,
      name: "Amit Verma",
      gmail: "amit.verma@example.com",
    },
    {
      id: 4,
      name: "Sneha Joshi",
      gmail: "sneha.joshi@example.com",
    },
    {
      id: 5,
      name: "Yash Sathe",
      gmail: "yash.sathe@example.com",
    },
  ];
  return (
    <>
      {users.map((data) => (
        <div key={data.id}>
          <Link to={`/user/${data.id}`} >
            <h1>{data.name}</h1>
          </Link>
        </div>
      ))}
    </>
  );
};

export default User;
