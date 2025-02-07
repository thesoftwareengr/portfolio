import React, { useState, useEffect, useRef } from 'react';
import C from '../assets/c.png';
import Java from '../assets/java.png';
import Javascript from '../assets/javascript.png';
import Python from '../assets/python.png';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Tailwind from '../assets/tailwind.png';
import Reactjs from '../assets/react.png';
import Nodejs from '../assets/nodejs.png';
import MongoDB from '../assets/mongodb.png';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  // Intersection Observer to trigger fade-in effect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div
      id="skills"
      ref={skillsRef} // Reference to observe when the section enters the viewport
      className={`bg-black text-gray-400 h-auto max-w-[1200px] mx-auto py-10 transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
      }`}
    >
      <h2 className='text-gray-400 text-4xl font-bold m-4 text-center mb-18'>
        Skills
      </h2>
      <div className='bg-black text-gray-400 h-auto max-w-[1200px] mx-auto py-10 grid grid-cols-5 gap-4'>
        <div className='flex flex-col items-center m-auto'>
          <img src={C} alt="C++" width={80} height={80} />
          <p className='mt-2'>C++</p>
        </div>

        <div className='flex flex-col items-center'>
          <img src={Java} alt="Java" width={80} height={80} />
          <p className='mt-2'>Java</p>
        </div>

        <div className='flex flex-col items-center'>
          <img src={Javascript} alt="Javascript" width={80} height={80} />
          <p className='mt-2'>Javascript</p>
        </div>

        <div className='flex flex-col items-center'>
          <img src={Python} alt="Python" width={80} height={80} />
          <p className='mt-2'>Python</p>
        </div>

        <div className='flex flex-col items-center'>
          <img src={HTML} alt="HTML" width={80} height={80} />
          <p className='mt-2'>HTML</p>
        </div>

        <div className='flex flex-col items-center'>
          <img src={CSS} alt="CSS" width={80} height={80} />
          <p className='mt-2'>CSS</p>
        </div>

        <div className='flex flex-col items-center'>
          <img src={Reactjs} alt="React" width={80} height={80} />
          <p className='mt-2'>React</p>
        </div>

        <div className='flex flex-col items-center'>
          <img src={Tailwind} alt="Tailwind" width={80} height={80} />
          <p className='mt-2'>Tailwind</p>
        </div>

        <div className='flex flex-col items-center'>
          <img src={Nodejs} alt="Nodejs" width={80} height={80} />
          <p className='mt-2'>Nodejs</p>
        </div>

        <div className='flex flex-col items-center'>
          <img src={MongoDB} alt="MongoDB" width={80} height={80} />
          <p className='mt-2'>MongoDB</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
