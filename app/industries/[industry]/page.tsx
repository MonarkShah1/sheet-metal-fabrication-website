import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { industries } from '@/lib/industries/industry-data';
import { getIndustryBySlug, generateIndustrySEO, getRelatedIndustries } from '@/lib/industries/industry-utils';
import { IndustryHero } from '@/components/industries/IndustryHero';
import { IndustryCaseStudies } from '@/components/industries/IndustryCaseStudies';
import { IndustryFAQ } from '@/components/industries/IndustryFAQ';
import { IndustryCapabilities } from '@/components/industries/IndustryCapabilities';
import { IndustryProcess } from '@/components/industries/IndustryProcess';
import { IndustryAdvantages } from '@/components/industries/IndustryAdvantages';
import { Analytics } from '@/components/Analytics';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { generateIndustryServiceSchema, generateCaseStudySchema } from '@/config/schema-generators';

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const industry = getIndustryBySlug(params.industry, industries);
  
  if (!industry) {
    return {
      title: 'Industry Not Found',
      description: 'The requested industry page could not be found.'
    };
  }

  const seoData = generateIndustrySEO(industry);

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
    },
    twitter: {
      card: 'summary_large_image',
      title: seoData.title,
      description: seoData.description,
    }
  };
}

export async function generateStaticParams() {
  return industries.map((industry) => ({
    industry: industry.slug,
  }));
}

interface IndustryPageProps {
  params: {
    industry: string;
  };
}

export default function IndustryPage({ params }: IndustryPageProps) {
  const industry = getIndustryBySlug(params.industry, industries);

  if (!industry) {
    notFound();
  }

  const relatedIndustries = getRelatedIndustries(industry, industries);
  const seoData = generateIndustrySEO(industry);

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Industries', url: '/industries' },
    { name: industry.name }
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
        <IndustryHero industry={industry} />

        {/* Industry Overview & Local Focus */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Ontario&apos;s {industry.name} Sector Chooses Canadian Metal Fabricators
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  {industry.content.intro}
                </p>
                <p className="text-lg text-gray-700">
                  {industry.content.localFocus}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our {industry.name} Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">ISO 9001:2015 Certified Quality Management</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">7+ Years Serving Ontario Manufacturers</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-orange-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">24-48 Hour Quick Quote Turnaround</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-purple-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">On-Time Delivery Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry-Specific Capabilities */}
        <IndustryCapabilities industry={industry} />

        {/* Process Steps */}
        <IndustryProcess industry={industry} />

        {/* Why Choose Us - Advantages */}
        <IndustryAdvantages industry={industry} />

        {/* Case Studies */}
        <IndustryCaseStudies industry={industry} />

        {/* FAQ Section */}
        <IndustryFAQ industry={industry} />

        {/* Related Industries */}
        {relatedIndustries.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Related Industries We Serve
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedIndustries.map((relatedIndustry) => (
                  <div key={relatedIndustry.slug} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {relatedIndustry.name}
                    </h3>
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {relatedIndustry.content.intro.slice(0, 150)}...
                    </p>
                    <a
                      href={`/industries/${relatedIndustry.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Learn More →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Get Your {industry.name} Metal Fabrication Quote
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Ready to discuss your {industry.name.toLowerCase()} fabrication needs? 
              Our Ontario team is standing by to provide expert consultation and competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/quote"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                End Your Supply Headaches
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

        {/* Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoData.schemaData)
          }}
        />
        
        {/* Industry Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateIndustryServiceSchema(industry))
          }}
        />
        
        {/* Case Studies Schema */}
        {industry.caseStudies.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'ItemList',
                name: `${industry.name} Case Studies`,
                itemListElement: industry.caseStudies.map((caseStudy, index) => ({
                  '@type': 'ListItem',
                  position: index + 1,
                  item: generateCaseStudySchema(caseStudy, industry)
                }))
              })
            }}
          />
        )}

        {/* Analytics */}
        <Analytics />
      </div>
    </>
  );
}