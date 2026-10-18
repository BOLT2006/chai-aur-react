import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


const UseEffect = () => {

    const [counter, setCounter] = useState(0)
    useEffect(() => {
      console.log("UseEffect is running")
      document.title = counter
    }, [counter])
    
  return (
    <>
     <div>
      <h1>UseEffect</h1>

      <h3>Counter: {counter}</h3>

      <button onClick={() => setCounter(prev => prev + 1)}>
        Increase
      </button>

      <button onClick={() => setCounter(prev => prev - 1)}>
        Decrease
      </button>
    </div>
    </>
  )
}

export default UseEffect
