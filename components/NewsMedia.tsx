'use client'

import { useState, useEffect, useCallback } from 'react'
import { FaXTwitter, FaInstagram, FaYoutube } from 'react-icons/fa6'
import { FiRefreshCw } from 'react-icons/fi'
import Script from 'next/script'
import { useLanguage } from '@/context/LanguageContext'

// ── Types ─────────────────────────────────────────────────────────────────────

type BiLang = { en: string; or: string }
type FeedItem = { title: BiLang; source: BiLang; date: BiLang; link: string; tag: BiLang }

// ── Helpers ───────────────────────────────────────────────────────────────────

const RSS_URL =
  'https://news.google.com/rss/search?q=Suryabanshi+Suraj&hl=en-IN&gl=IN&ceid=IN:en'

async function toOdia(text: string): Promise<string> {
  if (!text.trim()) return text
  try {
    const url =
      `https://translate.googleapis.com/translate_a/single` +
      `?client=gtx&sl=en&tl=or&dt=t&q=${encodeURIComponent(text)}`
    const res = await fetch(url)
    const data = await res.json()
    return (data[0] as [string][]).map((c) => c[0]).join('')
  } catch {
    return text
  }
}

function formatPubDate(raw: string): string {
  // rss2json returns "YYYY-MM-DD HH:MM:SS"
  const d = new Date(raw.replace(' ', 'T'))
  return isNaN(d.getTime())
    ? raw
    : d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}

function stripSourceSuffix(title: string, source: string): string {
  // Try exact source match first
  if (source) {
    const exact = title
      .replace(new RegExp(`\\s+-\\s+${source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`), '')
      .trim()
    if (exact !== title) return exact
  }
  // Fallback: Google News always appends " - Source Name" — strip the last such segment
  return title.replace(/\s+-\s+[^-]+$/, '').trim()
}

const TAG_RULES: { keywords: string[]; tag: BiLang }[] = [
  { keywords: ['university', 'college', 'higher education', 'shailabala', 'utkal'], tag: { en: 'Higher Education', or: 'ଉଚ୍ଚ ଶିକ୍ଷା' } },
  { keywords: ['student', 'scholarship', 'youth', 'welfare'],                       tag: { en: 'Student Welfare',   or: 'ଛାତ୍ର ସୁରକ୍ଷା' } },
  { keywords: ['sports', 'cricket', 'football', 'game', 'tournament', 'athlete'],   tag: { en: 'Sports',             or: 'କ୍ରୀଡ଼ା' } },
  { keywords: ['literature', 'science', 'research', 'book', 'award', 'prize'],      tag: { en: 'Literature & Science', or: 'ସାହିତ୍ୟ ଓ ବିଜ୍ଞାନ' } },
  { keywords: ['policy', 'government', 'minister', 'governance', 'education'],      tag: { en: 'Education & Governance', or: 'ଶିକ୍ଷା' } },
  { keywords: ['bjp', 'party', 'election', 'rally', 'campaign', 'leadership'],      tag: { en: 'Leadership & Vision', or: 'ନେତୃତ୍ୱ ଓ ଭିଜନ' } },
]

const DEFAULT_TAG: BiLang = { en: 'News', or: 'ଖବର' }

function detectTag(title: string): BiLang {
  const lower = title.toLowerCase()
  return TAG_RULES.find(r => r.keywords.some(kw => lower.includes(kw)))?.tag ?? DEFAULT_TAG
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function NewsMedia() {
  const { t, lang } = useLanguage()
  const n = t.news
  const nf = t.news_feed

  const [feedItems, setFeedItems] = useState<FeedItem[]>([])
  const [loading, setLoading] = useState(true)

  const fetchFeed = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}&count=10`
      )
      const data = await res.json()
      if (data.status !== 'ok') throw new Error('feed error')

      const items: { title: string; author: string; pubDate: string; link: string }[] =
        data.items.slice(0, 10)

      const translated: FeedItem[] = await Promise.all(
        items.map(async (item) => {
          // rss2json's author is often empty for Google News; extract source from title suffix
          const extracted = item.title.match(/\s+-\s+([^-]+)$/)
          const source = (item.author?.trim() || extracted?.[1]?.trim()) ?? ''
          const title = stripSourceSuffix(item.title, source)
          const date = formatPubDate(item.pubDate)
          const tag = detectTag(title)
          const [titleOr, sourceOr, dateOr] = await Promise.all([
            toOdia(title),
            toOdia(source),
            toOdia(date),
          ])
          return {
            title:  { en: title,  or: titleOr  },
            source: { en: source, or: sourceOr },
            date:   { en: date,   or: dateOr   },
            link: item.link,
            tag,
          }
        })
      )
      setFeedItems(translated)
    } catch {
      setFeedItems([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchFeed() }, [fetchFeed])

  const showFeed = loading || feedItems.length > 0

  // ── Shared card renderer ──────────────────────────────────────────────────

  function FeedCard({ item }: { item: FeedItem }) {
    return (
      <div className="flex items-start gap-3 p-4 bg-cream rounded-xl border border-divider">
        <div className="w-1 self-stretch rounded-full bg-gold flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="text-xs font-semibold text-gold uppercase tracking-wider">{item.tag[lang]}</span>
            <span className="text-gray-300 text-xs">·</span>
            <span className="text-xs text-gray-500">{item.source[lang]}</span>
            <span className="text-gray-300 text-xs">·</span>
            <span className="text-xs text-gray-400">{item.date[lang]}</span>
          </div>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy text-sm font-medium leading-snug hover:text-gold transition-colors"
          >
            {item.title[lang]}
          </a>
        </div>
      </div>
    )
  }

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <section id="news" className="py-20 bg-white">
      <div id="fb-root" />
      <Script
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0"
        strategy="lazyOnload"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-2">
            {n.sectionTitle}
          </h2>
          <div className="w-16 h-1 bg-gold mb-4" />
          <p className="text-gray-500 text-lg">{n.sectionSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* ── LEFT — PRESS ─────────────────────────────────────────────── */}
          <div className="flex flex-col h-[800px]">
            <h3 className="font-serif text-xl font-bold text-navy mb-4">
              {n.pressTitle}
            </h3>

            {/* TOP sub-section: live news feed (shown while loading or when items exist) */}
            {showFeed && (
              <div className="flex flex-col min-h-0 flex-1 mb-4">
                {/* Sub-header */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-navy">{nf.sectionTitle}</span>
                  <button
                    onClick={fetchFeed}
                    disabled={loading}
                    className="flex items-center gap-1 text-xs text-gold hover:text-navy transition-colors disabled:opacity-40"
                  >
                    <FiRefreshCw className={`text-sm ${loading ? 'animate-spin' : ''}`} />
                    <span>{nf.refreshBtn}</span>
                  </button>
                </div>

                {/* Scrollable list */}
                <div className="flex-1 overflow-y-auto min-h-0 pr-1 space-y-2">
                  {loading
                    ? Array.from({ length: 4 }).map((_, i) => (
                        <div
                          key={i}
                          className="p-4 bg-cream rounded-xl border border-divider animate-pulse"
                        >
                          <div className="h-2 bg-gray-200 rounded w-1/3 mb-3" />
                          <div className="h-3 bg-gray-200 rounded w-full mb-1" />
                          <div className="h-3 bg-gray-200 rounded w-4/5" />
                        </div>
                      ))
                    : feedItems.map((item, i) => <FeedCard key={i} item={item} />)}
                </div>
              </div>
            )}

            {/* BOTTOM sub-section: hardcoded press highlights (always shown) */}
            <div className={`flex flex-col min-h-0 ${showFeed ? 'flex-1' : 'flex-[1]'}`}>
              {/* Sub-header */}
              <span className="text-sm font-semibold text-navy mb-2">
                {n.pressHighlightTitle}
              </span>

              {/* Scrollable list */}
              <div className="flex-1 overflow-y-auto min-h-0 pr-1 space-y-2">
                {n.newsItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-cream rounded-xl border border-divider"
                  >
                    <div className="w-1 self-stretch rounded-full bg-gold flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                          {item.tag}
                        </span>
                        <span className="text-gray-300 text-xs">·</span>
                        <span className="text-xs text-gray-400">{item.source}</span>
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

          {/* ── RIGHT — SOCIAL ───────────────────────────────────────────── */}
          <div className="flex flex-col h-[800px]">
            <h3 className="font-serif text-xl font-bold text-navy mb-6">
              {n.socialTitle}
            </h3>

            <div className="flex flex-col flex-1">
              {/* Facebook — top 80% */}
              <div className="rounded-xl border border-divider overflow-hidden flex-[8] mb-4">
                <div className="bg-[#1877F2] px-4 py-3 flex items-center gap-2 text-white">
                  <span className="text-sm font-semibold">Facebook</span>
                  <span className="text-white/60 text-xs ml-1">@suraj.sthitaprajna</span>
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

              {/* Social tiles — bottom 20% */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
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
