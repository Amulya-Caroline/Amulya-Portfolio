import React from 'react'

import Contact from './components/Contact'
import Footer from './components/Footer'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Aos from "aos";
import "aos/dist/aos.css";
const App = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
        <Navbar/>
        <Header/>
        <About/>
        <Services/>
        <Work/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App
