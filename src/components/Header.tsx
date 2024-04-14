import React, { useRef, useEffect, useState } from 'react';
import iconMoon from '../images/icon-moon.svg';
import iconSun from '../images/icon-sun.svg';

const Header = () => {
  // State to manage the current icon (moon or sun)
  const [icon, setIcon] = useState(iconMoon);
  // Ref to access the root element
  const rootRef = useRef<HTMLElement>();

  useEffect(() => {
    // Assign the root element to the ref
    rootRef.current = document.documentElement;
    // Get theme from local storage
    const theme = localStorage.getItem('theme');
    if (theme === null) return;

    // Set the theme based on the value retrieved from local storage
    if (theme === 'dark') {
      rootRef.current.classList.add('dark');
      setIcon(iconSun);
    }
  }, []);

  useEffect(() => {
    // Update local storage when icon changes
    localStorage.setItem('theme', icon === iconMoon ? 'light' : 'dark');
  }, [icon]);

  // Function to toggle between light and dark theme
  const handleClickTheme = () => {
    const root = rootRef.current;
    if (root) {
      const isDark = root.classList.contains('dark');
      setIcon(isDark ? iconMoon : iconSun);
      root.classList.toggle('dark');
    }
  };

  return (
    <header className="flex items-baseline justify-between">
      {/* Title */}
      <h1 className="text-3xl font-bold uppercase tracking-[10px] text-white lg:text-4xl">OUADB TECH TODO</h1>
      {/* Button to toggle theme */}
      <button onClick={handleClickTheme}>
        <img src={icon} alt="change to moon theme" />
      </button>
    </header>
  );
};

export default Header;
