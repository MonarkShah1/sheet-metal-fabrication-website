import React from 'react';

export function Hero() {
  return (
    <section className="relative bg-industry-gradient text-white py-20 px-6 md:py-32 md:px-12 overflow-hidden">
      {/* Industry 4.0 background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-circuit-pattern bg-repeat opacity-30"></div>
        <div className="absolute top-10 right-10 w-32 h-32 border border-industry-blue/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border border-industry-orange/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-industry-blue rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-industry-orange rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-industry-blue rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto text-center animate-fade-in">
        {/* Industry 4.0 Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/20 border border-industry-blue/40 mb-6">
          <span className="text-industry-blue mr-2">🤖</span>
          <span className="text-sm font-medium">Smart Factory Technology</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Precision Sheet Metal Outsourcing in the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange">
            Era of Industry 4.0
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
          Leverage AI-driven fabrication, IoT tracking, and automated processes for faster, smarter outsourcing. 
          Save costs without compromising quality through digital transformation.
        </p>
        
        {/* Key benefits */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
          <div className="flex items-center text-gray-300">
            <span className="mr-2">⚡</span>
            <span>50% Faster Quotes</span>
          </div>
          <div className="flex items-center text-gray-300">
            <span className="mr-2">🎯</span>
            <span>AI-Powered Precision</span>
          </div>
          <div className="flex items-center text-gray-300">
            <span className="mr-2">📊</span>
            <span>Real-time IoT Tracking</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/quote"
            className="inline-block bg-industry-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-industry-orange/90 hover:scale-105 transition-all duration-300 shadow-industry-lg focus:outline-none focus:ring-2 focus:ring-industry-orange focus:ring-opacity-50"
            aria-label="Get a Free Quote for Sheet Metal Outsourcing"
          >
            Get Free Quote
          </a>
          <a
            href="/services"
            className="inline-block bg-transparent border-2 border-industry-blue text-industry-blue hover:bg-industry-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-industry-blue focus:ring-opacity-50"
            aria-label="View Our Industry 4.0 Services"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}