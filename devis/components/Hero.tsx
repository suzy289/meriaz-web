import { hero, metrics } from '@lib/constants'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-40 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/hero/corporate-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Blue Overlays for depth and readability */}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        
        {/* Pill */}
        <div className="inline-block px-5 py-2 rounded-full bg-blue-800/40 text-blue-100 font-medium text-sm mb-8 border border-blue-400/30 backdrop-blur-md shadow-lg animate-fade-in-up">
          🚀 Partenaire technologique de confiance
        </div>
        
        {/* Title */}
        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-4xl drop-shadow-sm">
          {hero.title}
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
          {hero.subtitle}
        </p>

        {/* Bullets */}
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4 text-left max-w-3xl mx-auto mb-12 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
           {hero.bullets.map((b) => (
            <div key={b} className="flex items-start gap-3 text-blue-50">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0 mt-0.5 shadow-lg shadow-green-900/20">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span className="text-sm md:text-base font-medium">{b}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto mb-16">
          <a href={hero.primaryCta.href} className="btn-primary px-8 py-4 text-lg shadow-xl shadow-blue-950/50 hover:shadow-2xl hover:shadow-blue-900/50 transition-all transform hover:-translate-y-1 bg-white text-blue-900 hover:bg-blue-50 border-none font-bold">
            {hero.primaryCta.text}
          </a>
          <a href={hero.secondaryCta.href} target="_blank" rel="noopener noreferrer" className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            {hero.secondaryCta.text}
          </a>
        </div>

        {/* Floating Metrics - Transformed to a glassmorphic bar */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 py-8 px-4 shadow-2xl overflow-hidden relative group hover:bg-white/15 transition-all duration-500">
             {/* Scrolling container */}
            <div className="relative w-full overflow-hidden mask-linear-fade">
              <div className="flex animate-scroll w-max">
                {/* Group 1 */}
                <div className="flex">
                  {[...metrics, ...metrics, ...metrics, ...metrics].map((m, i) => (
                    <div key={`m1-${i}`} className="w-48 sm:w-64 text-center px-4 border-r border-white/10 flex-shrink-0">
                      <div className="text-3xl sm:text-4xl font-black text-white mb-2 drop-shadow-md">
                        {m.value}
                      </div>
                      <div className="text-xs sm:text-sm text-blue-200 font-medium uppercase tracking-wider">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Group 2 */}
                <div className="flex">
                  {[...metrics, ...metrics, ...metrics, ...metrics].map((m, i) => (
                    <div key={`m2-${i}`} className="w-48 sm:w-64 text-center px-4 border-r border-white/10 flex-shrink-0">
                      <div className="text-3xl sm:text-4xl font-black text-white mb-2 drop-shadow-md">
                        {m.value}
                      </div>
                      <div className="text-xs sm:text-sm text-blue-200 font-medium uppercase tracking-wider">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Promo Banner */}
        <div className="mt-8 text-center relative z-30">
           <div className="inline-flex items-center gap-3 bg-blue-950/80 backdrop-blur-md text-white px-6 py-3 rounded-full shadow-lg border border-blue-500/30 hover:scale-105 transition-transform cursor-pointer">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="font-medium text-sm sm:text-base">Opération « Tout le monde, son site internet » : <span className="text-green-400 font-bold">dès 30 000 XAF</span></span>
          </div>
        </div>

      </div>
      
      {/* Bottom Curve Separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg className="relative block w-full h-[60px] lg:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  )
}
