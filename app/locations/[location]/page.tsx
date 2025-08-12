import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locations } from '@/lib/locations/location-data';
import { getLocationBySlug, generateLocationSEO } from '@/lib/locations/location-utils';
import { LocationPageProps } from '@/lib/locations/location-types';
import { LocationHero } from '@/components/locations/LocationHero';
import { LocalServiceOverview } from '@/components/locations/LocalServiceOverview';
import { ServiceAreaMap } from '@/components/locations/ServiceAreaMap';
import { NearbyProjects } from '@/components/locations/NearbyProjects';
import { WhyChooseUsLocal } from '@/components/locations/WhyChooseUsLocal';
import { LocalIndustries } from '@/components/locations/LocalIndustries';
import { LocalFAQ } from '@/components/locations/LocalFAQ';
import { LocalContact } from '@/components/locations/LocalContact';
import { StructuredDataScript } from '@/components/StructuredDataScript';
import { generateLocalBusinessSchema } from '@/lib/structured-data';
import { generateComprehensiveLocationMetadata } from '@/config/location-metadata';
import { generateFAQSchema } from '@/config/schema-generators';
import { SmartBreadcrumbSchema, BreadcrumbTemplates } from '@/components/BreadcrumbSchema';

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const location = getLocationBySlug(params.location, locations);
  
  if (!location) {
    return {
      title: 'Location Not Found | Canadian Metal Fabricators',
      description: 'The requested location page could not be found. Visit our main locations page to find sheet metal fabrication services near you.',
      robots: { index: false, follow: true }
    };
  }

  // Use our enhanced metadata generator
  return generateComprehensiveLocationMetadata(location);
}

export async function generateStaticParams() {
  return locations.map((location) => ({
    location: location.slug,
  }));
}

export default function LocationPage({ params }: LocationPageProps) {
  const location = getLocationBySlug(params.location, locations);

  if (!location) {
    notFound();
  }

  return (
    <>
      <StructuredDataScript data={generateLocalBusinessSchema(location)} />
      <SmartBreadcrumbSchema 
        customBreadcrumbs={BreadcrumbTemplates.location(location.city, location.slug)} 
      />
      {/* FAQ Schema */}
      {location.faqs && location.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema(
              location.faqs.map(faq => ({
                question: faq.question,
                answer: faq.answer
              }))
            ))
          }}
        />
      )}
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <LocationHero location={location} />

        {/* Local Service Overview */}
        <LocalServiceOverview location={location} />

        {/* Service Area Map */}
        <ServiceAreaMap location={location} />

        {/* Local Projects/Case Studies */}
        <NearbyProjects location={location} />

        {/* Why Choose Us for [City] */}
        <WhyChooseUsLocal location={location} />

        {/* Local Industries Served */}
        <LocalIndustries location={location} />

        {/* Local FAQ */}
        <LocalFAQ location={location} />

        {/* Contact Section */}
        <LocalContact location={location} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocationSEO(location).schemaData)
          }}
        />
      </div>
    </>
  );
}