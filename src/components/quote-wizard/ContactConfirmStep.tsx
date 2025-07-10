'use client'

import { useState } from 'react'

interface Customer {
  name: string
  email: string
  phone: string
  company: string
}

interface ContactConfirmStepProps {
  customer: Customer
  onDataChange: (customer: Customer) => void
  onSubmit: () => void
  onPrev: () => void
  isSubmitting: boolean
}

export function ContactConfirmStep({
  customer,
  onDataChange,
  onSubmit,
  onPrev,
  isSubmitting
}: ContactConfirmStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const handleInputChange = (field: keyof Customer, value: string) => {
    onDataChange({ ...customer, [field]: value })
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!customer.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!customer.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!customer.company.trim()) {
      newErrors.company = 'Company name is required'
    }

    if (customer.phone && !/^[\d\s\-\(\)\+]+$/.test(customer.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!acceptedTerms) {
      newErrors.terms = 'Please accept our terms to continue'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = () => {
    if (validate()) {
      onSubmit()
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-primary-800 mb-2">Contact Information</h3>
        <p className="text-industrial-600 mb-6">
          We'll use this information to send you the quote and follow up if needed.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-industrial-700 mb-2">
            Company Name *
          </label>
          <input
            type="text"
            id="company"
            value={customer.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              errors.company ? 'border-red-500' : 'border-industrial-300'
            }`}
            placeholder="Your company name"
            required
            aria-describedby={errors.company ? 'company-error' : undefined}
          />
          {errors.company && (
            <p id="company-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.company}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-industrial-700 mb-2">
            Contact Name *
          </label>
          <input
            type="text"
            id="name"
            value={customer.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              errors.name ? 'border-red-500' : 'border-industrial-300'
            }`}
            placeholder="Your full name"
            required
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-industrial-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={customer.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              errors.email ? 'border-red-500' : 'border-industrial-300'
            }`}
            placeholder="your.email@company.com"
            required
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-industrial-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={customer.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              errors.phone ? 'border-red-500' : 'border-industrial-300'
            }`}
            placeholder="(519) 555-0123"
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="bg-industrial-50 rounded-lg p-4">
        <h4 className="font-medium text-industrial-700 mb-3">📋 What happens next:</h4>
        <div className="space-y-2 text-sm text-industrial-600">
          <div className="flex items-start space-x-2">
            <span className="text-primary-500 mt-1">1.</span>
            <span>You'll receive an instant price estimate modal</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-primary-500 mt-1">2.</span>
            <span>A detailed quote will be emailed to you within 4 hours</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-primary-500 mt-1">3.</span>
            <span>Our team will contact you to discuss your project</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-primary-500 mt-1">4.</span>
            <span>We'll provide a firm quote and timeline for your approval</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="terms"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            className="w-4 h-4 text-primary-600 border-industrial-300 rounded focus:ring-primary-500 mt-1"
          />
          <label htmlFor="terms" className="text-sm text-industrial-700">
            I agree to receive quote information and follow-up communications from Canadian Metal Fabricators. 
            I understand that my information will be used to process my quote request and may be stored 
            for future project discussions.
          </label>
        </div>
        {errors.terms && (
          <p className="text-sm text-red-600 ml-7" role="alert">
            {errors.terms}
          </p>
        )}

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="newsletter"
            className="w-4 h-4 text-primary-600 border-industrial-300 rounded focus:ring-primary-500 mt-1"
          />
          <label htmlFor="newsletter" className="text-sm text-industrial-700">
            I'd like to receive occasional updates about new capabilities and industry insights 
            (optional - you can unsubscribe anytime).
          </label>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onPrev}
          disabled={isSubmitting}
          className="btn-primary bg-industrial-500 hover:bg-industrial-600 disabled:opacity-50"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center space-x-2">
              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Processing Quote...</span>
            </span>
          ) : (
            'Get Instant Quote'
          )}
        </button>
      </div>
    </div>
  )
}