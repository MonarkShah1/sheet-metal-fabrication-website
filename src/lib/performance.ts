export const performanceConfig = {
  javascriptBudget: 150 * 1024, // 150KB limit
  imageBudget: 500 * 1024, // 500KB per image
  totalBudget: 1024 * 1024, // 1MB total
}

export function reportWebVitals(metric: any) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    })
  }
}

export function generateBlurDataURL(width: number, height: number): string {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  
  if (!ctx) return ''
  
  ctx.fillStyle = '#f1f3f4'
  ctx.fillRect(0, 0, width, height)
  
  return canvas.toDataURL()
}

export function lazyLoadImages() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          img.src = img.dataset.src || ''
          img.classList.remove('lazy')
          imageObserver.unobserve(img)
        }
      })
    })

    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserver.observe(img)
    })
  }
}

export function preloadCriticalResources() {
  const criticalResources = [
    '/fonts/inter-latin-400.woff2',
    '/fonts/inter-latin-600.woff2',
    '/images/hero-bg.webp'
  ]

  criticalResources.forEach((resource) => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = resource
    
    if (resource.includes('font')) {
      link.as = 'font'
      link.type = 'font/woff2'
      link.crossOrigin = 'anonymous'
    } else if (resource.includes('image')) {
      link.as = 'image'
    }
    
    document.head.appendChild(link)
  })
}