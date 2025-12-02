'use client'

import { MessageCircle, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { whatsappLink } from '@/lib/utils'
import { cn } from '@/lib/utils'

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    // Show button after a delay
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    // Show tooltip after button appears
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true)
    }, 5000)

    // Hide tooltip after some time
    const hideTooltipTimer = setTimeout(() => {
      setShowTooltip(false)
    }, 15000)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(tooltipTimer)
      clearTimeout(hideTooltipTimer)
    }
  }, [])

  const handleClick = () => {
    window.open(whatsappLink, '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-50 transition-all duration-500',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      )}
    >
      {/* Tooltip */}
      <div
        className={cn(
          'absolute bottom-full right-0 mb-3 transition-all duration-300',
          showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        )}
      >
        <div className="bg-white rounded-2xl shadow-xl p-4 max-w-[280px] relative">
          {/* Close button */}
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            aria-label="Fermer"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">
                Besoin d&apos;aide ?
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Discutons de votre projet sur WhatsApp. Réponse rapide garantie !
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45 shadow-lg" />
        </div>
      </div>

      {/* Main button */}
      <button
        onClick={handleClick}
        className="group relative w-16 h-16 bg-accent hover:bg-accent-dark rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Contacter sur WhatsApp"
      >
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-25" />
        
        {/* Icon */}
        <MessageCircle className="w-7 h-7 text-white relative z-10" />

        {/* Notification dot */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-secondary rounded-full border-2 border-white flex items-center justify-center">
          <span className="text-[8px] font-bold text-white">1</span>
        </span>
      </button>

      {/* Label on hover - Desktop only */}
      <div className="hidden lg:block absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg">
          Discuter sur WhatsApp
        </div>
      </div>
    </div>
  )
}

