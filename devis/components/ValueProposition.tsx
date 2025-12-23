import { valueProps } from '@lib/constants'
import * as Icons from 'lucide-react'

export default function ValueProposition() {
  return (
    <section id="valeurs" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Pourquoi choisir Meriaz comme partenaire technologique ?
          </h2>
          <p className="text-lg text-slate-600">
            Nous ne sommes pas juste des développeurs. Nous sommes vos partenaires de croissance, engagés dans votre réussite sur le long terme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {valueProps.map((v, index) => {
            const Icon = (Icons as any)[v.icon] || Icons.Sparkles
            return (
              <div 
                key={v.title} 
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1 flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center group-hover:bg-primary group-hover:rotate-3 transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {v.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {v.text}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
