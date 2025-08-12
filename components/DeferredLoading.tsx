'use client'

import { useEffect, useState, ReactNode } from 'react'
import { requestIdleCallback, cancelIdleCallback } from '@/lib/performance'

interface DeferredLoadingProps {
  children: ReactNode
  fallback?: ReactNode
  priority?: 'low' | 'medium' | 'high'
  delay?: number
  condition?: () => boolean
}

export function DeferredLoading({
  children,
  fallback = null,
  priority = 'medium',
  delay = 0,
  condition = () => true,
}: DeferredLoadingProps) {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (!condition()) {
      return
    }

    let timeoutId: NodeJS.Timeout | number | null = null
    let idleCallbackId: number | null = null

    const loadComponent = () => {
      setShouldRender(true)
    }

    // Determine loading strategy based on priority
    switch (priority) {
      case 'high':
        // Load immediately after current render cycle
        timeoutId = setTimeout(loadComponent, delay)
        break
        
      case 'medium':
        // Load when main thread is idle
        idleCallbackId = requestIdleCallback(
          () => {
            timeoutId = setTimeout(loadComponent, delay)
          },
          { timeout: 2000 }
        )
        break
        
      case 'low':
        // Load after significant delay or on user interaction
        const handleUserInteraction = () => {
          loadComponent()
          // Remove listeners after first interaction
          window.removeEventListener('scroll', handleUserInteraction, { passive: true } as any)
          window.removeEventListener('mousemove', handleUserInteraction)
          window.removeEventListener('touchstart', handleUserInteraction)
          window.removeEventListener('click', handleUserInteraction)
        }

        // Add interaction listeners with passive flags where appropriate
        window.addEventListener('scroll', handleUserInteraction, { passive: true })
        window.addEventListener('mousemove', handleUserInteraction)
        window.addEventListener('touchstart', handleUserInteraction, { passive: true })
        window.addEventListener('click', handleUserInteraction)

        // Fallback timeout for low priority components
        timeoutId = setTimeout(loadComponent, Math.max(delay, 3000))
        
        return () => {
          window.removeEventListener('scroll', handleUserInteraction, { passive: true } as any)
          window.removeEventListener('mousemove', handleUserInteraction)
          window.removeEventListener('touchstart', handleUserInteraction)
          window.removeEventListener('click', handleUserInteraction)
        }
        
      default:
        timeoutId = setTimeout(loadComponent, delay)
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      if (idleCallbackId) {
        cancelIdleCallback(idleCallbackId)
      }
    }
  }, [priority, delay, condition])

  if (!shouldRender) {
    return <>{fallback}</>
  }

  return <>{children}</>
}

// Higher-order component for deferred loading
export function withDeferredLoading<P extends {}>(
  Component: React.ComponentType<P>,
  options: Omit<DeferredLoadingProps, 'children'> = {}
) {
  return function DeferredComponent(props: P) {
    return (
      <DeferredLoading {...options}>
        <Component {...props} />
      </DeferredLoading>
    )
  }
}

// Hook for programmatic deferred loading
export function useDeferredLoading(
  priority: DeferredLoadingProps['priority'] = 'medium',
  delay = 0,
  condition: () => boolean = () => true
) {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (!condition()) {
      return
    }

    let timeoutId: NodeJS.Timeout | number | null = null
    let idleCallbackId: number | null = null

    const markReady = () => {
      setIsReady(true)
    }

    switch (priority) {
      case 'high':
        timeoutId = setTimeout(markReady, delay)
        break
        
      case 'medium':
        idleCallbackId = requestIdleCallback(
          () => {
            timeoutId = setTimeout(markReady, delay)
          },
          { timeout: 2000 }
        )
        break
        
      case 'low':
        timeoutId = setTimeout(markReady, Math.max(delay, 3000))
        break
        
      default:
        timeoutId = setTimeout(markReady, delay)
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      if (idleCallbackId) {
        cancelIdleCallback(idleCallbackId)
      }
    }
  }, [priority, delay, condition])

  return isReady
}

// Specific deferred components for common use cases
export const DeferredAnalytics = withDeferredLoading(
  ({ children }: { children: ReactNode }) => <>{children}</>,
  { priority: 'low', delay: 1000 }
)

export const DeferredChatWidget = withDeferredLoading(
  ({ children }: { children: ReactNode }) => <>{children}</>,
  { priority: 'low', delay: 2000 }
)

export const DeferredMap = withDeferredLoading(
  ({ children }: { children: ReactNode }) => <>{children}</>,
  { 
    priority: 'medium', 
    delay: 500,
    condition: () => typeof window !== 'undefined' && window.innerWidth > 768 // Only load on larger screens initially
  }
)

// Network-aware loading
export function NetworkAwareDeferredLoading({
  children,
  fallback = null,
  priority = 'medium',
}: Omit<DeferredLoadingProps, 'delay' | 'condition'>) {
  const [networkInfo, setNetworkInfo] = useState<{
    effectiveType?: string
    saveData?: boolean
  }>({})

  useEffect(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection
      setNetworkInfo({
        effectiveType: connection?.effectiveType,
        saveData: connection?.saveData,
      })

      const updateNetworkInfo = () => {
        setNetworkInfo({
          effectiveType: connection?.effectiveType,
          saveData: connection?.saveData,
        })
      }

      connection?.addEventListener('change', updateNetworkInfo)
      
      return () => {
        connection?.removeEventListener('change', updateNetworkInfo)
      }
    }
  }, [])

  // Adjust loading strategy based on network conditions
  const adjustedPriority = (() => {
    if (networkInfo.saveData) return 'low'
    if (networkInfo.effectiveType === '2g' || networkInfo.effectiveType === 'slow-2g') {
      return 'low'
    }
    if (networkInfo.effectiveType === '3g') {
      return priority === 'high' ? 'medium' : 'low'
    }
    return priority
  })()

  const delay = (() => {
    if (networkInfo.saveData) return 5000
    if (networkInfo.effectiveType === '2g' || networkInfo.effectiveType === 'slow-2g') {
      return 3000
    }
    if (networkInfo.effectiveType === '3g') {
      return 1000
    }
    return 0
  })()

  return (
    <DeferredLoading
      priority={adjustedPriority}
      delay={delay}
      fallback={fallback}
    >
      {children}
    </DeferredLoading>
  )
}