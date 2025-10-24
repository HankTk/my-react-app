import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primary variants - using semantic naming
        primary: "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "primary-outline": "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium border border-primary text-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "primary-ghost": "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-primary hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        
        // Secondary variants
        secondary: "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium bg-secondary text-secondary-foreground hover:bg-secondary-hover active:bg-secondary-active focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "secondary-outline": "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium border border-secondary text-secondary-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "secondary-ghost": "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-secondary-foreground hover:bg-secondary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        
        // Destructive variants
        destructive: "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium bg-destructive text-destructive-foreground hover:bg-destructive-hover active:bg-destructive-active focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "destructive-outline": "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium border border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "destructive-ghost": "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-destructive hover:bg-destructive/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        
        // Success variants
        success: "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium bg-success text-success-foreground hover:bg-success/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "success-outline": "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium border border-success text-success hover:bg-success hover:text-success-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "success-ghost": "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-success hover:bg-success/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        
        // Warning variants
        warning: "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium bg-warning text-warning-foreground hover:bg-warning/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "warning-outline": "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium border border-warning text-warning hover:bg-warning hover:text-warning-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "warning-ghost": "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-warning hover:bg-warning/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        
        // Neutral variants
        neutral: "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium bg-background-secondary text-foreground hover:bg-background-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "neutral-outline": "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium border border-border text-foreground hover:bg-background-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "neutral-ghost": "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-foreground hover:bg-background-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        
        // Link variant - completely different styling, ignores size
        link: "ax-button-link",
      },
      size: {
        // Size tokens following Figma conventions
        xs: "h-6 px-2 text-xs",
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-6 text-base",
        xl: "h-12 px-8 text-lg",
        "2xl": "h-14 px-10 text-xl",
        
        // Icon-only variants
        "icon-xs": "h-6 w-6",
        "icon-sm": "h-8 w-8",
        "icon-md": "h-10 w-10",
        "icon-lg": "h-12 w-12",
        "icon-xl": "h-14 w-14",
        
        // Responsive size
        responsive: "h-8 px-3 text-sm sm:h-10 sm:px-4 sm:text-sm lg:h-11 lg:px-6 lg:text-base",
      },
      width: {
        auto: "w-auto",
        full: "w-full",
        fit: "w-fit",
        "1/2": "w-1/2",
        "1/3": "w-1/3",
        "2/3": "w-2/3",
        "1/4": "w-1/4",
        "3/4": "w-3/4",
        min: "w-min",
        max: "w-max",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      width: "auto",
    },
  }
)

export interface AxButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const AxButton = React.forwardRef<HTMLButtonElement, AxButtonProps>(
  ({ className, variant, size, width, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // For link variant, render as an anchor tag
    if (variant === "link") {
      return (
        <a
          className={cn("text-primary underline-offset-4 hover:underline", className)}
          style={{
            background: 'none',
            backgroundColor: 'transparent',
            border: 'none',
            padding: 0,
            height: 'auto',
            fontWeight: 'normal',
            boxShadow: 'none',
            borderRadius: 0,
            display: 'inline',
            textDecoration: 'underline',
            textUnderlineOffset: '4px',
            color: 'hsl(var(--color-interactive-primary))',
            ...props.style
          }}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        />
      )
    }
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, width, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
AxButton.displayName = "AxButton"

export { AxButton, buttonVariants }
