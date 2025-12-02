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
import { whatsappLink, whatsappNumber } from '@/lib/utils'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      contactByWhatsapp: true,
    },
  })

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
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-secondary" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
          
          {/* Floating shapes */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">Réponse sous 24h garantie</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Parlons de votre
                <span className="block text-secondary">projet digital</span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Que vous ayez besoin d&apos;un site internet, d&apos;un ERP, d&apos;une solution IA ou d&apos;un accompagnement technologique, nous sommes là pour vous aider.
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
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Left: Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                {/* Quick contact cards */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Contactez-nous directement
                  </h2>
                  
                  {/* WhatsApp Card */}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MessageCircle className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="text-white/80 text-sm mb-1">WhatsApp (Recommandé)</p>
                        <p className="text-xl font-bold">{whatsappNumber}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                  
                  {/* Email Card */}
                  <a
                    href="mailto:contact@meriaz.com"
                    className="group block bg-gray-50 hover:bg-primary-50 rounded-2xl p-6 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                        <Mail className="w-7 h-7 text-primary group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Email</p>
                        <p className="text-lg font-semibold text-gray-900">contact@meriaz.com</p>
                      </div>
                    </div>
                  </a>
                  
                  {/* Phone Card */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                        <Phone className="w-7 h-7 text-secondary" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Téléphone</p>
                        <p className="text-lg font-semibold text-gray-900">{whatsappNumber}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Info Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-5 border border-primary/10">
                    <MapPin className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-1">Localisation</h3>
                    <p className="text-gray-600 text-sm">Yaoundé, Cameroun</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl p-5 border border-secondary/10">
                    <Clock className="w-8 h-8 text-secondary mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-1">Horaires</h3>
                    <p className="text-gray-600 text-sm">Lun - Ven : 8h - 18h</p>
                  </div>
                </div>

                {/* Map or Image */}
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                    <div className="text-center text-white">
                      <MapPin className="w-12 h-12 mx-auto mb-3 animate-bounce" />
                      <p className="font-semibold">Yaoundé, Cameroun</p>
                      <p className="text-white/80 text-sm">Nous travaillons avec des clients partout en Afrique</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-gray-100">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Décrivez votre projet
                    </h2>
                    <p className="text-gray-600">
                      Remplissez le formulaire et nous vous recontacterons rapidement.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <input
                      type="text"
                      {...register('honeypot')}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        id="fullName"
                        label="Nom / Prénom *"
                        placeholder="Votre nom complet"
                        error={errors.fullName?.message}
                        {...register('fullName')}
                      />
                      <Input
                        id="company"
                        label="Entreprise / Organisation"
                        placeholder="Nom de votre entreprise"
                        error={errors.company?.message}
                        {...register('company')}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        id="email"
                        type="email"
                        label="Email *"
                        placeholder="votre@email.com"
                        error={errors.email?.message}
                        {...register('email')}
                      />
                      <Input
                        id="whatsapp"
                        type="tel"
                        label="Numéro WhatsApp *"
                        placeholder="+237 6XX XXX XXX"
                        error={errors.whatsapp?.message}
                        {...register('whatsapp')}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Select
                        id="projectType"
                        label="Type de projet *"
                        options={projectTypes}
                        error={errors.projectType?.message}
                        {...register('projectType')}
                      />
                      <Select
                        id="budget"
                        label="Budget approximatif *"
                        options={budgetOptions}
                        error={errors.budget?.message}
                        {...register('budget')}
                      />
                    </div>

                    <Textarea
                      id="message"
                      label="Message / Description du projet *"
                      placeholder="Décrivez votre projet, vos besoins et vos objectifs..."
                      rows={5}
                      error={errors.message?.message}
                      {...register('message')}
                    />

                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="contactByWhatsapp"
                        {...register('contactByWhatsapp')}
                        className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                      />
                      <label htmlFor="contactByWhatsapp" className="text-gray-700 cursor-pointer">
                        Je souhaite être contacté par WhatsApp
                      </label>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        isLoading={isSubmitting}
                        className="w-full sm:w-auto"
                      >
                        <Send className="w-5 h-5" />
                        Envoyer ma demande
                      </Button>

                      {submitStatus === 'success' && (
                        <div className="flex items-center gap-2 text-green-600 font-medium animate-fade-in">
                          <CheckCircle className="w-5 h-5" />
                          Message envoyé avec succès !
                        </div>
                      )}

                      {submitStatus === 'error' && (
                        <div className="flex items-center gap-2 text-red-500 font-medium">
                          <AlertCircle className="w-5 h-5" />
                          Une erreur est survenue. Réessayez.
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
                Vous hésitez encore ?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Discutons ensemble de votre projet. Premier échange gratuit et sans engagement.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Discuter sur WhatsApp
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-xl border border-gray-200 transition-colors"
                >
                  Voir nos services
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

