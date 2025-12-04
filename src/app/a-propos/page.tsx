'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Handshake, 
  TrendingUp, 
  Brain, 
  BadgeCheck,
  Target,
  Users,
  Lightbulb,
  Rocket,
  Heart,
  Globe,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Award
} from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AProposPage() {
  const { t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const backgroundImages = [
    '/Entreprise-concept.jpg',
    '/entreprise.jpeg',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [backgroundImages.length])
  
  const values = [
    {
      icon: Handshake,
      title: t.about.values.partnership.title,
      description: t.about.values.partnership.description,
      color: 'from-primary to-primary-light',
    },
    {
      icon: Lightbulb,
      title: t.about.values.innovation.title,
      description: t.about.values.innovation.description,
      color: 'from-secondary to-yellow-400',
    },
    {
      icon: Heart,
      title: t.about.values.accessibility.title,
      description: t.about.values.accessibility.description,
      color: 'from-accent to-green-400',
    },
    {
      icon: Target,
      title: t.about.values.efficiency.title,
      description: t.about.values.efficiency.description,
      color: 'from-purple-500 to-purple-600',
    },
  ]

  const stats = [
    { value: '50+', label: t.about.stats.clients, icon: Users },
    { value: '150+', label: t.about.stats.projects, icon: Rocket },
    { value: '5 jours', label: t.about.stats.delay, icon: Target },
    { value: '60%', label: t.about.stats.savings, icon: TrendingUp },
  ]

  const services = t.about.mission.services

  const team = [
    {
      name: t.about.why.team.developer.name,
      role: t.about.why.team.developer.role,
      description: t.about.why.team.developer.description,
    },
    {
      name: t.about.why.team.ai.name,
      role: t.about.why.team.ai.role,
      description: t.about.why.team.ai.description,
    },
    {
      name: t.about.why.team.consultant.name,
      role: t.about.why.team.consultant.role,
      description: t.about.why.team.consultant.description,
    },
  ]
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
          {/* Background Images with scroll effect */}
          <div className="absolute inset-0">
            {backgroundImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  backgroundImage: `url('${image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            ))}
          </div>
          {/* Dark overlay to reduce image brightness */}
          <div className="absolute inset-0 bg-black/50" />
          
          {/* Decorative elements */}
          <div className="absolute top-40 right-20 w-64 h-64 bg-secondary/30 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-30" />
          
          <div className="container-custom relative z-10 px-4 sm:px-6">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
                <span className="text-xs sm:text-sm font-medium text-white">{t.about.hero.badge}</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                {t.about.hero.title}
                <span className="block text-secondary">{t.about.hero.titleHighlight}</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mb-6 sm:mb-8">
                {t.about.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-gray-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all hover:scale-105 text-sm sm:text-base"
                >
                  {t.about.hero.cta1}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="/references"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl backdrop-blur-sm transition-all text-sm sm:text-base"
                >
                  {t.about.hero.cta2}
                </Link>
              </div>
            </div>
          </div>
          
          {/* Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white relative -mt-1">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                const isLast = index === stats.length - 1
                
                return (
                  <div
                    key={index}
                    className={`relative p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl cursor-pointer transition-all duration-500 overflow-hidden text-center ${
                      isLast
                        ? 'bg-black text-white'
                        : 'bg-white border-2 border-gray-100 hover:border-black'
                    }`}
                  >
                    {isLast && (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                    )}
                    <div className="relative z-10">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 md:mb-6 flex items-center justify-center mx-auto ${
                        isLast ? 'bg-white/10' : 'bg-black'
                      }`}>
                        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white`} />
                      </div>
                      <p className={`text-2xl sm:text-3xl md:text-4xl font-black mb-1 sm:mb-2 ${
                        isLast ? 'text-[#FF4500]' : 'text-gray-900'
                      }`}>
                        {stat.value}
                      </p>
                      <p className={`text-[10px] sm:text-xs md:text-sm font-medium ${
                        isLast 
                          ? 'text-gray-300' 
                          : (index === 1) 
                            ? 'text-[#FF4500]' 
                            : 'text-gray-500'
                      }`}>
                        {stat.label}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container-custom px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary-50 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
                  <Target className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  <span className="text-xs sm:text-sm font-semibold text-primary">{t.about.mission.badge}</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  {t.about.mission.title}
                </h2>
                
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  {t.about.mission.description}
                </p>

                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-gray-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl rotate-3" />
                <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl">
                  <div className="text-center mb-6 sm:mb-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                      <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{t.about.mission.madeIn.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{t.about.mission.madeIn.subtitle}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <span className="font-medium text-gray-700">{t.about.mission.madeIn.basedIn}</span>
                      <span className="font-bold text-primary">{t.about.mission.madeIn.location}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <span className="font-medium text-gray-700">{t.about.mission.madeIn.clientsIn}</span>
                      <span className="font-bold text-primary">{t.about.mission.madeIn.countries}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <span className="font-medium text-gray-700">{t.about.mission.madeIn.language}</span>
                      <span className="font-bold text-primary">{t.about.mission.madeIn.languages}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-secondary-50 rounded-full px-4 py-2 mb-6">
                <Heart className="w-4 h-4 text-secondary" />
                <span className="text-sm font-semibold text-secondary-dark">{t.about.values.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t.about.values.title}
              </h2>
              <p className="text-xl text-gray-600">
                {t.about.values.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                const isLast = index === values.length - 1
                
                return (
                  <div
                    key={index}
                    className={`relative p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl cursor-pointer transition-all duration-500 overflow-hidden ${
                      isLast
                        ? 'bg-black text-white'
                        : 'bg-white border-2 border-gray-100 hover:border-black'
                    }`}
                  >
                    {isLast && (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                    )}
                    <div className="relative z-10">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 md:mb-6 flex items-center justify-center ${
                        isLast ? 'bg-white/10' : 'bg-black'
                      }`}>
                        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 ${isLast ? 'text-white' : 'text-white'}`} />
                      </div>
                      <h3 className={`text-sm sm:text-base font-bold mb-1 sm:mb-2 ${
                        isLast 
                          ? 'text-white' 
                          : (index === 0 || index === 2) 
                            ? 'text-[#FF4500]' 
                            : 'text-gray-900'
                      }`}>
                        {value.title}
                      </h3>
                      <p className={`text-[10px] sm:text-xs md:text-sm leading-relaxed ${
                        isLast ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {value.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden relative">
          {/* Background decoration - Professional gray gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.03),transparent)]" />
          
          {/* Subtle grid pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM36 4V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {t.about.why.title}
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  {t.about.why.subtitle}
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-white/20 group-hover/item:border-white/30 transition-all duration-300">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-white">{t.about.why.partner.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{t.about.why.partner.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-white/20 group-hover/item:border-white/30 transition-all duration-300">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-white">{t.about.why.ai.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{t.about.why.ai.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-white/20 group-hover/item:border-white/30 transition-all duration-300">
                      <BadgeCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-white">{t.about.why.offers.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{t.about.why.offers.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {team.map((member, index) => (
                  <div
                    key={index}
                    className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 ${index === 2 ? 'col-span-2' : ''}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-white text-lg mb-1">{member.name}</h3>
                    <p className="text-[#FF4500] text-sm font-medium mb-2">{member.role}</p>
                    <p className={`text-sm leading-relaxed ${index === 1 ? 'text-[#FF4500]' : 'text-gray-400'}`}>{member.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t.about.cta.title}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t.about.cta.subtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105"
                >
                  {t.about.cta.start}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/references"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-xl border border-gray-200 transition-colors"
                >
                  {t.about.cta.references}
                </Link>
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

