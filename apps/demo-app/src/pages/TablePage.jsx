import React, { useState } from 'react';
import { AxDataTable } from '@ax/uilib';
import './PageStyles.css';

const TablePage = () => {
  const [selectedVariant, setSelectedVariant] = useState('default');
  const [selectedSize, setSelectedSize] = useState('default');
  const [loading, setLoading] = useState(false);
  
  // DataTable specific states
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const [filters, setFilters] = useState({});

  // Extended sample data for better demonstration
  const sampleData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 28, role: 'Developer', status: 'Active', salary: 75000, department: 'Engineering', joinDate: '2022-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 32, role: 'Designer', status: 'Active', salary: 68000, department: 'Design', joinDate: '2021-08-20' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 45, role: 'Manager', status: 'Inactive', salary: 95000, department: 'Management', joinDate: '2020-03-10' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', age: 29, role: 'Developer', status: 'Active', salary: 72000, department: 'Engineering', joinDate: '2022-06-05' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', age: 38, role: 'Analyst', status: 'Active', salary: 65000, department: 'Analytics', joinDate: '2021-11-12' },
    { id: 6, name: 'Diana Lee', email: 'diana@example.com', age: 26, role: 'Designer', status: 'Active', salary: 61000, department: 'Design', joinDate: '2023-02-28' },
    { id: 7, name: 'Eve Davis', email: 'eve@example.com', age: 41, role: 'Manager', status: 'Active', salary: 88000, department: 'Management', joinDate: '2019-09-15' },
    { id: 8, name: 'Frank Miller', email: 'frank@example.com', age: 33, role: 'Developer', status: 'Inactive', salary: 78000, department: 'Engineering', joinDate: '2021-04-22' },
    { id: 9, name: 'Grace Taylor', email: 'grace@example.com', age: 31, role: 'Analyst', status: 'Active', salary: 67000, department: 'Analytics', joinDate: '2022-09-08' },
    { id: 10, name: 'Henry Wilson', email: 'henry@example.com', age: 27, role: 'Developer', status: 'Active', salary: 71000, department: 'Engineering', joinDate: '2023-01-10' },
    { id: 11, name: 'Ivy Chen', email: 'ivy@example.com', age: 35, role: 'Designer', status: 'Active', salary: 69000, department: 'Design', joinDate: '2021-12-03' },
    { id: 12, name: 'Jack Anderson', email: 'jack@example.com', age: 42, role: 'Manager', status: 'Active', salary: 92000, department: 'Management', joinDate: '2020-07-18' },
    { id: 13, name: 'Kate Rodriguez', email: 'kate@example.com', age: 30, role: 'Analyst', status: 'Inactive', salary: 64000, department: 'Analytics', joinDate: '2022-04-14' },
    { id: 14, name: 'Liam O\'Brien', email: 'liam@example.com', age: 24, role: 'Developer', status: 'Active', salary: 58000, department: 'Engineering', joinDate: '2023-05-20' },
    { id: 15, name: 'Maya Patel', email: 'maya@example.com', age: 36, role: 'Designer', status: 'Active', salary: 73000, department: 'Design', joinDate: '2021-10-25' },
  ];

  const columns = [
    {
      key: 'id',
      title: 'ID',
      width: '80px',
      sortable: true,
      align: 'center',
    },
    {
      key: 'name',
      title: 'Name',
      sortable: true,
      filterable: true,
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
      filterable: true,
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
      align: 'center',
    },
    {
      key: 'role',
      title: 'Role',
      sortable: true,
      filterable: true,
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
      key: 'department',
      title: 'Department',
      sortable: true,
      filterable: true,
      render: (value) => (
        <span className="text-sm text-muted-foreground">{value}</span>
      ),
    },
    {
      key: 'status',
      title: 'Status',
      width: '100px',
      sortable: true,
      filterable: true,
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
      align: 'right',
      render: (value) => (
        <span className="font-mono">${value.toLocaleString()}</span>
      ),
    },
    {
      key: 'joinDate',
      title: 'Join Date',
      sortable: true,
      render: (value) => (
        <span className="text-sm">{new Date(value).toLocaleDateString()}</span>
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

  // DataTable action handlers
  const handleEdit = (row, index) => {
    alert(`Edit employee: ${row.name} (ID: ${row.id})`);
  };

  const handleDelete = (row, index) => {
    if (confirm(`Are you sure you want to delete ${row.name}?`)) {
      alert(`Deleted employee: ${row.name} (ID: ${row.id})`);
    }
  };

  const handleView = (row, index) => {
    alert(`View details for: ${row.name}\nEmail: ${row.email}\nRole: ${row.role}\nDepartment: ${row.department}`);
  };

  const handleExport = (data) => {
    const csvContent = [
      ['ID', 'Name', 'Email', 'Age', 'Role', 'Department', 'Status', 'Salary', 'Join Date'],
      ...data.map(row => [
        row.id,
        row.name,
        row.email,
        row.age,
        row.role,
        row.department,
        row.status,
        row.salary,
        row.joinDate
      ])
    ].map(row => row.join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'employees.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const actions = [
    {
      label: 'View',
      onClick: handleView,
      variant: 'default'
    },
    {
      label: 'Edit',
      onClick: handleEdit,
      variant: 'outline'
    },
    {
      label: 'Delete',
      onClick: handleDelete,
      variant: 'destructive'
    }
  ];

  return (
    <div className="page-container">
      <div className="page-content">
        <header className="page-header">
          <h1 className="page-title">AxDataTable Component</h1>
          <p className="page-subtitle">A powerful data table component with pagination, search, filtering, selection, actions, and export capabilities.</p>
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
            <h2 className="page-section-title">Full-Featured DataTable</h2>
            <p className="page-section-text">
              Complete DataTable with all features enabled. Current settings: {variants.find(v => v.value === selectedVariant)?.label} variant, {sizes.find(s => s.value === selectedSize)?.label} size
            </p>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">Live DataTable</div>
                <AxDataTable
                  data={sampleData}
                  columns={columns}
                  variant={selectedVariant}
                  size={selectedSize}
                  loading={loading}
                  onRowClick={handleRowClick}
                  emptyMessage="No employees found"
                  
                  // Pagination
                  pagination={true}
                  pageSize={5}
                  currentPage={currentPage}
                  onPageChange={setCurrentPage}
                  
                  // Search
                  searchable={true}
                  searchPlaceholder="Search employees..."
                  searchValue={searchValue}
                  onSearchChange={setSearchValue}
                  
                  // Filtering
                  filterable={true}
                  filters={filters}
                  onFilterChange={setFilters}
                  
                  // Selection
                  selectable={true}
                  selectedRows={selectedRows}
                  onSelectionChange={setSelectedRows}
                  
                  // Actions
                  actions={actions}
                  
                  // Export
                  exportable={true}
                  onExport={handleExport}
                />
              </div>
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Selection Status</h2>
            <p className="page-section-text">Currently selected employees and bulk actions.</p>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">Selected Items</div>
                {selectedRows.length > 0 ? (
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      {selectedRows.length} employee(s) selected:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedRows.map((row, index) => (
                        <span key={row.id} className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">
                          {row.name}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={() => alert(`Bulk edit ${selectedRows.length} employees`)}
                        className="px-3 py-1 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90"
                      >
                        Bulk Edit
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Delete ${selectedRows.length} selected employees?`)) {
                            alert(`Deleted ${selectedRows.length} employees`);
                            setSelectedRows([]);
                          }
                        }}
                        className="px-3 py-1 bg-destructive text-destructive-foreground rounded-md text-sm hover:bg-destructive/90"
                      >
                        Bulk Delete
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">No employees selected</p>
                )}
              </div>
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Table Variants</h2>
            <p className="page-section-text">Different visual styles for different use cases.</p>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">Default Variant</div>
                <AxDataTable
                  data={sampleData.slice(0, 3)}
                  columns={columns.slice(0, 4)}
                  variant="default"
                  size="default"
                />
              </div>
              <div className="page-content-group">
                <div className="page-content-group-title">Striped Variant</div>
                <AxDataTable
                  data={sampleData.slice(0, 3)}
                  columns={columns.slice(0, 4)}
                  variant="striped"
                  size="default"
                />
              </div>
              <div className="page-content-group">
                <div className="page-content-group-title">Bordered Variant</div>
                <AxDataTable
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
                <AxDataTable
                  data={sampleData.slice(0, 3)}
                  columns={columns.slice(0, 4)}
                  variant="default"
                  size="sm"
                />
              </div>
              <div className="page-content-group">
                <div className="page-content-group-title">Default Size</div>
                <AxDataTable
                  data={sampleData.slice(0, 3)}
                  columns={columns.slice(0, 4)}
                  variant="default"
                  size="default"
                />
              </div>
              <div className="page-content-group">
                <div className="page-content-group-title">Large Size</div>
                <AxDataTable
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
                <AxDataTable
                  data={[]}
                  columns={columns.slice(0, 4)}
                  variant="default"
                  size="default"
                  loading={true}
                />
              </div>
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Empty State</h2>
            <p className="page-section-text">Display a message when no data is available.</p>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">Empty State Example</div>
                <AxDataTable
                  data={[]}
                  columns={columns.slice(0, 4)}
                  variant="default"
                  size="default"
                  loading={false}
                  emptyMessage="No employees found. Try adjusting your search criteria."
                />
              </div>
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Pagination Demo</h2>
            <p className="page-section-text">DataTable with pagination enabled to handle large datasets.</p>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">Paginated Table</div>
                <AxDataTable
                  data={sampleData}
                  columns={columns.slice(0, 6)}
                  variant="striped"
                  size="default"
                  pagination={true}
                  pageSize={3}
                  searchable={true}
                  searchPlaceholder="Search employees..."
                />
              </div>
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Actions Demo</h2>
            <p className="page-section-text">DataTable with row actions for common operations.</p>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">Table with Actions</div>
                <AxDataTable
                  data={sampleData.slice(0, 5)}
                  columns={columns.slice(0, 5)}
                  variant="default"
                  size="default"
                  actions={actions}
                  selectable={true}
                />
              </div>
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Props</h2>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">AxDataTable Props</div>
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
                    <tr>
                      <td className="page-prop-name">pagination</td>
                      <td>boolean</td>
                      <td>false</td>
                      <td>Enable pagination</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">pageSize</td>
                      <td>number</td>
                      <td>10</td>
                      <td>Number of items per page</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">currentPage</td>
                      <td>number</td>
                      <td>1</td>
                      <td>Current page number</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">onPageChange</td>
                      <td>(page: number) =&gt; void</td>
                      <td>undefined</td>
                      <td>Page change handler</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">searchable</td>
                      <td>boolean</td>
                      <td>false</td>
                      <td>Enable global search</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">searchPlaceholder</td>
                      <td>string</td>
                      <td>'検索...'</td>
                      <td>Search input placeholder</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">searchValue</td>
                      <td>string</td>
                      <td>''</td>
                      <td>Current search value</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">onSearchChange</td>
                      <td>(value: string) =&gt; void</td>
                      <td>undefined</td>
                      <td>Search change handler</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">filterable</td>
                      <td>boolean</td>
                      <td>false</td>
                      <td>Enable filtering</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">filters</td>
                      <td>Record&lt;string, any&gt;</td>
                      <td>{}</td>
                      <td>Current filter values</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">onFilterChange</td>
                      <td>(filters: Record&lt;string, any&gt;) =&gt; void</td>
                      <td>undefined</td>
                      <td>Filter change handler</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">selectable</td>
                      <td>boolean</td>
                      <td>false</td>
                      <td>Enable row selection</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">selectedRows</td>
                      <td>any[]</td>
                      <td>[]</td>
                      <td>Currently selected rows</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">onSelectionChange</td>
                      <td>(selectedRows: any[]) =&gt; void</td>
                      <td>undefined</td>
                      <td>Selection change handler</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">actions</td>
                      <td>Action[]</td>
                      <td>[]</td>
                      <td>Array of row actions</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">exportable</td>
                      <td>boolean</td>
                      <td>false</td>
                      <td>Enable data export</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">onExport</td>
                      <td>(data: any[]) =&gt; void</td>
                      <td>undefined</td>
                      <td>Export handler</td>
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
                    <tr>
                      <td className="page-prop-name">filterable</td>
                      <td>boolean</td>
                      <td>✗</td>
                      <td>Enable column filtering</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">align</td>
                      <td>'left' | 'center' | 'right'</td>
                      <td>✗</td>
                      <td>Column text alignment</td>
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
