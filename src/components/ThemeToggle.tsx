import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full liquid-glass hover:scale-110 transition-transform flex items-center justify-center group"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-brand-primary group-hover:rotate-45 transition-transform duration-500" />
      ) : (
        <Moon className="w-5 h-5 text-brand-secondary group-hover:-rotate-12 transition-transform duration-500" />
      )}
    </button>
  );
}
