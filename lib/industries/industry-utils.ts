import { IndustryData } from './industry-data';
import { businessInfo } from '@/config/business-info';

export interface IndustrySEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  schemaData: IndustrySchemaData;
}

export interface IndustrySchemaData {
  "@type": "Service";
  name: string;
  description: string;
  provider: {
    "@type": "LocalBusiness";
    name: string;
    url: string;
  };
  areaServed: {
    "@type": "State";
    name: string;
  };
  serviceType: string;
  category: string;
  additionalType?: string;
}

export function getIndustryBySlug(slug: string, industriesList: IndustryData[]): IndustryData | null {
  return industriesList.find(ind => ind.slug === slug) || null;
}

export function generateIndustrySEO(industry: IndustryData): IndustrySEOData {
  const canonicalUrl = `${businessInfo.url}/industries/${industry.slug}`;
  
  const schemaData: IndustrySchemaData = {
    "@type": "Service",
    name: `${industry.name} Metal Fabrication Services`,
    description: industry.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: businessInfo.name,
      url: businessInfo.url
    },
    areaServed: {
      "@type": "State", 
      name: "Ontario"
    },
    serviceType: "Metal Fabrication",
    category: `${industry.name} Manufacturing`,
    additionalType: "https://schema.org/Service"
  };

  const enhancedKeywords = [
    ...industry.keywords,
    `${industry.name.toLowerCase()} metal parts`,
    `${industry.name.toLowerCase()} fabrication services`,
    `custom ${industry.name.toLowerCase()} components`,
    `${industry.name.toLowerCase()} manufacturing ontario`,
    `precision ${industry.name.toLowerCase()} parts`
  ];

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    keywords: enhancedKeywords,
    canonicalUrl,
    schemaData
  };
}

export function getAllIndustrySlugs(industries: IndustryData[]): string[] {
  return industries.map(industry => industry.slug);
}

export function sortIndustriesByName(industries: IndustryData[]): IndustryData[] {
  return [...industries].sort((a, b) => a.name.localeCompare(b.name));
}

export function getRelatedIndustries(
  currentIndustry: IndustryData, 
  allIndustries: IndustryData[], 
  limit: number = 3
): IndustryData[] {
  // Find industries with overlapping services or similar materials
  const related = allIndustries
    .filter(industry => industry.slug !== currentIndustry.slug)
    .filter(industry => {
      // Check for overlapping services
      const hasOverlappingServices = currentIndustry.relatedServices.some(service =>
        industry.relatedServices.includes(service)
      );
      
      // Check for similar materials
      const hasOverlappingMaterials = currentIndustry.content.materials.some(material =>
        industry.content.materials.includes(material)
      );
      
      return hasOverlappingServices || hasOverlappingMaterials;
    })
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, limit);
    
  return related;
}

export interface ServiceLocationData {
  service: string;
  location: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  keywords: string[];
  targetVolume: number;
  content: {
    intro: string;
    process: string;
    industries: string[];
    advantages: string[];
  };
}

export function getServiceLocationBySlug(
  serviceSlug: string, 
  locationSlug: string, 
  combinations: ServiceLocationData[]
): ServiceLocationData | null {
  return combinations.find(combo => 
    combo.service === serviceSlug && combo.location === locationSlug
  ) || null;
}

export function generateServiceLocationSEO(
  serviceLocation: ServiceLocationData
): IndustrySEOData {
  const canonicalUrl = `${businessInfo.url}/services/${serviceLocation.service}-${serviceLocation.location}`;
  
  const schemaData: IndustrySchemaData = {
    "@type": "Service",
    name: `${serviceLocation.service.replace('-', ' ')} Services in ${serviceLocation.location}`,
    description: serviceLocation.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: businessInfo.name,
      url: businessInfo.url
    },
    areaServed: {
      "@type": "State",
      name: serviceLocation.location === 'ontario' ? 'Ontario' : serviceLocation.location
    },
    serviceType: "Metal Fabrication",
    category: serviceLocation.service.replace('-', ' '),
    additionalType: "https://schema.org/Service"
  };

  return {
    title: serviceLocation.metaTitle,
    description: serviceLocation.metaDescription,
    keywords: serviceLocation.keywords,
    canonicalUrl,
    schemaData
  };
}