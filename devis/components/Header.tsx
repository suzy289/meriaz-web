import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Copie de Fichier 5.png"
            alt="Meriaz — Votre partenaire technologique"
            width={32}
            height={32}
            className="rounded"
            priority
          />
          <span className="font-semibold">Meriaz</span>
        </Link>
        <div className="flex items-center gap-6 text-sm text-slate-700">
          <a href="https://wa.me/237620275758" target="_blank" rel="noopener noreferrer" className="btn-primary">WhatsApp</a>
        </div>
      </div>
    </header>
  )
}
