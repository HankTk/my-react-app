import * as React from "react"

export interface AxLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'responsive';
  weight?: 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  variant?: 'default' | 'muted' | 'primary' | 'secondary' | 'destructive' | 'success' | 'warning';
}

const AxLabel = React.forwardRef<HTMLLabelElement, AxLabelProps>(
  ({ className, size, weight, variant, children, ...props }, ref) => {
    // Get color style for variant using CSS tokens
    const getVariantStyle = (variant: string) => {
      const colorMap = {
        'default': 'rgb(var(--color-neutral-900))',
        'muted': 'rgb(var(--color-neutral-500))',
        'primary': 'rgb(var(--color-primary-600))',
        'secondary': 'rgb(var(--color-neutral-500))',
        'destructive': 'rgb(var(--color-error-600))',
        'success': 'rgb(var(--color-success-600))',
        'warning': 'rgb(var(--color-warning-600))',
      };
      
      const color = colorMap[variant as keyof typeof colorMap] || colorMap.default;
      
      return { 
        color: color,
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
        textDecoration: 'none',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        display: 'inline-block',
        width: '100%'
      } as React.CSSProperties;
    };

    // Get size and weight styles using CSS tokens
    const getSizeStyle = (size: string) => {
      const sizeMap = {
        'xs': { fontSize: 'var(--font-size-xs)' },
        'sm': { fontSize: 'var(--font-size-sm)' },
        'md': { fontSize: 'var(--font-size-sm)' },
        'lg': { fontSize: 'var(--font-size-base)' },
        'xl': { fontSize: 'var(--font-size-lg)' },
        '2xl': { fontSize: 'var(--font-size-xl)' },
        'responsive': { fontSize: 'var(--font-size-sm)' },
      };
      return sizeMap[size as keyof typeof sizeMap] || sizeMap.md;
    };

    const getWeightStyle = (weight: string) => {
      const weightMap = {
        'thin': { fontWeight: 'var(--font-weight-thin)' },
        'light': { fontWeight: 'var(--font-weight-light)' },
        'normal': { fontWeight: 'var(--font-weight-normal)' },
        'medium': { fontWeight: 'var(--font-weight-medium)' },
        'semibold': { fontWeight: 'var(--font-weight-semibold)' },
        'bold': { fontWeight: 'var(--font-weight-bold)' },
        'extrabold': { fontWeight: 'var(--font-weight-extrabold)' },
        'black': { fontWeight: 'var(--font-weight-black)' },
      };
      return weightMap[weight as keyof typeof weightMap] || weightMap.medium;
    };

    return (
      <label
        ref={ref}
        className={className}
        style={{
          ...getSizeStyle(size || 'md'),
          ...getWeightStyle(weight || 'medium'),
          display: 'block',
          marginBottom: 'var(--spacing-2)'
        }}
        {...props}
      >
        <span 
          style={getVariantStyle(variant || 'default')}
          data-variant={variant || 'default'}
        >
          {children}
        </span>
      </label>
    );
  }
)
AxLabel.displayName = "AxLabel"

export { AxLabel }
