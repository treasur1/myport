export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  priceNgn: number;
  priceUsd: number;
  rating: number;
  reviewCount: number;
  studentCount: number;
  badge?: string;
  image: string;
  selarUrl: string;
  curriculum: {
    moduleTitle: string;
    lessons: string[];
  }[];
  keyTakeaways: string[];
  targetAudience: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientName: string;
  clientRole: string;
  clientIndustry: string;
  category: 'E-commerce' | 'Info-Products' | 'Lead Generation' | 'Brand Building';
  thumbnail: string;
  heroMetric: string;
  heroMetricLabel: string;
  secondaryMetrics: {
    label: string;
    value: string;
  }[];
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  funnelSteps: {
    step: string;
    description: string;
    conversionRate: string;
  }[];
  timeline: string;
  toolsUsed: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  verifiedSelarBuyer?: boolean;
  type: 'Course Student' | 'Consulting Client' | 'Brand Founder';
  metricsHighlight?: string;
}

export interface Service {
  id: string;
  iconName: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  idealFor: string;
  popular?: boolean;
}

export interface RoiCalculatorState {
  monthlyAdSpend: number;
  costPerClick: number;
  landingPageConvRate: number; // percentage
  productPrice: number;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  inquiryType: 'Consulting / Done-for-You' | 'Course Inquiry' | 'Selar Store Question' | 'Speaking / Workshop';
  monthlyBudget: string;
  message: string;
  preferredDate?: string;
}
