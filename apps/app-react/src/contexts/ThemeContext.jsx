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
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
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
    
    // Remove all theme classes
    root.classList.remove('light', 'dark');
    
    // Add the current theme class
    root.classList.add(theme);
    
    // Set data attribute for additional CSS targeting
    root.setAttribute('data-theme', theme);
    
    // Force immediate style application
    root.style.setProperty('--theme-applied', theme);
    
    console.log('Initial theme applied. Document classes:', root.classList.toString());
    
    // Check if styles are actually applied
    setTimeout(() => {
      const bodyStyles = getComputedStyle(document.body);
      console.log('Initial body styles:', {
        backgroundColor: bodyStyles.backgroundColor,
        color: bodyStyles.color
      });
      
      // Update visual indicator
      const indicator = document.getElementById('theme-indicator');
      if (indicator) {
        indicator.textContent = theme.toUpperCase();
        indicator.style.backgroundColor = theme === 'dark' ? '#60a5fa' : '#3b82f6';
      }
      
      // Force re-render if needed
      if (bodyStyles.backgroundColor === 'rgba(0, 0, 0, 0)' || bodyStyles.backgroundColor === 'transparent') {
        console.log('Forcing theme re-application...');
        root.classList.remove(theme);
        setTimeout(() => {
          root.classList.add(theme);
        }, 10);
      }
    }, 100);
  }, []); // Run only once on mount

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('light', 'dark');
    
    // Add the current theme class
    root.classList.add(theme);
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
    
    // Set data attribute for additional CSS targeting
    root.setAttribute('data-theme', theme);
    
    // Debug log
    console.log('Theme changed to:', theme);
    console.log('Document classes:', root.classList.toString());
    
    // Check CSS variables
    const bgColor = getComputedStyle(root).getPropertyValue('--bg-color');
    const textColor = getComputedStyle(root).getPropertyValue('--text-color');
    const background = getComputedStyle(root).getPropertyValue('--background');
    const foreground = getComputedStyle(root).getPropertyValue('--foreground');
    console.log('CSS variables:', { bgColor, textColor, background, foreground });
    
    // Check if dark mode is actually working
    const bodyStyles = getComputedStyle(document.body);
    console.log('Body styles:', {
      backgroundColor: bodyStyles.backgroundColor,
      color: bodyStyles.color
    });
    
    // Update visual indicator
    const indicator = document.getElementById('theme-indicator');
    if (indicator) {
      indicator.textContent = theme.toUpperCase();
      indicator.style.backgroundColor = theme === 'dark' ? '#60a5fa' : '#3b82f6';
    }
    
    // Force a style recalculation
    root.style.display = 'none';
    root.offsetHeight; // Trigger reflow
    root.style.display = '';
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
