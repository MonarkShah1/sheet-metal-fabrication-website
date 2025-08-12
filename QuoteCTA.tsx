'use client';
import React from 'react';
import Link from 'next/link';

export function QuoteCTA() {

  return (
    <section className="py-20 px-6 bg-tech-gradient text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-circuit-pattern bg-repeat"></div>
        <div className="absolute top-10 right-10 w-40 h-40 border border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 border border-industry-orange/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Floating tech elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-industry-orange rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-white rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative">
        {/* Simplified Process Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
          <span className="text-industry-orange mr-2">📝</span>
          <span className="text-sm font-medium">Simplified Quoting Process</span>
        </div>
        
        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Ready to End Your
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-industry-orange"> Supplier Headaches?</span>
        </h2>
        
        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Get a straightforward quote. We think like an OEM to deliver exactly what you need, when you need it—without the complexity.
        </p>
        
        {/* Benefits bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm">
          <div className="flex items-center text-gray-300">
            <span className="mr-2">🎯</span>
            <span>Straightforward Process</span>
          </div>
          <div className="flex items-center text-gray-300">
            <span className="mr-2">💰</span>
            <span>Honest Pricing</span>
          </div>
          <div className="flex items-center text-gray-300">
            <span className="mr-2">⚡</span>
            <span>Fast Response</span>
          </div>
          <div className="flex items-center text-gray-300">
            <span className="mr-2">🔒</span>
            <span>Secure Upload</span>
          </div>
        </div>
        
        {/* Quote link section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8 max-w-4xl mx-auto">
          <Link href={"/quote" as any} className="block border-2 border-dashed rounded-xl p-8 border-white/30 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/40" aria-label="Start your quote">
            <div className="text-center">
              <div className="w-16 h-16 bg-industry-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-industry-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Your Quote</h3>
              <p className="text-gray-300">Go to the Quote Request page</p>
            </div>
          </Link>
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href={"/quote" as any}
            className="inline-flex items-center px-8 py-4 bg-industry-orange hover:bg-industry-orange/90 text-white rounded-lg font-semibold transition-all duration-300 shadow-industry-lg hover:shadow-industry-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-industry-orange focus:ring-opacity-50"
            aria-label="Go to Quote Request"
          >
            <span>Get Straightforward Quote</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </Link>
          
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-industry-dark text-white rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            aria-label="Contact us for custom requirements"
          >
            <span>Contact Expert</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>
        
        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
          <div className="flex items-center">
            <span className="mr-2">🛡️</span>
            <span>Unshakeable Reliability</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">⚡</span>
            <span>Fast Response</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">🔐</span>
            <span>Secure & Confidential</span>
          </div>
        </div>
      </div>
    </section>
  );
}