'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface HeroProps {
  backgroundImage?: string
  backgroundVideo?: string
  headline?: string
  subtext?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
}

export function Hero({
  backgroundImage = "/images/hero-shop.jpg",
  backgroundVideo,
  headline = "Custom Metal Fabrication Ontario",
  subtext = "Precision laser cutting, welding & CNC services. 10-day turnaround, 99.7% on-time delivery since 1985.",
  primaryCTA = {
    text: "Get Quote in 20 Seconds",
    href: "/request-quote"
  },
  secondaryCTA = {
    text: "Watch Our Process",
    href: "#video"
  }
}: HeroProps) {
  const [videoModal, setVideoModal] = useState(false)

  return (
    <>
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image/Video */}
        {backgroundVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            aria-hidden="true"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={backgroundImage}
            alt="Canadian Metal Fabricators shop floor"
            fill
            className="object-cover z-0"
            priority
            sizes="100vw"
          />
        )}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 section-container">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {headline}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/80 leading-relaxed max-w-3xl mx-auto">
              {subtext}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Link 
                href={primaryCTA.href}
                className="w-full sm:w-auto bg-accent hover:bg-accent-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-center min-h-[56px] flex items-center justify-center"
              >
                {primaryCTA.text}
              </Link>
              <button
                onClick={() => setVideoModal(true)}
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary-800 font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-center min-h-[56px] flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5v10l8-5-8-5z"/>
                </svg>
                {secondaryCTA.text}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoModal && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setVideoModal(false)}
        >
          <div 
            className="relative bg-white rounded-lg overflow-hidden max-w-4xl w-full aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoModal(false)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 z-10"
              aria-label="Close video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Manufacturing Process Video"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  )
}