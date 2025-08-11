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

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const location = getLocationBySlug(params.location, locations);
  
  if (!location) {
    return {
      title: 'Location Not Found',
      description: 'The requested location page could not be found.'
    };
  }

  const seoData = generateLocationSEO(location);

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
    <div className="min-h-screen">
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
  );
}