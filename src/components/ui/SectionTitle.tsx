import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn(centered && 'text-center', 'mb-12 md:mb-16', className)}>
      <h2
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-bold mb-4',
          light ? 'text-white' : 'text-gray-900'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-lg md:text-xl max-w-3xl',
            centered && 'mx-auto',
            light ? 'text-gray-200' : 'text-gray-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

