# Ax React Component Library

A modern, reusable React UI component library built with **shadcn/ui**, **Tailwind CSS**, and **TypeScript**. Features advanced components like AxDataTable with pagination, search, filtering, and export capabilities.

## 🚀 Technology Stack

- **🎨 shadcn/ui**: Design system with class-variance-authority for variant management
- **🎯 Tailwind CSS**: Utility-first CSS framework with tailwind-merge optimization
- **⚡ TypeScript**: Full TypeScript support with comprehensive type definitions
- **♿ Radix UI**: Accessibility primitives (@radix-ui/react-slot)
- **🔧 Vite**: Fast build tool with HMR and optimized bundling
- **📊 Chart.js**: Powerful charting with dynamic imports
- **🎭 Lucide React**: Beautiful SVG icons with tree-shaking
- **🏗️ Nx Monorepo**: Scalable architecture with shared libraries

## ✨ Features

- 🎨 **Modern Design**: Clean, accessible components following shadcn/ui patterns
- 📦 **Tree Shakeable**: Import only the components you need
- 🔧 **TypeScript**: Full TypeScript support with strict mode
- ♿ **Accessible**: Built on Radix UI primitives with ARIA attributes
- 🌙 **Theme Support**: CSS variables for easy theming and dark mode
- ⚡ **Performance**: Optimized with dynamic imports and efficient re-rendering
- 📱 **Responsive**: Mobile-first design approach
- 🎯 **Advanced Components**: AxDataTable with pagination, search, filtering, selection, actions, and export

## 📦 Installation

```bash
npm install @ax/uilib
```

## 🎯 Quick Start

### Import Styles

```tsx
import '@ax/uilib/styles';
```

### Basic Usage

```tsx
import { AxButton, AxLabel, AxDataTable } from '@ax/uilib';
import '@ax/uilib/styles';

function App() {
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' }
  ];

  const columns = [
    { key: 'id', title: 'ID', sortable: true },
    { key: 'name', title: 'Name', sortable: true },
    { key: 'email', title: 'Email', sortable: true },
    { key: 'role', title: 'Role', sortable: true }
  ];

  return (
    <div>
      <AxLabel htmlFor="email">Email</AxLabel>
      <input id="email" type="email" />
      <AxButton variant="default">Submit</AxButton>
      
      <AxDataTable
        data={data}
        columns={columns}
        pagination={true}
        pageSize={10}
        searchable={true}
        searchPlaceholder="Search users..."
        selectable={true}
        actions={[
          { label: 'Edit', onClick: (row) => console.log('Edit', row) },
          { label: 'Delete', onClick: (row) => console.log('Delete', row), variant: 'destructive' }
        ]}
        exportable={true}
        onExport={(data) => console.log('Export', data)}
      />
    </div>
  );
}
```

## 📚 Components

### AxDataTable

Advanced data table component with pagination, search, filtering, selection, actions, and export capabilities.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `any[]` | `[]` | Array of data objects |
| `columns` | `Column[]` | `[]` | Array of column definitions |
| `variant` | `'default' \| 'striped' \| 'bordered'` | `'default'` | Visual style variant |
| `size` | `'sm' \| 'default' \| 'lg'` | `'default'` | Table size |
| `loading` | `boolean` | `false` | Show loading skeleton |
| `emptyMessage` | `string` | `'データがありません'` | Message when no data |
| `onRowClick` | `(row: any, index: number) => void` | - | Row click handler |
| `pagination` | `boolean` | `false` | Enable pagination |
| `pageSize` | `number` | `10` | Number of items per page |
| `currentPage` | `number` | `1` | Current page number |
| `onPageChange` | `(page: number) => void` | - | Page change handler |
| `searchable` | `boolean` | `false` | Enable global search |
| `searchPlaceholder` | `string` | `'検索...'` | Search input placeholder |
| `searchValue` | `string` | `''` | Current search value |
| `onSearchChange` | `(value: string) => void` | - | Search change handler |
| `filterable` | `boolean` | `false` | Enable filtering |
| `filters` | `Record<string, any>` | `{}` | Current filter values |
| `onFilterChange` | `(filters: Record<string, any>) => void` | - | Filter change handler |
| `selectable` | `boolean` | `false` | Enable row selection |
| `selectedRows` | `any[]` | `[]` | Currently selected rows |
| `onSelectionChange` | `(selectedRows: any[]) => void` | - | Selection change handler |
| `actions` | `Action[]` | `[]` | Array of row actions |
| `exportable` | `boolean` | `false` | Enable data export |
| `onExport` | `(data: any[]) => void` | - | Export handler |

#### Column Definition

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `key` | `string` | ✓ | Data property key |
| `title` | `string` | ✓ | Column header text |
| `render` | `(value: any, row: any, index: number) => ReactNode` | ✗ | Custom cell renderer |
| `sortable` | `boolean` | ✗ | Enable column sorting |
| `filterable` | `boolean` | ✗ | Enable column filtering |
| `width` | `string` | ✗ | Column width (CSS value) |
| `align` | `'left' \| 'center' \| 'right'` | ✗ | Column text alignment |

#### Examples

```tsx
// Basic DataTable
<AxDataTable
  data={users}
  columns={[
    { key: 'id', title: 'ID', sortable: true },
    { key: 'name', title: 'Name', sortable: true },
    { key: 'email', title: 'Email', sortable: true }
  ]}
/>

// Advanced DataTable with all features
<AxDataTable
  data={users}
  columns={columns}
  variant="striped"
  pagination={true}
  pageSize={10}
  searchable={true}
  searchPlaceholder="Search users..."
  filterable={true}
  selectable={true}
  actions={[
    { label: 'Edit', onClick: (row) => editUser(row) },
    { label: 'Delete', onClick: (row) => deleteUser(row), variant: 'destructive' }
  ]}
  exportable={true}
  onExport={(data) => exportToCSV(data)}
/>
```

### AxButton

A versatile button component with multiple variants and sizes.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Button content |
| `variant` | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link'` | `'default'` | Button style variant |
| `size` | `'xs' \| 'sm' \| 'default' \| 'lg' \| 'xl' \| '2xl' \| 'icon' \| 'icon-sm' \| 'icon-lg' \| 'responsive'` | `'default'` | Button size |
| `width` | `'auto' \| 'full' \| 'fit' \| '1/2' \| '1/3' \| '2/3' \| '1/4' \| '3/4' \| 'min' \| 'max'` | `'auto'` | Button width |
| `asChild` | `boolean` | `false` | Render as child component |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `onClick` | `(event: React.MouseEvent<HTMLButtonElement>) => void` | - | Click handler |

#### Examples

```tsx
// Basic button
<AxButton>Click me</AxButton>

// Different variants
<AxButton variant="default">Default</AxButton>
<AxButton variant="destructive">Destructive</AxButton>
<AxButton variant="outline">Outline</AxButton>
<AxButton variant="secondary">Secondary</AxButton>
<AxButton variant="ghost">Ghost</AxButton>
<AxButton variant="link">Link</AxButton>

// Different sizes
<AxButton size="xs">Extra Small</AxButton>
<AxButton size="sm">Small</AxButton>
<AxButton size="default">Default</AxButton>
<AxButton size="lg">Large</AxButton>
<AxButton size="xl">Extra Large</AxButton>

// Full width
<AxButton width="full">Full Width</AxButton>

// Icon button
<AxButton size="icon" variant="outline">
  <PlusIcon className="h-4 w-4" />
</AxButton>
```

### Other Components

- **AxLabel**: Flexible label component for form elements
- **AxInput**: Form input component with validation states
- **AxCard**: Flexible card component with header, content, and footer
- **AxModal**: Modal dialog component for overlays and forms
- **AxChart**: Chart component powered by Chart.js

## 🛠️ Development

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
npm run build

# Build library only
npm run build:lib

# Build types only
npm run build:types
```

### Scripts

- `npm run dev` - Watch mode for development
- `npm run build` - Build library and types
- `npm run build:lib` - Build library only
- `npm run build:types` - Build TypeScript types
- `npm run clean` - Clean build artifacts

## 🎨 Styling

The library uses Tailwind CSS with custom CSS variables for theming. All components follow the shadcn/ui design system patterns.

### CSS Variables

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --muted: 210 40% 96%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96%;
  --accent-foreground: 222.2 47.4% 11.2%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
  --radius: 0.5rem;
}
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support and questions, please open an issue on GitHub.
