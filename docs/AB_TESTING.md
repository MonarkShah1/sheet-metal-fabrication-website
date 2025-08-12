# A/B Testing Framework Documentation

## Overview

This A/B testing framework provides a comprehensive solution for testing different variations of CTAs, headlines, and other page elements to optimize conversion rates and user engagement. The framework is designed specifically for the Canadian Metal Fabricators website to test ICP-focused messaging variations.

## Architecture

### Core Components

1. **ABTest Component** (`/components/ABTest.tsx`)
   - Reusable component for creating A/B tests
   - Handles variant selection and persistence
   - Tracks test events via Google Analytics

2. **ABTestButton Component** (`/components/ABTestButton.tsx`)
   - Specialized component for CTA button testing
   - Supports both styled buttons and standard Button component
   - Automatic conversion tracking

3. **ABTestHeadline Component** (`/components/ABTestHeadline.tsx`)
   - Component for testing headline variations
   - Supports different heading levels (H1-H6)
   - Engagement tracking on view

4. **useABTest Hook** (`/hooks/useABTest.ts`)
   - Custom hook for A/B test logic
   - Handles variant selection and storage
   - Provides conversion tracking utilities

5. **A/B Test Configuration** (`/config/ab-tests.ts`)
   - Centralized configuration for all tests
   - Test status management
   - Results tracking utilities

### Analytics Integration

- **Google Analytics 4 Events**: All test interactions are tracked as GA4 events
- **Enhanced Ecommerce**: Conversion funnel tracking for quote requests
- **Custom Dimensions**: Test name and variant information
- **Session Storage**: Variant persistence across page loads

## Current Active Tests

### 1. Hero CTA Primary (`hero_cta_primary`)
- **Location**: Navigation header
- **Variants**:
  - Control: "Get Quote"
  - ICP Focused: "Fix Your Supply Chain Issues"
- **Weight**: 50/50 split

### 2. Industry Hero CTA (`industry_hero_cta`)
- **Location**: Industry page hero sections
- **Variants**:
  - Control: "Fix Your Supply Issues"
  - Problem Solving: "Solve Your Manufacturing Challenges"
  - Urgent Delivery: "Get Parts Delivered On Time"
  - Quality Focus: "Get ISO-Certified Quality Parts"
- **Weight**: 25/25/25/25 split

### 3. Quote Value Proposition (`quote_value_prop`)
- **Location**: Quote pages
- **Variants**:
  - Control: "Get a Free Quote for Your Project"
  - Speed Focused: "Get Quote in 24 Hours - Parts in 7 Days"
  - Quality Focused: "ISO Certified Quality - Zero Defect Guarantee"
  - Problem Solver: "End Your Supply Chain Delays Forever"
- **Weight**: 25/25/25/25 split

## Implementation Guide

### Adding a New A/B Test

1. **Define the test in `ab-tests.ts`**:
```typescript
new_test_name: {
  testName: 'new_test_name',
  description: 'Description of what you\'re testing',
  status: 'active',
  startDate: '2024-12-13',
  targetPages: ['/specific-page'],
  variants: [
    { id: 'control', weight: 50, text: 'Original Text' },
    { id: 'variant_a', weight: 50, text: 'New Text' }
  ]
}
```

2. **Implement in component**:
```tsx
import { ABTestButton } from '@/components/ABTestButton'

<ABTestButton
  testName="new_test_name"
  href="/target-url"
  defaultText="Fallback Text"
/>
```

### Using the Components

#### Button Testing
```tsx
<ABTestButton
  testName="my_cta_test"
  href="/quote"
  defaultText="Get Quote"
  color="blue"
  className="custom-classes"
/>
```

#### Headline Testing
```tsx
<ABTestHeadline
  testName="my_headline_test"
  defaultText="Default Headline"
  className="text-4xl font-bold"
  as="h1"
/>
```

#### Custom Testing
```tsx
<ABTest
  testName="custom_test"
  variants={[
    { id: 'control', weight: 50, component: <ControlComponent /> },
    { id: 'variant', weight: 50, component: <VariantComponent /> }
  ]}
/>
```

## Analytics & Tracking

### Event Structure
All A/B test events are sent to Google Analytics with this structure:

```javascript
gtag('event', 'custom', {
  event_category: 'ab_test',
  event_label: 'test_name_variant_id',
  custom_map: {
    test_name: 'test_name',
    test_variant: 'variant_id',
    test_page: '/current/page'
  }
});
```

### Conversion Tracking
- **CTA Clicks**: Tracked as `cta_click` events
- **Form Completions**: Tracked as `generate_lead` events
- **Page Engagement**: Tracked as `engagement` events

### Data Storage
- **Session Storage**: Current user's variants
- **Google Analytics**: All interaction data
- **Local Testing**: Results stored in sessionStorage for dashboard

## Monitoring & Results

### A/B Test Dashboard
Access the dashboard component (`ABTestDashboard`) to view:
- Active tests and their performance
- Conversion rates by variant
- Statistical significance indicators
- Recent activity summaries

### Key Metrics
1. **Conversion Rate**: Clicks/Impressions ratio
2. **Statistical Significance**: Minimum 95% confidence
3. **Sample Size**: Minimum 100 conversions per variant
4. **Test Duration**: Minimum 2 weeks

### Best Practices

#### Test Planning
- Only run one test per page element at a time
- Define success metrics before starting
- Calculate required sample size
- Set test duration (minimum 2 weeks)

#### Implementation
- Always provide fallback/default content
- Ensure tests don't affect Core Web Vitals
- Test across different devices and browsers
- Maintain consistent user experience

#### Analysis
- Wait for statistical significance
- Consider external factors (seasonality, campaigns)
- Document winning variants
- Implement winners and archive tests

## Technical Considerations

### Performance
- Tests use client-side rendering to avoid FOUC
- Variants cached in sessionStorage for consistency
- Minimal JavaScript footprint (~5KB gzipped)

### SEO Impact
- SSR returns default/control variant
- No negative impact on crawling/indexing
- Structured data remains consistent

### Privacy
- No personal data collected
- Uses existing GA4 tracking
- Session-based storage only

## Development Tools

### Debug Mode
In development, use `ABTestDebugInfo` component to see current variants:

```tsx
{process.env.NODE_ENV === 'development' && <ABTestDebugInfo />}
```

### Manual Testing
Force specific variants by setting sessionStorage:
```javascript
sessionStorage.setItem('ab_test_hero_cta_primary', 'icp_focused')
```

## Configuration Management

### Test Lifecycle
1. **Planning**: Define hypothesis and success metrics
2. **Implementation**: Add to config and deploy
3. **Active**: Monitor performance and gather data
4. **Analysis**: Calculate statistical significance
5. **Decision**: Implement winner or iterate
6. **Archive**: Update status to 'complete'

### Status Management
- `active`: Test is running
- `inactive`: Test is paused
- `complete`: Test finished, results analyzed

## Support & Troubleshooting

### Common Issues
1. **FOUC (Flash of Unstyled Content)**: Ensure proper SSR handling
2. **Variant Inconsistency**: Check sessionStorage persistence
3. **Analytics Not Tracking**: Verify GA4 setup and event structure
4. **Performance Impact**: Monitor Core Web Vitals during tests

### Debugging
- Check browser console for A/B test events
- Verify sessionStorage contains variant assignments
- Use GA4 DebugView to confirm event tracking
- Monitor Core Web Vitals in PageSpeed Insights

## Future Enhancements

### Planned Features
- Server-side testing capability
- Advanced statistical analysis
- Multi-variant testing (MVT)
- Automated significance detection
- Integration with business metrics

### Integration Opportunities
- Email marketing campaigns
- Social media advertising
- Landing page optimization
- Product page variations

---

For questions or support, refer to the implementation team or create an issue in the project repository.