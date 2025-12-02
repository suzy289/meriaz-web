'use client'

import { ExternalLink, MessageSquare, Building, Wallet } from 'lucide-react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import SectionTitle from '@/components/ui/SectionTitle'

const products = [
  {
    name: 'Otolid',
    badge: 'En bêta testing',
    badgeVariant: 'info' as const,
    icon: MessageSquare,
    description:
      'Plateforme de messages automatisés par IA pour WhatsApp. Répondez à vos clients 24h/24, automatisez les confirmations, relances, réponses fréquentes et campagnes, sans perdre votre touche humaine.',
    link: 'https://www.otolid.io',
    cta: 'Découvrir Otolid',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Kazimo',
    badge: 'En développement',
    badgeVariant: 'warning' as const,
    icon: Building,
    description:
      'Plateforme de core banking modulaire pour les institutions de microfinance. Suivez les comptes clients, les prêts, les épargnes et les opérations au quotidien avec une solution pensée pour vos réalités terrain.',
    link: 'https://www.kazimo.app',
    cta: 'En savoir plus sur Kazimo',
    gradient: 'from-primary to-primary-light',
  },
  {
    name: 'Wemonii',
    badge: 'En développement',
    badgeVariant: 'warning' as const,
    icon: Wallet,
    description:
      'Plateforme de crowdfunding dédiée aux Guichets Automatiques de Billets Mobile Money. Elle permet de financer et déployer des GAB Mobile Money en s\'appuyant sur la force de la communauté et des investisseurs.',
    link: 'https://www.wemonii.com',
    cta: 'Découvrir Wemonii',
    gradient: 'from-accent to-green-400',
  },
]

export default function Products() {
  return (
    <section id="products" className="section bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          title="Découvrez les produits Meriaz"
          subtitle="En plus de nos services, nous développons nos propres plateformes pour répondre aux besoins concrets des entrepreneurs africains."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <Card
                key={index}
                variant="hover"
                className="flex flex-col h-full border border-gray-100 group"
              >
                {/* Product icon with gradient background */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Badge */}
                <div className="mb-4">
                  <Badge variant={product.badgeVariant}>
                    {product.badge}
                  </Badge>
                </div>

                {/* Product name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {product.description}
                </p>

                {/* CTA */}
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() =>
                    window.open(product.link, '_blank', 'noopener,noreferrer')
                  }
                  className="w-full justify-center group/btn"
                >
                  {product.cta}
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Card>
            )
          })}
        </div>

        {/* Future products teaser */}
        <div className="mt-12 p-8 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl border border-gray-200">
          <div className="text-center">
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              D&apos;autres produits en préparation...
            </h4>
            <p className="text-gray-600 max-w-2xl mx-auto">
              <strong>Jonnie</strong> (HRMS/DMS), <strong>Assure</strong> (Microassurance), et des solutions <strong>IA</strong> pour l&apos;éducation financière, le support client 24/7 et les analyses prédictives.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

