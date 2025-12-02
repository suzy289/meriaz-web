'use client'

import { Handshake, TrendingUp, Brain, BadgeCheck } from 'lucide-react'
import Card from '@/components/ui/Card'
import SectionTitle from '@/components/ui/SectionTitle'

const reasons = [
  {
    icon: Handshake,
    title: 'Un partenaire, pas juste un prestataire',
    description:
      'Nous vous accompagnons de l\'idée jusqu\'au déploiement, puis dans la maintenance. Vous n\'êtes jamais seul face à la technologie.',
    color: 'primary',
  },
  {
    icon: TrendingUp,
    title: 'Focus efficacité & rentabilité',
    description:
      'Chaque solution vise à automatiser, simplifier et réduire vos coûts pour augmenter vos marges et votre sérénité au quotidien.',
    color: 'accent',
  },
  {
    icon: Brain,
    title: 'IA + logiciels sur mesure',
    description:
      'Nous intégrons des briques d\'intelligence artificielle et des outils adaptés à votre métier pour accélérer votre productivité.',
    color: 'secondary',
  },
  {
    icon: BadgeCheck,
    title: 'Offres accessibles et transparentes',
    description:
      'Avec notre opération « Tout le monde, son site internet » à partir de 30 000 XAF, vous avez enfin un site pro à un tarif maîtrisé.',
    color: 'primary',
  },
]

const colorClasses = {
  primary: {
    bg: 'bg-primary-50',
    icon: 'text-primary',
    border: 'group-hover:border-primary',
  },
  secondary: {
    bg: 'bg-secondary-50',
    icon: 'text-secondary',
    border: 'group-hover:border-secondary',
  },
  accent: {
    bg: 'bg-accent-50',
    icon: 'text-accent',
    border: 'group-hover:border-accent',
  },
}

export default function WhyMeriaz() {
  return (
    <section id="why-meriaz" className="section bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          title="Pourquoi choisir Meriaz comme partenaire technologique ?"
          subtitle="Meriaz est une entreprise technologique dont la mission est de devenir le partenaire technologique des entrepreneurs qui veulent faire décoller leur business. Nous combinons développement logiciel, intégration d'outils, intelligence artificielle et accompagnement humain pour transformer vos idées en solutions concrètes."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            const colors = colorClasses[reason.color as keyof typeof colorClasses]
            
            return (
              <Card
                key={index}
                variant="hover"
                className={`group border-2 border-transparent transition-all duration-300 ${colors.border}`}
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className={`w-7 h-7 ${colors.icon}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {[
            { value: '50+', label: 'Clients satisfaits' },
            { value: '100+', label: 'Projets livrés' },
            { value: '5 jours', label: 'Délai moyen de livraison' },
            { value: '50%', label: 'd\'économies en moyenne' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

