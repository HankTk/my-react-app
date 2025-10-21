import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './SettingsDrawer.css';

const SettingsDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, isDark } = useTheme();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Settings Button */}
      <button 
        className="settings-trigger"
        onClick={toggleDrawer}
        aria-label="Open settings"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="settings-overlay"
          onClick={toggleDrawer}
        />
      )}

      {/* Drawer */}
      <div className={`settings-drawer ${isOpen ? 'open' : ''}`}>
        <div className="settings-header">
          <h3>Settings</h3>
          <button 
            className="settings-close"
            onClick={toggleDrawer}
            aria-label="Close settings"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="settings-content">
          <div className="settings-section">
            <h4>Appearance</h4>
            <div className="theme-toggle">
              <label className="theme-toggle-label">
                <span className="theme-toggle-text">Dark Mode</span>
                <div className="theme-toggle-switch">
                  <input
                    type="checkbox"
                    checked={isDark}
                    onChange={toggleTheme}
                    className="theme-toggle-input"
                  />
                  <span className="theme-toggle-slider"></span>
                </div>
              </label>
              <p className="theme-toggle-description">
                Switch between light and dark themes
              </p>
            </div>
          </div>

          <div className="settings-section">
            <h4>About</h4>
            <div className="settings-info">
              <p>Ax Component Library</p>
              <p>Version 1.0.0</p>
              <p>Built with React & Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsDrawer;
