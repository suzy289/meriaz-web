import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export const whatsappLink = 'https://wa.me/237620275758'
export const whatsappNumber = '+237 620 275 758'
export const founderWhatsapp = 'https://wa.me/237697666600'
export const founderNumber = '+237 6 97 66 66 00'

