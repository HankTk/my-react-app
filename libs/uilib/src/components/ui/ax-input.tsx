import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const inputVariants = cva(
  "flex w-full rounded-md border bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      inputSize: {
        xs: "h-6 px-2 py-1 text-xs",
        sm: "h-8 px-3 py-1.5 text-sm",
        md: "h-10 px-3 py-2 text-sm",
        lg: "h-11 px-4 py-2.5 text-base",
        xl: "h-12 px-4 py-3 text-lg",
        responsive: "h-8 px-3 py-1.5 text-sm sm:h-10 sm:px-3 sm:py-2 sm:text-sm lg:h-11 lg:px-4 lg:py-2.5 lg:text-base",
      },
      variant: {
        default: "border-border focus-visible:ring-ring",
        destructive: "border-border-error focus-visible:ring-border-error",
        success: "border-border-success focus-visible:ring-border-success",
        warning: "border-border-warning focus-visible:ring-border-warning",
        ghost: "border-transparent bg-transparent focus-visible:ring-ring",
      },
    },
    defaultVariants: {
      inputSize: "md",
      variant: "default",
    },
  }
)

export interface AxInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const AxInput = React.forwardRef<HTMLInputElement, AxInputProps>(
  ({ className, type, inputSize, variant, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ inputSize, variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
AxInput.displayName = "AxInput"

export { AxInput, inputVariants }
