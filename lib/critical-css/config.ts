// lib/critical-css/config.ts
export interface CriticalCSSConfig {
  pages: string[];
  viewport: {
    width: number;
    height: number;
  };
  minify: boolean;
  inline: boolean;
}

export interface ViewportConfig {
  width: number;
  height: number;
}

export interface PenthouseConfig {
  timeout: number;
  pageLoadSkipTimeout: number;
  renderWaitTime: number;
  blockJSRequests: boolean;
}

export const defaultConfig: CriticalCSSConfig = {
  pages: ['/', '/services', '/quote', '/about', '/contact'],
  viewport: {
    width: 1440,
    height: 900,
  },
  minify: true,
  inline: true,
};

export const viewports: Record<string, ViewportConfig> = {
  mobile: { width: 375, height: 812 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1440, height: 900 },
};

export const penthouseConfig: PenthouseConfig = {
  timeout: 30000,
  pageLoadSkipTimeout: 5000,
  renderWaitTime: 100,
  blockJSRequests: false,
};