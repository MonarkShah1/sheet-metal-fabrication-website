'use client'

import { useHeadlineTest } from '@/hooks/useABTest'

interface ABTestHeadlineProps {
  testName: string
  defaultText: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children?: never
}

export function ABTestHeadline({ 
  testName, 
  defaultText, 
  className = '',
  as: Component = 'h1'
}: ABTestHeadlineProps) {
  const { text, onView } = useHeadlineTest(testName, defaultText)

  // Track when headline comes into view
  const handleInView = () => {
    onView()
  }

  return (
    <Component 
      className={className}
      onMouseEnter={handleInView}
    >
      {text}
    </Component>
  )
}