'use client';

import { LocationData } from '@/lib/locations/location-types';
import { businessInfo } from '@/config/business-info';

interface ServiceAreaMapProps {
  location: LocationData;
}

export function ServiceAreaMap({ location }: ServiceAreaMapProps) {
  // For now, we'll create a simple visual map representation
  // This can be enhanced with Google Maps integration later
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
          {/* Map Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-80 flex items-center justify-center relative overflow-hidden">
              <div className="text-center z-10">
                <div className="w-16 h-16 bg-industry-orange rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <span className="text-2xl">📍</span>
                </div>
                <div className="text-lg font-semibold text-gray-800">
                  {location.city}, ON
                </div>
                <div className="text-sm text-gray-600">
                  {location.travelTime} from our facility
                </div>
              </div>
              
              {/* Decorative circles representing service radius */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 border-2 border-industry-blue/20 rounded-full"></div>
                <div className="absolute w-48 h-48 border-2 border-industry-blue/10 rounded-full"></div>
                <div className="absolute w-64 h-64 border-2 border-industry-blue/5 rounded-full"></div>
              </div>
            </div>
            
            {/* Interactive Features Note */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">
                🗺️ Interactive map with travel times and landmarks coming soon
              </p>
            </div>
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