// config/critical-css.config.js
module.exports = {
  pages: [
    { route: '/', viewport: { width: 1440, height: 900 } },
    { route: '/services', viewport: { width: 1440, height: 900 } },
    { route: '/quote', viewport: { width: 1440, height: 900 } },
    { route: '/about', viewport: { width: 1440, height: 900 } },
    { route: '/contact', viewport: { width: 1440, height: 900 } },
  ],
  viewports: {
    mobile: {
      width: 375,
      height: 812,
    },
    tablet: {
      width: 768,
      height: 1024,
    },
    desktop: {
      width: 1440,
      height: 900,
    },
  },
  minify: true,
  extract: true,
  inline: true,
  penthouse: {
    timeout: 30000,
    pageLoadSkipTimeout: 5000,
    renderWaitTime: 100,
    blockJSRequests: false,
  },
  critical: {
    base: 'public',
    src: 'app/globals.css',
    css: [
      'app/globals.css'
    ],
    dimensions: [
      {
        height: 900,
        width: 1440
      },
      {
        height: 812,
        width: 375
      },
      {
        height: 1024,
        width: 768
      }
    ],
    penthouse: {
      timeout: 30000,
      pageLoadSkipTimeout: 5000,
    },
    extract: true,
    inlineImages: true,
    minify: true,
    pathRewrite: {},
    rebase: {
      from: 'app/globals.css',
      to: 'styles/critical/'
    }
  }
};