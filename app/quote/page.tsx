'use client'

import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Select } from '@/components/select'
import { Textarea } from '@/components/textarea'
import { Field, FieldGroup, Label } from '@/components/fieldset'
import React, { useState, useCallback, useEffect } from 'react'
import { Metadata } from 'next'

// Custom metadata (Note: This would typically be in a parent component or page.tsx for App Router)
const metadata: Metadata = {
  title: 'Submit Quote Request | Trusted Sheet Metal Outsourcing Ontario',
  description: 'Secure quote submission with drag-and-drop file uploads. Get precise quotes in 24 hours from trusted sheet metal fabricators. No estimator - direct discovery calls.',
}

interface FormData {
  // Step 1: Files
  files: File[]
  
  // Step 2: Project Specs
  quantity: string
  leadTime: string
  
  // Step 3: Details (Optional)
  material: string
  finish: string
  notes: string
  
  // Step 4: Contact
  name: string
  email: string
  company: string
  phone: string
}

const initialFormData: FormData = {
  files: [],
  quantity: '',
  leadTime: '',
  material: '',
  finish: '',
  notes: '',
  name: '',
  email: '',
  company: '',
  phone: '',
}

const steps = [
  { id: 1, title: 'Upload Files', description: 'Share your STP & PDF files' },
  { id: 2, title: 'Project Specs', description: 'Quantity & Timeline' },
  { id: 3, title: 'Details', description: 'Materials & Finishing' },
  { id: 4, title: 'Contact', description: 'Your Information' },
]

const progressMessages = [
  'Getting started with your project...',
  'Defining your requirements...',
  'Adding project details...',
  'Almost there—simplifying your outsourcing!'
]

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const [showTooltip, setShowTooltip] = useState<string | null>(null)
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  // Force text color override for form inputs
  React.useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      .quote-form input[type="number"],
      .quote-form select {
        color: #1F2937 !important;
      }
      @media (prefers-color-scheme: dark) {
        .quote-form input[type="number"],
        .quote-form select {
          color: #1F2937 !important;
        }
      }
    `
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const newFiles = Array.from(e.dataTransfer.files)
      setFormData(prev => ({ ...prev, files: [...prev.files, ...newFiles] }))
    }
  }, [])

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFormData(prev => ({ ...prev, files: [...prev.files, ...newFiles] }))
    }
  }

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }))
  }

  const validateStep = (step: number): boolean => {
    const newErrors: {[key: string]: string} = {}
    
    switch (step) {
      case 1:
        if (formData.files.length === 0) {
          newErrors.files = 'Please upload at least one file (STP or PDF)'
        }
        break
      case 2:
        if (!formData.quantity) {
          newErrors.quantity = 'Please enter a quantity greater than 0'
        } else if (parseInt(formData.quantity) < 1) {
          newErrors.quantity = 'Quantity must be at least 1 unit'
        }
        if (!formData.leadTime) {
          newErrors.leadTime = 'Please select your preferred timeline'
        }
        break
      case 4:
        if (!formData.name) {
          newErrors.name = 'Name is required'
        }
        if (!formData.email) {
          newErrors.email = 'Email is required'
        }
        if (!formData.company) {
          newErrors.company = 'Company is required'
        }
        break
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length))
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateStep(4)) {
      // Simulate API call
      console.log('Submitting quote request:', formData)
      setIsSubmitted(true)
    }
  }

  const Tooltip = ({ content, children, id }: { content: string; children: React.ReactNode; id: string }) => (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setShowTooltip(id)}
        onMouseLeave={() => setShowTooltip(null)}
        className="cursor-help"
      >
        {children}
      </div>
      {showTooltip === id && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-industry-dark text-white text-xs rounded-lg whitespace-nowrap z-10">
          {content}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-industry-dark"></div>
        </div>
      )}
    </div>
  )

  if (isSubmitted) {
    return (
      <>
        <Navigation />
        <main>
          <section className="py-20 px-6 bg-industry-light min-h-screen flex items-center justify-center">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white p-8 rounded-xl shadow-industry border border-industry-gray-200 animate-slide-up">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-green-600 text-3xl">✅</span>
                </div>
                <h1 className="text-3xl font-bold text-industry-dark mb-4">Quote Request Submitted!</h1>
                <p className="text-industry-gray-600 mb-6">
                  Thank you for choosing us. We&apos;ve received your files and project details. 
                  Our team will review everything and contact you within 24 hours.
                </p>
                
                {/* Trust Timeline */}
                <div className="bg-industry-light p-6 rounded-lg mb-6">
                  <h3 className="font-semibold text-industry-dark mb-4">What happens next:</h3>
                  <div className="space-y-3 text-sm text-left">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-industry-blue rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">1</span>
                      </div>
                      <span className="text-industry-gray-700">Submission received & files reviewed (within 2 hours)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-industry-orange rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">2</span>
                      </div>
                      <span className="text-industry-gray-700">Engineering analysis & design review</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-industry-blue rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">3</span>
                      </div>
                      <span className="text-industry-gray-700">Discovery call scheduled (within 24 hours)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-industry-orange rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">4</span>
                      </div>
                      <span className="text-industry-gray-700">Precise quote delivered with timeline</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => window.location.href = '/'}
                    className="bg-industry-blue hover:bg-industry-blue/90 text-white px-6 py-3 rounded-lg font-medium"
                  >
                    Return Home
                  </Button>
                  <Button
                    onClick={() => window.location.href = '/services'}
                    className="bg-transparent border-2 border-industry-blue text-industry-blue hover:bg-industry-blue hover:text-white px-6 py-3 rounded-lg font-medium"
                  >
                    View Services
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
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
            {/* Trust Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/20 border border-industry-blue/40 mb-6">
              <span className="text-industry-blue mr-2">🔒</span>
              <span className="text-sm font-medium">Secure & Simplified</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Submit Your Quote Request –
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Simplified and Secure</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Share your details with confidence. We master the fundamentals to deliver unshakeable results, 
              starting with a quick discovery call within 24 hours.
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
              <div className="flex items-center text-gray-300">
                <span className="mr-2">🎯</span>
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">🔒</span>
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">⚡</span>
                <span>24hr Response</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">✅</span>
                <span>ISO 9001 Certified</span>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 px-6 bg-industry-light relative overflow-hidden">
          {/* Background tech pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-industry-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-industry-orange/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= step.id
                        ? 'bg-industry-blue text-white'
                        : 'bg-industry-gray-200 text-industry-gray-500'
                    }`}>
                      {currentStep > step.id ? '✓' : step.id}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`flex-1 h-1 mx-4 rounded ${
                        currentStep > step.id
                          ? 'bg-industry-blue'
                          : 'bg-industry-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center">
                <p className="text-industry-gray-600 text-sm">
                  {progressMessages[currentStep - 1]}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="quote-form">
              <div className="bg-white p-8 rounded-xl shadow-industry border border-industry-gray-200 animate-slide-up min-h-[500px]">
                {/* Step 1: File Upload */}
                {currentStep === 1 && (
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-industry-blue text-xl">📁</span>
                      </div>
                      <div>
                        <h2 className="text-2xl font-semibold text-industry-dark">Upload Your Files</h2>
                        <p className="text-industry-gray-600 text-sm">
                          Share your STP files and PDF drawings for precise quoting
                        </p>
                      </div>
                    </div>
                    
                    {/* Drag and Drop Area */}
                    <div
                      className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                        dragActive
                          ? 'border-industry-blue bg-industry-blue/5'
                          : 'border-industry-gray-300 hover:border-industry-blue/50'
                      }`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                    >
                      <div className="w-16 h-16 bg-industry-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-industry-blue text-2xl">📤</span>
                      </div>
                      <h3 className="text-lg font-medium text-industry-dark mb-2">
                        Drag & drop your files here
                      </h3>
                      <p className="text-industry-gray-600 mb-4">
                        or click to browse your computer
                      </p>
                      <input
                        type="file"
                        multiple
                        accept=".stp,.step,.pdf,.dwg,.dxf"
                        onChange={handleFileInput}
                        className="hidden"
                        id="file-upload"
                      />
                      <label
                        htmlFor="file-upload"
                        className="inline-flex items-center px-6 py-3 bg-industry-blue hover:bg-industry-blue/90 text-white rounded-lg font-medium cursor-pointer transition-colors"
                      >
                        Choose Files
                      </label>
                      <p className="text-xs text-industry-gray-500 mt-2">
                        Supported: STP, STEP, PDF, DWG, DXF (Max 10MB each)
                      </p>
                    </div>

                    {/* File List */}
                    {formData.files.length > 0 && (
                      <div className="mt-6">
                        <h4 className="font-medium text-industry-dark mb-3">Uploaded Files:</h4>
                        <div className="space-y-2">
                          {formData.files.map((file, index) => (
                            <div key={index} className="flex items-center justify-between bg-industry-light p-3 rounded-lg">
                              <div className="flex items-center space-x-3">
                                <span className="text-industry-blue">📄</span>
                                <span className="text-sm text-industry-dark">{file.name}</span>
                                <span className="text-xs text-industry-gray-500">
                                  ({(file.size / 1024 / 1024).toFixed(2)} MB)
                                </span>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="text-red-500 hover:text-red-700 text-sm"
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Educational Popover */}
                    <div className="mt-6 p-4 bg-industry-blue/5 rounded-lg border border-industry-blue/20">
                      <div className="flex items-start space-x-3">
                        <Tooltip content="We think like an OEM to refine your specs" id="tip-files">
                          <span className="text-industry-blue cursor-help">💡</span>
                        </Tooltip>
                        <div>
                          <h4 className="font-medium text-industry-dark text-sm">Why STP + PDF?</h4>
                          <p className="text-xs text-industry-gray-600">
                            STP files give us your exact 3D geometry for precise manufacturing. 
                            PDFs provide drawings with dimensions and notes for complete understanding.
                          </p>
                        </div>
                      </div>
                    </div>

                    {errors.files && <p className="text-red-500 text-sm mt-2">{errors.files}</p>}
                  </div>
                )}

                {/* Step 2: Project Requirements */}
                {currentStep === 2 && (
                  <div>
                    <div className="flex items-center mb-8">
                      <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-industry-orange text-xl">📊</span>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-industry-dark">Project Requirements</h2>
                        <p className="text-industry-gray-600 text-sm">
                          Essential details for accurate quoting - Manufacturing Simplified
                        </p>
                      </div>
                    </div>

                    {/* Enhanced Project Requirements Form */}
                    <div className="bg-white p-8 rounded-xl border-2 border-industry-gray-200 shadow-lg mb-6">
                      <fieldset className="space-y-8">
                        <legend className="text-xl font-bold text-industry-dark mb-6 pb-2 border-b-2 border-industry-blue/20">
                          Project Requirements
                        </legend>
                        
                        <FieldGroup>
                          {/* Responsive Grid for QTY and Timeline */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Quantity Field - Enhanced */}
                            <Field>
                              <Label className="flex items-center text-base font-bold text-industry-blue">
                                Quantity (QTY) *
                                <Tooltip content="Even single prototypes help us determine the best manufacturing approach and pricing structure" id="tip-qty-enhanced">
                                  <span className="ml-2 text-industry-blue cursor-help text-sm">ℹ️</span>
                                </Tooltip>
                              </Label>
                              <p className="text-sm text-industry-gray-600 mb-2">Enter the number of units needed</p>
                              <div className="relative">
                                <Input
                                  type="number"
                                  min="1"
                                  step="1"
                                  value={formData.quantity}
                                  onChange={(e) => handleInputChange('quantity', e.target.value)}
                                  placeholder="e.g., 1, 50, 500..."
                                  className={`w-full p-4 text-lg border-2 rounded-lg shadow-sm transition-all duration-300 focus:ring-4 focus:ring-industry-blue/20 hover:shadow-md placeholder-industry-gray-400 [&_input]:!text-industry-dark [&_input]:dark:!text-industry-dark ${
                                    errors.quantity 
                                      ? 'border-red-500 bg-red-50 focus:border-red-500 ring-2 ring-red-200' 
                                      : 'border-industry-gray-300 focus:border-industry-blue hover:border-industry-blue/70'
                                  }`}
                                  style={{ color: '#1F2937 !important' } as React.CSSProperties}
                                  aria-describedby="qty-help"
                                  aria-label="Quantity of units needed"
                                />
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-industry-gray-400 text-sm font-medium bg-white px-2">
                                  units
                                </div>
                              </div>
                              {errors.quantity && (
                                <p className="text-red-600 text-sm font-medium flex items-center mt-2 p-2 bg-red-50 rounded-md border border-red-200">
                                  <span className="mr-2 text-red-500">⚠️</span>
                                  {errors.quantity}
                                </p>
                              )}
                              <p id="qty-help" className="text-xs text-industry-gray-500 bg-industry-light p-2 rounded-md mt-2">
                                💡 Minimum: 1 unit. Higher quantities may qualify for volume pricing discounts.
                              </p>
                            </Field>

                            {/* Timeline Field - Enhanced */}
                            <Field>
                              <Label className="flex items-center text-base font-bold text-industry-blue">
                                Timeline (Lead Time) *
                                <Tooltip content="Lead time helps us prioritize—rush options available for urgent needs with additional fees" id="tip-timeline-enhanced">
                                  <span className="ml-2 text-industry-blue cursor-help text-sm">ℹ️</span>
                                </Tooltip>
                              </Label>
                              <p className="text-sm text-industry-gray-600 mb-2">When do you need this completed?</p>
                              <Select
                                value={formData.leadTime}
                                onChange={(e) => handleInputChange('leadTime', e.target.value)}
                                className={`w-full p-4 text-lg border-2 rounded-lg shadow-sm transition-all duration-300 focus:ring-4 focus:ring-industry-blue/20 hover:shadow-md [&_select]:!text-industry-dark [&_select]:dark:!text-industry-dark ${
                                  errors.leadTime 
                                    ? 'border-red-500 bg-red-50 focus:border-red-500 ring-2 ring-red-200' 
                                    : 'border-industry-gray-300 focus:border-industry-blue hover:border-industry-blue/70'
                                }`}
                                style={{ color: '#1F2937 !important' } as React.CSSProperties}
                                aria-describedby="timeline-help"
                                aria-label="Project timeline and lead time"
                              >
                                <option value="">Select your preferred timeline</option>
                                <option value="rush">🚀 Rush (1-3 days) - Additional fees apply</option>
                                <option value="priority">⚡ Priority (1 week) - Fast track</option>
                                <option value="standard">✅ Standard (2 weeks) - Most popular</option>
                                <option value="economy">💰 Economy (3-4 weeks) - Best pricing</option>
                                <option value="flexible">📅 Flexible - Work with our schedule</option>
                              </Select>
                              {errors.leadTime && (
                                <p className="text-red-600 text-sm font-medium flex items-center mt-2 p-2 bg-red-50 rounded-md border border-red-200">
                                  <span className="mr-2 text-red-500">⚠️</span>
                                  {errors.leadTime}
                                </p>
                              )}
                              <p id="timeline-help" className="text-xs text-industry-gray-500 bg-industry-light p-2 rounded-md mt-2">
                                ⏱️ Standard includes quality control and finishing. Rush orders subject to capacity.
                              </p>
                            </Field>
                          </div>
                        </FieldGroup>
                      </fieldset>
                    </div>

                    {/* What Happens Next - Trust Building */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-xl border border-industry-blue/20 shadow-sm">
                        <h3 className="text-lg font-semibold text-industry-dark mb-4 flex items-center">
                          <span className="w-8 h-8 bg-industry-blue/20 rounded-full flex items-center justify-center mr-3">
                            <span className="text-industry-blue text-sm">📋</span>
                          </span>
                          What Happens Next
                        </h3>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-industry-blue rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">1</span>
                            </div>
                            <span className="text-industry-gray-700">Submit → We review in hours</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-industry-orange rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">2</span>
                            </div>
                            <span className="text-industry-gray-700">Discovery call scheduled</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-industry-blue rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">3</span>
                            </div>
                            <span className="text-industry-gray-700">Precise quote delivered</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {/* Mini Testimonial 1 */}
                        <div className="bg-industry-orange/5 p-4 rounded-lg border border-industry-orange/20">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-industry-orange/20 rounded-full flex items-center justify-center">
                              <span className="text-industry-orange text-xs">👤</span>
                            </div>
                            <div>
                              <p className="text-sm text-industry-gray-700 italic">
                                &quot;Quick and reliable—ended our supplier headaches completely.&quot;
                              </p>
                              <p className="text-xs text-industry-gray-500 mt-1">- Manufacturing Director, Automotive OEM</p>
                            </div>
                          </div>
                        </div>

                        {/* Mini Testimonial 2 */}
                        <div className="bg-industry-blue/5 p-4 rounded-lg border border-industry-blue/20">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-industry-blue/20 rounded-full flex items-center justify-center">
                              <span className="text-industry-blue text-xs">👤</span>
                            </div>
                            <div>
                              <p className="text-sm text-industry-gray-700 italic">
                                &quot;Their timeline estimates are always accurate. No more surprises!&quot;
                              </p>
                              <p className="text-xs text-industry-gray-500 mt-1">- Operations Manager, Industrial Equipment</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Privacy and Security Notice */}
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="flex items-start space-x-3">
                        <span className="text-green-600 text-lg">🔒</span>
                        <div>
                          <h4 className="font-semibold text-green-800 text-sm">Your Information is Secure</h4>
                          <p className="text-xs text-green-700 mt-1">
                            Your files are secure and reviewed confidentially. We follow ISO 9001 standards for data protection and never share your project details.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Optional Details */}
                {currentStep === 3 && (
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-industry-blue text-xl">⚙️</span>
                      </div>
                      <div>
                        <h2 className="text-2xl font-semibold text-industry-dark">Project Details</h2>
                        <p className="text-industry-gray-600 text-sm">
                          Optional information to help us provide the most accurate quote
                        </p>
                      </div>
                    </div>

                    <FieldGroup>
                      <div className="space-y-6">
                        <Field>
                          <Label>
                            Preferred Material
                            <Tooltip content="We can suggest alternatives based on your application" id="tip-material">
                              <span className="ml-2 text-industry-blue cursor-help">ℹ️</span>
                            </Tooltip>
                          </Label>
                          <Select
                            value={formData.material}
                            onChange={(e) => handleInputChange('material', e.target.value)}
                          >
                            <option value="">Let us recommend based on your design</option>
                            <option value="steel">Steel (Most common for structural)</option>
                            <option value="stainless-steel">Stainless Steel (Corrosion resistant)</option>
                            <option value="aluminum">Aluminum (Lightweight)</option>
                            <option value="copper">Copper (Electrical/thermal)</option>
                            <option value="brass">Brass (Decorative/marine)</option>
                            <option value="other">Other - Discuss in call</option>
                          </Select>
                        </Field>

                        <Field>
                          <Label>
                            Finishing Requirements
                            <Tooltip content="Finishing affects both appearance and durability" id="tip-finish">
                              <span className="ml-2 text-industry-blue cursor-help">ℹ️</span>
                            </Tooltip>
                          </Label>
                          <Select
                            value={formData.finish}
                            onChange={(e) => handleInputChange('finish', e.target.value)}
                          >
                            <option value="">Raw/No finishing needed</option>
                            <option value="powder-coating">Powder Coating (Durable, many colors)</option>
                            <option value="anodizing">Anodizing (Aluminum only)</option>
                            <option value="plating">Plating (Zinc, Chrome, etc.)</option>
                            <option value="painting">Wet Paint</option>
                            <option value="brushed">Brushed Finish</option>
                            <option value="other">Other - Specify in notes</option>
                          </Select>
                        </Field>

                        <Field>
                          <Label>Additional Notes</Label>
                          <Textarea
                            rows={4}
                            value={formData.notes}
                            onChange={(e) => handleInputChange('notes', e.target.value)}
                            placeholder="Any special requirements, tolerances, assembly instructions, or questions? We'll address everything in our discovery call."
                          />
                        </Field>
                      </div>
                    </FieldGroup>

                    {/* Trust Badge */}
                    <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center space-x-3">
                        <span className="text-green-600">🔒</span>
                        <div>
                          <h4 className="font-medium text-green-800 text-sm">Your Information is Secure</h4>
                          <p className="text-xs text-green-700">
                            SSL encrypted transmission. We never share your designs or project details.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Contact Information */}
                {currentStep === 4 && (
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-industry-orange text-xl">👤</span>
                      </div>
                      <div>
                        <h2 className="text-2xl font-semibold text-industry-dark">Contact Information</h2>
                        <p className="text-industry-gray-600 text-sm">
                          We&apos;ll use this to schedule your discovery call within 24 hours
                        </p>
                      </div>
                    </div>

                    <FieldGroup>
                      <div className="grid md:grid-cols-2 gap-6">
                        <Field>
                          <Label>Full Name *</Label>
                          <Input
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            placeholder="Enter your full name"
                            className={errors.name ? 'border-red-500' : ''}
                          />
                          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </Field>

                        <Field>
                          <Label>Email Address *</Label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="Enter your email address"
                            className={errors.email ? 'border-red-500' : ''}
                          />
                          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </Field>

                        <Field>
                          <Label>Company Name *</Label>
                          <Input
                            type="text"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            placeholder="Enter your company name"
                            className={errors.company ? 'border-red-500' : ''}
                          />
                          {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                        </Field>

                        <Field>
                          <Label>Phone Number</Label>
                          <Input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="Enter your phone number"
                          />
                        </Field>
                      </div>
                    </FieldGroup>

                    {/* Privacy Notice */}
                    <div className="mt-6 p-4 bg-industry-blue/5 rounded-lg border border-industry-blue/20">
                      <div className="flex items-start space-x-3">
                        <span className="text-industry-blue">🔒</span>
                        <div>
                          <h4 className="font-medium text-industry-dark text-sm">Your Privacy Matters</h4>
                          <p className="text-xs text-industry-gray-600">
                            Your data is secure and will only be used to process your quote request. 
                            View our <a href="/privacy" className="text-industry-blue hover:underline">privacy policy</a>.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Mini Testimonial */}
                    <div className="mt-6 p-4 bg-industry-orange/5 rounded-lg border border-industry-orange/20">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-industry-orange/20 rounded-full flex items-center justify-center">
                          <span className="text-industry-orange text-sm">👤</span>
                        </div>
                        <div>
                          <p className="text-sm text-industry-gray-700 italic">
                            &quot;Fast response, clear communication. They eliminated our supplier headaches completely.&quot;
                          </p>
                          <p className="text-xs text-industry-gray-500 mt-1">- Procurement Director, Medical Device Company</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-industry-gray-200">
                  <Button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={`px-6 py-3 rounded-lg font-medium ${
                      currentStep === 1
                        ? 'bg-industry-gray-200 text-industry-gray-500 cursor-not-allowed'
                        : 'bg-industry-gray-600 hover:bg-industry-gray-700 text-white'
                    }`}
                  >
                    Previous
                  </Button>

                  {currentStep < 4 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="px-8 py-3 bg-industry-blue hover:bg-industry-blue/90 text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg transform hover:scale-105 focus:ring-4 focus:ring-industry-blue/20"
                      aria-label="Continue to next step"
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="px-10 py-4 bg-industry-orange hover:bg-industry-orange/90 text-white rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-xl transform hover:scale-105 focus:ring-4 focus:ring-industry-orange/20 focus:outline-none"
                      aria-label="Submit quote request"
                    >
                      🚀 Submit Request - Manufacturing Simplified
                    </Button>
                  )}
                </div>
              </div>
            </form>

            {/* Trust Timeline - Always Visible */}
            <div className="mt-8 bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 animate-slide-up">
              <h3 className="text-lg font-semibold text-industry-dark mb-4 text-center">
                What Happens After You Submit
              </h3>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-industry-blue/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-industry-blue font-bold">1</span>
                  </div>
                  <h4 className="font-medium text-industry-dark text-sm">Instant Receipt</h4>
                  <p className="text-xs text-industry-gray-600">Confirmation within minutes</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-industry-orange/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-industry-orange font-bold">2</span>
                  </div>
                  <h4 className="font-medium text-industry-dark text-sm">File Review</h4>
                  <p className="text-xs text-industry-gray-600">Engineering analysis in hours</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-industry-blue/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-industry-blue font-bold">3</span>
                  </div>
                  <h4 className="font-medium text-industry-dark text-sm">Discovery Call</h4>
                  <p className="text-xs text-industry-gray-600">Scheduled within 24 hours</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-industry-orange/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-industry-orange font-bold">4</span>
                  </div>
                  <h4 className="font-medium text-industry-dark text-sm">Precise Quote</h4>
                  <p className="text-xs text-industry-gray-600">Detailed pricing & timeline</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}