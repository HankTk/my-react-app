# React UI Library Monorepo

This monorepo contains a modern React UI component library built with TypeScript, Tailwind CSS, and Radix UI primitives, along with a comprehensive demo application showcasing all components. The project is managed with Nx for optimal development experience and build performance.

## Features

- 🏗️ **Nx Monorepo** - Optimized build system with dependency management
- 🎨 **Modern UI Components** - 7 fully-featured React components
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- ♿ **Accessibility** - Built with Radix UI primitives for screen reader support
- 🚀 **Performance** - Tree-shakeable components with Vite bundling
- 📊 **Data Visualization** - Chart component powered by Chart.js
- 🎭 **Variant Management** - Class Variance Authority for component variants

## Structure

```
├── libs/
│   └── uilib/               # The reusable UI component library
│       ├── src/
│       │   ├── components/
│       │   │   ├── ui/       # UI components (Button, Card, Chart, Input, Label, Modal, Table)
│       │   │   └── index.js  # Component exports
│       │   ├── lib/
│       │   │   └── utils.ts  # Utility functions
│       │   ├── styles/
│       │   │   └── globals.css # Global styles
│       │   └── index.js      # Library entry point
│       ├── dist/             # Built library output
│       └── package.json
├── apps/
│   └── demo-app/            # Demo application showcasing the library
│       ├── src/
│       │   ├── components/  # Layout and navigation components
│       │   ├── pages/       # Component showcase pages (Button, Card, Chart, Input, Label, Modal, Table)
│       │   └── App.jsx      # Main app with routing
│       └── package.json
├── package.json             # Root workspace configuration
├── nx.json                  # Nx workspace configuration
├── eslint.config.js         # ESLint configuration
└── README.md               # This file
```

## Packages

### UI Library (`libs/uilib/`)

A modern, reusable React UI component library built with TypeScript, Tailwind CSS, and Radix UI primitives.

**Features:**
- 🎨 Modern Design with Tailwind CSS styling
- 📦 Tree Shakeable components
- 🔧 Full TypeScript support
- 🎯 Accessibility features with Radix UI primitives
- 🚀 Optimized for performance with Vite
- 🎭 Class Variance Authority for variant management
- 🔗 Radix UI Slot for composition

**Components:**
- **AxButton** - Versatile button component with multiple variants and sizes
- **AxCard** - Card container with header, content, footer, title, and description
- **AxChart** - Chart component for data visualization using Chart.js
- **AxInput** - Form input component with styling variants
- **AxLabel** - Accessible label component for form elements
- **AxModal** - Modal dialog component for overlays and popups
- **AxTable** - Data table component for displaying structured data

**Dependencies:**
- React 19+ with TypeScript
- Tailwind CSS for styling
- Radix UI primitives for accessibility
- Chart.js for data visualization
- Class Variance Authority for variant management
- Tailwind Merge for class merging

### Demo App (`apps/demo-app/`)

A comprehensive demonstration application that showcases all components from the library with interactive examples and documentation.

**Features:**
- 🧭 React Router for navigation
- 📱 Responsive layout with navigation sidebar
- 🎨 Live component examples with different variants
- 📖 Interactive documentation for each component
- 🎯 Real-world usage examples

**Pages:**
- **Home** - Overview and getting started guide
- **Button** - Button component showcase with all variants and sizes
- **Label** - Label component examples and usage
- **Input** - Input component demonstrations
- **Card** - Card component layouts and compositions
- **Chart** - Chart component examples with different chart types
- **Modal** - Modal component examples and usage patterns
- **Table** - Table component demonstrations with data examples

**Tech Stack:**
- React 19 with JSX
- React Router DOM for navigation
- Tailwind CSS for styling
- Vite for development and building
- Nx for monorepo management and build optimization

## Nx Workspace Benefits

This project leverages Nx for enhanced development experience:

- **🚀 Build Caching** - Intelligent caching reduces build times
- **📊 Dependency Graph** - Visual understanding of project relationships
- **🔧 Code Generation** - Scaffold components and applications quickly
- **📈 Performance** - Parallel task execution and incremental builds
- **🎯 Affected Commands** - Only run tasks for changed projects
- **📋 Task Orchestration** - Automatic dependency management

Use `npx nx graph` to visualize the project dependency graph.

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Install all dependencies
npm install

# Build the UI library
npm run build:lib

# Start the demo app
npm run dev
```

### Using Nx Commands

This project uses Nx for build orchestration and development. You can also use Nx commands directly:

```bash
# Start the demo app
npx nx serve demo-app

# Build the UI library
npx nx build uilib

# Build the demo app
npx nx build demo-app

# Run linting
npx nx lint

# Run tests
npx nx test
```

## Available Scripts

### Root Level

- `npm run dev` - Start the demo application (uses `nx serve demo-app`)
- `npm run build` - Build the UI library (uses `nx build uilib`)
- `npm run build:app` - Build the demo application (uses `nx build demo-app`)
- `npm run build:lib` - Build the UI library (uses `nx build uilib`)
- `npm run lint` - Run ESLint on all packages (uses `nx lint`)
- `npm run test` - Run tests (uses `nx test`)
- `npm run clean` - Clean all build artifacts (uses `nx reset`)

### UI Library (`libs/uilib/`)

- `npm run dev` - Watch mode for development
- `npm run build` - Build library and types
- `npm run build:lib` - Build library only
- `npm run build:types` - Build TypeScript types
- `npm run clean` - Clean build artifacts

### Demo App (`apps/demo-app/`)

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run clean` - Clean build artifacts

## Development Workflow

1. **Make changes to the UI library:**
   ```bash
   cd libs/uilib
   npm run dev  # Watch mode for library development
   ```

2. **Test changes in the demo app:**
   ```bash
   npm run dev  # From root - starts demo app
   ```

3. **Build and test:**
   ```bash
   npm run build:lib  # Build the library
   npm run build:app  # Build the demo app
   ```

4. **Using Nx for development:**
   ```bash
   # Run library in watch mode
   npx nx build uilib --watch
   
   # Serve demo app
   npx nx serve demo-app
   
   # Run linting
   npx nx lint
   ```

## Publishing

To publish the UI library:

```bash
cd libs/uilib
npm publish
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test with the demo app
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## CSS Variables System

This project uses a comprehensive CSS variable system for consistent theming and design tokens. All components and styles use CSS variables instead of hardcoded values.

### Current CSS Variables

The project defines CSS variables in `/libs/uilib/src/styles/globals.css` and `/apps/demo-app/src/index.css`:

#### Color Variables (HSL Format)
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  --muted: 210 40% 96%;
  --border: 214.3 31.8% 91.4%;
  --radius: 0.5rem;
  /* ... and more */
}
```

#### Dark Theme Variables
```css
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  /* ... adjusted for dark theme */
}
```

#### Custom Variables
```css
:root {
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  
  /* Typography */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

### How to Use CSS Variables

#### 1. Color Variables (HSL Format)
```css
.my-component {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  border: 1px solid hsl(var(--border));
}
```

#### 2. Spacing Variables
```css
.my-component {
  padding: var(--spacing-md);
  margin: var(--spacing-lg);
  gap: var(--spacing-sm);
}
```

#### 3. Typography Variables
```css
.my-text {
  font-size: var(--font-size-lg);
}
```

#### 4. Shadow Variables
```css
.my-card {
  box-shadow: var(--shadow-md);
}
```

#### 5. Border Radius
```css
.my-button {
  border-radius: var(--radius);
}
```

### How to Define New CSS Variables

#### 1. Add to Root Variables
Add new variables to the `:root` selector in `globals.css`:

```css
:root {
  /* Existing variables... */
  
  /* New custom variables */
  --my-custom-color: #ff6b6b;
  --my-custom-spacing: 3rem;
  --my-custom-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}
```

#### 2. Add Dark Theme Variants
If your variable should change in dark mode, add it to the `.dark` selector:

```css
.dark {
  /* Existing variables... */
  
  /* Dark theme variants */
  --my-custom-color: #ff8e8e;
  --my-custom-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```

#### 3. Component-Specific Variables
You can also define variables within specific components:

```css
.my-component {
  --component-bg: hsl(var(--card));
  --component-padding: var(--spacing-lg);
  
  background-color: var(--component-bg);
  padding: var(--component-padding);
}
```

### Best Practices

#### 1. Naming Convention
- Use descriptive names: `--primary-color` instead of `--color1`
- Group related variables: `--spacing-xs`, `--spacing-sm`, etc.
- Use consistent prefixes: `--font-size-*`, `--shadow-*`

#### 2. Value Types
- **Colors**: Use HSL format for theme compatibility
- **Spacing**: Use `rem` units for scalability
- **Shadows**: Use `rgba()` for transparency control

#### 3. Theme Support
- Always provide both light and dark theme values
- Test variables in both themes
- Use semantic names that work in both contexts

#### 4. Fallbacks
```css
.my-component {
  background-color: var(--custom-bg, hsl(var(--background)));
}
```

### Demo Page

Visit `/css-variables` in the demo app to see:
- How to use existing variables
- Examples of the new custom variables
- Visual demonstrations of spacing, typography, shadows, and colors

### Common Use Cases

#### Responsive Design
```css
@media (max-width: 768px) {
  .my-component {
    padding: var(--spacing-sm);
  }
}
```

#### Component Variants
```css
.button {
  padding: var(--spacing-md);
}

.button--large {
  padding: var(--spacing-lg);
}

.button--small {
  padding: var(--spacing-sm);
}
```

#### Dynamic Theming
```css
.theme-custom {
  --primary: 120 50% 50%; /* Green primary */
  --secondary: 200 50% 50%; /* Blue secondary */
}
```

This CSS variable system provides a powerful, maintainable way to manage design tokens across the entire React application!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.