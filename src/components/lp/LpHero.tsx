import React from "react";
import { ArrowRight, Award, CheckCircle2 } from "lucide-react";

const WA_LINK = "https://wa.me/5543991312661?text=Ol%C3%A1!%20Sou%20lojista%20%2F%20revendedora%20e%20gostaria%20de%20acessar%20o%20cat%C3%A1logo%20de%20atacado%20da%20P%C3%A9rola%20Pratas.";

const BADGES = [
  { value: "R$ 899", label: "Pedido Mínimo", sub: "Até 5x sem juros" },
  { value: "+1.200", label: "Modelos Ativos", sub: "Pronta-entrega" },
  { value: "24h", label: "Despacho Rápido", sub: "Envio com seguro total" },
  { value: "925", label: "Prata Legítima", sub: "Garantia vitalícia do metal" },
];

export default function LpHero() {
  const scrollToTriagem = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("triagem-atacado");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(WA_LINK, "_blank");
    }
  };

  return (
    <section className="min-h-[88svh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 md:px-10 relative overflow-hidden bg-surface-0 text-center border-b border-border-subtle">
      
      {/* ── Iluminação Esmeralda Suave da Pérola Pratas (Sem Neon) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[380px] bg-[radial-gradient(ellipse_at_top,hsl(var(--accent)/0.18)_0%,transparent_70%)]" />
      </div>

      {/* ── Conteúdo Central ── */}
      <div className="max-w-[960px] mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* Selo B2B Pérola Pratas */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-2 border border-border-subtle text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[hsl(var(--accent-soft))] mb-6">
          <Award className="w-3.5 h-3.5 text-[hsl(var(--accent-soft))]" />
          <span>Fábrica & Distribuição B2B Exclusiva</span>
        </div>

        {/* Headline com a Tipografia e Itálicos Oficiais da Marca */}
        <h1 className="font-serif leading-[1.12] text-center mb-6 text-[clamp(2.2rem,5vw,4.4rem)] text-primary font-normal tracking-[-0.02em]">
          <span className="block text-primary font-light">
            Joias em <em className="italic font-normal text-[hsl(var(--accent-soft))] not-italic md:italic">Prata 925</em> Legítima
          </span>
          <span className="block mt-2 font-medium text-primary">
            Direto de Fábrica para Lojistas e Revendedoras Autônomas
          </span>
        </h1>

        {/* Subtítulo Sóbrio */}
        <p className="font-sans text-sm sm:text-base md:text-lg leading-relaxed text-secondary max-w-[720px] mx-auto font-light mb-8">
          Abasteça sua loja física, boutique ou mostruário de revenda com o padrão autêntico da Pérola Pratas: acabamento de alta joalheria, liga hipoalergênica, garantia vitalícia do metal e pronta-entrega.
        </p>

        {/* Caixa de Regra Comercial (Ancoragem em R$ 899) */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-2/90 border border-border-subtle text-xs sm:text-sm text-secondary font-mono mb-8">
          <span className="text-[hsl(var(--accent-soft))] font-bold">Condição de Atacado:</span>
          <span>Pedido mínimo de <strong className="text-primary">R$ 899,00</strong> em até 5x sem juros. Venda exclusiva para revenda.</span>
        </div>

        {/* Botões de Ação com o Verde Esmeralda da Marca */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-12">
          <button
            onClick={scrollToTriagem}
            className="btn-primary !w-full sm:!w-auto !py-4 !px-8 !rounded-xl !text-xs sm:!text-sm !font-semibold !tracking-wider !uppercase cursor-pointer"
          >
            <span className="flex items-center gap-2">
              Simular Mostruário & Atendimento B2B
              <ArrowRight className="w-4 h-4 text-white" />
            </span>
          </button>
          
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline !w-full sm:!w-auto !py-4 !px-7 !rounded-xl !text-xs sm:!text-sm !font-semibold"
          >
            <span>Falar com Consultor no WhatsApp</span>
          </a>
        </div>

        {/* Diferenciais Oficiais da Fábrica */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-8 text-xs text-tertiary font-light mb-10">
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent-soft))]" />
            Certificados físicos inclusos na caixa
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent-soft))]" />
            Liga hipoalergênica (livre de níquel)
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent-soft))]" />
            Fechos reforçados com timbragem 925
          </span>
        </div>

        {/* Grid de 4 Pilares Comerciais */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full pt-8 border-t border-border-subtle">
          {BADGES.map((b) => (
            <div key={b.label} className="bg-surface-2 border border-border-subtle rounded-xl p-4 sm:p-5 text-center">
              <div className="font-mono text-xl sm:text-2xl font-bold text-primary mb-1">
                {b.value}
              </div>
              <div className="font-sans text-xs font-semibold text-secondary uppercase tracking-wider">
                {b.label}
              </div>
              <div className="text-[11px] text-tertiary mt-0.5 font-light">
                {b.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
