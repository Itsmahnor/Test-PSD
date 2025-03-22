import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './Components/Header/TopNav'
import Navbar from './Components/Header/BottomNav'
import { Home } from './Components/Header/Home'
import { Hero } from './Components/Hero/Hero'
import MySection from './Components/ParentPage/MySection'
import ParentPage from './Components/ParentPage/ParentPage'
import DiagonalCards from './Components/DiagonalCards'
import ContactForm from './Components/Contact'
import Footer from './Components/Footer'


function App() {
 

  return (
    <>
    <Header />
    <Navbar />
    <Home />
    <Hero />
    <ParentPage />
    <DiagonalCards />
    <ContactForm />
    <Footer />

    </>
  )
}

export default App
