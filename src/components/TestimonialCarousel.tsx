'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

interface Testimonial {
  id: string
  quote: string
  author: string
  company: string
  role: string
  image: string
  rating: number
}

interface TestimonialCarouselProps {
  testimonials?: Testimonial[]
  autoplayInterval?: number
  title?: string
  subtitle?: string
}

const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    quote: "CMF consistently delivers exceptional quality on tight deadlines. Their precision and attention to detail have made them our go-to fabrication partner for over 5 years.",
    author: "Sarah Johnson",
    company: "Toronto Construction Ltd",
    role: "Project Manager",
    image: "/images/testimonials/sarah-johnson.jpg",
    rating: 5
  },
  {
    id: '2',
    quote: "The team at Canadian Metal Fabricators transformed our complex design into reality. Their expertise in laser cutting and welding is unmatched in Ontario.",
    author: "Mike Chen",
    company: "Industrial Solutions Inc",
    role: "Lead Engineer",
    image: "/images/testimonials/mike-chen.jpg",
    rating: 5
  },
  {
    id: '3',
    quote: "From concept to completion, CMF exceeded our expectations. Their ISO 9001 certification gives us confidence in every project we entrust to them.",
    author: "Emma Rodriguez",
    company: "Architectural Metals",
    role: "Operations Director",
    image: "/images/testimonials/emma-rodriguez.jpg",
    rating: 5
  },
  {
    id: '4',
    quote: "Outstanding service and communication throughout the entire process. CMF's quick turnaround times have helped us stay ahead of our project schedules.",
    author: "David Thompson",
    company: "BuildTech Solutions",
    role: "Procurement Manager",
    image: "/images/testimonials/david-thompson.jpg",
    rating: 5
  },
  {
    id: '5',
    quote: "The quality of work and professionalism at CMF is second to none. They've been instrumental in helping us deliver award-winning projects to our clients.",
    author: "Lisa Park",
    company: "Modern Manufacturing",
    role: "CEO",
    image: "/images/testimonials/lisa-park.jpg",
    rating: 5
  }
]

export function TestimonialCarousel({
  testimonials = defaultTestimonials,
  autoplayInterval = 6000,
  title = "What Our Clients Say",
  subtitle = "Trusted by leading companies across Ontario"
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout>()

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, autoplayInterval)
  }, [autoplayInterval, testimonials.length])

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = undefined
    }
  }

  useEffect(() => {
    if (isPlaying) {
      startAutoplay()
    } else {
      stopAutoplay()
    }

    return () => stopAutoplay()
  }, [isPlaying, autoplayInterval, testimonials.length, startAutoplay])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handleKeyNavigation = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        goToPrevious()
        break
      case 'ArrowRight':
        goToNext()
        break
      case ' ':
        e.preventDefault()
        setIsPlaying(!isPlaying)
        break
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">{title}</h2>
          <p className="text-lg text-industrial-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div 
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          onKeyDown={handleKeyNavigation}
          tabIndex={0}
          role="region"
          aria-label="Customer testimonials carousel"
        >
          {/* Main Testimonial Card */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                  aria-hidden={index !== currentIndex}
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center max-w-3xl mx-auto">
                    {/* Star Rating */}
                    <div className="flex justify-center mb-6">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl text-industrial-700 italic leading-relaxed mb-8">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center justify-center space-x-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                          sizes="64px"
                          loading="lazy"
                        />
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-primary-800">{testimonial.author}</div>
                        <div className="text-industrial-600">{testimonial.role}</div>
                        <div className="text-industrial-500 text-sm">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-industrial-100 hover:bg-industrial-200 text-industrial-600 hover:text-industrial-800 transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dot Indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-primary-600 scale-110'
                      : 'bg-industrial-300 hover:bg-industrial-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-industrial-100 hover:bg-industrial-200 text-industrial-600 hover:text-industrial-800 transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-full bg-industrial-100 hover:bg-industrial-200 text-industrial-600 hover:text-industrial-800 transition-colors duration-200 ml-4"
              aria-label={isPlaying ? 'Pause autoplay' : 'Start autoplay'}
            >
              {isPlaying ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5v10l8-5-8-5z" />
                </svg>
              )}
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="h-1 bg-industrial-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary-600 rounded-full transition-all duration-100 ease-linear"
                style={{ 
                  width: isPlaying ? '100%' : '0%',
                  transition: isPlaying ? `width ${autoplayInterval}ms linear` : 'none'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}