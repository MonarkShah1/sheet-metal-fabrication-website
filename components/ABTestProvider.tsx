'use client'

import { useEffect } from 'react'
import { initializeUserEngagementTracking } from '@/lib/analytics'

export function ABTestProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize user engagement tracking for A/B tests
    initializeUserEngagementTracking()
  }, [])

  return <>{children}</>
}