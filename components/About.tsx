'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

// Icons stay here - only text comes from translations
const valueIcons = [
  <svg key="integrity" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  <svg key="people" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  <svg key="dev" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  <svg key="account" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>,
]

export default function About() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-2">
            {a.sectionTitle}
          </h2>
          <div className="w-16 h-1 bg-gold mb-4" />
          <p className="text-gray-500 text-lg">{a.sectionSubtitle}</p>
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20">
          {/* Photo */}
          <div className="lg:col-span-2">
            <div className="aspect-[3/4] relative rounded-xl overflow-hidden bg-cream shadow-md">
              <Image
                src="/about-photo.jpg"
                alt={a.bioName}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cream/40 to-transparent" />
            </div>
          </div>

          {/* Bio Text */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <h3 className="font-serif text-2xl font-bold text-navy mb-4">{a.bioName}</h3>
            <p className="text-gray-600 leading-relaxed mb-4">{a.bioPara1}</p>
            <p className="text-gray-600 leading-relaxed mb-4">{a.bioPara2}</p>
            <p className="text-gray-600 leading-relaxed mb-7">{a.bioPara3}</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-navy/10 text-navy text-sm font-medium px-3 py-1 rounded-full">
                {a.badge1}
              </span>
              <span className="bg-gold/10 text-gold-dark text-sm font-medium px-3 py-1 rounded-full">
                {a.badge2}
              </span>
              <span className="bg-gray-100 text-gray-600 text-sm font-medium px-3 py-1 rounded-full">
                {a.badge3}
              </span>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {a.values.map((v, i) => (
            <div
              key={i}
              className="text-center p-5 rounded-xl border border-divider hover:border-gold/40 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 bg-navy/10 text-navy rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                {valueIcons[i]}
              </div>
              <h4 className="font-semibold text-navy mb-1 text-sm">{v.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div>
          <h3 className="font-serif text-2xl font-bold text-navy mb-10 text-center">
            {a.timelineTitle}
          </h3>

          {/* Desktop: horizontal */}
          <div className="hidden md:block">
            <div className="grid grid-cols-4 gap-6">
              {a.timeline.map((item, i) => (
                <div key={item.year} className="flex flex-col items-center relative">
                  {i > 0 && <div className="absolute top-[7px] left-0 right-1/2 h-px bg-divider" />}
                  {i < a.timeline.length - 1 && <div className="absolute top-[7px] left-1/2 right-0 h-px bg-divider" />}
                  <div className="w-3.5 h-3.5 rounded-full bg-gold border-4 border-white shadow-sm mb-5 z-10" />
                  <div className="bg-cream border border-divider rounded-xl p-4 w-full flex-1 hover:shadow-sm transition-shadow">
                    <span className="text-gold font-bold text-xs">{item.year}</span>
                    <h4 className="font-semibold text-navy mt-1 mb-2 text-sm">{item.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical */}

          <div className="md:hidden space-y-0">
            {a.timeline.map((item, i) => (
              <div key={item.year} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-gold border-2 border-white shadow-sm mt-1.5 flex-shrink-0" />
                  {i < a.timeline.length - 1 && <div className="w-px flex-1 bg-divider mt-1" />}
                </div>
                <div className="bg-cream border border-divider rounded-xl p-4 flex-1 mb-4">
                  <span className="text-gold font-bold text-xs">{item.year}</span>
                  <h4 className="font-semibold text-navy mt-1 mb-2 text-sm">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
