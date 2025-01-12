"use client";

import React from 'react';
import dynamic from 'next/dynamic';
const Scene = dynamic(() => import('./Scene'), { ssr: false });


const Hero = () => {
  return (
    <div className="container h-svh relative">
      <div className="flex justify-center items-center h-full">
        <div className="w-1/2">
          <h1 className="text-6xl font-bold text-copy">Frontend Web Developer focused on building  exceptional and accessible products.</h1>
        </div>
        <div className="w-1/2">
          <Scene />
        </div>
      </div>
      <div className="absolute bottom-[-140px]">
        <h2 className="font-serif text-8xl no-wrap text-center leading-tight font-black text-copy uppercase ">Building Great Experiences</h2>
      </div>
    </div>
  );
};

export default Hero;