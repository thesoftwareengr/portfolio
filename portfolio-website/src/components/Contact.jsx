import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
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
    id='contact'
    ref={aboutRef} 
    className={`bg-black text-white max-w-[1200px] mx-auto transition-all duration-1000 ease-in-out ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
    }`} >
      <div className='text-center'>
        <h2 className='text-4xl font-bold leading-tight primary-color'>Contact Me</h2>
      </div>

      <div className='max-w-[800px] mx-auto'>
        <div className='mt-6 bg-[#161616] rounded-xl'>
          <div className='p-10'>
            <form action="https://getform.io/f/brookvda" method='POST'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                
                {/* Name Input */}
                <div>
                  <div className='mt-2.5'>
                    <input 
                      type="text" 
                      name='name' // Added meaningful name
                      id='name' // Added meaningful id
                      placeholder='Your Name'
                      className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                        border-gray-700 rounded-md focus:outline-none focus:border-pink-600' />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <div className='mt-2.5'>
                    <input 
                      type="email" 
                      name='email' // Added meaningful name
                      id='email' // Added meaningful id
                      placeholder='Your Email' 
                      className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                        border-gray-700 rounded-md focus:outline-none focus:border-pink-600' />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className='sm:col-span-2'> {/* Fixed class name */}
                  <div className='mt-2.5'>
                    <textarea 
                      name='message' // Added meaningful name
                      id='message' // Added meaningful id
                      placeholder='Your Message' // Corrected placeholder text
                      className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                        border-gray-700 rounded-md focus:outline-none focus:border-pink-600' 
                      rows={4}></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div className='sm:col-span-2'> 
                  <button 
                    type='submit'
                    className='text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md'>
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
