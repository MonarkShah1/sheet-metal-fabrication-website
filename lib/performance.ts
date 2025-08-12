// Performance utility functions for JavaScript optimization

// Debounce function - delays function execution until after wait time
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate?: boolean
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      if (!immediate) func(...args)
    }
    
    const callNow = immediate && !timeout
    
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    
    if (callNow) func(...args)
  }
}

// Throttle function - limits function calls to once per wait time
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, wait)
    }
  }
}

// Request Idle Callback polyfill
export function requestIdleCallback(
  callback: (deadline: { timeRemaining: () => number }) => void,
  options?: { timeout?: number }
): number {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    return window.requestIdleCallback(callback, options)
  }
  
  // Fallback for browsers that don't support requestIdleCallback
  const start = Date.now()
  return (setTimeout(() => {
    callback({
      timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start))
      }
    })
  }, 1) as unknown) as number
}

// Cancel idle callback polyfill
export function cancelIdleCallback(id: number): void {
  if (typeof window !== 'undefined' && 'cancelIdleCallback' in window) {
    window.cancelIdleCallback(id)
  } else {
    clearTimeout(id)
  }
}

// Lazy load images with IntersectionObserver
export function createImageObserver(
  callback?: (img: HTMLImageElement) => void
): IntersectionObserver {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    // Return mock observer for SSR or unsupported browsers
    return {
      observe: () => {},
      unobserve: () => {},
      disconnect: () => {},
    } as any
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          
          // Load the image
          if (img.dataset.src) {
            img.src = img.dataset.src
            img.removeAttribute('data-src')
          }
          
          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset
            img.removeAttribute('data-srcset')
          }
          
          // Add loaded class for styling
          img.classList.add('loaded')
          
          // Call callback if provided
          if (callback) {
            callback(img)
          }
          
          // Stop observing this image
          observer.unobserve(img)
        }
      })
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.01,
    }
  )
  
  return observer
}

// Event delegation helper
export function delegateEvent<T extends keyof HTMLElementEventMap>(
  container: HTMLElement | Document,
  eventType: T,
  selector: string,
  handler: (event: HTMLElementEventMap[T] & { delegateTarget: Element }) => void
): () => void {
  const delegatedHandler = (event: HTMLElementEventMap[T]) => {
    const target = event.target as Element
    const match = target.closest(selector)
    
    if (match && container.contains(match)) {
      const augmentedEvent = event as HTMLElementEventMap[T] & { delegateTarget: Element }
      augmentedEvent.delegateTarget = match
      handler(augmentedEvent)
    }
  }
  
  container.addEventListener(eventType, delegatedHandler as EventListener, {
    passive: eventType === 'touchstart' || eventType === 'wheel' || eventType === 'scroll'
  })
  
  // Return cleanup function
  return () => {
    container.removeEventListener(eventType, delegatedHandler as EventListener)
  }
}

// Performance mark and measure helpers
export function markPerformance(name: string): void {
  if (typeof performance !== 'undefined' && performance.mark) {
    performance.mark(name)
  }
}

export function measurePerformance(
  measureName: string,
  startMark: string,
  endMark?: string
): void {
  if (typeof performance !== 'undefined' && performance.measure) {
    try {
      if (endMark) {
        performance.measure(measureName, startMark, endMark)
      } else {
        performance.measure(measureName, startMark)
      }
    } catch (error) {
      // Handle cases where marks don't exist
      console.warn('Performance measurement failed:', error)
    }
  }
}

// Bundle size budget checker (development only)
export function checkBundleSize(budgets: Record<string, number>): void {
  if (process.env.NODE_ENV !== 'development') return
  
  // This would be used with webpack-bundle-analyzer data
  console.group('Bundle Size Check')
  Object.entries(budgets).forEach(([chunk, budget]) => {
    console.log(`${chunk}: Budget ${budget}KB`)
  })
  console.groupEnd()
}

// Critical resource detector
export function getCriticalResources(): string[] {
  if (typeof window === 'undefined' || !performance.getEntriesByType) {
    return []
  }
  
  const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[]
  const critical: string[] = []
  
  resources.forEach((resource) => {
    // Resources that block rendering or are loaded very early
    const renderBlockingStatus = (resource as any).renderBlockingStatus
    if (
      renderBlockingStatus === 'blocking' ||
      resource.startTime < 1000 // Loaded within first second
    ) {
      critical.push(resource.name)
    }
  })
  
  return critical
}