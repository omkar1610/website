'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { lang, setLang, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ['about', 'constituency', 'news', 'gallery', 'contact']
    const observers: IntersectionObserver[] = []

    // Clear highlight when hero is in view
    const heroEl = document.getElementById('top')
    if (heroEl) {
      const heroObserver = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection('') },
        { rootMargin: '0px 0px -50% 0px' }
      )
      heroObserver.observe(heroEl)
      observers.push(heroObserver)
    }

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
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
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-gold ${
                    isActive
                      ? 'text-gold'
                      : isScrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {link.label}
                  {isActive && <span className="block h-0.5 bg-gold mt-0.5 rounded-full" />}
                </a>
              )
            })}

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

          {/* Mobile: Language Toggle + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <div
              className={`flex items-center text-xs font-semibold rounded-full border overflow-hidden ${
                isScrolled ? 'border-gray-300' : 'border-white/40'
              }`}
            >
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 transition-colors ${
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
                className={`px-2.5 py-1 transition-colors ${
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

            <button
              className="p-2 flex flex-col gap-1"
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
          </div>{/* end md:hidden wrapper */}
        </div>{/* end justify-between row */}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white mt-2 rounded-lg shadow-lg py-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 text-sm font-medium transition-colors hover:text-gold hover:bg-cream ${
                    isActive ? 'text-gold border-l-2 border-gold pl-3.5' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}
