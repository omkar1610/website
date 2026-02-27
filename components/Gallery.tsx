'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

// Non-translatable layout data stays here
// const DATA_URL = 'https://cdn.jsdelivr.net/gh/omkar1610/site_assets@main/data.json?v=2'
// const BASE_URL = "https://cdn.jsdelivr.net/gh/omkar1610/site_assets@main";
const DATA_URL = 'https://raw.githubusercontent.com/omkar1610/site_assets/refs/heads/main/data.json'
const BASE_URL = "https://raw.githubusercontent.com/omkar1610/site_assets/refs/heads/main";


const galleryMeta = [
  { id: "1", src: `${BASE_URL}/1.jpg?v=2`, cols: 2, rows: 2 },
  { id: "2", src: `${BASE_URL}/2.jpg?v=2`, cols: 1, rows: 1 },
  { id: "3", src: `${BASE_URL}/3.jpg?v=2`, cols: 1, rows: 1 },
  { id: "4", src: `${BASE_URL}/4.jpg?v=2`, cols: 1, rows: 1 },
  { id: "5", src: `${BASE_URL}/5.jpg?v=2`, cols: 1, rows: 1 },
  { id: "7", src: `${BASE_URL}/7.jpg?v=2`, cols: 1, rows: 1 },
  { id: "8", src: `${BASE_URL}/8.jpg?v=2`, cols: 1, rows: 1 },
  { id: "6", src: `${BASE_URL}/6.jpg?v=2`, cols: 2, rows: 2 },
  { id: "9", src: `${BASE_URL}/9.jpg?v=2`, cols: 2, rows: 1 },
];

type GalleryCaptions = {
  [key: string]: {
    en: string
    or: string
  }
}
// const galleryMeta = [
//   { src: '/gallery/1.jpg', cols: 2, rows: 2 },
//   { src: '/gallery/2.jpg', cols: 1, rows: 1 },
//   { src: '/gallery/3.jpg', cols: 1, rows: 1 },
//   { src: '/gallery/4.jpg', cols: 1, rows: 1 },
//   { src: '/gallery/5.jpg', cols: 1, rows: 1 },
//   { src: '/gallery/6.jpg', cols: 2, rows: 1 },
//   { src: '/gallery/7.jpg', cols: 1, rows: 1 },
//   { src: '/gallery/8.jpg', cols: 1, rows: 1 },
//   { src: '/gallery/9.jpg', cols: 2, rows: 1 },
// ]

export default function Gallery() {
  const {lang, t } = useLanguage()
  const g = t.gallery

  const [captions, setCaptions] = useState<GalleryCaptions>({})

  useEffect(() => {
    fetch(DATA_URL)
      .then(res => res.json())
      .then(data => setCaptions(data))
      .catch(err => console.error('Failed to load gallery data:', err))
  }, [])


  return (
    <section id="gallery" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-2">
            {g.sectionTitle}
          </h2>
          <div className="w-16 h-1 bg-gold mb-4" />
          <p className="text-gray-500 text-lg">{g.sectionSubtitle}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]">
          {galleryMeta.map((meta, i) => (
            // console log
            // console.log(meta, captions[meta.id]?.[lang]),
            <div
              // key={i}
              key={meta.id}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${
                meta.cols === 2 ? 'col-span-2' : 'col-span-1'
              } ${meta.rows === 2 ? 'row-span-2' : 'row-span-1'}`}
            >
              <Image
                src={meta.src}
                // alt={g.items[i]}
                alt={captions[meta.id]?.[lang] || 'Gallery image'}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-3">
                <span className="text-white text-xs font-medium bg-black/50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-1 group-hover:translate-y-0">
                  {/* {g.items[i]} */}
                  {captions[meta.id]?.[lang]|| 'Gallery image'}
                  {/* console.log(captions[meta.id]?.[lang]) */}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
