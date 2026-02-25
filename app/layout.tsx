import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Lora } from 'next/font/google'
import { LanguageProvider } from '@/context/LanguageContext'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://suryabanshisuraj.in'),
  title: 'Suryabanshi Suraj | MLA Dhamnagar | Minister, Government of Odisha',
  description:
    'Official website of Suryabanshi Suraj, Member of Legislative Assembly from Dhamnagar Constituency and Minister, Government of Odisha. Dedicated to transparent governance and development of Dhamnagar.',
  keywords: [
    'Suryabanshi Suraj',
    'MLA Dhamnagar',
    'Odisha Minister',
    'Dhamnagar Constituency',
    'Government of Odisha',
  ],
  authors: [{ name: 'Suryabanshi Suraj' }],
  openGraph: {
    title: 'Suryabanshi Suraj | MLA Dhamnagar | Minister, Government of Odisha',
    description:
      'Official website of Suryabanshi Suraj, Member of Legislative Assembly from Dhamnagar Constituency.',
    url: 'https://suryabanshisuraj.in',
    siteName: 'Suryabanshi Suraj - Official',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Suryabanshi Suraj - MLA Dhamnagar',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suryabanshi Suraj | MLA Dhamnagar',
    description:
      'Official website of Suryabanshi Suraj, MLA Dhamnagar and Minister, Government of Odisha.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://suryabanshisuraj.in',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Suryabanshi Suraj',
  jobTitle: 'Member of Legislative Assembly, Minister',
  description:
    'MLA from Dhamnagar Constituency and Minister in the Government of Odisha',
  worksFor: {
    '@type': 'GovernmentOrganization',
    name: 'Government of Odisha',
    url: 'https://odisha.gov.in',
  },
  url: 'https://suryabanshisuraj.in',
  image: 'https://suryabanshisuraj.in/profile.jpg',
  sameAs: [
    'https://facebook.com/suraj.sthitaprajna',
    'https://twitter.com/suryabanshibjp',
    'https://instagram.com/suryabanshibjp',
    'https://youtube.com/@suryabanshisuraj',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
