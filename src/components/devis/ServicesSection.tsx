'use client'

import { useState } from 'react'
import { services } from '@/lib/devis/constants'
import * as Icons from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ServicesSection() {
  const [activeServiceId, setActiveServiceId] = useState(services[0].id)
  const activeService = services.find(s => s.id === activeServiceId) || services[0]

  return (
    <section id="services" className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Nos services pour faire passer votre business au niveau supérieur</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-10">Du simple site vitrine jusqu’aux plateformes métiers complexes, nous construisons vos outils digitaux de A à Z.</p>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side: Navigation List */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            {services.map((service) => {
              const Icon = (Icons as any)[service.icon] || Icons.Sparkles
              const isActive = activeServiceId === service.id
              
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-200 border-2 ${
                    isActive 
                      ? 'bg-primary-50 dark:bg-primary-900/20 border-primary shadow-md' 
                      : 'bg-white dark:bg-gray-800 border-transparent hover:bg-slate-50 dark:hover:bg-gray-700 hover:border-slate-200 dark:hover:border-gray-600'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isActive ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-gray-700 text-slate-500 dark:text-gray-400'}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold ${isActive ? 'text-primary' : 'text-slate-700 dark:text-gray-200'}`}>
                      {service.title}
                    </h3>
                    {service.badge && (
                      <span className="text-[10px] uppercase tracking-wider font-bold text-secondary">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <Icons.ChevronRight className={`h-5 w-5 ${isActive ? 'text-primary' : 'text-slate-300 dark:text-gray-500'}`} />
                </button>
              )
            })}
          </div>

          {/* Right Side: Detailed Content */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-slate-100 dark:border-gray-700 p-6 sm:p-8 lg:p-10 h-full">
              <div key={activeService.id} className="animate-fade-in">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    {(() => {
                      const Icon = (Icons as any)[activeService.icon] || Icons.Sparkles
                      return <Icon className="h-8 w-8 text-primary" />
                    })()}
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{activeService.title}</h3>
                    {activeService.price && (
                      <p className="text-lg font-medium text-secondary mt-1">{activeService.price}</p>
                    )}
                  </div>
                </div>

                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  {activeService.description}
                </p>

                <div className="h-[240px] rounded-xl bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-700 flex items-center justify-center mb-8 relative overflow-hidden group">
                  {activeService.imagePlaceholder.startsWith('/') ? (
                    <Image
                      src={activeService.imagePlaceholder}
                      alt={activeService.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="text-slate-400">600 × 400</div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <ul className="space-y-4">
                    {activeService.features.slice(0, Math.ceil(activeService.features.length / 2)).map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Icons.Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-4">
                    {activeService.features.slice(Math.ceil(activeService.features.length / 2)).map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Icons.Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href={activeService.ctaLink}
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary rounded-full hover:bg-primary-600 transition-colors shadow-lg shadow-primary/25 w-full sm:w-auto"
                >
                  {activeService.ctaText}
                  <Icons.ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
