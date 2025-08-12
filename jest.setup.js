import '@testing-library/jest-dom'

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

// Mock window.gtag for analytics testing
Object.defineProperty(window, 'gtag', {
  writable: true,
  value: jest.fn(),
})

// Mock sessionStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}
Object.defineProperty(window, 'sessionStorage', {
  writable: true,
  value: localStorageMock,
})

// Mock Next.js router
jest.mock('next/router', () => require('next-router-mock'))

// Mock environment variables
process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = 'GA_MEASUREMENT_ID'
process.env.NEXT_PUBLIC_SITE_URL = 'https://canadianmetalfab.com'