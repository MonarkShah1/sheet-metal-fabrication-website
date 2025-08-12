'use client'

import { useState, useEffect } from 'react'
import { AB_TESTS, getTestResults } from '@/config/ab-tests'

interface TestResult {
  testName: string
  variantId: string
  metric: string
  value: number
  timestamp: number
}

export function ABTestDashboard() {
  const [testResults, setTestResults] = useState<Record<string, TestResult[]>>({})
  const [selectedTest, setSelectedTest] = useState<string | null>(null)

  useEffect(() => {
    // Load test results from sessionStorage
    const results: Record<string, TestResult[]> = {}
    Object.keys(AB_TESTS).forEach(testName => {
      results[testName] = getTestResults(testName)
    })
    setTestResults(results)
  }, [])

  const activeTests = Object.values(AB_TESTS).filter(test => test.status === 'active')

  const calculateConversionRate = (testName: string, variantId: string) => {
    const results = testResults[testName] || []
    const variantResults = results.filter(r => r.variantId === variantId)
    const impressions = variantResults.filter(r => r.metric === 'impression').length
    const conversions = variantResults.filter(r => r.metric === 'cta_click').length
    
    return impressions > 0 ? ((conversions / impressions) * 100).toFixed(2) : '0.00'
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">A/B Testing Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {activeTests.map(test => (
          <div 
            key={test.testName}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedTest(selectedTest === test.testName ? null : test.testName)}
          >
            <h3 className="font-semibold text-lg mb-2">{test.testName}</h3>
            <p className="text-sm text-gray-600 mb-3">{test.description}</p>
            
            <div className="space-y-2">
              {test.variants.map(variant => (
                <div key={variant.id} className="flex justify-between items-center">
                  <span className="text-sm">{variant.id}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {variant.weight}%
                    </span>
                    <span className="text-xs text-green-600 font-medium">
                      {calculateConversionRate(test.testName, variant.id)}% CVR
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedTest && (
        <div className="border-t pt-6">
          <h3 className="text-xl font-semibold mb-4">
            Detailed Results: {selectedTest}
          </h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left">Variant</th>
                  <th className="px-4 py-2 text-left">Impressions</th>
                  <th className="px-4 py-2 text-left">Clicks</th>
                  <th className="px-4 py-2 text-left">Conversion Rate</th>
                  <th className="px-4 py-2 text-left">Latest Activity</th>
                </tr>
              </thead>
              <tbody>
                {AB_TESTS[selectedTest]?.variants.map(variant => {
                  const results = testResults[selectedTest] || []
                  const variantResults = results.filter(r => r.variantId === variant.id)
                  const impressions = variantResults.filter(r => r.metric === 'impression').length
                  const clicks = variantResults.filter(r => r.metric === 'cta_click').length
                  const conversionRate = calculateConversionRate(selectedTest, variant.id)
                  const latestActivity = variantResults.length > 0 
                    ? new Date(Math.max(...variantResults.map(r => r.timestamp))).toLocaleDateString()
                    : 'No activity'
                  
                  return (
                    <tr key={variant.id} className="border-b">
                      <td className="px-4 py-2 font-medium">{variant.id}</td>
                      <td className="px-4 py-2">{impressions}</td>
                      <td className="px-4 py-2">{clicks}</td>
                      <td className="px-4 py-2">
                        <span className={`font-medium ${
                          parseFloat(conversionRate) > 5 ? 'text-green-600' : 
                          parseFloat(conversionRate) > 2 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {conversionRate}%
                        </span>
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-500">{latestActivity}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-2">Testing Guidelines</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Run tests for at least 2 weeks to gather sufficient data</li>
          <li>• Ensure statistical significance before making decisions</li>
          <li>• Monitor Core Web Vitals during testing periods</li>
          <li>• Document winning variants for future reference</li>
        </ul>
      </div>
    </div>
  )
}

// Utility component for development/admin use
export function ABTestDebugInfo() {
  const [currentVariants, setCurrentVariants] = useState<Record<string, string>>({})

  useEffect(() => {
    if (typeof window === 'undefined') return

    const variants: Record<string, string> = {}
    Object.keys(AB_TESTS).forEach(testName => {
      const variant = sessionStorage.getItem(`ab_test_${testName}`)
      if (variant) variants[testName] = variant
    })
    setCurrentVariants(variants)
  }, [])

  if (process.env.NODE_ENV === 'production') return null

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-3 rounded-lg text-xs max-w-sm">
      <div className="font-semibold mb-2">A/B Test Variants (Dev Only)</div>
      {Object.entries(currentVariants).map(([test, variant]) => (
        <div key={test} className="flex justify-between">
          <span>{test}:</span>
          <span className="ml-2 text-yellow-300">{variant}</span>
        </div>
      ))}
    </div>
  )
}