import { references, testimonials } from '@lib/constants'

export default function References() {
  return (
    <section id="references" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10">Ils nous font déjà confiance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
          {references.map(r => (
            <div key={r.name} className="rounded-xl bg-white border shadow p-6 text-center text-slate-700">
              {r.name}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map(t => (
            <div key={t.author} className="card">
              <p className="text-slate-900 text-lg mb-4">« {t.quote} »</p>
              <div className="text-slate-600">{t.author}, {t.role} – {t.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
