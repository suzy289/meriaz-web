'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Quote, 
  Star, 
  ArrowRight, 
  Building2, 
  Users, 
  TrendingUp,
  Award,
  Sparkles,
  CheckCircle,
  MessageCircle,
  Wallet,
  Music,
  ArrowLeftRight,
  Heart,
  ShoppingCart,
  GraduationCap,
  Cpu,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import { getWhatsAppLink } from '@/lib/utils'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ReferencesPage() {
  const { t, language } = useLanguage()
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  
  const clients = [
  { 
    name: 'Alcofund Microfinance', 
    icon: Wallet,
    sector: 'Microfinance',
    description: 'Solution de core banking complète'
  },
  { 
    name: 'Music Microfinance', 
    icon: Music,
    sector: 'Microfinance',
    description: 'Plateforme de gestion financière'
  },
  { 
    name: 'Transfer and Exchange Services', 
    icon: ArrowLeftRight,
    sector: 'Finance',
    description: 'Application de transfert d\'argent'
  },
  { 
    name: 'Groupe Reavem', 
    icon: Heart,
    sector: 'Santé',
    description: 'Site web institutionnel'
  },
  { 
    name: 'KNY Groupe', 
    icon: ShoppingCart,
    sector: 'Commerce',
    description: 'Plateforme e-commerce'
  },
  { 
    name: 'COGEP', 
    icon: GraduationCap,
    sector: 'Formation',
    description: 'Application de gestion'
  },
  { 
    name: 'Africa AI Solutions', 
    icon: Cpu,
    sector: 'Technologie',
    description: 'Automatisation IA'
  },
]

const testimonials = [
  {
    quote: 'Meriaz nous a livré notre site en quelques jours avec une qualité et un souci des détails remarquables. L\'équipe a su comprendre nos besoins et les traduire parfaitement.',
    author: 'Dr Christophe',
    role: 'Fondateur',
    company: 'Groupe Reavem',
    rating: 5,
    image: null,
  },
  {
    quote: 'Meriaz nous a permis de changer de partenaires pour notre core banking et de faire plus de 50% d\'économies pour des délais et une qualité supérieurs. Un vrai game-changer !',
    author: 'M. Belias',
    role: 'PCA',
    company: 'Alcofund',
    rating: 5,
    image: null,
  },
  {
    quote: 'La réactivité et le professionnalisme de l\'équipe Meriaz sont exceptionnels. Ils ont transformé notre vision en une application fonctionnelle en un temps record.',
    author: 'Emmanuel N.',
    role: 'Directeur Technique',
    company: 'KNY Groupe',
    rating: 5,
    image: null,
  },
]

  const stats = [
    { 
      value: '50+', 
      label: t.references.stats.clients, 
      icon: Users,
      badge: '50+',
      description: 'Plus de 50 entreprises nous font confiance pour leurs projets digitaux.',
      bgColor: 'bg-gray-900',
      iconBg: 'bg-gray-800',
      badgeColor: 'bg-[#FF4500]'
    },
    { 
      value: '100+', 
      label: t.references.stats.projects, 
      icon: Award,
      badge: '100+',
      description: 'Plus de 100 projets livrés avec succès dans différents secteurs d\'activité.',
      bgColor: 'bg-gray-800',
      iconBg: 'bg-gray-900',
      badgeColor: 'bg-blue-500'
    },
    { 
      value: '98%', 
      label: t.references.stats.satisfaction, 
      icon: TrendingUp,
      badge: '98%',
      description: '98% de nos clients sont satisfaits de nos services et recommandent Meriaz.',
      bgColor: 'bg-gray-900',
      iconBg: 'bg-gray-800',
      badgeColor: 'bg-emerald-500'
    },
  ]

  const sectors = [
    { name: 'Microfinance', count: 15, color: 'bg-primary' },
    { name: 'E-commerce', count: 12, color: 'bg-secondary' },
    { name: 'Santé', count: 8, color: 'bg-accent' },
    { name: 'Éducation', count: 7, color: 'bg-purple-500' },
    { name: 'Services', count: 10, color: 'bg-blue-500' },
  ]
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
          {/* Background - Solid color */}
          <div className="absolute inset-0 bg-gray-900" />
          
          {/* Professional geometric pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full">
              {/* Grid pattern */}
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>
          
          {/* Subtle geometric shapes - no gradients */}
          <div className="absolute top-20 right-10 w-64 h-64 border-2 border-white/10 rounded-lg rotate-45" />
          <div className="absolute bottom-10 left-10 w-48 h-48 border-2 border-white/10 rounded-lg rotate-12" />
          <div className="absolute top-1/2 right-1/4 w-32 h-32 border border-white/5 rounded-full" />
          
          {/* Accent lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-[#FF4500]" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-[#FF4500]" />
          
          <div className="container-custom relative z-10 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF4500]" />
                <span className="text-xs sm:text-sm font-medium text-white">{t.references.hero.badge}</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight animate-scroll-up overflow-hidden">
                <span className="inline-block">{t.references.hero.title}{' '}</span>
                <span className="block text-[#FF4500]">{t.references.hero.titleHighlight}</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4 animate-scroll-up-delay overflow-hidden">
                <span className="inline-block">{t.references.hero.subtitle}</span>
              </p>
            </div>
          </div>
          
          {/* Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 120L60 105C120 90 240 60 360 50C480 40 600 50 720 60C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container-custom px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="group">
                    <div className="h-full rounded-2xl bg-white border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:border-gray-300 transition-all duration-500 overflow-hidden">
                      <div className={`relative ${stat.bgColor} p-4 sm:p-6 pb-10 sm:pb-12`}>
                        <div className="relative flex items-center gap-3 sm:gap-4">
                          <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${stat.iconBg} flex items-center justify-center text-white border border-gray-700 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                            <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight">{stat.label}</h3>
                          </div>
                        </div>
                        <div className="absolute -bottom-3 sm:-bottom-4 right-4 sm:right-6">
                          <span className={`inline-flex items-center gap-1.5 ${stat.badgeColor} text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold shadow-lg`}>
                            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white animate-pulse" />
                            {stat.badge}
                          </span>
                        </div>
                      </div>
                      <div className="p-4 sm:p-6 pt-6 sm:pt-8">
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Clients Grid */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container-custom px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Nos <span className="text-[#FF4500]">clients</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
                Des entreprises de toutes tailles nous font <span className="text-[#FF4500] font-semibold">confiance</span> pour leurs projets digitaux.
              </p>
            </div>

            {/* Scrolling Rows */}
            <div className="space-y-8">
              {/* First Row - Scroll Left to Right */}
              <div className="relative overflow-hidden">
                <div className="flex gap-6 animate-scroll-left">
                  {[...clients.slice(0, 4), ...clients.slice(0, 4), ...clients.slice(0, 4)].map((client, index) => {
                    const Icon = client.icon
                    return (
                      <div
                        key={`row1-${index}`}
                        className="group bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 hover:border-gray-300 hover:shadow-xl transition-all duration-300 flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px]"
                      >
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-gray-200 transition-colors">
                          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" />
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 group-hover:text-[#FF4500] transition-colors">
                          {client.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#FF4500] font-medium mb-2">{client.sector}</p>
                        <p className="text-xs sm:text-sm text-gray-500">{client.description}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Second Row - Scroll Right to Left */}
              <div className="relative overflow-hidden">
                <div className="flex gap-6 animate-scroll-right">
                  {[...clients.slice(4), ...clients.slice(4), ...clients.slice(4)].map((client, index) => {
                    const Icon = client.icon
                    return (
                      <div
                        key={`row2-${index}`}
                        className="group bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 hover:border-gray-300 hover:shadow-xl transition-all duration-300 flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px]"
                      >
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-gray-200 transition-colors">
                          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" />
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 group-hover:text-[#FF4500] transition-colors">
                          {client.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#FF4500] font-medium mb-2">{client.sector}</p>
                        <p className="text-xs sm:text-sm text-gray-500">{client.description}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
              
              {/* CTA Card - Centered */}
              <div className="flex justify-center mt-6 sm:mt-8">
                <div className="bg-gray-900 rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center text-center max-w-md w-full">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                    <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">{t.references.clients.cta.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 mb-4">{t.references.clients.cta.subtitle}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-4 py-2 rounded-lg text-xs sm:text-sm hover:bg-gray-100 transition-colors"
                  >
                    {t.references.clients.cta.button}
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container-custom px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  {t.references.sectors.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
                  {t.references.sectors.subtitle}
                </p>
                
                <div className="space-y-4">
                  {sectors.map((sector, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${sector.color}`} />
                      <span className="font-medium text-gray-900 flex-1">{sector.name}</span>
                      <span className="text-gray-500">{sector.count} {t.references.sectors.projects}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl rotate-3 opacity-20" />
                <div className="relative bg-gradient-to-br from-primary to-primary-light rounded-3xl p-6 sm:p-8 text-white">
                  <div className="text-center mb-6 sm:mb-8">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">{t.references.sectors.success.title}</div>
                    <p className="text-white/90 text-base sm:text-lg md:text-xl">{t.references.sectors.success.subtitle}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-white/10 rounded-xl p-3 sm:p-4 text-center">
                      <div className="text-xl sm:text-2xl font-bold">5 jours</div>
                      <p className="text-xs sm:text-sm text-white/80">{t.references.sectors.success.delay}</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-3 sm:p-4 text-center">
                      <div className="text-xl sm:text-2xl font-bold">50%</div>
                      <p className="text-xs sm:text-sm text-white/80">{t.references.sectors.success.savings}</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-3 sm:p-4 text-center">
                      <div className="text-xl sm:text-2xl font-bold">24h</div>
                      <p className="text-xs sm:text-sm text-white/80">{t.references.sectors.success.support}</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-3 sm:p-4 text-center">
                      <div className="text-xl sm:text-2xl font-bold">98%</div>
                      <p className="text-xs sm:text-sm text-white/80">{t.references.sectors.success.satisfaction}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials & CTA Combined */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
          
          <div className="container-custom relative z-10 px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-stretch">
              {/* Left Side - Testimonials */}
              <div className="flex flex-col">
                <div className="mb-6 sm:mb-8">
                  <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
                    <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                    <span className="text-xs sm:text-sm font-semibold text-accent">{t.references.testimonials.badge}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {t.references.testimonials.title}
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600">
                    {t.references.testimonials.subtitle}
                  </p>
                </div>

                {/* Current Testimonial */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xl relative overflow-hidden flex-1 flex flex-col justify-between">
                  {/* Quote background */}
                  <div className="absolute top-0 right-0 opacity-5">
                    <Quote className="w-32 h-32 -mt-4 -mr-4" />
                  </div>

                  <div className="relative flex-1 flex flex-col justify-center">
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
                      &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base flex-shrink-0">
                        {testimonials[currentTestimonial].author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-gray-900 text-sm sm:text-base">
                          {testimonials[currentTestimonial].author}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600">
                          {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100">
                    <button
                      onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                      className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                      aria-label="Témoignage précédent"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-xs sm:text-sm font-medium">Précédent</span>
                    </button>
                    
                    {/* Indicators */}
                    <div className="flex gap-1.5 sm:gap-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index)}
                          className={`h-2 rounded-full transition-all ${
                            currentTestimonial === index
                              ? 'w-6 sm:w-8 bg-[#FF4500]'
                              : 'w-2 bg-gray-300 hover:bg-gray-400'
                          }`}
                          aria-label={`Témoignage ${index + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                      className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                      aria-label="Témoignage suivant"
                    >
                      <span className="text-xs sm:text-sm font-medium">Suivant</span>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side - CTA */}
              <div className="flex flex-col">
                <div className="bg-gray-900 rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden flex-1 flex flex-col justify-center">
                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                    {t.references.cta.title}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8">
                    {t.references.cta.subtitle}
                  </p>
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105"
                    >
                      {t.references.cta.start}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <a
                      href={getWhatsAppLink('references', language)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" style={{ color: '#25D366' }} />
                      {t.references.cta.whatsapp}
                    </a>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

