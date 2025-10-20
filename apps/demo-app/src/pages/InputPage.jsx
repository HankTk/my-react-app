import React, { useState } from 'react';
import { AxInput, AxLabel } from '@my-org/react-component-library';

const AxInputPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    search: '',
    number: '',
    url: '',
  });

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">AxInput Component</h1>
          <p className="text-muted-foreground">A versatile input component with multiple sizes, variants, and input types.</p>
      </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Size Variants</h2>
            <p className="text-muted-foreground mb-6">Different sizes for different contexts and form layouts.</p>
            <div className="space-y-4">
              <div className="space-y-2">
                <AxLabel size="sm" weight="medium">Extra Small Input</AxLabel>
                <AxInput inputSize="xs" placeholder="Extra small input (h-6)" />
              </div>
              <div className="space-y-2">
                <AxLabel size="sm" weight="medium">Small Input</AxLabel>
                <AxInput inputSize="sm" placeholder="Small input (h-8)" />
              </div>
              <div className="space-y-2">
                <AxLabel size="sm" weight="medium">Default Input</AxLabel>
                <AxInput inputSize="default" placeholder="Default input (h-10)" />
              </div>
              <div className="space-y-2">
                <AxLabel size="sm" weight="medium">Large Input</AxLabel>
                <AxInput inputSize="lg" placeholder="Large input (h-11)" />
              </div>
              <div className="space-y-2">
                <AxLabel size="sm" weight="medium">Extra Large Input</AxLabel>
                <AxInput inputSize="xl" placeholder="Extra large input (h-12)" />
              </div>
              <div className="space-y-2">
                <AxLabel size="sm" weight="medium">Responsive Input</AxLabel>
                <AxInput inputSize="responsive" placeholder="Responsive input (adapts to screen)" />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">State Variants</h2>
            <p className="text-muted-foreground mb-6">Different visual states for different input conditions.</p>
            <div className="space-y-4">
              <div className="space-y-2">
                <AxLabel size="sm" weight="medium">Default State</AxLabel>
                <AxInput variant="default" placeholder="Default input state" />
              </div>
              <div className="space-y-2">
                <AxLabel size="sm" weight="medium" variant="destructive">Error State</AxLabel>
                <AxInput variant="destructive" placeholder="Input with error state" />
              </div>
              <div className="space-y-2">
                <AxLabel size="sm" weight="medium" variant="success">Success State</AxLabel>
                <AxInput variant="success" placeholder="Input with success state" />
              </div>
              <div className="space-y-2">
                <AxLabel size="sm" weight="medium" variant="warning">Warning State</AxLabel>
                <AxInput variant="warning" placeholder="Input with warning state" />
              </div>
              <div className="space-y-2">
                <AxLabel size="sm" weight="medium">Ghost State</AxLabel>
                <AxInput variant="ghost" placeholder="Ghost input (transparent border)" />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Input Types</h2>
            <p className="text-muted-foreground mb-6">Different input types for different data formats.</p>
            <div className="space-y-4">
              <div className="space-y-2">
                <AxLabel size="sm" weight="medium" htmlFor="text-input">Text Input</AxLabel>
                <AxInput 
                  id="text-input"
                  type="text" 
                  placeholder="Enter text here"
                  value={formData.name}
                  onChange={handleInputChange('name')}
                />
              </div>
              <div className="space-y-2">
                <AxLabel size="sm" weight="medium" htmlFor="email-input">Email Input</AxLabel>
                <AxInput 
                  id="email-input"
                  type="email" 
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                />
              </div>
              <div className="space-y-2">
                <AxLabel size="sm" weight="medium" htmlFor="password-input">Password Input</AxLabel>
                <AxInput 
                  id="password-input"
                  type="password" 
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange('password')}
                />
              </div>
              <div className="space-y-2">
                <AxLabel size="sm" weight="medium" htmlFor="number-input">Number Input</AxLabel>
                <AxInput 
                  id="number-input"
                  type="number" 
                  placeholder="Enter a number"
                  value={formData.number}
                  onChange={handleInputChange('number')}
                />
              </div>
              <div className="space-y-2">
                <AxLabel size="sm" weight="medium" htmlFor="tel-input">Phone Input</AxLabel>
                <AxInput 
                  id="tel-input"
                  type="tel" 
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange('phone')}
                />
              </div>
              <div className="space-y-2">
                <AxLabel size="sm" weight="medium" htmlFor="url-input">URL Input</AxLabel>
                <AxInput 
                  id="url-input"
                  type="url" 
                  placeholder="Enter a URL"
                  value={formData.url}
                  onChange={handleInputChange('url')}
                />
              </div>
              <div className="space-y-2">
                <AxLabel size="sm" weight="medium" htmlFor="search-input">Search Input</AxLabel>
                <AxInput 
                  id="search-input"
                  type="search" 
                  placeholder="Search..."
                  value={formData.search}
                  onChange={handleInputChange('search')}
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Interactive Form Example</h2>
            <p className="text-muted-foreground mb-6">A complete form showcasing different input combinations.</p>
            <div className="bg-card border rounded-lg p-6 max-w-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <AxLabel size="sm" weight="medium" htmlFor="form-name">Full Name</AxLabel>
                    <AxInput 
                      id="form-name"
                      type="text" 
                      placeholder="John Doe"
                      inputSize="sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <AxLabel size="sm" weight="medium" htmlFor="form-email">Email</AxLabel>
                    <AxInput 
                      id="form-email"
                      type="email" 
                      placeholder="john@example.com"
                      inputSize="sm"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <AxLabel size="sm" weight="medium" htmlFor="form-password">Password</AxLabel>
                  <AxInput 
                    id="form-password"
                    type="password" 
                    placeholder="Enter password"
                    size="sm"
                  />
                </div>
                <div className="space-y-2">
                  <AxLabel size="sm" weight="medium" htmlFor="form-phone">Phone Number</AxLabel>
                  <AxInput 
                    id="form-phone"
                    type="tel" 
                    placeholder="+1 (555) 123-4567"
                    size="sm"
                  />
                </div>
                <div className="space-y-2">
                  <AxLabel size="sm" weight="medium" htmlFor="form-website">Website</AxLabel>
                  <AxInput 
                    id="form-website"
                    type="url" 
                    placeholder="https://example.com"
                    size="sm"
                  />
                </div>
                <div className="flex gap-4">
                  <button 
                    type="submit" 
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                  >
                    Submit
                  </button>
                  <button 
                    type="button" 
                    className="px-4 py-2 border border-input rounded-md hover:bg-accent"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Disabled State</h2>
            <p className="text-muted-foreground mb-6">Inputs can be disabled to prevent interaction.</p>
            <div className="space-y-4">
              <div className="space-y-2">
                <AxLabel size="sm" weight="medium">Disabled Input</AxLabel>
                <AxInput disabled placeholder="This input is disabled" />
              </div>
              <div className="space-y-2">
                <AxLabel size="sm" weight="medium">Disabled with Value</AxLabel>
                <AxInput disabled value="This field is read-only" />
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
                    <td className="p-2 font-mono">inputSize</td>
                    <td className="p-2">'xs' | 'sm' | 'default' | 'lg' | 'xl' | 'responsive'</td>
                    <td className="p-2">'default'</td>
                    <td className="p-2">Size of the input</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">variant</td>
                    <td className="p-2">'default' | 'destructive' | 'success' | 'warning' | 'ghost'</td>
                    <td className="p-2">'default'</td>
                    <td className="p-2">Visual state variant</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">type</td>
                    <td className="p-2">HTML input types</td>
                    <td className="p-2">'text'</td>
                    <td className="p-2">Input type (text, email, password, etc.)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">disabled</td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Whether the input is disabled</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">placeholder</td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Placeholder text</td>
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

export default AxInputPage;
