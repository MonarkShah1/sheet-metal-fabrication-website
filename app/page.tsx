import { Hero } from '@/hero'
import { ServicesGrid } from '@/ServicesGrid'
import { QuoteCTA } from '@/QuoteCTA'
import { EducationalSection } from '@/components/EducationalSection'
import { ResourcesSection } from '@/components/ResourcesSection'
import { generateOrganizationSchema, generateWebSiteSchema, generateBreadcrumbSchema } from '@/lib/structured-data'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { Metadata } from 'next'
import { pageMetadata } from '@/config/seo-metadata'
import { businessInfo } from '@/config/business-info'

export const metadata: Metadata = {
  ...pageMetadata.home,
  alternates: {
    canonical: businessInfo.url,
  },
}

export default function HomePage() {
  const structuredData = [
    generateOrganizationSchema(),
    generateWebSiteSchema(),
    generateBreadcrumbSchema([
      { name: 'Home', url: businessInfo.url }
    ])
  ]

  return (
    <>
      <StructuredDataScript data={structuredData} />
      
      {/* Emergency Services Alert Banner */}
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm md:text-base">
            🚨 <strong>PRODUCTION LINE DOWN?</strong> Emergency fabrication available • 4-6 hour turnaround • 
            <a href="/emergency" className="underline hover:no-underline ml-2 font-semibold">
              Click for Emergency Service →
            </a>
          </p>
        </div>
      </div>
      
      {/* Hero Section with Brand-Aligned Messaging */}
      <Hero />
      
      {/* Services Grid with Proven Manufacturing Fundamentals */}
      <ServicesGrid />
      
      {/* Educational Section about Manufacturing Fundamentals */}
      <EducationalSection />
      
      {/* Quote CTA with Simplified Process */}
      <QuoteCTA />
      
      {/* Resources Section with Educational Content */}
      <ResourcesSection />
    </>
  )
}