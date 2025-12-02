'use client'

import { Quote, Star } from 'lucide-react'
import Card from '@/components/ui/Card'
import SectionTitle from '@/components/ui/SectionTitle'

const clients = [
  { name: 'Alcofund Microfinance', initials: 'AM' },
  { name: 'Music Microfinance', initials: 'MM' },
  { name: 'Transfer and Exchange Services', initials: 'TE' },
  { name: 'Groupe Reavem', initials: 'GR' },
  { name: 'KNY Groupe', initials: 'KG' },
  { name: 'COGEP', initials: 'CO' },
  { name: 'Africa AI Solutions', initials: 'AA' },
]

const testimonials = [
  {
    quote:
      'Meriaz nous a livré notre site en quelques jours avec une qualité et un souci des détails remarquables.',
    author: 'Dr Christophe',
    role: 'Fondateur',
    company: 'Groupe Reavem',
    rating: 5,
  },
  {
    quote:
      'Meriaz nous a permis de changer de partenaires pour notre core banking et de faire plus de 50% d\'économies pour des délais et une qualité supérieurs.',
    author: 'M. Belias',
    role: 'PCA',
    company: 'Alcofund',
    rating: 5,
  },
]

export default function References() {
  return (
    <section id="references" className="section">
      <div className="container-custom">
        <SectionTitle
          title="Ils nous font déjà confiance"
          subtitle="Meriaz accompagne déjà plusieurs entreprises et institutions dans leurs projets digitaux."
        />

        {/* Client logos grid */}
        <div className="mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl hover:bg-primary-50 transition-all duration-300 cursor-default"
              >
                {/* Logo placeholder - Initials circle */}
                <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mb-3 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <span className="text-xl font-bold text-primary">
                    {client.initials}
                  </span>
                </div>
                <span className="text-xs text-gray-600 text-center font-medium group-hover:text-primary transition-colors">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              variant="hover"
              className="relative border border-gray-100 overflow-hidden"
            >
              {/* Quote icon background */}
              <div className="absolute top-0 right-0 opacity-5">
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
                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white font-bold">
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
            </Card>
          ))}
        </div>

        {/* Trust banner */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary-light rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Rejoignez nos clients satisfaits
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              Plus de 50 entreprises nous font confiance pour leur transformation digitale. Pourquoi pas vous ?
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold">50+</div>
                <div className="text-white/80 text-sm">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">100+</div>
                <div className="text-white/80 text-sm">Projets</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">98%</div>
                <div className="text-white/80 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

