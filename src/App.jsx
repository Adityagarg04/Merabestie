import { useState } from 'react'
import './App.css'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
  <Homepage/>
  



    </>
  )
}


export default App
