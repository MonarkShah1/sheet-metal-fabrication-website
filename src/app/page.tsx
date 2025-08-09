import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Industries } from '@/components/Industries'
import { Evidence } from '@/components/Evidence'
import { CapabilitiesGrid } from '@/components/CapabilitiesGrid'
import { EquipmentGallery } from '@/components/EquipmentGallery'
import { TestimonialCarousel } from '@/components/TestimonialCarousel'
import { FooterCTA } from '@/components/FooterCTA'
import { PhotoShowcase } from '@/components/ui/PhotoShowcase'

export default function Home() {
  return (
    <>
      <Hero />
      <PhotoShowcase />
      <Evidence />
      <CapabilitiesGrid />
      <EquipmentGallery />
      <Services />
      <TestimonialCarousel />
      <Industries />
      <FooterCTA />
    </>
  )
}