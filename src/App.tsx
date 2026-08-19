import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Index from '@/pages/Index'
import Links from '@/pages/Links'
import LpVip from '@/pages/LpVip'
import NotFound from '@/pages/NotFound'
import Termos from '@/pages/Termos'
import Privacidade from '@/pages/Privacidade'
import Adminterno from '@/pages/Adminterno'

function LegacyRedirect() {
  const location = useLocation()
  return <Navigate to={`/${location.search}`} replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/lp" element={<LpVip />} />
        <Route path="/links" element={<Links />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/adminterno" element={<Adminterno />} />
        
        {/* Redirecionamentos de URLs legadas (WooCommerce) */}
        <Route path="/categoria-produto/*" element={<LegacyRedirect />} />
        <Route path="/product-category/*" element={<LegacyRedirect />} />

        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
