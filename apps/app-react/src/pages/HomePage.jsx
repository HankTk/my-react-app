import React from 'react';
import { Link } from 'react-router-dom';
import { AxButton, AxLabel, AxCard, AxCardContent, AxCardHeader, AxCardTitle, AxCardFooter, AxDataTable } from '@ax/uilib';
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
              <AxCard>
                <AxCardHeader>
                  <AxCardTitle>⚛️ React</AxCardTitle>
                </AxCardHeader>
                <AxCardContent>
                  <p className="homepage-card-text">Modern React with hooks, functional components, and optimized rendering</p>
                </AxCardContent>
              </AxCard>
              <AxCard>
                <AxCardHeader>
                  <AxCardTitle>🎨 shadcn/ui</AxCardTitle>
                </AxCardHeader>
                <AxCardContent>
                  <p className="homepage-card-text">Built on shadcn/ui design system with class-variance-authority for variant management</p>
                </AxCardContent>
              </AxCard>
              <AxCard>
                <AxCardHeader>
                  <AxCardTitle>🎯 Tailwind CSS</AxCardTitle>
                </AxCardHeader>
                <AxCardContent>
                  <p className="homepage-card-text">Utility-first CSS framework with tailwind-merge for class optimization</p>
                </AxCardContent>
              </AxCard>
              <AxCard>
                <AxCardHeader>
                  <AxCardTitle>⚡ TypeScript</AxCardTitle>
                </AxCardHeader>
                <AxCardContent>
                  <p className="homepage-card-text">Full TypeScript support with comprehensive type definitions and strict mode</p>
                </AxCardContent>
              </AxCard>
              <AxCard>
                <AxCardHeader>
                  <AxCardTitle>♿ Radix UI</AxCardTitle>
                </AxCardHeader>
                <AxCardContent>
                  <p className="homepage-card-text">Built on Radix UI primitives (@radix-ui/react-slot) for excellent accessibility</p>
                </AxCardContent>
              </AxCard>
              <AxCard>
                <AxCardHeader>
                  <AxCardTitle>🔧 Vite</AxCardTitle>
                </AxCardHeader>
                <AxCardContent>
                  <p className="homepage-card-text">Fast build tool with HMR and optimized bundling for development and production</p>
                </AxCardContent>
              </AxCard>
              <AxCard>
                <AxCardHeader>
                  <AxCardTitle>📊 Chart.js</AxCardTitle>
                </AxCardHeader>
                <AxCardContent>
                  <p className="homepage-card-text">Powerful charting library with dynamic imports for optimal performance</p>
                </AxCardContent>
              </AxCard>
              <AxCard>
                <AxCardHeader>
                  <AxCardTitle>🎭 Lucide React</AxCardTitle>
                </AxCardHeader>
                <AxCardContent>
                  <p className="homepage-card-text">Beautiful, customizable SVG icons with tree-shaking support</p>
                </AxCardContent>
              </AxCard>
              <AxCard>
                <AxCardHeader>
                  <AxCardTitle>🏗️ Nx Monorepo</AxCardTitle>
                </AxCardHeader>
                <AxCardContent>
                  <p className="homepage-card-text">Scalable monorepo architecture with shared libraries and optimized builds</p>
                </AxCardContent>
              </AxCard>
            </div>
          </section>

          <section className="homepage-section">
            <h2 className="homepage-section-title">Available Components</h2>
            <div className="homepage-components-grid">
              <AxCard className="flex flex-col">
                <AxCardHeader className="flex-1">
                  <AxCardTitle>AxButton</AxCardTitle>
                </AxCardHeader>
                <AxCardContent className="flex-1">
                  <p className="homepage-card-text">Versatile button with variants (default, destructive, outline, secondary, ghost, link) and responsive sizes.</p>
                </AxCardContent>
                <AxCardFooter className="mt-auto pt-3 pb-8">
                  <Link to="/button">
                    <AxButton variant="default" size="sm" className="w-full">View AxButton</AxButton>
                  </Link>
                </AxCardFooter>
              </AxCard>
              <AxCard className="flex flex-col">
                <AxCardHeader className="flex-1">
                  <AxCardTitle>AxLabel</AxCardTitle>
                </AxCardHeader>
                <AxCardContent className="flex-1">
                  <p className="homepage-card-text">Flexible label component for form elements and UI indicators with accessibility support.</p>
                </AxCardContent>
                <AxCardFooter className="mt-auto pt-3 pb-8">
                  <Link to="/label">
                    <AxButton variant="default" size="sm" className="w-full">View AxLabel</AxButton>
                  </Link>
                </AxCardFooter>
              </AxCard>
              <AxCard className="flex flex-col">
                <AxCardHeader className="flex-1">
                  <AxCardTitle>AxCard</AxCardTitle>
                </AxCardHeader>
                <AxCardContent className="flex-1">
                  <p className="homepage-card-text">Flexible card component with header, content, and footer sections for content display.</p>
                </AxCardContent>
                <AxCardFooter className="mt-auto pt-3 pb-8">
                  <Link to="/card">
                    <AxButton variant="default" size="sm" className="w-full">View AxCard</AxButton>
                  </Link>
                </AxCardFooter>
              </AxCard>
              <AxCard className="flex flex-col">
                <AxCardHeader className="flex-1">
                  <AxCardTitle>AxDataTable</AxCardTitle>
                </AxCardHeader>
                <AxCardContent className="flex-1">
                  <p className="homepage-card-text">Advanced data table with pagination, search, filtering, selection, actions, and export capabilities.</p>
                </AxCardContent>
                <AxCardFooter className="mt-auto pt-3 pb-8">
                  <Link to="/table">
                    <AxButton variant="default" size="sm" className="w-full">View AxDataTable</AxButton>
                  </Link>
                </AxCardFooter>
              </AxCard>
              <AxCard className="flex flex-col">
                <AxCardHeader className="flex-1">
                  <AxCardTitle>AxInput</AxCardTitle>
                </AxCardHeader>
                <AxCardContent className="flex-1">
                  <p className="homepage-card-text">Form input component with validation states and accessibility features.</p>
                </AxCardContent>
                <AxCardFooter className="mt-auto pt-3 pb-8">
                  <Link to="/input">
                    <AxButton variant="default" size="sm" className="w-full">View AxInput</AxButton>
                  </Link>
                </AxCardFooter>
              </AxCard>
              <AxCard className="flex flex-col">
                <AxCardHeader className="flex-1">
                  <AxCardTitle>AxModal</AxCardTitle>
                </AxCardHeader>
                <AxCardContent className="flex-1">
                  <p className="homepage-card-text">Modal dialog component for overlays, forms, and content presentation.</p>
                </AxCardContent>
                <AxCardFooter className="mt-auto pt-3 pb-8">
                  <Link to="/modal">
                    <AxButton variant="default" size="sm" className="w-full">View AxModal</AxButton>
                  </Link>
                </AxCardFooter>
              </AxCard>
              <AxCard className="flex flex-col">
                <AxCardHeader className="flex-1">
                  <AxCardTitle>AxChart</AxCardTitle>
                </AxCardHeader>
                <AxCardContent className="flex-1">
                  <p className="homepage-card-text">Chart component powered by Chart.js with dynamic imports for optimal performance.</p>
                </AxCardContent>
                <AxCardFooter className="mt-auto pt-3 pb-8">
                  <Link to="/chart">
                    <AxButton variant="default" size="sm" className="w-full">View AxChart</AxButton>
                  </Link>
                </AxCardFooter>
              </AxCard>
            </div>
          </section>

          <section className="homepage-section">
            <h2 className="homepage-section-title">Quick Start</h2>
            <AxCard>
              <AxCardHeader>
                <AxCardTitle>Installation</AxCardTitle>
              </AxCardHeader>
              <AxCardContent>
                <div className="homepage-code-block">
                  <code className="homepage-code">npm install @ax/uilib</code>
                </div>
              </AxCardContent>
              
              <AxCardHeader>
                <AxCardTitle>Import Styles</AxCardTitle>
              </AxCardHeader>
              <AxCardContent>
                <div className="homepage-code-block">
                  <code className="homepage-code">import '@ax/uilib/styles'</code>
                </div>
              </AxCardContent>
              
              <AxCardHeader>
                <AxCardTitle>Basic Usage</AxCardTitle>
              </AxCardHeader>
              <AxCardContent>
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
              </AxCardContent>
            </AxCard>
          </section>

          <section className="homepage-section">
            <h2 className="homepage-section-title">Key Features</h2>
            <div className="homepage-grid">
              <AxCard>
                <AxCardHeader>
                  <AxCardTitle>🎨 Design System</AxCardTitle>
                </AxCardHeader>
                <AxCardContent>
                  <p className="homepage-card-text">Consistent design tokens and component variants following shadcn/ui patterns</p>
                </AxCardContent>
              </AxCard>
              <AxCard>
                <AxCardHeader>
                  <AxCardTitle>♿ Accessibility</AxCardTitle>
                </AxCardHeader>
                <AxCardContent>
                  <p className="homepage-card-text">Built on Radix UI primitives with ARIA attributes and keyboard navigation</p>
                </AxCardContent>
              </AxCard>
              <AxCard>
                <AxCardHeader>
                  <AxCardTitle>🌙 Theme Support</AxCardTitle>
                </AxCardHeader>
                <AxCardContent>
                  <p className="homepage-card-text">CSS variables for easy theming and dark mode support</p>
                </AxCardContent>
              </AxCard>
              <AxCard>
                <AxCardHeader>
                  <AxCardTitle>📦 Tree Shaking</AxCardTitle>
                </AxCardHeader>
                <AxCardContent>
                  <p className="homepage-card-text">Import only the components you need for optimal bundle size</p>
                </AxCardContent>
              </AxCard>
              <AxCard>
                <AxCardHeader>
                  <AxCardTitle>🔧 TypeScript</AxCardTitle>
                </AxCardHeader>
                <AxCardContent>
                  <p className="homepage-card-text">Full TypeScript support with comprehensive type definitions</p>
                </AxCardContent>
              </AxCard>
              <AxCard>
                <AxCardHeader>
                  <AxCardTitle>⚡ Performance</AxCardTitle>
                </AxCardHeader>
                <AxCardContent>
                  <p className="homepage-card-text">Optimized with dynamic imports and efficient re-rendering</p>
                </AxCardContent>
              </AxCard>
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