import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'
import GlassNavbar from './components/GlassNavbar'
import Projects from './components/Projects'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import WhatIDo from './components/whatido'
import { ReactLenis, useLenis } from "lenis/react";
import PixelBlast from './components/PixelBlast'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  
  return (
    <ReactLenis root>
    <div className='intro h-screen  relative' id='home'>
      <div className=' bg-black h-screen'>
        <GlassNavbar className="fixed top-6 left-1/2 z-50 w-[92%] max-w-6xl -translate-x-1/2 rounded-2xl" />
        
        
          <PixelBlast
            variant="diamond"
            pixelSize={3}
            color="#a3f0dd"
            patternScale={4}
            patternDensity={0}
            pixelSizeJitter={1}
            enableRipples
            rippleSpeed={0.2}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid={false}
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.35}
            edgeFade={0.25}
            noiseAmount={0}
            transparent={false}
          />
      </div>

      <Header />
      
      <About />
      <div className='flex justify-center pt-10 bg-black' >
        <h1 className='text-5xl text-white pb-5'>Projects</h1>
      </div>
      <div className="bg-black" >
      <Projects />
      </div>
      

      <div className=''>
        <WhatIDo />
      </div>

      <div className='outer flex top '>
      <Contact />
      </div>
    </div>
    </ReactLenis>
  )
}

export default App