import React, { useState, useRef } from "react";

const WA_LINK = "https://chat.whatsapp.com/Hdvgvn7zl7o5RssmdYH3Qr";

const STEPS = [
  { icon: "📲", label: "Entre no grupo VIP" },
  { icon: "🔔", label: "Receba o aviso das lives" },
  { icon: "🎥", label: "Assista em tempo real" },
  { icon: "💎", label: "Garanta sua peça" },
];

const BADGES = [
  { value: "925", label: "Prata Pura" },
  { value: "100%", label: "Fab. Própria" },
  { value: "Grátis", label: "Acesso ao grupo" },
];

export default function LpHero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  const px = mousePos.x * 40;
  const py = mousePos.y * 40;

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-[100svh] flex items-center justify-center pt-[100px] pb-24 relative overflow-hidden text-center"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#050D0A]">
        {/* Noise */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay z-10 pointer-events-none"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          }}
        />
        {/* Ambient orbs with parallax */}
        <div
          className="absolute inset-0 z-0 transition-transform duration-700 ease-out"
          style={{ transform: `translate(${px * -0.5}px, ${py * -0.5}px)` }}
        >
          <div className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,hsl(160,80%,18%)_0%,transparent_70%)] animate-[float_20s_ease-in-out_infinite_alternate]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle,hsl(150,70%,14%)_0%,transparent_70%)] animate-[float_25s_ease-in-out_infinite_alternate-reverse]" />
          <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle,hsl(38,40%,12%)_0%,transparent_60%)] animate-[float_15s_ease-in-out_infinite_alternate]" />
        </div>
        {/* Frosted glass panes */}
        <div
          className="absolute inset-0 z-[5] transition-transform duration-500 ease-out"
          style={{
            perspective: "1000px",
            transform: `rotateX(${py * -0.5}deg) rotateY(${px * 0.5}deg) translateZ(10px)`,
          }}
        >
          <div className="absolute top-[-20%] left-[-10%] w-[120vw] h-[40vh] -rotate-12 bg-white/[0.015] border-b border-white/[0.04] backdrop-blur-[60px] animate-[slidePane_25s_ease-in-out_infinite_alternate]" />
          <div className="absolute top-[-10%] right-[15%] w-[25vw] h-[120vh] rotate-6 bg-white/[0.015] border-l border-white/[0.03] backdrop-blur-[80px] animate-[slidePane_30s_ease-in-out_infinite_alternate-reverse]" />
        </div>
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(160,60%,6%)]/40 to-[hsl(160,60%,6%)] z-10 pointer-events-none" />
      </div>

      {/* ── Content ── */}
      <div
        className="max-w-[860px] mx-auto px-6 md:px-10 w-full relative z-10 flex flex-col items-center"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="flex flex-col items-center justify-center transition-transform duration-300 ease-out"
          style={{ transform: `translateZ(40px) translate(${px * 0.2}px, ${py * 0.2}px)` }}
        >

          {/* Live badge */}
          <div className="flex items-center justify-center gap-3 mb-8 animate-[blurReveal_1.5s_cubic-bezier(0.2,0.8,0.2,1)_both]">
            <div
              className="w-2 h-2 rounded-full bg-[#25D366] animate-[pulse-glow_2s_infinite]"
              style={{ boxShadow: "0 0 12px rgba(37,211,102,0.5)" }}
            />
            <span className="font-sans text-[0.72rem] font-semibold text-tertiary tracking-[0.28em] uppercase">
              Grupo VIP Exclusivo · Acesso Gratuito
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif leading-[1.1] text-center mb-8 text-[clamp(2.6rem,6.5vw,5.5rem)] animate-[blurReveal_1.5s_cubic-bezier(0.2,0.8,0.2,1)_0.15s_both]">
            <span className="block text-primary font-light tracking-[-0.02em] mb-1">
              Joias em{" "}
              <span className="font-normal text-[hsl(var(--accent))]">Prata 925</span>
            </span>
            <span className="block text-primary font-light italic tracking-[-0.02em]">
              com preços imbatíveis.
            </span>
            <span className="block mt-4 font-light italic text-[hsl(var(--accent-soft))] text-[clamp(1.4rem,3.2vw,2.4rem)] tracking-wide">
              Só quem está dentro das lives sabe.
            </span>
          </h1>

          {/* Sub */}
          <p className="font-sans text-[1.1rem] md:text-[1.2rem] leading-[1.8] text-secondary max-w-[560px] mx-auto font-light mb-10 animate-[blurReveal_1.5s_cubic-bezier(0.2,0.8,0.2,1)_0.3s_both]">
            Entre no nosso <strong>Grupo VIP do WhatsApp</strong> e receba os avisos das lives com peças exclusivas de Prata 925 — direto da fábrica, com valores de atacado antes de todo mundo.
          </p>

          {/* Steps row */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-[blurReveal_1.5s_cubic-bezier(0.2,0.8,0.2,1)_0.45s_both]">
            {STEPS.map((s, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.07] rounded-full px-4 py-2 backdrop-blur-sm">
                <span className="text-lg">{s.icon}</span>
                <span className="font-sans text-[0.75rem] font-medium text-secondary tracking-wide">{s.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4 animate-[blurReveal_1.5s_cubic-bezier(0.2,0.8,0.2,1)_0.6s_both]">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp !py-4 !px-10 !text-[0.88rem] !rounded-xl backdrop-blur-md"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.317 0-4.477-.67-6.314-1.822l-.44-.265-3.265 1.094 1.094-3.265-.265-.44A9.959 9.959 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Entrar no Grupo VIP — É Gratuito
            </a>
            <span className="font-sans text-[0.72rem] text-muted tracking-wide">
              Sem spam · Só avisos das lives com ofertas
            </span>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 pt-12 mt-4 border-t border-border-strong/10 w-full animate-[blurReveal_1.5s_cubic-bezier(0.2,0.8,0.2,1)_0.75s_both]">
            {BADGES.map(({ value, label }) => (
              <div key={label} className="text-center group">
                <div className="font-serif text-[2rem] text-primary font-medium tracking-[-0.02em] leading-none mb-[0.5rem] transition-transform duration-500 group-hover:scale-110 group-hover:text-[hsl(var(--accent))]">
                  {value}
                </div>
                <div className="font-sans text-[0.62rem] font-semibold tracking-[0.28em] uppercase text-tertiary">
                  {label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
