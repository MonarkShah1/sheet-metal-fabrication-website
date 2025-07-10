'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Equipment {
  id: string
  title: string
  description: string
  image: string
  specs: {
    [key: string]: string
  }
  category: string
}

interface EquipmentGalleryProps {
  equipment?: Equipment[]
  title?: string
  subtitle?: string
}

const defaultEquipment: Equipment[] = [
  {
    id: '1',
    title: 'Laser Cutting Machine',
    description: 'High-precision fiber laser cutting system',
    image: '/images/equipment/laser-cutter.jpg',
    specs: {
      'Cutting Area': '3000mm x 1500mm',
      'Power': '6000W Fiber Laser',
      'Thickness': 'Up to 25mm Steel',
      'Precision': '±0.05mm'
    },
    category: 'cutting'
  },
  {
    id: '2',
    title: 'CNC Press Brake',
    description: 'Advanced hydraulic press brake for precision bending',
    image: '/images/equipment/press-brake.jpg',
    specs: {
      'Capacity': '200 Ton',
      'Length': '3200mm',
      'Back Gauge': 'CNC Controlled',
      'Accuracy': '±0.02mm'
    },
    category: 'forming'
  },
  {
    id: '3',
    title: 'Welding Station',
    description: 'Professional MIG/TIG welding capabilities',
    image: '/images/equipment/welding.jpg',
    specs: {
      'Process': 'MIG/TIG/Stick',
      'Material': 'Steel, Aluminum, Stainless',
      'Thickness': 'Up to 50mm',
      'Certification': 'AWS D1.1'
    },
    category: 'welding'
  },
  {
    id: '4',
    title: 'CNC Machining Center',
    description: '5-axis CNC machining for complex parts',
    image: '/images/equipment/cnc-machine.jpg',
    specs: {
      'Axes': '5-Axis Simultaneous',
      'Spindle': '15000 RPM',
      'Tool Changer': '40 Position ATC',
      'Accuracy': '±0.005mm'
    },
    category: 'machining'
  }
]

const SkeletonCard = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
    <div className="aspect-[4/3] bg-gray-300" />
    <div className="p-4">
      <div className="h-4 bg-gray-300 rounded mb-2" />
      <div className="h-3 bg-gray-300 rounded w-3/4" />
    </div>
  </div>
)

export function EquipmentGallery({
  equipment = defaultEquipment,
  title = "Our Manufacturing Equipment",
  subtitle = "State-of-the-art machinery for precision metal fabrication"
}: EquipmentGalleryProps) {
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null)
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const categories = ['all', ...Array.from(new Set(equipment.map(item => item.category)))]
  const filteredEquipment = filter === 'all' ? equipment : equipment.filter(item => item.category === filter)

  const openLightbox = (equipment: Equipment) => {
    setSelectedEquipment(equipment)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedEquipment(null)
    document.body.style.overflow = 'unset'
  }

  const navigateEquipment = (direction: 'prev' | 'next') => {
    if (!selectedEquipment) return
    
    const currentIndex = filteredEquipment.findIndex(item => item.id === selectedEquipment.id)
    let newIndex: number
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredEquipment.length - 1
    } else {
      newIndex = currentIndex < filteredEquipment.length - 1 ? currentIndex + 1 : 0
    }
    
    setSelectedEquipment(filteredEquipment[newIndex])
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedEquipment) return
      
      switch (e.key) {
        case 'Escape':
          closeLightbox()
          break
        case 'ArrowLeft':
          navigateEquipment('prev')
          break
        case 'ArrowRight':
          navigateEquipment('next')
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [selectedEquipment, filteredEquipment])

  return (
    <>
      <section className="py-16 bg-industrial-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title">{title}</h2>
            <p className="text-lg text-industrial-600 max-w-2xl mx-auto">{subtitle}</p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    filter === category
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white text-industrial-700 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Equipment Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {loading ? (
              Array.from({ length: 8 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            ) : (
              filteredEquipment.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => openLightbox(item)}
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-medium text-sm">Click to view details</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-primary-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-industrial-600">{item.description}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedEquipment && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 z-10"
              aria-label="Close equipment details"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateEquipment('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 z-10"
              aria-label="Previous equipment"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => navigateEquipment('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 z-10"
              aria-label="Next equipment"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Equipment Image */}
            <div className="aspect-[16/9] relative">
              <Image
                src={selectedEquipment.image}
                alt={selectedEquipment.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>

            {/* Equipment Details */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-primary-800">{selectedEquipment.title}</h3>
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                  {selectedEquipment.category}
                </span>
              </div>
              <p className="text-industrial-600 mb-6">{selectedEquipment.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <h4 className="font-semibold text-primary-800 mb-3 md:col-span-2">Specifications</h4>
                {Object.entries(selectedEquipment.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-2 border-b border-industrial-200">
                    <span className="font-medium text-industrial-700">{key}</span>
                    <span className="text-industrial-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}