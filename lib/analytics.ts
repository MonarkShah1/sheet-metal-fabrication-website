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