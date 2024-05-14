"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (

<div className="h-fit mb-20">

<h1 className="text-5xl md:text-6xl lg:text-7xl  font-normal  md:text-center  mb-6 underline underline-offset-2 decoration-violet-500 md:w-full w-[95%] mx-auto flex flex-col ">Projects</h1>
{/* <p className="text-center mb-6">Recent Web Deleopment and ML projects</p> */}
    <div className="md:w-full w-[95%] h-[95vh]  grid grid-cols-1 sm:grid-cols-2 z-[9999] md:px-8 mx-auto gap-4 relative">
        
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative ",
              selected?.id === card.id
                ? " cursor-pointer absolute inset-0 h-[70%] w-full md:w-1/2 m-auto z-50 flex justify-center items-center rounded-md flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white  h-full w-full"
                : "bg-white  rounded-md h-full w-full"
            )}
            layout
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <BlurImage card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 rounded-md top-0  bg-white  opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.5 : 0 }}

      />
    </div>
    </div>
  );
};

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      src={card.thumbnail}
      height="500"
      width="500"
      onLoad={() => setLoaded(true)}
      className={cn(
        "object-cover object-top absolute inset-0 rounded-md h-full w-full transition duration-200",
        loaded ? "blur-none" : "blur-md"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full  flex  flex-col justify-end rounded-md shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full  rounded-md bg-black opacity-60 z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 w-full rounded-md z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
