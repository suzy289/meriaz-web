'use client'

import { Check, ArrowRight, MessageCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import { scrollToSection, whatsappLink } from '@/lib/utils'

const highlights = [
  'Création de sites internet professionnels à partir de 30 000 XAF',
  'Intégration d\'ERP et de SaaS sur mesure',
  'Automatisation par IA pour réduire vos coûts et gagner du temps',
  'Hébergement, nom de domaine, mails pro, photos, logo, SEO : tout est inclus',
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float animation-delay-300" />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-600" />
        </div>
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative container-custom pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Votre partenaire technologique de confiance
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
              Meriaz, votre partenaire technologique pour{' '}
              <span className="text-gradient-orange">faire décoller</span>{' '}
              votre business
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl lg:max-w-none animate-fade-in-up animation-delay-200">
              Nous vous aidons à intégrer les briques IA et les logiciels dont vous avez besoin pour être plus efficace, plus rentable et réduire vos coûts… tout en gardant l'esprit tranquille.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-10 animate-fade-in-up animation-delay-300">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-left"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-white/90">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="group"
              >
                Créer mon site dès maintenant
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open(whatsappLink, '_blank')}
                className="group"
              >
                <MessageCircle className="w-5 h-5" />
                Parler avec nous sur WhatsApp
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 justify-center lg:justify-start mt-10 animate-fade-in-up animation-delay-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600"
                  >
                    {['A', 'M', 'T', 'K'][i - 1]}
                  </div>
                ))}
              </div>
              <div className="text-white/80 text-sm">
                <span className="text-white font-semibold">+50</span> entreprises accompagnées
              </div>
            </div>
          </div>

          {/* Right: Visual element */}
          <div className="hidden lg:block relative">
            <div className="relative animate-fade-in animation-delay-300">
              {/* Main visual card */}
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                {/* Browser mockup */}
                <div className="bg-gray-900 rounded-xl overflow-hidden shadow-inner">
                  {/* Browser header */}
                  <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-gray-700 rounded-md px-3 py-1.5 text-gray-400 text-sm">
                        votre-site.meriaz.com
                      </div>
                    </div>
                  </div>
                  {/* Browser content */}
                  <div className="p-6 space-y-4">
                    <div className="h-8 bg-gradient-to-r from-primary to-primary-light rounded-lg w-3/4" />
                    <div className="h-4 bg-gray-700 rounded w-full" />
                    <div className="h-4 bg-gray-700 rounded w-5/6" />
                    <div className="h-4 bg-gray-700 rounded w-4/6" />
                    <div className="grid grid-cols-3 gap-3 mt-6">
                      <div className="h-20 bg-gray-800 rounded-lg" />
                      <div className="h-20 bg-gray-800 rounded-lg" />
                      <div className="h-20 bg-gray-800 rounded-lg" />
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-secondary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce-subtle">
                  30 000 XAF
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -left-8 top-1/4 bg-white rounded-2xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Site livré</div>
                    <div className="text-gray-500 text-xs">En 5 jours</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-8 bottom-1/4 bg-white rounded-2xl p-4 shadow-xl animate-float animation-delay-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">IA</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Automatisation</div>
                    <div className="text-gray-500 text-xs">24h/24</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/80 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

