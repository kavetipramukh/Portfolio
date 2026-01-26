import React from 'react'
import hero from '../assets/hero.jpeg'
import photo from '../assets/photo.png'
import { assets } from '../assets/assets.js'  
import { Github, Linkedin, ArrowUpRight, Copy } from "lucide-react";


const About = () => {

    const about = [
  { title: 'education', description: 'Computer Science Engineer' },
  { title: 'hobbies', description: 'Football | Photography | Travelling' },
  { title: 'location', description: 'Hyderabad, India' }
]

  return (
    <div id='about' className='w-full min-h-screen px-[12%] py-10 scroll-mt-20 bg-black text-white'>
        <div className='xl:hidden'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
        <h2 className='text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo'>About me</h2>
        </div>
        <div className='flex w-full flex-col lg:flex-row items-center gap-10 lg:gap-20 my-10 lg:my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                 <img src={photo} alt="user" className='w-full rounded-3xl'/>
            </div>
            <div className='flex-1'>
                    <div className='w-full max-w-[1000px] mx-auto'>
                        <div className='pb-10  xl:block hidden'>
                            <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
                            <h2 className='text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo'>About me</h2>
                        </div>
                      <div
                          className="
    grid grid-cols-1 md:grid-cols-3
    divide-y md:divide-y-0 md:divide-x
    divide-dashed divide-zinc-800
    border border-dashed border-zinc-800
  "
                      >
                          {about.map((item, index) => (
                              <div
                                  key={index}
                                  className="group hover:bg-zinc-900/20 transition-colors"
                              >
                                  {/* Title */}
                                  <div
                                      className="flex justify-center px-4 py-3 sm:px-6 lg:px-8 border-b border-dashed border-zinc-800"
                                  >
                                      <h3
                                          className="
            font-bold text-sm tracking-wide uppercase
            text-gray-400 group-hover:text-white
            transition-colors
          "
                                      >
                                          {item.title}
                                      </h3>
                                  </div>

                                  {/* Description */}
                                  <p className="text-white/80 text-xs sm:text-sm p-4 sm:p-6 lg:p-8">
                                      {item.description}
                                  </p>
                              </div>
                          ))}
                      </div>


                  <div
                      className="
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        divide-y sm:divide-y-0 sm:divide-x
        divide-dashed divide-zinc-800
        border border-dashed border-zinc-800 bg-zinc-900/10
      "
                  >
                      {/* GitHub */}
                      <a
                          href=""
                          target="_blank"
                          rel="noreferrer"
                          className="group p-3 sm:p-4 flex items-center justify-between hover:bg-zinc-800/50 border border-b-zinc-800 border-t-0 transition-colors"
                      >
                          <div className="flex items-center gap-3">
                              <Github
                                  className="
              w-4 h-4
              text-zinc-600 dark:text-zinc-400
              group-hover:text-black dark:group-hover:text-white
              transition-colors
            "
                              />
                              <span className="font-mono text-xs sm:text-sm font-medium text-zinc-400 group-hover:text-white">
                                  /GitHub
                              </span>
                          </div>

                          <ArrowUpRight
                              className="
            w-3 h-3
            text-zinc-400
            opacity-0 group-hover:opacity-100
            transition-all
          "
                          />
                      </a>

                      {/* LinkedIn */}
                      <a
                          href="https://www.linkedin.com/in/avijit-sen-69a00b1b9/"
                          target="_blank"
                          rel="noreferrer"
                          className="group p-3 sm:p-4 flex items-center justify-between hover:bg-zinc-800/50 border border-b-zinc-800 border-t-0 transition-colors"
                      >
                          <div className="flex items-center gap-3">
                              <Linkedin
                                  className="
              w-4 h-4
              text-zinc-600 dark:text-zinc-400
              group-hover:text-blue-600
              transition-colors
            "
                              />
                              <span className="font-mono text-xs sm:text-sm font-medium text-zinc-400 group-hover:text-white">
                                  /LinkedIn
                              </span>
                          </div>

                          <ArrowUpRight
                              className="
            w-3 h-3
            text-zinc-400
            opacity-0 group-hover:opacity-100
            transition-all
          "
                          />
                      </a>

                      {/* Copy Email */}
                      <button
                          type="button"
                          className="w-full text-left group p-3 sm:p-4 flex items-center justify-between hover:bg-zinc-800/50 transition-colors cursor-pointer"
                      >
                          <div className="flex items-center gap-3">
                              <Copy
                                  className="
              w-4 h-4
              text-zinc-600 dark:text-zinc-400
              group-hover:text-black dark:group-hover:text-white
              transition-colors
            "
                              />
                              <span className="font-mono text-xs sm:text-sm font-medium text-zinc-400 group-hover:text-white">
                                  /Copy Email
                              </span>
                          </div>
                      </button>
                  </div>

                </div>
  



                <div className='w-full max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-dashed divide-zinc-800 border border-dashed border-zinc-800 '>
                    {[
                        { title: 'Languages', skills: ['Python', 'JavaScript', 'HTML/CSS'] },
                        { title: 'Frameworks', skills: ['React', 'Node.js', 'Express', 'MySQL', 'Numpy', 'Pandas'] },
                        { title: 'Tools', skills: ['Git', 'VS Code', 'Framer/Gsap'] }
                    ].map((category, index) => (
                        <div key={index} className='p-4 sm:p-6 lg:p-6 hover:bg-zinc-900/20 transition-colors group'>
                            <div className='flex lg:flex-col xl:flex-row items-center gap-3 mb-6'>
                                <div className='p-2 rounded-md border border-gray-600 group-hover:border-gray-400 transition-colors'>
                                    <div className='w-4 h-4 rounded'>
                                        <img src="" alt="" />
                                    </div>
                                </div>
                                <h3 className='font-bold text-xs sm:text-sm tracking-wide uppercase text-gray-400 group-hover:text-white transition-colors'>{category.title}</h3>
                            </div>
                            <div className='flex flex-wrap gap-2'>
                                {category.skills.map((skill, i) => (
                                    <span key={i} className='px-1 py-1 text-xs sm:text-sm bg-zinc-950 border border-gray-800 rounded-sm text-white hover:border-white transition-colors cursor-default'>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                            
                            </div>
                        </div>
                
                </div>

                
                

  )
}

export default About