'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

// Global type declarations for Google Analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
  }
}

declare const gtag: (...args: any[]) => void
declare const dataLayer: any[]

function sendToAnalytics(metric: any) {
  // Send to Google Analytics 4 if available
  if (typeof gtag !== 'undefined') {
    gtag('event', metric.name, {
      custom_parameter_1: Math.round(metric.value),
      custom_parameter_2: metric.id,
      custom_parameter_3: metric.delta,
      event_category: 'Web Vitals',
      event_label: metric.name,
      value: Math.round(metric.value),
      non_interaction: true,
    })
  }

  // Send to Google Tag Manager if available
  if (typeof dataLayer !== 'undefined') {
    dataLayer.push({
      event: 'web_vitals',
      metric_name: metric.name,
      metric_value: Math.round(metric.value),
      metric_id: metric.id,
      metric_delta: metric.delta,
    })
  }

  // Log for development
  if (process.env.NODE_ENV === 'development') {
    console.log(`Web Vital - ${metric.name}:`, Math.round(metric.value))
  }
}

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID

  useEffect(() => {
    // Track Web Vitals
    getCLS(sendToAnalytics)
    getFID(sendToAnalytics)
    getFCP(sendToAnalytics)
    getLCP(sendToAnalytics)
    getTTFB(sendToAnalytics)
  }, [])

  if (!gaId && !gtmId) {
    return null
  }

  return (
    <>
      {/* Google Analytics 4 */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
                anonymize_ip: true,
                cookie_flags: 'SameSite=None;Secure',
                send_page_view: true,
                custom_map: {
                  custom_parameter_1: 'metric_value',
                  custom_parameter_2: 'metric_id',
                  custom_parameter_3: 'metric_delta'
                }
              });
            `}
          </Script>
        </>
      )}

      {/* Google Tag Manager */}
      {gtmId && (
        <>
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `}
          </Script>
        </>
      )}

      {/* Schema.org WebSite SearchAction */}
      <Script
        id="website-search-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            url: process.env.NEXT_PUBLIC_SITE_URL || 'https://canadianmetalfab.com',
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://canadianmetalfab.com'}/search?q={search_term_string}`
              },
              'query-input': 'required name=search_term_string'
            }
          })
        }}
      />
    </>
  )
}