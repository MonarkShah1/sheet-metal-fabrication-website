// lib/critical-css/cache.ts
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import crypto from 'crypto';

const CACHE_DIR = join(process.cwd(), '.next/cache/critical-css');
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

interface CacheEntry {
  css: string;
  timestamp: number;
  hash: string;
}

export function ensureCacheDir(): void {
  if (!existsSync(CACHE_DIR)) {
    mkdirSync(CACHE_DIR, { recursive: true });
  }
}

export function generateCacheKey(data: any): string {
  const hash = crypto.createHash('md5');
  hash.update(JSON.stringify(data));
  return hash.digest('hex');
}

export function getCacheFilePath(key: string): string {
  return join(CACHE_DIR, `${key}.json`);
}

export function getCachedCSS(key: string): string | null {
  try {
    ensureCacheDir();
    const cachePath = getCacheFilePath(key);
    
    if (!existsSync(cachePath)) {
      return null;
    }

    const cacheData = JSON.parse(readFileSync(cachePath, 'utf-8')) as CacheEntry;
    
    // Check if cache is expired
    if (Date.now() - cacheData.timestamp > CACHE_TTL) {
      return null;
    }

    return cacheData.css;
  } catch (error) {
    console.error('Error reading cached CSS:', error);
    return null;
  }
}

export function setCachedCSS(key: string, css: string): void {
  try {
    ensureCacheDir();
    const cachePath = getCacheFilePath(key);
    
    const cacheEntry: CacheEntry = {
      css,
      timestamp: Date.now(),
      hash: crypto.createHash('md5').update(css).digest('hex'),
    };

    writeFileSync(cachePath, JSON.stringify(cacheEntry, null, 2));
  } catch (error) {
    console.error('Error caching CSS:', error);
  }
}

export function invalidateCache(key?: string): void {
  try {
    if (key) {
      // Invalidate specific key
      const cachePath = getCacheFilePath(key);
      if (existsSync(cachePath)) {
        require('fs').unlinkSync(cachePath);
      }
    } else {
      // Clear all cache
      if (existsSync(CACHE_DIR)) {
        const files = require('fs').readdirSync(CACHE_DIR);
        files.forEach((file: string) => {
          require('fs').unlinkSync(join(CACHE_DIR, file));
        });
      }
    }
  } catch (error) {
    console.error('Error invalidating cache:', error);
  }
}

export function cleanExpiredCache(): void {
  try {
    ensureCacheDir();
    
    if (!existsSync(CACHE_DIR)) {
      return;
    }

    const files = require('fs').readdirSync(CACHE_DIR);
    const now = Date.now();

    files.forEach((file: string) => {
      try {
        const cachePath = join(CACHE_DIR, file);
        const cacheData = JSON.parse(readFileSync(cachePath, 'utf-8')) as CacheEntry;
        
        if (now - cacheData.timestamp > CACHE_TTL) {
          require('fs').unlinkSync(cachePath);
        }
      } catch (error) {
        // If we can't read the file, delete it
        require('fs').unlinkSync(join(CACHE_DIR, file));
      }
    });
  } catch (error) {
    console.error('Error cleaning expired cache:', error);
  }
}