import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const tableVariants = cva(
  "w-full caption-bottom text-sm",
  {
    variants: {
      variant: {
        default: "border-collapse",
        striped: "border-collapse",
        bordered: "border-collapse border border-border",
      },
      size: {
        sm: "text-xs",
        default: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const tableHeaderVariants = cva(
  "h-12 px-4 text-left align-middle font-medium text-muted-foreground",
  {
    variants: {
      variant: {
        default: "",
        striped: "",
        bordered: "border border-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const tableBodyVariants = cva(
  "[&_tr:last-child]:border-0",
  {
    variants: {
      variant: {
        default: "",
        striped: "[&_tr:nth-child(even)]:bg-muted/50",
        bordered: "[&_tr]:border-b [&_tr]:border-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const tableRowVariants = cva(
  "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
  {
    variants: {
      variant: {
        default: "",
        striped: "",
        bordered: "border-b border-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const tableCellVariants = cva(
  "p-4 align-middle",
  {
    variants: {
      variant: {
        default: "",
        striped: "",
        bordered: "border border-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface AxTableProps
  extends React.TableHTMLAttributes<HTMLTableElement>,
    VariantProps<typeof tableVariants> {
  data?: any[]
  columns?: Array<{
    key: string
    title: string
    render?: (value: any, row: any, index: number) => React.ReactNode
    sortable?: boolean
    width?: string
  }>
  loading?: boolean
  emptyMessage?: string
  onRowClick?: (row: any, index: number) => void
}

export interface AxTableHeaderProps
  extends React.HTMLAttributes<HTMLTableSectionElement>,
    VariantProps<typeof tableHeaderVariants> {}

export interface AxTableBodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement>,
    VariantProps<typeof tableBodyVariants> {}

export interface AxTableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement>,
    VariantProps<typeof tableRowVariants> {}

export interface AxTableHeadProps
  extends React.ThHTMLAttributes<HTMLTableHeaderCellElement>,
    VariantProps<typeof tableHeaderVariants> {}

export interface AxTableCellProps
  extends React.TdHTMLAttributes<HTMLTableDataCellElement>,
    VariantProps<typeof tableCellVariants> {}

const AxTable = React.forwardRef<HTMLTableElement, AxTableProps>(
  ({ className, variant, size, data = [], columns = [], loading, emptyMessage = "データがありません", onRowClick, ...props }, ref) => {
    const [sortConfig, setSortConfig] = React.useState<{
      key: string
      direction: 'asc' | 'desc'
    } | null>(null)

    const handleSort = (key: string) => {
      const column = columns.find(col => col.key === key)
      if (!column?.sortable) return

      let direction: 'asc' | 'desc' = 'asc'
      if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
        direction = 'desc'
      }
      setSortConfig({ key, direction })
    }

    const sortedData = React.useMemo(() => {
      if (!sortConfig) return data

      return [...data].sort((a, b) => {
        const aVal = a[sortConfig.key]
        const bVal = b[sortConfig.key]

        if (aVal < bVal) {
          return sortConfig.direction === 'asc' ? -1 : 1
        }
        if (aVal > bVal) {
          return sortConfig.direction === 'asc' ? 1 : -1
        }
        return 0
      })
    }, [data, sortConfig])

    if (loading) {
      return (
        <div className="w-full">
          <table ref={ref} className={cn(tableVariants({ variant, size, className }))} {...props}>
            <AxTableHeader variant={variant}>
              <AxTableRow variant={variant}>
                {columns.map((column) => (
                  <AxTableHead key={column.key} variant={variant} style={{ width: column.width }}>
                    {column.title}
                  </AxTableHead>
                ))}
              </AxTableRow>
            </AxTableHeader>
            <AxTableBody variant={variant}>
              {Array.from({ length: 5 }).map((_, index) => (
                <AxTableRow key={index} variant={variant}>
                  {columns.map((column) => (
                    <AxTableCell key={column.key} variant={variant}>
                      <div className="h-4 bg-muted animate-pulse rounded" />
                    </AxTableCell>
                  ))}
                </AxTableRow>
              ))}
            </AxTableBody>
          </table>
        </div>
      )
    }

    return (
      <div className="w-full">
        <table ref={ref} className={cn(tableVariants({ variant, size, className }))} {...props}>
          <AxTableHeader variant={variant}>
            <AxTableRow variant={variant}>
              {columns.map((column) => (
                <AxTableHead
                  key={column.key}
                  variant={variant}
                  style={{ width: column.width }}
                  className={cn(
                    column.sortable && "cursor-pointer hover:bg-muted/50",
                    sortConfig?.key === column.key && "bg-muted"
                  )}
                  onClick={() => handleSort(column.key)}
                >
                  <div className="flex items-center gap-2">
                    {column.title}
                    {column.sortable && (
                      <span className="text-xs">
                        {sortConfig?.key === column.key ? (
                          sortConfig.direction === 'asc' ? '↑' : '↓'
                        ) : (
                          '↕'
                        )}
                      </span>
                    )}
                  </div>
                </AxTableHead>
              ))}
            </AxTableRow>
          </AxTableHeader>
          <AxTableBody variant={variant}>
            {sortedData.length === 0 ? (
              <AxTableRow variant={variant}>
                <AxTableCell
                  variant={variant}
                  colSpan={columns.length}
                  className="text-center text-muted-foreground py-8"
                >
                  {emptyMessage}
                </AxTableCell>
              </AxTableRow>
            ) : (
              sortedData.map((row, index) => (
                <AxTableRow
                  key={index}
                  variant={variant}
                  className={cn(onRowClick && "cursor-pointer")}
                  onClick={() => onRowClick?.(row, index)}
                >
                  {columns.map((column) => (
                    <AxTableCell key={column.key} variant={variant}>
                      {column.render ? column.render(row[column.key], row, index) : row[column.key]}
                    </AxTableCell>
                  ))}
                </AxTableRow>
              ))
            )}
          </AxTableBody>
        </table>
      </div>
    )
  }
)
AxTable.displayName = "AxTable"

const AxTableHeader = React.forwardRef<HTMLTableSectionElement, AxTableHeaderProps>(
  ({ className, variant, ...props }, ref) => (
    <thead ref={ref} className={cn(tableHeaderVariants({ variant, className }))} {...props} />
  )
)
AxTableHeader.displayName = "AxTableHeader"

const AxTableBody = React.forwardRef<HTMLTableSectionElement, AxTableBodyProps>(
  ({ className, variant, ...props }, ref) => (
    <tbody ref={ref} className={cn(tableBodyVariants({ variant, className }))} {...props} />
  )
)
AxTableBody.displayName = "AxTableBody"

const AxTableRow = React.forwardRef<HTMLTableRowElement, AxTableRowProps>(
  ({ className, variant, ...props }, ref) => (
    <tr ref={ref} className={cn(tableRowVariants({ variant, className }))} {...props} />
  )
)
AxTableRow.displayName = "AxTableRow"

const AxTableHead = React.forwardRef<HTMLTableHeaderCellElement, AxTableHeadProps>(
  ({ className, variant, ...props }, ref) => (
    <th ref={ref} className={cn(tableHeaderVariants({ variant, className }))} {...props} />
  )
)
AxTableHead.displayName = "AxTableHead"

const AxTableCell = React.forwardRef<HTMLTableDataCellElement, AxTableCellProps>(
  ({ className, variant, ...props }, ref) => (
    <td ref={ref} className={cn(tableCellVariants({ variant, className }))} {...props} />
  )
)
AxTableCell.displayName = "AxTableCell"

export {
  AxTable,
  AxTableHeader,
  AxTableBody,
  AxTableRow,
  AxTableHead,
  AxTableCell,
  tableVariants,
  tableHeaderVariants,
  tableBodyVariants,
  tableRowVariants,
  tableCellVariants,
}
