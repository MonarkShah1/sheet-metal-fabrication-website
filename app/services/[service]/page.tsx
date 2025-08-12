import { Metadata } from 'next'
import { generateServiceMetadata } from '@/config/seo-metadata'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/config/schema-generators'
import { businessInfo } from '@/config/business-info'

// Enhanced metadata generation using our comprehensive SEO system
export async function generateMetadata({ params }: { params: { service: string } }): Promise<Metadata> {
  return generateServiceMetadata(params.service)
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const serviceName = params.service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  // Generate service schema data
  const serviceSchemaData = {
    name: serviceName,
    description: `Professional ${serviceName} services in Ontario. ISO 9001 certified quality and AWS welding standards.`,
    url: `${businessInfo.url}/services/${params.service}/`,
    category: 'Metal Fabrication',
    areaServed: businessInfo.areaServed
  }

  return (
    <>
      <StructuredData 
        type="Service" 
        customData={generateServiceSchema(serviceSchemaData)} 
      />
      <div>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold">{serviceName}</h1>
          <p className="mt-4 text-lg">
            This is a dynamically generated page for our {serviceName} service. 
            More content coming soon.
          </p>
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Enhanced SEO Implementation</h2>
            <p>This page now includes:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Comprehensive metadata with optimized titles and descriptions</li>
              <li>Enhanced Open Graph and Twitter card tags</li>
              <li>Service-specific structured data (JSON-LD)</li>
              <li>Proper canonical URLs and geo-tagging</li>
              <li>Industry and location-specific keywords</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
} 