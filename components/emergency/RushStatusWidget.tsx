'use client'

import { useState, useEffect } from 'react'

interface RushStatusWidgetProps {
  city?: string
  customMessage?: string
}

export function RushStatusWidget({ city, customMessage }: RushStatusWidgetProps) {
  const [currentStatus, setCurrentStatus] = useState({
    available: true,
    machinesAvailable: 2,
    avgTurnaround: '4-6 hours',
    lastCompleted: '2 hours ago',
    rushJobsInProgress: 3
  })

  // Simulate real-time updates (in production, this would come from an API)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatus(prev => ({
        ...prev,
        lastCompleted: Math.random() > 0.7 ? '1 hour ago' : prev.lastCompleted,
        rushJobsInProgress: Math.floor(Math.random() * 5) + 1
      }))
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const getStatusColor = () => {
    if (currentStatus.machinesAvailable >= 2) return 'bg-green-500'
    if (currentStatus.machinesAvailable === 1) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const getStatusText = () => {
    if (currentStatus.machinesAvailable >= 2) return 'RUSH CAPACITY AVAILABLE NOW'
    if (currentStatus.machinesAvailable === 1) return 'LIMITED RUSH CAPACITY AVAILABLE'
    return 'RUSH QUEUE FULL - WAITLIST AVAILABLE'
  }

  return (
    <div className={`inline-flex items-center ${getStatusColor()} text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg`}>
      <span className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></span>
      {customMessage || `${city ? `${city.toUpperCase()} - ` : ''}${getStatusText()}`}
    </div>
  )
}

export function DetailedRushStatus() {
  const [status, setStatus] = useState({
    machinesAvailable: 2,
    avgResponseTime: '47 minutes',
    rushJobsToday: 8,
    completionRate: 97,
    nextAvailable: '2:30 PM'
  })

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Real-Time Rush Status</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">{status.machinesAvailable}</div>
          <div className="text-sm text-gray-600">Machines Available</div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">{status.avgResponseTime}</div>
          <div className="text-sm text-gray-600">Avg Response Time</div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600">{status.rushJobsToday}</div>
          <div className="text-sm text-gray-600">Rush Jobs Today</div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-600">{status.completionRate}%</div>
          <div className="text-sm text-gray-600">On-Time Delivery</div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-bold text-red-600">{status.nextAvailable}</div>
          <div className="text-sm text-gray-600">Next Slot Available</div>
        </div>
      </div>
      
      <div className="mt-4 text-center text-sm text-gray-600">
        📊 Updated every 15 minutes • Last update: {new Date().toLocaleTimeString()}
      </div>
    </div>
  )
}