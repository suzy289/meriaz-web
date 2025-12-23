import { references, testimonials } from '@/lib/devis/constants'

export default function References() {
  return (
    <section id="references" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">Ils nous font déjà confiance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
          {references.map(r => (
            <div key={r.name} className="rounded-xl bg-white dark:bg-gray-800 border dark:border-gray-700 shadow p-6 text-center text-slate-700 dark:text-slate-200 flex items-center justify-center min-h-[100px]">
              {r.name}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map(t => (
            <div key={t.author} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-gray-700">
              <p className="text-slate-900 dark:text-white text-lg mb-4 italic">« {t.quote} »</p>
              <div className="text-slate-600 dark:text-slate-400 font-medium">
                {t.author}, <span className="text-primary">{t.role}</span> – {t.company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
