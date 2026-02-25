'use client'

import Script from 'next/script'

const newsItems = [
  {
    source: 'Odisha TV',
    title:
      'Minister Suryabanshi Suraj inaugurates new primary health centre in Dhamnagar block',
    tag: 'Healthcare',
  },
  {
    source: 'The Hindu',
    title:
      'Dhamnagar MLA calls for expedited rural road connectivity in legislative assembly session',
    tag: 'Infrastructure',
  },
  {
    source: 'Pragativadi',
    title:
      "Mission Shakti SHG network expansion under Suraj's initiative reaches 500 groups across constituency",
    tag: 'Social',
  },
]


export default function NewsMedia() {
  return (
    <section id="news" className="py-20 bg-white">
      {/* Third-party scripts — lazy loaded after page is interactive */}
      <div id="fb-root" />
      <Script
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0"
        strategy="lazyOnload"
      />
      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
        onLoad={() => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ;(window as any).twttr?.widgets?.load()
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-2">
            News &amp; Media
          </h2>
          <div className="w-16 h-1 bg-gold mb-4" />
          <p className="text-gray-500 text-lg">
            Stay connected through official social platforms and press coverage.
          </p>
        </div>

        {/* Row 1: Facebook + Twitter live feeds */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Facebook Page Feed */}
          <div className="rounded-xl border border-divider overflow-hidden min-h-[520px]">
            <div className="bg-[#1877F2] px-4 py-3 flex items-center gap-2 text-white">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="text-sm font-semibold">Facebook</span>
              <span className="text-white/60 text-xs ml-1">
                @suraj.sthitaprajna
              </span>
            </div>
            <div className="flex justify-center p-2 bg-gray-50">
              <div
                className="fb-page"
                data-href="https://www.facebook.com/suraj.sthitaprajna"
                data-tabs="timeline"
                data-width=""
                data-height="460"
                data-small-header="true"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="false"
              />
            </div>
          </div>

          {/* Twitter/X Timeline */}
          <div className="rounded-xl border border-divider overflow-hidden min-h-[520px]">
            <div className="bg-black px-4 py-3 flex items-center gap-2 text-white">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="text-sm font-semibold">Twitter / X</span>
              <span className="text-white/50 text-xs ml-1">@suryabanshibjp</span>
            </div>
            <div className="overflow-y-auto" style={{ height: '460px' }}>
              <a
                className="twitter-timeline"
                data-height="460"
                data-theme="light"
                data-chrome="noheader nofooter noborders"
                href="https://twitter.com/suryabanshibjp"
              >
                Tweets by @suryabanshibjp
              </a>
            </div>
          </div>
        </div>

        {/* Row 2: Instagram follow card + YouTube link card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Instagram Follow Card */}
          <div className="rounded-xl border border-divider overflow-hidden">
            <div className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] px-4 py-3 flex items-center gap-2 text-white">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span className="text-sm font-semibold">Instagram</span>
              <span className="text-white/70 text-xs ml-1">@suryabanshibjp</span>
            </div>
            <div className="p-8 bg-white flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-navy">@suryabanshibjp</p>
                <p className="text-gray-400 text-sm mt-1 max-w-xs">
                  Visual updates from constituency visits, public events, and
                  cultural engagements across Dhamnagar.
                </p>
              </div>
              <a
                href="https://instagram.com/suryabanshibjp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
              >
                View Profile on Instagram
              </a>
            </div>
          </div>

          {/* YouTube Link Card */}
          <div className="rounded-xl border border-divider overflow-hidden">
            <div className="bg-[#FF0000] px-4 py-3 flex items-center gap-2 text-white">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span className="text-sm font-semibold">YouTube</span>
              <span className="text-white/60 text-xs ml-1">@SuryabanshiSuraj</span>
            </div>
            <div className="p-8 bg-white flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#FF0000] flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-navy">Suryabanshi Suraj</p>
                <p className="text-gray-400 text-sm mt-1 max-w-xs">
                  Speeches, press conferences, public addresses, and
                  development project inaugurations from the constituency.
                </p>
              </div>
              <a
                href="https://youtube.com/@suryabanshisuraj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF0000] hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Press Coverage */}
        <div>
          <h3 className="font-serif text-xl font-bold text-navy mb-6">
            Press Coverage
          </h3>
          <div className="space-y-3">
            {newsItems.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 bg-cream rounded-xl border border-divider"
              >
                <div className="w-1 self-stretch rounded-full bg-gold flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                      {item.tag}
                    </span>
                    <span className="text-gray-300 text-xs">·</span>
                    <span className="text-xs text-gray-400">{item.source}</span>
                  </div>
                  <p className="text-navy text-sm font-medium leading-snug">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">
            Replace with actual press links and headlines.
          </p>
        </div>
      </div>
    </section>
  )
}
