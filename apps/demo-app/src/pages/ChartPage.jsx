import React, { useState } from 'react';
import { AxChart, createChartData, createDataset } from '@ax/uilib';
import './PageStyles.css';

const ChartPage = () => {
  const [selectedChartType, setSelectedChartType] = useState('line');

  // Sample data for different chart types
  const lineChartData = createChartData(
    ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    [
      createDataset('Sales', [12, 19, 3, 5, 2, 3], {
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        borderColor: 'rgba(99, 102, 241, 1)',
        tension: 0.1,
      }),
      createDataset('Revenue', [2, 3, 20, 5, 1, 4], {
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        borderColor: 'rgba(16, 185, 129, 1)',
        tension: 0.1,
      }),
    ]
  );

  const barChartData = createChartData(
    ['Q1', 'Q2', 'Q3', 'Q4'],
    [
      createDataset('2023', [65, 59, 80, 81], {
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
        borderColor: [
          'rgba(99, 102, 241, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(239, 68, 68, 1)',
        ],
      }),
    ]
  );

  const pieChartData = createChartData(
    ['Desktop', 'Mobile', 'Tablet'],
    [
      createDataset('Traffic Sources', [65, 30, 5], {
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
        ],
        borderColor: [
          'rgba(99, 102, 241, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
        ],
      }),
    ]
  );

  const doughnutChartData = createChartData(
    ['Chrome', 'Firefox', 'Safari', 'Edge'],
    [
      createDataset('Browser Usage', [40, 25, 20, 15], {
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
        borderColor: [
          'rgba(99, 102, 241, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(239, 68, 68, 1)',
        ],
      }),
    ]
  );

  const polarAreaData = createChartData(
    ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    [
      createDataset('Dataset 1', [11, 16, 7, 3, 14], {
        backgroundColor: [
          'rgba(239, 68, 68, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(139, 92, 246, 0.8)',
        ],
        borderColor: [
          'rgba(239, 68, 68, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(139, 92, 246, 1)',
        ],
      }),
    ]
  );

  const radarChartData = createChartData(
    ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    [
      createDataset('My Dataset', [65, 59, 90, 81, 56, 55, 40], {
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        borderColor: 'rgba(99, 102, 241, 1)',
        pointBackgroundColor: 'rgba(99, 102, 241, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(99, 102, 241, 1)',
      }),
      createDataset('My Dataset 2', [28, 48, 40, 19, 96, 27, 100], {
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        borderColor: 'rgba(16, 185, 129, 1)',
        pointBackgroundColor: 'rgba(16, 185, 129, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(16, 185, 129, 1)',
      }),
    ]
  );

  const scatterChartData = createChartData(
    [],
    [
      createDataset('Dataset 1', [
        { x: 10, y: 20 },
        { x: 15, y: 10 },
        { x: 20, y: 30 },
        { x: 25, y: 15 },
        { x: 30, y: 25 },
        { x: 35, y: 40 },
        { x: 40, y: 35 },
        { x: 45, y: 50 },
      ], {
        backgroundColor: 'rgba(99, 102, 241, 0.8)',
        borderColor: 'rgba(99, 102, 241, 1)',
      }),
    ]
  );

  const getChartData = () => {
    switch (selectedChartType) {
      case 'line':
        return lineChartData;
      case 'bar':
        return barChartData;
      case 'pie':
        return pieChartData;
      case 'doughnut':
        return doughnutChartData;
      case 'polarArea':
        return polarAreaData;
      case 'radar':
        return radarChartData;
      case 'scatter':
        return scatterChartData;
      default:
        return lineChartData;
    }
  };

  const chartTypes = [
    { value: 'line', label: 'Line Chart' },
    { value: 'bar', label: 'Bar Chart' },
    { value: 'pie', label: 'Pie Chart' },
    { value: 'doughnut', label: 'Doughnut Chart' },
    { value: 'polarArea', label: 'Polar Area Chart' },
    { value: 'radar', label: 'Radar Chart' },
    { value: 'scatter', label: 'Scatter Chart' },
  ];

  return (
    <div className="page-container">
      <div className="page-content">
        <header className="page-header">
          <h1 className="page-title">AxChart Component</h1>
          <p className="page-subtitle">A versatile chart component built with Chart.js supporting multiple chart types.</p>
        </header>

        <div className="page-sections">
          <section className="page-section">
            <h2 className="page-section-title">Chart Type Selector</h2>
            <p className="page-section-text">Choose different chart types to see the component in action.</p>
            <div className="page-content-container">
              <div className="page-content-group">
                <div className="page-content-group-title">Chart Types</div>
                <div className="flex flex-wrap mb-6" style={{ gap: '2rem', justifyContent: 'flex-start' }}>
                  {chartTypes.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setSelectedChartType(type.value)}
                      className={`px-6 py-4 text-sm rounded-lg transition-colors font-medium ${
                        selectedChartType === type.value
                          ? 'bg-primary text-primary-foreground shadow-md'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:shadow-sm'
                      }`}
                      style={{ margin: '0.5rem' }}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Interactive Chart</h2>
            <p className="text-muted-foreground mb-6">Current chart type: {chartTypes.find(t => t.value === selectedChartType)?.label}</p>
            <div className="bg-card border rounded-lg p-6">
              <AxChart
                type={selectedChartType}
                data={getChartData()}
                size="lg"
                variant="default"
                title={`${chartTypes.find(t => t.value === selectedChartType)?.label} Example`}
                description="This is an example of the selected chart type with sample data"
              />
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Chart Sizes</h2>
            <p className="page-section-text">Different sizes for different contexts.</p>
            <div className="page-content-container" style={{ gap: '4rem' }}>
              <div className="page-content-group" style={{ padding: '3rem' }}>
                <h3 className="text-lg font-medium text-foreground mb-4">Small Chart</h3>
                <AxChart
                  type="line"
                  data={lineChartData}
                  size="sm"
                  variant="default"
                  title="Small Chart"
                />
              </div>
              <div className="page-content-group" style={{ padding: '3rem' }}>
                <h3 className="text-lg font-medium text-foreground mb-4">Default Chart</h3>
                <AxChart
                  type="bar"
                  data={barChartData}
                  size="default"
                  variant="default"
                  title="Default Chart"
                />
              </div>
              <div className="page-content-group" style={{ padding: '3rem' }}>
                <h3 className="text-lg font-medium text-foreground mb-4">Large Chart</h3>
                <AxChart
                  type="pie"
                  data={pieChartData}
                  size="lg"
                  variant="default"
                  title="Large Chart"
                />
              </div>
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Chart Variants</h2>
            <p className="page-section-text">Different visual styles for different use cases.</p>
            <div className="page-content-container" style={{ gap: '4rem' }}>
              <div className="page-content-group" style={{ padding: '3rem' }}>
                <h3 className="text-lg font-medium text-foreground mb-4">Default Variant</h3>
                <AxChart
                  type="doughnut"
                  data={doughnutChartData}
                  size="default"
                  variant="default"
                  title="Default Variant"
                />
              </div>
              <div className="page-content-group" style={{ padding: '3rem' }}>
                <h3 className="text-lg font-medium text-foreground mb-4">Card Variant</h3>
                <AxChart
                  type="polarArea"
                  data={polarAreaData}
                  size="default"
                  variant="default"
                  title="Card Variant"
                />
              </div>
              <div className="page-content-group" style={{ padding: '3rem' }}>
                <h3 className="text-lg font-medium text-foreground mb-4">Transparent Variant</h3>
                <AxChart
                  type="radar"
                  data={radarChartData}
                  size="default"
                  variant="transparent"
                  title="Transparent Variant"
                />
              </div>
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Chart Examples</h2>
            <p className="page-section-text">Various chart types with different data visualizations.</p>
            <div className="page-content-container" style={{ gap: '4rem' }}>
              <div className="page-content-group" style={{ padding: '3rem' }}>
                <AxChart
                  type="line"
                  data={lineChartData}
                  size="default"
                  variant="default"
                  title="Sales vs Revenue"
                  description="Monthly comparison of sales and revenue data"
                />
              </div>
              <div className="page-content-group" style={{ padding: '3rem' }}>
                <AxChart
                  type="bar"
                  data={barChartData}
                  size="default"
                  variant="default"
                  title="Quarterly Performance"
                  description="Q1-Q4 performance metrics"
                />
              </div>
              <div className="page-content-group" style={{ padding: '3rem' }}>
                <AxChart
                  type="pie"
                  data={pieChartData}
                  size="default"
                  variant="default"
                  title="Traffic Sources"
                  description="Distribution of website traffic by device type"
                />
              </div>
              <div className="page-content-group" style={{ padding: '3rem' }}>
                <AxChart
                  type="scatter"
                  data={scatterChartData}
                  size="default"
                  variant="default"
                  title="Correlation Analysis"
                  description="Scatter plot showing relationship between variables"
                />
              </div>
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Props</h2>
            <div className="page-content-container" style={{ gap: '3rem' }}>
              <div className="page-content-group" style={{ padding: '3rem' }}>
                <div className="page-content-group-title">AxChart Props</div>
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
                      <td className="page-prop-name">type</td>
                      <td>'line' | 'bar' | 'pie' | 'doughnut' | 'polarArea' | 'radar' | 'scatter'</td>
                      <td>'line'</td>
                      <td>Chart type from Chart.js</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">data</td>
                      <td>ChartData</td>
                      <td>undefined</td>
                      <td>Chart data object</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">options</td>
                      <td>ChartOptions</td>
                      <td>undefined</td>
                      <td>Chart.js options object</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">size</td>
                      <td>'sm' | 'default' | 'lg' | 'xl' | '2xl' | 'full'</td>
                      <td>'default'</td>
                      <td>Chart size</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">variant</td>
                      <td>'default' | 'card' | 'transparent'</td>
                      <td>'default'</td>
                      <td>Visual style variant</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">title</td>
                      <td>string</td>
                      <td>undefined</td>
                      <td>Chart title</td>
                    </tr>
                    <tr>
                      <td className="page-prop-name">description</td>
                      <td>string</td>
                      <td>undefined</td>
                      <td>Chart description</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="page-section">
            <h2 className="page-section-title">Helper Functions</h2>
            <p className="page-section-text">Utility functions to create chart data easily.</p>
            <div className="page-content-container" style={{ gap: '4rem' }}>
              <div className="page-content-group" style={{ padding: '3rem', marginBottom: '2rem' }}>
                <div className="page-content-group-title">createChartData</div>
                <p className="text-sm text-muted-foreground mb-6">Creates a chart data object with labels and datasets.</p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <pre className="text-sm text-gray-800 overflow-x-auto">
{`createChartData(labels: string[], datasets: Dataset[])

// Example:
const chartData = createChartData(
  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  [
    createDataset('Sales', [12, 19, 3, 5, 2, 3]),
    createDataset('Revenue', [2, 3, 20, 5, 1, 4])
  ]
);`}
                  </pre>
                </div>
              </div>
              
              <div className="page-content-group" style={{ padding: '3rem', marginTop: '2rem' }}>
                <div className="page-content-group-title">createDataset</div>
                <p className="text-sm text-muted-foreground mb-6">Creates a dataset object with styling options.</p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <pre className="text-sm text-gray-800 overflow-x-auto">
{`createDataset(label: string, data: number[], options?: DatasetOptions)

// Example:
const dataset = createDataset('Sales', [12, 19, 3, 5, 2, 3], {
  backgroundColor: 'rgba(99, 102, 241, 0.2)',
  borderColor: 'rgba(99, 102, 241, 1)',
  tension: 0.1,
});`}
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

export default ChartPage;
