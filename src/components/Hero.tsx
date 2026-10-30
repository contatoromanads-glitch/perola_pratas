import React from "react";
import { Sparkles, ShieldCheck, ArrowRight, Package, Clock, Award } from "lucide-react";

const WA_LINK = "https://wa.me/554396784294?text=Ol%C3%A1!%20Vim%20pelo%20site%20institucional%20e%20gostaria%20de%20conhecer%20as%20condi%C3%A7%C3%B5es%20de%20atacado%20da%20P%C3%A9rola%20Pratas.";

export default function Hero() {
  return (
    <section className="min-h-[90svh] flex items-center justify-center pt-28 pb-20 relative overflow-hidden text-center bg-[#06110C] border-b border-emerald-500/10">
      {/* Background sutil Dark Emerald */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-900/20 blur-[130px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="max-w-[1060px] mx-auto px-5 sm:px-8 w-full relative z-10 flex flex-col items-center">
        {/* Selo B2B Corporativo */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/20 text-emerald-300 text-[0.72rem] tracking-wider uppercase font-semibold mb-8">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Fábrica & Distribuição Oficial · Joalheria em Prata 925</span>
        </div>

        {/* Headline Nobre Institucional */}
        <h1 className="font-serif leading-[1.08] text-center mb-6 text-[clamp(2.4rem,5.5vw,4.4rem)] text-slate-100 font-normal tracking-tight">
          Indústria e Distribuição de{' '}
          <span className="italic text-emerald-300 font-serif">Prata 925 Legítima</span>{' '}
          para Lojas e Revenda
        </h1>

        <p className="font-sans text-[1.05rem] sm:text-[1.2rem] leading-relaxed text-slate-300 max-w-[720px] mx-auto font-light mb-10">
          Abasteça sua loja física ou mostruário autônomo diretamente da fábrica. Joias nobres com acabamento espelhado, pronta entrega nacional e condição exclusiva para atacado com pedido mínimo de <strong>R$ 899</strong>.
        </p>

        {/* CTAs Executivos */}
        <div className="flex gap-4 flex-col sm:flex-row justify-center items-center w-full mb-14">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-[#1B6E55] hover:bg-[#228769] text-white font-medium text-[0.92rem] tracking-wide transition-all shadow-[0_4px_20px_rgba(27,110,85,0.35)] hover:shadow-[0_6px_24px_rgba(27,110,85,0.45)] cursor-pointer no-underline group"
          >
            <span>Falar com Consultor de Atacado</span>
            <ArrowRight className="w-4 h-4 text-emerald-200 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#pedido-minimo"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/40 text-slate-200 border border-emerald-500/25 font-medium text-[0.92rem] tracking-wide transition-all no-underline"
          >
            Condições do Pedido Mínimo
          </a>
        </div>

        {/* 4 Badges Tabulares Institucionais */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-[940px] pt-8 border-t border-emerald-500/15">
          <div className="p-4 rounded-lg bg-[#0B1B14]/80 border border-emerald-500/15 text-left">
            <div className="flex items-center gap-2 mb-1.5 text-emerald-400">
              <Award className="w-4 h-4" />
              <span className="text-[0.68rem] font-semibold tracking-wider uppercase text-slate-400">Pureza</span>
            </div>
            <div className="font-serif text-xl sm:text-2xl text-slate-100 font-medium">Prata 925</div>
            <p className="text-[0.72rem] text-slate-400 mt-1 leading-tight">Certificado e garantia vitalícia do metal</p>
          </div>

          <div className="p-4 rounded-lg bg-[#0B1B14]/80 border border-emerald-500/15 text-left">
            <div className="flex items-center gap-2 mb-1.5 text-emerald-400">
              <Package className="w-4 h-4" />
              <span className="text-[0.68rem] font-semibold tracking-wider uppercase text-slate-400">Atacado Real</span>
            </div>
            <div className="font-serif text-xl sm:text-2xl text-slate-100 font-medium">R$ 899</div>
            <p className="text-[0.72rem] text-slate-400 mt-1 leading-tight">Em até 3x sem juros no cartão</p>
          </div>

          <div className="p-4 rounded-lg bg-[#0B1B14]/80 border border-emerald-500/15 text-left">
            <div className="flex items-center gap-2 mb-1.5 text-emerald-400">
              <Clock className="w-4 h-4" />
              <span className="text-[0.68rem] font-semibold tracking-wider uppercase text-slate-400">Logística</span>
            </div>
            <div className="font-serif text-xl sm:text-2xl text-slate-100 font-medium">24 Horas</div>
            <p className="text-[0.72rem] text-slate-400 mt-1 leading-tight">Despacho com seguro para todo o Brasil</p>
          </div>

          <div className="p-4 rounded-lg bg-[#0B1B14]/80 border border-emerald-500/15 text-left">
            <div className="flex items-center gap-2 mb-1.5 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[0.68rem] font-semibold tracking-wider uppercase text-slate-400">Qualidade</span>
            </div>
            <div className="font-serif text-xl sm:text-2xl text-slate-100 font-medium">Sem Níquel</div>
            <p className="text-[0.72rem] text-slate-400 mt-1 leading-tight">Antialérgico e fecho italiano reforçado</p>
          </div>
        </div>
      </div>
    </section>
  );
}
