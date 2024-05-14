"use client"
import React, { useState } from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import Image from "next/image";

import Stack from "@/components/ui/Stack";
import { Projects } from "@/components/ui/Projects";
import About from "@/components/ui/About";
import Footer from "@/components/ui/Footer";
import Resume from "@/components/ui/Resume";
 


const page = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }
  return (
    <>
    <BackgroundGradientAnimation className="h-[1px]">
        
        
    


      <div className="md:h-screen z-[999] inset-0 flex  text-black  md:p-12  md:mt-6   text-4xl md:text-4xl lg:text-7xl font-light flex-col justify-between">
        {/* <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          Hello, there <br /> I'm Varun
        </p> */}
        <div className='md:hidden grid grid-cols-4 w-full text-xl z-[99999] border-b '>
      <h1 className='col-span-3 p-4 flex items-center'>Varun Parmar</h1>
      <div className='col-span-1 flex justify-center items-center bg-black'>
        <button className='p-4 flex items-center justify-center w-full text-white text-center' onClick={toggleSidebar}>
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

    
        <div className="flex text-left z-[9999] lg:text-9xl md:text-7xl text-6xl flex-col sm:w-[60%] pt-12 p-2 w-full">
          <p className=" ">Full-Stack </p>
          <p className="text-right">Developer</p>
          <p className="lg:text-3xl md:text-xl text-lg text-right mr-2 text-gray-700">(based in jaipur)</p>
          </div>

        <div className="justify-end place-items-end md:flex hidden z-[9999]  mb-20   ">
          <div className="lg:text-3xl md:text-xl text-lg z-[9999] w-fit flex flex-col text-gray-500">
            <p className=" text-black">Jump To</p>
            <p className="hover:text-red-600 hover:underline underline-offset-2 z-[999]">About</p>
            <p className="hover:text-violet-600 hover:underline underline-offset-2">Projects</p>
            <p className="hover:text-yellow-500 hover:underline underline-offset-2">Get in Touch</p>
          </div>
        </div>
        </div>
       

          <About />
        <Stack   />
        <Resume />  
          <Projects />
          <Footer />
          
    </BackgroundGradientAnimation>


    </>
  );
}

export default page;