export interface TemplateItem {
  id: string;
  title: string;
  category: 'institucional' | 'landing-page' | 'ecommerce' | 'sistema' | 'saude' | 'fitness' | 'advocacia';
  categoryLabel: string;
  description: string;
  image: string;
  demoUrl?: string;
  tags: string[];
  featured?: boolean;
  conversionRate?: string;
  speedScore?: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  popular?: boolean;
  price: string;
  period?: string;
  features: string[];
  ctaText: string;
  whatsappMessage: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  resultMetric?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
}
