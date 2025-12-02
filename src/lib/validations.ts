import { z } from 'zod'

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom ne peut pas dépasser 100 caractères'),
  company: z.string().optional(),
  email: z
    .string()
    .email('Veuillez entrer une adresse email valide'),
  whatsapp: z
    .string()
    .min(8, 'Veuillez entrer un numéro WhatsApp valide')
    .regex(/^[\d\s+()-]+$/, 'Format de numéro invalide'),
  projectType: z.enum([
    'site-internet',
    'erp',
    'saas',
    'microfinance',
    'automatisation-ia',
    'autre',
  ], {
    errorMap: () => ({ message: 'Veuillez sélectionner un type de projet' }),
  }),
  budget: z.enum([
    'moins-100k',
    '100k-500k',
    '500k-1m',
    'plus-1m',
    'ne-sais-pas',
  ], {
    errorMap: () => ({ message: 'Veuillez sélectionner un budget' }),
  }),
  message: z
    .string()
    .min(20, 'Votre message doit contenir au moins 20 caractères')
    .max(2000, 'Votre message ne peut pas dépasser 2000 caractères'),
  contactByWhatsapp: z.boolean().default(true),
  honeypot: z.string().max(0, 'Spam détecté').optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const projectTypes = [
  { value: 'site-internet', label: 'Site internet' },
  { value: 'erp', label: 'ERP' },
  { value: 'saas', label: 'SaaS sur mesure' },
  { value: 'microfinance', label: 'Microfinance / Banque' },
  { value: 'automatisation-ia', label: 'Automatisation IA' },
  { value: 'autre', label: 'Autre' },
]

export const budgetOptions = [
  { value: 'moins-100k', label: '< 100 000 XAF' },
  { value: '100k-500k', label: '100 000 – 500 000 XAF' },
  { value: '500k-1m', label: '500 000 – 1 000 000 XAF' },
  { value: 'plus-1m', label: '> 1 000 000 XAF' },
  { value: 'ne-sais-pas', label: 'Je ne sais pas' },
]

