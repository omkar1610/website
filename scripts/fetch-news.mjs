/**
 * scripts/fetch-news.mjs
 *
 * Fetches latest 10 news articles about Suryabanshi Suraj from Google News RSS
 * and translates title, source, date to Odia via Google Translate.
 *
 * Run: node scripts/fetch-news.mjs
 *
 * Output: TypeScript snippet to paste into lib/translations.ts as news_feed
 */

import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const RSS_URL =
  'https://news.google.com/rss/search?q=Suryabanshi+Suraj&hl=en-IN&gl=IN&ceid=IN:en'

// ── Translate using Google Translate public endpoint ──────────────────────────

async function translate(text, targetLang = 'or') {
  if (!text) return ''
  const url = new URL('https://translate.googleapis.com/translate_a/single')
  url.searchParams.set('client', 'gtx')
  url.searchParams.set('sl', 'en')
  url.searchParams.set('tl', targetLang)
  url.searchParams.set('dt', 't')
  url.searchParams.set('q', text)

  const res = await fetch(url.toString())
  if (!res.ok) throw new Error(`Translate API error ${res.status}`)
  const data = await res.json()
  // data[0] is an array of [translated_chunk, original_chunk, ...]
  return data[0].map((chunk) => chunk[0]).join('')
}

// ── Parse RSS XML ─────────────────────────────────────────────────────────────

function extractCdata(str) {
  const m = str.match(/^<!\[CDATA\[([\s\S]*?)\]\]>$/)
  return m ? m[1].trim() : str.trim()
}

function parseRss(xml) {
  const items = []
  const itemRe = /<item>([\s\S]*?)<\/item>/g
  let match

  while ((match = itemRe.exec(xml)) !== null && items.length < 10) {
    const body = match[1]

    const rawTitle = extractCdata(body.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? '')
    const source = extractCdata(body.match(/<source[^>]*>([\s\S]*?)<\/source>/)?.[1] ?? '')
    // Google News appends " - Source Name" to titles — strip it
    const title = source
      ? rawTitle.replace(new RegExp(`\\s+-\\s+${source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`), '').trim()
      : rawTitle

    // Google News RSS: <link>URL</link> or falls back to <guid>
    const linkMatch =
      body.match(/<link>(https?:\/\/[^<]+)<\/link>/) ||
      body.match(/<guid[^>]*>(https?:\/\/[^<]+)<\/guid>/)
    const link = linkMatch ? linkMatch[1].trim() : ''

    const pubDate = body.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1]?.trim() ?? ''

    // Format date: "Sun, 22 Feb 2026 11:53:51 GMT" → "22 Feb 2026"
    const dateParsed = new Date(pubDate)
    const formattedDate = isNaN(dateParsed.getTime())
      ? pubDate
      : dateParsed.toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        })

    items.push({ title, link, date: formattedDate, source })
  }
  return items
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.error('Fetching RSS feed…')
  const rssRes = await fetch(RSS_URL)
  if (!rssRes.ok) throw new Error(`RSS fetch failed: ${rssRes.status}`)
  const xml = await rssRes.text()

  const items = parseRss(xml)
  console.error(`Found ${items.length} articles. Translating to Odia…`)

  const results = []

  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    console.error(`  [${i + 1}/${items.length}] ${item.title.slice(0, 60)}…`)

    const [titleOr, sourceOr, dateOr] = await Promise.all([
      translate(item.title),
      translate(item.source),
      translate(item.date),
    ])

    results.push({ ...item, titleOr, sourceOr, dateOr })

    // Polite delay to avoid rate limiting
    if (i < items.length - 1) await new Promise((r) => setTimeout(r, 300))
  }

  // ── Emit TypeScript ─────────────────────────────────────────────────────────
  const tsItems = results
    .map(
      (r) =>
        `      {
        title:  { en: ${JSON.stringify(r.title)}, or: ${JSON.stringify(r.titleOr)} },
        source: { en: ${JSON.stringify(r.source)}, or: ${JSON.stringify(r.sourceOr)} },
        date:   { en: ${JSON.stringify(r.date)},   or: ${JSON.stringify(r.dateOr)} },
        link: ${JSON.stringify(r.link)},
      }`
    )
    .join(',\n')

  const output = `  news_feed: {
    sectionTitle: { en: 'Latest News', or: 'ସର୍ବଶେଷ ଖବର' },
    items: [
${tsItems}
    ],
  },`

  // Print to stdout so it can be piped or copied
  console.log(output)
  console.error('\nDone. Paste the output above into lib/translations.ts inside the `content` object.')
}

main().catch((err) => {
  console.error('Error:', err.message)
  process.exit(1)
})
