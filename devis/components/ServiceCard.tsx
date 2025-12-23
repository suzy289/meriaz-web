import { Service } from '@lib/types'
import * as Icons from 'lucide-react'

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = (Icons as any)[service.icon] || Icons.Sparkles
  return (
    <div className={service.isSpecial ? 'card-star' : 'card'}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Icon className="h-6 w-6 text-primary" />
          {service.badge && <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full">{service.badge}</span>}
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
      <p className="text-slate-600 mb-6">{service.description}</p>
      <div className="h-[240px] rounded-xl bg-surface border flex items-center justify-center mb-6">
        <div className="text-slate-400">600×400</div>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
        {service.features.map(f => (
          <li key={f} className="flex items-center gap-2">
            <Icons.Check className="h-4 w-4 text-success" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      {service.price && <div className="text-slate-900 font-semibold mb-4">{service.price}</div>}
      <a href={service.ctaLink} className="btn-primary">{service.ctaText}</a>
    </div>
  )
}
