import React from 'react'
import MyContext from '../context/MyContext'
import { useContext } from 'react'

const People = () => {
  // console.log(useContext(MyContext));

  // const  data = useContext(MyContext)
  const {name , money} = useContext(MyContext)
  
  return (
    <div>
      <h1>Welcome to  People Component : </h1>
      <h2>Name : {name}</h2>
      <h2> Money : {money}</h2>
    </div>
  )
}

export default People
