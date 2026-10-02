import './App.css'
import Card from './components/Card'

function App() {
 
  let myObj = {
    username: "Yash",
    channel: "My Channel",
    description: "This is my channel",
  }

  let newArr = [1, 2, 3, 4, 5]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'> HELLO</h1>
    <button className="bg-sky-500 hover:bg-sky-700 ...">Save changes</button>
    <Card username = "My Channel" SomeObj = {myObj} NewArr = {newArr} />
    <Card  username="Another User"/>
    </>
  )
}

export default App
