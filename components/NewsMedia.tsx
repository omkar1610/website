'use client'

import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import Script from 'next/script'
import { useLanguage } from '@/context/LanguageContext'

export default function NewsMedia() {
  const { t } = useLanguage()
  const n = t.news

  return (
    <section id="news" className="py-20 bg-white">
      <div id="fb-root" />
      <Script
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0"
        strategy="lazyOnload"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-2">
            {n.sectionTitle}
          </h2>
          <div className="w-16 h-1 bg-gold mb-4" />
          <p className="text-gray-500 text-lg">{n.sectionSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* LEFT — PRESS */}
<div className="flex flex-col h-[800px]">
  <h3 className="font-serif text-xl font-bold text-navy mb-6">
    {n.pressTitle}
  </h3>

  {/* Scroll Container */}
  <div className="flex-1 overflow-y-auto pr-2">
    <div className="space-y-3">
      {n.newsItems.map((item, i) => (
        <div
          key={i}
          className="flex items-start gap-4 p-5 bg-cream rounded-xl border border-divider"
        >
          <div className="w-1 self-stretch rounded-full bg-gold flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                {item.tag}
              </span>
              <span className="text-gray-300 text-xs">·</span>
              <span className="text-xs text-gray-400">
                {item.source}
              </span>
            </div>

            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy text-sm font-medium leading-snug hover:text-gold transition-colors"
              >
                {item.title}
              </a>
            ) : (
              <p className="text-navy text-sm font-medium leading-snug">
                {item.title}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>



          {/* RIGHT — SOCIAL */}
<div className="flex flex-col h-[800px]">
  <h3 className="font-serif text-xl font-bold text-navy mb-6">
    {n.socialTitle}
  </h3>

  <div className="flex flex-col flex-1">
    
            {/* TOP 80% — FACEBOOK */}
            <div className="rounded-xl border border-divider overflow-hidden flex-[8] mb-4">
              <div className="bg-[#1877F2] px-4 py-3 flex items-center gap-2 text-white">
                <span className="text-sm font-semibold">Facebook</span>
                <span className="text-white/60 text-xs ml-1">
                  @suraj.sthitaprajna
                </span>
              </div>

              <div className="flex justify-center p-2 bg-gray-50 h-full">
                <div
                  className="fb-page"
                  data-href="https://www.facebook.com/suraj.sthitaprajna"
                  data-tabs="timeline"
                  data-height="100%"
                  data-adapt-container-width="true"
                />
              </div>
            </div>


            {/* BOTTOM 20% — 3 EQUAL TILES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
              
              {/* Twitter / X */}
              <a
                href="https://twitter.com/suryabanshibjp"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl bg-black text-white p-4 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <FaXTwitter className="text-2xl mb-2" />
                <span className="text-sm font-semibold">Twitter / X</span>
                <span className="text-xs text-white/60 group-hover:text-white mt-1">
                  @suryabanshibjp
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/suryabanshibjp"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white p-4 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <FaInstagram className="text-2xl mb-2" />
                <span className="text-sm font-semibold">Instagram</span>
                <span className="text-xs text-white/80 group-hover:text-white mt-1">
                  @suryabanshibjp
                </span>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@suryabanshisuraj"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl bg-red-600 text-white p-4 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <FaYoutube className="text-2xl mb-2" />
                <span className="text-sm font-semibold">YouTube</span>
                <span className="text-xs text-white/80 group-hover:text-white mt-1">
                  @suryabanshisuraj
                </span>
              </a>

            </div>

          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
