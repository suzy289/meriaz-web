'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Send, 
  MessageCircle, 
  CheckCircle, 
  AlertCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Phone,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import Button from '@/components/ui/Button'
import { Input, Textarea, Select } from '@/components/ui/Input'
import {
  contactFormSchema,
  type ContactFormData,
  projectTypes,
  budgetOptions,
} from '@/lib/validations'
import { getWhatsAppLink, whatsappNumber } from '@/lib/utils'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ContactPage() {
  const { language } = useLanguage()
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      contactByWhatsapp: true,
    },
  })

  const contactByWhatsapp = watch('contactByWhatsapp')

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log('Form data:', data)
      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen animate-fade-in">
        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/pngtree-blue-contact-icon-background-picture-image_1192129.jpg')"
            }}
          />
          {/* Dark overlay to reduce image brightness */}
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
          
          {/* Floating shapes */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-rotate-in">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">{t.contact.hero.badge}</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight animate-rotate-in-delay">
                {t.contact.hero.title}{' '}
                <span className="block text-secondary">{t.contact.hero.titleHighlight}</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4 animate-rotate-in-delay-2">
                {t.contact.hero.subtitle}
              </p>
            </div>
          </div>
          
          {/* Wave separator */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
              {/* Left: Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                {/* Quick contact cards */}
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                    {t.contact.contactInfo.title}
                  </h2>
                  
                  {/* WhatsApp Card */}
                  <a
                    href={getWhatsAppLink('contact', language)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-gray-900 rounded-2xl p-4 sm:p-6 text-white hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#25D366' }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/80 text-xs sm:text-sm mb-1">{t.contact.contactInfo.whatsapp.label}</p>
                        <p className="text-lg sm:text-xl font-bold break-words">{whatsappNumber}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                  
                  {/* Email Card */}
                  <a
                    href="mailto:contact@meriaz.com"
                    className="group block bg-gray-50 hover:bg-primary-50 rounded-2xl p-4 sm:p-6 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
                        <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-500 text-xs sm:text-sm mb-1">{t.contact.contactInfo.email.label}</p>
                        <p className="text-base sm:text-lg font-semibold text-gray-900 break-words">contact@meriaz.com</p>
                      </div>
                    </div>
                  </a>
                  
                  {/* Phone Card */}
                  <div className="bg-gray-50 rounded-2xl p-4 sm:p-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-500 text-xs sm:text-sm mb-1">{t.contact.contactInfo.phone.label}</p>
                        <p className="text-base sm:text-lg font-semibold text-gray-900 break-words">{whatsappNumber}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-4 sm:p-5 border border-primary/10">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-2 sm:mb-3" />
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{t.contact.contactInfo.location.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">{t.contact.contactInfo.location.value}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl p-4 sm:p-5 border border-secondary/10">
                    <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-secondary mb-2 sm:mb-3" />
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{t.contact.contactInfo.hours.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">{t.contact.contactInfo.hours.value}</p>
                  </div>
                </div>

                {/* Map or Image */}
                <a
                  href="https://www.google.com/maps/place/Umdeny/@3.8443522,11.4771327,13.01z/data=!4m6!3m5!1s0x108bcf8042c67015:0x4359cb0dad0b408c!8m2!3d3.8483995!4d11.5216853!16s%2Fg%2F11j7k5d5tq?entry=ttu&g_ep=EgoyMDI1MTEzMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-48 sm:h-64 rounded-2xl overflow-hidden block group cursor-pointer"
                >
                  {/* Map Image Background */}
                  <Image
                    src="/Capture.png"
                    alt="Localisation Yaoundé, Cameroun"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                    priority
                  />
                  {/* Content overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/20 group-hover:bg-black/30 transition-colors">
                    <div className="text-center text-white drop-shadow-lg">
                      <MapPin className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 animate-bounce drop-shadow-md" />
                      <p className="font-semibold text-base sm:text-lg drop-shadow-md px-2">{t.contact.contactInfo.map.location}</p>
                      <p className="text-white/90 text-xs sm:text-sm drop-shadow-md px-2">{t.contact.contactInfo.map.description}</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-gray-100">
                  <div className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      {t.contact.form.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600">
                      {t.contact.form.subtitle}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                    <input
                      type="text"
                      {...register('honeypot')}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                      <Input
                        id="fullName"
                        label={t.contact.form.fullName}
                        placeholder={t.contact.form.fullNamePlaceholder}
                        error={errors.fullName?.message}
                        {...register('fullName')}
                      />
                      <Input
                        id="company"
                        label={t.contact.form.company}
                        placeholder={t.contact.form.companyPlaceholder}
                        error={errors.company?.message}
                        {...register('company')}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                      <Input
                        id="email"
                        type="email"
                        label={t.contact.form.email}
                        placeholder={t.contact.form.emailPlaceholder}
                        error={errors.email?.message}
                        {...register('email')}
                      />
                      <Input
                        id="whatsapp"
                        type="tel"
                        label={t.contact.form.whatsapp}
                        placeholder={t.contact.form.whatsappPlaceholder}
                        error={errors.whatsapp?.message}
                        {...register('whatsapp')}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                      <Select
                        id="projectType"
                        label={t.contact.form.projectType}
                        options={projectTypes}
                        error={errors.projectType?.message}
                        {...register('projectType')}
                      />
                      <Select
                        id="budget"
                        label={t.contact.form.budget}
                        options={budgetOptions}
                        error={errors.budget?.message}
                        {...register('budget')}
                      />
                    </div>

                    <Textarea
                      id="message"
                      label={t.contact.form.message}
                      placeholder={t.contact.form.messagePlaceholder}
                      rows={5}
                      error={errors.message?.message}
                      {...register('message')}
                    />

                    <label htmlFor="contactByWhatsapp" className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        id="contactByWhatsapp"
                        {...register('contactByWhatsapp')}
                        className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                      />
                      <span className={`select-none transition-colors ${contactByWhatsapp ? 'text-green-600 font-medium' : 'text-gray-700'}`}>
                        {t.contact.form.contactByWhatsapp}
                      </span>
                    </label>

                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        isLoading={isSubmitting}
                        className="w-full sm:w-auto"
                      >
                        <Send className="w-5 h-5" />
                        {t.contact.form.submit}
                      </Button>

                      {submitStatus === 'success' && (
                        <div className="flex items-center gap-2 text-green-600 font-medium animate-fade-in">
                          <CheckCircle className="w-5 h-5" />
                          {t.contact.form.success}
                        </div>
                      )}

                      {submitStatus === 'error' && (
                        <div className="flex items-center gap-2 text-red-500 font-medium">
                          <AlertCircle className="w-5 h-5" />
                          {t.contact.form.error}
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ or CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t.contact.cta.title}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t.contact.cta.subtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={getWhatsAppLink('contact', language)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-5 h-5" style={{ color: '#25D366' }} />
                  {t.contact.cta.whatsapp}
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-900 hover:text-white text-gray-900 font-semibold px-8 py-4 rounded-xl border border-gray-200 transition-colors"
                >
                  {t.contact.cta.viewServices}
                  <ArrowRight className="w-5 h-5" />
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

