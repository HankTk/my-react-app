import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const modalVariants = cva(
  "fixed inset-0 z-[9999] flex items-center justify-center",
  {
    variants: {
      size: {
        sm: "",
        default: "",
        lg: "",
        xl: "",
        fullscreen: "items-start",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const modalContentVariants = cva(
  "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg relative z-50",
  {
    variants: {
      size: {
        sm: "max-w-sm w-full mx-4",
        default: "max-w-md w-full mx-4",
        lg: "max-w-lg w-full mx-4",
        xl: "max-w-xl w-full mx-4",
        fullscreen: "w-full h-full max-w-none mx-0",
      },
      variant: {
        default: "rounded-lg",
        outline: "rounded-lg border-2",
        ghost: "rounded-lg border-transparent shadow-none",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
)

const modalOverlayVariants = cva(
  "fixed inset-0",
  {
    variants: {
      variant: {
        default: "bg-black/50",
        light: "bg-black/25",
        dark: "bg-black/75",
        none: "bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface AxModalProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalVariants> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  overlayVariant?: VariantProps<typeof modalOverlayVariants>["variant"]
}

export interface AxModalContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalContentVariants> {}

export interface AxModalHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  padding?: "none" | "sm" | "default" | "lg"
}

export interface AxModalTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: "sm" | "default" | "lg"
}

export interface AxModalDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "xs" | "sm" | "default" | "lg"
}

export interface AxModalBodyProps
  extends React.HTMLAttributes<HTMLDivElement> {
  padding?: "none" | "sm" | "default" | "lg"
}

export interface AxModalFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {
  padding?: "none" | "sm" | "default" | "lg"
}

const AxModal = React.forwardRef<HTMLDivElement, AxModalProps>(
  ({ className, size, open = false, onOpenChange, overlayVariant = "default", children, ...props }, ref) => {
    const handleOverlayClick = (e: React.MouseEvent) => {
      if (e.target === e.currentTarget && onOpenChange) {
        onOpenChange(false)
      }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Escape" && onOpenChange) {
        onOpenChange(false)
      }
    }

    if (!open) return null

    return (
      <div
        ref={ref}
        className={cn(modalVariants({ size, className }))}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <div 
          className={cn(modalOverlayVariants({ variant: overlayVariant }))}
          onClick={handleOverlayClick}
        />
        {children}
      </div>
    )
  }
)
AxModal.displayName = "AxModal"

const AxModalContent = React.forwardRef<HTMLDivElement, AxModalContentProps>(
  ({ className, size, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(modalContentVariants({ size, variant, className }))}
      {...props}
    />
  )
)
AxModalContent.displayName = "AxModalContent"

const AxModalHeader = React.forwardRef<HTMLDivElement, AxModalHeaderProps>(
  ({ className, padding = "default", ...props }, ref) => {
    const paddingClasses = {
      none: "",
      sm: "p-4",
      default: "p-6",
      lg: "p-8",
    }

    return (
      <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5", paddingClasses[padding], className)}
        {...props}
      />
    )
  }
)
AxModalHeader.displayName = "AxModalHeader"

const AxModalTitle = React.forwardRef<HTMLHeadingElement, AxModalTitleProps>(
  ({ className, size = "default", ...props }, ref) => {
    const sizeClasses = {
      sm: "text-lg",
      default: "text-xl",
      lg: "text-2xl",
    }

    return (
      <h2
        ref={ref}
        className={cn("font-semibold leading-none tracking-tight", sizeClasses[size], className)}
        {...props}
      />
    )
  }
)
AxModalTitle.displayName = "AxModalTitle"

const AxModalDescription = React.forwardRef<HTMLParagraphElement, AxModalDescriptionProps>(
  ({ className, size = "default", ...props }, ref) => {
    const sizeClasses = {
      xs: "text-xs",
      sm: "text-sm",
      default: "text-sm",
      lg: "text-base",
    }

    return (
      <p
        ref={ref}
        className={cn("text-muted-foreground", sizeClasses[size], className)}
        {...props}
      />
    )
  }
)
AxModalDescription.displayName = "AxModalDescription"

const AxModalBody = React.forwardRef<HTMLDivElement, AxModalBodyProps>(
  ({ className, padding = "default", ...props }, ref) => {
    const paddingClasses = {
      none: "",
      sm: "p-4",
      default: "p-6",
      lg: "p-8",
    }

    return (
      <div
        ref={ref}
        className={cn(paddingClasses[padding], className)}
        {...props}
      />
    )
  }
)
AxModalBody.displayName = "AxModalBody"

const AxModalFooter = React.forwardRef<HTMLDivElement, AxModalFooterProps>(
  ({ className, padding = "default", ...props }, ref) => {
    const paddingClasses = {
      none: "",
      sm: "p-4",
      default: "p-6",
      lg: "p-8",
    }

    return (
      <div
        ref={ref}
        className={cn("flex items-center justify-end gap-2", paddingClasses[padding], className)}
        {...props}
      />
    )
  }
)
AxModalFooter.displayName = "AxModalFooter"

export { 
  AxModal, 
  AxModalContent, 
  AxModalHeader, 
  AxModalTitle, 
  AxModalDescription, 
  AxModalBody, 
  AxModalFooter,
  modalVariants,
  modalContentVariants,
  modalOverlayVariants
}
