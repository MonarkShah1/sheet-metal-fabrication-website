'use client'

import { useState, useEffect } from 'react'
import { FileUploadStep } from './quote-wizard/FileUploadStep'
import { SpecsFormStep } from './quote-wizard/SpecsFormStep'
import { ContactConfirmStep } from './quote-wizard/ContactConfirmStep'
import { InstantResultModal } from './quote-wizard/InstantResultModal'
import { event } from '@/lib/analytics'

interface QuoteData {
  files: File[]
  material: string
  quantity: number
  rush: boolean
  notes: string
  customer: {
    name: string
    email: string
    phone: string
    company: string
  }
  pricing?: {
    lowPrice: number
    highPrice: number
    estLeadDays: number
  }
}

const STORAGE_KEY = 'quote-wizard-progress'

export function QuoteWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [showResults, setShowResults] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [quoteData, setQuoteData] = useState<QuoteData>({
    files: [],
    material: '',
    quantity: 1,
    rush: false,
    notes: '',
    customer: {
      name: '',
      email: '',
      phone: '',
      company: ''
    }
  })

  useEffect(() => {
    // Track quote wizard start
    event({
      action: 'quote_start',
      category: 'Quote Wizard',
      label: 'Wizard Started',
      value: 1
    })

    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setQuoteData(prev => ({ ...prev, ...parsed }))
        setCurrentStep(parsed.currentStep || 1)
        console.log('Restored quote progress:', parsed)
      } catch (e) {
        console.error('Failed to parse saved progress:', e)
      }
    }
  }, [])

  const saveProgress = (data: Partial<QuoteData>, step?: number) => {
    const updated = { ...quoteData, ...data }
    setQuoteData(updated)
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      ...updated,
      currentStep: step || currentStep,
      files: []
    }))
  }

  const nextStep = () => {
    const newStep = currentStep + 1
    setCurrentStep(newStep)
    saveProgress({}, newStep)
    
    event({
      action: 'wizard_step_complete',
      category: 'Quote Wizard',
      label: `Step ${currentStep}`,
      value: currentStep
    })
  }

  const prevStep = () => {
    const newStep = currentStep - 1
    setCurrentStep(newStep)
    saveProgress({}, newStep)
  }

  const submitQuote = async () => {
    console.log('Starting quote submission...', {
      material: quoteData.material,
      quantity: quoteData.quantity,
      customer: quoteData.customer,
      fileCount: quoteData.files.length
    })
    
    setIsSubmitting(true)
    
    try {
      const formData = new FormData()
      
      quoteData.files.forEach((file, index) => {
        formData.append(`file${index}`, file)
        console.log(`Added file ${index}:`, file.name, file.size)
      })
      
      const requestData = {
        material: quoteData.material,
        quantity: quoteData.quantity,
        rush: quoteData.rush,
        notes: quoteData.notes,
        customer: quoteData.customer
      }
      
      console.log('Request data:', requestData)
      formData.append('data', JSON.stringify(requestData))

      const response = await fetch('/api/quote', {
        method: 'POST',
        body: formData
      })

      console.log('Response status:', response.status)

      if (!response.ok) {
        const errorData = await response.json()
        console.error('Quote API error:', errorData)
        throw new Error(errorData.error || 'Failed to submit quote')
      }

      const result = await response.json()
      console.log('Quote submission successful:', result)
      
      setQuoteData(prev => ({
        ...prev,
        pricing: result.pricing
      }))
      
      setShowResults(true)
      localStorage.removeItem(STORAGE_KEY)
      
      event({
        action: 'quote_complete',
        category: 'Quote Wizard',
        label: quoteData.material,
        value: quoteData.quantity
      })
      
    } catch (error) {
      console.error('Quote submission failed:', error)
      alert(`Failed to submit quote: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const getProgressPercentage = () => {
    return Math.round((currentStep / 3) * 100)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-primary-800">Quote Wizard</h2>
          <div className="text-sm text-industrial-600">
            Step {currentStep} of 3
          </div>
        </div>
        
        <div className="w-full bg-industrial-200 rounded-full h-2">
          <div 
            className="bg-primary-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${getProgressPercentage()}%` }}
          />
        </div>
        
        <div className="flex justify-between mt-2 text-sm text-industrial-600">
          <span className={currentStep >= 1 ? 'text-primary-600' : ''}>Upload Files</span>
          <span className={currentStep >= 2 ? 'text-primary-600' : ''}>Specifications</span>
          <span className={currentStep >= 3 ? 'text-primary-600' : ''}>Contact Info</span>
        </div>
      </div>

      <div className="card">
        {currentStep === 1 && (
          <FileUploadStep 
            files={quoteData.files}
            onFilesChange={(files) => saveProgress({ files })}
            onNext={nextStep}
          />
        )}
        
        {currentStep === 2 && (
          <SpecsFormStep 
            material={quoteData.material}
            quantity={quoteData.quantity}
            rush={quoteData.rush}
            notes={quoteData.notes}
            onDataChange={(data) => saveProgress(data)}
            onNext={nextStep}
            onPrev={prevStep}
          />
        )}
        
        {currentStep === 3 && (
          <ContactConfirmStep 
            customer={quoteData.customer}
            onDataChange={(customer) => saveProgress({ customer })}
            onSubmit={submitQuote}
            onPrev={prevStep}
            isSubmitting={isSubmitting}
          />
        )}
      </div>

      {showResults && quoteData.pricing && (
        <InstantResultModal
          pricing={quoteData.pricing}
          material={quoteData.material}
          quantity={quoteData.quantity}
          rush={quoteData.rush}
          onClose={() => setShowResults(false)}
        />
      )}
    </div>
  )
}