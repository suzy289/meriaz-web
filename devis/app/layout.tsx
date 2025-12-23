import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Meriaz - Votre partenaire technologique',
  description:
    'Sites web, ERP, SaaS sur mesure et automatisations IA. Opération "Tout le monde, son site internet" à partir de 30 000 XAF.',
  icons: {
    icon: '/images/services/ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
