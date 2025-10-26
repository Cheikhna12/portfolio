import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Footer from '@/components/Footer'

// Lazy load des sections non-critiques (About chargé immédiatement pour LCP)
const TickerValues = dynamic(() => import('@/components/TickerValues'))
const TechScroll = dynamic(() => import('@/components/TechScroll'))
const Experience = dynamic(() => import('@/components/Experience'))
const Projects = dynamic(() => import('@/components/Projects'))
const Contact = dynamic(() => import('@/components/Contact'))

export default function Home() {
  return (
    <>
      <main className="lg:pr-24">
        <Hero />
        <About />
        <TickerValues />
        <TechScroll />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
