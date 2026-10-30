import React from 'react'

const WA_DEST = '554396784294'
const WA_LINK = `https://wa.me/${WA_DEST}?text=${encodeURIComponent('Olá! Vim pelo site da Pérola Pratas e gostaria de falar com um consultor comercial de atacado.')}`

export default function LpFloatingWhatsApp() {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      const w = window as unknown as { dataLayer?: Array<Record<string, unknown>> }
      if (Array.isArray(w.dataLayer)) {
        w.dataLayer.push({
          event: 'whatsapp_click',
          event_category: 'engagement',
          event_action: 'click',
          event_label: 'floating_whatsapp_button',
          click_url: WA_LINK,
        })
      }
    }
  }

  return (
    <aside aria-label="Contato via WhatsApp" className="fixed bottom-6 right-6 z-[200]">
      <a
        href={WA_LINK}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        data-gtm="whatsapp-floating"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer no-underline"
        aria-label="Falar com Consultor B2B no WhatsApp"
        title="Falar com Consultor B2B no WhatsApp"
      >
        {/* Anel de pulso sutil */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none opacity-60" />

        {/* Ícone oficial perfeitamente centralizado */}
        <svg 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="relative z-10 transition-transform duration-200 group-hover:scale-110"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.317 0-4.477-.67-6.314-1.822l-.44-.265-3.265 1.094 1.094-3.265-.265-.44A9.959 9.959 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </a>
    </aside>
  )
}
