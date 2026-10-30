import React from 'react'

const WA_COMMERCIAL = 'https://wa.me/554396784294?text=Ol%C3%A1!%20Sou%20lojista%20%2F%20revendedora%20e%20gostaria%20de%20acessar%20as%20condi%C3%A7%C3%B5es%20de%20atacado%20da%20P%C3%A9rola%20Pratas.'

export default function LpNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-surface-0/95 backdrop-blur-[20px] border-b border-border-subtle">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between h-[64px]">
        <a href="/" className="no-underline inline-flex items-center gap-3" aria-label="Pérola Pratas — Atacado">
          <img src="/logo.png" alt="Pérola Pratas" className="logo-img h-8 block" />
          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-surface-2 border border-border-subtle text-[hsl(var(--accent-soft))]">
            Atacado 925
          </span>
        </a>

        <div className="flex gap-4 items-center">
          <span className="hidden lg:inline-block text-xs font-mono text-tertiary">
            Pedido Mínimo: <strong className="text-primary">R$ 899</strong>
          </span>
          <a
            href={WA_COMMERCIAL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !min-h-[38px] !py-2 !px-4 !rounded-lg !text-xs !font-semibold !tracking-wide"
          >
            <span>Consultor Comercial</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
