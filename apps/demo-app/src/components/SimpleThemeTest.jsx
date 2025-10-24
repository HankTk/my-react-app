import React from 'react';
import { AxButton } from '@ax/uilib';
import { useTheme } from '../contexts/ThemeContext';

const SimpleThemeTest = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  const testStyles = {
    light: {
      backgroundColor: '#ffffff',
      color: '#000000',
      border: '2px solid #000000',
      padding: '20px',
      margin: '10px',
      borderRadius: '8px'
    },
    dark: {
      backgroundColor: '#1a1a1a',
      color: '#ffffff',
      border: '2px solid #ffffff',
      padding: '20px',
      margin: '10px',
      borderRadius: '8px'
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Simple Theme Test</h2>
      
      <div style={isDark ? testStyles.dark : testStyles.light}>
        <h3>Current Theme: {theme}</h3>
        <p>Is Dark Mode: {isDark ? 'Yes' : 'No'}</p>
        <AxButton 
          onClick={toggleTheme}
          variant="default"
          size="default"
          className="simple-theme-toggle"
        >
          Toggle Theme
        </AxButton>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>CSS Variable Test</h3>
        <div 
          style={{
            backgroundColor: 'hsl(var(--background))',
            color: 'hsl(var(--foreground))',
            border: '1px solid hsl(var(--border))',
            padding: '20px',
            borderRadius: '8px'
          }}
        >
          <p>This div uses CSS variables:</p>
          <ul>
            <li>Background: hsl(var(--background))</li>
            <li>Color: hsl(var(--foreground))</li>
            <li>Border: hsl(var(--border))</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Tailwind Classes Test</h3>
        <div className="bg-background text-foreground border border-border p-4 rounded-lg">
          <p>This div uses Tailwind classes:</p>
          <ul>
            <li>bg-background</li>
            <li>text-foreground</li>
            <li>border-border</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Debug Information</h3>
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '4px' }}>
          <p><strong>Document Classes:</strong> {document.documentElement.classList.toString()}</p>
          <p><strong>Body Background:</strong> {getComputedStyle(document.body).backgroundColor}</p>
          <p><strong>Body Color:</strong> {getComputedStyle(document.body).color}</p>
          <p><strong>CSS Variables:</strong></p>
          <ul>
            <li>--background: {getComputedStyle(document.documentElement).getPropertyValue('--background')}</li>
            <li>--foreground: {getComputedStyle(document.documentElement).getPropertyValue('--foreground')}</li>
            <li>--primary: {getComputedStyle(document.documentElement).getPropertyValue('--primary')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SimpleThemeTest;
