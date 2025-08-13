// lib/critical-css/injector.ts
import { useEffect } from 'react';

export interface CSSInjectionOptions {
  criticalCSS: string;
  fullCSSPath: string;
  preloadCSS?: boolean;
  fallbackCSS?: string;
}

export class CSSInjector {
  private loadedCSS = new Set<string>();
  private loadingPromises = new Map<string, Promise<void>>();

  injectCriticalCSS(css: string, id = 'critical-css'): void {
    if (typeof window === 'undefined') {
      return; // Server-side rendering handled separately
    }

    // Remove existing critical CSS if present
    const existing = document.getElementById(id);
    if (existing) {
      existing.remove();
    }

    const style = document.createElement('style');
    style.id = id;
    style.textContent = css;
    
    // Insert at the beginning of head for highest priority
    const head = document.head;
    head.insertBefore(style, head.firstChild);
  }

  async loadFullCSS(path: string, media = 'all'): Promise<void> {
    if (this.loadedCSS.has(path)) {
      return;
    }

    if (this.loadingPromises.has(path)) {
      return this.loadingPromises.get(path);
    }

    const loadingPromise = this.loadCSSFile(path, media);
    this.loadingPromises.set(path, loadingPromise);

    try {
      await loadingPromise;
      this.loadedCSS.add(path);
    } catch (error) {
      console.error(`Failed to load CSS: ${path}`, error);
    }

    return loadingPromise;
  }

  private loadCSSFile(path: string, media: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = path;
      link.media = media;
      
      link.onload = () => {
        // Mark as loaded and resolve
        resolve();
        
        // Trigger fonts loaded detection
        if ('fonts' in document) {
          document.fonts.ready.then(() => {
            document.documentElement.classList.add('fonts-loaded');
          });
        }
      };
      
      link.onerror = () => {
        reject(new Error(`Failed to load CSS: ${path}`));
      };

      document.head.appendChild(link);
    });
  }

  preloadCSS(path: string): void {
    if (typeof window === 'undefined') {
      return;
    }

    // Check if already preloaded
    const existing = document.querySelector(`link[rel="preload"][href="${path}"]`);
    if (existing) {
      return;
    }

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = path;
    
    document.head.appendChild(link);
  }

  setupAsyncCSSLoading(cssPath: string): void {
    if (typeof window === 'undefined') {
      return;
    }

    // Use the "print" media trick for non-blocking CSS loading
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssPath;
    link.media = 'print';
    
    link.onload = () => {
      link.media = 'all';
    };

    document.head.appendChild(link);

    // Fallback for browsers that don't support onload
    setTimeout(() => {
      if (link.media === 'print') {
        link.media = 'all';
      }
    }, 100);
  }

  // Network-aware loading strategy
  shouldLoadFullCSS(): boolean {
    if (!('connection' in navigator)) {
      return true;
    }

    const connection = (navigator as any).connection;
    
    // Don't load full CSS on very slow connections
    if (connection.effectiveType === 'slow-2g') {
      return false;
    }

    // Consider data saver mode
    if (connection.saveData) {
      return false;
    }

    return true;
  }
}

// React hook for CSS injection
export function useCSSInjection({ criticalCSS, fullCSSPath, preloadCSS = true }: CSSInjectionOptions) {
  useEffect(() => {
    const injector = new CSSInjector();

    // Inject critical CSS immediately
    injector.injectCriticalCSS(criticalCSS);

    // Preload full CSS
    if (preloadCSS) {
      injector.preloadCSS(fullCSSPath);
    }

    // Load full CSS based on network conditions
    const loadFullCSS = () => {
      if (injector.shouldLoadFullCSS()) {
        injector.setupAsyncCSSLoading(fullCSSPath);
      }
    };

    // Load after initial render
    const timeoutId = setTimeout(loadFullCSS, 0);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [criticalCSS, fullCSSPath, preloadCSS]);
}

export const cssInjector = new CSSInjector();