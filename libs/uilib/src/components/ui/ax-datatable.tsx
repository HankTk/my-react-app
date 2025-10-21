import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"
import { ChevronLeft, ChevronRight, Search, Filter, Download, MoreHorizontal } from "lucide-react"

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

export interface AxDataTableProps
  extends React.TableHTMLAttributes<HTMLTableElement>,
    VariantProps<typeof tableVariants> {
  data?: any[]
  columns?: Array<{
    key: string
    title: string
    render?: (value: any, row: any, index: number) => React.ReactNode
    sortable?: boolean
    filterable?: boolean
    width?: string
    align?: 'left' | 'center' | 'right'
  }>
  loading?: boolean
  emptyMessage?: string
  onRowClick?: (row: any, index: number) => void
  
  // Pagination
  pagination?: boolean
  pageSize?: number
  currentPage?: number
  onPageChange?: (page: number) => void
  
  // Search
  searchable?: boolean
  searchPlaceholder?: string
  searchValue?: string
  onSearchChange?: (value: string) => void
  
  // Filtering
  filterable?: boolean
  filters?: Record<string, any>
  onFilterChange?: (filters: Record<string, any>) => void
  
  // Selection
  selectable?: boolean
  selectedRows?: any[]
  onSelectionChange?: (selectedRows: any[]) => void
  
  // Actions
  actions?: Array<{
    label: string
    icon?: React.ReactNode
    onClick: (row: any, index: number) => void
    variant?: 'default' | 'destructive' | 'outline'
  }>
  
  // Export
  exportable?: boolean
  onExport?: (data: any[]) => void
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

const AxDataTable = React.forwardRef<HTMLTableElement, AxDataTableProps>(
  ({ 
    className, 
    variant, 
    size, 
    data = [], 
    columns = [], 
    loading, 
    emptyMessage = "データがありません", 
    onRowClick,
    pagination = false,
    pageSize = 10,
    currentPage = 1,
    onPageChange,
    searchable = false,
    searchPlaceholder = "検索...",
    searchValue = "",
    onSearchChange,
    filterable = false,
    filters = {},
    onFilterChange,
    selectable = false,
    selectedRows = [],
    onSelectionChange,
    actions = [],
    exportable = false,
    onExport,
    ...props 
  }, ref) => {
    const [sortConfig, setSortConfig] = React.useState<{
      key: string
      direction: 'asc' | 'desc'
    } | null>(null)
    
    const [internalSearchValue, setInternalSearchValue] = React.useState("")
    const [internalFilters, setInternalFilters] = React.useState<Record<string, any>>({})
    const [internalSelectedRows, setInternalSelectedRows] = React.useState<any[]>([])
    const [internalCurrentPage, setInternalCurrentPage] = React.useState(1)

    const searchVal = searchValue !== undefined ? searchValue : internalSearchValue
    const filterVal = Object.keys(filters).length > 0 ? filters : internalFilters
    const selectedVal = selectedRows.length > 0 ? selectedRows : internalSelectedRows
    const currentPageVal = currentPage !== undefined ? currentPage : internalCurrentPage

    const handleSort = (key: string) => {
      const column = columns.find(col => col.key === key)
      if (!column?.sortable) return

      let direction: 'asc' | 'desc' = 'asc'
      if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
        direction = 'desc'
      }
      setSortConfig({ key, direction })
    }

    const handleSearch = (value: string) => {
      if (onSearchChange) {
        onSearchChange(value)
      } else {
        setInternalSearchValue(value)
      }
    }

    const handleFilter = (key: string, value: any) => {
      const newFilters = { ...filterVal, [key]: value }
      if (onFilterChange) {
        onFilterChange(newFilters)
      } else {
        setInternalFilters(newFilters)
      }
    }

    const handleSelection = (row: any, checked: boolean) => {
      let newSelection: any[]
      if (checked) {
        newSelection = [...selectedVal, row]
      } else {
        newSelection = selectedVal.filter(r => r !== row)
      }
      
      if (onSelectionChange) {
        onSelectionChange(newSelection)
      } else {
        setInternalSelectedRows(newSelection)
      }
    }

    const handleSelectAll = (checked: boolean) => {
      const newSelection = checked ? [...processedData] : []
      if (onSelectionChange) {
        onSelectionChange(newSelection)
      } else {
        setInternalSelectedRows(newSelection)
      }
    }

    const handlePageChange = (page: number) => {
      if (onPageChange) {
        onPageChange(page)
      } else {
        setInternalCurrentPage(page)
      }
    }

    // データの処理（検索、フィルタリング、ソート）
    const processedData = React.useMemo(() => {
      let result = [...data]

      // 検索
      if (searchVal) {
        result = result.filter(row =>
          columns.some(column => {
            const value = row[column.key]
            return value && value.toString().toLowerCase().includes(searchVal.toLowerCase())
          })
        )
      }

      // フィルタリング
      Object.entries(filterVal).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          result = result.filter(row => {
            const rowValue = row[key]
            if (typeof value === 'string') {
              return rowValue && rowValue.toString().toLowerCase().includes(value.toLowerCase())
            }
            return rowValue === value
          })
        }
      })

      // ソート
      if (sortConfig) {
        result = result.sort((a, b) => {
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
      }

      return result
    }, [data, searchVal, filterVal, sortConfig, columns])

    // ページネーション
    const paginatedData = React.useMemo(() => {
      if (!pagination) return processedData
      
      const startIndex = (currentPageVal - 1) * pageSize
      const endIndex = startIndex + pageSize
      return processedData.slice(startIndex, endIndex)
    }, [processedData, pagination, currentPageVal, pageSize])

    const totalPages = Math.ceil(processedData.length / pageSize)

    if (loading) {
      return (
        <div className="w-full">
          {/* 検索・フィルター・エクスポートバー */}
          {(searchable || filterable || exportable) && (
            <div className="flex items-center gap-4 p-4 border-b">
              {searchable && (
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder={searchPlaceholder}
                    value={searchVal}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background text-sm"
                  />
                </div>
              )}
              {exportable && onExport && (
                <button
                  onClick={() => onExport(processedData)}
                  className="flex items-center gap-2 px-3 py-2 text-sm border border-input rounded-md hover:bg-muted"
                >
                  <Download className="h-4 w-4" />
                  エクスポート
                </button>
              )}
            </div>
          )}
          
          <table ref={ref} className={cn(tableVariants({ variant, size, className }))} {...props}>
            <AxTableHeader variant={variant}>
              <AxTableRow variant={variant}>
                {selectable && (
                  <AxTableHead variant={variant} className="w-12">
                    <input
                      type="checkbox"
                      checked={selectedVal.length === paginatedData.length && paginatedData.length > 0}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                      className="rounded border-input"
                    />
                  </AxTableHead>
                )}
                {columns.map((column) => (
                  <AxTableHead key={column.key} variant={variant} style={{ width: column.width }}>
                    {column.title}
                  </AxTableHead>
                ))}
                {actions.length > 0 && (
                  <AxTableHead variant={variant} className="w-12">
                    アクション
                  </AxTableHead>
                )}
              </AxTableRow>
            </AxTableHeader>
            <AxTableBody variant={variant}>
              {Array.from({ length: 5 }).map((_, index) => (
                <AxTableRow key={index} variant={variant}>
                  {selectable && (
                    <AxTableCell variant={variant}>
                      <div className="h-4 bg-muted animate-pulse rounded w-4" />
                    </AxTableCell>
                  )}
                  {columns.map((column) => (
                    <AxTableCell key={column.key} variant={variant}>
                      <div className="h-4 bg-muted animate-pulse rounded" />
                    </AxTableCell>
                  ))}
                  {actions.length > 0 && (
                    <AxTableCell variant={variant}>
                      <div className="h-4 bg-muted animate-pulse rounded w-8" />
                    </AxTableCell>
                  )}
                </AxTableRow>
              ))}
            </AxTableBody>
          </table>
          
          {/* ページネーション */}
          {pagination && (
            <div className="flex items-center justify-between p-4 border-t">
              <div className="text-sm text-muted-foreground">
                {processedData.length}件中 {Math.min((currentPageVal - 1) * pageSize + 1, processedData.length)}-{Math.min(currentPageVal * pageSize, processedData.length)}件を表示
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPageVal - 1)}
                  disabled={currentPageVal <= 1}
                  className="p-2 border border-input rounded-md hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="text-sm">
                  {currentPageVal} / {totalPages}
                </span>
                <button
                  onClick={() => handlePageChange(currentPageVal + 1)}
                  disabled={currentPageVal >= totalPages}
                  className="p-2 border border-input rounded-md hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )
    }

    return (
      <div className="w-full">
        {/* 検索・フィルター・エクスポートバー */}
        {(searchable || filterable || exportable) && (
          <div className="flex items-center gap-4 p-4 border-b">
            {searchable && (
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  value={searchVal}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background text-sm"
                />
              </div>
            )}
            {filterable && (
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">フィルター</span>
              </div>
            )}
            {exportable && onExport && (
              <button
                onClick={() => onExport(processedData)}
                className="flex items-center gap-2 px-3 py-2 text-sm border border-input rounded-md hover:bg-muted"
              >
                <Download className="h-4 w-4" />
                エクスポート
              </button>
            )}
          </div>
        )}
        
        <table ref={ref} className={cn(tableVariants({ variant, size, className }))} {...props}>
          <AxTableHeader variant={variant}>
            <AxTableRow variant={variant}>
              {selectable && (
                <AxTableHead variant={variant} className="w-12">
                  <input
                    type="checkbox"
                    checked={selectedVal.length === paginatedData.length && paginatedData.length > 0}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className="rounded border-input"
                  />
                </AxTableHead>
              )}
              {columns.map((column) => (
                <AxTableHead
                  key={column.key}
                  variant={variant}
                  style={{ width: column.width }}
                  className={cn(
                    column.sortable && "cursor-pointer hover:bg-muted/50",
                    sortConfig?.key === column.key && "bg-muted",
                    column.align === 'center' && "text-center",
                    column.align === 'right' && "text-right"
                  )}
                  onClick={() => handleSort(column.key)}
                >
                  <div className={cn(
                    "flex items-center gap-2",
                    column.align === 'center' && "justify-center",
                    column.align === 'right' && "justify-end"
                  )}>
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
              {actions.length > 0 && (
                <AxTableHead variant={variant} className="w-12">
                  アクション
                </AxTableHead>
              )}
            </AxTableRow>
          </AxTableHeader>
          <AxTableBody variant={variant}>
            {paginatedData.length === 0 ? (
              <AxTableRow variant={variant}>
                <AxTableCell
                  variant={variant}
                  colSpan={columns.length + (selectable ? 1 : 0) + (actions.length > 0 ? 1 : 0)}
                  className="text-center text-muted-foreground py-8"
                >
                  {emptyMessage}
                </AxTableCell>
              </AxTableRow>
            ) : (
              paginatedData.map((row, index) => (
                <AxTableRow
                  key={index}
                  variant={variant}
                  className={cn(
                    onRowClick && "cursor-pointer",
                    selectedVal.includes(row) && "bg-muted/50"
                  )}
                  onClick={() => onRowClick?.(row, index)}
                >
                  {selectable && (
                    <AxTableCell variant={variant}>
                      <input
                        type="checkbox"
                        checked={selectedVal.includes(row)}
                        onChange={(e) => {
                          e.stopPropagation()
                          handleSelection(row, e.target.checked)
                        }}
                        className="rounded border-input"
                      />
                    </AxTableCell>
                  )}
                  {columns.map((column) => (
                    <AxTableCell 
                      key={column.key} 
                      variant={variant}
                      className={cn(
                        column.align === 'center' && "text-center",
                        column.align === 'right' && "text-right"
                      )}
                    >
                      {column.render ? column.render(row[column.key], row, index) : row[column.key]}
                    </AxTableCell>
                  ))}
                  {actions.length > 0 && (
                    <AxTableCell variant={variant}>
                      <div className="flex items-center gap-1">
                        {actions.map((action, actionIndex) => (
                          <button
                            key={actionIndex}
                            onClick={(e) => {
                              e.stopPropagation()
                              action.onClick(row, index)
                            }}
                            className={cn(
                              "p-1 rounded hover:bg-muted",
                              action.variant === 'destructive' && "text-destructive hover:text-destructive",
                              action.variant === 'outline' && "border border-input"
                            )}
                            title={action.label}
                          >
                            {action.icon || <MoreHorizontal className="h-4 w-4" />}
                          </button>
                        ))}
                      </div>
                    </AxTableCell>
                  )}
                </AxTableRow>
              ))
            )}
          </AxTableBody>
        </table>
        
        {/* ページネーション */}
        {pagination && (
          <div className="flex items-center justify-between p-4 border-t">
            <div className="text-sm text-muted-foreground">
              {processedData.length}件中 {Math.min((currentPageVal - 1) * pageSize + 1, processedData.length)}-{Math.min(currentPageVal * pageSize, processedData.length)}件を表示
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPageVal - 1)}
                disabled={currentPageVal <= 1}
                className="p-2 border border-input rounded-md hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="text-sm">
                {currentPageVal} / {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(currentPageVal + 1)}
                disabled={currentPageVal >= totalPages}
                className="p-2 border border-input rounded-md hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
)
AxDataTable.displayName = "AxDataTable"

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
  AxDataTable,
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
