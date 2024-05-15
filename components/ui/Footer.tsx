import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";



const Footer = () => {
  return (
    <>
    
    
    <div className="sm:flex hidden justify-between border-t border-t-1 border-black  mt-12 text-xl">
      <div className="grid items-center justify-center p-8 md:text-4xl sm:text-3xl text-2xl">
        Socials
      </div>
      <div className="flex ">
      <a href="https://www.linkedin.com/in/parmar-varun/" target ="_blank" className="hover:bg-blue-400 duration-200 p-8 grid items-center justify-center text-4xl border-l border-black">
      <FaLinkedinIn  width={20}/>
      </a>
        <a href="https://github.com/tripleschezwanrice" target= "_blank" className="hover:bg-green-400 duration-200 border-x-1 border-x border-black h-[100%] p-8 text-4xl">
        <FaGithub width={7}/> 

         </a>
        <a className="border-black h-[100%] p-8 text-4xl hover:bg-red-500 duration-200" href="mailto:varunparmarwork@gmail.com"
        ><BiLogoGmail /></a>
      </div>
    </div>


    <div className="grid sm:hidden grid-rows-2 text-center ">

        <div className="row-span-1 grid grid-cols-2 border-y border-black">
        <div className="justify-center items-center p-8 border-r grid text-xl border-black">
        Socials
      </div>
      <a href="https://www.linkedin.com/in/parmar-varun/" target ="_blank" className="hover:bg-blue-400 duration-200 duration-400 p-8 grid items-center justify-center text-4xl">
      <FaLinkedinIn  width={20}/>
      </a>
        </div>

        <div className="row-span-1 grid grid-cols-2">
        <a href="https://github.com/tripleschezwanrice" target= "_blank" className="hover:bg-green-400 duration-200 border-x-1 border-x border-black h-[100%] p-8 text-4xl  grid justify-center items-center  ">
        <FaGithub width={7}/> 
        </a>
        <a className="border-black h-[100%] p-8  grid justify-center items-center    text-4xl hover:bg-red-500 duration-200" href="mailto:varunparmarwork@gmail.com" 
        ><BiLogoGmail /></a>
        </div>

    </div>
    </>
  );
};

export default Footer;
