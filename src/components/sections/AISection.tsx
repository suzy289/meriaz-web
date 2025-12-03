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
import { useLanguage } from '@/contexts/LanguageContext'

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
  const { t } = useLanguage()
  
  const useCases = [
    {
      icon: MessageCircle,
      title: t.ai.useCase1.title,
      description: t.ai.useCase1.description,
      color: 'primary',
    },
    {
      icon: FileText,
      title: t.ai.useCase2.title,
      description: t.ai.useCase2.description,
      color: 'secondary',
    },
    {
      icon: BarChart3,
      title: t.ai.useCase3.title,
      description: t.ai.useCase3.description,
      color: 'accent',
    },
    {
      icon: Workflow,
      title: t.ai.useCase4.title,
      description: t.ai.useCase4.description,
      color: 'primary',
    },
  ]
  
  return (
    <section id="ai" className="section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        
        {/* Semicircle wires - Top Left */}
        <div className="absolute top-0 left-0 w-[500px] h-[400px] opacity-30">
          <svg className="w-full h-full" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Multiple semicircle wires stacked - using arc paths */}
            <path d="M 0 40 A 120 80 0 0 1 240 40" stroke="url(#gradient1)" strokeWidth="2.5" fill="none" className="animate-float" />
            <path d="M 0 90 A 130 90 0 0 1 260 90" stroke="url(#gradient2)" strokeWidth="2.5" fill="none" className="animate-float animation-delay-300" />
            <path d="M 0 140 A 110 70 0 0 1 220 140" stroke="url(#gradient3)" strokeWidth="2.5" fill="none" className="animate-float animation-delay-600" />
            <path d="M 0 190 A 140 100 0 0 1 280 190" stroke="url(#gradient4)" strokeWidth="2.5" fill="none" className="animate-float animation-delay-900" />
            <path d="M 0 240 A 120 85 0 0 1 240 240" stroke="url(#gradient5)" strokeWidth="2.5" fill="none" className="animate-float animation-delay-1200" />
            <path d="M 0 290 A 125 75 0 0 1 250 290" stroke="url(#gradient11)" strokeWidth="2.5" fill="none" className="animate-float animation-delay-1500" />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF4500" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#FF4500" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FF4500" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#10B981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#EC4899" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#EC4899" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#EC4899" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient11" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Semicircle wires - Bottom Right */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] opacity-30">
          <svg className="w-full h-full" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Multiple semicircle wires stacked - mirrored and inverted */}
            <path d="M 260 360 A 120 80 0 0 0 20 360" stroke="url(#gradient6)" strokeWidth="2.5" fill="none" className="animate-float animation-delay-300" />
            <path d="M 260 310 A 130 90 0 0 0 20 310" stroke="url(#gradient7)" strokeWidth="2.5" fill="none" className="animate-float animation-delay-600" />
            <path d="M 280 260 A 110 70 0 0 0 20 260" stroke="url(#gradient8)" strokeWidth="2.5" fill="none" className="animate-float animation-delay-900" />
            <path d="M 220 210 A 140 100 0 0 0 20 210" stroke="url(#gradient9)" strokeWidth="2.5" fill="none" className="animate-float animation-delay-1200" />
            <path d="M 240 160 A 120 85 0 0 0 20 160" stroke="url(#gradient10)" strokeWidth="2.5" fill="none" className="animate-float" />
            <path d="M 250 110 A 125 75 0 0 0 20 110" stroke="url(#gradient12)" strokeWidth="2.5" fill="none" className="animate-float animation-delay-1500" />
            <defs>
              <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF4500" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#FF4500" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FF4500" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient7" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient8" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#10B981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient9" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient10" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#EC4899" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#EC4899" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#EC4899" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient12" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              {t.ai.badge}
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t.ai.title}{' '}
              <span className="text-gradient">{t.ai.titleHighlight}</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              {t.ai.subtitle}
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
            <div className="mt-8 p-6 bg-gray-900 rounded-2xl border border-gray-800">
              <p className="text-white font-medium">
                <span className="text-orange-400 font-bold">
                  {t.ai.trustMessage}
                </span>
                {t.ai.trustMessageSubtitle}
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

