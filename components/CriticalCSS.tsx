/**
 * Critical CSS Component
 * Handles inlining of critical CSS and progressive loading of non-critical styles
 */

import { generateBaseCriticalCSS } from '@/config/critical-css';

interface CriticalCSSProps {
  route?: string;
  customCSS?: string;
}

/**
 * Inline Critical CSS Component
 * Should be placed in the <head> for optimal performance
 */
export function CriticalCSS({ route, customCSS }: CriticalCSSProps) {
  const baseCriticalCSS = generateBaseCriticalCSS();
  const additionalCSS = customCSS || '';
  
  const criticalStyles = `${baseCriticalCSS}${additionalCSS}`;
  
  return (
    <style
      id="critical-css"
      dangerouslySetInnerHTML={{ __html: criticalStyles }}
    />
  );
}

/**
 * Progressive CSS Loader Component
 * Loads non-critical CSS asynchronously after critical content renders
 */
export function ProgressiveCSS() {
  const loadNonCriticalCSS = `
    (function() {
      // Function to load CSS asynchronously
      function loadCSS(href, before, media, callback) {
        var doc = window.document;
        var ss = doc.createElement("link");
        var ref;
        if (before) {
          ref = before;
        } else {
          var refs = (doc.body || doc.getElementsByTagName("head")[0]).childNodes;
          ref = refs[refs.length - 1];
        }
        
        var sheets = doc.styleSheets;
        if (callback) {
          ss.onload = callback;
        }
        
        ss.rel = "stylesheet";
        ss.href = href;
        ss.media = media || "all";
        
        ref.parentNode.insertBefore(ss, (before ? ref : ref.nextSibling));
        return ss;
      }
      
      // Load non-critical CSS after critical content
      var loadNonCritical = function() {
        // Load additional Tailwind utilities that aren't critical
        loadCSS('/_next/static/css/non-critical.css');
        
        // Load Leaflet CSS if needed
        if (document.querySelector('.leaflet-container')) {
          loadCSS('https://unpkg.com/leaflet@1.9.4/dist/leaflet.css');
        }
      };
      
      // Load after DOM is ready but don't block rendering
      if (document.readyState === 'complete') {
        loadNonCritical();
      } else {
        window.addEventListener('load', loadNonCritical);
      }
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: loadNonCriticalCSS }}
    />
  );
}

/**
 * Font Loading Strategy Component
 * Implements progressive enhancement for fonts
 */
export function FontLoadingStrategy() {
  const fontLoadingScript = `
    (function() {
      // Check if browser supports font loading API
      if ('fonts' in document) {
        // System fonts are already loaded, but we can add custom font loading here if needed
        
        // Example for loading a custom font (commented out since we're using system fonts):
        /*
        document.fonts.load('1em CustomFont').then(function() {
          document.documentElement.classList.add('fonts-loaded');
        }).catch(function() {
          // Font failed to load, continue with system fonts
          console.log('Custom font failed to load, using system fonts');
        });
        */
        
        // Mark fonts as loaded for system font stack
        document.documentElement.classList.add('fonts-loaded');
      } else {
        // Fallback for older browsers - assume fonts are loaded
        document.documentElement.classList.add('fonts-loaded');
      }
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: fontLoadingScript }}
    />
  );
}

/**
 * CSS Preloading Component
 * Preloads critical CSS files for subsequent page navigations
 */
export function CSSPreloading() {
  return (
    <>
      {/* Preload main CSS for subsequent navigations */}
      <link 
        rel="preload" 
        href="/_next/static/css/app-layout.css" 
        as="style" 
        onLoad="this.onload=null;this.rel='stylesheet'" 
      />
      
      {/* NoScript fallback */}
      <noscript>
        <link rel="stylesheet" href="/_next/static/css/app-layout.css" />
      </noscript>
    </>
  );
}

/**
 * Resource Hints Component
 * Provides DNS prefetching and preconnect hints for performance
 */
export function ResourceHints() {
  return (
    <>
      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Only preconnect if we're actually using external fonts/resources */}
      
      {/* Prefetch critical page resources */}
      <link rel="prefetch" href="/services" />
      <link rel="prefetch" href="/quote" />
    </>
  );
}

/**
 * Critical CSS Performance Monitor
 * Tracks performance metrics for critical CSS implementation
 */
export function CriticalCSSPerformanceMonitor() {
  const performanceScript = `
    (function() {
      if ('performance' in window) {
        window.addEventListener('load', function() {
          // Measure Critical CSS performance
          var paintTiming = performance.getEntriesByType('paint');
          var fcp = paintTiming.find(function(entry) { return entry.name === 'first-contentful-paint'; });
          var lcp = paintTiming.find(function(entry) { return entry.name === 'largest-contentful-paint'; });
          
          if (fcp) {
            console.log('First Contentful Paint: ' + fcp.startTime + 'ms');
            // Send to analytics if needed
            if (typeof gtag !== 'undefined') {
              gtag('event', 'timing_complete', {
                name: 'critical_css_fcp',
                value: Math.round(fcp.startTime)
              });
            }
          }
          
          // Monitor CLS
          if ('LayoutShiftAttribution' in window) {
            var cls = 0;
            new PerformanceObserver(function(list) {
              for (var entry of list.getEntries()) {
                if (!entry.hadRecentInput) {
                  cls += entry.value;
                }
              }
              if (cls > 0.1) {
                console.warn('Cumulative Layout Shift detected: ' + cls);
              }
            }).observe({type: 'layout-shift', buffered: true});
          }
        });
      }
    })();
  `;

  // Only include performance monitoring in development or with specific flag
  if (process.env.NODE_ENV === 'development' || process.env.MONITOR_CRITICAL_CSS) {
    return (
      <script
        dangerouslySetInnerHTML={{ __html: performanceScript }}
      />
    );
  }

  return null;
}