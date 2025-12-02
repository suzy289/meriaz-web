'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Menu, 
  X, 
  Briefcase, 
  Package, 
  FolderOpen, 
  ChevronDown
} from 'lucide-react'
import { cn, scrollToSection } from '@/lib/utils'
import Button from '@/components/ui/Button'

const navItems = [
  { label: 'Services', labelEn: 'Services', href: 'services', isPage: false, icon: Briefcase },
  { label: 'Produits', labelEn: 'Products', href: 'products', isPage: false, icon: Package },
  { label: 'Réalisations', labelEn: 'Portfolio', href: 'portfolio', isPage: false, icon: FolderOpen },
]

// Composant drapeau français
const FrenchFlag = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#fff" d="M0 0h640v480H0z"/>
      <path fill="#002654" d="M0 0h213.3v480H0z"/>
      <path fill="#ce1126" d="M426.7 0H640v480H426.7z"/>
    </g>
  </svg>
)

// Composant drapeau britannique
const BritishFlag = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
    <path fill="#012169" d="M0 0h640v480H0z"/>
    <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
    <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
    <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
    <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
  </svg>
)

const languages = [
  { code: 'fr', label: 'FR', fullLabel: 'Français', Flag: FrenchFlag },
  { code: 'en', label: 'EN', fullLabel: 'English', Flag: BritishFlag },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const [isMobileLangMenuOpen, setIsMobileLangMenuOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('fr')
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const mobileLangRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close language menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      setIsLangMenuOpen(false)
      if (mobileLangRef.current && !mobileLangRef.current.contains(e.target as Node)) {
        setIsMobileLangMenuOpen(false)
      }
    }
    
    if (isLangMenuOpen || isMobileLangMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isLangMenuOpen, isMobileLangMenuOpen])

  const handleNavClick = (item: typeof navItems[0]) => {
    if (isHomePage) {
      scrollToSection(item.href)
    } else {
      window.location.href = `/#${item.href}`
    }
    setIsMobileMenuOpen(false)
  }

  const handleLangChange = (langCode: string) => {
    setCurrentLang(langCode)
    setIsLangMenuOpen(false)
    setIsMobileLangMenuOpen(false)
  }

  const getLabel = (item: typeof navItems[0]) => {
    return currentLang === 'en' ? item.labelEn : item.label
  }

  const currentLanguage = languages.find(l => l.code === currentLang)
  const CurrentFlag = currentLanguage?.Flag

  // On non-home pages, header should always have white background
  const showWhiteBg = isScrolled || !isHomePage

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        showWhiteBg
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group flex-shrink-0"
          >
            <Image
              src="/Copie de Fichier 6 (1).png"
              alt="Meriaz"
              width={140}
              height={45}
              className={cn(
                "h-10 w-auto transition-all duration-300",
                showWhiteBg ? "brightness-0" : "brightness-100"
              )}
              priority
            />
          </Link>

          {/* Desktop Navigation - Centré avec espace */}
          <div className="hidden lg:flex items-center justify-end flex-1 ml-16">
            <div className="flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item)}
                    className={cn(
                      'px-4 py-2 rounded-lg font-medium transition-all duration-300 relative flex items-center gap-2',
                      showWhiteBg
                        ? 'text-gray-700 hover:text-primary hover:bg-gray-100'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {getLabel(item)}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right side: Language + CTA */}
          <div className="hidden lg:flex items-center gap-4 ml-8">
            {/* Language Selector Desktop */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsLangMenuOpen(!isLangMenuOpen)
                }}
                className={cn(
                  'flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-300',
                  showWhiteBg
                    ? 'text-gray-700 hover:text-primary hover:bg-gray-100'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                )}
              >
                {CurrentFlag && (
                  <span className="w-6 h-4 rounded overflow-hidden shadow-sm border border-gray-200/50">
                    <CurrentFlag className="w-full h-full object-cover" />
                  </span>
                )}
                <span>{currentLanguage?.label}</span>
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  isLangMenuOpen && "rotate-180"
                )} />
              </button>

              {/* Language Dropdown Desktop */}
              <div
                className={cn(
                  'absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 min-w-[160px]',
                  isLangMenuOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                )}
              >
                {languages.map((lang) => {
                  const LangFlag = lang.Flag
                  return (
                    <button
                      key={lang.code}
                      onClick={(e) => {
                        e.stopPropagation()
                        handleLangChange(lang.code)
                      }}
                      className={cn(
                        'w-full flex items-center gap-3 px-4 py-3 text-left transition-colors',
                        currentLang === lang.code
                          ? 'bg-primary-50 text-primary font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      )}
                    >
                      <span className="w-7 h-5 rounded overflow-hidden shadow-sm border border-gray-200">
                        <LangFlag className="w-full h-full object-cover" />
                      </span>
                      <span>{lang.fullLabel}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* CTA Button */}
            <Link href="/contact">
              <Button
                variant="primary"
                size="md"
              >
                {currentLang === 'en' ? 'Contact us' : 'Nous contacter'}
              </Button>
            </Link>
          </div>

          {/* Mobile: Language Dropdown + Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Language Dropdown */}
            <div className="relative" ref={mobileLangRef}>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsMobileLangMenuOpen(!isMobileLangMenuOpen)
                }}
                className={cn(
                  'flex items-center gap-1.5 px-2.5 py-2 rounded-lg font-medium transition-colors text-sm',
                  showWhiteBg
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                )}
              >
                {CurrentFlag && (
                  <span className="w-5 h-3.5 rounded-sm overflow-hidden shadow-sm border border-gray-200/50">
                    <CurrentFlag className="w-full h-full object-cover" />
                  </span>
                )}
                <span>{currentLanguage?.label}</span>
                <ChevronDown className={cn(
                  "w-3.5 h-3.5 transition-transform duration-200",
                  isMobileLangMenuOpen && "rotate-180"
                )} />
              </button>

              {/* Mobile Language Dropdown Menu */}
              <div
                className={cn(
                  'absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 min-w-[150px] z-50',
                  isMobileLangMenuOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                )}
              >
                {languages.map((lang) => {
                  const LangFlag = lang.Flag
                  return (
                    <button
                      key={lang.code}
                      onClick={(e) => {
                        e.stopPropagation()
                        handleLangChange(lang.code)
                      }}
                      className={cn(
                        'w-full flex items-center gap-3 px-4 py-3 text-left transition-colors',
                        currentLang === lang.code
                          ? 'bg-primary-50 text-primary font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      )}
                    >
                      <span className="w-6 h-4 rounded-sm overflow-hidden shadow-sm border border-gray-200">
                        <LangFlag className="w-full h-full object-cover" />
                      </span>
                      <span>{lang.fullLabel}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'p-2 rounded-lg transition-colors',
                showWhiteBg
                  ? 'text-gray-900 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              )}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden fixed inset-x-0 top-20 bg-white shadow-xl transition-all duration-300 transform',
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        )}
      >
        <div className="container-custom py-6">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item)}
                  className="px-4 py-3 rounded-xl font-medium text-left transition-all duration-200 text-gray-700 hover:text-primary hover:bg-gray-50 flex items-center gap-3"
                >
                  <Icon className="w-5 h-5" />
                  {getLabel(item)}
                </button>
              )
            })}

            <div className="pt-4 border-t border-gray-200 mt-2">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  {currentLang === 'en' ? 'Contact us' : 'Nous contacter'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
