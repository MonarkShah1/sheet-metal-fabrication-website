import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
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
      <Navigation />
      <main>
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
      </main>
      <Footer />
    </>
  )
}