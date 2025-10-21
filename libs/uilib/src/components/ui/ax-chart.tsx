import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const chartVariants = cva(
  "relative w-full",
  {
    variants: {
      size: {
        sm: "h-48",
        default: "h-64",
        lg: "h-80",
        xl: "h-96",
        "2xl": "h-[28rem]",
        full: "h-full",
      },
      variant: {
        default: "bg-background",
        card: "bg-card rounded-lg border",
        transparent: "bg-transparent",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
)

export interface AxChartProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chartVariants> {
  data?: any
  options?: any
  type?: 'line' | 'bar' | 'pie' | 'doughnut' | 'polarArea' | 'radar' | 'scatter'
  title?: string
  description?: string
}

const AxChart = React.forwardRef<HTMLDivElement, AxChartProps>(
  ({ className, size, variant, data, options, type = 'line', title, description, ...props }, ref) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    const chartInstance = React.useRef<any>(null)

    React.useEffect(() => {
      if (!canvasRef.current || !data) return

      // Dynamically import Chart.js to avoid SSR issues
      import('chart.js/auto').then(({ Chart }) => {
        if (chartInstance.current) {
          chartInstance.current.destroy()
        }

        // Check if it's a circular chart
        const isCircularChart = ['pie', 'doughnut', 'polarArea'].includes(type)
        
        const defaultOptions = {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top' as const,
            },
            title: {
              display: !!title,
              text: title,
            },
          },
          layout: {
            padding: {
              top: isCircularChart ? 30 : 15,
              bottom: isCircularChart ? 30 : 15,
              left: isCircularChart ? 30 : 15,
              right: isCircularChart ? 30 : 15
            }
          },
          // Add specific sizing for circular charts
          ...(isCircularChart && {
            cutout: type === 'doughnut' ? '50%' : undefined,
            radius: '70%'
          }),
          ...options,
        }

        chartInstance.current = new Chart(canvasRef.current!, {
          type,
          data,
          options: defaultOptions,
        })
      })

      return () => {
        if (chartInstance.current) {
          chartInstance.current.destroy()
        }
      }
    }, [data, options, type, title])

    return (
      <div
        ref={ref}
        className={cn(chartVariants({ size, variant, className }))}
        {...props}
      >
        {title && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
        )}
        <div className="relative w-full h-full overflow-hidden">
          <canvas 
            ref={canvasRef} 
            className="w-full h-full max-w-full max-h-full"
          />
        </div>
      </div>
    )
  }
)
AxChart.displayName = "AxChart"

// Chart data helper functions
export const createChartData = (labels: string[], datasets: any[]) => ({
  labels,
  datasets,
})

export const createDataset = (
  label: string,
  data: number[],
  options: {
    backgroundColor?: string | string[]
    borderColor?: string | string[]
    borderWidth?: number
    fill?: boolean
    tension?: number
  } = {}
) => ({
  label,
  data,
  backgroundColor: options.backgroundColor || 'rgba(99, 102, 241, 0.2)',
  borderColor: options.borderColor || 'rgba(99, 102, 241, 1)',
  borderWidth: options.borderWidth || 2,
  fill: options.fill || false,
  tension: options.tension || 0.1,
})

export { AxChart, chartVariants }
