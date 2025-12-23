import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link href="/" className="inline-block">
            <img src="/Copie de Fichier 5.png" alt="Logo Meriaz" className="h-8 w-8 object-contain mb-3" />
          </Link>
          <div className="text-slate-700">Votre partenaire technologique</div>
        </div>
        <div className="text-slate-700">
          <div className="font-semibold mb-3">Liens</div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <a href="#services">Services</a>
            <a href="#references">Références</a>
            <a href="https://otolid.io" target="_blank" rel="noopener noreferrer">Otolid</a>
            <a href="https://kazimo.app" target="_blank" rel="noopener noreferrer">Kazimo</a>
            <a href="https://wemonii.com" target="_blank" rel="noopener noreferrer">Wemonii</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="text-slate-700">
          <div className="font-semibold mb-3">Contact</div>
          <div className="text-sm mb-2">WhatsApp: +237 620 275 758</div>
          <a className="btn-primary inline-flex" href="https://wa.me/237620275758" target="_blank" rel="noopener noreferrer">
            Discuter sur WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-slate-600 flex justify-between">
          <div>©nsm2025 Meriaz - Tous droits réservés</div>
          <div>Mentions légales</div>
        </div>
      </div>
    </footer>
  )
}
