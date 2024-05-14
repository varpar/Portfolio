"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className='md:hidden grid grid-cols-4 w-full text-xl z-[99999] border-b'>
      <h1 className='col-span-3 p-4 flex items-center'>Varun Parmar</h1>
      <div className='col-span-1 flex justify-center items-center'>
        <button className='p-4 flex items-center justify-center bg-black text-white text-center' onClick={toggleSidebar}>
          {showSidebar ? 'Close' : 'X'}
        </button>
        <div className={`fixed top-0 right-0 bottom-0 bg-black text-white z-[999] text-center w-64 transition-transform transform ${showSidebar ? 'translate-x-0' : 'translate-x-full'}`}>
          <p className='py-4'>About</p>
          <p className='py-4'>Stack</p>
          <p className='py-4'>Resume</p>
          <p className='py-4'>Projects</p>
          <button className="p-4 bg-gray-800 text-white" onClick={toggleSidebar}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;