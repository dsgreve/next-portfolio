"use client";

import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'

const Header = () => {
  return (
    <header className="container fixed z-10 inset-auto flex justify-between py-4">
      <div className="nav_logo text-5xl font-semibold text-copy">Dale S. Greve</div>
      <nav><ul className="flex"><li>Work</li><li>Writing</li></ul></nav>
      <ThemeSwitcher />
    </header>
  )
}

export default Header