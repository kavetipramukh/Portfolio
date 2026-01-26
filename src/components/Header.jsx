import React from 'react'
import hero from '../assets/hero.jpeg'
import hand_icon from '../assets/hand-icon.png'
import download_icon from '../assets/download-icon.png'
import right_arrow_white from '../assets/right-arrow-white.png'


const Header = () => {
    return (
        
        <div className='intro absolute inset-0 flex flex-col justify-center items-center text-white z-10 max-w-3xl mx-auto'>
            


            {/* <img src={hero} alt="Profile" className='w-32 h-32 rounded-full mb-4' /> */}
           
            <h3 className='name flex items-center gap-2 text-xl md:text-6xl font-black mb-3 font-Ovo drop-shadow-2xl bg-gradient-to-r from-[#423c3c] to-[#9c9898] bg-clip-text text-transparent'>Hi! I'm Pramukh Kaveti <img src={hand_icon} className='w-6 md:w-12 drop-shadow-lg' /></h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[50px] font-Ovo text-gray-300 mb-2 font-bold'>Full Stack Developer</h1>
            <p className='max-w-2xl font-Ovo text-gray-400 mb-6'>Building amazing web experiences</p>
            <div className='flex flex-col sm:flex-row items-center gap-4'>
                <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>Contact me <img src={right_arrow_white} alt="" className='w-4' /></a>
                <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 bg-white text-black flex items-center gap-2'>my resume <img src={download_icon} alt="" className='w-4' /></a>
            </div>
        </div>

    )
}

export default Header