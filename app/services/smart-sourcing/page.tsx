import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Smart Sourcing Services | [Your Company Name]',
  description: 'In-depth details about our smart sourcing services.',
}

export default function SmartSourcingPage() {
  return (
    <>
      <Navigation />
      <main>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold">Smart Sourcing Services</h1>
          <p className="mt-4 text-lg">
            This is the dedicated page for our Smart Sourcing services. More content coming soon.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
} 