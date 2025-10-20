import React, { useState } from 'react';
import { AxLabel } from '@my-org/react-component-library';

const AxLabelPage = () => {
  const [selectedVariant, setSelectedVariant] = useState('default');

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">AxLabel Component</h1>
          <p className="text-muted-foreground">A flexible label component for form elements and UI indicators.</p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Size Variants</h2>
            <p className="text-muted-foreground mb-6">Different sizes for different contexts and hierarchy.</p>
            <div className="space-y-4">
              <div className="space-y-2">
                <AxLabel size="xs">Extra Small Label (text-xs)</AxLabel>
                <AxLabel size="sm">Small Label (text-sm)</AxLabel>
                <AxLabel size="default">Default Label (text-sm)</AxLabel>
                <AxLabel size="lg">Large Label (text-base)</AxLabel>
                <AxLabel size="xl">Extra Large Label (text-lg)</AxLabel>
                <AxLabel size="2xl">2X Large Label (text-xl)</AxLabel>
                <AxLabel size="responsive">Responsive Label (adapts to screen size)</AxLabel>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Weight Variants</h2>
            <p className="text-muted-foreground mb-6">Different font weights for emphasis and hierarchy.</p>
            <div className="space-y-2">
              <AxLabel weight="light">Light Weight Label</AxLabel>
              <AxLabel weight="normal">Normal Weight Label</AxLabel>
              <AxLabel weight="medium">Medium Weight Label (default)</AxLabel>
              <AxLabel weight="semibold">Semibold Weight Label</AxLabel>
              <AxLabel weight="bold">Bold Weight Label</AxLabel>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Color Variants</h2>
            <p className="text-muted-foreground mb-6">Different colors for different states and contexts.</p>
            <div className="space-y-2">
              <AxLabel variant="default">Default Color Label</AxLabel>
              <AxLabel variant="muted">Muted Color Label</AxLabel>
              <AxLabel variant="primary">Primary Color Label</AxLabel>
              <AxLabel variant="secondary">Secondary Color Label</AxLabel>
              <AxLabel variant="destructive">Destructive Color Label</AxLabel>
              <AxLabel variant="success">Success Color Label</AxLabel>
              <AxLabel variant="warning">Warning Color Label</AxLabel>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Combined Variants</h2>
            <p className="text-muted-foreground mb-6">Mix and match different variants for specific use cases.</p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Form Labels</h3>
                <div className="space-y-2 max-w-md">
                  <AxLabel size="sm" weight="medium" variant="default" htmlFor="email-form">Email Address</AxLabel>
                  <input 
                    id="email-form" 
                    type="email" 
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Required Field Labels</h3>
                <div className="space-y-2 max-w-md">
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
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Section Headers</h3>
                <div className="space-y-2">
                  <AxLabel size="lg" weight="bold" variant="primary">Section Header</AxLabel>
                  <AxLabel size="base" weight="medium" variant="muted">Section Description</AxLabel>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Basic Usage</h2>
            <p className="text-muted-foreground mb-6">Labels are typically used with form inputs.</p>
            <div className="space-y-4 max-w-md">
              <div>
                <AxLabel htmlFor="email">Email Address</AxLabel>
                <input 
                  id="email" 
                  type="email" 
                  className="mt-1 w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <AxLabel htmlFor="password">Password</AxLabel>
                <input 
                  id="password" 
                  type="password" 
                  className="mt-1 w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Enter your password"
                />
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

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Props</h2>
            <div className="bg-card border rounded-lg p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2 font-medium">Prop</th>
                    <th className="text-left p-2 font-medium">Type</th>
                    <th className="text-left p-2 font-medium">Default</th>
                    <th className="text-left p-2 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="p-2 font-mono">size</td>
                    <td className="p-2">'xs' | 'sm' | 'default' | 'lg' | 'xl' | '2xl' | 'responsive'</td>
                    <td className="p-2">'default'</td>
                    <td className="p-2">Size of the label text</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">weight</td>
                    <td className="p-2">'light' | 'normal' | 'medium' | 'semibold' | 'bold'</td>
                    <td className="p-2">'medium'</td>
                    <td className="p-2">Font weight of the label</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">variant</td>
                    <td className="p-2">'default' | 'muted' | 'primary' | 'secondary' | 'destructive' | 'success' | 'warning'</td>
                    <td className="p-2">'default'</td>
                    <td className="p-2">Color variant of the label</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">children</td>
                    <td className="p-2">React.ReactNode</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Label content</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">htmlFor</td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">ID of the form element to associate with</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">className</td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Additional CSS class name</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AxLabelPage;