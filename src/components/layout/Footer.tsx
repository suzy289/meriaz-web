'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, MessageCircle, Mail, MapPin } from 'lucide-react'
import { whatsappLink, whatsappNumber } from '@/lib/utils'

const quickLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Références', href: '/references' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
]

const products = [
  { label: 'Otolid', href: 'https://www.otolid.io', external: true },
  { label: 'Kazimo', href: 'https://www.kazimo.app', external: true },
  { label: 'Wemonii', href: 'https://www.wemonii.com', external: true },
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="mb-4">
              <Image
                src="/Copie de Fichier 6 (1).png"
                alt="Meriaz"
                width={160}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            
            <p className="text-lg font-medium text-white mb-2">
              Votre partenaire technologique
            </p>
            <p className="text-gray-400 mb-6 max-w-sm">
              Nous aidons les entrepreneurs africains à créer des sites internet, ERP, SaaS et automatisations IA pour faire décoller leur business.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Nos produits</h4>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {product.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5 text-accent" />
                  <span>{whatsappNumber}</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@meriaz.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 text-secondary" />
                  <span>contact@meriaz.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary-light" />
                <span>Yaoundé, Cameroun</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} Meriaz - Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-gray-500 hover:text-white transition-colors">
                Mentions légales
              </button>
              <button className="text-gray-500 hover:text-white transition-colors">
                CGU
              </button>
              <button className="text-gray-500 hover:text-white transition-colors">
                Politique de confidentialité
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
