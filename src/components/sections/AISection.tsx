'use client'

import {
  MessageCircle,
  FileText,
  BarChart3,
  Workflow,
  Sparkles,
  Bot,
} from 'lucide-react'
import Card from '@/components/ui/Card'
import SectionTitle from '@/components/ui/SectionTitle'

const useCases = [
  {
    icon: MessageCircle,
    title: 'Automatiser la réponse à vos clients',
    description: 'WhatsApp, email, chat web - répondez 24h/24 sans effort',
    color: 'primary',
  },
  {
    icon: FileText,
    title: 'Générer ou structurer vos contenus',
    description: 'Emails, fiches produits, rapports - gagnez des heures',
    color: 'secondary',
  },
  {
    icon: BarChart3,
    title: 'Analyser vos données pour mieux décider',
    description: 'Scoring, détection d\'anomalies, segmentation clients',
    color: 'accent',
  },
  {
    icon: Workflow,
    title: 'Créer des workflows intelligents',
    description: 'Réduisez les tâches manuelles répétitives automatiquement',
    color: 'primary',
  },
]

const colorClasses = {
  primary: {
    bg: 'bg-primary-50',
    icon: 'text-primary',
    gradient: 'from-primary to-primary-light',
  },
  secondary: {
    bg: 'bg-secondary-50',
    icon: 'text-secondary',
    gradient: 'from-secondary to-secondary-light',
  },
  accent: {
    bg: 'bg-accent-50',
    icon: 'text-accent',
    gradient: 'from-accent to-accent-light',
  },
}

export default function AISection() {
  return (
    <section id="ai" className="section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Intelligence Artificielle
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              L&apos;intelligence artificielle au service de votre{' '}
              <span className="text-gradient">productivité</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Nous travaillons avec l&apos;intelligence artificielle pour accélérer votre productivité et diminuer vos coûts, afin de vous offrir plus de marges et moins de tracas.
            </p>

            <div className="space-y-4">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon
                const colors = colorClasses[useCase.color as keyof typeof colorClasses]
                
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group hover:-translate-x-1"
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <Icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                        {useCase.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{useCase.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Trust message */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl border border-primary-100">
              <p className="text-gray-700 font-medium">
                <span className="text-primary font-bold">
                  Vous ne payez pas pour « de la technologie pour la technologie »
                </span>
                , mais pour des résultats concrets : gain de temps, réduction des erreurs, économies, croissance.
              </p>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main AI illustration card */}
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white border-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
                
                <div className="relative p-8">
                  {/* AI Bot animation */}
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-light rounded-3xl flex items-center justify-center animate-float">
                        <Bot className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-pulse flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Chat simulation */}
                  <div className="space-y-4">
                    <div className="flex justify-end">
                      <div className="bg-primary rounded-2xl rounded-br-none px-4 py-3 max-w-[80%]">
                        <p className="text-sm">Bonjour, j&apos;ai une question sur vos services...</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="bg-white/10 backdrop-blur rounded-2xl rounded-bl-none px-4 py-3 max-w-[80%]">
                        <p className="text-sm">
                          Bonjour ! Je suis l&apos;assistant IA de Meriaz. Je peux vous aider 24h/24. Que souhaitez-vous savoir ?
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                      <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                      Réponse instantanée
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">24/7</div>
                      <div className="text-xs text-gray-400">Disponibilité</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">&lt;3s</div>
                      <div className="text-xs text-gray-400">Temps de réponse</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-light">95%</div>
                      <div className="text-xs text-gray-400">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Floating elements */}
              <div className="absolute -left-8 top-1/4 bg-white rounded-2xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Analytics</div>
                    <div className="text-accent text-xs font-bold">+147%</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-8 bottom-1/4 bg-white rounded-2xl p-4 shadow-xl animate-float animation-delay-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Workflow className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Automatisé</div>
                    <div className="text-secondary text-xs font-bold">500+ tâches/j</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

