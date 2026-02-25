'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: t.nav.links.about, href: '#about' },
    { label: t.nav.links.development, href: '#constituency' },
    { label: t.nav.links.news, href: '#news' },
    { label: t.nav.links.gallery, href: '#gallery' },
    { label: t.nav.links.contact, href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#top" className="flex flex-col leading-tight">
            <span
              className={`font-serif font-bold text-lg ${
                isScrolled ? 'text-navy' : 'text-white'
              }`}
            >
              {t.nav.name}
            </span>
            <span className="text-xs font-medium text-gold">{t.nav.title}</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Language Toggle */}
            <div
              className={`flex items-center text-xs font-semibold rounded-full border overflow-hidden ${
                isScrolled ? 'border-gray-300' : 'border-white/40'
              }`}
            >
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 transition-colors ${
                  lang === 'en'
                    ? 'bg-gold text-white'
                    : isScrolled
                    ? 'text-gray-500 hover:text-gold'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('or')}
                className={`px-3 py-1 transition-colors ${
                  lang === 'or'
                    ? 'bg-gold text-white'
                    : isScrolled
                    ? 'text-gray-500 hover:text-gold'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                ଓଡ଼ିଆ
              </button>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 flex flex-col gap-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 transition-all ${
                isScrolled ? 'bg-navy' : 'bg-white'
              }`}
            />
            <span
              className={`block w-5 h-0.5 transition-all ${
                isScrolled ? 'bg-navy' : 'bg-white'
              }`}
            />
            <span
              className={`block w-5 h-0.5 transition-all ${
                isScrolled ? 'bg-navy' : 'bg-white'
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white mt-2 rounded-lg shadow-lg py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-gray-700 hover:text-gold hover:bg-cream text-sm font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Language Toggle */}
            <div className="flex items-center gap-2 px-4 py-3 border-t border-divider mt-1">
              <span className="text-xs text-gray-400 font-medium">Language:</span>
              <button
                onClick={() => setLang('en')}
                className={`text-xs font-semibold px-3 py-1 rounded-full transition-colors ${
                  lang === 'en' ? 'bg-gold text-white' : 'text-gray-500 hover:text-gold'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('or')}
                className={`text-xs font-semibold px-3 py-1 rounded-full transition-colors ${
                  lang === 'or' ? 'bg-gold text-white' : 'text-gray-500 hover:text-gold'
                }`}
              >
                ଓଡ଼ିଆ
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
