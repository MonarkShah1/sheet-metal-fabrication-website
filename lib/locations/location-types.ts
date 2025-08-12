export interface LocationCoordinates {
  lat: number;
  lng: number;
}

export interface LocationProject {
  id: string;
  title: string;
  description: string;
  industry: string;
  imageUrl?: string;
  completedDate: string;
}

export interface LocationFAQ {
  id: string;
  question: string;
  answer: string;
}

export interface LocationContent {
  intro: string;
  whyChooseUs: string;
  industriesServed: string;
  localProjects: LocationProject[];
}

export interface LocationData {
  slug: string;
  city: string;
  province: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  coordinates: LocationCoordinates;
  distanceFromFacility: number; // in km
  travelTime: string; // e.g., "25 minutes"
  localIndustries: string[];
  content: LocationContent;
  faqs: LocationFAQ[];
  nearbyAreas: string[];
  tier: 1 | 2 | 3; // Priority tier from PRD
  keyIndustryFocus: string[]; // Main industries for this location
}

export interface LocationPageProps {
  params: {
    location: string;
  };
}

export interface LocationSEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  schemaData: LocationSchemaData;
}

export interface LocationSchemaData {
  "@type": "LocalBusiness";
  name: string;
  areaServed: {
    "@type": "City";
    name: string;
  };
  priceRange: string;
  serviceArea: {
    "@type": "GeoCircle";
    geoMidpoint: {
      "@type": "GeoCoordinates";
      latitude: number;
      longitude: number;
    };
    geoRadius: string;
  };
  address?: {
    "@type": "PostalAddress";
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
}