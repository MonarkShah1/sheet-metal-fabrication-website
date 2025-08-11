import Link from 'next/link';
import { LocationData } from '@/lib/locations/location-types';
import { businessInfo } from '@/config/business-info';

interface LocationHeroProps {
  location: LocationData;
}

export function LocationHero({ location }: LocationHeroProps) {
  return (
    <section className="relative bg-industry-gradient text-white py-20 px-6 md:py-32 md:px-12 overflow-hidden">
      <div className="relative max-w-7xl mx-auto text-center animate-fade-in">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/20 border border-industry-blue/40 mb-6">
          <span className="text-industry-blue mr-2">📍</span>
          <span className="text-sm font-medium">
            {location.travelTime} from our facility
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {location.h1}
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
          {location.content.intro}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link 
            href="/quote" 
            className="inline-flex items-center px-8 py-4 bg-industry-orange text-white font-semibold rounded-lg hover:bg-industry-orange-dark transition-colors"
          >
            Get Free Quote for {location.city}
            <span className="ml-2">→</span>
          </Link>
          <Link 
            href={`tel:${businessInfo.telephone}`}
            className="inline-flex items-center px-8 py-4 border border-white text-white hover:bg-white hover:text-industry-dark transition-colors rounded-lg"
          >
            Call {businessInfo.telephone}
          </Link>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-industry-orange">
              {location.distanceFromFacility}km
            </div>
            <div className="text-sm text-gray-300">Distance</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-industry-orange">
              {location.travelTime}
            </div>
            <div className="text-sm text-gray-300">Travel Time</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-industry-orange">
              Same Day
            </div>
            <div className="text-sm text-gray-300">Quote Response</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-industry-orange">
              ISO 9001
            </div>
            <div className="text-sm text-gray-300">Certified Quality</div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 opacity-10">
        <div className="w-32 h-32 border-4 border-industry-orange rounded-full"></div>
      </div>
      <div className="absolute bottom-8 right-8 opacity-10">
        <div className="w-24 h-24 bg-industry-blue rounded-lg transform rotate-45"></div>
      </div>
    </section>
  );
}