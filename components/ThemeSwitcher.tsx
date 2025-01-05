import { useState, useEffect } from 'react';
import IconMoon from './ui/IconMoon';
import IconLight from './ui/IconLight';
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
      {theme === 'light' ? <IconMoon /> : <IconLight />}
    </button>
  );
};

export default ThemeSwitcher;