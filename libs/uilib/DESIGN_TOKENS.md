# Design Token System - Figma Style

This document outlines the comprehensive design token system implemented following Figma's naming conventions and best practices.

## Overview

Our design token system provides a scalable, maintainable approach to design consistency across all components. It follows Figma's semantic naming patterns and includes comprehensive token categories.

## Token Categories

### 1. Color Tokens

#### Raw Color Tokens
Raw color tokens follow the pattern: `--color-{color-name}-{shade}`

```css
/* Primary Colors */
--color-primary-50: 239 246 255;
--color-primary-100: 219 234 254;
--color-primary-200: 191 219 254;
--color-primary-300: 147 197 253;
--color-primary-400: 96 165 250;
--color-primary-500: 59 130 246;
--color-primary-600: 37 99 235;
--color-primary-700: 29 78 216;
--color-primary-800: 30 64 175;
--color-primary-900: 30 58 138;
--color-primary-950: 23 37 84;

/* Neutral Colors */
--color-neutral-50: 250 250 250;
--color-neutral-100: 245 245 245;
--color-neutral-200: 229 229 229;
--color-neutral-300: 212 212 212;
--color-neutral-400: 163 163 163;
--color-neutral-500: 115 115 115;
--color-neutral-600: 82 82 82;
--color-neutral-700: 64 64 64;
--color-neutral-800: 38 38 38;
--color-neutral-900: 23 23 23;
--color-neutral-950: 10 10 10;

/* Success Colors */
--color-success-50: 240 253 244;
--color-success-500: 34 197 94;
--color-success-600: 22 163 74;

/* Warning Colors */
--color-warning-50: 255 251 235;
--color-warning-500: 245 158 11;
--color-warning-600: 217 119 6;

/* Error Colors */
--color-error-50: 254 242 242;
--color-error-500: 239 68 68;
--color-error-600: 220 38 38;
```

#### Semantic Color Tokens
Semantic tokens map raw colors to specific use cases:

```css
/* Background Colors */
--color-background-primary: var(--color-neutral-50);
--color-background-secondary: var(--color-neutral-100);
--color-background-tertiary: var(--color-neutral-200);
--color-background-elevated: 255 255 255;

/* Text Colors */
--color-text-primary: var(--color-neutral-900);
--color-text-secondary: var(--color-neutral-700);
--color-text-tertiary: var(--color-neutral-500);
--color-text-disabled: var(--color-neutral-400);
--color-text-inverse: var(--color-neutral-50);

/* Border Colors */
--color-border-primary: var(--color-neutral-200);
--color-border-secondary: var(--color-neutral-300);
--color-border-focus: var(--color-primary-500);
--color-border-error: var(--color-error-500);
--color-border-success: var(--color-success-500);
--color-border-warning: var(--color-warning-500);

/* Interactive Colors */
--color-interactive-primary: var(--color-primary-500);
--color-interactive-primary-hover: var(--color-primary-600);
--color-interactive-primary-active: var(--color-primary-700);
--color-interactive-primary-disabled: var(--color-neutral-300);
```

### 2. Spacing Tokens

Spacing tokens follow the pattern: `--spacing-{size}`

```css
--spacing-0: 0;
--spacing-px: 1px;
--spacing-0_5: 0.125rem;  /* 2px */
--spacing-1: 0.25rem;     /* 4px */
--spacing-1_5: 0.375rem;  /* 6px */
--spacing-2: 0.5rem;      /* 8px */
--spacing-2_5: 0.625rem;  /* 10px */
--spacing-3: 0.75rem;     /* 12px */
--spacing-3_5: 0.875rem;  /* 14px */
--spacing-4: 1rem;        /* 16px */
--spacing-5: 1.25rem;     /* 20px */
--spacing-6: 1.5rem;      /* 24px */
--spacing-8: 2rem;        /* 32px */
--spacing-10: 2.5rem;     /* 40px */
--spacing-12: 3rem;       /* 48px */
--spacing-16: 4rem;       /* 64px */
--spacing-20: 5rem;       /* 80px */
--spacing-24: 6rem;       /* 96px */
--spacing-32: 8rem;       /* 128px */
--spacing-40: 10rem;      /* 160px */
--spacing-48: 12rem;      /* 192px */
--spacing-64: 16rem;      /* 256px */
--spacing-80: 20rem;      /* 320px */
--spacing-96: 24rem;      /* 384px */
```

### 3. Typography Tokens

#### Font Families
```css
--font-family-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
--font-family-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
--font-family-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
```

#### Font Sizes
```css
--font-size-xs: 0.75rem;      /* 12px */
--font-size-sm: 0.875rem;     /* 14px */
--font-size-base: 1rem;       /* 16px */
--font-size-lg: 1.125rem;     /* 18px */
--font-size-xl: 1.25rem;      /* 20px */
--font-size-2xl: 1.5rem;      /* 24px */
--font-size-3xl: 1.875rem;    /* 30px */
--font-size-4xl: 2.25rem;     /* 36px */
--font-size-5xl: 3rem;        /* 48px */
--font-size-6xl: 3.75rem;     /* 60px */
--font-size-7xl: 4.5rem;      /* 72px */
--font-size-8xl: 6rem;        /* 96px */
--font-size-9xl: 8rem;        /* 128px */
```

#### Font Weights
```css
--font-weight-thin: 100;
--font-weight-extralight: 200;
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
--font-weight-black: 900;
```

#### Line Heights
```css
--line-height-none: 1;
--line-height-tight: 1.25;
--line-height-snug: 1.375;
--line-height-normal: 1.5;
--line-height-relaxed: 1.625;
--line-height-loose: 2;
```

### 4. Border Radius Tokens

```css
--radius-none: 0;
--radius-sm: 0.125rem;        /* 2px */
--radius-base: 0.25rem;       /* 4px */
--radius-md: 0.375rem;        /* 6px */
--radius-lg: 0.5rem;          /* 8px */
--radius-xl: 0.75rem;          /* 12px */
--radius-2xl: 1rem;            /* 16px */
--radius-3xl: 1.5rem;          /* 24px */
--radius-full: 9999px;
```

### 5. Shadow Tokens

```css
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
--shadow-base: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
--shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
--shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);
--shadow-none: 0 0 #0000;
```

### 6. Z-Index Tokens

```css
--z-index-hide: -1;
--z-index-auto: auto;
--z-index-base: 0;
--z-index-docked: 10;
--z-index-dropdown: 1000;
--z-index-sticky: 1100;
--z-index-banner: 1200;
--z-index-overlay: 1300;
--z-index-modal: 1400;
--z-index-popover: 1500;
--z-index-skipLink: 1600;
--z-index-toast: 1700;
--z-index-tooltip: 1800;
```

### 7. Transition Tokens

```css
--transition-none: none;
--transition-all: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-colors: color 150ms cubic-bezier(0.4, 0, 0.2, 1), background-color 150ms cubic-bezier(0.4, 0, 0.2, 1), border-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-opacity: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-shadow: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-transform: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
```

### 8. Breakpoint Tokens

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

## Dark Mode Support

All tokens automatically adapt to dark mode through CSS custom property inheritance:

```css
.dark {
  /* Background Colors */
  --color-background-primary: var(--color-neutral-900);
  --color-background-secondary: var(--color-neutral-800);
  --color-background-tertiary: var(--color-neutral-700);
  --color-background-elevated: var(--color-neutral-800);

  /* Text Colors */
  --color-text-primary: var(--color-neutral-50);
  --color-text-secondary: var(--color-neutral-200);
  --color-text-tertiary: var(--color-neutral-400);
  --color-text-disabled: var(--color-neutral-600);
  --color-text-inverse: var(--color-neutral-900);

  /* Shadow adjustments for dark mode */
  --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px -1px rgba(0, 0, 0, 0.4);
  /* ... more dark mode overrides */
}
```

## Component Usage Examples

### Button Component

```tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primary variants - using semantic naming
        primary: "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active",
        "primary-outline": "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        "primary-ghost": "text-primary hover:bg-primary/10",
        
        // Secondary variants
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover active:bg-secondary-active",
        "secondary-outline": "border border-secondary text-secondary-foreground hover:bg-secondary",
        "secondary-ghost": "text-secondary-foreground hover:bg-secondary/10",
        
        // Destructive variants
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive-hover active:bg-destructive-active",
        "destructive-outline": "border border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground",
        "destructive-ghost": "text-destructive hover:bg-destructive/10",
        
        // Success variants
        success: "bg-success text-success-foreground hover:bg-success/90",
        "success-outline": "border border-success text-success hover:bg-success hover:text-success-foreground",
        "success-ghost": "text-success hover:bg-success/10",
        
        // Warning variants
        warning: "bg-warning text-warning-foreground hover:bg-warning/90",
        "warning-outline": "border border-warning text-warning hover:bg-warning hover:text-warning-foreground",
        "warning-ghost": "text-warning hover:bg-warning/10",
        
        // Neutral variants
        neutral: "bg-background-secondary text-foreground hover:bg-background-tertiary",
        "neutral-outline": "border border-border text-foreground hover:bg-background-secondary",
        "neutral-ghost": "text-foreground hover:bg-background-secondary",
        
        // Link variant
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        // Size tokens following Figma conventions
        xs: "h-6 px-2 text-xs",
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-6 text-base",
        xl: "h-12 px-8 text-lg",
        "2xl": "h-14 px-10 text-xl",
        
        // Icon-only variants
        "icon-xs": "h-6 w-6",
        "icon-sm": "h-8 w-8",
        "icon-md": "h-10 w-10",
        "icon-lg": "h-12 w-12",
        "icon-xl": "h-14 w-14",
        
        // Responsive size
        responsive: "h-8 px-3 text-sm sm:h-10 sm:px-4 sm:text-sm lg:h-11 lg:px-6 lg:text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)
```

### Card Component

```tsx
const cardVariants = cva(
  "rounded-lg border bg-card text-card-foreground",
  {
    variants: {
      size: {
        sm: "shadow-sm",
        md: "shadow-sm",
        lg: "shadow-md",
        xl: "shadow-lg",
      },
      variant: {
        default: "border-border",
        outline: "border-2 border-border",
        ghost: "border-transparent shadow-none",
        elevated: "border-border shadow-lg transform -translate-y-1 transition-all duration-300 hover:shadow-xl hover:-translate-y-2",
      },
      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
      padding: "md",
    },
  }
)
```

## Tailwind Integration

The design tokens are fully integrated with Tailwind CSS:

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        // Semantic color tokens
        background: {
          DEFAULT: "rgb(var(--color-background-primary))",
          secondary: "rgb(var(--color-background-secondary))",
          tertiary: "rgb(var(--color-background-tertiary))",
          elevated: "rgb(var(--color-background-elevated))",
        },
        foreground: {
          DEFAULT: "rgb(var(--color-text-primary))",
          secondary: "rgb(var(--color-text-secondary))",
          tertiary: "rgb(var(--color-text-tertiary))",
          disabled: "rgb(var(--color-text-disabled))",
          inverse: "rgb(var(--color-text-inverse))",
        },
        // ... more semantic colors
      },
      spacing: {
        // Use design token spacing
        '0': 'var(--spacing-0)',
        'px': 'var(--spacing-px)',
        '0.5': 'var(--spacing-0_5)',
        '1': 'var(--spacing-1)',
        // ... more spacing tokens
      },
      fontSize: {
        'xs': ['var(--font-size-xs)', { lineHeight: 'var(--line-height-tight)' }],
        'sm': ['var(--font-size-sm)', { lineHeight: 'var(--line-height-normal)' }],
        'base': ['var(--font-size-base)', { lineHeight: 'var(--line-height-normal)' }],
        // ... more font sizes
      },
    },
  },
}
```

## Best Practices

### 1. Naming Conventions
- Use semantic names for component-specific tokens
- Use descriptive names that indicate purpose (e.g., `primary`, `secondary`, `destructive`)
- Follow Figma's naming patterns for consistency

### 2. Token Hierarchy
- Raw tokens (e.g., `--color-primary-500`) for base values
- Semantic tokens (e.g., `--color-interactive-primary`) for specific use cases
- Component-specific tokens when needed

### 3. Dark Mode
- Always provide dark mode variants
- Use CSS custom property inheritance for automatic theme switching
- Test both light and dark modes thoroughly

### 4. Responsive Design
- Use responsive tokens for components that adapt to screen size
- Provide breakpoint-specific variants when needed

### 5. Accessibility
- Ensure sufficient color contrast ratios
- Provide focus states for interactive elements
- Test with screen readers and keyboard navigation

## Migration Guide

### From Legacy Tokens
If migrating from legacy tokens, follow these steps:

1. **Map Legacy to New**: Create a mapping of old tokens to new semantic tokens
2. **Update Components**: Replace hardcoded values with semantic tokens
3. **Test Thoroughly**: Ensure all variants work correctly in both themes
4. **Remove Legacy**: Clean up old token definitions

### Example Migration
```css
/* Old */
--primary: 221.2 83.2% 53.3%;

/* New */
--color-interactive-primary: var(--color-primary-500);
```

## Usage Examples

```tsx
// Button with semantic variants
<AxButton variant="primary" size="md">Primary Button</AxButton>
<AxButton variant="primary-outline" size="lg">Outline Button</AxButton>
<AxButton variant="destructive" size="sm">Delete</AxButton>

// Card with semantic variants
<AxCard variant="elevated" size="lg" padding="md">
  <AxCardHeader padding="md">
    <AxCardTitle size="lg">Card Title</AxCardTitle>
    <AxCardDescription size="md">Card description</AxCardDescription>
  </AxCardHeader>
</AxCard>

// Input with semantic variants (note: uses inputSize prop to avoid conflict with native HTML size attribute)
<AxInput variant="default" inputSize="md" placeholder="Enter text..." />
<AxInput variant="success" inputSize="lg" placeholder="Success state" />

// Label with semantic variants
<AxLabel variant="default" size="md" weight="medium">Label Text</AxLabel>
<AxLabel variant="muted" size="sm" weight="normal">Helper Text</AxLabel>

// Modal with semantic variants
<AxModal size="md" open={isOpen} onOpenChange={setIsOpen}>
  <AxModalContent variant="default" size="md">
    <AxModalHeader padding="md">
      <AxModalTitle size="md">Modal Title</AxModalTitle>
      <AxModalDescription size="md">Modal description</AxModalDescription>
    </AxModalHeader>
    <AxModalBody padding="md">
      Modal content goes here
    </AxModalBody>
    <AxModalFooter padding="md">
      <AxButton variant="primary" size="sm">Confirm</AxButton>
    </AxModalFooter>
  </AxModalContent>
</AxModal>
```

## Conclusion

This design token system provides a robust foundation for maintaining design consistency across your application. By following Figma's naming conventions and implementing semantic tokens, you ensure that your design system is both maintainable and scalable.

The system automatically handles dark mode, provides comprehensive token coverage, and integrates seamlessly with Tailwind CSS for maximum developer productivity.
