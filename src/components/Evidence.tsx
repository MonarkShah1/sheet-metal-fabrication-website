export function Evidence() {
  const stats = [
    {
      value: '10-day',
      label: 'Average Turnaround',
      icon: '⚡'
    },
    {
      value: '99.7%',
      label: 'On-time Delivery',
      icon: '✓'
    },
    {
      value: 'ISO 9001',
      label: 'Quality Certified',
      icon: '🏆'
    },
    {
      value: '1985',
      label: 'Est. Serving Ontario',
      icon: '📍'
    }
  ]

  return (
    <section className="py-12 bg-industrial-50">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-primary-800 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-industrial-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}