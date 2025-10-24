import React from 'react';
import { AxButton } from '@ax/uilib';
import { useTheme } from '../contexts/ThemeContext';

const BasicThemeTest = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Basic Theme Test</h2>
      
      <div className="theme-test-box">
        <h3>Current Theme: {theme}</h3>
        <p>Is Dark Mode: {isDark ? 'Yes' : 'No'}</p>
        <AxButton 
          onClick={toggleTheme}
          variant="outline"
          size="sm"
          className="theme-test-button"
        >
          Toggle Theme
        </AxButton>
      </div>

      <div className="theme-test-box">
        <h3>CSS Variable Test</h3>
        <p>This box should change color when theme changes.</p>
        <p>Background: var(--bg-color)</p>
        <p>Text: var(--text-color)</p>
        <p>Border: var(--border-color)</p>
      </div>

      <div className="theme-test-box">
        <h3>Button Text Color Test</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', margin: '10px 0' }}>
          <AxButton variant="outline" size="sm" className="theme-test-button">Default Button</AxButton>
          <AxButton variant="default" size="sm" className="theme-test-button">Primary Button</AxButton>
          <AxButton variant="outline" size="sm" className="theme-test-button">Outline Button</AxButton>
        </div>
        <p style={{ fontSize: '12px', color: 'var(--text-color)' }}>These buttons should have proper text colors for the current theme.</p>
        
        {/* Additional test buttons with explicit styling */}
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
          <h4 style={{ color: 'var(--text-color)', margin: '0 0 10px 0', fontSize: '14px' }}>Explicit Button Tests:</h4>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <AxButton variant="default" size="sm">Primary (HSL)</AxButton>
            <AxButton variant="secondary" size="sm">Secondary (HSL)</AxButton>
            <AxButton variant="outline" size="sm">Outline (HSL)</AxButton>
            <AxButton variant="destructive" size="sm">Destructive (Danger)</AxButton>
          </div>
        </div>
      </div>

      <div className="theme-test-box">
        <h3>DataTable Button Test</h3>
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
          <h4 style={{ color: 'var(--text-color)', margin: '0 0 10px 0', fontSize: '14px' }}>DataTable Style Buttons:</h4>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <AxButton variant="outline" size="sm" className="datatable-action-button">📊 Export</AxButton>
            <AxButton variant="outline" size="sm" className="datatable-action-button">⚙️ Actions</AxButton>
            <AxButton variant="outline" size="icon-sm" className="datatable-pagination-button">←</AxButton>
            <AxButton variant="outline" size="icon-sm" className="datatable-pagination-button">→</AxButton>
            <AxButton variant="default" size="sm" className="datatable-primary-button">🔵 Primary Action</AxButton>
          </div>
        </div>
      </div>

      <div className="theme-test-box">
        <h3>Controls Section Test</h3>
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
          <h4 style={{ color: 'var(--text-color)', margin: '0 0 10px 0', fontSize: '14px' }}>Controls Section Buttons:</h4>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '15px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <span style={{ color: 'var(--text-color)', fontSize: '12px', fontWeight: 'bold' }}>Variant:</span>
              <AxButton variant="default" size="sm" className="controls-section">Default</AxButton>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <span style={{ color: 'var(--text-color)', fontSize: '12px', fontWeight: 'bold' }}>Size:</span>
              <AxButton variant="default" size="sm" className="controls-section">Medium</AxButton>
            </div>
          </div>
        </div>
      </div>

      <div className="theme-test-box">
        <h3>Chart Types Section Test</h3>
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
          <h4 style={{ color: 'var(--text-color)', margin: '0 0 10px 0', fontSize: '14px' }}>Chart Types Buttons:</h4>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '15px' }}>
            <AxButton variant="default" size="sm" className="chart-type-button chart-type-button-active">Line Chart</AxButton>
            <AxButton variant="outline" size="sm" className="chart-type-button chart-type-button-inactive">Bar Chart</AxButton>
            <AxButton variant="outline" size="sm" className="chart-type-button chart-type-button-inactive">Pie Chart</AxButton>
            <AxButton variant="outline" size="sm" className="chart-type-button chart-type-button-inactive">Doughnut Chart</AxButton>
          </div>
        </div>
      </div>

      <div className="theme-test-box">
        <h3>Direct Style Test</h3>
        <div 
          style={{
            backgroundColor: 'var(--bg-color)',
            color: 'var(--text-color)',
            border: '2px solid var(--border-color)',
            padding: '15px',
            borderRadius: '8px',
            margin: '10px 0'
          }}
        >
          This div uses CSS variables directly in style prop.
        </div>
      </div>

      <div className="theme-test-box">
        <h3>Debug Information</h3>
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '4px', color: '#000' }}>
          <p><strong>Document Classes:</strong> {document.documentElement.classList.toString()}</p>
          <p><strong>Body Background:</strong> {getComputedStyle(document.body).backgroundColor}</p>
          <p><strong>Body Color:</strong> {getComputedStyle(document.body).color}</p>
          <p><strong>CSS Variables:</strong></p>
          <ul>
            <li>--bg-color: {getComputedStyle(document.documentElement).getPropertyValue('--bg-color')}</li>
            <li>--text-color: {getComputedStyle(document.documentElement).getPropertyValue('--text-color')}</li>
            <li>--primary-color: {getComputedStyle(document.documentElement).getPropertyValue('--primary-color')}</li>
            <li>--background: {getComputedStyle(document.documentElement).getPropertyValue('--background')}</li>
            <li>--foreground: {getComputedStyle(document.documentElement).getPropertyValue('--foreground')}</li>
            <li>--card: {getComputedStyle(document.documentElement).getPropertyValue('--card')}</li>
            <li>--border: {getComputedStyle(document.documentElement).getPropertyValue('--border')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BasicThemeTest;
