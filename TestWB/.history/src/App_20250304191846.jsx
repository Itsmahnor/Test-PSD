import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './Components/Header/TopNav'
import Navbar from './Components/Header/BottomNav'
import { Home } from './Components/Header/Home'
import { Hero } from './Components/Hero/Hero'


function App() {
 

  return (
    <>
    <Header />
    <Navbar />
    <Home />
    <Hero />

    </>
  )
}

export default App
