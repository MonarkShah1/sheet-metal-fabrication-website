import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Industries } from '@/components/Industries'
import { Evidence } from '@/components/Evidence'
import { CapabilitiesGrid } from '@/components/CapabilitiesGrid'
import { EquipmentGallery } from '@/components/EquipmentGallery'
import { TestimonialCarousel } from '@/components/TestimonialCarousel'
import { FooterCTA } from '@/components/FooterCTA'

export default function Home() {
  return (
    <>
      <Hero />
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