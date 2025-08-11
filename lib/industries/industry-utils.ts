import { Industry } from './industry-types';
import { industries } from './industry-data';
import { businessInfo } from '@/config/business-info';

export function getIndustryBySlug(slug: string, industriesList: Industry[] = industries): Industry | undefined {
  return industriesList.find(ind => ind.slug === slug);
}

export function generateIndustrySEO(industry: Industry) {
  const title = `${industry.title} Services in Ontario | Canadian Metal Fabricators`;
  const description = `Professional ${industry.title.toLowerCase()} solutions. ${industry.description}`;
  const canonicalUrl = `${businessInfo.url}/industries/${industry.slug}`;
  const keywords = industry.keywords;

  const schemaData = {
    "@type": "Service",
    "serviceType": industry.title,
    "provider": {
      "@type": "Organization",
      "name": "Canadian Metal Fabricators Ltd."
    },
    "areaServed": "Ontario",
    "description": description
    // Add more schema as per PRD
  };

  return { title, description, keywords, canonicalUrl, schemaData };
}

export function getAllIndustrySlugs(industries: Industry[]): string[] {
  return industries.map(industry => industry.slug);
}

export function getIndustriesByCompetition(
  industries: Industry[], 
  level: 'Low' | 'Medium' | 'High'
): Industry[] {
  return industries.filter(industry => industry.competitionLevel === level);
}

export function sortIndustriesByVolume(industries: Industry[]): Industry[] {
  return [...industries].sort((a, b) => b.monthlySearchVolume - a.monthlySearchVolume);
}

export function getRelatedIndustries(
  currentIndustry: Industry, 
  allIndustries: Industry[], 
  limit: number = 3
): Industry[] {
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
    .sort((a, b) => b.monthlySearchVolume - a.monthlySearchVolume)
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