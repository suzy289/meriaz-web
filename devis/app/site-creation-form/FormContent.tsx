'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { formConfigs, ServiceId } from '@lib/form-data'

type ServiceConfig = typeof formConfigs[keyof typeof formConfigs]

function SimpleMarkdown({ content }: { content: string }) {
  if (!content) return null
  return (
    <div className="space-y-4 text-slate-700 leading-relaxed">
      {content.split('\n').map((line, i) => {
        const trimmed = line.trim()
        if (!trimmed) return <div key={i} className="h-2" /> // spacer
        
        if (trimmed.startsWith('### ')) {
          return <h3 key={i} className="text-xl font-bold text-slate-900 mt-6 mb-2">{trimmed.replace('### ', '')}</h3>
        }
        if (trimmed.startsWith('**') && trimmed.endsWith('**') && !trimmed.includes(' ')) {
           // Handle bold line? rare case
        }

        // Handle list items
        if (trimmed.startsWith('- ')) {
          const text = trimmed.replace('- ', '')
          const parts = text.split(/(\*\*.*?\*\*)/g)
          return (
            <li key={i} className="ml-4 list-disc">
              {parts.map((part, j) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return <strong key={j}>{part.slice(2, -2)}</strong>
                }
                return part
              })}
            </li>
          )
        }

        // Paragraph
        const parts = trimmed.split(/(\*\*.*?\*\*)/g)
          return (
            <p key={i}>
              {parts.map((part, j) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return <strong key={j}>{part.slice(2, -2)}</strong>
                }
                return part
              })}
            </p>
          )
      })}
    </div>
  )
}

export default function FormContent({ config }: { config: ServiceConfig }) {
  const [activeTab, setActiveTab] = useState('form')
  const [step, setStep] = useState(1)
  const formRef = useRef<HTMLFormElement>(null)

  const configTabs = (config as any).tabs as { id: string; label: string; content: string }[] | undefined

  useEffect(() => {
    if (configTabs && configTabs.length > 0) {
      setActiveTab(configTabs[0].id)
    } else {
      setActiveTab('form')
    }
  }, [config])

  const handleNextStep = () => {
    setStep(prev => Math.min(prev + 1, 10))
    window.scrollTo(0, 0)
  }

  const handlePrevStep = () => {
    setStep(prev => Math.max(prev - 1, 1))
    window.scrollTo(0, 0)
  }

  const tabs = configTabs ? [...configTabs, { id: 'form', label: 'Remplir le formulaire' }] : []
  const hasTabs = tabs.length > 0

  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{config.title}</h1>
        <p className="text-slate-600">
          {config.description}
        </p>
      </div>

      {hasTabs && (
        <div className="flex flex-wrap gap-2 border-b border-slate-200 mb-8">
          {tabs.map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-medium text-sm rounded-t-lg transition-colors ${
                activeTab === tab.id 
                  ? 'bg-white text-primary border-t border-x border-slate-200 -mb-px' 
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {(!hasTabs || activeTab === 'form') ? (
        <form ref={formRef} className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            {/* Simple Step Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-sm font-medium text-slate-500 mb-2">
                <span>Étape {step} sur 10</span>
                <span>{Math.round((step / 10) * 100)}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${(step / 10) * 100}%` }}
                />
              </div>
            </div>

            {/* Section 1: Qui êtes-vous ? */}
            {step === 1 && (
              <section className="card space-y-6 animate-fade-in">
                <h2 className="text-2xl font-semibold">1. Qui êtes‑vous ?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">Nom / Prénom *</label>
                    <input id="name" name="name" required className="w-full border rounded-lg px-4 py-3" placeholder="Ex. Jeanne Mbarga" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="company">Entreprise</label>
                    <input id="company" name="company" className="w-full border rounded-lg px-4 py-3" placeholder="Ex. Meriaz SARL" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">Email *</label>
                    <input id="email" name="email" type="email" required className="w-full border rounded-lg px-4 py-3" placeholder="Ex. jeanne@entreprise.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="whatsapp">WhatsApp *</label>
                    <input id="whatsapp" name="whatsapp" required className="w-full border rounded-lg px-4 py-3" placeholder="+237 620 275 758" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="location">Ville / Pays</label>
                    <input id="location" name="location" className="w-full border rounded-lg px-4 py-3" placeholder="Ex. Douala, Cameroun" />
                  </div>
                </div>
              </section>
            )}

            {/* Section 2: Votre activité */}
            {step === 2 && (
              <section className="card space-y-6 animate-fade-in">
                <h2 className="text-2xl font-semibold">2. Votre activité</h2>
                
                {config.projectTypes && (
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="projectType">{config.projectTypeLabel}</label>
                    <select id="projectType" name="projectType" className="w-full border rounded-lg px-4 py-3">
                      <option value="">Sélectionnez le type de projet</option>
                      {config.projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="sector">{config.sections.activity.label}</label>
                    <select id="sector" name="sector" required className="w-full border rounded-lg px-4 py-3">
                      <option value="">Sélectionnez</option>
                      {config.sections.activity.sectors.map((sector) => (
                        <option key={sector}>{sector}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="activity">Décrivez votre activité</label>
                  <textarea id="activity" name="activity" rows={4} className="w-full border rounded-lg px-4 py-3" placeholder="Ex. Nous vendons des produits de beauté et proposons des conseils personnalisés." />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="customers">Clients types</label>
                  <input id="customers" name="customers" className="w-full border rounded-lg px-4 py-3" placeholder="Ex. Particuliers, PME, institutions" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="uniques">Ce qui vous différencie</label>
                  <textarea id="uniques" name="uniques" rows={3} className="w-full border rounded-lg px-4 py-3" placeholder="Ex. Service ultra‑rapide, prix accessibles, accompagnement personnalisé" />
                </div>
              </section>
            )}

            {/* Section 3: Ce que vous avez déjà */}
            {step === 3 && (
              <section className="card space-y-6 animate-fade-in">
                <h2 className="text-2xl font-semibold">3. Ce que vous avez déjà</h2>
                <div className="space-y-3">
                  <label className="block text-lg font-medium text-slate-900">Logo & identité visuelle</label>
                  <div className="space-y-2">
                    {[
                      "J'ai un logo que je souhaite garder",
                      "J'ai un logo mais je suis ouvert à une amélioration",
                      "Je n'ai pas de logo, j'aimerais que vous en créiez un",
                      "Je souhaite également une identité visuelle complète (couleurs, typos…)"
                    ].map((option, i) => (
                      <label key={i} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-slate-50 cursor-pointer">
                        <input type="radio" name="logo_status" value={option} className="h-5 w-5 text-primary border-slate-300 focus:ring-primary" />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="photos">Photos</label>
                    <input id="photos" name="photos" className="w-full border rounded-lg px-4 py-3" placeholder="Lien dossier Drive/Dropbox ou à fournir" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="texts">Textes existants</label>
                  <textarea id="texts" name="texts" rows={3} className="w-full border rounded-lg px-4 py-3" placeholder={config.sections.existing.textsPlaceholder} />
                </div>
              </section>
            )}

            {/* Section 4: Objectifs du projet */}
            {step === 4 && (
              <section className="card space-y-6 animate-fade-in">
                <h2 className="text-2xl font-semibold">4. Objectifs du projet</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="mainGoal">{config.sections.goals.label}</label>
                    <select id="mainGoal" name="mainGoal" required className="w-full border rounded-lg px-4 py-3">
                      <option value="">Sélectionnez</option>
                      {config.sections.goals.mainOptions.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="cta">Appels à l’action souhaités</label>
                    <input id="cta" name="cta" className="w-full border rounded-lg px-4 py-3" placeholder={config.sections.goals.ctaPlaceholder} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="secondaryGoals">Objectifs secondaires</label>
                  <input id="secondaryGoals" name="secondaryGoals" className="w-full border rounded-lg px-4 py-3" placeholder="Ex. Newsletter, recrutement, partenariats" />
                </div>
              </section>
            )}

            {/* Section 5: Contenu & fonctionnalités */}
            {step === 5 && (
              <section className="card space-y-6 animate-fade-in">
                <h2 className="text-2xl font-semibold">5. Contenu & fonctionnalités</h2>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="pages">{config.sections.features.pagesLabel}</label>
                  <input id="pages" name="pages" className="w-full border rounded-lg px-4 py-3" placeholder={config.sections.features.pagesPlaceholder} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="features">{config.sections.features.featuresLabel}</label>
                  <input id="features" name="features" className="w-full border rounded-lg px-4 py-3" placeholder={config.sections.features.featuresPlaceholder} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="languages">Multilingue</label>
                    <select id="languages" name="languages" className="w-full border rounded-lg px-4 py-3">
                      <option>Français uniquement</option>
                      <option>Français + Anglais</option>
                      <option>Autre</option>
                    </select>
                  </div>
                </div>
              </section>
            )}

            {/* Section 6: Contenu fourni */}
            {step === 6 && (
              <section className="card space-y-6 animate-fade-in">
                <h2 className="text-2xl font-semibold">6. Contenu fourni</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="provider">Qui fournit le contenu ?</label>
                    <select id="provider" name="provider" className="w-full border rounded-lg px-4 py-3">
                      <option>Je fournis tout</option>
                      <option>Je fournis une partie</option>
                      <option>Je souhaite que Meriaz crée tout</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="resources">Disponibilité des ressources</label>
                    <input id="resources" name="resources" className="w-full border rounded-lg px-4 py-3" placeholder="Ex. Photos en 1 semaine, textes prêts, logo à créer" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="references">Liens de référence</label>
                  <textarea id="references" name="references" rows={3} className="w-full border rounded-lg px-4 py-3" placeholder="Ex. Sites que vous aimez, concurrents, inspirations" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="examples">Exemples souhaités</label>
                  <textarea id="examples" name="examples" rows={3} className="w-full border rounded-lg px-4 py-3" placeholder="Ex. meriaz.com, site‑exemple.com" />
                </div>
              </section>
            )}

            {/* Section 7: Nom de domaine & hébergement */}
            {step === 7 && (
              <section className="card space-y-6 animate-fade-in">
                <h2 className="text-2xl font-semibold">7. Nom de domaine & hébergement</h2>
                <p className="text-slate-600 italic">{config.sections.hosting.intro}</p>
                
                <div className="space-y-4">
                  <label className="block text-lg font-medium text-slate-900">Avez-vous déjà un nom de domaine ?</label>
                  <div className="space-y-2">
                     <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-slate-50 cursor-pointer">
                        <input type="radio" name="has_domain" value="yes" className="h-5 w-5 text-primary" />
                        <span>Oui (préciser ci-dessous)</span>
                     </label>
                     <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-slate-50 cursor-pointer">
                        <input type="radio" name="has_domain" value="no" className="h-5 w-5 text-primary" />
                        <span>Non, pas encore</span>
                     </label>
                  </div>
                  <input name="domain_name" className="w-full border rounded-lg px-4 py-3 mt-2" placeholder="Si oui, quel est votre nom de domaine ? Si non, une idée ?" />
                </div>

                <div className="space-y-3">
                   <label className="block text-lg font-medium text-slate-900">Souhaitez-vous que nous gérions pour vous :</label>
                   <div className="space-y-2">
                      {config.sections.hosting.options.map((opt, i) => (
                        <label key={i} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-slate-50 cursor-pointer">
                          <input type="checkbox" name="hosting_services" value={opt} className="h-5 w-5 text-primary rounded" />
                          <span>{opt}</span>
                        </label>
                      ))}
                   </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-lg font-medium text-slate-900">{config.sections.hosting.quantityLabel}</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                     {config.sections.hosting.quantityOptions.map((opt, i) => (
                        <label key={i} className="flex items-center gap-2 p-3 border rounded-lg hover:bg-slate-50 cursor-pointer">
                          <input type="radio" name="quantity_metric" value={opt} className="h-5 w-5 text-primary" />
                          <span>{opt}</span>
                        </label>
                     ))}
                  </div>
                </div>
              </section>
            )}

            {/* Section 8: Budget */}
            {step === 8 && (
              <section className="card space-y-6 animate-fade-in">
                <h2 className="text-2xl font-semibold">8. Budget</h2>
                <p className="text-slate-600 italic">« Pour vous proposer une solution adaptée, nous avons besoin de connaître votre fourchette de budget actuelle. Cela ne sert pas à "gonfler" les prix mais à proposer un projet réaliste et éventuellement une montée en gamme progressive. »</p>
                
                <div className="space-y-3">
                   <label className="block text-lg font-medium text-slate-900">Quelle fourchette de budget envisagez-vous ?</label>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {config.sections.budget.options.map((opt, i) => (
                        <label key={i} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-slate-50 cursor-pointer">
                          <input type="radio" name="budget_range" value={opt} className="h-5 w-5 text-primary" />
                          <span>{opt}</span>
                        </label>
                      ))}
                   </div>
                </div>

                <div className="space-y-3">
                   <label className="block text-lg font-medium text-slate-900">Êtes-vous ouvert à une réalisation en plusieurs étapes ?</label>
                   <div className="space-y-2">
                      <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-slate-50 cursor-pointer">
                         <input type="radio" name="phasing" value="progressive" className="h-5 w-5 text-primary" />
                         <span>Oui, je préfère construire progressivement</span>
                      </label>
                      <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-slate-50 cursor-pointer">
                         <input type="radio" name="phasing" value="all_at_once" className="h-5 w-5 text-primary" />
                         <span>Non, je veux tout dès le départ</span>
                      </label>
                   </div>
                </div>

                <div className="space-y-3">
                   <label className="block text-lg font-medium text-slate-900">Seriez-vous intéressé par :</label>
                   <div className="space-y-2">
                      {['Un paiement en plusieurs fois', 'Des packs avec options (maintenance, mise à jour, accompagnement marketing…)'].map((opt, i) => (
                        <label key={i} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-slate-50 cursor-pointer">
                          <input type="checkbox" name="payment_options" value={opt} className="h-5 w-5 text-primary rounded" />
                          <span>{opt}</span>
                        </label>
                      ))}
                   </div>
                </div>
              </section>
            )}

            {/* Section 9: Délais */}
            {step === 9 && (
              <section className="card space-y-6 animate-fade-in">
                <h2 className="text-2xl font-semibold">9. Délais</h2>
                <p className="text-slate-600 italic">« Les délais dépendent de la complexité du projet et de la rapidité de validation. Donnez-nous une idée de votre calendrier. »</p>
                
                <div className="space-y-3">
                   <label className="block text-lg font-medium text-slate-900">Pour quand souhaiteriez-vous que votre projet soit en ligne ?</label>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {config.sections.timeline.options.map((opt, i) => (
                        <label key={i} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-slate-50 cursor-pointer">
                          <input type="radio" name="timeline" value={opt} className="h-5 w-5 text-primary" />
                          <span>{opt}</span>
                        </label>
                      ))}
                   </div>
                </div>

                <div className="space-y-3">
                   <label className="block text-lg font-medium text-slate-900">Disponibilité pour validation / contenu</label>
                   <div className="space-y-2">
                      {config.sections.timeline.availabilityOptions && config.sections.timeline.availabilityOptions.map((opt, i) => (
                        <label key={i} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-slate-50 cursor-pointer">
                          <input type="radio" name="availability" value={opt} className="h-5 w-5 text-primary" />
                          <span>{opt}</span>
                        </label>
                      ))}
                      {!config.sections.timeline.availabilityOptions && ['Oui, très disponible', 'Moyennement disponible', 'Peu disponible (je préfère que vous gériez un maximum)'].map((opt, i) => (
                        <label key={i} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-slate-50 cursor-pointer">
                          <input type="radio" name="availability" value={opt} className="h-5 w-5 text-primary" />
                          <span>{opt}</span>
                        </label>
                      ))}
                   </div>
                </div>
              </section>
            )}

            {/* Section 10: Accompagnement futur */}
            {step === 10 && (
              <section className="card space-y-6 animate-fade-in">
                <h2 className="text-2xl font-semibold">10. Accompagnement futur</h2>
                <p className="text-slate-600 italic">« Un projet performant, ce n'est pas seulement sa création : il faut aussi l'actualiser, le sécuriser et le faire connaître. »</p>
                
                <div className="space-y-3">
                   <label className="block text-lg font-medium text-slate-900">Après la mise en ligne, seriez-vous intéressé par :</label>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {config.sections.support.options.map((opt, i) => (
                        <label key={i} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-slate-50 cursor-pointer">
                          <input type="checkbox" name="support_options" value={opt} className="h-5 w-5 text-primary rounded" />
                          <span>{opt}</span>
                        </label>
                      ))}
                   </div>
                </div>
              </section>
            )}

            {/* Navigation Buttons */}
            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Link href="/" className="px-6 py-3 rounded-full border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Accueil
                </Link>
                {step > 1 && (
                  <button 
                    type="button"
                    onClick={handlePrevStep} 
                    className="px-6 py-3 rounded-full border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Précédent
                  </button>
                )}
              </div>

              {step < 10 ? (
                <button 
                  type="button" 
                  onClick={(e) => {
                    e.preventDefault()
                    handleNextStep()
                  }}
                  className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  Suivant
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              ) : (
                <button type="submit" className="btn-primary w-full sm:w-auto">Envoyer mon cahier de charges</button>
              )}
            </div>
        </form>
      ) : (
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          <SimpleMarkdown content={configTabs?.find(t => t.id === activeTab)?.content || ''} />
          <div className="mt-8 pt-4 border-t border-slate-100">
            <button 
              onClick={() => setActiveTab('form')}
              className="btn-primary w-full sm:w-auto"
            >
              Remplir le formulaire
            </button>
          </div>
        </div>
      )}
    </>
  )
}
