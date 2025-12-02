'use client'

import { useState } from 'react'
import { ExternalLink, MessageSquare, Building, Wallet, Sparkles, ChevronRight, Check, Globe, Zap, Users } from 'lucide-react'
import Button from '@/components/ui/Button'

const products = [
  {
    name: 'Otolid',
    badge: 'En bêta testing',
    badgeColor: 'bg-blue-500',
    icon: MessageSquare,
    shortDesc: 'Messages automatisés par IA',
    description:
      'Plateforme de messages automatisés par IA pour WhatsApp. Répondez à vos clients 24h/24, automatisez les confirmations, relances, réponses fréquentes et campagnes, sans perdre votre touche humaine.',
    features: [
      'Réponses automatiques 24/7',
      'Intégration WhatsApp Business',
      'Campagnes marketing ciblées',
      'Analyse des conversations',
    ],
    link: 'https://www.otolid.io',
    cta: 'Découvrir Otolid',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
  },
  {
    name: 'Kazimo',
    badge: 'En développement',
    badgeColor: 'bg-amber-500',
    icon: Building,
    shortDesc: 'Core banking pour microfinance',
    description:
      'Plateforme de core banking modulaire pour les institutions de microfinance. Suivez les comptes clients, les prêts, les épargnes et les opérations au quotidien avec une solution pensée pour vos réalités terrain.',
    features: [
      'Gestion des comptes clients',
      'Suivi des prêts et épargnes',
      'Rapports financiers automatisés',
      'Interface mobile friendly',
    ],
    link: 'https://www.kazimo.app',
    cta: 'En savoir plus',
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-500/20 via-red-500/10 to-transparent',
  },
  {
    name: 'Wemonii',
    badge: 'En développement',
    badgeColor: 'bg-emerald-500',
    icon: Wallet,
    shortDesc: 'Crowdfunding GAB Mobile Money',
    description:
      'Plateforme de crowdfunding dédiée aux Guichets Automatiques de Billets Mobile Money. Elle permet de financer et déployer des GAB Mobile Money en s\'appuyant sur la force de la communauté et des investisseurs.',
    features: [
      'Financement participatif',
      'Déploiement GAB Mobile Money',
      'Suivi des investissements',
      'Rendements transparents',
    ],
    link: 'https://www.wemonii.com',
    cta: 'Découvrir Wemonii',
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
  },
]

const futureProducts = [
  { name: 'Jonnie', desc: 'HRMS/DMS', icon: Users },
  { name: 'Assure', desc: 'Microassurance', icon: Zap },
  { name: 'IA Solutions', desc: 'Support & Analytics', icon: Globe },
]

export default function Products() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectedProduct = products[selectedIndex]
  const Icon = selectedProduct.icon

  return (
    <section id="products" className="relative py-24 overflow-hidden">
      {/* Background with floating shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Floating blobs */}
        <div className={`absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br ${selectedProduct.bgGradient} rounded-full blur-3xl animate-float transition-all duration-1000`} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-purple-500/10 via-pink-500/5 to-transparent rounded-full blur-3xl animate-float animation-delay-300" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl animate-float animation-delay-600" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-8 h-8 border-2 border-white/20 rounded-lg rotate-45 animate-float" />
        <div className="absolute bottom-32 left-20 w-6 h-6 bg-white/10 rounded-full animate-bounce-subtle" />
        <div className="absolute top-1/3 left-1/4 w-4 h-4 border-2 border-orange-500/40 rounded-full animate-float animation-delay-300" />
        <div className="absolute bottom-1/4 right-1/3 w-10 h-10 border-2 border-blue-500/30 rounded-xl rotate-12 animate-float animation-delay-600" />
        <div className="absolute top-1/2 left-10 w-5 h-5 bg-emerald-500/30 rounded animate-bounce-subtle animation-delay-900" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/10">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-white/90 font-semibold text-sm">Nos Produits</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Découvrez les produits{' '}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Meriaz</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Nos propres plateformes pour répondre aux besoins concrets des entrepreneurs africains.
          </p>
        </div>

        {/* Main Content - Product Showcase */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          
          {/* Left Side - Product List */}
          <div className="lg:col-span-2 order-1 lg:order-1 space-y-4">
            <h4 className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-4 px-2">
              Sélectionnez un produit
            </h4>
            
            {products.map((product, index) => {
              const ProductIcon = product.icon
              const isSelected = index === selectedIndex
              
              return (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-500 group ${
                    isSelected
                      ? 'bg-white/10 border-white/30 shadow-xl scale-[1.02]'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg transition-transform duration-300 ${isSelected ? 'scale-110' : 'group-hover:scale-105'}`}>
                      <ProductIcon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h5 className="text-white font-bold text-lg">{product.name}</h5>
                        <span className={`${product.badgeColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full`}>
                          {product.badge.split(' ')[1]}
                        </span>
                      </div>
                      <p className="text-white/50 text-sm truncate">{product.shortDesc}</p>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-white/40 transition-all duration-300 ${isSelected ? 'text-white translate-x-1' : 'group-hover:text-white/60'}`} />
                  </div>
                </button>
              )
            })}

            {/* Future Products Preview */}
            <div className="mt-8 p-5 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10">
              <h5 className="text-white/80 font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-orange-400" />
                Bientôt disponibles
              </h5>
              <div className="space-y-3">
                {futureProducts.map((product, idx) => {
                  const FutureIcon = product.icon
                  return (
                    <div key={idx} className="flex items-center gap-3 text-white/40">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                        <FutureIcon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium">{product.name}</span>
                      <span className="text-xs text-white/30">• {product.desc}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Selected Product Details */}
          <div className="lg:col-span-3 order-2 lg:order-2">
            <div 
              key={selectedIndex}
              className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 overflow-hidden animate-fade-in"
            >
              {/* Decorative gradient */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${selectedProduct.gradient} opacity-20 rounded-bl-full blur-2xl`} />
              
              <div className="relative">
                {/* Badge & Icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedProduct.gradient} flex items-center justify-center shadow-2xl animate-float`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <span className={`${selectedProduct.badgeColor} text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg`}>
                    {selectedProduct.badge}
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {selectedProduct.name}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  {selectedProduct.description}
                </p>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {selectedProduct.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${selectedProduct.gradient} flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white/80 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.open(selectedProduct.link, '_blank', 'noopener,noreferrer')}
                  className="group"
                >
                  {selectedProduct.cta}
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
