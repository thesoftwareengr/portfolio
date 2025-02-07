import React, { useState, useEffect, useRef } from 'react';
import AboutMe from '../assets/aboutme3.jpeg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div
      id="about"
      ref={aboutRef} 
      className={`bg-black text-white max-w-[1200px] mx-auto transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
      }`}
    >
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
          <div className="my-auto mx-6">
            <h1 className="text-center text-4xl font-bold mb-4 primary-color md:text-center" >
              About Me
            </h1>
            <p className="text-base lg:text-lg mb-4">
            A passionate Software Engineer turning innovative ideas into powerful, user-friendly applications. 
            With expertise in full-stack development and a drive to solve complex problems, 
            I thrive on building scalable and efficient software. Let’s create something amazing together—because code is my craft, 
            and innovation is my passion!
            </p>
            <h1 className="text-center text-4xl font-bold mb-4 mt-6 primary-color md:text-center" id='education'>
              Education
            </h1>
            <p className="text-base lg:text-lg mb-4">
              I graduated from Silliman University with a Bachelor's degree in
              Computer Engineering in May 2023. Throughout my studies, I developed a strong
              foundation in both hardware and software engineering.
            </p>
            <p className="text-base lg:text-lg mb-2">
              I was honored to be named a Dean's List Awardee during my academic career.
            </p>
            <h2 className="text-4xl font-bold mt-6 mb-4 primary-color" id='experience'>
              Work Experience
            </h2>
            <div className="text-base lg:text-lg mb-4">
              <p className="text-2xl font-bold">Assistant Research and Development Engineer</p>
              <p className="mb-6">Advanced World Solutions (2023-Present)</p>
              <p className="text-2xl font-bold">Software Engineer Intern</p>
              <p>Globiq BV Philippines Inc. (2022)</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="rounded-3xl py-8 md:py-0"
            src={AboutMe}
            alt="AboutMe"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
