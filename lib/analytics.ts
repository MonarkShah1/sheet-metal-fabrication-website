// Google Analytics 4 Event Tracking Functions
// Based on the technical SEO PRD requirements

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Quote form tracking
export const trackQuoteFormStart = (formName: string = 'quote_form') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_start', {
      event_category: 'form',
      event_label: formName,
      value: 1
    });
  }
}

export const trackQuoteFormSubmit = (formName: string = 'quote_form') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      event_category: 'engagement',
      event_label: formName,
      value: 1
    });

    window.gtag('event', 'form_submit', {
      event_category: 'form',
      event_label: formName,
      value: 1
    });
  }
}

export const trackQuoteFormAbandon = (formName: string = 'quote_form') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_abandon', {
      event_category: 'form',
      event_label: formName
    });
  }
}

// Contact tracking
export const trackPhoneClick = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'contact',
      event_label: 'phone_number',
      value: 1
    });
  }
}

export const trackEmailClick = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'contact',
      event_label: 'email',
      value: 1
    });
  }
}

// Service page tracking
export const trackServicePageView = (serviceName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      event_category: 'services',
      event_label: serviceName,
      value: 1
    });
  }
}

// Location page tracking
export const trackLocationPageView = (cityName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      event_category: 'locations',
      event_label: cityName,
      value: 1
    });
  }
}

// Form interaction tracking utilities
export const createFormTracker = (formName: string) => {
  return {
    onFocus: () => trackQuoteFormStart(formName),
    onSubmit: () => trackQuoteFormSubmit(formName),
    onAbandon: () => trackQuoteFormAbandon(formName)
  }
}

// CTA button tracking
export const trackCTAClick = (ctaName: string, location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'cta',
      event_label: `${ctaName}_${location}`,
      value: 1
    });
  }
}

// File upload tracking (for quote forms)
export const trackFileUpload = (fileType: string, fileSize?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'file_upload', {
      event_category: 'form_interaction',
      event_label: fileType,
      value: fileSize || 1
    });
  }
}

// Enhanced User Engagement Tracking
export const trackUserEngagement = {
  // Scroll depth tracking
  scrollDepth: (depth: number, page: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'scroll', {
        event_category: 'engagement',
        event_label: `${depth}%`,
        custom_map: { page_path: page },
        value: depth
      });
    }
  },

  // Time on page milestones
  timeOnPage: (timeSeconds: number, page: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'timing_complete', {
        event_category: 'engagement',
        event_label: `${timeSeconds}s`,
        value: timeSeconds,
        custom_map: { page_path: page }
      });
    }
  },

  // Content engagement
  contentEngagement: (contentType: string, contentId: string, action: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'select_content', {
        event_category: 'content',
        event_label: `${contentType}_${action}`,
        content_type: contentType,
        content_id: contentId
      });
    }
  },

  // Industry page specific engagement
  industryPageEngagement: (industry: string, action: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'view_item', {
        event_category: 'industry_engagement',
        event_label: `${industry}_${action}`,
        item_category: 'industry',
        item_name: industry
      });
    }
  },

  // Location page specific engagement
  locationPageEngagement: (location: string, action: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'view_item', {
        event_category: 'location_engagement', 
        event_label: `${location}_${action}`,
        item_category: 'location',
        item_name: location
      });
    }
  }
}

// Enhanced Conversion Funnel Tracking
export const trackConversionFunnel = {
  // Quote funnel stages
  quoteFunnelStart: (source: string, industry?: string, location?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'begin_checkout', {
        event_category: 'conversion_funnel',
        event_label: `quote_start_${source}`,
        value: 0,
        currency: 'CAD',
        items: [{
          item_id: 'quote_request',
          item_name: 'Metal Fabrication Quote',
          item_category: industry || 'general',
          item_variant: location || 'general',
          quantity: 1,
          price: 0
        }]
      });
    }
  },

  quoteFunnelProgress: (step: number, stepName: string, industry?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'add_payment_info', {
        event_category: 'conversion_funnel',
        event_label: `quote_step_${step}_${stepName}`,
        custom_map: {
          funnel_step: step,
          step_name: stepName,
          industry: industry
        }
      });
    }
  },

  quoteFunnelComplete: (industry?: string, location?: string, estimatedValue?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      // Primary conversion event
      window.gtag('event', 'purchase', {
        transaction_id: `quote_${Date.now()}`,
        value: estimatedValue || 100,
        currency: 'CAD',
        items: [{
          item_id: 'quote_request',
          item_name: 'Metal Fabrication Quote Request',
          item_category: industry || 'general',
          item_variant: location || 'ontario',
          quantity: 1,
          price: estimatedValue || 100
        }]
      });

      // Lead generation event
      window.gtag('event', 'generate_lead', {
        event_category: 'conversion',
        event_label: 'quote_completed',
        value: estimatedValue || 100,
        currency: 'CAD'
      });
    }
  }
}

// A/B Testing Tracking
export const trackABTest = (testName: string, variant: string, page: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'custom', {
      event_category: 'ab_test',
      event_label: `${testName}_${variant}`,
      custom_map: {
        test_name: testName,
        test_variant: variant,
        test_page: page
      }
    });
  }
}

// Enhanced Page View Tracking
export const trackEnhancedPageView = (path: string, title: string, industry?: string, location?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: path,
      page_title: title,
      custom_map: {
        industry_focus: industry,
        location_focus: location
      }
    });

    // Additional custom event for enhanced reporting
    window.gtag('event', 'page_view_enhanced', {
      event_category: 'navigation',
      event_label: path,
      custom_map: {
        page_title: title,
        industry_focus: industry,
        location_focus: location
      }
    });
  }
}

// Initialize scroll and time tracking
export const initializeUserEngagementTracking = () => {
  if (typeof window === 'undefined') return;

  const scrollThresholds = [25, 50, 75, 90, 100];
  let trackedScrollThresholds: number[] = [];

  const timeThresholds = [30, 60, 120, 300, 600]; // seconds
  let trackedTimeThresholds: number[] = [];
  const startTime = Date.now();

  // Scroll depth tracking
  const handleScroll = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );

    scrollThresholds.forEach(threshold => {
      if (scrollPercent >= threshold && !trackedScrollThresholds.includes(threshold)) {
        trackedScrollThresholds.push(threshold);
        trackUserEngagement.scrollDepth(threshold, window.location.pathname);
      }
    });
  };

  // Time on page tracking
  const timeInterval = setInterval(() => {
    const timeOnPage = Math.round((Date.now() - startTime) / 1000);
    
    timeThresholds.forEach(threshold => {
      if (timeOnPage >= threshold && !trackedTimeThresholds.includes(threshold)) {
        trackedTimeThresholds.push(threshold);
        trackUserEngagement.timeOnPage(threshold, window.location.pathname);
      }
    });
  }, 10000); // Check every 10 seconds

  // Event listeners
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    clearInterval(timeInterval);
    window.removeEventListener('scroll', handleScroll);
  });
}