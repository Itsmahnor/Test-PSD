import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './Components/Header/TopNav'
import Navbar from './Components/Header/BottomNav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Navbar />

    </>
  )
}

export default App
