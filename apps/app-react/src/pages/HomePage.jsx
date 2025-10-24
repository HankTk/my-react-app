import React from 'react';
import { Link } from 'react-router-dom';
import { AxButton, AxLabel, AxCard, AxCardContent, AxCardHeader, AxCardTitle, AxDataTable } from '@ax/uilib';
import SimpleThemeTest from '../components/SimpleThemeTest';
import BasicThemeTest from '../components/BasicThemeTest';
import './PageStyles.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage-container">
        <header className="homepage-header">
          <h1 className="homepage-title">Ax Component Library</h1>
          <p className="homepage-subtitle">A modern, reusable React component library built with shadcn/ui, Tailwind CSS, and TypeScript.</p>
        </header>

        <div className="homepage-sections">
          <section className="homepage-section">
            <h2 className="homepage-section-title">Technology Stack</h2>
            <div className="homepage-grid">
              <div className="homepage-card">
                <h3 className="homepage-card-title">⚛️ React</h3>
                <p className="homepage-card-text">Modern React with hooks, functional components, and optimized rendering</p>
              </div>
              <div className="homepage-card">
                <h3 className="homepage-card-title">🎨 shadcn/ui</h3>
                <p className="homepage-card-text">Built on shadcn/ui design system with class-variance-authority for variant management</p>
              </div>
              <div className="homepage-card">
                <h3 className="homepage-card-title">🎯 Tailwind CSS</h3>
                <p className="homepage-card-text">Utility-first CSS framework with tailwind-merge for class optimization</p>
              </div>
              <div className="homepage-card">
                <h3 className="homepage-card-title">⚡ TypeScript</h3>
                <p className="homepage-card-text">Full TypeScript support with comprehensive type definitions and strict mode</p>
              </div>
              <div className="homepage-card">
                <h3 className="homepage-card-title">♿ Radix UI</h3>
                <p className="homepage-card-text">Built on Radix UI primitives (@radix-ui/react-slot) for excellent accessibility</p>
              </div>
              <div className="homepage-card">
                <h3 className="homepage-card-title">🔧 Vite</h3>
                <p className="homepage-card-text">Fast build tool with HMR and optimized bundling for development and production</p>
              </div>
              <div className="homepage-card">
                <h3 className="homepage-card-title">📊 Chart.js</h3>
                <p className="homepage-card-text">Powerful charting library with dynamic imports for optimal performance</p>
              </div>
              <div className="homepage-card">
                <h3 className="homepage-card-title">🎭 Lucide React</h3>
                <p className="homepage-card-text">Beautiful, customizable SVG icons with tree-shaking support</p>
              </div>
              <div className="homepage-card">
                <h3 className="homepage-card-title">🏗️ Nx Monorepo</h3>
                <p className="homepage-card-text">Scalable monorepo architecture with shared libraries and optimized builds</p>
              </div>
            </div>
          </section>

          <section className="homepage-section">
            <h2 className="homepage-section-title">Available Components</h2>
            <div className="homepage-components-grid">
              <div className="homepage-card flex flex-col">
                <div className="flex-1">
                  <h3 className="homepage-card-title">AxButton</h3>
                  <p className="homepage-card-text">Versatile button with variants (default, destructive, outline, secondary, ghost, link) and responsive sizes.</p>
                </div>
                <div className="mt-auto pt-3">
                  <Link to="/button">
                    <AxButton variant="secondary" size="sm" className="w-full">View AxButton</AxButton>
                  </Link>
                </div>
              </div>
              <div className="homepage-card flex flex-col">
                <div className="flex-1">
                  <h3 className="homepage-card-title">AxLabel</h3>
                  <p className="homepage-card-text">Flexible label component for form elements and UI indicators with accessibility support.</p>
                </div>
                <div className="mt-auto pt-3">
                  <Link to="/label">
                    <AxButton variant="secondary" size="sm" className="w-full">View AxLabel</AxButton>
                  </Link>
                </div>
              </div>
              <div className="homepage-card flex flex-col">
                <div className="flex-1">
                  <h3 className="homepage-card-title">AxCard</h3>
                  <p className="homepage-card-text">Flexible card component with header, content, and footer sections for content display.</p>
                </div>
                <div className="mt-auto pt-3">
                  <Link to="/card">
                    <AxButton variant="secondary" size="sm" className="w-full">View AxCard</AxButton>
                  </Link>
                </div>
              </div>
              <div className="homepage-card flex flex-col">
                <div className="flex-1">
                  <h3 className="homepage-card-title">AxDataTable</h3>
                  <p className="homepage-card-text">Advanced data table with pagination, search, filtering, selection, actions, and export capabilities.</p>
                </div>
                <div className="mt-auto pt-3">
                  <Link to="/table">
                    <AxButton variant="secondary" size="sm" className="w-full">View AxDataTable</AxButton>
                  </Link>
                </div>
              </div>
              <div className="homepage-card flex flex-col">
                <div className="flex-1">
                  <h3 className="homepage-card-title">AxInput</h3>
                  <p className="homepage-card-text">Form input component with validation states and accessibility features.</p>
                </div>
                <div className="mt-auto pt-3">
                  <Link to="/input">
                    <AxButton variant="secondary" size="sm" className="w-full">View AxInput</AxButton>
                  </Link>
                </div>
              </div>
              <div className="homepage-card flex flex-col">
                <div className="flex-1">
                  <h3 className="homepage-card-title">AxModal</h3>
                  <p className="homepage-card-text">Modal dialog component for overlays, forms, and content presentation.</p>
                </div>
                <div className="mt-auto pt-3">
                  <Link to="/modal">
                    <AxButton variant="secondary" size="sm" className="w-full">View AxModal</AxButton>
                  </Link>
                </div>
              </div>
              <div className="homepage-card flex flex-col">
                <div className="flex-1">
                  <h3 className="homepage-card-title">AxChart</h3>
                  <p className="homepage-card-text">Chart component powered by Chart.js with dynamic imports for optimal performance.</p>
                </div>
                <div className="mt-auto pt-3">
                  <Link to="/chart">
                    <AxButton variant="secondary" size="sm" className="w-full">View AxChart</AxButton>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="homepage-section">
            <h2 className="homepage-section-title">Quick Start</h2>
            <div className="homepage-card">
              <h3 className="homepage-card-title">Installation</h3>
              <div className="homepage-code-block">
                <code className="homepage-code">npm install @ax/uilib</code>
              </div>
              
              <h3 className="homepage-card-title">Import Styles</h3>
              <div className="homepage-code-block">
                <code className="homepage-code">import '@ax/uilib/styles'</code>
              </div>
              
              <h3 className="homepage-card-title">Basic Usage</h3>
              <div className="homepage-code-block">
                <pre className="homepage-code-pre">
{`import { AxButton, AxLabel, AxDataTable } from '@ax/uilib';
import '@ax/uilib/styles';

function App() {
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];

  const columns = [
    { key: 'id', title: 'ID', sortable: true },
    { key: 'name', title: 'Name', sortable: true },
    { key: 'email', title: 'Email', sortable: true }
  ];

  return (
    <div>
      <AxLabel htmlFor="email">Email</AxLabel>
      <input id="email" type="email" />
      <AxButton variant="default">Submit</AxButton>
      
      <AxDataTable
        data={data}
        columns={columns}
        pagination={true}
        searchable={true}
        selectable={true}
      />
    </div>
  );
}`}
                </pre>
              </div>
            </div>
          </section>

          <section className="homepage-section">
            <h2 className="homepage-section-title">Key Features</h2>
            <div className="homepage-grid">
              <div className="homepage-card">
                <h3 className="homepage-card-title">🎨 Design System</h3>
                <p className="homepage-card-text">Consistent design tokens and component variants following shadcn/ui patterns</p>
              </div>
              <div className="homepage-card">
                <h3 className="homepage-card-title">♿ Accessibility</h3>
                <p className="homepage-card-text">Built on Radix UI primitives with ARIA attributes and keyboard navigation</p>
              </div>
              <div className="homepage-card">
                <h3 className="homepage-card-title">🌙 Theme Support</h3>
                <p className="homepage-card-text">CSS variables for easy theming and dark mode support</p>
              </div>
              <div className="homepage-card">
                <h3 className="homepage-card-title">📦 Tree Shaking</h3>
                <p className="homepage-card-text">Import only the components you need for optimal bundle size</p>
              </div>
              <div className="homepage-card">
                <h3 className="homepage-card-title">🔧 TypeScript</h3>
                <p className="homepage-card-text">Full TypeScript support with comprehensive type definitions</p>
              </div>
              <div className="homepage-card">
                <h3 className="homepage-card-title">⚡ Performance</h3>
                <p className="homepage-card-text">Optimized with dynamic imports and efficient re-rendering</p>
              </div>
            </div>
          </section>

          <section className="homepage-section">
            <h2 className="homepage-section-title">Basic Theme Test</h2>
            <BasicThemeTest />
          </section>

          <section className="homepage-section">
            <h2 className="homepage-section-title">Advanced Theme Test</h2>
            <SimpleThemeTest />
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;