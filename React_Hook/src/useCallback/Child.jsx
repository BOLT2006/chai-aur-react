import React from 'react'
import { useEffect } from 'react'

const Child = ({handleClick ,counter1}) => {
    useEffect(() => {
        console.log("Child component is rendering")
    }, [handleClick])
    
  return (
    <div>
      <h1>This is my child component : {counter1}</h1>
      <button onClick={handleClick}>Increase  child Counter </button>
    </div>
  )
}

export default Child
