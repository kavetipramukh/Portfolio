import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'
import GlassNavbar from './components/GlassNavbar'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import WhatIDo from './components/whatido'
import { ReactLenis, useLenis } from "lenis/react";
import gsap from 'gsap';
import HeroText from './components/HeroText';
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  
  return (
    <>
    <ReactLenis root>
    <div className='intro h-screen  relative' id='home'>
      <div className=' bg-black h-screen'>
        <GlassNavbar className="fixed top-6 left-1/2 z-50 w-[92%] max-w-6xl -translate-x-1/2 rounded-2xl" />
        
          <HeroText />
      </div>
    </div>
      <About />
      <div className='flex justify-center pt-10 bg-black' >
        <h1 className='text-5xl text-white pb-5'>Projects</h1>
      </div>
      <div className="bg-black" >
      <Projects />
      </div>
      

      <div id='outro' className=''>
        <WhatIDo />
      </div>

      <div className=' flex '>
      <Contact />
      </div>

      <Footer className="w-full" />
    
    </ReactLenis>
    </>
  )
}

export default App