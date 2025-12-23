import { Service, Testimonial, Reference, Metric } from './types'

export const metrics: Metric[] = [
  { label: 'Projets livrés', value: '50+' },
  { label: 'Satisfaction client', value: '98%' },
  { label: 'Support', value: '24/7' }
]

export const hero = {
  title: 'Meriaz, votre partenaire technologique pour faire décoller votre business',
  subtitle:
    "Nous vous aidons à intégrer les briques IA et les logiciels dont vous avez besoin pour être plus efficace, plus rentable et réduire vos coûts… tout en gardant l’esprit tranquille.",
  description:
    "Que vous soyez une microfinance, une startup, une PME ou un entrepreneur solo, nous concevons et déployons vos sites internet, vos ERP, vos SaaS sur mesure et vos automatisations pour vous concentrer sur l’essentiel : faire grandir votre entreprise.",
  bullets: [
    'Création de sites internet professionnels à partir de 30 000 XAF',
    'Intégration d’ERP et de SaaS sur mesure',
    'Automatisation par IA pour réduire vos coûts et gagner du temps',
    'Hébergement, nom de domaine, mails pro, photos, logo, SEO : tout est inclus'
  ],
  primaryCta: { text: 'Créer mon site dès maintenant', href: '/site-creation-form' },
  secondaryCta: { text: 'Parler avec nous sur WhatsApp', href: 'https://wa.me/237620275758' }
}

export const services: Service[] = [
  {
    id: 'site-pro',
    badge: 'Offre star – À partir de 30 000 XAF',
    icon: 'Globe',
    title: 'Sites Internet Professionnels',
    description:
      'Présence en ligne professionnelle, rapide et abordable pour entrepreneurs, TPE/PME, coachs, consultants et commerçants.',
    features: [
      'Hébergement professionnel',
      'Nom de domaine personnalisé',
      'Mails professionnels',
      'Conception sur mesure',
      'Photos professionnelles',
      'Logo et charte graphique de base',
      'Optimisation SEO'
    ],
    price: 'À partir de 30 000 XAF',
    ctaText: 'Obtenir mon site à partir de 30 000 XAF',
    ctaLink: '/site-creation-form?service=site-pro',
    imagePlaceholder: '/images/services/site-pro.png',
    isSpecial: true
  },
  {
    id: 'erp-saas',
    icon: 'Database',
    title: 'ERP, SaaS et Applications Métiers sur Mesure',
    description:
      'ERP, applications métier et SaaS sur mesure pour gestion clients, finances, opérations et personnel.',
    features: [
      'Analyse des besoins métier',
      'Architecture technique',
      'Développement et intégration',
      'Formation des équipes',
      'Maintenance et évolution'
    ],
    ctaText: 'Parler de mon projet avec un expert',
    ctaLink: '/site-creation-form?service=erp-saas',
    imagePlaceholder: '/images/services/erp.png'
  },
  {
    id: 'ia-automation',
    icon: 'Cpu',
    title: 'Intelligence Artificielle & Automatisation',
    description:
      'Intégration de briques IA pour accélérer votre productivité et diminuer vos coûts.',
    features: [
      'Automatisation des réponses (WhatsApp, email, chat web)',
      'Génération/structuration de contenus',
      'Analyse des données (scoring, anomalies, segmentation)',
      'Workflows intelligents'
    ],
    ctaText: 'Découvrir nos solutions IA',
    ctaLink: '/site-creation-form?service=ia-automation',
    imagePlaceholder: '/images/services/ia.png'
  },
  {
    id: 'microfinance',
    badge: 'Spécialité Meriaz',
    icon: 'Building2',
    title: 'Solutions pour Institutions de Microfinance',
    description:
      'Core banking modulaire adapté aux réalités du terrain africain.',
    features: [
      'Gestion comptes, prêts, épargnes',
      'Suivi des opérations quotidiennes',
      'Intégration aux systèmes existants',
      'Formation et accompagnement terrain',
      'Conformité réglementaire'
    ],
    ctaText: 'Demander une démonstration',
    ctaLink: '/site-creation-form?service=microfinance',
    imagePlaceholder: '/images/services/microfinance.png'
  },
  {
    id: 'wemoni',
    icon: 'Smartphone',
    title: 'Wemonii — Crowdfunding GAB Mobile Money',
    description:
      'Investissez dans l’infrastructure Mobile Money dès 10 000 XAF (~$16). Devenez franchisé ou investisseur.',
    features: [
      'Investissement dès 10 000 XAF (~$16)',
      'Revenus Fixes ou Variables',
      'Franchises GAB clés en main',
      'Partenaires EMF agréés',
      'Impact & Inclusion financière'
    ],
    ctaText: 'Investir ou Devenir Franchisé',
    ctaLink: '/site-creation-form?service=wemoni',
    imagePlaceholder: '/images/services/wemoni.png'
  }
]

export const valueProps = [
  { icon: 'Handshake', title: 'Un partenaire, pas juste un prestataire', text: "Accompagnement de l'idée au déploiement puis maintenance." },
  { icon: 'TrendingUp', title: 'Efficacité & rentabilité', text: 'Automatiser, simplifier, réduire les coûts.' },
  { icon: 'Sparkles', title: 'IA + logiciels sur mesure', text: 'Briques IA adaptées à votre métier.' },
  { icon: 'DollarSign', title: 'Offres accessibles', text: 'Site pro à partir de 30 000 XAF.' }
]

export const techs = ['PHP', 'Laravel', 'Next.js', 'React', 'TypeScript', 'Python', 'Java', 'Node.js', 'PostgreSQL', 'MySQL', 'Tailwind CSS']

export const processSteps = [
  { icon: 'MessageSquare', title: 'Prise de contact', text: 'Expliquez activité, objectifs et contraintes.' },
  { icon: 'FileText', title: 'Proposition & devis', text: 'Périmètre, délais, budget, sans frais cachés.' },
  { icon: 'Code', title: 'Conception & développement', text: 'Validation maquettes puis développement.' },
  { icon: 'Rocket', title: 'Mise en ligne & accompagnement', text: 'Prise en main, formation, évolution.' }
]

export const references: Reference[] = [
  { name: 'Alcofund Microfinance' },
  { name: 'Music Microfinance' },
  { name: 'Transfer and Exchange Services' },
  { name: 'Groupe Reavem' },
  { name: 'KNY Groupe' },
  { name: 'COGEP' },
  { name: 'Africa AI Solutions' }
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'Meriaz nous a livré notre site en quelques jours avec une qualité et un souci des détails exceptionnels',
    author: 'Dr Christophe',
    role: 'Fondateur',
    company: 'Groupe Reavem'
  },
  {
    quote:
      'Meriaz nous a permis de changer de partenaires pour notre core banking et de faire plus de 50% d’économies pour des délais et une qualité supérieurs',
    author: 'M. Belias',
    role: 'PCA',
    company: 'Alcofund'
  }
]
