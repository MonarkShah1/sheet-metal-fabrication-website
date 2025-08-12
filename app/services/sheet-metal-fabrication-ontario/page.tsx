import { Metadata } from 'next';
import { serviceLocationCombinations } from '@/lib/industries/industry-data';
import { 
  getServiceLocationBySlug, 
  generateServiceLocationSEO 
} from '@/lib/industries/industry-utils';
import { ServiceLocationHero } from '@/components/services/ServiceLocationHero';
import { ServiceLocationProcess } from '@/components/services/ServiceLocationProcess';
import { ServiceLocationIndustries } from '@/components/services/ServiceLocationIndustries';
import { ServiceLocationAdvantages } from '@/components/services/ServiceLocationAdvantages';
import { Analytics } from '@/components/Analytics';
import { Breadcrumbs } from '@/components/Breadcrumbs';

const SERVICE = 'sheet-metal-fabrication';
const LOCATION = 'ontario';

export async function generateMetadata(): Promise<Metadata> {
  const serviceLocation = getServiceLocationBySlug(SERVICE, LOCATION, serviceLocationCombinations);
  
  if (!serviceLocation) {
    return {
      title: 'Service Not Found',
      description: 'The requested service page could not be found.'
    };
  }

  const seoData = generateServiceLocationSEO(serviceLocation);

  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords.join(', '),
    alternates: {
      canonical: seoData.canonicalUrl,
    },
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      url: seoData.canonicalUrl,
      siteName: 'Canadian Metal Fabricators Ltd.',
      type: 'website',
      images: [{
        url: `/images/services/sheet-metal-fabrication-ontario-hero.jpg`,
        width: 1200,
        height: 630,
        alt: 'Sheet Metal Fabrication Services in Ontario'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: seoData.title,
      description: seoData.description,
    }
  };
}

export default function SheetMetalFabricationOntarioPage() {
  const serviceLocation = getServiceLocationBySlug(SERVICE, LOCATION, serviceLocationCombinations);

  if (!serviceLocation) {
    return <div>Service not found</div>;
  }

  const seoData = generateServiceLocationSEO(serviceLocation);

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Sheet Metal Fabrication Ontario' }
  ];

  return (
    <>
      <div className="min-h-screen">
        {/* Breadcrumbs */}
        <div className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>
      {/* Hero Section */}
      <ServiceLocationHero serviceLocation={serviceLocation} />

      {/* Service Process & Capabilities */}
      <ServiceLocationProcess serviceLocation={serviceLocation} />

      {/* Industries Served */}
      <ServiceLocationIndustries serviceLocation={serviceLocation} />

      {/* Advantages */}
      <ServiceLocationAdvantages serviceLocation={serviceLocation} />

      {/* Quote Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get Your Free Sheet Metal Fabrication Quote Today
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Ready to discuss your sheet metal fabrication needs in Ontario? 
            Our expert team provides fast, accurate quotes and professional consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Free Quote
            </a>
            <a
              href="tel:647-407-0171"
              className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Call 647-407-0171
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Common Sheet Metal Fabrication Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What are your typical lead times for sheet metal fabrication in Ontario?
              </h3>
              <p className="text-gray-700">
                Standard projects: 1-2 weeks, Complex fabrications: 3-4 weeks, Rush orders available with 24-48 hour expedited service for urgent needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Do you provide delivery throughout Ontario?
              </h3>
              <p className="text-gray-700">
                Yes, we provide comprehensive delivery service throughout Ontario with our established logistics network. Same-day delivery available for urgent orders in the GTA.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What materials can you work with?
              </h3>
              <p className="text-gray-700">
                We work with carbon steel, stainless steel (304/316), aluminum, galvanized steel, and specialty alloys. All materials come with full traceability documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seoData.schemaData)
        }}
      />

      <Analytics />
      </div>
    </>
  );
}