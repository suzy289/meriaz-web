'use client'

import { Code2, Shield, Zap } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'

const technologies = [
  { name: 'PHP', color: '#777BB4' },
  { name: 'Laravel', color: '#FF2D20' },
  { name: 'Next.js', color: '#000000' },
  { name: 'React', color: '#61DAFB' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Python', color: '#3776AB' },
  { name: 'Java', color: '#ED8B00' },
  { name: 'Node.js', color: '#339933' },
  { name: 'PostgreSQL', color: '#4169E1' },
  { name: 'MySQL', color: '#4479A1' },
  { name: 'Tailwind CSS', color: '#06B6D4' },
]

const expertiseAreas = [
  {
    icon: Code2,
    title: 'Développement sur mesure',
    description: 'Applications web et mobiles adaptées à vos besoins métier',
  },
  {
    icon: Shield,
    title: 'Sécurité & Conformité',
    description: 'Solutions conformes aux normes COBAC et standards internationaux',
  },
  {
    icon: Zap,
    title: 'Performance & Scalabilité',
    description: 'Architecture cloud moderne et évolutive selon vos besoins',
  },
]

export default function Technologies() {
  return (
    <section id="technologies" className="section bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          title="Une équipe technique solide, des technologies modernes"
          subtitle="Nous utilisons des technologies modernes, robustes et adaptées aux besoins des entreprises africaines et internationales."
        />

        {/* Technologies grid */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              {/* Color indicator */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl transition-all duration-300 group-hover:w-full group-hover:opacity-10"
                style={{ backgroundColor: tech.color }}
              />
              <span className="relative font-medium text-gray-700 group-hover:text-gray-900">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Expertise areas */}
        <div className="grid md:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            )
          })}
        </div>

        {/* Bottom message */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            <span className="font-semibold text-primary">
              Nous choisissons les bons outils pour votre projet, pas l&apos;inverse.
            </span>{' '}
            L&apos;objectif : des solutions performantes, sécurisées et évolutives.
          </p>
        </div>
      </div>
    </section>
  )
}

