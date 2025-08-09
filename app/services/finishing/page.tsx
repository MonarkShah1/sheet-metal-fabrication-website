import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Finishing Services | [Your Company Name]',
  description: 'In-depth details about our finishing services.',
}

export default function FinishingPage() {
  return (
    <>
      <Navigation />
      <main>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold">Finishing Services</h1>
          <p className="mt-4 text-lg">
            This is the dedicated page for our Finishing services. More content coming soon.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
} 