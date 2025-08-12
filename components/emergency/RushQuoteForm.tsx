'use client'

import { useState } from 'react'
import { businessInfo } from '@/config/business-info'

interface RushQuoteFormProps {
  city?: string
  variant?: 'standard' | 'compact' | 'minimal'
  showLocationField?: boolean
}

export function RushQuoteForm({ city, variant = 'standard', showLocationField = false }: RushQuoteFormProps) {
  const [formData, setFormData] = useState({
    description: '',
    timeline: '',
    quantity: '',
    phone: '',
    email: '',
    location: city || '',
    urgencyLevel: '',
    file: null as File | null
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('✅ Rush request received! We\'ll call you within 15 minutes.')
      setIsSubmitting(false)
    }, 1000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({ ...prev, file }))
  }

  if (variant === 'minimal') {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <h3 className="text-xl font-bold mb-4 text-center">Emergency Quote</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            name="description"
            placeholder="Describe your emergency..."
            className="w-full p-3 border border-gray-300 rounded-md"
            rows={2}
            required
            value={formData.description}
            onChange={handleInputChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
            value={formData.phone}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-red-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-red-700 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'SUBMITTING...' : 'GET RUSH QUOTE'}
          </button>
        </form>
        {submitMessage && (
          <div className="mt-4 p-3 bg-green-50 text-green-800 rounded-md text-sm">
            {submitMessage}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {city ? `${city} Rush Quote` : 'Emergency Rush Quote'}
        </h2>
        <p className="text-lg text-gray-600">Average response time: 47 minutes</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {showLocationField && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location/City *
            </label>
            <select
              name="location"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
              value={formData.location}
              onChange={handleInputChange}
            >
              <option value="">Select location...</option>
              <option value="toronto">Toronto</option>
              <option value="mississauga">Mississauga</option>
              <option value="brampton">Brampton</option>
              <option value="vaughan">Vaughan</option>
              <option value="hamilton">Hamilton</option>
              <option value="markham">Markham</option>
              <option value="other">Other GTA</option>
            </select>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What's needed? *
          </label>
          <textarea
            name="description"
            className="w-full p-3 border border-gray-300 rounded-md"
            rows={3}
            placeholder="Describe the part, problem, or upload photo/drawing"
            required
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            When needed? *
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="timeline"
                value="4hours"
                className="mr-3"
                required
                onChange={handleInputChange}
              />
              <span>
                Next 4 hours (RUSH) - <span className="text-red-600 font-semibold">25-50% premium</span>
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="timeline"
                value="today"
                className="mr-3"
                onChange={handleInputChange}
              />
              <span>Today - Standard rush pricing</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="timeline"
                value="tomorrow"
                className="mr-3"
                onChange={handleInputChange}
              />
              <span>Tomorrow - Minimal premium</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="timeline"
                value="week"
                className="mr-3"
                onChange={handleInputChange}
              />
              <span>This week - Standard pricing</span>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity *
            </label>
            <input
              type="number"
              name="quantity"
              className="w-full p-3 border border-gray-300 rounded-md"
              min="1"
              required
              value={formData.quantity}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone *
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email (optional)
          </label>
          <input
            type="email"
            name="email"
            className="w-full p-3 border border-gray-300 rounded-md"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Attach file (optional)
          </label>
          <input
            type="file"
            name="file"
            className="w-full p-3 border border-gray-300 rounded-md"
            accept="image/*,.pdf,.dwg,.step,.iges"
            onChange={handleFileChange}
          />
          <p className="text-xs text-gray-500 mt-1">
            Accepted: Photos, PDFs, CAD files (max 10MB)
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-red-600 text-white py-4 px-6 rounded-md text-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'SUBMITTING RUSH REQUEST...' : 'SUBMIT RUSH REQUEST'}
        </button>

        <div className="text-sm text-gray-600 text-center space-y-1">
          <div>✓ Rush request received! Calling within 15 minutes</div>
          <div>✓ Formal quote delivered within 1 hour</div>
          <div>✓ Production updates every hour</div>
          <div className="font-semibold text-red-600">Emergency hotline: {businessInfo.telephone}</div>
        </div>
      </form>

      {submitMessage && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
          <div className="text-green-800 font-semibold">{submitMessage}</div>
          <div className="text-green-700 text-sm mt-2">
            Expected call time: {new Date(Date.now() + 15 * 60 * 1000).toLocaleTimeString()}
          </div>
        </div>
      )}
    </div>
  )
}