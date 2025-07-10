'use client'

import { useState, useRef } from 'react'
import { event } from '@/lib/analytics'

interface FileUploadStepProps {
  files: File[]
  onFilesChange: (files: File[]) => void
  onNext: () => void
}

const ACCEPTED_TYPES = ['.dxf', '.dwg', '.step', '.stp', '.pdf', '.ai']
const MAX_FILE_SIZE = 50 * 1024 * 1024 // 50MB
const MAX_FILES = 5

export function FileUploadStep({ files, onFilesChange, onNext }: FileUploadStepProps) {
  const [dragOver, setDragOver] = useState(false)
  const [errors, setErrors] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const validateFiles = (newFiles: FileList): File[] => {
    const validFiles: File[] = []
    const newErrors: string[] = []

    Array.from(newFiles).forEach((file) => {
      if (file.size > MAX_FILE_SIZE) {
        newErrors.push(`${file.name} is too large (max 50MB)`)
        return
      }

      const extension = '.' + file.name.split('.').pop()?.toLowerCase()
      if (!ACCEPTED_TYPES.includes(extension)) {
        newErrors.push(`${file.name} is not a supported file type`)
        return
      }

      if (files.length + validFiles.length >= MAX_FILES) {
        newErrors.push(`Maximum ${MAX_FILES} files allowed`)
        return
      }

      validFiles.push(file)
    })

    setErrors(newErrors)
    return validFiles
  }

  const handleFileSelect = (selectedFiles: FileList) => {
    const validFiles = validateFiles(selectedFiles)
    if (validFiles.length > 0) {
      const updatedFiles = [...files, ...validFiles]
      onFilesChange(updatedFiles)
      
      event({
        action: 'file_upload',
        category: 'Quote Wizard',
        label: `${validFiles.length} files`,
        value: validFiles.length
      })
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    
    if (e.dataTransfer.files) {
      handleFileSelect(e.dataTransfer.files)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFileSelect(e.target.files)
    }
  }

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index)
    onFilesChange(updatedFiles)
  }

  const formatFileSize = (bytes: number) => {
    const mb = bytes / (1024 * 1024)
    return mb < 1 ? `${Math.round(bytes / 1024)}KB` : `${mb.toFixed(1)}MB`
  }

  const canProceed = files.length > 0 || true // Allow proceeding without files for now

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-primary-800 mb-2">Upload Your Files</h3>
        <p className="text-industrial-600 mb-6">
          Upload your drawings, specifications, or reference files to get accurate pricing.
        </p>
      </div>

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragOver
            ? 'border-primary-500 bg-primary-50'
            : 'border-industrial-300 hover:border-primary-400'
        }`}
      >
        <div className="space-y-4">
          <div className="text-4xl">📁</div>
          <div>
            <p className="text-lg font-medium text-industrial-700">
              Drag & drop files here, or{' '}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="text-primary-600 hover:text-primary-700 underline"
              >
                browse files
              </button>
            </p>
            <p className="text-sm text-industrial-500 mt-2">
              Supported formats: {ACCEPTED_TYPES.join(', ')} • Max 50MB per file • Up to {MAX_FILES} files
            </p>
          </div>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={ACCEPTED_TYPES.join(',')}
          onChange={handleFileInputChange}
          className="hidden"
          aria-label="Upload files"
        />
      </div>

      {errors.length > 0 && (
        <div className="space-y-2">
          {errors.map((error, index) => (
            <div key={index} className="text-red-600 text-sm flex items-center">
              <span className="mr-2">⚠️</span>
              {error}
            </div>
          ))}
        </div>
      )}

      {files.length > 0 && (
        <div className="space-y-3">
          <h4 className="font-medium text-industrial-700">Uploaded Files ({files.length})</h4>
          {files.map((file, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-industrial-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">📄</div>
                <div>
                  <p className="font-medium text-industrial-700">{file.name}</p>
                  <p className="text-sm text-industrial-500">{formatFileSize(file.size)}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="text-red-600 hover:text-red-700 p-1"
                aria-label={`Remove ${file.name}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="bg-industrial-50 rounded-lg p-4">
        <h4 className="font-medium text-industrial-700 mb-2">💡 Pro Tips:</h4>
        <ul className="text-sm text-industrial-600 space-y-1">
          <li>• Include all views and dimensions for accurate pricing</li>
          <li>• DXF and STEP files provide the most accurate quotes</li>
          <li>• You can always add more files later via email</li>
        </ul>
      </div>

      <div className="flex justify-between items-center pt-4">
        <div className="text-sm text-industrial-600">
          {files.length === 0 ? 'No files required to continue' : `${files.length} file${files.length > 1 ? 's' : ''} uploaded`}
        </div>
        <button
          type="button"
          onClick={onNext}
          disabled={!canProceed}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next: Specifications →
        </button>
      </div>
    </div>
  )
}