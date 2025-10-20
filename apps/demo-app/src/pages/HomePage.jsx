import React from 'react';
import { AxButton, AxLabel } from '@my-org/react-component-library';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Ax React Component Library</h1>
          <p className="text-muted-foreground">A modern, reusable React component library built with TypeScript and Vite.</p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">🎨 Beautiful Design</h3>
                <p className="text-muted-foreground">Modern, accessible components with shadcn/ui design system</p>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">⚡ TypeScript</h3>
                <p className="text-muted-foreground">Full TypeScript support with comprehensive type definitions</p>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">🎯 Tailwind CSS</h3>
                <p className="text-muted-foreground">Utility-first CSS framework for rapid UI development</p>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">♿ Accessible</h3>
                <p className="text-muted-foreground">Built on Radix UI primitives for excellent accessibility</p>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">🌙 Dark Mode</h3>
                <p className="text-muted-foreground">Built-in dark mode support with CSS variables</p>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">📦 Tree Shakeable</h3>
                <p className="text-muted-foreground">Import only the components you need</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Available Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">AxButton</h3>
                <p className="text-muted-foreground mb-4">A versatile button component with multiple variants and sizes.</p>
                <AxButton variant="default" size="sm">View AxButton</AxButton>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">AxLabel</h3>
                <p className="text-muted-foreground mb-4">Flexible label component for form elements and UI indicators.</p>
                <AxLabel className="text-sm">View AxLabel</AxLabel>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">AxCard</h3>
                <p className="text-muted-foreground mb-4">Flexible card component for content display.</p>
                <AxButton variant="outline" size="sm" disabled>Coming Soon</AxButton>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">AxModal</h3>
                <p className="text-muted-foreground mb-4">Modal dialog component for overlays and forms.</p>
                <AxButton variant="outline" size="sm" disabled>Coming Soon</AxButton>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Quick Start</h2>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Installation</h3>
              <div className="bg-muted rounded-md p-4 mb-4">
                <code className="text-sm">npm install @my-org/react-component-library</code>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-4">Usage</h3>
              <div className="bg-muted rounded-md p-4">
                <pre className="text-sm text-muted-foreground">
{`import { AxButton, AxLabel } from '@my-org/react-component-library';

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