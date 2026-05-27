import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from '@/pages/Index'
import Links from '@/pages/Links'
import LpVip from '@/pages/LpVip'
import NotFound from '@/pages/NotFound'
import Termos from '@/pages/Termos'
import Privacidade from '@/pages/Privacidade'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/lp" element={<LpVip />} />
        <Route path="/links" element={<Links />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/privacidade" element={<Privacidade />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
