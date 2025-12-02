'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import { Input, Textarea, Select } from '@/components/ui/Input'
import SectionTitle from '@/components/ui/SectionTitle'
import {
  contactFormSchema,
  type ContactFormData,
  projectTypes,
  budgetOptions,
} from '@/lib/validations'
import { whatsappLink, whatsappNumber } from '@/lib/utils'

export default function Contact() {
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
      // Simulate API call - replace with actual API endpoint
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
    <section id="contact" className="section bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          title="Prêt à faire décoller votre business avec Meriaz ?"
          subtitle="Parlez-nous de votre projet (site internet, microfinance, solution métier, automatisation IA, SaaS…). Nous revenons vers vous rapidement avec les meilleures options pour votre budget."
        />

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left: Contact info */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-6">Contactez-nous</h3>
              
              <div className="space-y-6">
                {/* WhatsApp */}
                <div>
                  <p className="text-white/80 mb-2">WhatsApp Support</p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">{whatsappNumber}</p>
                      <p className="text-sm text-white/80">Cliquez pour discuter</p>
                    </div>
                  </a>
                </div>

                {/* Email */}
                <div>
                  <p className="text-white/80 mb-2">Email</p>
                  <a
                    href="mailto:contact@meriaz.com"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-colors"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Send className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">contact@meriaz.com</p>
                      <p className="text-sm text-white/80">Réponse sous 24h</p>
                    </div>
                  </a>
                </div>

                {/* Location */}
                <div className="pt-6 border-t border-white/20">
                  <p className="text-white/80 mb-2">Localisation</p>
                  <p className="font-semibold">Yaoundé, Cameroun</p>
                </div>

                {/* Working hours */}
                <div>
                  <p className="text-white/80 mb-2">Horaires</p>
                  <p className="font-semibold">Lun - Ven : 8h - 18h</p>
                  <p className="text-sm text-white/80">WhatsApp disponible 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Honeypot field - hidden */}
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
                  <label
                    htmlFor="contactByWhatsapp"
                    className="text-gray-700 cursor-pointer"
                  >
                    Je souhaite être contacté par WhatsApp
                  </label>
                </div>

                {/* Submit button and status */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
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
                    <div className="flex items-center gap-2 text-accent font-medium">
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
  )
}

