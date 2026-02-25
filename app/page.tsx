import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Constituency from '@/components/Constituency'
import NewsMedia from '@/components/NewsMedia'
import Gallery from '@/components/Gallery'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Constituency />
      <NewsMedia />
      <Gallery />
      <WhatsAppButton />
      <Footer />
    </main>
  )
}
