import LpNav from '@/components/lp/LpNav'
import LpHero from '@/components/lp/LpHero'
import LeadTriagem from '@/components/lp/LeadTriagem'
import MinimumOrder from '@/components/MinimumOrder'
import GoogleReviews from '@/components/lp/GoogleReviews'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import LpFloatingWhatsApp from '@/components/lp/LpFloatingWhatsApp'

export default function LpVip() {
  return (
    <div className="min-h-screen bg-[#080B11] text-slate-100 flex flex-col selection:bg-emerald-500/30 selection:text-white overflow-x-hidden w-full max-w-full">
      <LpNav />
      <main className="flex-1 overflow-x-hidden w-full max-w-full">
        <LpHero />
        <div id="lucro" />
        <LeadTriagem />
        <MinimumOrder />
        <GoogleReviews />
        <FAQ />
        <div id="contato" />
      </main>
      <Footer />
      <LpFloatingWhatsApp />
    </div>
  )
}
