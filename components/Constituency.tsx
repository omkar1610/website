const stats = [
  { number: '10+', label: 'Years of Service' },
  { number: '200+', label: 'Development Projects' },
  { number: '50+', label: 'Villages Covered' },
  { number: '₹500Cr+', label: 'Funds Mobilized' },
]

const initiatives = [
  {
    title: 'Roads & Infrastructure',
    tag: 'Infrastructure',
    description:
      'Construction and upgrade of state and rural roads, bridges, and connectivity projects under PMGSY and state schemes.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: 'Education',
    tag: 'Education',
    description:
      'New school buildings, upgraded facilities, scholarship programs, and digital learning infrastructure for students.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: 'Healthcare',
    tag: 'Healthcare',
    description:
      'New health sub-centres, mobile health units, Biju Swasthya Kalyan Yojana coverage, and regular medical camps.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Agriculture & Irrigation',
    tag: 'Agriculture',
    description:
      'Irrigation canals, farmer support schemes, KALIA Yojana implementation, and soil health card distribution.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
  },
  {
    title: 'Women Empowerment',
    tag: 'Social',
    description:
      'Self-Help Group (SHG) promotion, Mission Shakti, livelihood training, and Anganwadi development programs.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: 'Electrification & Water',
    tag: 'Utilities',
    description:
      'DDUGJY household electrification, solar street lighting, and Nal Jal Yojana piped water supply to rural households.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

export default function Constituency() {
  return (
    <section id="constituency" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-2">
            Constituency &amp; Development
          </h2>
          <div className="w-16 h-1 bg-gold mb-4" />
          <p className="text-gray-500 text-lg max-w-2xl">
            Dhamnagar — a region of immense potential, steadily transformed
            through targeted governance and sustained public investment.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-navy text-white rounded-xl p-6 text-center"
            >
              <div className="font-serif text-3xl font-bold text-gold mb-1">
                {stat.number}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {initiatives.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-6 border border-divider hover:shadow-md hover:border-gold/30 transition-all group"
            >
              <div className="w-10 h-10 bg-navy/10 text-navy rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                {item.icon}
              </div>
              <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                {item.tag}
              </span>
              <h3 className="font-semibold text-navy mt-1 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-navy rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">
            Dhamnagar: A Region on the Rise
          </h3>
          <p className="text-white/60 max-w-xl mx-auto mb-6 text-sm leading-relaxed">
            Through sustained investment and community-driven programs,
            Dhamnagar is emerging as a model constituency in Odisha — with
            improved quality of life, better connectivity, and empowered
            communities.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Connect with Our Office
          </a>
        </div>
      </div>
    </section>
  )
}
