"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";

export function Projects() {
  return (
    <div className="min-h-screen  w-full">

      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div className="py-4">
      <p className="font-bold text-4xl text-white">Memories</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200 mb-8">
        Memories is a cloud based journaling website which let's you journal on the go.
      </p>
      <a href="https:\\memories4you.vercel.app" className="text-white bg-black border border-black p-4 px-6 my-4 rounded-md" target="_blank">Live Demo</a>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className="py-4">
      <p className="font-bold text-4xl text-white">ANN vs CNN study</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200 mb-8">
        A neural network study i did for my Machine Learning course on the CIFAR-10 dataset
      </p>
      <a href="https:\\memories4you.vercel.apphttps://colab.research.google.com/drive/1ttP5ZU-1U0tKMnpG4oYQz45z3NjDWIFn#scrollTo=PoCC8dDyN9kD" className="text-white bg-black border border-black p-4 px-6 my-4 rounded-md" target="_blank">Live Demo</a>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div className="py-4">
      <p className="font-bold text-4xl text-white">E-commerce Website</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200 mb-8">
        An ecommerce website project i did for my client. Fully functional and live with 16+ products.
      </p>
      <a href="https://divinefemmespiritualwellbeing.myshopify.com/" className="text-white bg-black border border-black p-4 px-6 my-4 rounded-md" target="_blank">Live Demo</a>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div className="py-4">
      <p className="font-bold text-4xl text-white">emote.io</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200 mb-8">
       Computer Vision project for emotion detection using the Face expression recognition dataset
with over 35,000 images with openCV.
      </p>
      <a href="https://github.com/tripleschezwanrice/Emote.io.git" className="text-white bg-black border border-black p-4 px-6 my-4 rounded-md" target="_blank">Repository</a>
    </div>
  );
};

const cards = [
    {
      id: 2,
      content: <SkeletonFour />,
      className: "sm:col-span-1",
      thumbnail:
        "/happiiee.png",
    },
    {
        id: 3,
        content: <SkeletonTwo />,
        className: "col-span-1",
        thumbnail:
        "/memoriess-2.png",
    },
    {
      id: 1,
      content: <SkeletonOne />,
      className: "sm:col-span-1",
      thumbnail:
        "/memoriess-1.png",
    },
  {
    id: 4,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
    "/memoriess.png",
  },
];
