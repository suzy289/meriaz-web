'use client'

import { Code2, Shield, Zap, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

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

export default function Technologies() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  
  const expertiseAreas = [
    {
      icon: Code2,
      title: t.technologies.expertise1.title,
      description: t.technologies.expertise1.description,
    },
    {
      icon: Shield,
      title: t.technologies.expertise2.title,
      description: t.technologies.expertise2.description,
    },
    {
      icon: Zap,
      title: t.technologies.expertise3.title,
      description: t.technologies.expertise3.description,
    },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  // Calculate positions for technologies around the circle
  const centerX = 50 // percentage
  const centerY = 50 // percentage
  const radius = 45 // percentage - increased for longer uniform lines
  const angleStep = (2 * Math.PI) / technologies.length

  return (
    <section id="technologies" className="section bg-white overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6 border border-gray-200">
            <Sparkles className="w-4 h-4 text-gray-600" />
            <span className="text-gray-700 font-semibold text-sm">{t.technologies.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.technologies.title}
          </h2>
          <p className="text-lg text-gray-600">
            {t.technologies.subtitle}
          </p>
        </div>

        {/* Neural Network Circle with Floating Technologies */}
        <div className="relative mb-16" style={{ minHeight: '700px' }}>
          <div className="relative w-full max-w-5xl mx-auto aspect-square">
            {/* Rotating container for lines and technologies - clockwise */}
            <div className="absolute inset-0 animate-rotate-clockwise">
              {/* SVG Container for connections */}
              <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
                {/* Connection lines from center to technologies - uniform thickness */}
                {mounted && technologies.map((tech, index) => {
                  const angle = index * angleStep - Math.PI / 2
                  const x = centerX + radius * Math.cos(angle)
                  const y = centerY + radius * Math.sin(angle)
                  return (
                    <line
                      key={`line-${index}`}
                      x1={`${centerX}%`}
                      y1={`${centerY}%`}
                      x2={`${x}%`}
                      y2={`${y}%`}
                      stroke={tech.color}
                      strokeWidth="4"
                      strokeOpacity="0.5"
                      strokeLinecap="round"
                    />
                  )
                })}
              </svg>

              {/* Floating Technologies around the circle */}
              {mounted && technologies.map((tech, index) => {
                const angle = index * angleStep - Math.PI / 2
                const x = centerX + radius * Math.cos(angle)
                const y = centerY + radius * Math.sin(angle)
                
                return (
                  <div
                    key={index}
                    className="absolute"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div className="group relative">
                      {/* Connection point glow */}
                      <div
                        className="absolute inset-0 rounded-full blur-md opacity-50"
                        style={{
                          backgroundColor: tech.color,
                        }}
                      />
                    
                    {/* Technology card */}
                    <div
                      className="relative bg-white border-2 rounded-xl p-3 md:p-4 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-110 min-w-[80px] md:min-w-[100px]"
                      style={{ borderColor: tech.color }}
                    >
                      {/* Color accent */}
                      <div
                        className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
                        style={{ backgroundColor: tech.color }}
                      />
                      
                      <div className="mt-1">
                        {/* Icon circle */}
                        <div
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-2 transition-transform duration-300 group-hover:scale-125"
                          style={{ backgroundColor: `${tech.color}20` }}
                        >
                          <div
                            className="w-6 h-6 md:w-8 md:h-8 rounded-full"
                            style={{ backgroundColor: tech.color }}
                          />
                        </div>
                        
                        {/* Name */}
                        <span
                          className="block text-center font-bold text-xs md:text-sm"
                          style={{ color: tech.color }}
                        >
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            </div>

            {/* Central Circle - Neural Core (fixed, doesn't rotate) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                {/* Outer pulsing rings */}
                <div className="absolute inset-0 rounded-full border-4 border-gray-300 animate-ping opacity-20" />
                <div className="absolute inset-0 rounded-full border-4 border-gray-400 animate-ping opacity-30" style={{ animationDelay: '1s' }} />
                
                {/* Main circle - black text on white */}
                <div className="absolute inset-0 rounded-full bg-white border-4 border-gray-900 shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Code2 className="w-12 h-12 md:w-16 md:h-16 text-gray-900 mx-auto mb-2" />
                    <span className="text-gray-900 font-bold text-xs md:text-sm">TECH</span>
                  </div>
                </div>

                {/* Inner accent ring */}
                <div className="absolute inset-2 rounded-full border-2 border-gray-200" />
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Areas - Professional Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={index}
                className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400 rounded-t-2xl" />
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-800 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom message - Professional */}
        <div className="mt-12 p-8 bg-gray-900 rounded-2xl border border-gray-800">
          <p className="text-lg text-white text-center max-w-3xl mx-auto">
            <span className="font-bold text-white">
              {t.technologies.message}
            </span>{' '}
            <span className="text-gray-300">
              {t.technologies.messageSubtitle}
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
