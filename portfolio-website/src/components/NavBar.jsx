import React, {useState} from "react"
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }


    return(
        <div className='bg-black text-gray-400 h-[100px]'>
            <h1>Hi There</h1>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}

            </div>
        </div>
    )
}

export default NavBar;
