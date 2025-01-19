import React, {useEffect} from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion'
function StickyCursor() {

  const cursorSize = 20;
  const mousePosition = {
    x:useMotionValue(0),
    y:useMotionValue(0)
  }

  const smoothOptions = {damping: 20, stiffness: 300, mass: 0.5}
  const smoothMouse= {
    x: useSpring(mousePosition.x, smoothOptions),
    y: useSpring(mousePosition.y, smoothOptions),
  } 
  const manageMouseMove = (e: { clientX: any; clientY: any; }) => {
    const { clientX, clientY } = e;
    mousePosition.x.set(clientX - cursorSize / 2);
    mousePosition.y.set(clientY - cursorSize / 2);
  }

  useEffect (() => {
    window.addEventListener("mousemove", manageMouseMove)
    return () => {window.removeEventListener("mousemove", manageMouseMove)}
  })
  
  return (
    <motion.div 
      className="sticky-cursor  border flex justify-center items-center"
      style={{left: smoothMouse.x, top: smoothMouse.y}}
    ><div className="sticky-cursor__inner bg-contrast"></div></motion.div>
  )
}

export default StickyCursor