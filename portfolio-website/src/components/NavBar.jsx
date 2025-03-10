import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll'; // Importing Link from react-scroll

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    const menuItems = [
        { label: 'About', href: 'about' },  
        { label: 'Skills', href: 'skills' },
        { label: 'Education', href: 'education' },
        { label: 'Experience', href: 'experience' },
        { label: 'Contact', href: 'contact' }
    ];

    return (
        <div className='bg-black text-white h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>
            <h1 className='text-4xl font-bold primary-color ml-4'>PJ</h1>

            {/* Desktop Navigation */}
            <ul className='hidden text-gray-400 md:flex'>
                {menuItems.map((item, index) => (
                    <li key={index} className='p-6 hover:bg-gray-200'>
                        <Link 
                            to={item.href} 
                            smooth={true} 
                            duration={1000} 
                            offset={-50} 
                            className="cursor-pointer"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Navigation */}
            <div onClick={handleNav} className='block md:hidden mr-6' aria-label="Toggle navigation">
                {nav ? <AiOutlineClose size={20} aria-label="Close menu"/> : <AiOutlineMenu size={20} aria-label="Open menu"/>}
            </div>

            {/* Mobile Dropdown Menu */}
            <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500 transform translate-x-0' : 'fixed left-[-100%] ease-in-out duration-500'}>
                <h1 className='text-4xl primary-color m-4'>PJ</h1>
                <ul className='p-8 text-white text-2xl'>
                    {menuItems.map((item, index) => (
                        <li key={index} className='p-2'>
                            <Link 
                                to={item.href} 
                                smooth={true} 
                                duration={1000} 
                                offset={-50} 
                                className="cursor-pointer"
                                onClick={handleNav} 
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
