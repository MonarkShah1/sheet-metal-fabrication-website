'use client'

import { useState } from 'react'

interface SpecsFormStepProps {
  material: string
  quantity: number
  rush: boolean
  notes: string
  onDataChange: (data: Partial<{
    material: string
    quantity: number
    rush: boolean
    notes: string
  }>) => void
  onNext: () => void
  onPrev: () => void
}

const MATERIALS = [
  { value: 'mild-steel', label: 'Mild Steel', popular: true },
  { value: 'stainless-steel-304', label: 'Stainless Steel 304', popular: true },
  { value: 'stainless-steel-316', label: 'Stainless Steel 316', popular: false },
  { value: 'aluminum-6061', label: 'Aluminum 6061', popular: true },
  { value: 'aluminum-5052', label: 'Aluminum 5052', popular: false },
  { value: 'galvanized-steel', label: 'Galvanized Steel', popular: true },
  { value: 'copper', label: 'Copper', popular: false },
  { value: 'brass', label: 'Brass', popular: false },
  { value: 'other', label: 'Other (specify in notes)', popular: false }
]

const QUANTITY_TIERS = [
  { min: 1, max: 10, label: '1-10 pieces' },
  { min: 11, max: 50, label: '11-50 pieces' },
  { min: 51, max: 100, label: '51-100 pieces' },
  { min: 101, max: 500, label: '101-500 pieces' },
  { min: 501, max: 1000, label: '501-1000 pieces' },
  { min: 1001, max: 999999, label: '1000+ pieces' }
]

export function SpecsFormStep({ 
  material, 
  quantity, 
  rush, 
  notes, 
  onDataChange, 
  onNext, 
  onPrev 
}: SpecsFormStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showCustomQuantity, setShowCustomQuantity] = useState(false)
  
  const handleMaterialChange = (value: string) => {
    onDataChange({ material: value })
    if (errors.material) {
      setErrors(prev => ({ ...prev, material: '' }))
    }
  }

  const handleQuantityTierSelect = (min: number) => {
    setShowCustomQuantity(false)
    onDataChange({ quantity: min })
    if (errors.quantity) {
      setErrors(prev => ({ ...prev, quantity: '' }))
    }
  }

  const handleCustomQuantityChange = (value: string) => {
    const num = parseInt(value)
    if (!isNaN(num) && num > 0) {
      onDataChange({ quantity: num })
      if (errors.quantity) {
        setErrors(prev => ({ ...prev, quantity: '' }))
      }
    }
  }

  const handleNotesChange = (value: string) => {
    onDataChange({ notes: value })
  }

  const handleRushChange = (checked: boolean) => {
    onDataChange({ rush: checked })
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    
    if (!material) {
      newErrors.material = 'Please select a material'
    }
    
    if (!quantity || quantity < 1) {
      newErrors.quantity = 'Please specify a valid quantity'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validate()) {
      onNext()
    }
  }

  const selectedTier = QUANTITY_TIERS.find(tier => quantity >= tier.min && quantity <= tier.max)
  const isCustomQuantity = !selectedTier || showCustomQuantity

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-primary-800 mb-2">Project Specifications</h3>
        <p className="text-industrial-600 mb-6">
          Tell us about your material and quantity requirements for accurate pricing.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-industrial-700 mb-3">
            Material *
          </label>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {MATERIALS.filter(m => m.popular).map((mat) => (
              <button
                key={mat.value}
                type="button"
                onClick={() => handleMaterialChange(mat.value)}
                className={`p-3 text-left border rounded-lg transition-colors ${
                  material === mat.value
                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                    : 'border-industrial-300 hover:border-primary-400'
                }`}
              >
                <div className="font-medium">{mat.label}</div>
                <div className="text-sm text-industrial-500">Popular choice</div>
              </button>
            ))}
          </div>
          
          <details className="mt-4">
            <summary className="cursor-pointer text-sm text-primary-600 hover:text-primary-700">
              Show more materials
            </summary>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              {MATERIALS.filter(m => !m.popular).map((mat) => (
                <button
                  key={mat.value}
                  type="button"
                  onClick={() => handleMaterialChange(mat.value)}
                  className={`p-3 text-left border rounded-lg transition-colors ${
                    material === mat.value
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-industrial-300 hover:border-primary-400'
                  }`}
                >
                  <div className="font-medium">{mat.label}</div>
                </button>
              ))}
            </div>
          </details>
          
          {errors.material && (
            <p className="mt-2 text-sm text-red-600">{errors.material}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-industrial-700 mb-3">
            Quantity *
          </label>
          
          <div className="space-y-3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {QUANTITY_TIERS.map((tier) => (
                <button
                  key={`${tier.min}-${tier.max}`}
                  type="button"
                  onClick={() => handleQuantityTierSelect(tier.min)}
                  className={`p-3 text-center border rounded-lg transition-colors ${
                    selectedTier === tier && !isCustomQuantity
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-industrial-300 hover:border-primary-400'
                  }`}
                >
                  <div className="font-medium text-sm">{tier.label}</div>
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={() => setShowCustomQuantity(!showCustomQuantity)}
                className={`px-3 py-2 text-sm border rounded-lg transition-colors ${
                  isCustomQuantity
                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                    : 'border-industrial-300 hover:border-primary-400'
                }`}
              >
                Custom quantity
              </button>
              
              {isCustomQuantity && (
                <input
                  type="number"
                  min="1"
                  value={quantity || ''}
                  onChange={(e) => handleCustomQuantityChange(e.target.value)}
                  placeholder="Enter quantity"
                  className="w-32 px-3 py-2 border border-industrial-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              )}
            </div>
          </div>
          
          {errors.quantity && (
            <p className="mt-2 text-sm text-red-600">{errors.quantity}</p>
          )}
        </div>

        <div>
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="rush"
              checked={rush}
              onChange={(e) => handleRushChange(e.target.checked)}
              className="w-4 h-4 text-primary-600 border-industrial-300 rounded focus:ring-primary-500"
            />
            <label htmlFor="rush" className="text-sm font-medium text-industrial-700">
              Need 24-hour turnaround (rush order)
            </label>
          </div>
          <p className="text-sm text-industrial-500 mt-1 ml-7">
            Rush orders include additional fees but guarantee next-day completion for simple parts.
          </p>
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-industrial-700 mb-2">
            Additional Notes
          </label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => handleNotesChange(e.target.value)}
            rows={4}
            placeholder="Special requirements, tolerances, finish specifications, or any other details..."
            className="w-full px-3 py-2 border border-industrial-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <p className="text-sm text-industrial-500 mt-1">
            The more details you provide, the more accurate your quote will be.
          </p>
        </div>
      </div>

      <div className="bg-industrial-50 rounded-lg p-4">
        <h4 className="font-medium text-industrial-700 mb-2">📊 Quick Estimate Preview:</h4>
        <div className="text-sm text-industrial-600 space-y-1">
          <div>Material: {material ? MATERIALS.find(m => m.value === material)?.label : 'Not selected'}</div>
          <div>Quantity: {quantity ? `${quantity} pieces` : 'Not specified'}</div>
          <div>Timeline: {rush ? 'Rush (24 hours)' : 'Standard (5-10 days)'}</div>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onPrev}
          className="btn-primary bg-industrial-500 hover:bg-industrial-600"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="btn-primary"
        >
          Next: Contact Info →
        </button>
      </div>
    </div>
  )
}