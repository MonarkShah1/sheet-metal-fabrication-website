import { MetadataRoute } from 'next'
import { businessInfo } from '@/config/business-info'
import { locations } from '@/lib/locations/location-data'
import { industries } from '@/lib/industries/industry-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = businessInfo.url
  const currentDate = new Date().toISOString()
  
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0, // Highest priority for homepage
    },
    {
      url: `${baseUrl}/quote`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9, // High priority for conversion page
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const, // Updated for SEO optimization
      priority: 0.9, // High priority for main services page
    },
    {
      url: `${baseUrl}/services/engineering`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8, // Service subpages
    },
    {
      url: `${baseUrl}/services/smart-sourcing`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/laser-cutting-bending`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/welding`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/finishing`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // Hub pages for local SEO
    {
      url: `${baseUrl}/locations`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8, // Important for local SEO
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8, // Important for industry SEO
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6, // Lower priority for blog
    },
  ]

  // Add all location pages
  const locationRoutes = locations.map(location => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: location.tier === 1 ? 0.7 : location.tier === 2 ? 0.6 : 0.5,
  }))

  // Add all industry pages with optimized priorities
  const industryRoutes = industries.map(industry => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7, // Standard industry priority
  }))

  // Add service-location combination pages
  const serviceLocationRoutes = [
    {
      url: `${baseUrl}/services/sheet-metal-fabrication-ontario`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/steel-fabrication-ontario`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/custom-metal-work-ontario`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Add campaign quote pages with high priority for conversions
  const campaignQuoteRoutes = [
    {
      url: `${baseUrl}/quote/ontario-metal-fabrication`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const, // Marketing campaigns change frequently
      priority: 0.9, // High priority for conversion-focused pages
    },
  ]

  return [...routes, ...locationRoutes, ...industryRoutes, ...serviceLocationRoutes, ...campaignQuoteRoutes]
}