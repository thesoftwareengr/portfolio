import React from 'react'

const About = () => {
  return (
    <div className='bg-black text-white max-w-[1200px] mx-auto my-12' id='about'>
        <div className='md:grid md:grid-cols-2 sm:py-16'>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0'>
                <div className='my-auto mx-6'>
                    <div>
                    <h1 className='text-center text-5xl font-bold mb-4 primary-color t'>About Me</h1>
                    </div>
                    <div>
                        <h2 className='text-4xl font-bold mb-4 primary-color'>Education</h2>
                        <p className='text-base lg:text-lg'>
                          I graduated with a course of Bachelor of Science in Computer Engineering at 
                          Silliman University last May 2023.
                        </p>
                    </div>

                </div>
                

            </div>

        </div>
    </div>
  )
}

export default About