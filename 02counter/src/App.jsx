
import { useState } from 'react'
import './App.css'

function App() {

  //useState  return => [counter ,setCounter] 
  let [counter , setCounter] = useState(10)
 
  // let counter = 5

  const addValue =  () => {
    console.log("value Added" , Math.random())
    if(counter !== 20){
      // counter = counter + 1

      // setCounter(counter + 1) // this is not the correct way to update the state because it may not give the latest value of counter due to asynchronous nature of state updates in React. Instead, we should use the functional form of setCounter to ensure we are working with the most recent state.
    setCounter((prevCounter) => prevCounter + 1)
    }
  }

  const removeValue = () =>{
    if(counter !== 0) {
      setCounter(counter - 1)                             
    }
  }

  return (
    <>
    <h1>chai aur react</h1> 
    <h2>Counter value : {counter}</h2>

    <button onClick = {addValue}>Add value</button>
    <br />
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
