'use client';

import dynamic from 'next/dynamic';
import { LocationData } from '@/lib/locations/location-types';
import { businessInfo } from '@/config/business-info';

// Dynamically import the InteractiveMap component
const InteractiveMap = dynamic(
  () => import('@/components/map/InteractiveMap').then(mod => mod.InteractiveMap),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center animate-pulse">
        <div className="text-center">
          <div className="w-12 h-12 bg-gray-300 rounded-full mb-4 mx-auto animate-pulse"></div>
          <div className="text-gray-500 text-sm">Loading interactive map...</div>
        </div>
      </div>
    )
  }
);

interface ServiceAreaMapProps {
  location: LocationData;
}

export function ServiceAreaMap({ location }: ServiceAreaMapProps) {
  // Calculate radius based on distance from facility, with minimum and tier-based defaults
  const calculateRadius = (distanceKm: number, tier: number): number => {
    const baseRadius = Math.max(15000, distanceKm * 1000); // Minimum 15km radius
    const tierMultiplier = tier === 1 ? 1.2 : tier === 2 ? 1.1 : 1.0; // Tier 1 gets larger radius
    return Math.round(baseRadius * tierMultiplier);
  };

  const radiusMeters = calculateRadius(location.distanceFromFacility, location.tier);

  // Facility coordinates (Mississauga)
  const facilityCoords = {
    lat: businessInfo.geo.latitude,
    lng: businessInfo.geo.longitude
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Service Coverage Area
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Strategically located to serve {location.city} and surrounding areas with 
            fast response times and reliable delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Map */}
          <div className="relative">
            <InteractiveMap
              center={location.coordinates}
              facility={facilityCoords}
              radiusMeters={radiusMeters}
              locationName={location.city}
              travelTime={location.travelTime}
            />
          </div>

          {/* Service Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Strategic Location Benefits
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-industry-blue/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-industry-blue">🚚</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Fast Delivery</div>
                    <div className="text-gray-600 text-sm">
                      {location.travelTime} delivery time to {location.city}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-industry-orange/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-industry-orange">⚡</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Quick Response</div>
                    <div className="text-gray-600 text-sm">
                      Same-day quotes for {location.city} businesses
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-industry-green/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-green-600">💰</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Cost Effective</div>
                    <div className="text-gray-600 text-sm">
                      Competitive pricing with reduced shipping costs
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coverage Areas */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Areas We Serve Near {location.city}
              </h4>
              <div className="flex flex-wrap gap-2">
                {location.nearbyAreas.map((area, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-industry-blue/5 to-industry-orange/5 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">Need a site visit?</div>
                  <div className="text-gray-600 text-sm">
                    Free consultations available in {location.city}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-industry-blue">
                    {businessInfo.telephone}
                  </div>
                  <div className="text-sm text-gray-600">Call now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}