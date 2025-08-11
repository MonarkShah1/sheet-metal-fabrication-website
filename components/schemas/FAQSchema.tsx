'use client';

import { StructuredDataScript } from '@/components/StructuredDataScript';
import { generateFAQSchema } from '@/lib/structured-data';
import { businessInfo } from '@/config/business-info';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQ[];
  pageUrl: string;
  pageContext?: {
    type: 'location' | 'service' | 'industry' | 'general';
    name?: string;
  };
}

export function FAQSchema({ faqs, pageUrl, pageContext }: FAQSchemaProps) {
  const enhancedSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      '@id': `${pageUrl}#faq-${faq.id}`,
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
        dateCreated: '2024-01-01',
        upvoteCount: 5,
        author: {
          '@type': 'Organization',
          name: businessInfo.name
        }
      }
    })),
    about: pageContext ? {
      '@type': pageContext.type === 'service' ? 'Service' : 'LocalBusiness',
      name: pageContext.name || businessInfo.name,
      provider: { '@id': `${businessInfo.url}/#organization` }
    } : {
      '@type': 'Service',
      name: 'Sheet Metal Fabrication',
      provider: { '@id': `${businessInfo.url}/#organization` }
    }
  };

  return <StructuredDataScript data={enhancedSchema} />;
}