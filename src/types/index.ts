// Service type
export interface Service {
  id: string
  number: string
  title: string
  description: string
  items: string[]
  technologies?: string[]
  tools?: string[]
  ctaText: string
  ctaLink: string
  color: {
    bg: string
    icon: string
    badge: string
    border: string
    accent: string
  }
  icon: string
}

// Project type
export interface Project {
  id: string
  title: string
  category: string
  description: string
  technologies: string[]
  status: string
  featured: boolean
  gradient: string
}

// Team Member type
export interface TeamMember {
  id: string
  name: string
  role: string
  skills: string[]
  description: string
  placeholder: string
}

// FAQ type
export interface FAQ {
  question: string
  answer: string
}

// Process Step type
export interface ProcessStep {
  number: string
  title: string
  description: string
}

// Engagement type
export interface Engagement {
  number: string
  title: string
  description: string
}

// Technology category
export interface TechCategory {
  category: string
  items: string[]
}
