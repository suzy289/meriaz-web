'use client'

import Link from 'next/link'
import { 
  Quote, 
  Star, 
  ArrowRight, 
  Building2, 
  Users, 
  TrendingUp,
  Award,
  Sparkles,
  CheckCircle,
  MessageCircle
} from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import { whatsappLink } from '@/lib/utils'

const clients = [
  { 
    name: 'Alcofund Microfinance', 
    initials: 'AM',
    sector: 'Microfinance',
    description: 'Solution de core banking complète'
  },
  { 
    name: 'Music Microfinance', 
    initials: 'MM',
    sector: 'Microfinance',
    description: 'Plateforme de gestion financière'
  },
  { 
    name: 'Transfer and Exchange Services', 
    initials: 'TE',
    sector: 'Finance',
    description: 'Application de transfert d\'argent'
  },
  { 
    name: 'Groupe Reavem', 
    initials: 'GR',
    sector: 'Santé',
    description: 'Site web institutionnel'
  },
  { 
    name: 'KNY Groupe', 
    initials: 'KG',
    sector: 'Commerce',
    description: 'Plateforme e-commerce'
  },
  { 
    name: 'COGEP', 
    initials: 'CO',
    sector: 'Formation',
    description: 'Application de gestion'
  },
  { 
    name: 'Africa AI Solutions', 
    initials: 'AA',
    sector: 'Technologie',
    description: 'Automatisation IA'
  },
]

const testimonials = [
  {
    quote: 'Meriaz nous a livré notre site en quelques jours avec une qualité et un souci des détails remarquables. L\'équipe a su comprendre nos besoins et les traduire parfaitement.',
    author: 'Dr Christophe',
    role: 'Fondateur',
    company: 'Groupe Reavem',
    rating: 5,
    image: null,
  },
  {
    quote: 'Meriaz nous a permis de changer de partenaires pour notre core banking et de faire plus de 50% d\'économies pour des délais et une qualité supérieurs. Un vrai game-changer !',
    author: 'M. Belias',
    role: 'PCA',
    company: 'Alcofund',
    rating: 5,
    image: null,
  },
  {
    quote: 'La réactivité et le professionnalisme de l\'équipe Meriaz sont exceptionnels. Ils ont transformé notre vision en une application fonctionnelle en un temps record.',
    author: 'Emmanuel N.',
    role: 'Directeur Technique',
    company: 'KNY Groupe',
    rating: 5,
    image: null,
  },
]

const stats = [
  { value: '50+', label: 'Clients satisfaits', icon: Users },
  { value: '100+', label: 'Projets livrés', icon: Award },
  { value: '98%', label: 'Taux de satisfaction', icon: TrendingUp },
  { value: '5+', label: 'Pays couverts', icon: Building2 },
]

const sectors = [
  { name: 'Microfinance', count: 15, color: 'bg-primary' },
  { name: 'E-commerce', count: 12, color: 'bg-secondary' },
  { name: 'Santé', count: 8, color: 'bg-accent' },
  { name: 'Éducation', count: 7, color: 'bg-purple-500' },
  { name: 'Services', count: 10, color: 'bg-blue-500' },
]

export default function ReferencesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-light" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,200,50,0.2),transparent)]" />
          
          {/* Decorative */}
          <div className="absolute top-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">Plus de 50 clients nous font confiance</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Ils ont choisi
                <span className="block text-secondary">Meriaz</span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Découvrez les entreprises et entrepreneurs qui nous font confiance pour leur transformation digitale.
              </p>
            </div>
          </div>
          
          {/* Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 120L60 105C120 90 240 60 360 50C480 40 600 50 720 60C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
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

        {/* Clients Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nos clients
              </h2>
              <p className="text-xl text-gray-600">
                Des entreprises de toutes tailles nous font confiance pour leurs projets digitaux.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <span className="text-xl font-bold text-white">
                      {client.initials}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-2">{client.sector}</p>
                  <p className="text-sm text-gray-600">{client.description}</p>
                </div>
              ))}
              
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-secondary to-yellow-400 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Votre entreprise ?</h3>
                <p className="text-sm text-white/90 mb-4">Rejoignez nos clients satisfaits</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors"
                >
                  Nous contacter
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Expertise multi-sectorielle
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Nous intervenons dans de nombreux secteurs d&apos;activité, avec une expertise particulière dans la microfinance et les solutions métiers.
                </p>
                
                <div className="space-y-4">
                  {sectors.map((sector, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${sector.color}`} />
                      <span className="font-medium text-gray-900 flex-1">{sector.name}</span>
                      <span className="text-gray-500">{sector.count} projets</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl rotate-3 opacity-20" />
                <div className="relative bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 text-white">
                  <div className="text-center mb-8">
                    <div className="text-6xl font-bold mb-2">100+</div>
                    <p className="text-white/90 text-xl">Projets livrés avec succès</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold">5 jours</div>
                      <p className="text-sm text-white/80">Délai moyen</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold">50%</div>
                      <p className="text-sm text-white/80">Économies</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold">24h</div>
                      <p className="text-sm text-white/80">Support réactif</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold">98%</div>
                      <p className="text-sm text-white/80">Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
                <Quote className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Témoignages</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ce que disent nos clients
              </h2>
              <p className="text-xl text-gray-600">
                Leurs mots valent mieux que les nôtres.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-primary/20 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                >
                  {/* Quote background */}
                  <div className="absolute top-0 right-0 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Quote className="w-32 h-32 -mt-4 -mr-4" />
                  </div>

                  <div className="relative">
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-gray-700 mb-6 leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary via-primary-light to-secondary relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
          
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Rejoignez nos clients satisfaits
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Vous aussi, faites confiance à Meriaz pour votre transformation digitale.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105"
                >
                  Démarrer un projet
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Discuter sur WhatsApp
                </a>
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

