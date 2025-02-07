import React from 'react'
import Navbar from './assets/components/Navbar'
import Hero from './assets/components/Hero'
import Slide from './assets/components/Slide'
import Projects from './assets/components/Projects'
import About from './assets/components/About'
import Services from './assets/components/Services'
import Contact from './assets/components/Contact'

const App = () => {
  return (
    <main className='font-light bg-black text-white antialized selection:bg-pink selection:text-black'>

      <Navbar />
      <Hero/>
      <Slide/>
      <Projects/>
      <About/>
      <Services/>
      <Contact/>
    </main>
  )
}

export default App