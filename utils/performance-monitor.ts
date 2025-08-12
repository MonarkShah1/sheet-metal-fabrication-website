/**
 * Performance Monitoring Utilities
 * Tracks Core Web Vitals and Critical CSS performance metrics
 */

export interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  cls?: number;
  fid?: number;
  ttfb?: number;
  criticalCssSize?: number;
  totalCssSize?: number;
}

export interface WebVitalsThresholds {
  fcp: { good: number; needsImprovement: number };
  lcp: { good: number; needsImprovement: number };
  cls: { good: number; needsImprovement: number };
  fid: { good: number; needsImprovement: number };
  ttfb: { good: number; needsImprovement: number };
}

/**
 * Core Web Vitals thresholds as defined by Google
 */
export const WEB_VITALS_THRESHOLDS: WebVitalsThresholds = {
  fcp: { good: 1800, needsImprovement: 3000 },
  lcp: { good: 2500, needsImprovement: 4000 },
  cls: { good: 0.1, needsImprovement: 0.25 },
  fid: { good: 100, needsImprovement: 300 },
  ttfb: { good: 800, needsImprovement: 1800 },
};

/**
 * Performance monitoring class for Critical CSS implementation
 */
export class CriticalCSSPerformanceMonitor {
  private metrics: PerformanceMetrics = {};
  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializeObservers();
  }

  /**
   * Initialize performance observers
   */
  private initializeObservers(): void {
    if (typeof window === 'undefined') return;

    // First Contentful Paint observer
    try {
      const paintObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.fcp = entry.startTime;
            this.logMetric('FCP', entry.startTime, WEB_VITALS_THRESHOLDS.fcp);
          }
        }
      });
      paintObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(paintObserver);
    } catch (e) {
      console.warn('Paint timing not supported');
    }

    // Largest Contentful Paint observer
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = lastEntry.startTime;
        this.logMetric('LCP', lastEntry.startTime, WEB_VITALS_THRESHOLDS.lcp);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);
    } catch (e) {
      console.warn('LCP timing not supported');
    }

    // Cumulative Layout Shift observer
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        this.metrics.cls = clsValue;
        this.logMetric('CLS', clsValue, WEB_VITALS_THRESHOLDS.cls);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    } catch (e) {
      console.warn('CLS timing not supported');
    }

    // First Input Delay observer
    try {
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.metrics.fid = (entry as any).processingStart - entry.startTime;
          this.logMetric('FID', this.metrics.fid, WEB_VITALS_THRESHOLDS.fid);
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);
    } catch (e) {
      console.warn('FID timing not supported');
    }

    // Time to First Byte
    this.measureTTFB();
  }

  /**
   * Measure Time to First Byte
   */
  private measureTTFB(): void {
    if (typeof window === 'undefined') return;

    try {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        this.metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        this.logMetric('TTFB', this.metrics.ttfb, WEB_VITALS_THRESHOLDS.ttfb);
      }
    } catch (e) {
      console.warn('Navigation timing not supported');
    }
  }

  /**
   * Log performance metric with threshold comparison
   */
  private logMetric(name: string, value: number, thresholds: { good: number; needsImprovement: number }): void {
    if (process.env.NODE_ENV === 'development') {
      let status = 'Good';
      if (value > thresholds.needsImprovement) {
        status = 'Poor';
      } else if (value > thresholds.good) {
        status = 'Needs Improvement';
      }

      console.log(`%c${name}: ${Math.round(value)}ms (${status})`, 
        status === 'Good' ? 'color: green' : 
        status === 'Needs Improvement' ? 'color: orange' : 'color: red'
      );
    }
  }

  /**
   * Get current performance metrics
   */
  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Send metrics to analytics (Google Analytics example)
   */
  public sendToAnalytics(): void {
    if (typeof window === 'undefined' || typeof (window as any).gtag === 'undefined') return;

    const metrics = this.getMetrics();
    
    // Send Core Web Vitals to Google Analytics
    Object.entries(metrics).forEach(([metric, value]) => {
      if (value !== undefined) {
        (window as any).gtag('event', metric.toUpperCase(), {
          event_category: 'Web Vitals',
          value: Math.round(metric === 'cls' ? value * 1000 : value),
          non_interaction: true,
        });
      }
    });
  }

  /**
   * Measure Critical CSS size
   */
  public measureCriticalCSSSize(): void {
    if (typeof window === 'undefined') return;

    const criticalCSSElement = document.getElementById('critical-css');
    if (criticalCSSElement) {
      const criticalCssContent = criticalCSSElement.innerHTML;
      this.metrics.criticalCssSize = new Blob([criticalCssContent]).size;
      
      if (process.env.NODE_ENV === 'development') {
        const sizeKB = Math.round(this.metrics.criticalCssSize / 1024 * 100) / 100;
        const status = sizeKB <= 14 ? 'Good' : sizeKB <= 20 ? 'Warning' : 'Poor';
        console.log(`%cCritical CSS Size: ${sizeKB}KB (${status})`, 
          status === 'Good' ? 'color: green' : 
          status === 'Warning' ? 'color: orange' : 'color: red'
        );
      }
    }
  }

  /**
   * Generate performance report
   */
  public generateReport(): string {
    const metrics = this.getMetrics();
    const report = [];

    report.push('📊 Critical CSS Performance Report');
    report.push('================================');

    // Core Web Vitals
    if (metrics.fcp) {
      const status = this.getMetricStatus(metrics.fcp, WEB_VITALS_THRESHOLDS.fcp);
      report.push(`🎨 First Contentful Paint: ${Math.round(metrics.fcp)}ms (${status})`);
    }

    if (metrics.lcp) {
      const status = this.getMetricStatus(metrics.lcp, WEB_VITALS_THRESHOLDS.lcp);
      report.push(`🖼️  Largest Contentful Paint: ${Math.round(metrics.lcp)}ms (${status})`);
    }

    if (metrics.cls !== undefined) {
      const status = this.getMetricStatus(metrics.cls, WEB_VITALS_THRESHOLDS.cls);
      report.push(`📐 Cumulative Layout Shift: ${metrics.cls.toFixed(3)} (${status})`);
    }

    if (metrics.fid) {
      const status = this.getMetricStatus(metrics.fid, WEB_VITALS_THRESHOLDS.fid);
      report.push(`👆 First Input Delay: ${Math.round(metrics.fid)}ms (${status})`);
    }

    if (metrics.ttfb) {
      const status = this.getMetricStatus(metrics.ttfb, WEB_VITALS_THRESHOLDS.ttfb);
      report.push(`⚡ Time to First Byte: ${Math.round(metrics.ttfb)}ms (${status})`);
    }

    // CSS Size metrics
    if (metrics.criticalCssSize) {
      const sizeKB = Math.round(metrics.criticalCssSize / 1024 * 100) / 100;
      const status = sizeKB <= 14 ? 'Good' : 'Needs Optimization';
      report.push(`📄 Critical CSS Size: ${sizeKB}KB (${status})`);
    }

    return report.join('\n');
  }

  /**
   * Get metric status based on thresholds
   */
  private getMetricStatus(value: number, thresholds: { good: number; needsImprovement: number }): string {
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.needsImprovement) return 'Needs Improvement';
    return 'Poor';
  }

  /**
   * Cleanup observers
   */
  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

/**
 * Initialize performance monitoring
 */
export function initializePerformanceMonitoring(): CriticalCSSPerformanceMonitor {
  const monitor = new CriticalCSSPerformanceMonitor();
  
  // Measure Critical CSS size after DOM is loaded
  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      monitor.measureCriticalCSSSize();
      
      // Send metrics to analytics after a delay to ensure all metrics are collected
      setTimeout(() => {
        monitor.sendToAnalytics();
      }, 2000);
    });

    // Generate report in development
    if (process.env.NODE_ENV === 'development') {
      setTimeout(() => {
        console.log(monitor.generateReport());
      }, 3000);
    }
  }

  return monitor;
}

/**
 * Utility to check if Critical CSS implementation is working correctly
 */
export function validateCriticalCSSImplementation(): boolean {
  if (typeof window === 'undefined') return false;

  const criticalCSS = document.getElementById('critical-css');
  const hasSystemFonts = getComputedStyle(document.body).fontFamily.includes('-apple-system');
  const hasMinimalLayoutShift = document.fonts ? document.fonts.ready.then(() => true) : true;

  return !!(criticalCSS && hasSystemFonts);
}

// Initialize monitoring when module is loaded in browser
if (typeof window !== 'undefined') {
  // Use a slight delay to ensure DOM is ready
  setTimeout(() => {
    initializePerformanceMonitoring();
  }, 100);
}