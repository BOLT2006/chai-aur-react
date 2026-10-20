import React, { use } from 'react'
import {data, useNavigate, useParams} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './Button.css'

const Dynamic_User = () => {
  // console.log("UseParams = " , useParams())

  // get id from useParams
  const {id} = useParams()

  //users
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
  
  // to get userdata
  const specificUser = users.find((data) => data.id == id)
  // console.log(specificUser);

  // useLocation (it give pathname)
  // console.log(useLocation())

  const location = useLocation();

  //useNavigate
  const navigate = useNavigate()
  
  return (
    <div>
      <h1>Name = {specificUser.name}</h1>
      <h1>id = {specificUser.gmail}</h1>

      {location.pathname == "/user/3" && <div><h1>Hello user</h1></div>}

      <div>
        <button className="btn" onClick={() => navigate('/home')}> Go to home</button>
      </div>
    </div>
  )
}

export default Dynamic_User
