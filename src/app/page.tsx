import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Products from '@/components/sections/Products'
import Portfolio from '@/components/sections/Portfolio'
import AISection from '@/components/sections/AISection'
import Technologies from '@/components/sections/Technologies'
import Process from '@/components/sections/Process'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Products />
        <AISection />
        <Portfolio />
        <Technologies />
        <Process />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
