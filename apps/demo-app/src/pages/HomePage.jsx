import React from 'react';
import { AxButton, AxLabel } from '@my-org/uilib';
import './PageStyles.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage-container">
        <header className="homepage-header">
          <h1 className="homepage-title">Ax React Component Library</h1>
          <p className="homepage-subtitle">A modern, reusable React component library built with TypeScript and Vite.</p>
        </header>

        <div className="homepage-sections">
          <section className="homepage-section">
            <h2 className="homepage-section-title">Features</h2>
            <div className="homepage-grid">
              <div className="homepage-card">
                <h3 className="homepage-card-title">🎨 Beautiful Design</h3>
                <p className="homepage-card-text">Modern, accessible components with shadcn/ui design system</p>
              </div>
              <div className="homepage-card">
                <h3 className="homepage-card-title">⚡ TypeScript</h3>
                <p className="homepage-card-text">Full TypeScript support with comprehensive type definitions</p>
              </div>
              <div className="homepage-card">
                <h3 className="homepage-card-title">🎯 Tailwind CSS</h3>
                <p className="homepage-card-text">Utility-first CSS framework for rapid UI development</p>
              </div>
              <div className="homepage-card">
                <h3 className="homepage-card-title">♿ Accessible</h3>
                <p className="homepage-card-text">Built on Radix UI primitives for excellent accessibility</p>
              </div>
              <div className="homepage-card">
                <h3 className="homepage-card-title">🌙 Dark Mode</h3>
                <p className="homepage-card-text">Built-in dark mode support with CSS variables</p>
              </div>
              <div className="homepage-card">
                <h3 className="homepage-card-title">📦 Tree Shakeable</h3>
                <p className="homepage-card-text">Import only the components you need</p>
              </div>
            </div>
          </section>

          <section className="homepage-section">
            <h2 className="homepage-section-title">Available Components</h2>
            <div className="homepage-components-grid">
              <div className="homepage-card">
                <h3 className="homepage-card-title">AxButton</h3>
                <p className="homepage-card-text">A versatile button component with multiple variants and sizes.</p>
                <AxButton variant="default" size="sm">View AxButton</AxButton>
              </div>
              <div className="homepage-card">
                <h3 className="homepage-card-title">AxLabel</h3>
                <p className="homepage-card-text">Flexible label component for form elements and UI indicators.</p>
                <AxLabel className="text-sm">View AxLabel</AxLabel>
              </div>
              <div className="homepage-card">
                <h3 className="homepage-card-title">AxCard</h3>
                <p className="homepage-card-text">Flexible card component for content display.</p>
                <AxButton variant="outline" size="sm" disabled>Coming Soon</AxButton>
              </div>
              <div className="homepage-card">
                <h3 className="homepage-card-title">AxModal</h3>
                <p className="homepage-card-text">Modal dialog component for overlays and forms.</p>
                <AxButton variant="outline" size="sm" disabled>Coming Soon</AxButton>
              </div>
            </div>
          </section>

          <section className="homepage-section">
            <h2 className="homepage-section-title">Quick Start</h2>
            <div className="homepage-card">
              <h3 className="homepage-card-title">Installation</h3>
              <div className="homepage-code-block">
                <code className="homepage-code">npm install @my-org/uilib</code>
              </div>
              
              <h3 className="homepage-card-title">Usage</h3>
              <div className="homepage-code-block">
                <pre className="homepage-code-pre">
{`import { AxButton, AxLabel } from '@my-org/uilib';

function App() {
  return (
    <div>
      <AxLabel htmlFor="email">Email</AxLabel>
      <input id="email" type="email" />
      <AxButton variant="default">Submit</AxButton>
    </div>
  );
}`}
                </pre>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;