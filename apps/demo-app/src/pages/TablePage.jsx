import React, { useState } from 'react';
import { AxTable } from '@ax/uilib';
import './PageStyles.css';

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
    <div className="page-container">
      <div className="page-content">
        <header className="page-header">
          <h1 className="page-title">AxTable Component</h1>
          <p className="page-subtitle">A versatile table component with sorting, loading states, and customizable variants.</p>
        </header>

        <div className="page-sections">
          <section className="page-section">
            <h2 className="page-section-title">Table Controls</h2>
            <p className="page-section-text">Customize the table appearance and behavior.</p>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">Controls</div>
                <div className="flex flex-col gap-6 mb-6" style={{ gap: '1.5rem' }}>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Variant</label>
                    <div className="flex gap-3" style={{ gap: '0.75rem' }}>
                      {variants.map((variant) => (
                        <button
                          key={variant.value}
                          onClick={() => setSelectedVariant(variant.value)}
                          className={`px-4 py-2 text-sm rounded-md transition-colors font-medium ${
                            selectedVariant === variant.value
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-muted-foreground hover:bg-muted/80'
                          }`}
                          style={{ margin: '0.25rem' }}
                        >
                          {variant.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Size</label>
                    <div className="flex gap-3" style={{ gap: '0.75rem' }}>
                      {sizes.map((size) => (
                        <button
                          key={size.value}
                          onClick={() => setSelectedSize(size.value)}
                          className={`px-4 py-2 text-sm rounded-md transition-colors font-medium ${
                            selectedSize === size.value
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-muted-foreground hover:bg-muted/80'
                          }`}
                          style={{ margin: '0.25rem' }}
                        >
                          {size.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Actions</label>
                    <div className="flex gap-3" style={{ gap: '0.75rem' }}>
                      <button
                        onClick={simulateLoading}
                        className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors font-medium"
                        style={{ margin: '0.25rem' }}
                      >
                        {loading ? 'Loading...' : 'Simulate Loading'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Interactive Table</h2>
            <p className="page-section-text">
              Current settings: {variants.find(v => v.value === selectedVariant)?.label} variant, {sizes.find(s => s.value === selectedSize)?.label} size
            </p>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">Live Table</div>
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
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Table Variants</h2>
            <p className="page-section-text">Different visual styles for different use cases.</p>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">Default Variant</div>
                <AxTable
                  data={sampleData.slice(0, 3)}
                  columns={columns.slice(0, 4)}
                  variant="default"
                  size="default"
                />
              </div>
              <div className="page-content-group">
                <div className="page-content-group-title">Striped Variant</div>
                <AxTable
                  data={sampleData.slice(0, 3)}
                  columns={columns.slice(0, 4)}
                  variant="striped"
                  size="default"
                />
              </div>
              <div className="page-content-group">
                <div className="page-content-group-title">Bordered Variant</div>
                <AxTable
                  data={sampleData.slice(0, 3)}
                  columns={columns.slice(0, 4)}
                  variant="bordered"
                  size="default"
                />
              </div>
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Table Sizes</h2>
            <p className="page-section-text">Different sizes for different contexts.</p>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">Small Size</div>
                <AxTable
                  data={sampleData.slice(0, 3)}
                  columns={columns.slice(0, 4)}
                  variant="default"
                  size="sm"
                />
              </div>
              <div className="page-content-group">
                <div className="page-content-group-title">Default Size</div>
                <AxTable
                  data={sampleData.slice(0, 3)}
                  columns={columns.slice(0, 4)}
                  variant="default"
                  size="default"
                />
              </div>
              <div className="page-content-group">
                <div className="page-content-group-title">Large Size</div>
                <AxTable
                  data={sampleData.slice(0, 3)}
                  columns={columns.slice(0, 4)}
                  variant="default"
                  size="lg"
                />
              </div>
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Loading State</h2>
            <p className="page-section-text">Show loading skeleton while data is being fetched.</p>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">Loading Example</div>
                <AxTable
                  data={[]}
                  columns={columns.slice(0, 4)}
                  variant="default"
                  size="default"
                  loading={true}
                />
              </div>
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

          <section className="page-section">
            <h2 className="page-section-title">Props</h2>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">AxTable Props</div>
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
                      <td className="page-prop-name">data</td>
                      <td>any[]</td>
                      <td>[]</td>
                      <td>Array of data objects</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">columns</td>
                      <td>Column[]</td>
                      <td>[]</td>
                      <td>Array of column definitions</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">variant</td>
                      <td>'default' | 'striped' | 'bordered'</td>
                      <td>'default'</td>
                      <td>Visual style variant</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">size</td>
                      <td>'sm' | 'default' | 'lg'</td>
                      <td>'default'</td>
                      <td>Table size</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">loading</td>
                      <td>boolean</td>
                      <td>false</td>
                      <td>Show loading skeleton</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">emptyMessage</td>
                      <td>string</td>
                      <td>'データがありません'</td>
                      <td>Message when no data</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">onRowClick</td>
                      <td>(row: any, index: number) =&gt; void</td>
                      <td>undefined</td>
                      <td>Row click handler</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Column Definition</h2>
            <p className="page-section-text">Structure of column objects for table configuration.</p>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">Column Properties</div>
                <table className="page-props-table">
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Type</th>
                      <th>Required</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="page-prop-name">key</td>
                      <td>string</td>
                      <td>✓</td>
                      <td>Data property key</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">title</td>
                      <td>string</td>
                      <td>✓</td>
                      <td>Column header text</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">render</td>
                      <td>(value: any, row: any, index: number) =&gt; ReactNode</td>
                      <td>✗</td>
                      <td>Custom cell renderer</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">sortable</td>
                      <td>boolean</td>
                      <td>✗</td>
                      <td>Enable column sorting</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">width</td>
                      <td>string</td>
                      <td>✗</td>
                      <td>Column width (CSS value)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="page-content-group">
                <div className="page-content-group-title">Example Usage</div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="text-sm text-gray-800 overflow-x-auto">
{`const columns = [
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
  },
  {
    key: 'status',
    title: 'Status',
    render: (value) => (
      <span className={\`px-2 py-1 rounded-full text-xs \${
        value === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }\`}>
        {value}
      </span>
    ),
  },
];`}
                  </pre>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TablePage;
