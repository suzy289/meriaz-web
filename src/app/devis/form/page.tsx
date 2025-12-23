'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { formConfigs, ServiceId } from '@/lib/devis/form-data'
import { redirect } from 'next/navigation'
import FormContent from '@/components/devis/FormContent'

export default function SiteCreationFormPage({
  searchParams,
}: {
  searchParams: { service?: string }
}) {
  const serviceId = (searchParams.service as ServiceId) || 'site-pro'
  const config = formConfigs[serviceId]

  if (!config) {
    redirect('/devis/form?service=site-pro')
  }

  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-gray-50 dark:bg-gray-900">
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FormContent config={config} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
