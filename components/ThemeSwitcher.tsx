import { useState, useEffect } from 'react';
import IconMoon from './ui/IconMoon';
import IconSun from './ui/IconSun';
const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme} className="theme-switcher">
      {theme === 'light' ? <IconMoon /> : <IconSun />}
    </button>
  );
};

export default ThemeSwitcher;