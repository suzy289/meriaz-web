export default function CTASection() {
  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4">Prêt à faire décoller votre business avec Meriaz ?</h2>
        <p className="text-slate-600 mb-10">
          Parlez-nous de votre projet. Nous revenons vers vous rapidement avec les meilleures options pour votre budget.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <div className="text-sm text-slate-600 mb-2">WhatsApp Support</div>
            <div className="text-2xl font-bold mb-4">+237 620 275 758</div>
            <a href="https://wa.me/237620275758" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Discuter sur WhatsApp
            </a>
          </div>
          <form className="card space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="border rounded-lg px-4 py-3" placeholder="Nom / Prénom" />
              <input className="border rounded-lg px-4 py-3" placeholder="Entreprise" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="border rounded-lg px-4 py-3" placeholder="Email" />
              <input className="border rounded-lg px-4 py-3" placeholder="WhatsApp" />
            </div>
            <select className="border rounded-lg px-4 py-3">
              <option>Type de projet</option>
              <option>Site internet</option>
              <option>ERP</option>
              <option>SaaS sur mesure</option>
              <option>Microfinance / banque</option>
              <option>Automatisation IA</option>
              <option>Autre</option>
            </select>
            <select className="border rounded-lg px-4 py-3">
              <option>Budget approximatif</option>
              <option>&lt; 100 000 XAF</option>
              <option>100 000 – 500 000 XAF</option>
              <option>&gt; 500 000 XAF</option>
              <option>Je ne sais pas</option>
            </select>
            <textarea className="border rounded-lg px-4 py-3" rows={4} placeholder="Message" />
            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input type="checkbox" />
              <span>Je souhaite être contacté par WhatsApp</span>
            </label>
            <button type="submit" className="btn-primary">Envoyer ma demande</button>
          </form>
        </div>
      </div>
    </section>
  )
}
