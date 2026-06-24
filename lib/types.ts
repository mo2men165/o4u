export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

export interface Employee {
  name: string;
  role: string;
  startedAs: string;
  joinYear: number;
  quote: string;
  photo: string;
}

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  type: string;
  description: string;
  shortDescription: string;
}

export interface BlogPostMeta {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  metaDescription: string;
  keywords: string[];
  featured: boolean;
  image?: string;
}

export interface Perk {
  title: string;
  description: string;
  icon: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Industry {
  title: string;
  description: string;
  icon: string;
}

export interface Benefit {
  title: string;
  icon: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
}
