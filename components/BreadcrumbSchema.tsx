import { generateBreadcrumbSchema } from '@/config/schema-generators'
import { businessInfo } from '@/config/business-info'

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
  includeHome?: boolean
}

/**
 * BreadcrumbSchema component for enhanced navigation structure data
 * Automatically includes Home unless explicitly disabled
 */
export function BreadcrumbSchema({ items, includeHome = true }: BreadcrumbSchemaProps) {
  const breadcrumbs: BreadcrumbItem[] = []
  
  // Always include Home as the first breadcrumb
  if (includeHome) {
    breadcrumbs.push({
      name: 'Home',
      url: businessInfo.url
    })
  }
  
  // Add provided items with full URLs
  items.forEach(item => {
    breadcrumbs.push({
      name: item.name,
      url: item.url.startsWith('http') ? item.url : `${businessInfo.url}${item.url}`
    })
  })

  const schemaData = generateBreadcrumbSchema(breadcrumbs)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}

/**
 * Pre-built breadcrumb configurations for common page types
 */
export const BreadcrumbTemplates = {
  // Services breadcrumbs
  service: (serviceName: string, serviceSlug: string): BreadcrumbItem[] => [
    { name: 'Services', url: '/services/' },
    { name: serviceName, url: `/services/${serviceSlug}/` }
  ],
  
  // Location breadcrumbs
  location: (cityName: string, locationSlug: string): BreadcrumbItem[] => [
    { name: 'Locations', url: '/locations/' },
    { name: cityName, url: `/locations/${locationSlug}/` }
  ],
  
  // Service + Location breadcrumbs
  serviceLocation: (
    serviceName: string, 
    serviceSlug: string, 
    cityName: string, 
    locationSlug: string
  ): BreadcrumbItem[] => [
    { name: 'Services', url: '/services/' },
    { name: serviceName, url: `/services/${serviceSlug}/` },
    { name: cityName, url: `/services/${serviceSlug}/${locationSlug}/` }
  ],
  
  // Industry breadcrumbs
  industry: (industryName: string, industrySlug: string): BreadcrumbItem[] => [
    { name: 'Industries', url: '/industries/' },
    { name: industryName, url: `/industries/${industrySlug}/` }
  ],
  
  // Blog breadcrumbs
  blogPost: (postTitle: string, postSlug: string): BreadcrumbItem[] => [
    { name: 'Blog', url: '/blog/' },
    { name: postTitle, url: `/blog/${postSlug}/` }
  ],
  
  // Blog category breadcrumbs
  blogCategory: (
    categoryName: string, 
    categorySlug: string, 
    postTitle?: string, 
    postSlug?: string
  ): BreadcrumbItem[] => {
    const breadcrumbs = [
      { name: 'Blog', url: '/blog/' },
      { name: categoryName, url: `/blog/category/${categorySlug}/` }
    ]
    
    if (postTitle && postSlug) {
      breadcrumbs.push({ name: postTitle, url: `/blog/${postSlug}/` })
    }
    
    return breadcrumbs
  },
  
  // Quote process breadcrumbs
  quote: (step?: string): BreadcrumbItem[] => {
    const breadcrumbs = [{ name: 'Request Quote', url: '/quote/' }]
    
    if (step) {
      breadcrumbs.push({ 
        name: step.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()), 
        url: `/quote/${step}/` 
      })
    }
    
    return breadcrumbs
  },
  
  // About section breadcrumbs
  about: (section?: string): BreadcrumbItem[] => {
    const breadcrumbs = [{ name: 'About', url: '/about/' }]
    
    if (section) {
      breadcrumbs.push({
        name: section.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        url: `/about/${section}/`
      })
    }
    
    return breadcrumbs
  }
}

/**
 * Smart breadcrumb generator based on pathname
 */
export function generateBreadcrumbsFromPath(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(segment => segment.length > 0)
  const breadcrumbs: BreadcrumbItem[] = []
  
  let currentPath = ''
  
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`
    
    // Format segment name (replace hyphens with spaces, capitalize)
    const name = segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase())
    
    breadcrumbs.push({
      name,
      url: `${currentPath}/`
    })
  })
  
  return breadcrumbs
}

/**
 * Enhanced breadcrumb component with automatic path detection
 */
interface SmartBreadcrumbSchemaProps {
  pathname?: string
  customBreadcrumbs?: BreadcrumbItem[]
  includeHome?: boolean
}

export function SmartBreadcrumbSchema({ 
  pathname, 
  customBreadcrumbs, 
  includeHome = true 
}: SmartBreadcrumbSchemaProps) {
  let breadcrumbs: BreadcrumbItem[]
  
  if (customBreadcrumbs) {
    breadcrumbs = customBreadcrumbs
  } else if (pathname) {
    breadcrumbs = generateBreadcrumbsFromPath(pathname)
  } else if (typeof window !== 'undefined') {
    breadcrumbs = generateBreadcrumbsFromPath(window.location.pathname)
  } else {
    breadcrumbs = []
  }
  
  return <BreadcrumbSchema items={breadcrumbs} includeHome={includeHome} />
}

/**
 * Usage examples:
 * 
 * // Basic usage with custom breadcrumbs
 * <BreadcrumbSchema items={BreadcrumbTemplates.service("Laser Cutting", "laser-cutting")} />
 * 
 * // Service + Location page
 * <BreadcrumbSchema items={BreadcrumbTemplates.serviceLocation(
 *   "Laser Cutting", "laser-cutting", "Toronto", "toronto"
 * )} />
 * 
 * // Smart breadcrumbs from current path
 * <SmartBreadcrumbSchema />
 * 
 * // Smart breadcrumbs from specific path  
 * <SmartBreadcrumbSchema pathname="/services/welding/toronto/" />
 */