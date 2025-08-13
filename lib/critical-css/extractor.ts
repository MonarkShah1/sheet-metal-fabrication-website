// lib/critical-css/extractor.ts
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { defaultConfig, ViewportConfig } from './config';
import { getCachedCSS, setCachedCSS } from './cache';

export interface ExtractorOptions {
  url: string;
  css: string[];
  viewport: ViewportConfig;
  penthouse?: {
    timeout?: number;
    pageLoadSkipTimeout?: number;
    renderWaitTime?: number;
  };
}

export class CriticalCSSExtractor {
  private penthouse: any;

  constructor() {
    // Lazy load penthouse to avoid import issues in browser
    if (typeof window === 'undefined') {
      try {
        this.penthouse = require('penthouse');
      } catch (error) {
        console.warn('Penthouse not available:', error);
      }
    }
  }

  async extractCriticalCSS(options: ExtractorOptions): Promise<string> {
    const cacheKey = this.generateCacheKey(options);
    
    // Check cache first
    const cached = getCachedCSS(cacheKey);
    if (cached) {
      return cached;
    }

    if (!this.penthouse) {
      throw new Error('Penthouse not available for critical CSS extraction');
    }

    try {
      const criticalCSS = await this.penthouse({
        url: options.url,
        css: options.css,
        width: options.viewport.width,
        height: options.viewport.height,
        timeout: options.penthouse?.timeout || 30000,
        pageLoadSkipTimeout: options.penthouse?.pageLoadSkipTimeout || 5000,
        renderWaitTime: options.penthouse?.renderWaitTime || 100,
        screenshots: {
          basePath: 'debug_screenshots',
          type: 'jpeg',
          quality: 20
        }
      });

      // Cache the result
      setCachedCSS(cacheKey, criticalCSS);
      
      return this.processCriticalCSS(criticalCSS);
    } catch (error) {
      console.error('Critical CSS extraction failed:', error);
      // Return fallback critical CSS
      return this.getFallbackCSS();
    }
  }

  private generateCacheKey(options: ExtractorOptions): string {
    const keyData = {
      url: options.url,
      css: options.css,
      viewport: options.viewport,
    };
    
    return Buffer.from(JSON.stringify(keyData)).toString('base64');
  }

  private processCriticalCSS(css: string): string {
    // Remove comments and minify
    let processed = css
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
      .replace(/\s+/g, ' ') // Collapse whitespace
      .trim();

    // Ensure system fonts are prioritized
    processed = this.prioritizeSystemFonts(processed);

    return processed;
  }

  private prioritizeSystemFonts(css: string): string {
    // Replace font-family declarations to prioritize system fonts
    return css.replace(
      /font-family:\s*[^;]+;/g,
      (match) => {
        if (match.includes('-apple-system') || match.includes('system-ui')) {
          return match; // Already optimized
        }
        
        // Add system fonts as fallback
        const fontValue = match.match(/font-family:\s*([^;]+);/)?.[1];
        if (fontValue) {
          return `font-family: ${fontValue}, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;`;
        }
        return match;
      }
    );
  }

  private getFallbackCSS(): string {
    // Basic critical CSS fallback
    return `
      html { 
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
      }
      body { 
        margin: 0;
        background: #ffffff;
        color: #1f2937;
      }
      .container-custom {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 1rem;
      }
      h1, h2, h3, h4, h5, h6 {
        margin: 0 0 1rem 0;
        font-weight: 700;
        line-height: 1.2;
      }
    `.replace(/\s+/g, ' ').trim();
  }

  async extractForPage(route: string, baseUrl = 'http://localhost:3000'): Promise<string> {
    const cssPath = join(process.cwd(), 'app/globals.css');
    
    if (!existsSync(cssPath)) {
      throw new Error(`CSS file not found: ${cssPath}`);
    }

    const options: ExtractorOptions = {
      url: `${baseUrl}${route}`,
      css: [cssPath],
      viewport: defaultConfig.viewport,
      penthouse: {
        timeout: 30000,
        pageLoadSkipTimeout: 5000,
        renderWaitTime: 100,
      }
    };

    return this.extractCriticalCSS(options);
  }

  async extractForMultipleViewports(
    route: string,
    viewports: Record<string, ViewportConfig>,
    baseUrl = 'http://localhost:3000'
  ): Promise<Record<string, string>> {
    const results: Record<string, string> = {};
    const cssPath = join(process.cwd(), 'app/globals.css');

    for (const [name, viewport] of Object.entries(viewports)) {
      const options: ExtractorOptions = {
        url: `${baseUrl}${route}`,
        css: [cssPath],
        viewport,
      };

      try {
        results[name] = await this.extractCriticalCSS(options);
      } catch (error) {
        console.error(`Failed to extract critical CSS for ${name}:`, error);
        results[name] = this.getFallbackCSS();
      }
    }

    return results;
  }
}

// Utility function to get critical CSS for a specific route
export async function getCriticalCSS(route: string): Promise<string> {
  // In production, read from pre-generated files
  if (process.env.NODE_ENV === 'production') {
    const criticalPath = join(process.cwd(), 'styles/critical', `${route.replace('/', 'home')}.css`);
    
    if (existsSync(criticalPath)) {
      return readFileSync(criticalPath, 'utf-8');
    }
  }

  // In development, generate on-demand or return fallback
  const extractor = new CriticalCSSExtractor();
  
  try {
    return await extractor.extractForPage(route);
  } catch (error) {
    console.error('Failed to generate critical CSS:', error);
    return extractor['getFallbackCSS']();
  }
}