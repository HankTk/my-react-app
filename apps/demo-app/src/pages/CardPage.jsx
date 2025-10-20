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
} from '@my-org/react-component-library';

const AxCardPage = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">AxCard Component</h1>
          <p className="text-muted-foreground">A flexible card component with multiple variants, sizes, and layouts.</p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Basic Card</h2>
            <p className="text-muted-foreground mb-6">Simple card with header, content, and footer.</p>
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
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Card Variants</h2>
            <p className="text-muted-foreground mb-6">Different visual styles for different contexts.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <AxCard variant="default">
                <AxCardHeader padding="sm">
                  <AxCardTitle size="sm">Default Card</AxCardTitle>
                  <AxCardDescription size="xs">Standard card style</AxCardDescription>
                </AxCardHeader>
                <AxCardContent padding="sm">
                  <p className="text-sm">Default variant with standard border and shadow.</p>
                </AxCardContent>
              </AxCard>

              <AxCard variant="outline">
                <AxCardHeader padding="sm">
                  <AxCardTitle size="sm">Outline Card</AxCardTitle>
                  <AxCardDescription size="xs">Bold border style</AxCardDescription>
                </AxCardHeader>
                <AxCardContent padding="sm">
                  <p className="text-sm">Outline variant with thicker border.</p>
                </AxCardContent>
              </AxCard>

              <AxCard variant="ghost">
                <AxCardHeader padding="sm">
                  <AxCardTitle size="sm">Ghost Card</AxCardTitle>
                  <AxCardDescription size="xs">Minimal style</AxCardDescription>
                </AxCardHeader>
                <AxCardContent padding="sm">
                  <p className="text-sm">Ghost variant with no border or shadow.</p>
                </AxCardContent>
              </AxCard>

              <AxCard variant="elevated">
                <AxCardHeader padding="sm">
                  <AxCardTitle size="sm">Elevated Card</AxCardTitle>
                  <AxCardDescription size="xs">Prominent style</AxCardDescription>
                </AxCardHeader>
                <AxCardContent padding="sm">
                  <p className="text-sm">Elevated variant with strong shadow.</p>
                </AxCardContent>
              </AxCard>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Card Sizes</h2>
            <p className="text-muted-foreground mb-6">Different shadow intensities for different emphasis levels.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Padding Variants</h2>
            <p className="text-muted-foreground mb-6">Different padding sizes for different content densities.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Complex Card Layouts</h2>
            <p className="text-muted-foreground mb-6">Real-world examples of card usage.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Product Card */}
              <AxCard variant="elevated" className="overflow-hidden">
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
              <AxCard variant="outline">
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
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Props</h2>
            <div className="bg-card border rounded-lg p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">AxCard Props</h3>
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
                        <td className="p-2">'sm' | 'default' | 'lg' | 'xl'</td>
                        <td className="p-2">'default'</td>
                        <td className="p-2">Shadow intensity</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">variant</td>
                        <td className="p-2">'default' | 'outline' | 'ghost' | 'elevated'</td>
                        <td className="p-2">'default'</td>
                        <td className="p-2">Visual style variant</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">padding</td>
                        <td className="p-2">'none' | 'sm' | 'default' | 'lg'</td>
                        <td className="p-2">'none'</td>
                        <td className="p-2">Card padding</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Subcomponent Props</h3>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p><strong className="text-foreground">AxCardTitle:</strong> size ('sm' | 'default' | 'lg')</p>
                    <p><strong className="text-foreground">AxCardDescription:</strong> size ('xs' | 'sm' | 'default' | 'lg')</p>
                    <p><strong className="text-foreground">AxCardHeader/Content/Footer:</strong> padding ('none' | 'sm' | 'default' | 'lg')</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AxCardPage;
