import { MetadataRoute } from 'next'
import { businessInfo } from '@/config/business-info'

// AI bots to block from content scraping
const AI_BOTS = [
  'GPTBot',
  'ClaudeBot', 
  'Anthropic-ai',
  'Google-Extended',
  'PerplexityBot',
  'YouBot',
  'CCBot',
  'ChatGPT-User',
  'Omgilibot',
  'FacebookBot',
  'Applebot',
] as const

// Protected paths for general crawlers
const PROTECTED_PATHS = [
  '/api/',
  '/admin/',
  '/_next/',
  '/static/',
  '/*.json$',
  '/404',
  '/search',
  '/thank-you',
] as const

// Less restrictive paths for search engines
const SEARCH_ENGINE_PATHS = [
  '/api/',
  '/admin/',
  '/_next/',
  '/static/',
] as const

export default function robots(): MetadataRoute.Robots {
  try {
    const baseUrl = businessInfo.url
    
    if (!baseUrl) {
      console.error('Base URL not configured in business info')
      throw new Error('Base URL not configured in business info')
    }

    return {
      rules: [
        // General crawlers with rate limiting
        {
          userAgent: '*',
          allow: '/',
          disallow: [...PROTECTED_PATHS],
          crawlDelay: 1,
        },
        // Optimized for Google - no delay, minimal restrictions
        {
          userAgent: 'Googlebot',
          allow: '/',
          disallow: [...SEARCH_ENGINE_PATHS],
        },
        // Bing with slight delay for server protection
        {
          userAgent: 'Bingbot',
          allow: '/',
          disallow: [...SEARCH_ENGINE_PATHS],
          crawlDelay: 2,
        },
        // Yahoo/Verizon search
        {
          userAgent: 'Slurp',
          allow: '/',
          disallow: [...SEARCH_ENGINE_PATHS],
          crawlDelay: 2,
        },
        // DuckDuckGo search
        {
          userAgent: 'DuckDuckBot',
          allow: '/',
          disallow: [...SEARCH_ENGINE_PATHS],
          crawlDelay: 1,
        },
        // Yandex search engine (popular in Russia)
        {
          userAgent: 'YandexBot',
          allow: '/',
          disallow: [...SEARCH_ENGINE_PATHS],
          crawlDelay: 3,
        },
        // Baidu search engine (China)
        {
          userAgent: 'Baiduspider',
          allow: '/',
          disallow: [...SEARCH_ENGINE_PATHS],
          crawlDelay: 3,
        },
        // Block AI bots from scraping content
        ...AI_BOTS.map(bot => ({
          userAgent: bot,
          disallow: '/',
        })),
      ],
      sitemap: `${baseUrl}/sitemap.xml`,
      host: baseUrl,
    }
  } catch (error) {
    console.error('Error generating robots.txt:', error)
    // Fallback to minimal safe configuration
    return {
      rules: [
        {
          userAgent: '*',
          allow: '/',
          disallow: '/api/',
          crawlDelay: 2,
        }
      ],
      sitemap: 'https://canadianmetalfab.com/sitemap.xml',
    }
  }
}