// components/CriticalCSSProvider.tsx
'use client'

import { useEffect, ReactNode } from 'react';
import { useCSSInjection } from '@/lib/critical-css/injector';

interface CriticalCSSProviderProps {
  criticalCSS: string;
  fullCSSPath: string;
  preloadCSS?: boolean;
  children: ReactNode;
}

export function CriticalCSSProvider({ 
  criticalCSS, 
  fullCSSPath, 
  preloadCSS = true,
  children 
}: CriticalCSSProviderProps) {
  // Use the CSS injection hook
  useCSSInjection({ criticalCSS, fullCSSPath, preloadCSS });

  useEffect(() => {
    // Mark fonts as loaded when custom fonts are ready
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        document.documentElement.classList.add('fonts-loaded');
      });
    }

    // Add performance observer for monitoring
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            console.log(`${entry.name}: ${entry.startTime.toFixed(2)}ms`);
          }
        }
      });
      
      try {
        observer.observe({ entryTypes: ['paint'] });
      } catch (e) {
        // PerformanceObserver not fully supported
      }
    }
  }, []);

  return (
    <>
      {/* Inline critical CSS for SSR */}
      <style 
        dangerouslySetInnerHTML={{ __html: criticalCSS }} 
        data-critical-css
      />
      {children}
    </>
  );
}

// Server-side version for SSR
export function CriticalCSSHead({ criticalCSS }: { criticalCSS: string }) {
  return (
    <style 
      dangerouslySetInnerHTML={{ __html: criticalCSS }} 
      data-critical-css
    />
  );
}