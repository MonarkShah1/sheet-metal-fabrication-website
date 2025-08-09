import Link from 'next/link'
import { generateBreadcrumbSchema } from '@/lib/structured-data'
import { StructuredDataScript } from './StructuredDataScript'

interface BreadcrumbItem {
  name: string
  url?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const structuredData = generateBreadcrumbSchema(
    items.map(item => ({
      name: item.name,
      url: item.url || '#'
    }))
  )

  return (
    <>
      <StructuredDataScript data={structuredData} />
      <nav 
        aria-label="Breadcrumb" 
        className={`flex items-center space-x-2 text-sm ${className}`}
      >
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            {index > 0 && (
              <svg 
                className="w-4 h-4 mx-2 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            )}
            {item.url && index < items.length - 1 ? (
              <Link 
                href={item.url}
                className="text-industry-blue hover:text-industry-blue/80 transition-colors"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-industry-gray-700 font-medium">
                {item.name}
              </span>
            )}
          </div>
        ))}
      </nav>
    </>
  )
}