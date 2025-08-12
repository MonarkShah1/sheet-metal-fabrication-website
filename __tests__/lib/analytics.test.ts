import { describe, it, expect, beforeEach, afterEach, jest } from '@jest/globals'
import {
  trackQuoteFormStart,
  trackQuoteFormSubmit,
  trackQuoteFormAbandon,
  trackPhoneClick,
  trackEmailClick,
  trackServicePageView,
  trackLocationPageView,
  createFormTracker,
  trackCTAClick,
  trackFileUpload,
  trackUserEngagement,
  trackConversionFunnel,
  trackABTest,
  trackEnhancedPageView,
  initializeUserEngagementTracking
} from '@/lib/analytics'

// Mock global gtag
const mockGtag = jest.fn()
const mockDataLayer = [] as any[]

describe('Analytics Tracking', () => {
  beforeEach(() => {
    // Setup window mocks
    global.window = Object.create(window)
    Object.defineProperty(window, 'gtag', {
      value: mockGtag,
      writable: true
    })
    Object.defineProperty(window, 'dataLayer', {
      value: mockDataLayer,
      writable: true
    })
    Object.defineProperty(window, 'location', {
      value: { pathname: '/test-page' },
      writable: true
    })

    // Clear mock calls
    mockGtag.mockClear()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('Form Tracking', () => {
    it('should track quote form start', () => {
      trackQuoteFormStart('contact_form')

      expect(mockGtag).toHaveBeenCalledWith('event', 'form_start', {
        event_category: 'form',
        event_label: 'contact_form',
        value: 1
      })
    })

    it('should track quote form submit with multiple events', () => {
      trackQuoteFormSubmit('quote_form')

      expect(mockGtag).toHaveBeenCalledWith('event', 'generate_lead', {
        event_category: 'engagement',
        event_label: 'quote_form',
        value: 1
      })

      expect(mockGtag).toHaveBeenCalledWith('event', 'form_submit', {
        event_category: 'form',
        event_label: 'quote_form',
        value: 1
      })
    })

    it('should track quote form abandon', () => {
      trackQuoteFormAbandon('contact_form')

      expect(mockGtag).toHaveBeenCalledWith('event', 'form_abandon', {
        event_category: 'form',
        event_label: 'contact_form'
      })
    })

    it('should use default form name when not provided', () => {
      trackQuoteFormStart()

      expect(mockGtag).toHaveBeenCalledWith('event', 'form_start', {
        event_category: 'form',
        event_label: 'quote_form',
        value: 1
      })
    })
  })

  describe('Contact Tracking', () => {
    it('should track phone clicks', () => {
      trackPhoneClick()

      expect(mockGtag).toHaveBeenCalledWith('event', 'click', {
        event_category: 'contact',
        event_label: 'phone_number',
        value: 1
      })
    })

    it('should track email clicks', () => {
      trackEmailClick()

      expect(mockGtag).toHaveBeenCalledWith('event', 'click', {
        event_category: 'contact',
        event_label: 'email',
        value: 1
      })
    })
  })

  describe('Page View Tracking', () => {
    it('should track service page views', () => {
      trackServicePageView('laser-cutting')

      expect(mockGtag).toHaveBeenCalledWith('event', 'page_view', {
        event_category: 'services',
        event_label: 'laser-cutting',
        value: 1
      })
    })

    it('should track location page views', () => {
      trackLocationPageView('Toronto')

      expect(mockGtag).toHaveBeenCalledWith('event', 'view_item', {
        event_category: 'locations',
        event_label: 'Toronto',
        value: 1
      })
    })
  })

  describe('Form Tracker Factory', () => {
    it('should create form tracker with correct methods', () => {
      const tracker = createFormTracker('custom_form')

      expect(tracker.onFocus).toBeInstanceOf(Function)
      expect(tracker.onSubmit).toBeInstanceOf(Function)
      expect(tracker.onAbandon).toBeInstanceOf(Function)

      // Test the methods call the correct tracking functions
      tracker.onFocus()
      expect(mockGtag).toHaveBeenCalledWith('event', 'form_start', expect.any(Object))

      tracker.onSubmit()
      expect(mockGtag).toHaveBeenCalledWith('event', 'generate_lead', expect.any(Object))

      tracker.onAbandon()
      expect(mockGtag).toHaveBeenCalledWith('event', 'form_abandon', expect.any(Object))
    })
  })

  describe('CTA and File Tracking', () => {
    it('should track CTA clicks', () => {
      trackCTAClick('hero_cta', 'homepage')

      expect(mockGtag).toHaveBeenCalledWith('event', 'click', {
        event_category: 'cta',
        event_label: 'hero_cta_homepage',
        value: 1
      })
    })

    it('should track file uploads', () => {
      trackFileUpload('pdf', 1024)

      expect(mockGtag).toHaveBeenCalledWith('event', 'file_upload', {
        event_category: 'form_interaction',
        event_label: 'pdf',
        value: 1024
      })
    })

    it('should track file uploads without size', () => {
      trackFileUpload('jpg')

      expect(mockGtag).toHaveBeenCalledWith('event', 'file_upload', {
        event_category: 'form_interaction',
        event_label: 'jpg',
        value: 1
      })
    })
  })

  describe('User Engagement Tracking', () => {
    it('should track scroll depth', () => {
      trackUserEngagement.scrollDepth(50, '/services/laser-cutting')

      expect(mockGtag).toHaveBeenCalledWith('event', 'scroll', {
        event_category: 'engagement',
        event_label: '50%',
        custom_map: { page_path: '/services/laser-cutting' },
        value: 50
      })
    })

    it('should track time on page', () => {
      trackUserEngagement.timeOnPage(120, '/about')

      expect(mockGtag).toHaveBeenCalledWith('event', 'timing_complete', {
        event_category: 'engagement',
        event_label: '120s',
        value: 120,
        custom_map: { page_path: '/about' }
      })
    })

    it('should track content engagement', () => {
      trackUserEngagement.contentEngagement('video', 'intro-video', 'play')

      expect(mockGtag).toHaveBeenCalledWith('event', 'select_content', {
        event_category: 'content',
        event_label: 'video_play',
        content_type: 'video',
        content_id: 'intro-video'
      })
    })

    it('should track industry page engagement', () => {
      trackUserEngagement.industryPageEngagement('automotive', 'case_study_view')

      expect(mockGtag).toHaveBeenCalledWith('event', 'view_item', {
        event_category: 'industry_engagement',
        event_label: 'automotive_case_study_view',
        item_category: 'industry',
        item_name: 'automotive'
      })
    })

    it('should track location page engagement', () => {
      trackUserEngagement.locationPageEngagement('Toronto', 'contact_info_view')

      expect(mockGtag).toHaveBeenCalledWith('event', 'view_item', {
        event_category: 'location_engagement',
        event_label: 'Toronto_contact_info_view',
        item_category: 'location',
        item_name: 'Toronto'
      })
    })
  })

  describe('Conversion Funnel Tracking', () => {
    it('should track quote funnel start', () => {
      trackConversionFunnel.quoteFunnelStart('homepage', 'automotive', 'Toronto')

      expect(mockGtag).toHaveBeenCalledWith('event', 'begin_checkout', {
        event_category: 'conversion_funnel',
        event_label: 'quote_start_homepage',
        value: 0,
        currency: 'CAD',
        items: [{
          item_id: 'quote_request',
          item_name: 'Metal Fabrication Quote',
          item_category: 'automotive',
          item_variant: 'Toronto',
          quantity: 1,
          price: 0
        }]
      })
    })

    it('should track quote funnel progress', () => {
      trackConversionFunnel.quoteFunnelProgress(2, 'contact_details', 'manufacturing')

      expect(mockGtag).toHaveBeenCalledWith('event', 'add_payment_info', {
        event_category: 'conversion_funnel',
        event_label: 'quote_step_2_contact_details',
        custom_map: {
          funnel_step: 2,
          step_name: 'contact_details',
          industry: 'manufacturing'
        }
      })
    })

    it('should track quote funnel completion', () => {
      trackConversionFunnel.quoteFunnelComplete('automotive', 'Toronto', 2500)

      expect(mockGtag).toHaveBeenCalledWith('event', 'purchase', {
        transaction_id: expect.stringMatching(/^quote_\d+$/),
        value: 2500,
        currency: 'CAD',
        items: [{
          item_id: 'quote_request',
          item_name: 'Metal Fabrication Quote Request',
          item_category: 'automotive',
          item_variant: 'Toronto',
          quantity: 1,
          price: 2500
        }]
      })

      expect(mockGtag).toHaveBeenCalledWith('event', 'generate_lead', {
        event_category: 'conversion',
        event_label: 'quote_completed',
        value: 2500,
        currency: 'CAD'
      })
    })

    it('should use default values when parameters are missing', () => {
      trackConversionFunnel.quoteFunnelComplete()

      expect(mockGtag).toHaveBeenCalledWith('event', 'purchase', {
        transaction_id: expect.any(String),
        value: 100,
        currency: 'CAD',
        items: [{
          item_id: 'quote_request',
          item_name: 'Metal Fabrication Quote Request',
          item_category: 'general',
          item_variant: 'ontario',
          quantity: 1,
          price: 100
        }]
      })
    })
  })

  describe('A/B Test Tracking', () => {
    it('should track A/B test events', () => {
      trackABTest('hero_cta_test', 'variant_a', '/homepage')

      expect(mockGtag).toHaveBeenCalledWith('event', 'custom', {
        event_category: 'ab_test',
        event_label: 'hero_cta_test_variant_a',
        custom_map: {
          test_name: 'hero_cta_test',
          test_variant: 'variant_a',
          test_page: '/homepage'
        }
      })
    })
  })

  describe('Enhanced Page View Tracking', () => {
    beforeEach(() => {
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = 'GA_MEASUREMENT_ID'
    })

    it('should track enhanced page views', () => {
      trackEnhancedPageView('/services/laser-cutting', 'Laser Cutting Services', 'manufacturing', 'Toronto')

      expect(mockGtag).toHaveBeenCalledWith('config', 'GA_MEASUREMENT_ID', {
        page_path: '/services/laser-cutting',
        page_title: 'Laser Cutting Services',
        custom_map: {
          industry_focus: 'manufacturing',
          location_focus: 'Toronto'
        }
      })

      expect(mockGtag).toHaveBeenCalledWith('event', 'page_view_enhanced', {
        event_category: 'navigation',
        event_label: '/services/laser-cutting',
        custom_map: {
          page_title: 'Laser Cutting Services',
          industry_focus: 'manufacturing',
          location_focus: 'Toronto'
        }
      })
    })

    it('should handle missing optional parameters', () => {
      trackEnhancedPageView('/about', 'About Us')

      expect(mockGtag).toHaveBeenCalledWith('config', 'GA_MEASUREMENT_ID', {
        page_path: '/about',
        page_title: 'About Us',
        custom_map: {
          industry_focus: undefined,
          location_focus: undefined
        }
      })
    })
  })

  describe('Browser Environment Handling', () => {
    it('should not track when window is undefined (SSR)', () => {
      // Mock server-side environment
      const originalWindow = global.window
      delete (global as any).window

      trackQuoteFormStart()

      expect(mockGtag).not.toHaveBeenCalled()

      // Restore window
      global.window = originalWindow
    })

    it('should not track when gtag is undefined', () => {
      // Remove gtag from window
      delete (window as any).gtag

      trackQuoteFormStart()

      expect(mockGtag).not.toHaveBeenCalled()
    })
  })

  describe('User Engagement Initialization', () => {
    let mockSetInterval: jest.Mock
    let mockAddEventListener: jest.Mock
    let mockRemoveEventListener: jest.Mock

    beforeEach(() => {
      mockSetInterval = jest.fn().mockReturnValue(123)
      mockAddEventListener = jest.fn()
      mockRemoveEventListener = jest.fn()

      global.setInterval = mockSetInterval
      global.clearInterval = jest.fn()
      Object.defineProperty(window, 'addEventListener', { value: mockAddEventListener })
      Object.defineProperty(window, 'removeEventListener', { value: mockRemoveEventListener })
      Object.defineProperty(window, 'scrollY', { value: 0, writable: true })
      Object.defineProperty(window, 'innerHeight', { value: 600, writable: true })
      Object.defineProperty(document.documentElement, 'scrollHeight', { value: 1200, writable: true })
    })

    it('should initialize scroll and time tracking', () => {
      initializeUserEngagementTracking()

      expect(mockAddEventListener).toHaveBeenCalledWith('scroll', expect.any(Function), { passive: true })
      expect(mockAddEventListener).toHaveBeenCalledWith('beforeunload', expect.any(Function))
      expect(mockSetInterval).toHaveBeenCalledWith(expect.any(Function), 10000)
    })

    it('should not initialize when window is undefined', () => {
      const originalWindow = global.window
      delete (global as any).window

      initializeUserEngagementTracking()

      expect(mockAddEventListener).not.toHaveBeenCalled()
      expect(mockSetInterval).not.toHaveBeenCalled()

      global.window = originalWindow
    })
  })

  describe('Data Quality and Validation', () => {
    it('should handle string parameters correctly', () => {
      trackServicePageView('laser-cutting & bending')

      expect(mockGtag).toHaveBeenCalledWith('event', 'page_view', {
        event_category: 'services',
        event_label: 'laser-cutting & bending',
        value: 1
      })
    })

    it('should handle numeric parameters correctly', () => {
      trackUserEngagement.scrollDepth(75, '/test')

      expect(mockGtag).toHaveBeenCalledWith('event', 'scroll', {
        event_category: 'engagement',
        event_label: '75%',
        custom_map: { page_path: '/test' },
        value: 75
      })
    })

    it('should generate unique transaction IDs', () => {
      const start = Date.now()
      trackConversionFunnel.quoteFunnelComplete('automotive', 'Toronto', 1000)
      const end = Date.now()

      const calls = mockGtag.mock.calls.filter(call => call[0] === 'event' && call[1] === 'purchase')
      expect(calls).toHaveLength(1)
      
      const transactionId = calls[0][2].transaction_id
      const timestamp = parseInt(transactionId.replace('quote_', ''))
      
      expect(timestamp).toBeGreaterThanOrEqual(start)
      expect(timestamp).toBeLessThanOrEqual(end)
    })
  })
})