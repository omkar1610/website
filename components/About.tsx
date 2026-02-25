import Image from "next/image";

const timeline = [
  {
    year: '2014',
    title: 'First Electoral Victory',
    description:
      'Elected as MLA from Dhamnagar Constituency with a decisive mandate from the people of the region.',
  },
  {
    year: '2017',
    title: 'Ministerial Appointment',
    description:
      'Appointed as Minister in the Government of Odisha, taking on expanded responsibilities for public welfare.',
  },
  {
    year: '2019',
    title: 'Re-elected with Stronger Mandate',
    description:
      'Re-elected by the people of Dhamnagar with an increased majority, reaffirming public trust.',
  },
  {
    year: '2024',
    title: 'Continued Service',
    description:
      'Continuing service as Minister and MLA with renewed focus on infrastructure, livelihoods, and youth.',
  },
]

const values = [
  {
    title: 'Integrity',
    desc: 'Upholding the highest standards of honesty and transparency in governance.',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: 'People First',
    desc: 'Every decision guided by the welfare and aspirations of the people of Dhamnagar.',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Development',
    desc: 'Driving sustainable infrastructure and economic growth for long-term prosperity.',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: 'Accountability',
    desc: 'Regular public reporting and open governance for complete transparency.',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-2">
            About
          </h2>
          <div className="w-16 h-1 bg-gold mb-4" />
          <p className="text-gray-500 text-lg">
            Dedicated public servant, rooted in the culture and aspirations of
            Odisha.
          </p>
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20">
          {/* Photo placeholder */}
          <div className="lg:col-span-2">
            <div className="aspect-[3/4] relative rounded-xl overflow-hidden bg-cream shadow-md">
              <Image
                src="/about-photo.jpg"
                alt="About Suryabanshi Suraj"
                fill
                className="object-cover"
              />

              {/* Soft bottom fade for blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-cream/40 to-transparent"></div>
            </div>

          </div>

          {/* Bio Text */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <h3 className="font-serif text-2xl font-bold text-navy mb-4">
              Suryabanshi Suraj
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Suryabanshi Suraj is a dedicated public servant and grassroots
              political leader who has been serving the people of Dhamnagar
              Constituency in Odisha. Born and raised with a deep connection to
              the cultural roots of Odisha, he has built his political career on
              the principles of inclusive development, social equity, and
              responsive governance.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              As Member of Legislative Assembly (MLA) from Dhamnagar and
              Minister in the Government of Odisha, he has worked tirelessly to
              bridge the gap between government initiatives and ground-level
              implementation, ensuring that the benefits of development reach
              every household in the constituency.
            </p>
            <p className="text-gray-600 leading-relaxed mb-7">
              His tenure has been marked by a sustained focus on improving
              education infrastructure, healthcare access, road connectivity,
              and agricultural support — critical pillars for the progress of
              rural Odisha.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-navy/10 text-navy text-sm font-medium px-3 py-1 rounded-full">
                MLA, Dhamnagar
              </span>
              <span className="bg-gold/10 text-gold-dark text-sm font-medium px-3 py-1 rounded-full">
                Cabinet Minister
              </span>
              <span className="bg-gray-100 text-gray-600 text-sm font-medium px-3 py-1 rounded-full">
                Government of Odisha
              </span>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {values.map((v) => (
            <div
              key={v.title}
              className="text-center p-5 rounded-xl border border-divider hover:border-gold/40 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 bg-navy/10 text-navy rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                {v.icon}
              </div>
              <h4 className="font-semibold text-navy mb-1 text-sm">
                {v.title}
              </h4>
              <p className="text-gray-400 text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div>
          <h3 className="font-serif text-2xl font-bold text-navy mb-10 text-center">
            Political Journey
          </h3>
          <div className="relative">
            {/* Centre line on desktop */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-divider -translate-x-1/2 hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div
                    className={`md:w-1/2 ${
                      i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <div className="bg-cream border border-divider rounded-xl p-5 hover:shadow-sm transition-shadow max-w-sm md:ml-auto md:mr-0">
                      {i % 2 !== 0 && (
                        <div className="md:hidden" />
                      )}
                      <span className="text-gold font-bold text-sm">
                        {item.year}
                      </span>
                      <h4 className="font-semibold text-navy mt-1 mb-2 text-sm">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="hidden md:flex absolute left-1/2 top-5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-gold border-4 border-white shadow-sm" />
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
