import React, { useState } from 'react';
import { AxButton } from '@my-org/react-component-library';

const AxButtonPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">AxButton Component</h1>
          <p className="text-muted-foreground">A versatile button component with multiple variants and sizes.</p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Test Tailwind CSS</h2>
            <p className="text-muted-foreground mb-6">Testing if Tailwind CSS is working correctly.</p>
            <div className="space-y-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Test Tailwind Button
              </button>
              <div className="bg-red-100 text-red-800 p-4 rounded">
                This should be red background with red text if Tailwind is working
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Variants</h2>
            <p className="text-muted-foreground mb-6">Different visual styles for different use cases.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="space-y-2">
                <AxButton variant="default">Default</AxButton>
                <p className="text-sm text-muted-foreground">Primary action</p>
              </div>
              <div className="space-y-2">
                <AxButton variant="destructive">Destructive</AxButton>
                <p className="text-sm text-muted-foreground">Dangerous action</p>
              </div>
              <div className="space-y-2">
                <AxButton variant="outline">Outline</AxButton>
                <p className="text-sm text-muted-foreground">Secondary action</p>
              </div>
              <div className="space-y-2">
                <AxButton variant="secondary">Secondary</AxButton>
                <p className="text-sm text-muted-foreground">Alternative action</p>
              </div>
              <div className="space-y-2">
                <AxButton variant="ghost">Ghost</AxButton>
                <p className="text-sm text-muted-foreground">Subtle action</p>
              </div>
              <div className="space-y-2">
                <AxButton variant="link">Link</AxButton>
                <p className="text-sm text-muted-foreground">Navigation action</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Sizes</h2>
            <p className="text-muted-foreground mb-6">Different sizes for different contexts.</p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Standard Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <AxButton size="xs">Extra Small</AxButton>
                  <AxButton size="sm">Small</AxButton>
                  <AxButton size="default">Default</AxButton>
                  <AxButton size="lg">Large</AxButton>
                  <AxButton size="xl">Extra Large</AxButton>
                  <AxButton size="2xl">2X Large</AxButton>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Icon Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <AxButton size="icon-sm">🚀</AxButton>
                  <AxButton size="icon">🚀</AxButton>
                  <AxButton size="icon-lg">🚀</AxButton>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Responsive Size</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <AxButton size="responsive">Responsive Button</AxButton>
                  <span className="text-xs text-muted-foreground">Adapts to screen size</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Font Size & Spacing Analysis</h2>
            <p className="text-muted-foreground mb-6">How font sizes and spacing work together for optimal visual hierarchy.</p>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-4">Size Comparison with Same Text</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="w-16 text-sm text-muted-foreground">XS:</span>
                    <AxButton size="xs">Button Text</AxButton>
                    <span className="text-xs text-muted-foreground">text-xs (12px) + h-6 + px-2 py-1</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-16 text-sm text-muted-foreground">SM:</span>
                    <AxButton size="sm">Button Text</AxButton>
                    <span className="text-xs text-muted-foreground">text-sm (14px) + h-8 + px-3 py-1.5</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-16 text-sm text-muted-foreground">Default:</span>
                    <AxButton size="default">Button Text</AxButton>
                    <span className="text-xs text-muted-foreground">text-sm (14px) + h-10 + px-4 py-2</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-16 text-sm text-muted-foreground">LG:</span>
                    <AxButton size="lg">Button Text</AxButton>
                    <span className="text-xs text-muted-foreground">text-base (16px) + h-11 + px-6 py-2.5</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-16 text-sm text-muted-foreground">XL:</span>
                    <AxButton size="xl">Button Text</AxButton>
                    <span className="text-xs text-muted-foreground">text-lg (18px) + h-12 + px-8 py-3</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-16 text-sm text-muted-foreground">2XL:</span>
                    <AxButton size="2xl">Button Text</AxButton>
                    <span className="text-xs text-muted-foreground">text-xl (20px) + h-14 + px-10 py-4</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-foreground mb-4">Spacing Principles</h3>
                <div className="bg-card border rounded-lg p-6">
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p><strong className="text-foreground">Vertical Spacing (py):</strong> Font sizeに比例して調整（text-xs → py-1, text-sm → py-2, text-lg → py-3）</p>
                    <p><strong className="text-foreground">Horizontal Spacing (px):</strong> ボタンサイズに応じて段階的に増加（2px → 3px → 4px → 6px → 8px → 10px）</p>
                    <p><strong className="text-foreground">Height (h):</strong> フォントサイズとパディングの合計で視覚的バランスを保持</p>
                    <p><strong className="text-foreground">Typography Scale:</strong> Tailwindのデフォルトスケール（xs: 12px, sm: 14px, base: 16px, lg: 18px, xl: 20px）</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Width Variants</h2>
            <p className="text-muted-foreground mb-6">Control button width with token-based sizing.</p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Responsive Widths</h3>
                <div className="space-y-2">
                  <AxButton width="auto">Auto Width</AxButton>
                  <AxButton width="fit">Fit Content</AxButton>
                  <AxButton width="full">Full Width</AxButton>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Fractional Widths</h3>
                <div className="grid grid-cols-2 gap-2">
                  <AxButton width="1/4">1/4 Width</AxButton>
                  <AxButton width="1/3">1/3 Width</AxButton>
                  <AxButton width="1/2">1/2 Width</AxButton>
                  <AxButton width="2/3">2/3 Width</AxButton>
                  <AxButton width="3/4">3/4 Width</AxButton>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Min/Max Widths</h3>
                <div className="space-y-2">
                  <AxButton width="min">Min Width</AxButton>
                  <AxButton width="max">Max Width</AxButton>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Interactive Example</h2>
            <p className="text-muted-foreground mb-6">Click the button to see it in action.</p>
            <div className="flex items-center gap-4">
              <AxButton 
                variant="default" 
                onClick={() => setCount(count + 1)}
              >
                Count: {count}
              </AxButton>
              <AxButton 
                variant="outline" 
                onClick={() => setCount(0)}
              >
                Reset
              </AxButton>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Disabled State</h2>
            <p className="text-muted-foreground mb-6">Buttons can be disabled to prevent interaction.</p>
            <div className="flex flex-wrap gap-4">
              <AxButton disabled>Disabled Default</AxButton>
              <AxButton variant="destructive" disabled>Disabled Destructive</AxButton>
              <AxButton variant="outline" disabled>Disabled Outline</AxButton>
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
                    <td className="p-2 font-mono">variant</td>
                    <td className="p-2">'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'</td>
                    <td className="p-2">'default'</td>
                    <td className="p-2">Visual style variant</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">size</td>
                    <td className="p-2">'xs' | 'sm' | 'default' | 'lg' | 'xl' | '2xl' | 'icon' | 'icon-sm' | 'icon-lg' | 'responsive'</td>
                    <td className="p-2">'default'</td>
                    <td className="p-2">Size of the button with responsive options</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">width</td>
                    <td className="p-2">'auto' | 'full' | 'fit' | '1/2' | '1/3' | '2/3' | '1/4' | '3/4' | 'min' | 'max'</td>
                    <td className="p-2">'auto'</td>
                    <td className="p-2">Width of the button</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">disabled</td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Whether the button is disabled</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">asChild</td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Render as child element</td>
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

export default AxButtonPage;