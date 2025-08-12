'use client'

import { useEffect, useRef, useState } from 'react'
import { createImageObserver } from '../lib/performance'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  srcSet?: string
  sizes?: string
  priority?: boolean
  placeholder?: string
  onLoad?: () => void
  onError?: () => void
}

export function LazyImage({
  src,
  alt,
  className = '',
  width,
  height,
  srcSet,
  sizes,
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjRjNGNEY2Ii8+Cjwvc3ZnPgo=',
  onLoad,
  onError,
}: LazyImageProps) {
  const imgRef = useRef<HTMLImageElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const img = imgRef.current
    if (!img) return

    // If priority is true, load immediately
    if (priority) {
      img.src = src
      if (srcSet) img.srcset = srcSet
      return
    }

    // Set up lazy loading with IntersectionObserver
    if (!observerRef.current) {
      observerRef.current = createImageObserver((loadedImg) => {
        setIsLoaded(true)
        if (onLoad) onLoad()
      })
    }

    // Set data attributes for lazy loading
    img.setAttribute('data-src', src)
    if (srcSet) img.setAttribute('data-srcset', srcSet)

    // Start observing
    observerRef.current.observe(img)

    // Cleanup
    return () => {
      if (observerRef.current && img) {
        observerRef.current.unobserve(img)
      }
    }
  }, [src, srcSet, priority, onLoad])

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
    if (onLoad) onLoad()
  }

  const handleError = () => {
    setIsError(true)
    if (onError) onError()
  }

  return (
    <img
      ref={imgRef}
      src={priority ? src : placeholder}
      srcSet={priority ? srcSet : undefined}
      alt={alt}
      className={`transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${isError ? 'opacity-50' : ''} ${className}`}
      width={width}
      height={height}
      sizes={sizes}
      onLoad={handleLoad}
      onError={handleError}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      style={{
        aspectRatio: width && height ? `${width} / ${height}` : undefined,
      }}
    />
  )
}