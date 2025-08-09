'use client'

import Image from 'next/image'

interface Photo {
  id: string
  src: string
  alt: string
  caption?: string
  featured?: boolean
}

interface PhotoShowcaseProps {
  photos?: Photo[]
  title?: string
  subtitle?: string
}

const defaultPhotos: Photo[] = [
  {
    id: '1',
    src: '/images/showcase/precision-cutting.jpg',
    alt: 'Laser cutting steel plate with precision measurements and clean edges',
    caption: 'Precision Laser Cutting',
    featured: true
  },
  {
    id: '2', 
    src: '/images/showcase/welding-fabrication.jpg',
    alt: 'Professional welder creating structural steel joints with safety equipment',
    caption: 'Expert Welding'
  },
  {
    id: '3',
    src: '/images/showcase/cnc-machining.jpg', 
    alt: 'CNC machine cutting complex metal parts with high accuracy',
    caption: 'CNC Machining'
  },
  {
    id: '4',
    src: '/images/showcase/finished-products.jpg',
    alt: 'Gallery of completed custom metal fabrication projects and components',
    caption: 'Quality Results'
  }
]

export function PhotoShowcase({
  photos = defaultPhotos,
  title = "Our Craftsmanship",
  subtitle = "See the precision and quality that goes into every project"
}: PhotoShowcaseProps) {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            {title}
          </h2>
          <p className="text-lg text-industrial-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <div 
              key={photo.id}
              className={`relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
                photo.featured ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`relative ${photo.featured ? 'aspect-square' : 'aspect-[4/3]'}`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes={photo.featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                  priority={index === 0}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Caption */}
                {photo.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-lg">{photo.caption}</h3>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}