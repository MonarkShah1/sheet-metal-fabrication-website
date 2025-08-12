import { Metadata } from 'next'

/**
 * Metadata caching strategy for performance optimization
 * Reduces computation overhead for frequently accessed pages
 */

interface CacheEntry<T> {
  data: T
  timestamp: number
  ttl: number // Time to live in milliseconds
}

interface MetadataCacheStats {
  hits: number
  misses: number
  totalRequests: number
  hitRate: number
  avgGenerationTime: number
}

class MetadataCache {
  private cache = new Map<string, CacheEntry<Metadata>>()
  private stats: MetadataCacheStats = {
    hits: 0,
    misses: 0,
    totalRequests: 0,
    hitRate: 0,
    avgGenerationTime: 0
  }
  private generationTimes: number[] = []

  /**
   * Generate cache key from parameters
   */
  private generateKey(type: string, identifier: string, variant?: string): string {
    return `${type}:${identifier}${variant ? `:${variant}` : ''}`
  }

  /**
   * Check if cache entry is still valid
   */
  private isValid(entry: CacheEntry<Metadata>): boolean {
    return Date.now() - entry.timestamp < entry.ttl
  }

  /**
   * Get metadata from cache
   */
  get<T extends Metadata>(type: string, identifier: string, variant?: string): T | null {
    const key = this.generateKey(type, identifier, variant)
    const entry = this.cache.get(key)
    
    this.stats.totalRequests++
    
    if (entry && this.isValid(entry)) {
      this.stats.hits++
      this.updateHitRate()
      return entry.data as T
    }
    
    this.stats.misses++
    this.updateHitRate()
    
    // Clean up expired entry
    if (entry) {
      this.cache.delete(key)
    }
    
    return null
  }

  /**
   * Set metadata in cache
   */
  set(
    type: string, 
    identifier: string, 
    metadata: Metadata, 
    ttl: number = 3600000, // 1 hour default
    variant?: string
  ): void {
    const key = this.generateKey(type, identifier, variant)
    
    this.cache.set(key, {
      data: metadata,
      timestamp: Date.now(),
      ttl
    })
  }

  /**
   * Get or generate metadata with automatic caching
   */
  async getOrGenerate<T extends Metadata>(
    type: string,
    identifier: string,
    generator: () => Promise<T> | T,
    ttl: number = 3600000,
    variant?: string
  ): Promise<T> {
    // Try cache first
    const cached = this.get<T>(type, identifier, variant)
    if (cached) return cached

    // Generate new metadata
    const startTime = Date.now()
    const metadata = await generator()
    const generationTime = Date.now() - startTime
    
    // Track performance
    this.generationTimes.push(generationTime)
    if (this.generationTimes.length > 100) {
      this.generationTimes.shift() // Keep last 100 measurements
    }
    this.updateAvgGenerationTime()

    // Cache the result
    this.set(type, identifier, metadata, ttl, variant)
    
    return metadata
  }

  /**
   * Clear specific cache entry
   */
  clear(type: string, identifier: string, variant?: string): void {
    const key = this.generateKey(type, identifier, variant)
    this.cache.delete(key)
  }

  /**
   * Clear all cache entries of a specific type
   */
  clearType(type: string): void {
    const keys = Array.from(this.cache.keys())
    for (const key of keys) {
      if (key.startsWith(`${type}:`)) {
        this.cache.delete(key)
      }
    }
  }

  /**
   * Clear entire cache
   */
  clearAll(): void {
    this.cache.clear()
    this.resetStats()
  }

  /**
   * Get cache statistics
   */
  getStats(): MetadataCacheStats {
    return { ...this.stats }
  }

  /**
   * Get current cache size
   */
  getCacheSize(): number {
    return this.cache.size
  }

  /**
   * Clean up expired entries
   */
  cleanup(): number {
    let cleaned = 0
    const now = Date.now()
    const entries = Array.from(this.cache.entries())
    
    for (const [key, entry] of entries) {
      if (now - entry.timestamp >= entry.ttl) {
        this.cache.delete(key)
        cleaned++
      }
    }
    
    return cleaned
  }

  private updateHitRate(): void {
    this.stats.hitRate = this.stats.totalRequests > 0 
      ? (this.stats.hits / this.stats.totalRequests) * 100 
      : 0
  }

  private updateAvgGenerationTime(): void {
    if (this.generationTimes.length === 0) {
      this.stats.avgGenerationTime = 0
      return
    }
    
    const sum = this.generationTimes.reduce((a, b) => a + b, 0)
    this.stats.avgGenerationTime = sum / this.generationTimes.length
  }

  private resetStats(): void {
    this.stats = {
      hits: 0,
      misses: 0,
      totalRequests: 0,
      hitRate: 0,
      avgGenerationTime: 0
    }
    this.generationTimes = []
  }
}

// Global cache instance
export const metadataCache = new MetadataCache()

/**
 * Cache TTL constants for different content types
 */
export const CacheTTL = {
  STATIC_PAGES: 86400000,    // 24 hours - rarely change
  SERVICE_PAGES: 43200000,   // 12 hours - occasionally updated
  LOCATION_PAGES: 21600000,  // 6 hours - might have local updates
  BLOG_POSTS: 7200000,       // 2 hours - content may be updated
  DYNAMIC_CONTENT: 3600000,  // 1 hour - frequently changing
  REALTIME: 300000,          // 5 minutes - very dynamic
  NO_CACHE: 0                // Never cache
} as const

/**
 * Cached metadata generators for common page types
 */
export class CachedMetadataGenerators {
  /**
   * Generate cached service metadata
   */
  static async generateServiceMetadata(
    serviceSlug: string,
    generator: () => Metadata | Promise<Metadata>
  ): Promise<Metadata> {
    return metadataCache.getOrGenerate(
      'service',
      serviceSlug,
      generator,
      CacheTTL.SERVICE_PAGES
    )
  }

  /**
   * Generate cached location metadata
   */
  static async generateLocationMetadata(
    locationSlug: string,
    generator: () => Metadata | Promise<Metadata>
  ): Promise<Metadata> {
    return metadataCache.getOrGenerate(
      'location',
      locationSlug,
      generator,
      CacheTTL.LOCATION_PAGES
    )
  }

  /**
   * Generate cached blog post metadata
   */
  static async generateBlogMetadata(
    postSlug: string,
    generator: () => Metadata | Promise<Metadata>
  ): Promise<Metadata> {
    return metadataCache.getOrGenerate(
      'blog',
      postSlug,
      generator,
      CacheTTL.BLOG_POSTS
    )
  }

  /**
   * Generate cached industry metadata
   */
  static async generateIndustryMetadata(
    industrySlug: string,
    generator: () => Metadata | Promise<Metadata>
  ): Promise<Metadata> {
    return metadataCache.getOrGenerate(
      'industry',
      industrySlug,
      generator,
      CacheTTL.SERVICE_PAGES
    )
  }
}

/**
 * Performance monitoring for metadata generation
 */
export class MetadataPerformanceMonitor {
  private static instance: MetadataPerformanceMonitor
  private performanceThresholds = {
    warning: 100,  // ms
    critical: 500  // ms
  }

  static getInstance(): MetadataPerformanceMonitor {
    if (!this.instance) {
      this.instance = new MetadataPerformanceMonitor()
    }
    return this.instance
  }

  /**
   * Monitor metadata generation performance
   */
  async measureGeneration<T>(
    operation: string,
    generator: () => Promise<T> | T
  ): Promise<T> {
    const startTime = performance.now()
    const result = await generator()
    const duration = performance.now() - startTime

    // Log performance if needed
    if (duration > this.performanceThresholds.critical) {
      console.warn(`Slow metadata generation for ${operation}: ${duration.toFixed(2)}ms`)
    } else if (duration > this.performanceThresholds.warning) {
      console.info(`Metadata generation for ${operation}: ${duration.toFixed(2)}ms`)
    }

    return result
  }

  /**
   * Get performance recommendations
   */
  getRecommendations(stats: MetadataCacheStats): string[] {
    const recommendations: string[] = []

    if (stats.hitRate < 70) {
      recommendations.push('Consider increasing cache TTL for better hit rates')
    }

    if (stats.avgGenerationTime > 100) {
      recommendations.push('Optimize metadata generation functions - average time is high')
    }

    if (stats.totalRequests > 1000 && metadataCache.getCacheSize() < 50) {
      recommendations.push('Consider increasing cache size or TTL')
    }

    return recommendations
  }
}

/**
 * Cache warming strategies for common pages
 */
export class CacheWarmer {
  /**
   * Warm cache for essential pages
   */
  static async warmEssentialPages(): Promise<void> {
    const essentialPages = [
      { type: 'page', id: 'home' },
      { type: 'page', id: 'services' },
      { type: 'page', id: 'about' },
      { type: 'page', id: 'contact' }
    ]

    // Warm cache in background
    setTimeout(async () => {
      for (const page of essentialPages) {
        try {
          // This would be implemented with actual metadata generators
          console.log(`Warming cache for ${page.type}:${page.id}`)
        } catch (error) {
          console.error(`Failed to warm cache for ${page.type}:${page.id}`, error)
        }
      }
    }, 1000) // Delay to not impact initial page load
  }

  /**
   * Warm cache for location pages
   */
  static async warmLocationPages(locationSlugs: string[]): Promise<void> {
    setTimeout(async () => {
      for (const slug of locationSlugs) {
        try {
          console.log(`Warming cache for location:${slug}`)
          // Implementation would use actual location metadata generator
        } catch (error) {
          console.error(`Failed to warm cache for location:${slug}`, error)
        }
      }
    }, 2000)
  }
}

/**
 * Automatic cache maintenance
 */
export function startCacheMaintenance(): void {
  // Clean up expired entries every 10 minutes
  setInterval(() => {
    const cleaned = metadataCache.cleanup()
    if (cleaned > 0) {
      console.log(`Cleaned up ${cleaned} expired metadata cache entries`)
    }
  }, 600000) // 10 minutes

  // Log cache statistics every hour
  setInterval(() => {
    const stats = metadataCache.getStats()
    const monitor = MetadataPerformanceMonitor.getInstance()
    const recommendations = monitor.getRecommendations(stats)
    
    console.log('Metadata Cache Stats:', stats)
    if (recommendations.length > 0) {
      console.log('Performance Recommendations:', recommendations)
    }
  }, 3600000) // 1 hour
}

/**
 * Usage examples and best practices
 */
export const cacheUsageExamples = {
  basic: `
    // Basic cached metadata generation
    const metadata = await CachedMetadataGenerators.generateServiceMetadata(
      'laser-cutting',
      () => generateServiceMetadata('laser-cutting')
    )
  `,
  
  custom: `
    // Custom caching with specific TTL
    const metadata = await metadataCache.getOrGenerate(
      'custom-page',
      'special-landing',
      () => generateSpecialPageMetadata(),
      CacheTTL.DYNAMIC_CONTENT
    )
  `,
  
  performance: `
    // Performance monitoring
    const monitor = MetadataPerformanceMonitor.getInstance()
    const metadata = await monitor.measureGeneration(
      'service-laser-cutting',
      () => generateServiceMetadata('laser-cutting')
    )
  `
}

// Initialize cache maintenance on module load (only in production)
if (typeof window === 'undefined' && process.env.NODE_ENV === 'production') {
  startCacheMaintenance()
}