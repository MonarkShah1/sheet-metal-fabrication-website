import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import { Hero } from '@/hero'
import { ServicesGrid } from '@/ServicesGrid'
import { QuoteCTA } from '@/QuoteCTA'
import { EducationalSection } from '@/components/EducationalSection'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section with Industry 4.0 Theme */}
        <Hero />
        
        {/* Services Grid with Smart Manufacturing Capabilities */}
        <ServicesGrid />
        
        {/* Educational Section about Industry 4.0 Benefits */}
        <EducationalSection />
        
        {/* Quote CTA with AI-Powered Upload */}
        <QuoteCTA />
      </main>
      <Footer />
    </>
  )
}