// lib/fonts/loader.ts
export interface FontLoadingStrategy {
  preload?: string[];
  swap?: string[];
  optional?: string[];
}

export class FontLoader {
  private loadedFonts = new Set<string>();
  private loadingPromises = new Map<string, Promise<void>>();

  constructor() {
    if (typeof window !== 'undefined') {
      this.setupFontLoadingDetection();
    }
  }

  private setupFontLoadingDetection() {
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        document.documentElement.classList.add('fonts-loaded');
        this.markSystemFontsAsLoaded();
      });
    }
  }

  private markSystemFontsAsLoaded() {
    // Mark system fonts as immediately available
    const systemFonts = [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial'
    ];
    
    systemFonts.forEach(font => this.loadedFonts.add(font));
  }

  async loadFont(fontFamily: string, url: string, options: FontFaceDescriptors = {}): Promise<void> {
    if (this.loadedFonts.has(fontFamily)) {
      return;
    }

    if (this.loadingPromises.has(fontFamily)) {
      return this.loadingPromises.get(fontFamily);
    }

    const loadingPromise = this.loadFontImplementation(fontFamily, url, options);
    this.loadingPromises.set(fontFamily, loadingPromise);

    try {
      await loadingPromise;
      this.loadedFonts.add(fontFamily);
    } catch (error) {
      console.warn(`Failed to load font ${fontFamily}:`, error);
    }

    return loadingPromise;
  }

  private async loadFontImplementation(
    fontFamily: string,
    url: string,
    options: FontFaceDescriptors
  ): Promise<void> {
    if (!('fonts' in document)) {
      // Fallback for browsers without Font Loading API
      return this.loadFontWithCSS(fontFamily, url);
    }

    const fontFace = new FontFace(fontFamily, `url(${url})`, {
      display: 'swap',
      ...options,
    });

    try {
      const loadedFont = await fontFace.load();
      document.fonts.add(loadedFont);
    } catch (error) {
      throw new Error(`Failed to load font: ${error}`);
    }
  }

  private loadFontWithCSS(fontFamily: string, url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      
      link.onload = () => resolve();
      link.onerror = () => reject(new Error(`Failed to load font CSS: ${url}`));
      
      document.head.appendChild(link);
    });
  }

  isFontLoaded(fontFamily: string): boolean {
    return this.loadedFonts.has(fontFamily);
  }

  async preloadFonts(fonts: Array<{ family: string; url: string; options?: FontFaceDescriptors }>) {
    const preloadPromises = fonts.map(font => 
      this.loadFont(font.family, font.url, font.options)
    );

    await Promise.allSettled(preloadPromises);
  }

  // Network-aware font loading
  shouldLoadCustomFonts(): boolean {
    if (!('connection' in navigator)) {
      return true; // Default to loading fonts if API not available
    }

    const connection = (navigator as any).connection;
    const effectiveType = connection.effectiveType;
    
    // Don't load custom fonts on slow connections
    if (effectiveType === '2g' || effectiveType === 'slow-2g') {
      return false;
    }

    // Consider data saver mode
    if (connection.saveData) {
      return false;
    }

    return true;
  }
}

export const fontLoader = new FontLoader();