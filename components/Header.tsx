"use client";

import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import useScrollDirection from '@/lib/scroll-direction';
import StickyCursor from './ui/StickyCursor';
const Header = () => {
  const scrollDirection = useScrollDirection();
  
  return (
    <header className="sticky top-0 z-10 flex justify-between py-4 w-full">
      <div className={`nav-logo flex font-serif font-medium text-copy ${scrollDirection === 'down' ? 'nav-logo_scroll-down' : 'nav-logo_scroll-up'} `}><div className="nav-logo__text">&#x7B; <span className="nav-logo_d">D</span><span className="nav-logo_compact">ale</span> <span className="nav-logo_s">S</span><span className="nav-logo_compact">.</span> <span className="nav-logo_g">G</span><span className="nav-logo_compact">reve</span> <span className="nav-logo_right-brace">&#x7D;</span></div><div className="nav-logo__bg"></div></div>
      {/* <nav><ul className="flex"><li>Work</li><li>Writing</li></ul></nav> */}
      <ThemeSwitcher />
      <StickyCursor />
    </header>
  )
}
 
export default Header