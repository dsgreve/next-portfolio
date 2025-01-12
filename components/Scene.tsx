"use client";

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useProgress, Html, ScrollControls, OrbitControls } from '@react-three/drei';
import Laptop from './Laptop';

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Scene() {
  return (
    <Canvas
      style={{ width: '100%', height: '500px' }}
      gl={{ antialias: true }}
      dpr={[1, 2]}
      camera={{ position: [2, 2, 13], fov: 20 }}
    >
      <directionalLight position={[-5, -5, 5]} intensity={8} />
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={0.1} pages={0}>
          <Laptop />
        </ScrollControls>
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}