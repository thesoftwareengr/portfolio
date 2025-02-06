import React from 'react'
import C from '../assets/c.png'
import Java from '../assets/java.png'
import Javascript from '../assets/javascript.png'
import Python from '../assets/python.png'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Tailwind from '../assets/tailwind.png'
import Reactjs from '../assets/react.png'
import Nodejs from '../assets/nodejs.png'
import MongoDB from '../assets/mongodb.png'

const skills = () => {
  return (
    <div className='bg-black 300 text-gray-400 mid:h-[250px] max-w-[1200px] mx-auto grid grid-cols-3
                    place-items-center md:flex md:justify-between md:items:center'>

      <h2 className='text-gray-600 text-4xl md:text-4xl font-bold m-4'>
        Skills
      </h2>

      <div className='flex flex-col items-center m-5 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={C} alt="C++" width={100} height={100} />
      </div>

      <div className='flex flex-col items-center m-5 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={Java} alt="Java" width={80} height={80}/>
      </div>

      <div className='flex flex-col items-center m-5 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={Javascript} alt="Javascript"width={80} height={80}/>
      </div>

      <div className='flex flex-col items-center m-5 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={Python} alt="Python" width={80} height={80}/>
      </div>

      <div className='flex flex-col items-center m-5 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={HTML} alt="HTML" width={80} height={80}/>
      </div>

      <div className='flex flex-col items-center m-5 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={CSS} alt="CSS" width={80} height={80}/>
      </div>

      <div className='flex flex-col items-center m-5 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={Reactjs} alt="React" width={80} height={80}/>
      </div>

      <div className='flex flex-col items-center m-5 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={Tailwind} alt="Tailwind" width={80} height={80}/>
      </div>

      <div className='flex flex-col items-center m-5 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={Nodejs} alt="Nodejs" width={80} height={80}/>
      </div>

      <div className='flex flex-col items-center m-5 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={MongoDB} alt="MongoDB" width={80} height={80}/>
      </div>




    </div>
  )
}

export default skills