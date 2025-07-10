import { NextRequest, NextResponse } from 'next/server'
import { calculatePricing } from '@/lib/pricing'

const ACCEPTED_TYPES = ['dxf', 'dwg', 'step', 'stp', 'pdf', 'ai']
const MAX_FILE_SIZE = 50 * 1024 * 1024 // 50MB
const MAX_FILES = 5

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const dataString = formData.get('data') as string
    
    if (!dataString) {
      return NextResponse.json(
        { error: 'Quote data is required' },
        { status: 400 }
      )
    }

    const data = JSON.parse(dataString)
    const { material, quantity, rush, customer } = data

    if (!material || !quantity || !customer.name || !customer.email || !customer.company) {
      return NextResponse.json(
        { error: 'Material, quantity, and customer information are required' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(customer.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    if (quantity < 1 || quantity > 10000) {
      return NextResponse.json(
        { error: 'Quantity must be between 1 and 10,000' },
        { status: 400 }
      )
    }

    const files: { name: string; size: number; type: string }[] = []
    const fileEntries = Array.from(formData.values()).filter((value) => value instanceof File) as File[]
    
    if (fileEntries.length > MAX_FILES) {
      return NextResponse.json(
        { error: `Maximum ${MAX_FILES} files allowed` },
        { status: 400 }
      )
    }

    for (const file of fileEntries) {
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: `File ${file.name} exceeds maximum size of 50MB` },
          { status: 400 }
        )
      }

      const extension = file.name.split('.').pop()?.toLowerCase()
      if (!extension || !ACCEPTED_TYPES.includes(extension)) {
        return NextResponse.json(
          { error: `File ${file.name} has unsupported format` },
          { status: 400 }
        )
      }

      files.push({
        name: file.name,
        size: file.size,
        type: file.type
      })
    }

    const pricing = calculatePricing({
      material,
      quantity,
      rush,
      fileCount: files.length,
      hasComplexFiles: files.some(f => ['dxf', 'dwg', 'step', 'stp'].includes(f.name.split('.').pop()?.toLowerCase() || ''))
    })

    const quoteId = `Q-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`

    console.log('Quote request received:', {
      quoteId,
      customer: customer.email,
      material,
      quantity,
      rush,
      fileCount: files.length,
      pricing
    })

    return NextResponse.json({
      success: true,
      quoteId,
      pricing,
      message: 'Quote generated successfully. A detailed quote will be emailed within 4 hours.'
    })

  } catch (error) {
    console.error('Quote API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}