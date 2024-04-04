import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const NavBar = () => {
    const [nav, setNav ] =useState(false)

    const handleNav = () => {
        setNav(!nav)
    }


  return (
    <div className=' text-gray-300 flex justify-between items-center max-w-[1240px] mx-auto mt-[1rem] h-16 px-4 text-1'>
      <h1 className=' w-full text-3xl font-bold primary-color ml-4'>TS</h1>
      <ul className=' hidden md:flex'>
        <li className=' p-2'>Home</li>
        <li className=' p-2'>About</li>
        <li className=' p-2'>Music</li>
        <li className=' p-2'>Ministry</li>
        <li className=' p-2'>Contact</li>
      </ul>

      <div onClick={handleNav} className=' block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>

      <div className={nav ? 
        'text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500' : `fixed left-[-100%]`}>
          <h1 className=' text-3xl primary-color m-4'>TS</h1>
          <ul className='p-8 text-2xl'>
            <li className=' p-2'>Home</li>
            <li className=' p-2'>About</li>
            <li className=' p-2'>Music</li>
            <li className=' p-2'>Ministry</li>
            <li className=' p-2'>Contact</li>
          </ul>
      </div>
    </div>
  )
}

export default NavBar
