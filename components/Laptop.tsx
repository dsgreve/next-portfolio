"use client";
import React, { useRef } from "react";
import { useGLTF } from '@react-three/drei';
import { Group } from 'three';

useGLTF.preload('/laptop.glb');

export default function Laptop() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF('/laptop.glb');

  return (
    <group ref={group} position={[0, -1, 0]} rotation={[Math.PI / 4,0, 0]}>
      <primitive object={scene} />
    </group>
  );
}