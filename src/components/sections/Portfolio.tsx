'use client'

import { ExternalLink, Globe, Smartphone, Database, Building2, ChevronLeft, ChevronRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { useState } from 'react'

const projects = [
  {
    id: '1',
    name: 'Alcofund Microfinance',
    client: 'Alcofund',
    type: 'Core Banking',
    description:
      'Plateforme de gestion complète pour institution de microfinance avec gestion des comptes, prêts et épargnes.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
    link: '#',
    icon: Database,
    iconColor: 'bg-blue-500',
    iconHover: 'bg-blue-600',
    borderColor: 'border-blue-200',
    borderHover: 'hover:border-blue-300',
    headerBg: 'bg-blue-50',
    accentColor: 'text-blue-600',
  },
  {
    id: '2',
    name: 'Music Microfinance',
    client: 'Music Microfinance',
    type: 'Site Vitrine + Dashboard',
    description:
      'Site web institutionnel moderne avec tableau de bord administratif pour la gestion du contenu.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
    link: '#',
    icon: Globe,
    iconColor: 'bg-emerald-500',
    iconHover: 'bg-emerald-600',
    borderColor: 'border-emerald-200',
    borderHover: 'hover:border-emerald-300',
    headerBg: 'bg-emerald-50',
    accentColor: 'text-emerald-600',
  },
  {
    id: '3',
    name: 'Transfer & Exchange',
    client: 'Transfer and Exchange Services',
    type: 'Application Web',
    description:
      'Application de gestion des transferts d\'argent et services de change avec intégration Mobile Money.',
    technologies: ['Laravel', 'React', 'API REST'],
    link: '#',
    icon: Smartphone,
    iconColor: 'bg-orange-500',
    iconHover: 'bg-orange-600',
    borderColor: 'border-orange-200',
    borderHover: 'hover:border-orange-300',
    headerBg: 'bg-orange-50',
    accentColor: 'text-orange-600',
  },
  {
    id: '4',
    name: 'Groupe Reavem',
    client: 'Groupe Reavem',
    type: 'Site Vitrine',
    description:
      'Site web corporate présentant les activités et services du groupe avec design moderne et responsive.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    link: '#',
    icon: Building2,
    iconColor: 'bg-purple-500',
    iconHover: 'bg-purple-600',
    borderColor: 'border-purple-200',
    borderHover: 'hover:border-purple-300',
    headerBg: 'bg-purple-50',
    accentColor: 'text-purple-600',
  },
]

// Split projects into two groups
const firstRow = [projects[0], projects[1]]
const secondRow = [projects[2], projects[3]]

// Duplicate projects for infinite scroll effect
const firstRowDuplicated = [...firstRow, ...firstRow, ...firstRow]
const secondRowDuplicated = [...secondRow, ...secondRow, ...secondRow]

export default function Portfolio() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }
  
  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }
  
  const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
    const Icon = project.icon
    return (
      <div
        className={`group bg-white border-2 ${project.borderColor} rounded-xl overflow-hidden ${project.borderHover} hover:shadow-lg transition-all duration-300 flex-shrink-0 w-full md:w-[450px] lg:w-[500px]`}
      >
        {/* Project Header */}
        <div className={`${project.headerBg} border-b ${project.borderColor} p-6`}>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 ${project.iconColor} ${project.iconHover} rounded-lg flex items-center justify-center transition-colors shadow-md`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className={`text-xs font-semibold ${project.accentColor} uppercase tracking-wider`}>
                  {project.type}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-1 group-hover:text-gray-700 transition-colors">
                  {project.name}
                </h3>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 font-medium">{project.client}</p>
        </div>

        {/* Project Content */}
        <div className="p-6 space-y-6">
          <p className="text-gray-700 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div>
            <p className={`text-xs font-semibold ${project.accentColor} uppercase tracking-wider mb-3`}>
              {t.portfolio.technologies}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className={`px-3 py-1.5 ${project.headerBg} ${project.accentColor} text-sm font-medium rounded border ${project.borderColor}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 border-t border-gray-100">
            {project.link !== '#' ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 ${project.accentColor} font-semibold hover:opacity-80 transition-colors group/link`}
              >
{t.portfolio.discover}
                <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            ) : (
              <span className="text-gray-400 font-medium text-sm">
{t.portfolio.confidential}
              </span>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="portfolio" className="section bg-white overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full mb-6 border border-orange-100">
            <span className="text-orange-600 font-semibold text-sm">{t.portfolio.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.portfolio.title}
          </h2>
          <p className="text-lg text-gray-600">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Mobile: Carousel with arrows */}
        <div className="md:hidden mb-16">
          <div className="relative">
            {/* Project Card */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={project.id} className="w-full flex-shrink-0 px-2">
                    <ProjectCard project={project} index={index} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 z-10 hover:scale-110"
              aria-label="Projet précédent"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 z-10 hover:scale-110"
              aria-label="Projet suivant"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    currentIndex === index ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Aller au projet ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Scrolling Rows */}
        <div className="hidden md:block space-y-8 mb-16">
          {/* First Row - Scroll Left to Right */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-scroll-left">
              {firstRowDuplicated.map((project, index) => (
                <ProjectCard key={`row1-${index}`} project={project} index={index} />
              ))}
            </div>
          </div>

          {/* Second Row - Scroll Right to Left */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-scroll-right">
              {secondRowDuplicated.map((project, index) => (
                <ProjectCard key={`row2-${index}`} project={project} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-6">
            {t.portfolio.ctaSubtitle}
          </p>
          <Link href="/devis">
            <Button
              variant="primary"
              size="lg"
            >
              {t.portfolio.cta}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
