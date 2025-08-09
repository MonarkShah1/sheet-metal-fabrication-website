'use client'

import { useEffect } from 'react'

interface StructuredDataScriptProps {
  data: Record<string, any> | Record<string, any>[]
}

export function StructuredDataScript({ data }: StructuredDataScriptProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.innerHTML = JSON.stringify(Array.isArray(data) ? data : data)
    document.head.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [data])

  return null
}