import { LocationData, LocationSEOData, LocationSchemaData } from './location-types';
import { businessInfo } from '@/config/business-info';

export function getLocationBySlug(slug: string, locations: LocationData[]): LocationData | null {
  return locations.find(location => location.slug === slug) || null;
}

export function generateLocationSEO(location: LocationData): LocationSEOData {
  const canonicalUrl = `${businessInfo.url}/locations/${location.slug}`;
  
  const schemaData: LocationSchemaData = {
    "@type": "LocalBusiness",
    name: `${businessInfo.name} - ${location.city} Service Area`,
    areaServed: {
      "@type": "City",
      name: location.city
    },
    priceRange: businessInfo.priceRange,
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: location.coordinates.lat,
        longitude: location.coordinates.lng
      },
      geoRadius: "50 km"
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressRegion: location.province,
      addressCountry: "CA"
    }
  };

  const keywords = [
    `sheet metal fabrication ${location.city.toLowerCase()}`,
    `metal fabrication services ${location.city.toLowerCase()}`,
    `custom metal manufacturing ${location.city.toLowerCase()}`,
    `laser cutting ${location.city.toLowerCase()}`,
    `welding services ${location.city.toLowerCase()}`,
    ...location.localIndustries.map(industry => 
      `${industry.toLowerCase()} metal fabrication ${location.city.toLowerCase()}`
    )
  ];

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords,
    canonicalUrl,
    schemaData
  };
}

export function calculateDistance(
  lat1: number, 
  lng1: number, 
  lat2: number, 
  lng2: number
): number {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = deg2rad(lat2 - lat1);
  const dLng = deg2rad(lng2 - lng1);
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c;
  return Math.round(distance * 10) / 10; // Round to 1 decimal place
}

function deg2rad(deg: number): number {
  return deg * (Math.PI/180);
}

export function generateTravelTime(distanceKm: number): string {
  // Estimate travel time based on distance
  // Assumes average city driving speed of ~40 km/h
  const timeHours = distanceKm / 40;
  const timeMinutes = Math.round(timeHours * 60);
  
  if (timeMinutes < 60) {
    return `${timeMinutes} minutes`;
  } else {
    const hours = Math.floor(timeMinutes / 60);
    const minutes = timeMinutes % 60;
    if (minutes === 0) {
      return `${hours} hour${hours > 1 ? 's' : ''}`;
    }
    return `${hours} hour${hours > 1 ? 's' : ''} ${minutes} minutes`;
  }
}

export function getAllLocationSlugs(locations: LocationData[]): string[] {
  return locations.map(location => location.slug);
}

export function getLocationsByTier(locations: LocationData[], tier: 1 | 2 | 3): LocationData[] {
  return locations.filter(location => location.tier === tier);
}

export function sortLocationsByDistance(locations: LocationData[]): LocationData[] {
  return [...locations].sort((a, b) => a.distanceFromFacility - b.distanceFromFacility);
}

export function formatPopulation(population: number): string {
  if (population >= 1000000) {
    return `${(population / 1000000).toFixed(1)}M`;
  } else if (population >= 1000) {
    return `${Math.round(population / 1000)}K`;
  }
  return population.toString();
}