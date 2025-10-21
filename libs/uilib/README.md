# React UI Library

A modern, reusable React UI component library built with TypeScript and Vite.

## Features

- 🎨 **Modern Design**: Clean, accessible components with beautiful styling
- 📦 **Tree Shakeable**: Import only the components you need
- 🔧 **TypeScript**: Full TypeScript support with type definitions
- 🎯 **Accessible**: Built with accessibility in mind
- 🚀 **Fast**: Optimized for performance
- 📱 **Responsive**: Mobile-first design approach

## Installation

```bash
npm install @my-org/uilib
```

## Usage

### Basic Usage

```tsx
import { AxButton } from '@my-org/uilib';
import '@my-org/uilib/styles';

function App() {
  return (
    <div>
      <AxButton variant="primary" onClick={() => console.log('clicked')}>
        Click me
      </AxButton>
    </div>
  );
}
```

### Import Styles

You can import the styles in two ways:

1. **Import all styles** (recommended for most cases):
```tsx
import '@my-org/uilib/styles';
```

2. **Import individual component styles**:
```tsx
import '@my-org/uilib/dist/AxButton.css';
```

## Components

### AxButton

A versatile button component with multiple variants and sizes.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Button content |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger'` | `'primary'` | Button style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `onClick` | `(event: React.MouseEvent<HTMLButtonElement>) => void` | - | Click handler |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |
| `className` | `string` | `''` | Additional CSS class name |

#### Examples

```tsx
// Basic button
<AxButton>Click me</AxButton>

// Different variants
<AxButton variant="primary">Primary</AxButton>
<AxButton variant="secondary">Secondary</AxButton>
<AxButton variant="outline">Outline</AxButton>
<AxButton variant="ghost">Ghost</AxButton>
<AxButton variant="danger">Danger</AxButton>

// Different sizes
<AxButton size="small">Small</AxButton>
<AxButton size="medium">Medium</AxButton>
<AxButton size="large">Large</AxButton>

// With click handler
<AxButton onClick={() => console.log('clicked')}>
  Click me
</AxButton>

// Disabled state
<AxButton disabled>Disabled</AxButton>

// Submit button
<AxButton type="submit" variant="primary">
  Submit
</AxButton>
```

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Building

```bash
# Build the library
npm run build:lib

# Build types
npm run build:types
```

### Scripts

- `npm run dev` - Watch mode for development
- `npm run build` - Build library and types
- `npm run build:lib` - Build library only
- `npm run build:types` - Build TypeScript types
- `npm run clean` - Clean build artifacts

## License

This project is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.
