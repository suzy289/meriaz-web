'use client'

import { MessageCircle, FileText, Code, Rocket, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import SectionTitle from '@/components/ui/SectionTitle'
import { scrollToSection } from '@/lib/utils'
import Link from 'next/link'

const steps = [
  {
    number: 1,
    icon: MessageCircle,
    title: 'Prise de contact & compréhension',
    description:
      'Vous nous expliquez votre activité, vos objectifs et vos contraintes. Nous posons les bonnes questions pour clarifier votre besoin.',
    color: 'primary',
  },
  {
    number: 2,
    icon: FileText,
    title: 'Proposition & devis clair',
    description:
      'Nous vous envoyons une proposition détaillée avec périmètre, délais et budget, sans frais cachés.',
    color: 'secondary',
  },
  {
    number: 3,
    icon: Code,
    title: 'Conception & développement',
    description:
      'Nous concevons votre site, votre SaaS ou vos automatisations. Vous validez les maquettes, puis nous passons au développement.',
    color: 'accent',
  },
  {
    number: 4,
    icon: Rocket,
    title: 'Mise en ligne & accompagnement',
    description:
      'Une fois la solution prête, nous vous accompagnons pour la prise en main, la formation et l\'évolution future.',
    color: 'primary',
  },
]

const colorClasses = {
  primary: {
    bg: 'bg-primary',
    light: 'bg-primary-50',
    text: 'text-primary',
    border: 'border-primary',
  },
  secondary: {
    bg: 'bg-secondary',
    light: 'bg-secondary-50',
    text: 'text-secondary',
    border: 'border-secondary',
  },
  accent: {
    bg: 'bg-accent',
    light: 'bg-accent-50',
    text: 'text-accent',
    border: 'border-accent',
  },
}

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container-custom">
        <SectionTitle
          title="Comment se passe un projet avec Meriaz ?"
          subtitle="Un processus simple, transparent et efficace pour donner vie à votre projet digital."
        />

        {/* Process steps - Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon
                const colors = colorClasses[step.color as keyof typeof colorClasses]
                
                return (
                  <div key={index} className="relative">
                    {/* Step number circle */}
                    <div className="flex justify-center mb-8">
                      <div
                        className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center text-white font-bold text-xl z-10 ring-4 ring-white shadow-lg`}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                      <div
                        className={`w-14 h-14 ${colors.light} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className={`w-7 h-7 ${colors.text}`} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Process steps - Mobile/Tablet */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            const colors = colorClasses[step.color as keyof typeof colorClasses]
            
            return (
              <div key={index} className="relative">
                <div className="flex gap-4">
                  {/* Left: Number and line */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 ${colors.bg} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}
                    >
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-200 mt-2" />
                    )}
                  </div>

                  {/* Right: Content */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg flex-grow mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-10 h-10 ${colors.light} rounded-lg flex items-center justify-center`}
                      >
                        <Icon className={`w-5 h-5 ${colors.text}`} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/devis">
            <Button
              variant="primary"
              size="lg"
              className="group"
            >
              Lancer mon projet avec Meriaz
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

