import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const WA_LINK = 'https://wa.me/554396784294?text=Ol%C3%A1!%20Vim%20pelo%20site%20institucional%20e%20gostaria%20de%20falar%20com%20um%20consultor%20comercial.';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#06110C]/90 backdrop-blur-md border-b border-emerald-500/10">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex items-center justify-between h-[68px]">
        <a href="#" className="no-underline inline-flex items-center gap-3" aria-label="Pérola Pratas — Início">
          <img src="/logo.png" alt="Pérola Pratas" className="h-7 sm:h-8 block" />
          <span className="hidden sm:inline-block text-[0.68rem] tracking-[0.2em] uppercase text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/20">
            Atacado
          </span>
        </a>

        <div className="hidden md:flex gap-8 items-center">
          {[
            { href: '#problemas', label: 'Desafios' },
            { href: '#solucao', label: 'Solução' },
            { href: '#mostruario', label: 'Mostruário' },
            { href: '#pedido-minimo', label: 'Pedido Mínimo' },
            { href: '#faq', label: 'Dúvidas' },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-sans text-[0.8rem] font-medium text-slate-400 no-underline transition-colors duration-200 hover:text-slate-100"
            >
              {label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1B6E55] hover:bg-[#228769] text-white text-[0.8rem] font-medium tracking-wide transition-all shadow-[0_2px_12px_rgba(27,110,85,0.3)] no-underline"
          >
            <span>Consultor Comercial</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-200" />
          </a>
        </div>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#1B6E55] text-white text-[0.75rem] font-medium no-underline"
        >
          <span>Atendimento</span>
          <ArrowUpRight className="w-3 h-3 text-emerald-200" />
        </a>
      </div>
    </nav>
  );
}
