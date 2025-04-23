// Tipos base para todas as seções
export interface BaseSection {
  id: string;
  title: string;
  subtitle?: string;
  backgroundColor?: string;
  textColor?: string;
}

// Tipos específicos para cada seção
export interface HeroSection extends BaseSection {
  headline: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  imageUrl?: string;
}

export interface TestimonialSection extends BaseSection {
  testimonials: Array<{
    name: string;
    role?: string;
    content: string;
    imageUrl?: string;
  }>;
}

export interface SegmentationSection extends BaseSection {
  segments: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
}

export interface FunctionalitySection extends BaseSection {
  steps: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
}

export interface PresentationSection extends BaseSection {
  content: string;
  features: Array<{
    title: string;
    description: string;
    icon?: string;
    highlights?: Array<{
      text: string;
      icon?: string;
    }>;
  }>;
}

export interface BonusSection extends BaseSection {
  bonuses: Array<{
    title: string;
    description: string;
    value?: string;
    icon?: string;
  }>;
}

export interface GuaranteeSection extends BaseSection {
  guaranteeText: string;
  days: number;
  imageUrl?: string;
}

export interface PricingSection extends BaseSection {
  plans: Array<{
    name: string;
    price: number;
    features: string[];
    ctaText: string;
    ctaUrl: string;
    highlighted?: boolean;
  }>;
}

export interface CTASection extends BaseSection {
  headline: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface FAQSection extends BaseSection {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export interface SummarySection extends BaseSection {
  content: string;
  highlights: string[];
  ctaText: string;
  ctaUrl: string;
} 