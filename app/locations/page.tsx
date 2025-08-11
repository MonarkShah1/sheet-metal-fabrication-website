import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { locations } from '@/lib/locations/location-data';
import { getLocationsByTier, sortLocationsByDistance } from '@/lib/locations/location-utils';
import { businessInfo } from '@/config/business-info';

export const metadata: Metadata = {
  title: 'Service Locations | Sheet Metal Fabrication Across the GTA | Canadian Metal Fabricators',
  description: 'Professional sheet metal fabrication services across 15+ GTA locations. Serving Toronto, Mississauga, Brampton, Hamilton, and more. ISO 9001 certified fabrication.',
  keywords: 'sheet metal fabrication GTA, metal fabrication Toronto area, custom metal manufacturing Ontario, laser cutting services GTA',
  alternates: {
    canonical: `${businessInfo.url}/locations`
  }
};

export default function LocationsPage() {
  const tier1Locations = getLocationsByTier(locations, 1);
  const tier2Locations = getLocationsByTier(locations, 2);
  const tier3Locations = getLocationsByTier(locations, 3);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-industry-gradient text-white py-20 px-6 md:py-32 md:px-12">
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/20 border border-industry-blue/40 mb-6">
            <span className="text-industry-blue mr-2">🗺️</span>
            <span className="text-sm font-medium">Greater Toronto Area Coverage</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Sheet Metal Fabrication Services Across the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> GTA</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
            Professional sheet metal fabrication services delivered to 15+ key locations across the Greater Toronto Area. 
            From our Mississauga facility, we serve manufacturers, OEMs, and businesses with precision metalworking solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quote" 
              className="inline-flex items-center px-8 py-4 bg-industry-orange text-white font-semibold rounded-lg hover:bg-industry-orange-dark transition-colors"
            >
              Get Quote for Your Area
              <span className="ml-2">→</span>
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 border border-white text-white hover:bg-white hover:text-industry-dark transition-colors rounded-lg"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area Overview */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Coverage
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategically positioned to serve the entire GTA with fast response times, 
              local expertise, and comprehensive sheet metal fabrication services.
            </p>
          </div>

          {/* Primary Markets - Tier 1 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Primary Industrial Hubs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tier1Locations.map((location) => (
                <Link 
                  key={location.slug} 
                  href={`/locations/${location.slug}` as any}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200 hover:border-industry-blue/30 group"
                >
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-industry-blue transition-colors">
                      {location.city}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {location.travelTime} from facility
                    </p>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-700">
                      <strong>Key Industries:</strong> {location.keyIndustryFocus.slice(0, 3).join(', ')}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Distance:</strong> {location.distanceFromFacility}km
                    </p>
                  </div>
                  
                  <div className="text-industry-blue font-medium text-sm group-hover:text-industry-blue-dark">
                    Learn More →
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Secondary Markets - Tier 2 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Secondary Markets
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tier2Locations.map((location) => (
                <Link 
                  key={location.slug} 
                  href={`/locations/${location.slug}` as any}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200 hover:border-industry-blue/30 group"
                >
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-industry-blue transition-colors">
                      {location.city}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {location.travelTime} from facility
                    </p>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-700">
                      <strong>Key Industries:</strong> {location.keyIndustryFocus.slice(0, 2).join(', ')}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Distance:</strong> {location.distanceFromFacility}km
                    </p>
                  </div>
                  
                  <div className="text-industry-blue font-medium text-sm group-hover:text-industry-blue-dark">
                    Learn More →
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Emerging Markets - Tier 3 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Emerging Markets
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tier3Locations.map((location) => (
                <Link 
                  key={location.slug} 
                  href={`/locations/${location.slug}` as any}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200 hover:border-industry-blue/30 group"
                >
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-industry-blue transition-colors">
                      {location.city}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {location.travelTime} from facility
                    </p>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-700">
                      <strong>Key Industries:</strong> {location.keyIndustryFocus.slice(0, 2).join(', ')}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Distance:</strong> {location.distanceFromFacility}km
                    </p>
                  </div>
                  
                  <div className="text-industry-blue font-medium text-sm group-hover:text-industry-blue-dark">
                    Learn More →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-industry-dark text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us today for a free consultation and quote for your sheet metal fabrication needs, 
            no matter where you&apos;re located in the GTA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quote" 
              className="inline-flex items-center px-8 py-4 bg-industry-orange text-white font-semibold rounded-lg hover:bg-industry-orange-dark transition-colors"
            >
              Request Quote
              <span className="ml-2">→</span>
            </Link>
            <Link 
              href={`tel:${businessInfo.telephone}`}
              className="inline-flex items-center px-8 py-4 border border-white text-white hover:bg-white hover:text-industry-dark transition-colors rounded-lg"
            >
              Call {businessInfo.telephone}
            </Link>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}