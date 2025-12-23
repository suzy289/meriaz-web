import { processSteps } from '@lib/constants'
import * as Icons from 'lucide-react'

export default function ProcessSteps() {
  return (
    <section id="process" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10">Comment se passe un projet avec Meriaz ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {processSteps.map(s => {
            const Icon = (Icons as any)[s.icon] || Icons.Sparkles
            return (
              <div key={s.title} className="card">
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="h-6 w-6 text-primary" />
                  <span className="font-semibold">{s.title}</span>
                </div>
                <p className="text-slate-600">{s.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
