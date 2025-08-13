// components/SystemFontOptimizer.tsx
'use client'

import { useEffect } from 'react';
import { systemFontCSS, fontMetrics, generateFontFallbackCSS } from '@/lib/fonts/system-stack';
import { fontLoader } from '@/lib/fonts/loader';

export function SystemFontOptimizer() {
  useEffect(() => {
    // Check if we should load custom fonts based on network conditions
    if (fontLoader.shouldLoadCustomFonts()) {
      // Preload Inter font with system font fallback
      fontLoader.preloadFonts([
        {
          family: 'Inter',
          url: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
          options: {
            display: 'swap',
            unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD'
          }
        }
      ]);
    }

    // Set up font loading detection
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        document.documentElement.classList.add('fonts-loaded');
        
        // Measure font loading performance
        const paintEntries = performance.getEntriesByType('paint');
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        if (fcp) {
          console.log(`FCP with optimized fonts: ${fcp.startTime.toFixed(2)}ms`);
        }
      });
    }
  }, []);

  return (
    <style jsx global>{`
      /* System font stack with optimized metrics */
      ${systemFontCSS}
      
      /* Fallback font metrics for Inter */
      ${generateFontFallbackCSS('Inter', fontMetrics.inter)}
      
      /* Progressive enhancement for custom fonts */
      .fonts-loaded {
        font-family: 'Inter', var(--font-sans);
      }
      
      /* Optimize font rendering performance */
      html {
        font-display: swap;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
      }
      
      /* Prevent layout shift during font loading */
      @font-face {
        font-family: 'Inter Fallback';
        src: local('system-ui'), local('-apple-system'), local('BlinkMacSystemFont');
        ascent-override: 90%;
        descent-override: 20%;
        line-gap-override: 0%;
        size-adjust: 107%;
      }
      
      /* Default to system fonts, upgrade to Inter when loaded */
      body {
        font-family: var(--font-sans);
        transition: font-family 0.1s ease-out;
      }
      
      /* Ensure headings use optimized metrics */
      h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-sans);
        font-weight: 700;
        line-height: 1.2;
        text-wrap: balance;
        letter-spacing: -0.025em;
      }
      
      /* Optimize button text rendering */
      button, .btn {
        font-family: var(--font-sans);
        font-weight: 600;
        letter-spacing: -0.01em;
      }
      
      /* Code elements use mono stack */
      code, pre, kbd {
        font-family: var(--font-mono);
      }
      
      /* Prevent font synthesis for better performance */
      * {
        font-synthesis: none;
      }
      
      /* Hide font loading flicker */
      .font-loading {
        visibility: hidden;
      }
      
      .fonts-loaded .font-loading {
        visibility: visible;
      }
    `}</style>
  );
}

// Hook to check if fonts are loaded
export function useFontsLoaded() {
  useEffect(() => {
    const isLoaded = document.documentElement.classList.contains('fonts-loaded');
    if (!isLoaded && 'fonts' in document) {
      document.fonts.ready.then(() => {
        document.documentElement.classList.add('fonts-loaded');
      });
    }
  }, []);
}

// Component for progressive font loading indicator
export function FontLoadingIndicator() {
  return (
    <style jsx global>{`
      /* Show loading state until fonts are ready */
      .font-loading-indicator {
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
      }
      
      .fonts-loaded .font-loading-indicator {
        opacity: 1;
      }
    `}</style>
  );
}