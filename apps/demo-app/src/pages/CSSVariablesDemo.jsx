import React from 'react';
import './CSSVariablesDemo.css';

const CSSVariablesDemo = () => {
  return (
    <div className="css-variables-demo">
      <div className="demo-container">
        <h1 className="demo-title">CSS Variables Demo</h1>
        <p className="demo-subtitle">
          This page demonstrates how to use CSS variables in your project
        </p>

        <div className="demo-section">
          <h2 className="demo-section-title">Spacing Variables</h2>
          <div className="spacing-demo">
            <div className="spacing-box spacing-xs">XS Spacing</div>
            <div className="spacing-box spacing-sm">SM Spacing</div>
            <div className="spacing-box spacing-md">MD Spacing</div>
            <div className="spacing-box spacing-lg">LG Spacing</div>
            <div className="spacing-box spacing-xl">XL Spacing</div>
          </div>
        </div>

        <div className="demo-section">
          <h2 className="demo-section-title">Typography Variables</h2>
          <div className="typography-demo">
            <p className="text-xs">Extra Small Text</p>
            <p className="text-sm">Small Text</p>
            <p className="text-base">Base Text</p>
            <p className="text-lg">Large Text</p>
            <p className="text-xl">Extra Large Text</p>
          </div>
        </div>

        <div className="demo-section">
          <h2 className="demo-section-title">Shadow Variables</h2>
          <div className="shadow-demo">
            <div className="shadow-box shadow-sm">Small Shadow</div>
            <div className="shadow-box shadow-md">Medium Shadow</div>
            <div className="shadow-box shadow-lg">Large Shadow</div>
          </div>
        </div>

        <div className="demo-section">
          <h2 className="demo-section-title">Color Variables</h2>
          <div className="color-demo">
            <div className="color-box primary">Primary</div>
            <div className="color-box secondary">Secondary</div>
            <div className="color-box accent">Accent</div>
            <div className="color-box muted">Muted</div>
            <div className="color-box destructive">Destructive</div>
          </div>
        </div>

        <div className="demo-section">
          <h2 className="demo-section-title">Custom Variables</h2>
          <div className="custom-demo">
            <div className="custom-box">Custom Box with CSS Variables</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSSVariablesDemo;
