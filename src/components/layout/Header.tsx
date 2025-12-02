'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn, scrollToSection } from '@/lib/utils'
import Button from '@/components/ui/Button'

const navItems = [
  { label: 'Accueil', href: '/', isPage: true },
  { label: 'Services', href: 'services', isPage: false },
  { label: 'Produits', href: 'products', isPage: false },
  { label: 'Réalisations', href: 'portfolio', isPage: false },
  { label: 'Références', href: '/references', isPage: true },
  { label: 'À propos', href: '/a-propos', isPage: true },
  { label: 'Contact', href: '/contact', isPage: true },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
            {navItems.map((item) => (
              item.isPage ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'px-4 py-2 rounded-lg font-medium transition-all duration-300 relative',
                    showWhiteBg
                      ? isActive(item)
                        ? 'text-primary bg-primary-50'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                      : isActive(item)
                        ? 'text-white bg-white/20'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item)}
                  className={cn(
                    'px-4 py-2 rounded-lg font-medium transition-all duration-300 relative',
                    showWhiteBg
                      ? 'text-gray-700 hover:text-primary hover:bg-gray-100'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  )}
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button
                variant="primary"
                size="md"
              >
                Demander un devis
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors',
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
              item.isPage ? (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'px-4 py-3 rounded-xl font-medium text-left transition-all duration-200',
                    isActive(item)
                      ? 'text-primary bg-primary-50'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item)}
                  className="px-4 py-3 rounded-xl font-medium text-left transition-all duration-200 text-gray-700 hover:text-primary hover:bg-gray-50"
                >
                  {item.label}
                </button>
              )
            ))}
            <div className="pt-4 border-t border-gray-200 mt-2">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Demander un devis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
