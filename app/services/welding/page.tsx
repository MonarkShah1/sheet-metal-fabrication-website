import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Welding Services | [Your Company Name]',
  description: 'In-depth details about our welding services.',
}

export default function WeldingPage() {
  return (
    <>
      <Navigation />
      <main>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold">Welding Services</h1>
          <p className="mt-4 text-lg">
            This is the dedicated page for our Welding services. More content coming soon.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
} 