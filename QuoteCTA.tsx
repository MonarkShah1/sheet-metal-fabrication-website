'use client';
import React, { useState } from 'react';

export function QuoteCTA() {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };
  
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    // Handle file drop logic here
  };

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
        {/* Industry 4.0 Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
          <span className="text-industry-orange mr-2">🚀</span>
          <span className="text-sm font-medium">AI-Powered Quoting System</span>
        </div>
        
        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Ready to Experience the Future of
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-industry-orange"> Sheet Metal Outsourcing?</span>
        </h2>
        
        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Upload your CAD file and get an instant quote powered by AI analysis, machine learning pricing, and real-time capacity optimization.
        </p>
        
        {/* Benefits bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm">
          <div className="flex items-center text-gray-300">
            <span className="mr-2">⚡</span>
            <span>Instant AI Analysis</span>
          </div>
          <div className="flex items-center text-gray-300">
            <span className="mr-2">💰</span>
            <span>Smart Pricing</span>
          </div>
          <div className="flex items-center text-gray-300">
            <span className="mr-2">📊</span>
            <span>Real-time Capacity</span>
          </div>
          <div className="flex items-center text-gray-300">
            <span className="mr-2">🔒</span>
            <span>Secure Upload</span>
          </div>
        </div>
        
        {/* Upload section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8 max-w-4xl mx-auto">
          <div
            className={`border-2 border-dashed rounded-xl p-8 transition-all duration-300 ${
              isDragOver 
                ? 'border-industry-orange bg-industry-orange/10' 
                : 'border-white/30 hover:border-white/50'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-industry-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-industry-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">Drop your CAD files here</h3>
              <p className="text-gray-300 mb-4">or click to browse</p>
              
              <input
                type="file"
                accept=".cad,.dxf,.dwg,.step,.stp,.iges,.igs"
                multiple
                className="hidden"
                id="file-upload"
                aria-label="Upload CAD Files for Quote"
              />
              
              <label
                htmlFor="file-upload"
                className="inline-block bg-industry-orange hover:bg-industry-orange/90 text-white px-6 py-3 rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:scale-105"
              >
                Browse Files
              </label>
              
              <div className="mt-4 text-sm text-gray-400">
                Supported formats: CAD, DXF, DWG, STEP, STP, IGES, IGS
              </div>
            </div>
          </div>
          
          {/* Progress bar (hidden by default) */}
          {uploadProgress > 0 && (
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Uploading...</span>
                <span>{uploadProgress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-industry-orange h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            type="button"
            className="inline-flex items-center px-8 py-4 bg-industry-orange hover:bg-industry-orange/90 text-white rounded-lg font-semibold transition-all duration-300 shadow-industry-lg hover:shadow-industry-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-industry-orange focus:ring-opacity-50"
            aria-label="Get instant quote with AI analysis"
          >
            <span>Get Instant Quote</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </button>
          
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
            <span>ISO 9001 Certified</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">⚡</span>
            <span>24/7 Processing</span>
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