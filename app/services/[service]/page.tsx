import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import { Metadata } from 'next'

// This function can be expanded to generate metadata dynamically
// based on the service parameter.
export async function generateMetadata({ params }: { params: { service: string } }): Promise<Metadata> {
  const serviceName = params.service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: `${serviceName} | [Your Company Name]`,
    description: `Details about our ${serviceName} services.`,
  }
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const serviceName = params.service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <>
      <Navigation />
      <main>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold">{serviceName}</h1>
          <p className="mt-4 text-lg">
            This is a dynamically generated page for our {serviceName} service. 
            More content coming soon.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
} 