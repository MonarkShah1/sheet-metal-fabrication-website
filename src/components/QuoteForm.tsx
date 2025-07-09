'use client'

import { useState } from 'react'

export function QuoteForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    projectType: '',
    material: '',
    thickness: '',
    quantity: '',
    files: null as FileList | null,
    company: '',
    name: '',
    email: '',
    phone: '',
    timeline: '',
    notes: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, files: e.target.files }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {step === 1 && (
        <div className="card">
          <h3 className="text-xl font-bold text-primary-800 mb-6">Project Details</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-industrial-700 mb-2">
                Project Type *
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-industrial-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              >
                <option value="">Select project type</option>
                <option value="laser-cutting">Laser Cutting</option>
                <option value="welding">Custom Welding</option>
                <option value="sheet-metal">Sheet Metal Fabrication</option>
                <option value="machining">CNC Machining</option>
                <option value="assembly">Assembly & Finishing</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-industrial-700 mb-2">
                Material *
              </label>
              <select
                name="material"
                value={formData.material}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-industrial-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              >
                <option value="">Select material</option>
                <option value="mild-steel">Mild Steel</option>
                <option value="stainless-steel">Stainless Steel</option>
                <option value="aluminum">Aluminum</option>
                <option value="galvanized">Galvanized Steel</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-industrial-700 mb-2">
                Thickness
              </label>
              <input
                type="text"
                name="thickness"
                value={formData.thickness}
                onChange={handleInputChange}
                placeholder="e.g., 16 ga, 3mm, 1/4 inch"
                className="w-full px-3 py-2 border border-industrial-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-industrial-700 mb-2">
                Quantity *
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                placeholder="Number of pieces"
                className="w-full px-3 py-2 border border-industrial-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-industrial-700 mb-2">
              Upload Files (DXF, DWG, PDF, JPG)
            </label>
            <input
              type="file"
              multiple
              accept=".dxf,.dwg,.pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border border-industrial-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <p className="text-sm text-industrial-500 mt-1">
              Maximum 10MB per file. Supported formats: DXF, DWG, PDF, JPG, PNG
            </p>
          </div>

          <div className="flex justify-end mt-8">
            <button
              type="button"
              onClick={nextStep}
              className="btn-primary"
            >
              Next: Contact Info →
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="card">
          <h3 className="text-xl font-bold text-primary-800 mb-6">Contact Information</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-industrial-700 mb-2">
                Company Name *
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-industrial-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-industrial-700 mb-2">
                Contact Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-industrial-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-industrial-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-industrial-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-industrial-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-industrial-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-industrial-700 mb-2">
                Timeline
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-industrial-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select timeline</option>
                <option value="rush">Rush (1-5 days)</option>
                <option value="standard">Standard (5-10 days)</option>
                <option value="flexible">Flexible (10+ days)</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-industrial-700 mb-2">
              Additional Notes
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              rows={4}
              placeholder="Special requirements, tolerances, finish specifications..."
              className="w-full px-3 py-2 border border-industrial-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={prevStep}
              className="btn-primary bg-industrial-500 hover:bg-industrial-600"
            >
              ← Back
            </button>
            <button
              type="submit"
              className="btn-secondary"
            >
              Get Instant Quote
            </button>
          </div>
        </div>
      )}
    </form>
  )
}