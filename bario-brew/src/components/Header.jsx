import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className='flex justify-between items-center h-[157px] w-full border-2 p-20 border-none'>
      <div className='flex justify-center items-center gap-30'>
        <img src={logo} alt="Bario Brew Logo" />
        <div className='flex gap-10'>
            <span className='cursor-pointer'>SHOP</span>
            <span className='cursor-pointer'>ABOUT US</span>
            <span className='cursor-pointer'>LOCATION</span>
        </div>
      </div>
       
        <div className='flex gap-10 justify-center items-center'>
            <button className='cursor-pointer text-white px-4 py-2 rounded-[29px]' style={{ backgroundColor: '#013220' }}>SIGN IN</button>
            <FaShoppingCart className='cursor-pointer' size={24} color="black" />
            <FaRegUserCircle className='cursor-pointer' size={24} style={{ color: '#013220' }} />
        </div>
    </header>
  )
}

export default Header