import { RushStatusWidget } from './RushStatusWidget'
import { businessInfo } from '@/config/business-info'

interface EmergencyHeroProps {
  city?: string
  headline?: string
  subheadline?: string
  driveTime?: string
  stats?: {
    responseTime?: string
    emergenciesHandled?: number
    moneySaved?: string
  }
  customStatusMessage?: string
}

export function EmergencyHero({
  city,
  headline,
  subheadline,
  driveTime,
  stats,
  customStatusMessage
}: EmergencyHeroProps) {
  const defaultHeadline = city ? `${city} Production Line Down?` : 'Production Line Down?'
  const defaultSubheadline = city && driveTime 
    ? `We'll Have You Running in ${driveTime}` 
    : "We'll Have You Running by Lunch"
  
  const defaultStats = {
    responseTime: driveTime || '30 Min',
    emergenciesHandled: 97,
    moneySaved: '$2M+'
  }

  const displayStats = { ...defaultStats, ...stats }

  return (
    <section className="bg-red-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Widget */}
          <div className="mb-6">
            <RushStatusWidget 
              city={city} 
              customMessage={customStatusMessage}
            />
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {headline || defaultHeadline}
          </h1>
          <p className="text-2xl md:text-3xl mb-6 text-red-100">
            {subheadline || defaultSubheadline}
          </p>
          
          {/* Location-specific tagline */}
          <p className="text-xl mb-8">
            {city && driveTime ? (
              <>Emergency Metal Fabrication • {driveTime} Response • Same-Day Delivery</>
            ) : (
              <>Emergency Metal Fabrication • 4-6 Hour Turnaround • Same-Day GTA Delivery</>
            )}
          </p>
          
          {/* Emergency Hotline */}
          <div className="mb-8">
            <a 
              href={`tel:${businessInfo.telephone}`}
              className="inline-block bg-yellow-400 text-red-900 px-8 py-4 rounded-lg text-2xl font-bold hover:bg-yellow-300 transition-colors"
            >
              📞 {city ? `${city.toUpperCase()} EMERGENCY` : 'RUSH HOTLINE'}: {businessInfo.telephone}
            </a>
            <p className="text-sm mt-2 text-red-200">
              {city ? `Dedicated ${city} emergency response team` : 'Rush Hotline - Answered within 15 minutes'}
            </p>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-red-700 bg-opacity-50 p-4 rounded">
              <div className="text-2xl font-bold">{displayStats.responseTime}</div>
              <div className="text-sm">
                {city ? `${city} response time` : 'Average response time'}
              </div>
            </div>
            <div className="bg-red-700 bg-opacity-50 p-4 rounded">
              <div className="text-2xl font-bold">{displayStats.emergenciesHandled}{typeof displayStats.emergenciesHandled === 'number' ? '%' : ''}</div>
              <div className="text-sm">
                {typeof displayStats.emergenciesHandled === 'number' 
                  ? 'Rush jobs delivered on time'
                  : city 
                    ? `${city} emergencies solved this year`
                    : 'Emergencies solved this year'
                }
              </div>
            </div>
            <div className="bg-red-700 bg-opacity-50 p-4 rounded">
              <div className="text-2xl font-bold">{displayStats.moneySaved}</div>
              <div className="text-sm">
                {city 
                  ? `${city} downtime costs prevented`
                  : 'Saved in downtime this year'
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}