'use client'

import { useState, useEffect } from 'react'
import {
  Globe,
  Check,
  ArrowRight,
  Building2,
  Cog,
  Users,
  HeadphonesIcon,
  Rocket,
  Sparkles,
  Zap,
  Shield,
  Star,
} from 'lucide-react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

const backgroundImages = [
  '/digital-marketing.webp',
  '/pngtree-a-futuristic.webp',
]

export default function Services() {
  const { t } = useLanguage()
  
  const websiteFeatures = [
    { text: t.services.popular.feature1, icon: Shield, color: '#10B981', bgColor: 'rgba(16, 185, 129, 0.3)' }, // Green
    { text: t.services.popular.feature2, icon: Globe, color: '#3B82F6', bgColor: 'rgba(59, 130, 246, 0.3)' }, // Blue
    { text: t.services.popular.feature3, icon: Zap, color: '#F59E0B', bgColor: 'rgba(245, 158, 11, 0.3)' }, // Amber
    { text: t.services.popular.feature4, icon: Sparkles, color: '#EC4899', bgColor: 'rgba(236, 72, 153, 0.3)' }, // Pink
    { text: t.services.popular.feature5, icon: Star, color: '#8B5CF6', bgColor: 'rgba(139, 92, 246, 0.3)' }, // Purple
    { text: t.services.popular.feature6, icon: Rocket, color: '#FF4500', bgColor: 'rgba(255, 69, 0, 0.3)' }, // Orange
  ]

  const erpFeatures = [
    { icon: Cog, text: t.services.erp.feature1 },
    { icon: Building2, text: t.services.erp.feature2 },
    { icon: Rocket, text: t.services.erp.feature3 },
    { icon: Users, text: t.services.erp.feature4 },
    { icon: HeadphonesIcon, text: t.services.erp.feature5 },
  ]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Animation séquentielle pour les features ERP
  useEffect(() => {
    const showFeatures = () => {
      erpFeatures.forEach((_, index) => {
        setTimeout(() => {
          setVisibleFeatures((prev) => [...prev, index])
        }, index * 300) // 300ms entre chaque apparition
      })
    }

    // Observer pour déclencher l'animation quand la section est visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            showFeatures()
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('erp-features')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background with shapes */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        {/* Large floating blobs - more visible */}
        <div className="absolute top-10 left-5 w-80 h-80 bg-orange-400/30 rounded-full blur-2xl animate-float" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400/25 rounded-full blur-2xl animate-float animation-delay-300" />
        <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-emerald-400/25 rounded-full blur-2xl animate-float animation-delay-600" />
        <div className="absolute bottom-32 right-5 w-64 h-64 bg-purple-400/25 rounded-full blur-2xl animate-float animation-delay-900" />
        
        {/* Floating geometric shapes - larger and more visible */}
        <div className="absolute top-32 right-1/4 w-10 h-10 bg-orange-500 rounded-full animate-bounce-subtle shadow-xl opacity-70" />
        <div className="absolute top-1/2 left-16 w-12 h-12 bg-blue-500 rotate-45 animate-float shadow-xl opacity-60" />
        <div className="absolute bottom-48 right-24 w-14 h-14 border-4 border-orange-500 rounded-xl rotate-12 animate-float animation-delay-300 opacity-60" />
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-emerald-500 rounded-full animate-bounce-subtle animation-delay-600 shadow-xl opacity-70" />
        <div className="absolute top-24 right-1/3 w-6 h-6 bg-purple-500 rounded animate-float animation-delay-900 opacity-70" />
        <div className="absolute bottom-40 left-12 w-10 h-10 border-4 border-blue-500 rounded-full animate-bounce-subtle animation-delay-300 opacity-50" />
        
        {/* Floating lines - thicker and more visible */}
        <div className="absolute top-1/4 right-8 w-32 h-2 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full animate-float animation-delay-600 opacity-60" />
        <div className="absolute bottom-1/3 left-20 w-24 h-2 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full animate-float animation-delay-300 opacity-50" />
        <div className="absolute top-2/3 right-1/3 w-28 h-2 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full animate-float animation-delay-900 opacity-50" />
        
        {/* Floating rings - thicker borders */}
        <div className="absolute top-48 left-1/3 w-20 h-20 border-4 border-orange-400 rounded-full animate-float animation-delay-600 opacity-50" />
        <div className="absolute bottom-56 right-1/4 w-16 h-16 border-4 border-blue-400 rounded-full animate-bounce-subtle animation-delay-900 opacity-50" />
        <div className="absolute top-1/2 right-12 w-24 h-24 border-3 border-purple-400 rounded-full animate-float animation-delay-300 opacity-40" />
        
        {/* Floating dots pattern - larger */}
        <div className="absolute top-20 left-1/2 w-4 h-4 bg-orange-500 rounded-full animate-bounce-subtle shadow-lg opacity-80" />
        <div className="absolute top-28 left-[53%] w-3 h-3 bg-orange-400 rounded-full animate-bounce-subtle animation-delay-300 shadow-md opacity-70" />
        <div className="absolute top-24 left-[56%] w-3 h-3 bg-orange-400 rounded-full animate-bounce-subtle animation-delay-600 shadow-md opacity-70" />
        
        {/* Extra floating elements */}
        <div className="absolute top-1/4 left-10 w-6 h-6 bg-yellow-400 rounded-lg rotate-45 animate-float opacity-60 shadow-lg" />
        <div className="absolute bottom-1/4 right-20 w-8 h-8 bg-pink-400 rounded-full animate-bounce-subtle animation-delay-600 opacity-50 shadow-lg" />
        <div className="absolute top-3/4 left-1/2 w-5 h-5 border-3 border-teal-400 rounded animate-float animation-delay-900 opacity-60" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-primary font-semibold text-xs sm:text-sm">{t.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            {t.services.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4 sm:px-0">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          {/* Website offer - Main Card */}
          <div className="relative group h-full">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-[2rem] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            
            <div className="relative rounded-3xl p-6 sm:p-8 md:p-10 text-white overflow-hidden min-h-[500px] sm:min-h-[600px] md:min-h-[650px] h-full">
              {/* Background Images with crossfade */}
              <div className="absolute inset-0">
                {backgroundImages.map((src, index) => (
                  <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`Background ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-[8000ms] ease-out"
                      style={{
                        transform: index === currentImageIndex ? 'scale(1.1)' : 'scale(1)',
                      }}
                      priority={index === 0}
                    />
                  </div>
                ))}
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-light/85 to-primary/90" />
                {/* Dark overlay to reduce brightness */}
                <div className="absolute inset-0 bg-black/30" />
              </div>
              
              {/* Animated background shapes */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-float" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-float animation-delay-300" />
              <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float animation-delay-600" />

              <div className="relative h-full flex flex-col">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full mb-6 self-start border border-gray-700">
                  <span className="text-lg">🔥</span>
                  <span className="text-white font-bold text-sm uppercase tracking-wide">{t.services.popular.badge}</span>
                </div>

                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/30">
                    <Globe className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                      {t.services.popular.title}
                    </h3>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-end gap-3 mb-6">
                  <span className="text-white/70 text-sm">{t.services.popular.price}</span>
                  <div className="flex items-baseline">
                    <span className="text-5xl md:text-6xl font-bold relative inline-block">
                      {t.services.popular.priceValue}
                      <span className="absolute bottom-0 left-0 w-1/2 h-2 bg-gradient-to-r from-orange-500 to-transparent rounded-full"></span>
                    </span>
                    <span className="text-2xl font-semibold ml-2">{t.services.popular.currency}</span>
                  </div>
                </div>

                <p className="text-white/90 mb-8 text-lg leading-relaxed">
                  {t.services.popular.description}
                </p>

                {/* Features Grid - Colorful icons */}
                <div className="grid grid-cols-2 gap-4 mb-10 flex-1">
                  {websiteFeatures.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <div 
                        key={index} 
                        className="flex items-center gap-3 px-5 py-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                      >
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                          style={{ backgroundColor: feature.bgColor }}
                        >
                          <Icon className="w-5 h-5" style={{ color: feature.color }} />
                        </div>
                        <span className="text-white/90 text-sm font-medium">{feature.text}</span>
                      </div>
                    )
                  })}
                </div>

                {/* Button at bottom, centered */}
                <div className="mt-auto pt-4 flex justify-center">
                  <Link href="/contact">
                    <Button
                      variant="primary"
                      size="lg"
                      className="bg-white text-primary hover:bg-gray-100 hover:text-primary group shadow-xl"
                    >
{t.services.popular.cta}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ERP/SaaS offer - No background image */}
          <div className="relative group h-full">
            {/* Subtle glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
            
            <div className="relative rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-gray-100 hover:border-blue-500 h-full overflow-hidden min-h-[650px] bg-white transition-all duration-300">
              {/* Decorative shapes */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-[100px] animate-float" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-red-500/10 to-transparent rounded-tr-[80px] animate-float animation-delay-300" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-50" />
              
              <div className="relative h-full flex flex-col">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full mb-6 self-start border border-gray-700">
                  <Building2 className="w-4 h-4 text-white" />
                  <span className="text-white font-semibold text-sm">{t.services.erp.badge}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {t.services.erp.title}
                </h3>

                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  {t.services.erp.description}
                </p>

                {/* Features List with sequential animation */}
                <div id="erp-features" className="space-y-3 mb-8">
                  {erpFeatures.map((feature, index) => {
                    const Icon = feature.icon
                    const isVisible = visibleFeatures.includes(index)
                    return (
                      <div
                        key={index}
                        className={`flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-orange-50 border-2 border-transparent hover:border-orange-400 transition-all duration-500 group/item cursor-default shadow-sm hover:shadow-lg transform ${
                          isVisible 
                            ? 'opacity-100 translate-x-0' 
                            : 'opacity-0 -translate-x-8'
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform"
                          style={{ backgroundColor: '#000000' }}
                        >
                          <Icon className="w-6 h-6" style={{ color: '#FF4500' }} />
                        </div>
                        <span className="text-gray-700 font-medium text-lg">{feature.text}</span>
                        <Check className="w-5 h-5 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity" style={{ color: '#FF4500' }} />
                      </div>
                    )
                  })}
                </div>

                {/* Button centered */}
                <div className="mt-auto pt-4 flex justify-center">
                  <Link href="/contact">
                    <Button
                      variant="primary"
                      size="lg"
                      className="bg-blue-600 hover:bg-white hover:text-blue-600 border-2 border-blue-600 group transition-all duration-300"
                    >
{t.services.erp.cta}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom trust banner - Card design */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Livraison rapide */}
            <div className="group">
              <div className="h-full rounded-2xl bg-white border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:border-gray-300 transition-all duration-500 overflow-hidden">
                <div className="relative bg-gray-900 p-6 pb-12">
                  <div className="relative flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gray-800 flex items-center justify-center text-white border border-gray-700 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white leading-tight">{t.services.trust.fast.title}</h3>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 right-6">
                    <span className="inline-flex items-center gap-1.5 bg-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      {t.services.trust.fast.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6 pt-8">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t.services.trust.fast.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Support inclus */}
            <div className="group">
              <div className="h-full rounded-2xl bg-white border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:border-gray-300 transition-all duration-500 overflow-hidden">
                <div className="relative bg-gray-800 p-6 pb-12">
                  <div className="relative flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gray-900 flex items-center justify-center text-white border border-gray-700 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white leading-tight">{t.services.trust.support.title}</h3>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 right-6">
                    <span className="inline-flex items-center gap-1.5 bg-blue-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      {t.services.trust.support.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6 pt-8">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t.services.trust.support.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Satisfaction garantie */}
            <div className="group">
              <div className="h-full rounded-2xl bg-white border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:border-gray-300 transition-all duration-500 overflow-hidden">
                <div className="relative bg-gray-900 p-6 pb-12">
                  <div className="relative flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gray-800 flex items-center justify-center text-white border border-gray-700 group-hover:scale-110 transition-transform duration-300">
                      <Star className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white leading-tight">{t.services.trust.satisfaction.title}</h3>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 right-6">
                    <span className="inline-flex items-center gap-1.5 bg-emerald-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      {t.services.trust.satisfaction.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6 pt-8">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t.services.trust.satisfaction.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              style={{ backgroundColor: index === currentImageIndex ? '#374151' : undefined }}
              aria-label={`Image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
