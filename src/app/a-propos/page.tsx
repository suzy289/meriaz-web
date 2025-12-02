'use client'

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

const values = [
  {
    icon: Handshake,
    title: 'Partenariat',
    description: 'Nous ne sommes pas juste des prestataires, nous devenons vos partenaires technologiques dédiés.',
    color: 'from-primary to-primary-light',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Nous intégrons les dernières technologies (IA, automatisation) pour vous donner un avantage compétitif.',
    color: 'from-secondary to-yellow-400',
  },
  {
    icon: Heart,
    title: 'Accessibilité',
    description: 'Des solutions de qualité à des prix adaptés aux réalités africaines, sans compromis sur la qualité.',
    color: 'from-accent to-green-400',
  },
  {
    icon: Target,
    title: 'Efficacité',
    description: 'Chaque solution vise à automatiser et simplifier pour augmenter votre productivité.',
    color: 'from-purple-500 to-purple-600',
  },
]

const stats = [
  { value: '50+', label: 'Clients satisfaits', icon: Users },
  { value: '100+', label: 'Projets livrés', icon: Rocket },
  { value: '5 jours', label: 'Délai moyen', icon: Target },
  { value: '50%', label: 'd\'économies', icon: TrendingUp },
]

const services = [
  'Sites internet professionnels',
  'Applications web & mobiles',
  'ERP et solutions métiers',
  'Core banking pour microfinance',
  'Automatisation IA',
  'SaaS sur mesure',
]

const team = [
  {
    name: 'Expert en développement',
    role: 'Full-Stack & Architecture',
    description: 'Plus de 5 ans d\'expérience dans la création de solutions digitales robustes.',
  },
  {
    name: 'Spécialiste IA',
    role: 'Intelligence Artificielle',
    description: 'Intégration de solutions IA pour automatiser et optimiser vos processus.',
  },
  {
    name: 'Consultant Business',
    role: 'Stratégie & Accompagnement',
    description: 'Accompagnement personnalisé pour transformer vos idées en succès.',
  },
]

export default function AProposPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary to-primary-light" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)]" />
          
          {/* Decorative elements */}
          <div className="absolute top-40 right-20 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-white">Votre partenaire technologique</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Nous aidons les entrepreneurs
                <span className="block text-secondary">à conquérir le digital</span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-2xl mb-8">
                Meriaz est une entreprise technologique camerounaise dont la mission est de devenir le partenaire technologique des entrepreneurs qui veulent faire décoller leur business.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-gray-900 font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105"
                >
                  Discuter de votre projet
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/references"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all"
                >
                  Voir nos références
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="group text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-14 h-14 mx-auto mb-4 bg-primary-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary-50 rounded-full px-4 py-2 mb-6">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Notre Mission</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Démocratiser l&apos;accès aux technologies pour les entrepreneurs africains
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Nous croyons que chaque entrepreneur mérite d&apos;avoir accès aux meilleures technologies pour développer son activité. C&apos;est pourquoi nous proposons des solutions de qualité internationale à des prix adaptés aux réalités africaines.
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
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                      <Globe className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Made in Cameroon</h3>
                    <p className="text-gray-600">Pour l&apos;Afrique et le monde</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <span className="font-medium text-gray-700">Basé à</span>
                      <span className="font-bold text-primary">Yaoundé, Cameroun</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <span className="font-medium text-gray-700">Clients dans</span>
                      <span className="font-bold text-primary">5+ pays africains</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <span className="font-medium text-gray-700">Langue</span>
                      <span className="font-bold text-primary">Français & Anglais</span>
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
                <span className="text-sm font-semibold text-secondary-dark">Nos Valeurs</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ce qui nous définit
              </h2>
              <p className="text-xl text-gray-600">
                Nos valeurs guident chaque décision et chaque ligne de code que nous écrivons.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300"
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-secondary overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent)]" />
          
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Pourquoi choisir Meriaz ?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Nous combinons expertise technique, compréhension des réalités africaines et passion pour l&apos;innovation.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Un partenaire, pas juste un prestataire</h3>
                      <p className="text-white/80">Nous vous accompagnons de l&apos;idée jusqu&apos;au déploiement et au-delà.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">IA + logiciels sur mesure</h3>
                      <p className="text-white/80">Nous intégrons des briques d&apos;IA pour accélérer votre productivité.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <BadgeCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Offres accessibles et transparentes</h3>
                      <p className="text-white/80">Sites internet à partir de 30 000 XAF avec notre opération spéciale.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {team.map((member, index) => (
                  <div
                    key={index}
                    className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 ${index === 2 ? 'col-span-2' : ''}`}
                  >
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-white text-lg mb-1">{member.name}</h3>
                    <p className="text-secondary text-sm font-medium mb-2">{member.role}</p>
                    <p className="text-white/80 text-sm">{member.description}</p>
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
                Prêt à transformer votre business ?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Discutons de votre projet et voyons comment Meriaz peut vous aider à atteindre vos objectifs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105"
                >
                  Démarrer un projet
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/references"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-xl border border-gray-200 transition-colors"
                >
                  Voir nos références
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

