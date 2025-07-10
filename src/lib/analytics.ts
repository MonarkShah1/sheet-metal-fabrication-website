export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ''

declare global {
  interface Window {
    gtag: (command: string, trackingId: string, config?: Record<string, unknown>) => void;
  }
}

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

export const trackFormSubmission = (formName: string, success: boolean) => {
  event({
    action: success ? 'form_submit_success' : 'form_submit_error',
    category: 'Forms',
    label: formName,
    value: success ? 1 : 0,
  })
}

export const trackQuoteRequest = (projectType: string, material: string) => {
  event({
    action: 'quote_request',
    category: 'Lead Generation',
    label: `${projectType} - ${material}`,
    value: 1,
  })
}

export const trackFileDownload = (fileName: string) => {
  event({
    action: 'file_download',
    category: 'Engagement',
    label: fileName,
    value: 1,
  })
}

export const trackPhoneClick = () => {
  event({
    action: 'phone_click',
    category: 'Contact',
    label: 'Header Phone',
    value: 1,
  })
}

export const trackEmailClick = () => {
  event({
    action: 'email_click',
    category: 'Contact',
    label: 'Header Email',
    value: 1,
  })
}

export const trackQuoteStart = () => {
  event({
    action: 'quote_start',
    category: 'Quote Wizard',
    label: 'Wizard Started',
    value: 1,
  })
}

export const trackFileUpload = (fileCount: number, fileTypes: string[]) => {
  event({
    action: 'file_upload',
    category: 'Quote Wizard',
    label: `${fileCount} files - ${fileTypes.join(', ')}`,
    value: fileCount,
  })
}

export const trackQuoteComplete = (material: string, quantity: number, priceRange: string) => {
  event({
    action: 'quote_complete',
    category: 'Quote Wizard',
    label: `${material} - ${quantity} pieces - ${priceRange}`,
    value: quantity,
  })
}

export const trackCtaClickCall = (location: string) => {
  event({
    action: 'cta_click_call',
    category: 'CTA',
    label: location,
    value: 1,
  })
}