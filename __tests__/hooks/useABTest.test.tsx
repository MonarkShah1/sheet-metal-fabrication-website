import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, jest } from '@jest/globals'
import { useABTest, useCTATest, useHeadlineTest } from '@/hooks/useABTest'

// Mock analytics
const mockTrackABTest = jest.fn()
jest.mock('@/lib/analytics', () => ({
  trackABTest: mockTrackABTest
}))

// Mock config
const mockGetActiveTest = jest.fn()
const mockRecordTestResult = jest.fn()
jest.mock('@/config/ab-tests', () => ({
  getActiveTest: mockGetActiveTest,
  recordTestResult: mockRecordTestResult
}))

describe('useABTest hook', () => {
  beforeEach(() => {
    // Clear mocks
    ;(window.sessionStorage.setItem as jest.Mock).mockClear()
    ;(window.sessionStorage.getItem as jest.Mock).mockClear()
    mockTrackABTest.mockClear()
    mockGetActiveTest.mockClear()
    mockRecordTestResult.mockClear()

    // Mock location
    delete (window as any).location
    window.location = { pathname: '/test-page' } as any
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return null variant initially', () => {
    mockGetActiveTest.mockReturnValue(null)
    
    const { result } = renderHook(() => useABTest('test_name'))
    
    expect(result.current.variant).toBe('control')
    expect(result.current.isClient).toBe(false)
  })

  it('should use existing variant from sessionStorage', async () => {
    mockGetActiveTest.mockReturnValue({
      variants: [
        { id: 'control', weight: 50 },
        { id: 'variant', weight: 50 }
      ]
    })
    ;(window.sessionStorage.getItem as jest.Mock).mockReturnValue('variant')

    const { result } = renderHook(() => useABTest('test_name'))
    
    // Wait for client-side hydration
    await act(async () => {
      // Force re-render to simulate client hydration
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    expect(result.current.variant).toBe('variant')
    expect(mockTrackABTest).toHaveBeenCalledWith('test_name', 'variant', '/test-page')
  })

  it('should select new variant when none exists', async () => {
    mockGetActiveTest.mockReturnValue({
      variants: [
        { id: 'control', weight: 50 },
        { id: 'variant', weight: 50 }
      ]
    })
    ;(window.sessionStorage.getItem as jest.Mock).mockReturnValue(null)

    // Mock Math.random to return 0.3 (should select control)
    const originalRandom = Math.random
    Math.random = jest.fn(() => 0.3)

    const { result } = renderHook(() => useABTest('test_name'))
    
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    expect(window.sessionStorage.setItem).toHaveBeenCalledWith('ab_test_test_name', 'control')
    expect(mockTrackABTest).toHaveBeenCalledWith('test_name', 'control', '/test-page')

    // Restore Math.random
    Math.random = originalRandom
  })

  it('should provide trackConversion function', async () => {
    mockGetActiveTest.mockReturnValue({
      variants: [{ id: 'control', weight: 100 }]
    })
    ;(window.sessionStorage.getItem as jest.Mock).mockReturnValue('control')

    const { result } = renderHook(() => useABTest('test_name'))
    
    await act(async () => {
      result.current.trackConversion('click', 1)
    })

    expect(mockRecordTestResult).toHaveBeenCalledWith({
      testName: 'test_name',
      variantId: 'control',
      metric: 'click',
      value: 1,
      timestamp: expect.any(Number)
    })
  })

  it('should handle isVariant helper correctly', async () => {
    mockGetActiveTest.mockReturnValue({
      variants: [{ id: 'variant_a', weight: 100 }]
    })
    ;(window.sessionStorage.getItem as jest.Mock).mockReturnValue('variant_a')

    const { result } = renderHook(() => useABTest('test_name'))
    
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    expect(result.current.isVariant('variant_a')).toBe(true)
    expect(result.current.isVariant('variant_b')).toBe(false)
  })
})

describe('useCTATest hook', () => {
  beforeEach(() => {
    mockGetActiveTest.mockReturnValue({
      variants: [
        { id: 'control', weight: 50, text: 'Get Quote' },
        { id: 'variant', weight: 50, text: 'Fix Your Issues' }
      ]
    })
    ;(window.sessionStorage.getItem as jest.Mock).mockReturnValue('variant')
  })

  it('should return variant text', async () => {
    const { result } = renderHook(() => useCTATest('cta_test', 'Default Text'))
    
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    expect(result.current.text).toBe('Fix Your Issues')
    expect(result.current.variant).toBe('variant')
  })

  it('should return default text when test is inactive', () => {
    mockGetActiveTest.mockReturnValue(null)
    
    const { result } = renderHook(() => useCTATest('cta_test', 'Default Text'))
    
    expect(result.current.text).toBe('Default Text')
  })

  it('should track clicks when onClick is called', async () => {
    const { result } = renderHook(() => useCTATest('cta_test', 'Default Text'))
    
    await act(async () => {
      result.current.onClick()
    })

    expect(mockRecordTestResult).toHaveBeenCalledWith({
      testName: 'cta_test',
      variantId: 'variant',
      metric: 'cta_click',
      value: 1,
      timestamp: expect.any(Number)
    })
  })
})

describe('useHeadlineTest hook', () => {
  beforeEach(() => {
    mockGetActiveTest.mockReturnValue({
      variants: [
        { id: 'control', weight: 50, text: 'Control Headline' },
        { id: 'variant', weight: 50, text: 'Variant Headline' }
      ]
    })
    ;(window.sessionStorage.getItem as jest.Mock).mockReturnValue('variant')
  })

  it('should return variant text', async () => {
    const { result } = renderHook(() => useHeadlineTest('headline_test', 'Default Headline'))
    
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    expect(result.current.text).toBe('Variant Headline')
    expect(result.current.variant).toBe('variant')
  })

  it('should track engagement when onView is called', async () => {
    const { result } = renderHook(() => useHeadlineTest('headline_test', 'Default Headline'))
    
    await act(async () => {
      result.current.onView()
    })

    expect(mockRecordTestResult).toHaveBeenCalledWith({
      testName: 'headline_test',
      variantId: 'variant',
      metric: 'headline_engagement',
      value: 1,
      timestamp: expect.any(Number)
    })
  })
})

describe('Edge cases and error handling', () => {
  it('should handle sessionStorage errors gracefully', async () => {
    mockGetActiveTest.mockReturnValue({
      variants: [{ id: 'control', weight: 100 }]
    })
    
    // Mock sessionStorage to throw
    ;(window.sessionStorage.getItem as jest.Mock).mockImplementation(() => {
      throw new Error('SessionStorage error')
    })

    const { result } = renderHook(() => useABTest('test_name'))
    
    // Should not crash and should have fallback behavior
    expect(result.current.variant).toBeTruthy()
  })

  it('should handle invalid stored variant', async () => {
    mockGetActiveTest.mockReturnValue({
      variants: [
        { id: 'control', weight: 50 },
        { id: 'variant_a', weight: 50 }
      ]
    })
    
    // Mock stored variant that doesn't exist in current test
    ;(window.sessionStorage.getItem as jest.Mock).mockReturnValue('invalid_variant')

    const { result } = renderHook(() => useABTest('test_name'))
    
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    // Should select new variant
    expect(window.sessionStorage.setItem).toHaveBeenCalledWith(
      'ab_test_test_name', 
      expect.stringMatching(/^(control|variant_a)$/)
    )
  })

  it('should handle empty variants array', () => {
    mockGetActiveTest.mockReturnValue({
      variants: []
    })

    const { result } = renderHook(() => useABTest('test_name'))
    
    // Should not crash
    expect(result.current.variant).toBeFalsy()
  })

  it('should handle zero weight variants', async () => {
    mockGetActiveTest.mockReturnValue({
      variants: [
        { id: 'control', weight: 0 },
        { id: 'variant', weight: 100 }
      ]
    })
    ;(window.sessionStorage.getItem as jest.Mock).mockReturnValue(null)

    // Mock Math.random to return 0.5
    const originalRandom = Math.random
    Math.random = jest.fn(() => 0.5)

    const { result } = renderHook(() => useABTest('test_name'))
    
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    // Should select the variant with non-zero weight
    expect(window.sessionStorage.setItem).toHaveBeenCalledWith('ab_test_test_name', 'variant')

    Math.random = originalRandom
  })
})