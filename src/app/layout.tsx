import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Meriaz - Votre partenaire technologique pour sites web, ERP, IA & microfinance',
  description: 'Meriaz aide les entrepreneurs, PME et microfinances à créer des sites internet, ERP, SaaS sur mesure et automatisations IA. Opération "Tout le monde, son site internet" à partir de 30 000 XAF.',
  keywords: [
    'création site web Cameroun',
    'site internet pas cher',
    'ERP sur mesure Afrique',
    'core banking microfinance',
    'automatisation IA entreprise',
    'SaaS Cameroun',
    'Meriaz',
    'développement web Yaoundé',
    'agence digitale Cameroun',
  ],
  authors: [{ name: 'Meriaz', url: 'https://meriaz.com' }],
  creator: 'Meriaz',
  publisher: 'Meriaz',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://meriaz.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Meriaz - Votre partenaire technologique',
    description: 'Sites web, ERP, IA et solutions sur mesure pour entrepreneurs africains. À partir de 30 000 XAF.',
    url: 'https://meriaz.com',
    siteName: 'Meriaz',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Meriaz - Votre partenaire technologique',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meriaz - Votre partenaire technologique',
    description: 'Sites web, ERP, IA et solutions sur mesure pour entrepreneurs africains',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: [
      { url: '/1764774647277.png', type: 'image/png' },
      { url: '/1764774647277.png', sizes: '32x32', type: 'image/png' },
      { url: '/1764774647277.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/1764774647277.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/1764774647277.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

