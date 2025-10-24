import React from 'react';
import { AxButton } from '@ax/uilib';
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
            <AxButton variant="default" size="xs" className="spacing-box spacing-xs">XS Spacing</AxButton>
            <AxButton variant="default" size="sm" className="spacing-box spacing-sm">SM Spacing</AxButton>
            <AxButton variant="default" size="default" className="spacing-box spacing-md">MD Spacing</AxButton>
            <AxButton variant="default" size="lg" className="spacing-box spacing-lg">LG Spacing</AxButton>
            <AxButton variant="default" size="xl" className="spacing-box spacing-xl">XL Spacing</AxButton>
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
            <AxButton variant="secondary" size="sm" className="shadow-box shadow-sm">Small Shadow</AxButton>
            <AxButton variant="secondary" size="sm" className="shadow-box shadow-md">Medium Shadow</AxButton>
            <AxButton variant="secondary" size="sm" className="shadow-box shadow-lg">Large Shadow</AxButton>
          </div>
        </div>

        <div className="demo-section">
          <h2 className="demo-section-title">Color Variables</h2>
          <div className="color-demo">
            <AxButton variant="default" size="sm" className="color-box primary">Primary</AxButton>
            <AxButton variant="secondary" size="sm" className="color-box secondary">Secondary</AxButton>
            <AxButton variant="outline" size="sm" className="color-box accent">Accent</AxButton>
            <AxButton variant="outline" size="sm" className="color-box muted">Muted</AxButton>
            <AxButton variant="destructive" size="sm" className="color-box destructive">Destructive</AxButton>
          </div>
        </div>

        <div className="demo-section">
          <h2 className="demo-section-title">Custom Variables</h2>
          <div className="custom-demo">
            <AxButton variant="default" size="lg" className="custom-box">Custom Box with CSS Variables</AxButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSSVariablesDemo;
