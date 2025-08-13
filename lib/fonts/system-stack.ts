// lib/fonts/system-stack.ts
export const systemFonts = {
  sans: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    '"Noto Sans"',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"'
  ].join(', '),
  
  serif: [
    'Georgia',
    'Cambria',
    '"Times New Roman"',
    'Times',
    'serif'
  ].join(', '),
  
  mono: [
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    '"Liberation Mono"',
    '"Courier New"',
    'monospace'
  ].join(', ')
};

export const fontMetrics = {
  inter: {
    fallback: systemFonts.sans,
    ascent: 0.9,
    descent: -0.2,
    lineGap: 0,
    unitsPerEm: 1000,
  },
};

export function generateFontFallbackCSS(fontFamily: string, metrics: typeof fontMetrics.inter) {
  return `
    @font-face {
      font-family: '${fontFamily} Fallback';
      src: local('${metrics.fallback}');
      ascent-override: ${(metrics.ascent * 100).toFixed(2)}%;
      descent-override: ${Math.abs(metrics.descent * 100).toFixed(2)}%;
      line-gap-override: ${(metrics.lineGap * 100).toFixed(2)}%;
    }
  `;
}

export const systemFontCSS = `
  :root {
    --font-sans: ${systemFonts.sans};
    --font-serif: ${systemFonts.serif};
    --font-mono: ${systemFonts.mono};
  }
  
  /* Optimized system font application */
  html {
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
  
  /* Prevent font synthesis for better performance */
  * {
    font-synthesis: none;
  }
  
  /* Optimize heading rendering */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    text-wrap: balance;
  }
`;