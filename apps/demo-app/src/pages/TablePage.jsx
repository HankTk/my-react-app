import React, { useState } from 'react';
import { AxTable } from '@my-org/react-component-library';

const TablePage = () => {
  const [selectedVariant, setSelectedVariant] = useState('default');
  const [selectedSize, setSelectedSize] = useState('default');
  const [loading, setLoading] = useState(false);

  // Sample data
  const sampleData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 28, role: 'Developer', status: 'Active', salary: 75000 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 32, role: 'Designer', status: 'Active', salary: 68000 },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 45, role: 'Manager', status: 'Inactive', salary: 95000 },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', age: 29, role: 'Developer', status: 'Active', salary: 72000 },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', age: 38, role: 'Analyst', status: 'Active', salary: 65000 },
    { id: 6, name: 'Diana Lee', email: 'diana@example.com', age: 26, role: 'Designer', status: 'Active', salary: 61000 },
    { id: 7, name: 'Eve Davis', email: 'eve@example.com', age: 41, role: 'Manager', status: 'Active', salary: 88000 },
    { id: 8, name: 'Frank Miller', email: 'frank@example.com', age: 33, role: 'Developer', status: 'Inactive', salary: 78000 },
  ];

  const columns = [
    {
      key: 'id',
      title: 'ID',
      width: '80px',
      sortable: true,
    },
    {
      key: 'name',
      title: 'Name',
      sortable: true,
      render: (value, row) => (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-medium text-primary">
            {value.charAt(0)}
          </div>
          <span className="font-medium">{value}</span>
        </div>
      ),
    },
    {
      key: 'email',
      title: 'Email',
      sortable: true,
      render: (value) => (
        <a href={`mailto:${value}`} className="text-primary hover:underline">
          {value}
        </a>
      ),
    },
    {
      key: 'age',
      title: 'Age',
      width: '80px',
      sortable: true,
    },
    {
      key: 'role',
      title: 'Role',
      sortable: true,
      render: (value) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          value === 'Manager' ? 'bg-purple-100 text-purple-800' :
          value === 'Developer' ? 'bg-blue-100 text-blue-800' :
          value === 'Designer' ? 'bg-green-100 text-green-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {value}
        </span>
      ),
    },
    {
      key: 'status',
      title: 'Status',
      width: '100px',
      sortable: true,
      render: (value) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          value === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {value}
        </span>
      ),
    },
    {
      key: 'salary',
      title: 'Salary',
      width: '120px',
      sortable: true,
      render: (value) => (
        <span className="font-mono">${value.toLocaleString()}</span>
      ),
    },
  ];

  const variants = [
    { value: 'default', label: 'Default' },
    { value: 'striped', label: 'Striped' },
    { value: 'bordered', label: 'Bordered' },
  ];

  const sizes = [
    { value: 'sm', label: 'Small' },
    { value: 'default', label: 'Default' },
    { value: 'lg', label: 'Large' },
  ];

  const handleRowClick = (row, index) => {
    alert(`Clicked on row ${index + 1}: ${row.name}`);
  };

  const simulateLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">AxTable Component</h1>
          <p className="text-muted-foreground">A versatile table component with sorting, loading states, and customizable variants.</p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Table Controls</h2>
            <p className="text-muted-foreground mb-6">Customize the table appearance and behavior.</p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Variant</label>
                <div className="flex gap-2">
                  {variants.map((variant) => (
                    <button
                      key={variant.value}
                      onClick={() => setSelectedVariant(variant.value)}
                      className={`px-3 py-2 text-sm rounded-md transition-colors ${
                        selectedVariant === variant.value
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      {variant.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Size</label>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size.value}
                      onClick={() => setSelectedSize(size.value)}
                      className={`px-3 py-2 text-sm rounded-md transition-colors ${
                        selectedSize === size.value
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Actions</label>
                <button
                  onClick={simulateLoading}
                  className="px-3 py-2 text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
                >
                  {loading ? 'Loading...' : 'Simulate Loading'}
                </button>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Interactive Table</h2>
            <p className="text-muted-foreground mb-6">
              Current settings: {variants.find(v => v.value === selectedVariant)?.label} variant, {sizes.find(s => s.value === selectedSize)?.label} size
            </p>
            <div className="bg-card border rounded-lg p-6">
              <AxTable
                data={sampleData}
                columns={columns}
                variant={selectedVariant}
                size={selectedSize}
                loading={loading}
                onRowClick={handleRowClick}
                emptyMessage="No data available"
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Table Variants</h2>
            <p className="text-muted-foreground mb-6">Different visual styles for different use cases.</p>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Default Variant</h3>
                <div className="bg-card border rounded-lg p-4">
                  <AxTable
                    data={sampleData.slice(0, 3)}
                    columns={columns.slice(0, 4)}
                    variant="default"
                    size="default"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Striped Variant</h3>
                <div className="bg-card border rounded-lg p-4">
                  <AxTable
                    data={sampleData.slice(0, 3)}
                    columns={columns.slice(0, 4)}
                    variant="striped"
                    size="default"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Bordered Variant</h3>
                <div className="bg-card border rounded-lg p-4">
                  <AxTable
                    data={sampleData.slice(0, 3)}
                    columns={columns.slice(0, 4)}
                    variant="bordered"
                    size="default"
                  />
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Table Sizes</h2>
            <p className="text-muted-foreground mb-6">Different sizes for different contexts.</p>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Small Size</h3>
                <div className="bg-card border rounded-lg p-4">
                  <AxTable
                    data={sampleData.slice(0, 3)}
                    columns={columns.slice(0, 4)}
                    variant="default"
                    size="sm"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Default Size</h3>
                <div className="bg-card border rounded-lg p-4">
                  <AxTable
                    data={sampleData.slice(0, 3)}
                    columns={columns.slice(0, 4)}
                    variant="default"
                    size="default"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Large Size</h3>
                <div className="bg-card border rounded-lg p-4">
                  <AxTable
                    data={sampleData.slice(0, 3)}
                    columns={columns.slice(0, 4)}
                    variant="default"
                    size="lg"
                  />
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Loading State</h2>
            <p className="text-muted-foreground mb-6">Show loading skeleton while data is being fetched.</p>
            <div className="bg-card border rounded-lg p-4">
              <AxTable
                data={[]}
                columns={columns.slice(0, 4)}
                variant="default"
                size="default"
                loading={true}
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Empty State</h2>
            <p className="text-muted-foreground mb-6">Display a message when no data is available.</p>
            <div className="bg-card border rounded-lg p-4">
              <AxTable
                data={[]}
                columns={columns.slice(0, 4)}
                variant="default"
                size="default"
                loading={false}
                emptyMessage="No employees found. Try adjusting your search criteria."
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Custom Column Rendering</h2>
            <p className="text-muted-foreground mb-6">Examples of custom column rendering with different data types.</p>
            <div className="bg-card border rounded-lg p-4">
              <AxTable
                data={sampleData.slice(0, 5)}
                columns={columns}
                variant="striped"
                size="default"
                onRowClick={handleRowClick}
              />
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
                    <td className="p-2 font-mono">data</td>
                    <td className="p-2">any[]</td>
                    <td className="p-2">[]</td>
                    <td className="p-2">Array of data objects</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">columns</td>
                    <td className="p-2">Column[]</td>
                    <td className="p-2">[]</td>
                    <td className="p-2">Array of column definitions</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">variant</td>
                    <td className="p-2">'default' | 'striped' | 'bordered'</td>
                    <td className="p-2">'default'</td>
                    <td className="p-2">Visual style variant</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">size</td>
                    <td className="p-2">'sm' | 'default' | 'lg'</td>
                    <td className="p-2">'default'</td>
                    <td className="p-2">Table size</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">loading</td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Show loading skeleton</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">emptyMessage</td>
                    <td className="p-2">string</td>
                    <td className="p-2">'データがありません'</td>
                    <td className="p-2">Message when no data</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">onRowClick</td>
                    <td className="p-2">(row: any, index: number) =&gt; void</td>
                    <td className="p-2">undefined</td>
                    <td className="p-2">Row click handler</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Column Definition</h2>
            <p className="text-muted-foreground mb-6">Structure of column objects for table configuration.</p>
            <div className="bg-card border rounded-lg p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2 font-medium">Property</th>
                    <th className="text-left p-2 font-medium">Type</th>
                    <th className="text-left p-2 font-medium">Required</th>
                    <th className="text-left p-2 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="p-2 font-mono">key</td>
                    <td className="p-2">string</td>
                    <td className="p-2">✓</td>
                    <td className="p-2">Data property key</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">title</td>
                    <td className="p-2">string</td>
                    <td className="p-2">✓</td>
                    <td className="p-2">Column header text</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">render</td>
                    <td className="p-2">(value: any, row: any, index: number) =&gt; ReactNode</td>
                    <td className="p-2">✗</td>
                    <td className="p-2">Custom cell renderer</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">sortable</td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">✗</td>
                    <td className="p-2">Enable column sorting</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">width</td>
                    <td className="p-2">string</td>
                    <td className="p-2">✗</td>
                    <td className="p-2">Column width (CSS value)</td>
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

export default TablePage;
