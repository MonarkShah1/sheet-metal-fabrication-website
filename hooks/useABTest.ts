'use client'

import { useState, useEffect } from 'react'
import { trackABTest } from '@/lib/analytics'
import { getActiveTest, recordTestResult } from '@/config/ab-tests'

export function useABTest(testName: string) {
  const [variant, setVariant] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const test = getActiveTest(testName)
    if (!test) {
      // Return control variant if test is not active
      setVariant('control')
      return
    }

    // Check for existing variant in sessionStorage
    const storageKey = `ab_test_${testName}`
    const existingVariant = sessionStorage.getItem(storageKey)

    if (existingVariant && test.variants.some(v => v.id === existingVariant)) {
      setVariant(existingVariant)
      trackABTest(testName, existingVariant, window.location.pathname)
      return
    }

    // Select variant based on weights
    const totalWeight = test.variants.reduce((sum, variant) => sum + variant.weight, 0)
    const random = Math.random() * totalWeight
    let currentWeight = 0

    for (const variant of test.variants) {
      currentWeight += variant.weight
      if (random <= currentWeight) {
        setVariant(variant.id)
        sessionStorage.setItem(storageKey, variant.id)
        trackABTest(testName, variant.id, window.location.pathname)
        break
      }
    }
  }, [testName, isClient])

  const trackConversion = (metric: string, value: number = 1) => {
    if (!variant) return
    
    recordTestResult({
      testName,
      variantId: variant,
      metric,
      value,
      timestamp: Date.now()
    })
  }

  return {
    variant,
    isVariant: (variantId: string) => variant === variantId,
    trackConversion,
    isClient
  }
}

// Specialized hooks for common A/B testing scenarios
export function useCTATest(testName: string, defaultText: string = 'Get Quote') {
  const { variant, trackConversion, isClient } = useABTest(testName)
  const test = getActiveTest(testName)
  
  const getText = () => {
    if (!isClient || !variant || !test) return defaultText
    
    const variantConfig = test.variants.find(v => v.id === variant)
    return variantConfig?.text || defaultText
  }

  const trackClick = () => {
    trackConversion('cta_click')
  }

  return {
    text: getText(),
    onClick: trackClick,
    variant,
    isClient
  }
}

export function useHeadlineTest(testName: string, defaultText: string) {
  const { variant, trackConversion, isClient } = useABTest(testName)
  const test = getActiveTest(testName)
  
  const getText = () => {
    if (!isClient || !variant || !test) return defaultText
    
    const variantConfig = test.variants.find(v => v.id === variant)
    return variantConfig?.text || defaultText
  }

  const trackEngagement = () => {
    trackConversion('headline_engagement')
  }

  return {
    text: getText(),
    onView: trackEngagement,
    variant,
    isClient
  }
}