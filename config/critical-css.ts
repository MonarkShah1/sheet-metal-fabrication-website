/**
 * Critical CSS Configuration
 * Optimizes above-the-fold rendering for Core Web Vitals
 */

export interface CriticalCSSConfig {
  // Critical CSS size budget (14KB gzipped max)
  maxSize: number;
  // Viewport dimensions for extraction
  viewports: Array<{
    width: number;
    height: number;
    name: string;
  }>;
  // Routes to generate critical CSS for
  routes: Array<{
    path: string;
    name: string;
    priority: 'high' | 'medium' | 'low';
  }>;
  // CSS selectors to always include
  includeSelectors: string[];
  // CSS selectors to always exclude
  excludeSelectors: string[];
  // System font fallback stacks
  fontStacks: {
    sans: string;
    serif: string;
    mono: string;
  };
}

/**
 * Main configuration for critical CSS optimization
 */
export const criticalCSSConfig: CriticalCSSConfig = {
  maxSize: 14336, // 14KB in bytes
  
  viewports: [
    { width: 375, height: 667, name: 'mobile' },      // iPhone SE
    { width: 768, height: 1024, name: 'tablet' },     // iPad
    { width: 1920, height: 1080, name: 'desktop' }    // Desktop
  ],
  
  routes: [
    // High priority - main landing pages
    { path: '/', name: 'homepage', priority: 'high' },
    { path: '/services', name: 'services', priority: 'high' },
    { path: '/quote', name: 'quote', priority: 'high' },
    { path: '/about', name: 'about', priority: 'high' },
    { path: '/contact', name: 'contact', priority: 'high' },
    
    // Medium priority - service pages
    { path: '/services/laser-cutting-bending', name: 'laser-cutting', priority: 'medium' },
    { path: '/services/sheet-metal-fabrication-ontario', name: 'sheet-metal', priority: 'medium' },
    { path: '/services/steel-fabrication-ontario', name: 'steel-fabrication', priority: 'medium' },
    { path: '/services/welding', name: 'welding', priority: 'medium' },
    { path: '/services/custom-metal-work-ontario', name: 'custom-metal', priority: 'medium' },
    
    // Low priority - location and industry pages
    { path: '/locations', name: 'locations', priority: 'low' },
    { path: '/industries', name: 'industries', priority: 'low' }
  ],
  
  // Critical selectors that must always be included
  includeSelectors: [
    // Base reset and box-sizing
    '*', '*::before', '*::after',
    
    // Typography basics
    'html', 'body', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a',
    
    // Critical layout components
    '.container-custom', '.section-padding',
    '.btn-primary', '.btn-secondary',
    
    // Navigation (above-the-fold)
    'nav', '.navigation', '.nav-item', '.nav-link',
    '.mobile-menu', '.menu-toggle',
    
    // Hero section (always above-the-fold)
    '.hero', '.hero-title', '.hero-subtitle', '.hero-cta',
    
    // Skip to content for accessibility
    '.skip-to-content',
    
    // Critical utility classes
    '.sr-only', '.not-sr-only',
    '.text-left', '.text-center', '.text-right',
    '.font-bold', '.font-semibold', '.font-medium',
    '.text-sm', '.text-base', '.text-lg', '.text-xl', '.text-2xl', '.text-3xl',
    '.mb-4', '.mb-6', '.mb-8', '.mt-4', '.mt-6', '.mt-8',
    '.px-4', '.px-6', '.py-4', '.py-6', '.py-8',
    '.bg-white', '.bg-gray-50', '.bg-gray-100',
    '.text-gray-900', '.text-gray-700', '.text-gray-600',
    '.max-w-7xl', '.max-w-4xl', '.mx-auto',
    '.flex', '.flex-col', '.items-center', '.justify-center', '.justify-between',
    '.grid', '.grid-cols-1', '.grid-cols-2', '.grid-cols-3',
    '.gap-4', '.gap-6', '.gap-8',
    '.rounded', '.rounded-lg', '.shadow', '.shadow-lg',
    '.transition-colors', '.duration-200',
    
    // Responsive utilities for critical above-the-fold content
    '.sm\\:px-6', '.sm\\:py-8', '.sm\\:text-lg',
    '.md\\:grid-cols-2', '.md\\:text-xl',
    '.lg\\:px-8', '.lg\\:py-12', '.lg\\:text-2xl', '.lg\\:grid-cols-3',
    
    // Industry-specific colors (from Tailwind config)
    '.text-industry-dark', '.text-industry-blue', '.text-industry-orange',
    '.bg-industry-light', '.bg-industry-white', '.bg-industry-dark',
    '.bg-industry-blue', '.bg-industry-orange'
  ],
  
  // Selectors to exclude from critical CSS
  excludeSelectors: [
    // Non-critical animations
    '.animate-pulse', '.animate-bounce', '.animate-spin',
    '.animate-fade-in', '.animate-slide-up',
    
    // Below-the-fold content
    '.footer', '.footer-content', '.footer-links',
    '.testimonials', '.case-studies',
    '.detailed-specifications', '.technical-details',
    
    // Interactive elements that don't affect initial render
    '.modal', '.dropdown-menu', '.tooltip', '.popover',
    '.accordion-content', '.tab-content',
    
    // Print styles
    '@media print',
    
    // Large responsive utilities for very large screens
    '.xl\\:text-4xl', '.2xl\\:text-5xl', '.xl\\:py-20', '.2xl\\:py-24',
    
    // Complex shadows and effects
    '.shadow-2xl', '.shadow-inner', '.drop-shadow',
    
    // Complex gradients (not critical for initial render)
    '.bg-gradient-to-r', '.bg-gradient-to-l', '.bg-gradient-to-t', '.bg-gradient-to-b'
  ],
  
  // Optimized system font stacks
  fontStacks: {
    sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
    mono: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  }
};

/**
 * Generate critical CSS for specific route
 */
export function getCriticalCSSForRoute(route: string): string {
  // This would be implemented with a build-time critical CSS extraction tool
  // For now, return base critical styles
  return generateBaseCriticalCSS();
}

/**
 * Generate base critical CSS that applies to all routes
 */
export function generateBaseCriticalCSS(): string {
  const { fontStacks } = criticalCSSConfig;
  
  return `
    /* Critical CSS Reset & Base Styles */
    *, *::before, *::after { 
      box-sizing: border-box; 
      margin: 0; 
      padding: 0; 
    }
    
    /* System Font Stack - Zero Layout Shift */
    html {
      font-family: ${fontStacks.sans};
      line-height: 1.6;
      -webkit-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      text-size-adjust: 100%;
    }
    
    body {
      font-family: ${fontStacks.sans};
      color: #111827;
      background-color: #ffffff;
      antialiased: true;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    /* Critical Layout Containers */
    .container-custom {
      max-width: 80rem;
      margin-left: auto;
      margin-right: auto;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    
    @media (min-width: 640px) {
      .container-custom {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }
    }
    
    @media (min-width: 1024px) {
      .container-custom {
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }
    
    /* Critical Typography */
    h1, h2, h3, h4, h5, h6 {
      font-weight: 600;
      line-height: 1.25;
    }
    
    h1 { font-size: 2.25rem; }
    h2 { font-size: 1.875rem; }
    h3 { font-size: 1.5rem; }
    
    @media (min-width: 768px) {
      h1 { font-size: 3rem; }
      h2 { font-size: 2.25rem; }
      h3 { font-size: 1.875rem; }
    }
    
    /* Critical Button Styles */
    .btn-primary {
      background-color: #1D4ED8;
      color: #ffffff;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      font-weight: 600;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s;
    }
    
    .btn-primary:hover {
      background-color: #1E3A8A;
    }
    
    /* Critical Layout Utilities */
    .flex { display: flex; }
    .flex-col { flex-direction: column; }
    .items-center { align-items: center; }
    .justify-center { justify-content: center; }
    .justify-between { justify-content: space-between; }
    .text-center { text-align: center; }
    .mx-auto { margin-left: auto; margin-right: auto; }
    .min-h-screen { min-height: 100vh; }
    
    /* Skip to Content - Accessibility Critical */
    .skip-to-content {
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: #fff;
      padding: 8px;
      border-radius: 4px;
      text-decoration: none;
      z-index: 1000;
    }
    
    .skip-to-content:focus {
      top: 6px;
    }
    
    /* Critical responsive utilities */
    @media (max-width: 767px) {
      .container-custom { padding-left: 1rem; padding-right: 1rem; }
    }
  `.replace(/\s+/g, ' ').trim();
}

/**
 * Font display optimization for custom fonts
 */
export const fontDisplayStrategy = {
  // Use font-display: swap for custom fonts to prevent FOIT
  customFonts: 'swap',
  
  // System fonts don't need font-display
  systemFonts: 'auto',
  
  // Preload critical font files
  preloadFonts: [
    // Only preload if using custom fonts - current setup uses system fonts
  ]
} as const;

/**
 * CSS loading strategy configuration
 */
export const cssLoadingStrategy = {
  // Inline critical CSS directly in HTML
  inline: {
    maxSize: '14KB',
    minify: true,
    extractMediaQueries: true
  },
  
  // Asynchronously load non-critical CSS
  async: {
    technique: 'preload-polyfill',
    fallback: 'noscript-link'
  },
  
  // Defer third-party CSS
  thirdParty: {
    defer: true,
    loadAfterCritical: true
  }
} as const;

/**
 * Performance budget for critical CSS
 */
export const performanceBudget = {
  criticalCSS: {
    maxSize: '14KB',
    warningSize: '12KB',
    gzipped: true
  },
  
  totalCSS: {
    maxSize: '50KB',
    warningSize: '40KB',
    gzipped: true
  },
  
  fonts: {
    maxSize: '100KB',
    warningSize: '80KB',
    preferSystemFonts: true
  }
} as const;

/**
 * Monitoring and validation utilities
 */
export function validateCriticalCSSSize(css: string): {
  isValid: boolean;
  size: number;
  sizeFormatted: string;
  recommendation?: string;
} {
  const sizeBytes = new Blob([css]).size;
  const sizeKB = Math.round(sizeBytes / 1024 * 100) / 100;
  const isValid = sizeBytes <= criticalCSSConfig.maxSize;
  
  return {
    isValid,
    size: sizeBytes,
    sizeFormatted: `${sizeKB}KB`,
    recommendation: !isValid 
      ? `Critical CSS is ${sizeKB}KB, which exceeds the 14KB budget. Consider removing non-critical selectors.`
      : undefined
  };
}

export default criticalCSSConfig;