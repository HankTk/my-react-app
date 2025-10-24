import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const cardVariants = cva(
  "rounded-lg border bg-card text-card-foreground",
  {
    variants: {
      size: {
        sm: "shadow-sm",
        md: "shadow-sm",
        lg: "shadow-md",
        xl: "shadow-lg",
      },
      variant: {
        default: "border-border",
        outline: "border-2 border-border",
        ghost: "border-transparent shadow-none",
        elevated: "border-border shadow-lg transform -translate-y-1 transition-all duration-300 hover:shadow-xl hover:-translate-y-2",
      },
      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
      padding: "md",
    },
  }
)

export interface AxCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const AxCard = React.forwardRef<HTMLDivElement, AxCardProps>(
  ({ className, size, variant, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ size, variant, padding, className }))}
      {...props}
    />
  )
)
AxCard.displayName = "AxCard"

const cardHeaderVariants = cva(
  "flex flex-col space-y-1.5",
  {
    variants: {
      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      padding: "md",
    },
  }
)

export interface AxCardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardHeaderVariants> {}

const AxCardHeader = React.forwardRef<HTMLDivElement, AxCardHeaderProps>(
  ({ className, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardHeaderVariants({ padding, className }))}
      {...props}
    />
  )
)
AxCardHeader.displayName = "AxCardHeader"

const cardTitleVariants = cva(
  "font-semibold leading-none tracking-tight",
  {
    variants: {
      size: {
        sm: "text-lg",
        md: "text-xl",
        lg: "text-2xl",
        xl: "text-3xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export interface AxCardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof cardTitleVariants> {}

const AxCardTitle = React.forwardRef<HTMLHeadingElement, AxCardTitleProps>(
  ({ className, size, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(cardTitleVariants({ size, className }))}
      {...props}
    />
  )
)
AxCardTitle.displayName = "AxCardTitle"

const cardDescriptionVariants = cva(
  "text-muted-foreground",
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export interface AxCardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof cardDescriptionVariants> {}

const AxCardDescription = React.forwardRef<HTMLParagraphElement, AxCardDescriptionProps>(
  ({ className, size, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(cardDescriptionVariants({ size, className }))}
      {...props}
    />
  )
)
AxCardDescription.displayName = "AxCardDescription"

const cardContentVariants = cva(
  "",
  {
    variants: {
      padding: {
        none: "",
        sm: "p-4 pt-0",
        md: "p-6 pt-0",
        lg: "p-8 pt-0",
      },
    },
    defaultVariants: {
      padding: "md",
    },
  }
)

export interface AxCardContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardContentVariants> {}

const AxCardContent = React.forwardRef<HTMLDivElement, AxCardContentProps>(
  ({ className, padding, ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn(cardContentVariants({ padding, className }))} 
      {...props} 
    />
  )
)
AxCardContent.displayName = "AxCardContent"

const cardFooterVariants = cva(
  "flex items-center",
  {
    variants: {
      padding: {
        none: "",
        sm: "p-4 pt-0",
        md: "p-6 pt-0",
        lg: "p-8 pt-0",
      },
    },
    defaultVariants: {
      padding: "md",
    },
  }
)

export interface AxCardFooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardFooterVariants> {}

const AxCardFooter = React.forwardRef<HTMLDivElement, AxCardFooterProps>(
  ({ className, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardFooterVariants({ padding, className }))}
      {...props}
    />
  )
)
AxCardFooter.displayName = "AxCardFooter"

export { 
  AxCard, 
  AxCardHeader, 
  AxCardFooter, 
  AxCardTitle, 
  AxCardDescription, 
  AxCardContent,
  cardVariants,
  cardHeaderVariants,
  cardTitleVariants,
  cardDescriptionVariants,
  cardContentVariants,
  cardFooterVariants
}
