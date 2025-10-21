# React UI Library Monorepo

This monorepo contains a modern React UI component library built with TypeScript, Tailwind CSS, and Radix UI primitives, along with a comprehensive demo application showcasing all components.

## Structure

```
├── libs/
│   └── uilib/               # The reusable UI component library
│       ├── src/
│       │   ├── components/
│       │   │   ├── ui/       # UI components (Button, Card, Input, Label)
│       │   │   └── index.js  # Component exports
│       │   ├── lib/
│       │   │   └── utils.ts  # Utility functions
│       │   └── styles/
│       │       └── globals.css # Global styles
│       ├── dist/             # Built library output
│       └── package.json
├── apps/
│   └── demo-app/            # Demo application showcasing the library
│       ├── src/
│       │   ├── components/  # Layout and navigation components
│       │   ├── pages/       # Component showcase pages
│       │   └── App.jsx      # Main app with routing
│       └── package.json
├── package.json             # Root workspace configuration
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
- **AxInput** - Form input component with styling variants
- **AxLabel** - Accessible label component for form elements

**Dependencies:**
- React 19+ with TypeScript
- Tailwind CSS for styling
- Radix UI primitives for accessibility
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
- **Modal** - Modal component examples (placeholder for future implementation)

**Tech Stack:**
- React 19 with JSX
- React Router DOM for navigation
- Tailwind CSS for styling
- Vite for development and building

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

## Available Scripts

### Root Level

- `npm run dev` - Start the demo application
- `npm run build` - Build the UI library
- `npm run build:app` - Build the demo application
- `npm run build:lib` - Build the UI library
- `npm run lint` - Run ESLint on all packages
- `npm run clean` - Clean all build artifacts

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
   npm run dev  # Watch mode
   ```

2. **Test changes in the demo app:**
   ```bash
   npm run dev  # From root
   ```

3. **Build and test:**
   ```bash
   npm run build:lib
   npm run build:app
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

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.