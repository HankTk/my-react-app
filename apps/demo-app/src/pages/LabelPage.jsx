import React, { useState } from 'react';
import { AxLabel } from '@my-org/uilib';
import './PageStyles.css';

const AxLabelPage = () => {
  const [selectedVariant, setSelectedVariant] = useState('default');

  return (
    <div className="page-container">
      <div className="page-content">
        <header className="page-header">
          <h1 className="page-title">AxLabel Component</h1>
          <p className="page-subtitle">A flexible label component for form elements and UI indicators.</p>
        </header>

        <div className="page-sections">
          <section className="page-section">
            <h2 className="page-section-title">Size Variants</h2>
            <p className="page-section-text">Different sizes for different contexts and hierarchy.</p>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">Size Examples</div>
                <div className="space-y-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <AxLabel size="xs">Extra Small Label (text-xs)</AxLabel>
                  <AxLabel size="sm">Small Label (text-sm)</AxLabel>
                  <AxLabel size="default">Default Label (text-sm)</AxLabel>
                  <AxLabel size="lg">Large Label (text-base)</AxLabel>
                  <AxLabel size="xl">Extra Large Label (text-lg)</AxLabel>
                  <AxLabel size="2xl">2X Large Label (text-xl)</AxLabel>
                  <AxLabel size="responsive">Responsive Label (adapts to screen size)</AxLabel>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Weight Variants</h2>
            <p className="page-section-text">Different font weights for emphasis and hierarchy.</p>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">Weight Examples</div>
                <div className="space-y-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <AxLabel weight="light">Light Weight Label</AxLabel>
                  <AxLabel weight="normal">Normal Weight Label</AxLabel>
                  <AxLabel weight="medium">Medium Weight Label (default)</AxLabel>
                  <AxLabel weight="semibold">Semibold Weight Label</AxLabel>
                  <AxLabel weight="bold">Bold Weight Label</AxLabel>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Color Variants</h2>
            <p className="page-section-text">Different colors for different states and contexts.</p>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">Color Examples</div>
                <div className="space-y-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <AxLabel variant="default">Default Color Label</AxLabel>
                  <AxLabel variant="muted">Muted Color Label</AxLabel>
                  <AxLabel variant="primary">Primary Color Label</AxLabel>
                  <AxLabel variant="secondary">Secondary Color Label</AxLabel>
                  <AxLabel variant="destructive">Destructive Color Label</AxLabel>
                  <AxLabel variant="success">Success Color Label</AxLabel>
                  <AxLabel variant="warning">Warning Color Label</AxLabel>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Combined Variants</h2>
            <p className="page-section-text">Mix and match different variants for specific use cases.</p>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">Form Labels</div>
                <div className="space-y-3">
                  <AxLabel size="sm" weight="medium" variant="default" htmlFor="email-form">Email Address</AxLabel>
                  <input 
                    id="email-form" 
                    type="email" 
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="page-content-group">
                <div className="page-content-group-title">Required Field Labels</div>
                <div className="space-y-3">
                  <AxLabel size="sm" weight="semibold" variant="destructive" htmlFor="required-field">
                    Required Field *
                  </AxLabel>
                  <input 
                    id="required-field" 
                    type="text" 
                    className="w-full px-3 py-2 border border-destructive rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-destructive"
                    placeholder="This field is required"
                  />
                </div>
              </div>
              
              <div className="page-content-group">
                <div className="page-content-group-title">Section Headers</div>
                <div className="space-y-3">
                  <AxLabel size="lg" weight="bold" variant="primary">Section Header</AxLabel>
                  <AxLabel size="base" weight="medium" variant="muted">Section Description</AxLabel>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Basic Usage</h2>
            <p className="page-section-text">Labels are typically used with form inputs.</p>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">Form Examples</div>
                <div className="space-y-4">
                  <div>
                    <AxLabel htmlFor="email">Email Address</AxLabel>
                    <input 
                      id="email" 
                      type="email" 
                      className="mt-2 w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <AxLabel htmlFor="password">Password</AxLabel>
                    <input 
                      id="password" 
                      type="password" 
                      className="mt-2 w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Interactive Example</h2>
            <p className="text-muted-foreground mb-6">Click on labels to see the interaction.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <AxLabel 
                  htmlFor="checkbox1"
                  className="cursor-pointer"
                >
                  I agree to the terms and conditions
                </AxLabel>
                <input 
                  id="checkbox1" 
                  type="checkbox" 
                  className="rounded border-input"
                />
              </div>
              <div className="flex items-center gap-4">
                <AxLabel 
                  htmlFor="radio1"
                  className="cursor-pointer"
                >
                  Option 1
                </AxLabel>
                <input 
                  id="radio1" 
                  type="radio" 
                  name="options"
                  className="border-input"
                />
              </div>
              <div className="flex items-center gap-4">
                <AxLabel 
                  htmlFor="radio2"
                  className="cursor-pointer"
                >
                  Option 2
                </AxLabel>
                <input 
                  id="radio2" 
                  type="radio" 
                  name="options"
                  className="border-input"
                />
              </div>
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Props</h2>
            <div className="page-content-container">
              <div className="page-content-group">
                <table className="page-props-table">
                  <thead>
                    <tr>
                      <th>Prop</th>
                      <th>Type</th>
                      <th>Default</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="page-prop-name">size</td>
                      <td>'xs' | 'sm' | 'default' | 'lg' | 'xl' | '2xl' | 'responsive'</td>
                      <td>'default'</td>
                      <td>Size of the label text</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">weight</td>
                      <td>'light' | 'normal' | 'medium' | 'semibold' | 'bold'</td>
                      <td>'medium'</td>
                      <td>Font weight of the label</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">variant</td>
                      <td>'default' | 'muted' | 'primary' | 'secondary' | 'destructive' | 'success' | 'warning'</td>
                      <td>'default'</td>
                      <td>Color variant of the label</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">children</td>
                      <td>React.ReactNode</td>
                      <td>-</td>
                      <td>Label content</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">htmlFor</td>
                      <td>string</td>
                      <td>-</td>
                      <td>ID of the form element to associate with</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">className</td>
                      <td>string</td>
                      <td>-</td>
                      <td>Additional CSS class name</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AxLabelPage;