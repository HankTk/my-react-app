import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { AxButton } from '@ax/uilib';
import './PageStyles.css';

const DarkModeTest = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <div className="page-container">
      <div className="page-content">
        <header className="page-header">
          <h1 className="page-title">Dark Mode Test</h1>
          <p className="page-subtitle">Testing dark mode functionality and visual changes.</p>
        </header>

        <div className="page-sections">
          <section className="page-section">
            <h2 className="page-section-title">Current Theme Status</h2>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">Theme Information</div>
                <div className="space-y-4">
                  <div className="p-4 bg-card border border-border rounded-lg">
                    <p><strong>Current Theme:</strong> {theme}</p>
                    <p><strong>Is Dark Mode:</strong> {isDark ? 'Yes' : 'No'}</p>
                    <p><strong>Theme Indicator:</strong> {isDark ? 'DARK' : 'LIGHT'}</p>
                  </div>
                  
                  <div className="flex gap-4">
                    <AxButton onClick={toggleTheme} variant="default">
                      Toggle Theme
                    </AxButton>
                    <AxButton onClick={() => console.log('Theme:', theme, 'isDark:', isDark)} variant="outline">
                      Log Theme State
                    </AxButton>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Visual Test Components</h2>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">Button Variants</div>
                <div className="flex flex-wrap gap-4 mb-6">
                  <AxButton variant="default">Default</AxButton>
                  <AxButton variant="destructive">Destructive</AxButton>
                  <AxButton variant="outline">Outline</AxButton>
                  <AxButton variant="secondary">Secondary</AxButton>
                  <AxButton variant="ghost">Ghost</AxButton>
                  <AxButton variant="link">Link</AxButton>
                </div>
              </div>
              
              <div className="page-content-group">
                <div className="page-content-group-title">Card Components</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-card border border-border rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Card Title</h3>
                    <p className="text-muted-foreground">This is a test card to verify dark mode styling.</p>
                  </div>
                  <div className="p-4 bg-muted border border-border rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Muted Card</h3>
                    <p className="text-muted-foreground">This card uses muted background colors.</p>
                  </div>
                </div>
              </div>
              
              <div className="page-content-group">
                <div className="page-content-group-title">Color Test</div>
                <div className="flex flex-col gap-4">
                  <AxButton variant="default" size="lg" className="p-4 rounded-lg text-center h-20 w-full flex flex-col justify-center">
                    <div className="font-semibold">Primary</div>
                    <div className="text-sm opacity-90">Primary colors</div>
                  </AxButton>
                  <AxButton variant="secondary" size="lg" className="p-4 rounded-lg text-center h-20 w-full flex flex-col justify-center">
                    <div className="font-semibold">Secondary</div>
                    <div className="text-sm opacity-90">Secondary colors</div>
                  </AxButton>
                  <AxButton variant="destructive" size="lg" className="p-4 rounded-lg text-center h-20 w-full flex flex-col justify-center">
                    <div className="font-semibold">Destructive</div>
                    <div className="text-sm opacity-90">Destructive colors</div>
                  </AxButton>
                  <AxButton variant="outline" size="lg" className="p-4 rounded-lg text-center h-20 w-full flex flex-col justify-center bg-muted text-muted-foreground">
                    <div className="font-semibold">Muted</div>
                    <div className="text-sm opacity-90">Muted colors</div>
                  </AxButton>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">CSS Variables Debug</h2>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">Current CSS Variables</div>
                <div className="p-4 bg-card border border-border rounded-lg">
                  <pre className="text-sm text-muted-foreground overflow-x-auto">
{`Current Theme: ${theme}
Background: hsl(var(--background))
Foreground: hsl(var(--foreground))
Primary: hsl(var(--primary))
Secondary: hsl(var(--secondary))
Muted: hsl(var(--muted))
Border: hsl(var(--border))`}
                  </pre>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DarkModeTest;
