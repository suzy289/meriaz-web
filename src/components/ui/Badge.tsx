import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'warning' | 'success' | 'info'
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    const variants = {
      primary: 'bg-primary-50 text-primary border border-primary-200',
      secondary: 'bg-secondary-50 text-secondary-dark border border-secondary-200',
      accent: 'bg-accent-50 text-accent-dark border border-accent-200',
      warning: 'bg-yellow-50 text-yellow-800 border border-yellow-200',
      success: 'bg-green-50 text-green-800 border border-green-200',
      info: 'bg-blue-50 text-blue-800 border border-blue-200',
    }

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export default Badge

