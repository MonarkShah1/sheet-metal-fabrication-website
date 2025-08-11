export interface Industry {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  keywords: string[];
  targetLocation: string;
  monthlySearchVolume: number;
  competitionLevel: 'Low' | 'Medium' | 'High';
  content: {
    intro: string;
    capabilities: string;
    localFocus: string;
    materials: string[];
    qualityStandards: string[];
    processSteps: string[];
    advantages: string[];
  };
  caseStudies: Array<{
    id: string;
    title: string;
    description: string;
    materials: string[];
    completedDate: string;
    location: string;
    challenges: string;
    solution: string;
  }>;
  faqs: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
  relatedServices: string[];
  certifications: string[];
}

export interface IndustryPageProps {
  params: { industry: string };
}
