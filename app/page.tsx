"use client";
import React, { useEffect, useState } from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import Stack from "@/components/ui/Stack";
import { Projects } from "@/components/ui/Projects";
import About from "@/components/ui/About";
import Footer from "@/components/ui/Footer";
import Resume from "@/components/ui/Resume";

const Page = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      event.preventDefault();
      const targetId = (event.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (targetId) {
        document.querySelector(targetId)?.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick as EventListener);
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick as EventListener);
      });
    };
  }, []);

  return (
    <>
      <BackgroundGradientAnimation className="h-[1px] !scroll-smooth">
        <div className="Navbar md:h-screen z-[999] inset-0 flex text-black md:p-12 md:mt-6 text-4xl md:text-4xl lg:text-7xl font-light flex-col justify-between">
          <div className="md:hidden grid grid-cols-4 w-full text-xl fixed top-0 right-0 z-[99999999] border-b">
            <h1 className="col-span-3 p-4 flex items-center z-[99999999999] bg-white">Varun Parmar</h1>
            <div className="col-span-1 flex justify-center items-center bg-black">
              <button
                className="p-4 flex items-center justify-center w-full z-[9999999] text-white text-center"
                onClick={toggleSidebar}
              >
                {showSidebar ? "Close" : "X"}
              </button>
              <div
                className={`fixed top-0 left-0 right-0 mt-[60px] bg-black text-white z-[9999998] text-center transition-transform transform ${
                  showSidebar ? "translate-y-0" : "-translate-y-full"
                }`}
              >
                <a href="#about" className="py-4 block">
                  About
                </a>
                <a href="#stack" className="py-4 block">
                  Stack
                </a>
                <a href="#resume" className="py-4 block">
                  Resume
                </a>
                <a href="#projects" className="py-4 block">
                  Projects
                </a>
                <button
                  className="p-4 bg-gray-800 text-white"
                  onClick={toggleSidebar}
                >
                  Close
                </button>
              </div>
            </div>
          </div>

          <div className="flex text-left z-[99] lg:text-9xl md:text-7xl text-6xl flex-col sm:w-[60%] pt-12 p-2 w-full">
            <p className="lg:text-3xl md:text-xl text-lg text-left mr-2 text-gray-700 md:flex hidden">
              Varun Parmar
            </p>
            <p className="md:mt-0 mt-16">Full-Stack</p>
            <p className="text-right">Developer</p>
            <p className="lg:text-3xl md:text-xl text-lg text-right mr-2 text-gray-700">
              (based in jaipur)
            </p>
          </div>

          <div className="justify-end place-items-end md:flex hidden z-[99] mb-20">
            <div className="lg:text-3xl md:text-xl text-lg z-[9999] w-fit flex flex-col text-gray-500">
              <p className="text-black">Jump To</p>
              <a href="#about" className="hover:text-red-600 hover:underline underline-offset-2">
                About
              </a>
              <a href="#stack" className="hover:text-violet-600 hover:underline underline-offset-2">
                Stack
              </a>
              <a href="#resume" className="hover:text-yellow-500 hover:underline underline-offset-2">
                Resume
              </a>
              <a href="#projects" className="hover:text-green-500 hover:underline underline-offset-2">
                Projects
              </a>
            </div>
          </div>
        </div>

        <div id="about">
          <About />
        </div>
        <div id="stack">
          <Stack />
        </div>
        <div id="resume">
          <Resume />
        </div>
        <div id="projects">
          <Projects />
        </div>

        <Footer />
      </BackgroundGradientAnimation>
    </>
  );
};

export default Page;
