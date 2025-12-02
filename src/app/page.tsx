import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import Hero from '@/components/sections/Hero'
import WhyMeriaz from '@/components/sections/WhyMeriaz'
import Services from '@/components/sections/Services'
import Products from '@/components/sections/Products'
import Portfolio from '@/components/sections/Portfolio'
import AISection from '@/components/sections/AISection'
import References from '@/components/sections/References'
import Technologies from '@/components/sections/Technologies'
import Process from '@/components/sections/Process'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyMeriaz />
        <Services />
        <Products />
        <AISection />
        <Portfolio />
        <References />
        <Technologies />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

