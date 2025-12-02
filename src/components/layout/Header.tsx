'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Menu, 
  X, 
  Home, 
  Briefcase, 
  Package, 
  FolderOpen, 
  Users, 
  Info, 
  Mail,
  Globe,
  ChevronDown
} from 'lucide-react'
import { cn, scrollToSection } from '@/lib/utils'
import Button from '@/components/ui/Button'

const navItems = [
  { label: 'Accueil', labelEn: 'Home', href: '/', isPage: true, icon: Home },
  { label: 'Services', labelEn: 'Services', href: 'services', isPage: false, icon: Briefcase },
  { label: 'Produits', labelEn: 'Products', href: 'products', isPage: false, icon: Package },
  { label: 'Réalisations', labelEn: 'Portfolio', href: 'portfolio', isPage: false, icon: FolderOpen },
  { label: 'Références', labelEn: 'References', href: '/references', isPage: true, icon: Users },
  { label: 'À propos', labelEn: 'About', href: '/a-propos', isPage: true, icon: Info },
  { label: 'Contact', labelEn: 'Contact', href: '/contact', isPage: true, icon: Mail },
]

const languages = [
  { code: 'fr', label: 'FR', fullLabel: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'EN', fullLabel: 'English', flag: '🇬🇧' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('fr')
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsLangMenuOpen(false)
    }
    
    if (isLangMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isLangMenuOpen])

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.isPage) {
      setIsMobileMenuOpen(false)
    } else {
      if (isHomePage) {
        scrollToSection(item.href)
      } else {
        window.location.href = `/#${item.href}`
      }
      setIsMobileMenuOpen(false)
    }
  }

  const isActive = (item: typeof navItems[0]) => {
    if (item.isPage) {
      return pathname === item.href
    }
    return false
  }

  const handleLangChange = (langCode: string) => {
    setCurrentLang(langCode)
    setIsLangMenuOpen(false)
    // TODO: Implement actual language change logic
  }

  const getLabel = (item: typeof navItems[0]) => {
    return currentLang === 'en' ? item.labelEn : item.label
  }

  const currentLanguage = languages.find(l => l.code === currentLang)

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
            className="flex items-center group"
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return item.isPage ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'px-3 py-2 rounded-lg font-medium transition-all duration-300 relative flex items-center gap-2',
                    showWhiteBg
                      ? isActive(item)
                        ? 'text-primary bg-primary-50'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                      : isActive(item)
                        ? 'text-white bg-white/20'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {getLabel(item)}
                </Link>
              ) : (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item)}
                  className={cn(
                    'px-3 py-2 rounded-lg font-medium transition-all duration-300 relative flex items-center gap-2',
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

          {/* Right side: Language + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Selector */}
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
                <Globe className="w-4 h-4" />
                <span>{currentLanguage?.flag} {currentLanguage?.label}</span>
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  isLangMenuOpen && "rotate-180"
                )} />
              </button>

              {/* Language Dropdown */}
              <div
                className={cn(
                  'absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 min-w-[150px]',
                  isLangMenuOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                )}
              >
                {languages.map((lang) => (
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
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.fullLabel}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Link href="/contact">
              <Button
                variant="primary"
                size="md"
              >
                {currentLang === 'en' ? 'Get a quote' : 'Demander un devis'}
              </Button>
            </Link>
          </div>

          {/* Mobile: Language + Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Language Toggle */}
            <button
              onClick={() => setCurrentLang(currentLang === 'fr' ? 'en' : 'fr')}
              className={cn(
                'flex items-center gap-1 px-2 py-2 rounded-lg font-medium transition-colors text-sm',
                showWhiteBg
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              )}
            >
              <span>{currentLanguage?.flag}</span>
              <span>{currentLanguage?.label}</span>
            </button>

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
              return item.isPage ? (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'px-4 py-3 rounded-xl font-medium text-left transition-all duration-200 flex items-center gap-3',
                    isActive(item)
                      ? 'text-primary bg-primary-50'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  )}
                >
                  <Icon className="w-5 h-5" />
                  {getLabel(item)}
                </Link>
              ) : (
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

            {/* Mobile Language Selector */}
            <div className="pt-4 border-t border-gray-200 mt-2">
              <p className="px-4 text-sm text-gray-500 mb-2">
                {currentLang === 'en' ? 'Language' : 'Langue'}
              </p>
              <div className="flex gap-2 px-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLangChange(lang.code)}
                    className={cn(
                      'flex items-center gap-2 px-4 py-2 rounded-lg transition-colors flex-1 justify-center',
                      currentLang === lang.code
                        ? 'bg-primary text-white font-medium'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    )}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  {currentLang === 'en' ? 'Get a quote' : 'Demander un devis'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
