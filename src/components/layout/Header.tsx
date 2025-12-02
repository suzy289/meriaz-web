'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn, scrollToSection } from '@/lib/utils'
import Button from '@/components/ui/Button'

const navItems = [
  { label: 'Accueil', href: 'hero' },
  { label: 'Services', href: 'services' },
  { label: 'Produits', href: 'products' },
  { label: 'Réalisations', href: 'portfolio' },
  { label: 'Références', href: 'references' },
  { label: 'À propos', href: 'why-meriaz' },
  { label: 'Contact', href: 'contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href)
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl transition-all duration-300",
                isScrolled
                  ? "bg-primary text-white"
                  : "bg-white text-primary"
              )}>
                M
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-secondary rounded-full" />
            </div>
            <span className={cn(
              "text-xl font-bold transition-colors duration-300",
              isScrolled ? "text-gray-900" : "text-white"
            )}>
              Meriaz
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  'px-4 py-2 rounded-lg font-medium transition-all duration-300 relative',
                  isScrolled
                    ? activeSection === item.href
                      ? 'text-primary bg-primary-50'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                    : activeSection === item.href
                      ? 'text-white bg-white/20'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              variant="primary"
              size="md"
              onClick={() => handleNavClick('contact')}
            >
              Demander un devis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors',
              isScrolled
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
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  'px-4 py-3 rounded-xl font-medium text-left transition-all duration-200',
                  activeSection === item.href
                    ? 'text-primary bg-primary-50'
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                )}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-200 mt-2">
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => handleNavClick('contact')}
              >
                Demander un devis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

