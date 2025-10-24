import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const labelVariants = cva(
  "leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg",
        "2xl": "text-xl",
        responsive: "text-xs sm:text-sm lg:text-base",
      },
      weight: {
        thin: "font-thin",
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
        extrabold: "font-extrabold",
        black: "font-black",
      },
      variant: {
        default: "text-foreground",
        muted: "text-muted-foreground",
        primary: "text-primary",
        secondary: "text-secondary-foreground",
        destructive: "text-destructive",
        success: "text-success",
        warning: "text-warning",
      },
    },
    defaultVariants: {
      size: "md",
      weight: "medium",
      variant: "default",
    },
  }
)

export interface AxLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {}

const AxLabel = React.forwardRef<HTMLLabelElement, AxLabelProps>(
  ({ className, size, weight, variant, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(labelVariants({ size, weight, variant, className }))}
        {...props}
      >
        {children}
      </label>
    );
  }
)
AxLabel.displayName = "AxLabel"

export { AxLabel, labelVariants }
