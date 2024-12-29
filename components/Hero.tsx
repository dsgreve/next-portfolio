"use client";

import React from 'react';
import dynamic from 'next/dynamic';
const Scene = dynamic(() => import('./Scene'), { ssr: false });


const Hero = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <div>
        <h1 className="text-8xl font-bold text-copy">Dale S. Greve</h1>
        <h2 className=" text-copy text-6xl font-bold">Building a better web</h2>
      </div>

      <Scene />
    </div>
  );
};

export default Hero;