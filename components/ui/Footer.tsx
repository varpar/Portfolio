import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";



const Footer = () => {
  return (
    <>
    
    
    <div className="sm:flex hidden justify-between border-t border-t-1 border-black  mt-12 text-xl">
      <div className="grid items-center justify-center p-8 ">
        Socials
      </div>
      <div className="flex ">
        <div className="border-l-1 border-l border-black h-[100%] p-8 hover:bg-red-400 text-4xl">
        <FaLinkedinIn />
        </div>
        <div className="border-x-1 border-x border-black h-[100%] p-8 text-4xl">
        <FaGithub width={7}/> 
        </div>
        <div className=" border-black h-[100%] p-8 text-4xl"><BiLogoGmail /></div>
      </div>
    </div>


    <div className="grid sm:hidden grid-rows-2 text-center ">

        <div className="row-span-1 grid grid-cols-2 border-y border-black">
        <div className="justify-center items-center p-8 border-r grid border-black">
        Socials
      </div>
      <div className=" grid items-center justify-center text-4xl">
      <FaLinkedinIn  width={20}/>
      </div>
        </div>

        <div className="row-span-1 grid grid-cols-2">
        <div className=" p-8 grid items-center justify-center border-black border-r text-4xl">
        <FaGithub width={20}/> 
      </div>
      <div className="grid items-center justify-center text-4xl">
      <BiLogoGmail />

      </div>
        </div>

    </div>
    </>
  );
};

export default Footer;
