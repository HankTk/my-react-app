import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      console.log('Theme loaded from localStorage:', savedTheme);
      return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      console.log('Theme set to dark based on system preference');
      return 'dark';
    }
    
    console.log('Theme set to light (default)');
    return 'light';
  });

  // Initial effect to apply theme immediately
  useEffect(() => {
    console.log('ThemeProvider mounted with theme:', theme);
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    console.log('Initial theme applied. Document classes:', root.classList.toString());
  }, []); // Run only once on mount

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
    
    // Debug log
    console.log('Theme changed to:', theme);
    console.log('Document classes:', root.classList.toString());
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
