'use client'

import { useEffect } from 'react'
import { event } from '@/lib/analytics'

interface Pricing {
  lowPrice: number
  highPrice: number
  estLeadDays: number
}

interface InstantResultModalProps {
  pricing: Pricing
  material: string
  quantity: number
  rush: boolean
  onClose: () => void
}

export function InstantResultModal({
  pricing,
  material,
  quantity,
  rush,
  onClose
}: InstantResultModalProps) {
  
  useEffect(() => {
    event({
      action: 'quote_result_shown',
      category: 'Quote Wizard',
      label: material,
      value: pricing.lowPrice
    })
  }, [])

  const handleCallClick = () => {
    event({
      action: 'cta_click_call',
      category: 'Quote Wizard',
      label: 'Result Modal',
      value: 1
    })
  }

  const handleEmailClick = () => {
    event({
      action: 'cta_click_email',
      category: 'Quote Wizard', 
      label: 'Result Modal',
      value: 1
    })
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  const materialLabels: Record<string, string> = {
    'mild-steel': 'Mild Steel',
    'stainless-steel-304': 'Stainless Steel 304',
    'stainless-steel-316': 'Stainless Steel 316',
    'aluminum-6061': 'Aluminum 6061',
    'aluminum-5052': 'Aluminum 5052',
    'galvanized-steel': 'Galvanized Steel',
    'copper': 'Copper',
    'brass': 'Brass',
    'other': 'Other Material'
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold text-primary-800">Your Instant Quote</h3>
              <p className="text-industrial-600 mt-1">
                Based on your specifications - detailed quote via email within 4 hours
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-industrial-400 hover:text-industrial-600 p-1"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-6">
            <div className="bg-primary-50 rounded-lg p-6 border-2 border-primary-200">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-800 mb-2">
                  {formatPrice(pricing.lowPrice)} - {formatPrice(pricing.highPrice)}
                </div>
                <div className="text-lg text-primary-600 mb-4">
                  Estimated Price Range
                </div>
                <div className="flex justify-center items-center space-x-4 text-sm text-primary-700">
                  <div className="flex items-center space-x-1">
                    <span>📅</span>
                    <span>{pricing.estLeadDays} day{pricing.estLeadDays !== 1 ? 's' : ''} lead time</span>
                  </div>
                  {rush && (
                    <div className="flex items-center space-x-1">
                      <span>⚡</span>
                      <span>Rush order</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-industrial-50 rounded-lg p-4">
                <h4 className="font-medium text-industrial-700 mb-3">Project Summary</h4>
                <div className="space-y-2 text-sm text-industrial-600">
                  <div className="flex justify-between">
                    <span>Material:</span>
                    <span className="font-medium">{materialLabels[material] || material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quantity:</span>
                    <span className="font-medium">{quantity} piece{quantity !== 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Timeline:</span>
                    <span className="font-medium">{rush ? 'Rush (24 hours)' : 'Standard'}</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-green-800 mb-3">✅ What's Included</h4>
                <ul className="space-y-1 text-sm text-green-700">
                  <li>• Material & cutting</li>
                  <li>• Standard finishing</li>
                  <li>• Quality inspection</li>
                  <li>• Packaging & labeling</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <span className="text-amber-600 text-xl">💡</span>
                <div>
                  <h4 className="font-medium text-amber-800 mb-1">Important Notes</h4>
                  <ul className="text-sm text-amber-700 space-y-1">
                    <li>• This is a preliminary estimate based on typical specifications</li>
                    <li>• Final pricing depends on file review and exact requirements</li>
                    <li>• Complex geometries may affect pricing and lead time</li>
                    <li>• A detailed quote will be emailed within 4 business hours</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h4 className="font-medium text-industrial-700 mb-4">Ready to move forward?</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:519-555-0123"
                  onClick={handleCallClick}
                  className="btn-secondary flex items-center justify-center space-x-2"
                >
                  <span>📞</span>
                  <span>Call Now: (519) 555-0123</span>
                </a>
                <a
                  href="mailto:quotes@canadianmetalfab.com"
                  onClick={handleEmailClick}
                  className="btn-primary flex items-center justify-center space-x-2"
                >
                  <span>✉️</span>
                  <span>Email Our Team</span>
                </a>
              </div>
            </div>

            <div className="bg-industrial-50 rounded-lg p-4">
              <h4 className="font-medium text-industrial-700 mb-2">🎯 Next Steps</h4>
              <div className="space-y-2 text-sm text-industrial-600">
                <div className="flex items-start space-x-2">
                  <span className="text-primary-500 font-medium">1.</span>
                  <span>Check your email for a detailed quote within 4 hours</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-primary-500 font-medium">2.</span>
                  <span>Our engineer will review your files and specifications</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-primary-500 font-medium">3.</span>
                  <span>We'll contact you to discuss any questions or modifications</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-primary-500 font-medium">4.</span>
                  <span>Upon approval, your project enters our production queue</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t">
            <button
              onClick={onClose}
              className="w-full btn-primary bg-industrial-500 hover:bg-industrial-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}