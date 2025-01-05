"use client";

import React from 'react';
import dynamic from 'next/dynamic';
const Scene = dynamic(() => import('./Scene'), { ssr: false });


const Hero = () => {
  return (
    <div className="container h-svh">
      <div className="flex justify-center items-center">
        <div>
          <h1 className="text-5xl font-medium text-copy">Web developer delivering digital products that engage. From concept to launch.</h1>
        </div>
        <Scene />
      </div>
      <div className="flex justify-center">
        <h2 className="font-serif text-8xl leading-tight font-black text-copy uppercase">Make The Web A Better Place</h2>
      </div>
    </div>
  );
};

export default Hero;