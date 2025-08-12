'use client'

import dynamic from 'next/dynamic'
import React, { ComponentType, ReactElement } from 'react'

// Loading fallbacks for heavy components
export function MapSkeleton() {
  return (
    <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center animate-pulse">
      <div className="text-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full mb-4 mx-auto animate-pulse"></div>
        <div className="text-gray-500 text-sm">Loading interactive map...</div>
      </div>
    </div>
  )
}

export function FormSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
      </div>
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
      </div>
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="h-24 bg-gray-200 rounded"></div>
      </div>
      <div className="h-12 bg-primary-200 rounded w-full"></div>
    </div>
  )
}

export function ChartSkeleton() {
  return (
    <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center animate-pulse">
      <div className="text-center">
        <div className="w-16 h-16 bg-gray-300 rounded mb-4 mx-auto animate-pulse"></div>
        <div className="text-gray-500 text-sm">Loading chart...</div>
      </div>
    </div>
  )
}

// Dynamic imports with proper loading states
export const DynamicInteractiveMap = dynamic(
  () => import('./map/InteractiveMap'),
  {
    loading: () => <MapSkeleton />,
    ssr: false, // Maps should not render on server
  }
)

export const DynamicCampaignQuoteForm = dynamic(
  () => import('./quote/CampaignQuoteForm').then(mod => mod.CampaignQuoteForm),
  {
    loading: () => <FormSkeleton />,
    ssr: true, // Forms can be server-rendered for SEO
  }
)

export const DynamicABTestDashboard = dynamic(
  () => import('./ABTestDashboard'),
  {
    loading: () => <div className="animate-pulse h-32 bg-gray-100 rounded"></div>,
    ssr: false, // Dashboard is client-only
  }
)

// Dynamic imports for industry-specific components (loaded on-demand)
export const DynamicIndustryCapabilities = dynamic(
  () => import('./industries/IndustryCapabilities').then(mod => ({ default: mod.default || mod })),
  {
    loading: () => (
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded w-1/2"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-24 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    ),
    ssr: true,
  }
)

export const DynamicIndustryProcess = dynamic(
  () => import('./industries/IndustryProcess').then(mod => ({ default: mod.default || mod })),
  {
    loading: () => (
      <div className="animate-pulse space-y-6">
        <div className="h-8 bg-gray-200 rounded w-1/2"></div>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0"></div>
              <div className="space-y-2 flex-1">
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    ssr: true,
  }
)

// Conditional loading based on user interaction
export const DynamicServiceAreaMap = dynamic(
  () => import('./locations/ServiceAreaMap').then(mod => ({ default: mod.default || mod })),
  {
    loading: () => <MapSkeleton />,
    ssr: false,
  }
)

// Heavy third-party integrations that should be lazy loaded
// Note: These components don't exist yet, so we create placeholder implementations
export const DynamicChatWidget = dynamic(
  () => Promise.resolve({ default: () => null }),
  {
    loading: () => null,
    ssr: false,
  }
)

// Analytics components that don't need to block rendering
export const DynamicAnalyticsDashboard = dynamic(
  () => Promise.resolve({ default: () => null }),
  {
    loading: () => null,
    ssr: false,
  }
)

// Higher-order component for conditional dynamic loading
export function withConditionalLoading<P extends {}>(
  Component: ComponentType<P>,
  condition: () => boolean,
  fallback?: ReactElement
) {
  return function ConditionalComponent(props: P) {
    if (!condition()) {
      return fallback || null
    }
    return <Component {...props} />
  }
}

// Hook for lazy loading based on intersection
export function useLazyComponent<P extends {}>(
  importFn: () => Promise<{ default: ComponentType<P> }>,
  triggerRef: React.RefObject<Element>
) {
  const [Component, setComponent] = React.useState<ComponentType<P> | null>(null)
  
  React.useEffect(() => {
    if (!triggerRef.current) return
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !Component) {
            importFn().then((module) => {
              setComponent(() => module.default)
            })
            observer.disconnect()
          }
        })
      },
      { rootMargin: '50px' }
    )
    
    observer.observe(triggerRef.current)
    
    return () => observer.disconnect()
  }, [importFn, triggerRef, Component])
  
  return Component
}