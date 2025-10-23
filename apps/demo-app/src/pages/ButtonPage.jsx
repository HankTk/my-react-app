import React, { useState } from 'react';
import { AxButton } from '@ax/uilib';
import './PageStyles.css';

const AxButtonPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="page-container">
      <div className="page-content">
        <header className="page-header">
          <h1 className="page-title">AxButton Component</h1>
          <p className="page-subtitle">A versatile button component with multiple variants and sizes.</p>
        </header>

        <div className="page-sections">
          <section className="page-section">
            <h2 className="page-section-title">Loading States</h2>
            <p className="page-section-text">Buttons with loading states for async operations.</p>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">Loading Examples</div>
                <div className="button-page-loading-buttons">
                  <AxButton loading>Loading Button</AxButton>
                  <AxButton variant="outline" loading>Loading Outline</AxButton>
                  <AxButton variant="destructive" loading>Loading Destructive</AxButton>
                </div>
              </div>
            </div>
          </section>

          <section className="button-page-section">
            <h2 className="button-page-section-title">Variants</h2>
            <p className="button-page-text">Different visual styles for different use cases.</p>
            <div className="button-page-variants-grid">
              <div className="button-page-variant-item">
                <AxButton variant="default">Default</AxButton>
                <p className="button-page-variant-description">Primary action</p>
              </div>
              <div className="button-page-variant-item">
                <AxButton variant="destructive">Destructive</AxButton>
                <p className="button-page-variant-description">Dangerous action</p>
              </div>
              <div className="button-page-variant-item">
                <AxButton variant="outline">Outline</AxButton>
                <p className="button-page-variant-description">Secondary action</p>
              </div>
              <div className="button-page-variant-item">
                <AxButton variant="secondary">Secondary</AxButton>
                <p className="button-page-variant-description">Alternative action</p>
              </div>
              <div className="button-page-variant-item">
                <AxButton variant="ghost">Ghost</AxButton>
                <p className="button-page-variant-description">Subtle action</p>
              </div>
              <div className="button-page-variant-item">
                <AxButton variant="link">Link</AxButton>
                <p className="button-page-variant-description">Navigation action</p>
              </div>
            </div>
          </section>

          <section className="button-page-section">
            <h2 className="button-page-section-title">Sizes</h2>
            <p className="button-page-text">Different sizes for different contexts.</p>
            <div className="button-page-sizes-container">
              <div className="button-page-size-group">
                <h3 className="button-page-size-group-title">Standard Sizes</h3>
                <div className="button-page-size-buttons">
                  <AxButton size="xs">Extra Small</AxButton>
                  <AxButton size="sm">Small</AxButton>
                  <AxButton size="default">Default</AxButton>
                  <AxButton size="lg">Large</AxButton>
                  <AxButton size="xl">Extra Large</AxButton>
                  <AxButton size="2xl">2X Large</AxButton>
                </div>
              </div>
              <div className="button-page-size-group">
                <h3 className="button-page-size-group-title">Icon Sizes</h3>
                <div className="button-page-size-buttons">
                  <AxButton size="icon-sm">🚀</AxButton>
                  <AxButton size="icon">🚀</AxButton>
                  <AxButton size="icon-lg">🚀</AxButton>
                </div>
              </div>
              <div className="button-page-size-group">
                <h3 className="button-page-size-group-title">Responsive Size</h3>
                <div className="button-page-size-buttons">
                  <AxButton size="responsive">Responsive Button</AxButton>
                  <span className="button-page-variant-description">Adapts to screen size</span>
                </div>
              </div>
            </div>
          </section>

          <section className="button-page-section">
            <h2 className="button-page-section-title">Font Size & Spacing Analysis</h2>
            <p className="button-page-text">How font sizes and spacing work together for optimal visual hierarchy.</p>
            <div className="button-page-analysis-container">
              <div className="button-page-analysis-group">
                <h3 className="button-page-analysis-group-title">Size Comparison with Same Text</h3>
                <div className="button-page-size-comparison">
                  <div className="button-page-size-row">
                    <span className="button-page-size-label">XS:</span>
                    <AxButton size="xs">Button Text</AxButton>
                    <span className="button-page-size-description">text-xs (12px) + h-6 + px-2 py-1</span>
                  </div>
                  <div className="button-page-size-row">
                    <span className="button-page-size-label">SM:</span>
                    <AxButton size="sm">Button Text</AxButton>
                    <span className="button-page-size-description">text-sm (14px) + h-8 + px-3 py-1.5</span>
                  </div>
                  <div className="button-page-size-row">
                    <span className="button-page-size-label">Default:</span>
                    <AxButton size="default">Button Text</AxButton>
                    <span className="button-page-size-description">text-sm (14px) + h-10 + px-4 py-2</span>
                  </div>
                  <div className="button-page-size-row">
                    <span className="button-page-size-label">LG:</span>
                    <AxButton size="lg">Button Text</AxButton>
                    <span className="button-page-size-description">text-base (16px) + h-11 + px-6 py-2.5</span>
                  </div>
                  <div className="button-page-size-row">
                    <span className="button-page-size-label">XL:</span>
                    <AxButton size="xl">Button Text</AxButton>
                    <span className="button-page-size-description">text-lg (18px) + h-12 + px-8 py-3</span>
                  </div>
                  <div className="button-page-size-row">
                    <span className="button-page-size-label">2XL:</span>
                    <AxButton size="2xl">Button Text</AxButton>
                    <span className="button-page-size-description">text-xl (20px) + h-14 + px-10 py-4</span>
                  </div>
                </div>
              </div>
              
              <div className="button-page-analysis-group">
                <h3 className="button-page-analysis-group-title">Spacing Principles</h3>
                <div className="button-page-principles">
                  <p className="button-page-principle-item"><strong>Vertical Spacing (py):</strong> Font sizeに比例して調整（text-xs → py-1, text-sm → py-2, text-lg → py-3）</p>
                  <p className="button-page-principle-item"><strong>Horizontal Spacing (px):</strong> ボタンサイズに応じて段階的に増加（2px → 3px → 4px → 6px → 8px → 10px）</p>
                  <p className="button-page-principle-item"><strong>Height (h):</strong> フォントサイズとパディングの合計で視覚的バランスを保持</p>
                  <p className="button-page-principle-item"><strong>Typography Scale:</strong> Tailwindのデフォルトスケール（xs: 12px, sm: 14px, base: 16px, lg: 18px, xl: 20px）</p>
                </div>
              </div>
            </div>
          </section>

          <section className="button-page-section">
            <h2 className="button-page-section-title">Width Variants</h2>
            <p className="button-page-text">Control button width with token-based sizing.</p>
            <div className="button-page-width-container">
              <div className="button-page-width-group">
                <h3 className="button-page-width-group-title">Responsive Widths</h3>
                <div className="button-page-width-buttons">
                  <AxButton width="auto">Auto Width</AxButton>
                  <AxButton width="fit">Fit Content</AxButton>
                  <AxButton width="full">Full Width</AxButton>
                </div>
              </div>
              <div className="button-page-width-group">
                <h3 className="button-page-width-group-title">Fractional Widths</h3>
                <div className="button-page-width-grid">
                  <AxButton width="1/4">1/4 Width</AxButton>
                  <AxButton width="1/3">1/3 Width</AxButton>
                  <AxButton width="1/2">1/2 Width</AxButton>
                  <AxButton width="2/3">2/3 Width</AxButton>
                  <AxButton width="3/4">3/4 Width</AxButton>
                </div>
              </div>
              <div className="button-page-width-group">
                <h3 className="button-page-width-group-title">Min/Max Widths</h3>
                <div className="button-page-width-buttons-horizontal">
                  <AxButton width="min">Min Width</AxButton>
                  <AxButton width="max">Max Width</AxButton>
                </div>
              </div>
            </div>
          </section>

          <section className="button-page-section">
            <h2 className="button-page-section-title">Interactive Example</h2>
            <p className="button-page-text">Click the button to see it in action.</p>
            <div className="button-page-interactive-container">
              <div className="button-page-interactive-group">
                <div className="button-page-interactive-buttons">
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
              </div>
            </div>
          </section>

          <section className="button-page-section">
            <h2 className="button-page-section-title">Disabled State</h2>
            <p className="button-page-text">Buttons can be disabled to prevent interaction.</p>
            <div className="button-page-interactive-container">
              <div className="button-page-interactive-group">
                <div className="button-page-interactive-buttons">
                  <AxButton disabled>Disabled Default</AxButton>
                  <AxButton variant="destructive" disabled>Disabled Destructive</AxButton>
                  <AxButton variant="outline" disabled>Disabled Outline</AxButton>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Props</h2>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">AxButton Props</div>
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
                      <td className="page-prop-name">variant</td>
                      <td>'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'</td>
                      <td>'default'</td>
                      <td>Visual style variant</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">size</td>
                      <td>'xs' | 'sm' | 'default' | 'lg' | 'xl' | '2xl' | 'icon' | 'icon-sm' | 'icon-lg' | 'responsive'</td>
                      <td>'default'</td>
                      <td>Size of the button with responsive options</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">width</td>
                      <td>'auto' | 'full' | 'fit' | '1/2' | '1/3' | '2/3' | '1/4' | '3/4' | 'min' | 'max'</td>
                      <td>'auto'</td>
                      <td>Width of the button</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">disabled</td>
                      <td>boolean</td>
                      <td>false</td>
                      <td>Whether the button is disabled</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">asChild</td>
                      <td>boolean</td>
                      <td>false</td>
                      <td>Render as child element</td>
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

export default AxButtonPage;