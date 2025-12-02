export interface NavItem {
  label: string
  href: string
  external?: boolean
}

export interface Product {
  name: string
  description: string
  badge: string
  badgeColor: 'blue' | 'yellow' | 'green'
  link: string
  image?: string
}

export interface Project {
  id: string
  name: string
  client: string
  type: string
  description: string
  technologies: string[]
  link?: string
  image?: string
}

export interface Reference {
  name: string
  logo?: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  image?: string
}

export interface ProcessStep {
  number: number
  title: string
  description: string
  icon: string
}

export interface Service {
  title: string
  description: string
  features: string[]
  cta: string
  ctaLink: string
  highlighted?: boolean
  badge?: string
}

export interface Technology {
  name: string
  icon?: string
}

export interface WhyMeriazItem {
  icon: string
  title: string
  description: string
}

