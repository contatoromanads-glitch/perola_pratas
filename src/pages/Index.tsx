import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Problems from '@/components/Problems'
import Solution from '@/components/Solution'
import HowItWorks from '@/components/HowItWorks'
import Results from '@/components/Results'
import ProductPreview from '@/components/ProductPreview'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Index() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Problems />
      <Solution />
      <ProductPreview />
      <HowItWorks />
      <Results />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
