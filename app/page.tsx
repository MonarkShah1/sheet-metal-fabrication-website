import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import { Hero } from '@/hero'
import { ServicesGrid } from '@/ServicesGrid'
import { QuoteCTA } from '@/QuoteCTA'
import { EducationalSection } from '@/components/EducationalSection'
import { ResourcesSection } from '@/components/ResourcesSection'

export default function HomePage() {
  return (
    <>
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