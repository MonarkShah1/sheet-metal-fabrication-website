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

const SERVICE = 'custom-metal-work';
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
        url: `/images/services/custom-metal-work-ontario-hero.jpg`,
        width: 1200,
        height: 630,
        alt: 'Custom Metal Work Services in Ontario'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: seoData.title,
      description: seoData.description,
    }
  };
}

export default function CustomMetalWorkOntarioPage() {
  const serviceLocation = getServiceLocationBySlug(SERVICE, LOCATION, serviceLocationCombinations);

  if (!serviceLocation) {
    return <div>Service not found</div>;
  }

  const seoData = generateServiceLocationSEO(serviceLocation);

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Custom Metal Work Ontario' }
  ];

  return (
    <>
      <div className="min-h-screen">
        <div className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>
      <ServiceLocationHero serviceLocation={serviceLocation} />
      <ServiceLocationProcess serviceLocation={serviceLocation} />
      <ServiceLocationIndustries serviceLocation={serviceLocation} />
      <ServiceLocationAdvantages serviceLocation={serviceLocation} />

      {/* Quote Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get Your Free Custom Metal Work Quote Today
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Ready to discuss your custom metal fabrication needs in Ontario? 
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