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
        default: "text-sm",
        lg: "text-base",
        xl: "text-lg",
        "2xl": "text-xl",
        "responsive": "text-xs sm:text-sm lg:text-base",
      },
      weight: {
        light: "font-thin",
        normal: "font-light", 
        medium: "font-normal",
        semibold: "font-semibold",
        bold: "font-black",
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
      size: "default",
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
    const getStyles = () => {
      const styles: React.CSSProperties = {
        display: 'block',
        marginBottom: '0.5rem',
      };
      
      // Size styles
      switch (size) {
        case 'xs':
          styles.fontSize = '0.75rem';
          styles.lineHeight = '1rem';
          break;
        case 'sm':
          styles.fontSize = '0.875rem';
          styles.lineHeight = '1.25rem';
          break;
        case 'default':
          styles.fontSize = '0.875rem';
          styles.lineHeight = '1.25rem';
          break;
        case 'lg':
          styles.fontSize = '1rem';
          styles.lineHeight = '1.5rem';
          break;
        case 'xl':
          styles.fontSize = '1.125rem';
          styles.lineHeight = '1.75rem';
          break;
        case '2xl':
          styles.fontSize = '1.25rem';
          styles.lineHeight = '1.75rem';
          break;
        default:
          styles.fontSize = '0.875rem';
          styles.lineHeight = '1.25rem';
      }
      
      // Weight styles
      switch (weight) {
        case 'light':
          styles.fontWeight = '100';
          break;
        case 'normal':
          styles.fontWeight = '300';
          break;
        case 'medium':
          styles.fontWeight = '400';
          break;
        case 'semibold':
          styles.fontWeight = '600';
          break;
        case 'bold':
          styles.fontWeight = '900';
          break;
        default:
          styles.fontWeight = '400';
      }
      
      // Color styles
      switch (variant) {
        case 'default':
          styles.color = '#111827'; // gray-900
          break;
        case 'muted':
          styles.color = '#9CA3AF'; // gray-400
          break;
        case 'primary':
          styles.color = '#2563EB'; // blue-600
          break;
        case 'secondary':
          styles.color = '#4B5563'; // gray-600
          break;
        case 'destructive':
          styles.color = '#DC2626'; // red-600
          break;
        case 'success':
          styles.color = '#16A34A'; // green-600
          break;
        case 'warning':
          styles.color = '#EA580C'; // orange-600
          break;
        default:
          styles.color = '#111827'; // gray-900
      }
      
      return styles;
    };

    return (
      <label
        ref={ref}
        className={className}
        style={getStyles()}
        {...props}
      >
        {children}
      </label>
    );
  }
)
AxLabel.displayName = "AxLabel"

export { AxLabel, labelVariants }
