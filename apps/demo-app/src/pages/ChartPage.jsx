import React, { useState } from 'react';
import { AxChart, createChartData, createDataset } from '@my-org/react-component-library';

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
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">AxChart Component</h1>
          <p className="text-muted-foreground">A versatile chart component built with Chart.js supporting multiple chart types.</p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Chart Type Selector</h2>
            <p className="text-muted-foreground mb-6">Choose different chart types to see the component in action.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 mb-6">
              {chartTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setSelectedChartType(type.value)}
                  className={`px-3 py-2 text-sm rounded-md transition-colors ${
                    selectedChartType === type.value
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {type.label}
                </button>
              ))}
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

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Chart Sizes</h2>
            <p className="text-muted-foreground mb-6">Different sizes for different contexts.</p>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Small Chart</h3>
                <div className="bg-card border rounded-lg p-4">
                  <AxChart
                    type="line"
                    data={lineChartData}
                    size="sm"
                    variant="default"
                    title="Small Chart"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Default Chart</h3>
                <div className="bg-card border rounded-lg p-4">
                  <AxChart
                    type="bar"
                    data={barChartData}
                    size="default"
                    variant="default"
                    title="Default Chart"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Large Chart</h3>
                <div className="bg-card border rounded-lg p-4">
                  <AxChart
                    type="pie"
                    data={pieChartData}
                    size="lg"
                    variant="default"
                    title="Large Chart"
                  />
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Chart Variants</h2>
            <p className="text-muted-foreground mb-6">Different visual styles for different use cases.</p>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Default Variant</h3>
                <div className="bg-background border rounded-lg p-4">
                  <AxChart
                    type="doughnut"
                    data={doughnutChartData}
                    size="default"
                    variant="default"
                    title="Default Variant"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Card Variant</h3>
                <div className="bg-background border rounded-lg p-4">
                  <AxChart
                    type="polarArea"
                    data={polarAreaData}
                    size="default"
                    variant="default"
                    title="Card Variant"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Transparent Variant</h3>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border rounded-lg p-4">
                  <AxChart
                    type="radar"
                    data={radarChartData}
                    size="default"
                    variant="transparent"
                    title="Transparent Variant"
                  />
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Chart Examples</h2>
            <p className="text-muted-foreground mb-6">Various chart types with different data visualizations.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card border rounded-lg p-4">
                <AxChart
                  type="line"
                  data={lineChartData}
                  size="default"
                  variant="default"
                  title="Sales vs Revenue"
                  description="Monthly comparison of sales and revenue data"
                />
              </div>
              <div className="bg-card border rounded-lg p-4">
                <AxChart
                  type="bar"
                  data={barChartData}
                  size="default"
                  variant="default"
                  title="Quarterly Performance"
                  description="Q1-Q4 performance metrics"
                />
              </div>
              <div className="bg-card border rounded-lg p-4">
                <AxChart
                  type="pie"
                  data={pieChartData}
                  size="default"
                  variant="default"
                  title="Traffic Sources"
                  description="Distribution of website traffic by device type"
                />
              </div>
              <div className="bg-card border rounded-lg p-4">
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
                    <td className="p-2 font-mono">type</td>
                    <td className="p-2">'line' | 'bar' | 'pie' | 'doughnut' | 'polarArea' | 'radar' | 'scatter'</td>
                    <td className="p-2">'line'</td>
                    <td className="p-2">Chart type from Chart.js</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">data</td>
                    <td className="p-2">ChartData</td>
                    <td className="p-2">undefined</td>
                    <td className="p-2">Chart data object</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">options</td>
                    <td className="p-2">ChartOptions</td>
                    <td className="p-2">undefined</td>
                    <td className="p-2">Chart.js options object</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">size</td>
                    <td className="p-2">'sm' | 'default' | 'lg' | 'xl' | '2xl' | 'full'</td>
                    <td className="p-2">'default'</td>
                    <td className="p-2">Chart size</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">variant</td>
                    <td className="p-2">'default' | 'card' | 'transparent'</td>
                    <td className="p-2">'default'</td>
                    <td className="p-2">Visual style variant</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">title</td>
                    <td className="p-2">string</td>
                    <td className="p-2">undefined</td>
                    <td className="p-2">Chart title</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-mono">description</td>
                    <td className="p-2">string</td>
                    <td className="p-2">undefined</td>
                    <td className="p-2">Chart description</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Helper Functions</h2>
            <p className="text-muted-foreground mb-6">Utility functions to create chart data easily.</p>
            <div className="bg-card border rounded-lg p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">createChartData</h3>
                  <p className="text-sm text-muted-foreground mb-2">Creates a chart data object with labels and datasets.</p>
                  <code className="block bg-muted p-3 rounded text-sm font-mono">
                    createChartData(labels: string[], datasets: Dataset[])
                  </code>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">createDataset</h3>
                  <p className="text-sm text-muted-foreground mb-2">Creates a dataset object with styling options.</p>
                  <code className="block bg-muted p-3 rounded text-sm font-mono">
                    createDataset(label: string, data: number[], options?: DatasetOptions)
                  </code>
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
