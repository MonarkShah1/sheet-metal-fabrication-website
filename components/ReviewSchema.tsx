import { StructuredDataScript } from './StructuredDataScript'
import { businessInfo } from '@/config/business-info'

interface Review {
  rating: string
  author: string
  date: string
  text: string
}

interface ReviewSchemaProps {
  reviews: Review[]
}

function calculateAverage(reviews: Review[]): string {
  if (reviews.length === 0) return '0'
  const sum = reviews.reduce((acc, review) => acc + parseFloat(review.rating), 0)
  return (sum / reviews.length).toFixed(1)
}

export function ReviewSchema({ reviews }: ReviewSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${businessInfo.url}/#organization`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: calculateAverage(reviews),
      reviewCount: reviews.length,
      bestRating: '5',
      worstRating: '1'
    },
    review: reviews.map(review => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: '5'
      },
      author: {
        '@type': 'Person',
        name: review.author
      },
      datePublished: review.date,
      reviewBody: review.text
    }))
  }

  return <StructuredDataScript data={schema} />
}