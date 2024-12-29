"use client";

import { useAnimations, useGLTF, useScroll } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

useGLTF.preload('/robot_playground.glb');

export default function Computer() {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF('/robot_playground.glb');

  const { actions, clips} = useAnimations(animations, scene);
  const scroll = useScroll();
  useEffect(() => {
    console.log(actions);
    //@ts-ignore
  actions["Experiment"].play().paused = true;
  }, [])
  useFrame(
    () =>
      //@ts-ignore
      actions["Experiment"].time =
      //@ts-ignore
      (actions["Experiment"].getClip().duration * scroll.offset / 8)
  )
  

  return (
    <group>
      <primitive object={scene} />
    </group>
  );
}