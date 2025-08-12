module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // CSS optimization for production
    ...(process.env.NODE_ENV === 'production' && {
      cssnano: {
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true,
            },
            normalizeWhitespace: true,
            colormin: true,
            minifySelectors: true,
            minifyFontValues: true,
            minifyParams: true,
            convertValues: true,
            reduceTransforms: true,
            mergeLonghand: true,
            mergeRules: true,
          },
        ],
      },
    }),
  },
}