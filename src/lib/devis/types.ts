export interface Service {
  id: string
  badge?: string
  icon: string
  title: string
  description: string
  features: string[]
  price?: string
  ctaText: string
  ctaLink: string
  imagePlaceholder: string
  isSpecial?: boolean
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
}

export interface Reference {
  name: string
  logo?: string
}

export interface Metric {
  label: string
  value: string
}
