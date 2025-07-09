import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Industries } from '@/components/Industries'
import { Evidence } from '@/components/Evidence'
import { CTA } from '@/components/CTA'
import { CapabilitiesGrid } from '@/components/CapabilitiesGrid'

export default function Home() {
  return (
    <>
      <Hero />
      <Evidence />
      <CapabilitiesGrid />
      <Services />
      <Industries />
      <CTA />
    </>
  )
}