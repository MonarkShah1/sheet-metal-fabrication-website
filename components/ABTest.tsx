'use client'

import { useEffect, useState } from 'react'
import { trackABTest } from '@/lib/analytics'

interface ABTestConfig {
  testName: string
  variants: {
    id: string
    weight: number
    component: React.ReactNode
  }[]
  page?: string
}

interface ABTestProps extends ABTestConfig {
  children?: never
}

export function ABTest({ testName, variants, page }: ABTestProps) {
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    // Check for existing variant in sessionStorage to maintain consistency
    const storageKey = `ab_test_${testName}`
    const existingVariant = sessionStorage.getItem(storageKey)

    if (existingVariant && variants.some(v => v.id === existingVariant)) {
      setSelectedVariant(existingVariant)
      trackABTest(testName, existingVariant, page || window.location.pathname)
      return
    }

    // Select variant based on weights
    const totalWeight = variants.reduce((sum, variant) => sum + variant.weight, 0)
    const random = Math.random() * totalWeight
    let currentWeight = 0

    for (const variant of variants) {
      currentWeight += variant.weight
      if (random <= currentWeight) {
        setSelectedVariant(variant.id)
        sessionStorage.setItem(storageKey, variant.id)
        trackABTest(testName, variant.id, page || window.location.pathname)
        break
      }
    }
  }, [testName, variants, page, isClient])

  if (!isClient || !selectedVariant) {
    // Return the first variant as fallback during SSR
    return <>{variants[0]?.component}</>
  }

  const variant = variants.find(v => v.id === selectedVariant)
  return <>{variant?.component}</>
}

// Pre-configured A/B test components for common scenarios
export function CTAABTest({ 
  testName, 
  href, 
  className = '', 
  variants 
}: {
  testName: string
  href: string
  className?: string
  variants: { id: string, text: string, weight: number }[]
}) {
  return (
    <ABTest
      testName={testName}
      variants={variants.map(variant => ({
        id: variant.id,
        weight: variant.weight,
        component: (
          <a
            href={href}
            className={className}
            onClick={() => trackABTest(testName, variant.id, window.location.pathname)}
          >
            {variant.text}
          </a>
        )
      }))}
    />
  )
}

export function HeadlineABTest({
  testName,
  className = '',
  variants
}: {
  testName: string
  className?: string
  variants: { id: string, text: string, weight: number }[]
}) {
  return (
    <ABTest
      testName={testName}
      variants={variants.map(variant => ({
        id: variant.id,
        weight: variant.weight,
        component: (
          <h1 className={className}>
            {variant.text}
          </h1>
        )
      }))}
    />
  )
}