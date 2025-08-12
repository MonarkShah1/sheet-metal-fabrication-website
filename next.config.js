/** @type {import('next').NextConfig} */

// Critical CSS and Performance Optimization Configuration
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['canadianmetalfab.com'],
    minimumCacheTTL: 60,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on',
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=(self)',
        },
      ],
    },
    {
      source: '/fonts/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    {
      source: '/images/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
  redirects: async () => [
    {
      source: '/index.html',
      destination: '/',
      permanent: true,
    },
    {
      source: '/home',
      destination: '/',
      permanent: true,
    },
    // Service page redirects for old URLs
    {
      source: '/services/laser-cutting',
      destination: '/services/laser-cutting-bending',
      permanent: true,
    },
  ],
  
  // Performance optimizations for Critical CSS
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Advanced Webpack configuration for optimal performance
  webpack: (config, { dev, isServer, webpack }) => {
    // Production optimizations
    if (!dev) {
      // Enhanced JavaScript optimization
      config.optimization = {
        ...config.optimization,
        minimize: true,
        usedExports: true,
        sideEffects: false,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 100000,
          cacheGroups: {
            // Vendor libraries
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              priority: 10,
              reuseExistingChunk: true,
              chunks: 'all',
            },
            // Common components
            common: {
              minChunks: 2,
              priority: 5,
              reuseExistingChunk: true,
              chunks: 'all',
            },
            // Styles
            styles: {
              name: 'styles',
              test: /\.(css|scss|sass)$/,
              chunks: 'all',
              enforce: true,
              priority: 20,
            },
            // Heavy libraries (maps, charts, etc.)
            heavy: {
              test: /[\\/]node_modules[\\/](leaflet|framer-motion|react-leaflet)[\\/]/,
              name: 'heavy-libs',
              priority: 15,
              chunks: 'all',
            },
          },
        },
      }

      // Add webpack plugins for optimization
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production'),
        })
      )
    }

    // Tree shaking optimizations for all builds
    config.resolve.alias = {
      ...config.resolve.alias,
      // Optimize lodash imports
      lodash: 'lodash-es',
    }

    // Bundle analysis reporting
    if (process.env.ANALYZE === 'true') {
      config.plugins.push(
        new (require('@next/bundle-analyzer/dist/webpack-plugin'))({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true,
        })
      )
    }
    
    return config;
  },
  
  // Enable modern CSS features and optimizations (merged with existing)
  experimental: {
    typedRoutes: true,
    optimizeCss: true,
    // Enable modern bundle optimization
    serverComponentsExternalPackages: ['critters'],
    // Performance optimizations
    optimizePackageImports: ['lodash', 'date-fns', 'framer-motion'],
    turbo: {
      // Enable Turbo for faster builds
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
}

module.exports = withBundleAnalyzer(nextConfig)