'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { t, lang } = useLanguage()
  const h = t.hero

  const [quoteIndex, setQuoteIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Reset typewriter when language changes
  useEffect(() => {
    setQuoteIndex(0)
    setDisplayText('')
    setIsDeleting(false)
  }, [lang])

  useEffect(() => {
    const currentQuote = h.quotes[quoteIndex]

    if (!isDeleting && displayText === currentQuote) {
      // Fully typed — pause, then start deleting
      const timeout = setTimeout(() => setIsDeleting(true), 2500)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayText === '') {
      // Fully deleted — move to next quote
      setIsDeleting(false)
      setQuoteIndex((prev) => (prev + 1) % h.quotes.length)
      return
    }

    const speed = isDeleting ? 1 : 20
    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentQuote.slice(0, displayText.length - 1)
          : currentQuote.slice(0, displayText.length + 1)
      )
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, quoteIndex, h.quotes])

  return (
    <section
      id="top"
      className="relative min-h-screen bg-gradient-to-br from-navy-dark via-navy to-navy-light flex items-center overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-white/[0.03]" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-gold/10" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white order-2 lg:order-1">
            <div className="mb-5">
              <span className="inline-block bg-gold/20 text-gold border border-gold/30 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-widest">
                {h.badge}
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              {h.nameFirst}
              <br />
              <span className="text-gold">{h.nameLast}</span>
            </h1>
            <div className="space-y-1 mb-6">
              <p className="text-white/90 text-lg font-medium">{h.role}</p>
              <p className="text-white/60 text-base">{h.ministry}</p>
            </div>
            <blockquote className="border-l-4 border-gold pl-4 mb-8 min-h-[5rem]">
              <p className="text-white/75 text-base italic leading-relaxed">
                &ldquo;{displayText}
                <span className="inline-block w-0.5 h-4 bg-gold/80 ml-0.5 align-middle animate-pulse" />
                &rdquo;
              </p>
            </blockquote>
            <div className="flex flex-wrap gap-4">
              <a
                href="#about"
                className="bg-gold hover:bg-gold-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                {h.ctaAbout}
              </a>
              <a
                href="#constituency"
                className="border border-white/40 hover:border-white text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm hover:bg-white/10"
              >
                {h.ctaConstituency}
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-[22rem] lg:h-[28rem] rounded-2xl overflow-hidden shadow-xl">
                <Image src="/profile.jpg" alt={`${h.nameFirst} ${h.nameLast}`} fill sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 352px" className="object-cover" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-gold/15 -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}
