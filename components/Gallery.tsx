import Image from 'next/image'

const galleryItems = [
  { src: '/gallery/1.jpg', label: 'Road Inauguration, Dhamnagar', cols: 2, rows: 2 },
  { src: '/gallery/2.jpg', label: 'Health Camp, Rural Block', cols: 1, rows: 1 },
  { src: '/gallery/3.jpg', label: 'School Opening Ceremony', cols: 1, rows: 1 },
  { src: '/gallery/4.jpg', label: 'Legislative Assembly Session', cols: 1, rows: 1 },
  { src: '/gallery/5.jpg', label: 'Farmers Interaction Meeting', cols: 1, rows: 1 },
  { src: '/gallery/6.jpg', label: 'Mission Shakti SHG Meet', cols: 2, rows: 1 },
  { src: '/gallery/7.jpg', label: 'Odisha Day Celebration', cols: 1, rows: 1 },
  { src: '/gallery/8.jpg', label: 'Youth Engagement Program', cols: 1, rows: 1 },
  { src: '/gallery/9.jpg', label: 'Irrigation Project Visit', cols: 1, rows: 1 },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-2">
            Gallery
          </h2>
          <div className="w-16 h-1 bg-gold mb-4" />
          <p className="text-gray-500 text-lg">
            Moments from public service, constituency visits, and governance
            milestones.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${
                item.cols === 2 ? 'col-span-2' : 'col-span-1'
              } ${item.rows === 2 ? 'row-span-2' : 'row-span-1'}`}
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-3">
                <span className="text-white text-xs font-medium bg-black/50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-1 group-hover:translate-y-0">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
