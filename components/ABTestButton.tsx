'use client'

import { useCTATest } from '@/hooks/useABTest'
import { Button } from '@/components/button'
import { trackCTAClick } from '@/lib/analytics'
import Link from 'next/link'
import type { ComponentProps } from 'react'

interface ABTestButtonProps {
  testName: string
  href: ComponentProps<typeof Link>['href']
  defaultText: string
  className?: string
  color?: any
  useStyledButton?: boolean
  children?: never
}

export function ABTestButton({ 
  testName, 
  href, 
  defaultText, 
  className, 
  color = 'blue',
  useStyledButton = false
}: ABTestButtonProps) {
  const { text, onClick } = useCTATest(testName, defaultText)

  const handleClick = () => {
    onClick() // Track A/B test conversion
    trackCTAClick(testName, window.location.pathname) // Track general CTA click
  }

  // For custom styled buttons (like in IndustryHero)
  if (useStyledButton || (className && className.includes('bg-'))) {
    return (
      <Link 
        href={href}
        className={className}
        onClick={handleClick}
      >
        {text}
        {text.includes('Supply Issues') && <span className="ml-2">→</span>}
      </Link>
    )
  }

  // For standard Button component
  return (
    <Button 
      href={typeof href === 'string' ? href : href.pathname || '/'} 
      color={color} 
      className={className}
      onClick={handleClick}
    >
      {text}
    </Button>
  )
}