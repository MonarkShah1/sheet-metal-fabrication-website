'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { GA_TRACKING_ID, pageview } from '@/lib/analytics'
import Script from 'next/script'

export function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (GA_TRACKING_ID) {
      pageview(pathname)
    }
  }, [pathname])

  if (!GA_TRACKING_ID) {
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              cookie_flags: 'secure;samesite=none',
            });
          `,
        }}
      />
    </>
  )
}

export function MatomoAnalytics() {
  const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL
  const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID

  if (!MATOMO_URL || !MATOMO_SITE_ID) {
    return null
  }

  return (
    <Script
      id="matomo-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          var _paq = window._paq = window._paq || [];
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="${MATOMO_URL}";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '${MATOMO_SITE_ID}']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
          })();
        `,
      }}
    />
  )
}