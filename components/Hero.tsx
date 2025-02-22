"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
const Scene = dynamic(() => import('./Scene'), { ssr: false });

const animateIntro = "Welcome!";
const Hero = () => {
  return (
    <div className="container relative max-w-[1200px]">
      <div className="flex flex-col md:flex-row justify-center items-center h-full">
        <div className="md:w-1/2">
          <TextGenerateEffect words={animateIntro} />
          <h1 className="text-2xl md:text-4xl xl:text-4xl text-center md:text-left font-semibold md:font-medium text-copy">I&apos;m <span className="text-gradient bg-gradient-text font-semibold">Dale Greve</span>, a Web Developer based in the metro Detroit region. I focus on creating clean, accessible, well-crafted interfaces.</h1>
        </div>
        <div className="md:w-1/2">
          <Scene />
        </div>
      </div>
    </div>
  );
};

export default Hero;