import React from 'react';
import { 
  AxCard, 
  AxCardHeader, 
  AxCardTitle, 
  AxCardDescription, 
  AxCardContent, 
  AxCardFooter,
  AxButton,
  AxLabel 
} from '@ax/uilib';
import './PageStyles.css';

const AxCardPage = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <header className="page-header">
          <h1 className="page-title">AxCard Component</h1>
          <p className="page-subtitle">A flexible card component with multiple variants, sizes, and layouts.</p>
        </header>

        <div className="page-sections">
          <section className="page-section">
            <h2 className="page-section-title">Basic Card</h2>
            <p className="page-section-text">Simple card with header, content, and footer.</p>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">Basic Example</div>
                <div className="max-w-md">
                  <AxCard>
                    <AxCardHeader>
                      <AxCardTitle>Card Title</AxCardTitle>
                      <AxCardDescription>Card description goes here</AxCardDescription>
                    </AxCardHeader>
                    <AxCardContent>
                      <p>This is the card content. You can put any content here.</p>
                    </AxCardContent>
                    <AxCardFooter>
                      <AxButton size="sm">Action</AxButton>
                    </AxCardFooter>
                  </AxCard>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Card Variants</h2>
            <p className="page-section-text">Different visual styles for different contexts.</p>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">Variant Examples</div>
                <div className="max-w-md">
                  <AxCard variant="default" style={{ marginBottom: '1rem' }}>
                    <AxCardHeader padding="sm">
                      <AxCardTitle size="sm">Default Card</AxCardTitle>
                      <AxCardDescription size="xs">Standard card style</AxCardDescription>
                    </AxCardHeader>
                    <AxCardContent padding="sm">
                      <p className="text-sm">Default variant with standard border and shadow.</p>
                    </AxCardContent>
                  </AxCard>

                  <AxCard variant="outline" style={{ marginBottom: '1rem' }}>
                    <AxCardHeader padding="sm">
                      <AxCardTitle size="sm">Outline Card</AxCardTitle>
                      <AxCardDescription size="xs">Bold border style</AxCardDescription>
                    </AxCardHeader>
                    <AxCardContent padding="sm">
                      <p className="text-sm">Outline variant with thicker border.</p>
                    </AxCardContent>
                  </AxCard>

                  <AxCard variant="ghost" style={{ marginBottom: '1rem' }}>
                    <AxCardHeader padding="sm">
                      <AxCardTitle size="sm">Ghost Card</AxCardTitle>
                      <AxCardDescription size="xs">Minimal style</AxCardDescription>
                    </AxCardHeader>
                    <AxCardContent padding="sm">
                      <p className="text-sm">Ghost variant with no border or shadow.</p>
                    </AxCardContent>
                  </AxCard>

                  <AxCard variant="elevated" style={{ marginBottom: '1rem' }}>
                    <AxCardHeader padding="sm">
                      <AxCardTitle size="sm">Elevated Card</AxCardTitle>
                      <AxCardDescription size="xs">Prominent style</AxCardDescription>
                    </AxCardHeader>
                    <AxCardContent padding="sm">
                      <p className="text-sm">Elevated variant with strong shadow.</p>
                    </AxCardContent>
                  </AxCard>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Card Sizes</h2>
            <p className="page-section-text">Different shadow intensities for different emphasis levels.</p>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">Size Examples</div>
                <div className="max-w-md">
                  <AxCard size="sm">
                    <AxCardHeader padding="sm">
                      <AxCardTitle size="sm">Small Shadow</AxCardTitle>
                      <AxCardDescription size="xs">Subtle elevation</AxCardDescription>
                    </AxCardHeader>
                    <AxCardContent padding="sm">
                      <p className="text-sm">Small shadow for subtle emphasis.</p>
                    </AxCardContent>
                  </AxCard>

                  <AxCard size="default">
                    <AxCardHeader padding="sm">
                      <AxCardTitle size="sm">Default Shadow</AxCardTitle>
                      <AxCardDescription size="xs">Standard elevation</AxCardDescription>
                    </AxCardHeader>
                    <AxCardContent padding="sm">
                      <p className="text-sm">Default shadow for normal emphasis.</p>
                    </AxCardContent>
                  </AxCard>

                  <AxCard size="lg">
                    <AxCardHeader padding="sm">
                      <AxCardTitle size="sm">Large Shadow</AxCardTitle>
                      <AxCardDescription size="xs">Strong elevation</AxCardDescription>
                    </AxCardHeader>
                    <AxCardContent padding="sm">
                      <p className="text-sm">Large shadow for strong emphasis.</p>
                    </AxCardContent>
                  </AxCard>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Padding Variants</h2>
            <p className="page-section-text">Different padding sizes for different content densities.</p>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">Padding Examples</div>
                <div className="max-w-md">
                  <AxCard padding="sm">
                    <AxCardHeader padding="sm">
                      <AxCardTitle size="sm">Small Padding</AxCardTitle>
                      <AxCardDescription size="xs">Compact layout</AxCardDescription>
                    </AxCardHeader>
                    <AxCardContent padding="sm">
                      <p className="text-sm">Small padding for compact cards.</p>
                    </AxCardContent>
                  </AxCard>

                  <AxCard padding="default">
                    <AxCardHeader padding="default">
                      <AxCardTitle size="default">Default Padding</AxCardTitle>
                      <AxCardDescription size="default">Standard layout</AxCardDescription>
                    </AxCardHeader>
                    <AxCardContent padding="default">
                      <p>Default padding for standard cards.</p>
                    </AxCardContent>
                  </AxCard>

                  <AxCard padding="lg">
                    <AxCardHeader padding="lg">
                      <AxCardTitle size="lg">Large Padding</AxCardTitle>
                      <AxCardDescription size="lg">Spacious layout</AxCardDescription>
                    </AxCardHeader>
                    <AxCardContent padding="lg">
                      <p className="text-lg">Large padding for spacious cards.</p>
                    </AxCardContent>
                  </AxCard>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Complex Card Layouts</h2>
            <p className="page-section-text">Real-world examples of card usage.</p>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">Layout Examples</div>
                <div className="max-w-md">
                  {/* Product Card */}
                  <AxCard variant="elevated" className="overflow-hidden" style={{ marginBottom: '1rem' }}>
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                    <AxCardHeader>
                      <AxCardTitle>Product Name</AxCardTitle>
                      <AxCardDescription>High-quality product description</AxCardDescription>
                    </AxCardHeader>
                    <AxCardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Price</span>
                          <span className="font-semibold">$99.99</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Rating</span>
                          <span className="text-yellow-500">★★★★☆</span>
                        </div>
                      </div>
                    </AxCardContent>
                    <AxCardFooter className="gap-2">
                      <AxButton size="sm" variant="outline">View Details</AxButton>
                      <AxButton size="sm">Add to Cart</AxButton>
                    </AxCardFooter>
                  </AxCard>

                  {/* User Profile Card */}
                  <AxCard variant="outline" style={{ marginBottom: '1rem' }}>
                    <AxCardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                          JD
                        </div>
                        <div>
                          <AxCardTitle size="sm">John Doe</AxCardTitle>
                          <AxCardDescription size="xs">Software Engineer</AxCardDescription>
                        </div>
                      </div>
                    </AxCardHeader>
                    <AxCardContent>
                      <p className="text-sm">Passionate about creating amazing user experiences with modern web technologies.</p>
                    </AxCardContent>
                    <AxCardFooter>
                      <AxButton size="sm" variant="ghost">Follow</AxButton>
                      <AxButton size="sm" variant="outline">Message</AxButton>
                    </AxCardFooter>
                  </AxCard>

                  {/* Stats Card */}
                  <AxCard variant="ghost" className="text-center">
                    <AxCardContent padding="lg">
                      <div className="text-3xl font-bold text-primary mb-2">1,234</div>
                      <AxLabel size="lg" weight="semibold">Total Users</AxLabel>
                      <AxCardDescription size="sm" className="mt-2">
                        +12% from last month
                      </AxCardDescription>
                    </AxCardContent>
                  </AxCard>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Props</h2>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">AxCard Props</div>
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
                      <td>'sm' | 'default' | 'lg' | 'xl'</td>
                      <td>'default'</td>
                      <td>Shadow intensity</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">variant</td>
                      <td>'default' | 'outline' | 'ghost' | 'elevated'</td>
                      <td>'default'</td>
                      <td>Visual style variant</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">padding</td>
                      <td>'none' | 'sm' | 'default' | 'lg'</td>
                      <td>'none'</td>
                      <td>Card padding</td>
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

export default AxCardPage;
