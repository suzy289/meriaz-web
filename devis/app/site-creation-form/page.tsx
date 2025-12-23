import Header from '@components/Header'
import Footer from '@components/Footer'
import { formConfigs, ServiceId } from '@lib/form-data'
import { redirect } from 'next/navigation'
import FormContent from './FormContent'

export default function SiteCreationFormPage({
  searchParams,
}: {
  searchParams: { service?: string }
}) {
  const serviceId = (searchParams.service as ServiceId) || 'site-pro'
  const config = formConfigs[serviceId]

  if (!config) {
    redirect('/site-creation-form?service=site-pro')
  }

  return (
    <main>
      <Header />
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FormContent config={config} />
        </div>
      </section>
      <Footer />
    </main>
  )
}
