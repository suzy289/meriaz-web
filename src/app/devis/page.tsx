import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

import ServicesSection from '@/components/devis/ServicesSection'

export default function DevisPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-32">
        <ServicesSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
