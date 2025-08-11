'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

interface InteractiveMapProps {
  center: { lat: number; lng: number };
  facility: { lat: number; lng: number };
  radiusMeters: number;
  locationName: string;
  travelTime: string;
  className?: string;
}

// Loading skeleton component
function MapSkeleton() {
  return (
    <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center animate-pulse">
      <div className="text-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full mb-4 mx-auto animate-pulse"></div>
        <div className="text-gray-500 text-sm">Loading interactive map...</div>
      </div>
    </div>
  );
}

// Map implementation component that only renders on client
function MapImplementation({
  center,
  facility,
  radiusMeters,
  locationName,
  travelTime,
}: InteractiveMapProps) {
  const [leafletLoaded, setLeafletLoaded] = useState(false);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    const initLeaflet = async () => {
      if (typeof window !== 'undefined') {
        const L = await import('leaflet');
        
        // Fix for default markers not showing
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });
        
        setLeafletLoaded(true);
      }
    };
    
    initLeaflet();
  }, []);

  if (!leafletLoaded) {
    return <MapSkeleton />;
  }

  // Dynamic import of react-leaflet components
  const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
  const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
  const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
  const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });
  const Circle = dynamic(() => import('react-leaflet').then(mod => mod.Circle), { ssr: false });

  return (
    <div className="w-full h-80 rounded-xl overflow-hidden border border-gray-200">
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={10}
        scrollWheelZoom={true}
        className="w-full h-full"
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Location marker */}
        <Marker position={[center.lat, center.lng]}>
          <Popup>
            <div className="text-center p-2">
              <h3 className="font-semibold text-gray-900">{locationName}</h3>
              <p className="text-sm text-gray-600">{travelTime} from our facility</p>
            </div>
          </Popup>
        </Marker>
        
        {/* Facility marker */}
        <Marker position={[facility.lat, facility.lng]}>
          <Popup>
            <div className="text-center p-2">
              <h3 className="font-semibold text-gray-900">Canadian Metal Fabricators</h3>
              <p className="text-sm text-gray-600">Main Facility - Mississauga</p>
            </div>
          </Popup>
        </Marker>
        
        {/* Service radius circle */}
        <Circle
          center={[facility.lat, facility.lng]}
          radius={radiusMeters}
          pathOptions={{
            color: '#3B82F6',
            fillColor: '#3B82F6',
            fillOpacity: 0.1,
            weight: 2,
          }}
        />
      </MapContainer>
      
      {/* Map legend */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg z-[1000]">
        <div className="space-y-2">
          <div className="flex items-center text-xs">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-gray-700">Service Area</span>
          </div>
          <div className="flex items-center text-xs">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <span className="text-gray-700">Locations</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InteractiveMap({
  center,
  facility,
  radiusMeters,
  locationName,
  travelTime,
  className = ''
}: InteractiveMapProps) {
  // Defensive check for missing coordinates
  if (!center || !center.lat || !center.lng || !facility || !facility.lat || !facility.lng) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('InteractiveMap: Missing coordinates for', locationName);
    }
    
    return (
      <div className={`${className}`}>
        <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-industry-orange rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
              <span className="text-2xl">📍</span>
            </div>
            <div className="text-lg font-semibold text-gray-800">
              {locationName}, ON
            </div>
            <div className="text-sm text-gray-600">
              {travelTime} from our facility
            </div>
            <div className="text-xs text-gray-500 mt-2">
              Map temporarily unavailable
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Don't render on server
  if (typeof window === 'undefined') {
    return <MapSkeleton />;
  }

  return (
    <div className={`relative ${className}`}>
      <MapImplementation
        center={center}
        facility={facility}
        radiusMeters={radiusMeters}
        locationName={locationName}
        travelTime={travelTime}
      />
    </div>
  );
}

// Default export for dynamic imports
export default InteractiveMap;