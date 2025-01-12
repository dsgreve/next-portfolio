"use client";

import React from 'react';
import dynamic from 'next/dynamic';
const Scene = dynamic(() => import('./Scene'), { ssr: false });


const Hero = () => {
  return (
    <div className="container relative">
      <div className="flex flex-col md:flex-row justify-center items-center h-full">
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-6xl font-bold text-copy">Frontend Developer focused on building  exceptional and accessible products.</h1>
        </div>
        <div className="hidden md:block md:w-1/2">
          <Scene />
        </div>
      </div>
      <div className="">
        <h2 className="font-serif text-6xl md:text-8xl no-wrap text-center leading-tight font-black text-copy uppercase ">Building Great Experiences</h2>
      </div>
    </div>
  );
};

export default Hero;