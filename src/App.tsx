import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Index from '@/pages/Index'
import Links from '@/pages/Links'
import LpVip from '@/pages/LpVip'
import LpAtenPre from '@/pages/LpAtenPre'
import NotFound from '@/pages/NotFound'
import Termos from '@/pages/Termos'
import Privacidade from '@/pages/Privacidade'
import Adminterno from '@/pages/Adminterno'

function LegacyRedirect() {
  const location = useLocation()
  return <Navigate to={`/${location.search}`} replace />
}

function NormalizeUrl({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  if (location.pathname !== location.pathname.toLowerCase()) {
    return <Navigate to={location.pathname.toLowerCase() + location.search + location.hash} replace />
  }
  return <>{children}</>
}

export default function App() {
  return (
    <BrowserRouter>
      <NormalizeUrl>
        <Routes>
          <Route path="/" element={<LpVip />} />
          <Route path="/lp" element={<LpVip />} />
          <Route path="/home-legada" element={<Index />} />
          <Route path="/lpatenpre" element={<LpAtenPre />} />
          <Route path="/links" element={<Links />} />
          <Route path="/linkbio" element={<Links />} />
          <Route path="/link-bio" element={<Links />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/adminterno" element={<Adminterno />} />
          
          {/* Redirecionamentos de URLs legadas (WooCommerce) */}
          <Route path="/categoria-produto/*" element={<LegacyRedirect />} />
          <Route path="/product-category/*" element={<LegacyRedirect />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </NormalizeUrl>
    </BrowserRouter>
  )
}
