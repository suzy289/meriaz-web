'use client'

import { Check, ArrowRight, MessageCircle, Sparkles, Rocket, Zap } from 'lucide-react'
import Button from '@/components/ui/Button'
import { whatsappLink } from '@/lib/utils'
import Link from 'next/link'

const stats = [
  { value: '50+', label: 'Clients' },
  { value: '5j', label: 'Délai' },
  { value: '50%', label: 'Économies' },
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
          {/* Left: Text content - NEW DESIGN */}
          <div className="text-center lg:text-left">
            {/* Top badge with price */}
            <div className="inline-flex items-center gap-3 mb-8 animate-fade-in">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-white/90 text-sm font-medium">Sites web pro</span>
              </div>
              <div className="px-4 py-2 bg-secondary rounded-full">
                <span className="text-gray-900 text-sm font-bold">À partir de 30 000 XAF</span>
              </div>
            </div>

            {/* Main heading with highlight */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 leading-[1.15] animate-fade-in-up">
              <span className="block mb-2">Transformez vos idées</span>
              <span className="block">
                en{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-gradient-orange">solutions digitales</span>
                  <span className="absolute bottom-1 left-0 right-0 h-3 bg-secondary/30 -rotate-1 rounded"></span>
                </span>
              </span>
            </h1>

            {/* Subtitle with icons */}
            <div className="space-y-4 mb-8 animate-fade-in-up animation-delay-200">
              <p className="text-xl text-white/80 leading-relaxed">
                Meriaz est votre partenaire technologique pour créer des 
                <span className="text-white font-semibold"> sites internet</span>, 
                <span className="text-white font-semibold"> ERP</span>, 
                <span className="text-white font-semibold"> SaaS</span> et 
                <span className="text-white font-semibold"> automatisations IA</span>.
              </p>
            </div>

            {/* Feature tags */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start animate-fade-in-up animation-delay-300">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/20 rounded-lg border border-accent/30">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-white text-sm">Livraison rapide</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/20 rounded-lg border border-primary/30">
                <Rocket className="w-4 h-4 text-primary-light" />
                <span className="text-white text-sm">Tout inclus</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary/20 rounded-lg border border-secondary/30">
                <Check className="w-4 h-4 text-secondary" />
                <span className="text-white text-sm">Support 24/7</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-fade-in-up animation-delay-400">
              <Link href="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  className="group w-full sm:w-auto"
                >
                  Démarrer mon projet
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open(whatsappLink, '_blank')}
                className="group"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-8 justify-center lg:justify-start animate-fade-in-up animation-delay-500">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
              <div className="hidden sm:block h-12 w-px bg-white/20" />
              <div className="hidden sm:flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['A', 'M', 'K'].map((letter, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-light border-2 border-white/20 flex items-center justify-center text-xs font-bold text-white"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <span className="text-white/70 text-sm">+50 clients</span>
              </div>
            </div>
          </div>

          {/* Right: Visual element - UNCHANGED */}
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
    </section>
  )
}
