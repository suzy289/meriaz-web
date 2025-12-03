import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { Language } from '@/lib/translations'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export const whatsappNumber = '+237 620 275 758'
export const founderWhatsapp = 'https://wa.me/237697666600'
export const founderNumber = '+237 6 97 66 66 00'

// Types de sections pour les messages WhatsApp
export type WhatsAppSection = 
  | 'hero' 
  | 'services' 
  | 'contact' 
  | 'about' 
  | 'references' 
  | 'footer' 
  | 'default'

// Messages WhatsApp personnalisés selon la section
const whatsappMessages: Record<WhatsAppSection, { fr: string; en: string }> = {
  hero: {
    fr: 'Bonjour ! Je suis intéressé(e) par vos services. Pourriez-vous m\'en dire plus ?',
    en: 'Hello! I am interested in your services. Could you tell me more?'
  },
  services: {
    fr: 'Bonjour ! J\'aimerais obtenir plus d\'informations sur vos services. Pourriez-vous me contacter ?',
    en: 'Hello! I would like to get more information about your services. Could you contact me?'
  },
  contact: {
    fr: 'Bonjour ! J\'aimerais discuter de mon projet avec vous. Êtes-vous disponible pour un échange ?',
    en: 'Hello! I would like to discuss my project with you. Are you available for an exchange?'
  },
  about: {
    fr: 'Bonjour ! J\'aimerais en savoir plus sur Meriaz et vos équipes. Pourriez-vous m\'aider ?',
    en: 'Hello! I would like to know more about Meriaz and your teams. Could you help me?'
  },
  references: {
    fr: 'Bonjour ! J\'aimerais voir vos réalisations et discuter d\'un projet similaire. Êtes-vous disponible ?',
    en: 'Hello! I would like to see your work and discuss a similar project. Are you available?'
  },
  footer: {
    fr: 'Bonjour ! J\'ai une question concernant vos services. Pourriez-vous me répondre ?',
    en: 'Hello! I have a question about your services. Could you answer me?'
  },
  default: {
    fr: 'Bonjour ! J\'aimerais discuter avec vous. Êtes-vous disponible ?',
    en: 'Hello! I would like to talk with you. Are you available?'
  }
}

/**
 * Génère un lien WhatsApp avec un message personnalisé selon la section
 * @param section - La section d'où provient le clic
 * @param lang - La langue ('fr' ou 'en')
 * @returns Le lien WhatsApp avec le message encodé
 */
export function getWhatsAppLink(section: WhatsAppSection = 'default', lang: Language = 'fr'): string {
  const message = whatsappMessages[section]?.[lang] || whatsappMessages.default[lang]
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/237620275758?text=${encodedMessage}`
}

// Lien WhatsApp par défaut (pour compatibilité)
export const whatsappLink = getWhatsAppLink('default', 'fr')

