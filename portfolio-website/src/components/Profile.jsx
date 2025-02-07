import React from 'react';
import profilePic from '../assets/profile.jpeg';
import { TypeAnimation } from 'react-type-animation'; 

const Profile = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[90vh] mx-auto py-8 bg-black'>
      <div className='my-auto mx-auto'>
        <div className='w-[300px] h-auto lg:w-[280px]'>
          <img src={profilePic} alt='profilePic' />
        </div>
      </div>

      <div className='col-span-2 px-5 my-auto'>
        <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
          <span className=''>I'm a</span> <br />
          <TypeAnimation className='primary-color'
            sequence={[
              "Software Engr",
              1000,
              "Backend Dev",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <p className='text-white sm:text-lg my-6 lg:text-xl'>
            My name is AL PJ B. Baroro. I have 3 years of experience as a software engineer.    
        </p>

        <div className='my-8'>
            <a href="/" className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white'>
            Download CV
            </a>
            <a href="/" className='px-6 py-3 w-full rounded-xl mr-4 
            border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500
            text-white hover:border-none'>
            Contact    
            </a>

        </div>
      </div>
    </div>
  );
};

export default Profile;
