'use client'

import Image from 'next/image'
import Link from 'next/link'
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Phone,
  Shield,
  Globe,
  Code,
  Cpu,
  Smartphone,
  Database,
  Bot,
  Palette
} from 'lucide-react'
import { getWhatsAppLink, whatsappNumber } from '@/lib/utils'
import { useLanguage } from '@/contexts/LanguageContext'

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

export default function Footer() {
  const { t, language } = useLanguage()
  const currentYear = new Date().getFullYear()
  
  const services = [
    { label: t.footer.website, href: '/#services' },
    { label: t.footer.webApp, href: '/#services' },
    { label: t.footer.erp, href: '/#services' },
    { label: t.footer.ai, href: '/#services' },
  ]

  const products = [
    { label: 'Otolid', href: 'https://www.otolid.io', external: true },
    { label: 'Kazimo', href: 'https://www.kazimo.app', external: true },
    { label: 'Wemonii', href: 'https://www.wemonii.com', external: true },
    { label: 'Core Banking', href: '/#products' },
  ]

  const information = [
    { label: t.footer.contactUs, href: '/contact' },
    { label: t.footer.about, href: '/a-propos' },
    { label: t.footer.references, href: '/references' },
    { label: t.footer.portfolio, href: '/#portfolio' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Main footer */}
      <div className="container-custom pt-6 sm:pt-16 pb-4 sm:pb-8 relative z-10 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-10 lg:gap-12 mb-4 sm:mb-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="mb-2 sm:mb-4">
              <Image
                src="/Copie de Fichier 6 (1).png"
                alt="Meriaz"
                width={160}
                height={50}
                className="h-10 sm:h-12 w-auto"
              />
            </div>
            
            <p className="text-base sm:text-lg font-medium text-white mb-1 sm:mb-2">
              {t.footer.tagline}
            </p>
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-6 max-w-sm leading-relaxed">
              {t.footer.description}
            </p>

            {/* Contact and Social links */}
            <div className="border-t border-white/10 pt-3 sm:pt-6 mb-3 sm:mb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-8">
                {/* Social links - Left */}
                <div className="hidden sm:flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/5 border border-white/10 hover:bg-[#FF4500]/20 hover:border-[#FF4500]/30 rounded-lg flex items-center justify-center transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                )
              })}
                </div>

                {/* Contact Info - Right */}
                <div className="hidden sm:flex flex-row items-center gap-4 sm:gap-6">
                  {/* Email */}
                  <a
                    href="mailto:contact@meriaz.com"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors duration-300">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="text-gray-400 group-hover:text-white transition-colors text-sm block">contact@meriaz.com</span>
                      <span className="text-xs text-gray-600">Email</span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm block">Yaoundé, Cameroun</span>
                      <span className="text-xs text-gray-600">Localisation</span>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <a
                    href={getWhatsAppLink('footer', language)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-3 group whitespace-nowrap"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 group-hover:border-green-500/30 transition-colors duration-300">
                      <MessageCircle className="w-4 h-4" style={{ color: '#25D366' }} />
                    </div>
                    <div>
                      <span className="text-gray-400 group-hover:text-white transition-colors text-sm block whitespace-nowrap">{whatsappNumber}</span>
                      <span className="text-xs text-[#FF4500]">WhatsApp</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8">
            {/* Information */}
            <div>
              <h4 className="text-xs font-bold mb-2 sm:mb-4 text-white uppercase tracking-widest flex items-center gap-2">
                <span className="w-6 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full"></span>
{t.footer.information}
              </h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {information.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary group-hover:w-2 transition-all duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-bold mb-2 sm:mb-4 text-white uppercase tracking-widest flex items-center gap-2">
                <span className="w-6 h-0.5 bg-gradient-to-r from-secondary to-secondary/50 rounded-full"></span>
{t.footer.ourServices}
              </h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      <span className="w-1 h-1 rounded-full bg-secondary/40 group-hover:bg-secondary group-hover:w-2 transition-all duration-300"></span>
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products - Centered on mobile, left-aligned on desktop */}
            <div className="hidden sm:block col-span-2 sm:col-span-1 text-center sm:text-left">
              <h4 className="text-xs font-bold mb-4 text-white uppercase tracking-widest flex items-center justify-center sm:justify-start gap-2">
                <span className="w-6 h-0.5 bg-gradient-to-r from-accent to-accent/50 rounded-full"></span>
{t.footer.ourProducts}
              </h4>
              <ul className="grid grid-cols-2 sm:flex sm:flex-col gap-2 sm:gap-0 sm:space-y-2">
                {products.map((product, index) => (
                  <li key={index} className="flex justify-center sm:justify-start">
                    {product.external ? (
                      <a
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent group-hover:w-2 transition-all duration-300"></span>
                        {product.label}
                      </a>
                    ) : (
                      <Link
                        href={product.href}
                        className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent group-hover:w-2 transition-all duration-300"></span>
                        {product.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar - Integrated */}
        <div className="border-t border-white/10 pt-4 sm:pt-6 pb-3 sm:pb-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                <Shield className="w-3.5 h-3.5 text-primary" />
              </div>
              <p className="text-gray-400 text-xs">
{t.footer.copyright.replace('2024', currentYear.toString())}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs">
              <button className="text-gray-500 hover:text-white transition-colors duration-300">
                Mentions légales
              </button>
              <button className="text-gray-500 hover:text-white transition-colors duration-300">
                Confidentialité
              </button>
              <button className="text-gray-500 hover:text-white transition-colors duration-300">
                CGU
              </button>
            </div>
          </div>
          <p className="text-[#FF4500] text-[10px] sm:text-xs text-center mt-2 sm:mt-3 max-w-xl mx-auto">
            Meriaz est votre partenaire technologique pour la transformation digitale des entrepreneurs africains.
          </p>
        </div>
      </div>
    </footer>
  )
}
