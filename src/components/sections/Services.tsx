'use client'

import {
  Globe,
  Check,
  ArrowRight,
  Building2,
  Cog,
  Users,
  HeadphonesIcon,
  Rocket,
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import SectionTitle from '@/components/ui/SectionTitle'
import { scrollToSection } from '@/lib/utils'

const websiteFeatures = [
  'Hébergement inclus',
  'Nom de domaine',
  'Mails professionnels',
  'Conception du site internet',
  'Photos professionnelles',
  'Logo et charte graphique de base',
  'Optimisation SEO de base',
]

const erpFeatures = [
  { icon: Cog, text: 'Analyse de vos besoins métier' },
  { icon: Building2, text: 'Conception de l\'architecture technique' },
  { icon: Rocket, text: 'Développement et intégration' },
  { icon: Users, text: 'Formation de vos équipes' },
  { icon: HeadphonesIcon, text: 'Maintenance et évolution' },
]

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-custom">
        <SectionTitle
          title="Nos services pour faire passer votre business au niveau supérieur"
          subtitle="Du simple site vitrine jusqu'aux plateformes métiers complexes, nous construisons vos outils digitaux de A à Z."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Website offer - Highlighted */}
          <div className="relative bg-gradient-to-br from-primary via-primary-light to-primary rounded-3xl p-8 md:p-10 text-white overflow-hidden group">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              <Badge variant="secondary" className="mb-6">
                <span className="mr-1">🔥</span> OFFRE POPULAIRE
              </Badge>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  Opération « Tout le monde, son site internet »
                </h3>
              </div>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-sm opacity-80">À partir de</span>
                <span className="text-4xl md:text-5xl font-bold">30 000</span>
                <span className="text-xl">XAF</span>
              </div>

              <p className="text-white/90 mb-8 text-lg">
                Une offre pensée pour les entrepreneurs, TPE, PME, coachs, consultants et commerçants qui veulent une présence en ligne professionnelle, rapide et abordable.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {websiteFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 hover:text-primary group"
              >
                Obtenir mon site à partir de 30 000 XAF
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* ERP/SaaS offer */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 group hover:border-primary/20 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                ERP, SaaS et applications métiers sur mesure
              </h3>
            </div>

            <p className="text-gray-600 mb-8 text-lg">
              Pour les entreprises qui ont besoin de plus qu'un site vitrine, nous concevons et mettons en place des ERP, des applications métier et des SaaS sur mesure adaptés à votre activité : gestion des clients, des finances, des opérations, du personnel, etc.
            </p>

            <div className="space-y-4 mb-8">
              {erpFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors group/item"
                  >
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                      <Icon className="w-5 h-5 text-primary group-hover/item:text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature.text}</span>
                  </div>
                )
              })}
            </div>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto group"
            >
              Parler de mon projet avec un expert
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

