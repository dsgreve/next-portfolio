"use client";


import { Canvas, useThree } from '@react-three/fiber';
import Computer from './Computer';
import { Suspense } from 'react';
import { useProgress, Html, ScrollControls } from '@react-three/drei';

function Loader() {
  const { active, progress } = useProgress();
  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Scene() {
  return (
    <Canvas
      style={{ width: '800px', height: '600px' }}
      gl={{ antialias: true }}
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <directionalLight position={[-5, -5, 5]} intensity={5} />
      <Suspense fallback={<Loader /> }>
        <ScrollControls damping={0.1} pages={2}>
        <Computer />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
};

