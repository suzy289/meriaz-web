'use client'

import { ExternalLink, Globe, Smartphone, Database } from 'lucide-react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import SectionTitle from '@/components/ui/SectionTitle'

// Projets placeholder - à remplacer par les vrais projets
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
    gradient: 'from-primary to-primary-light',
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
    gradient: 'from-secondary to-secondary-light',
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
    gradient: 'from-accent to-accent-light',
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
    icon: Globe,
    gradient: 'from-purple-500 to-pink-500',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="section bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          title="Nos réalisations récentes"
          subtitle="Découvrez quelques projets que nous avons réalisés pour nos clients. Chaque projet est unique et adapté aux besoins spécifiques de l'entreprise."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <Card
                key={project.id}
                variant="hover"
                className="group overflow-hidden border border-gray-100"
              >
                {/* Project header with gradient */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} rounded-xl mb-6 flex items-center justify-center relative overflow-hidden`}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      }}
                    />
                  </div>
                  
                  {/* Icon */}
                  <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Project type badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="primary" className="bg-white/90 text-gray-900 border-0">
                      {project.type}
                    </Badge>
                  </div>
                </div>

                {/* Project info */}
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{project.client}</p>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-gray-600">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() =>
                      project.link !== '#' &&
                      window.open(project.link, '_blank', 'noopener,noreferrer')
                    }
                    disabled={project.link === '#'}
                    className="w-full justify-center group/btn"
                  >
                    {project.link === '#' ? 'Projet confidentiel' : 'Découvrir le projet'}
                    {project.link !== '#' && (
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    )}
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Vous souhaitez voir plus de réalisations ou discuter de votre projet ?
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discutons de votre projet
          </Button>
        </div>
      </div>
    </section>
  )
}

