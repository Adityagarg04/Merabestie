import { useState } from 'react'
import './App.css'
import './home.css'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div className="">
<Homepage/> 
    </div>
  

    </>
  )
}


export default App
