export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-[80px] pb-16 md:pb-0 relative overflow-hidden">
      {/* Grid bg decorativo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--accent) / 0.10) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 70% 90% at 30% 50%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 90% at 30% 50%, black, transparent)',
        }}
        aria-hidden="true"
      />

      {/* Ghost text — decorativo, marcado como aria-hidden */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute right-[-4%] bottom-[-12%] font-serif text-[clamp(18rem,36vw,55rem)] leading-[0.8] text-primary font-semibold opacity-[0.04] tracking-[-0.06em] pointer-events-none select-none italic"
      >
        925
      </div>

      {/* Grid responsivo: empilha em mobile, 5fr/4fr em desktop */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 w-full grid grid-cols-1 md:grid-cols-[5fr_4fr] items-center gap-12 md:gap-8 relative z-10">
        {/* LEFT — conteúdo */}
        <div className="flex flex-col animate-[fadeUp_1s_ease_forwards]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-7 h-[2px] bg-accent" aria-hidden="true" />
            <span className="section-label">Parceiros B2B Exclusivos</span>
          </div>

          {/* Tipografia clamp mais conservadora (evita estouro em viewport médio) */}
          <h1 className="font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.95] text-primary font-normal tracking-[-0.025em] mb-7">
            O<br />
            <em
              className="italic text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  'linear-gradient(130deg, hsl(var(--accent)) 0%, hsl(var(--accent-soft)) 60%, hsl(150 70% 88%) 100%)',
              }}
            >
              Reflexo
            </em>
            <br />
            Curado.
          </h1>

          {/* Parágrafo em secondary → contraste ≥ 9:1 */}
          <p className="font-sans text-[1.1rem] leading-[1.85] text-secondary max-w-[440px] font-light mb-9">
            Eleve seu portfólio com prata de atacado de qualidade editorial.
            Feito para visionários, desenhado para distinção.
          </p>

          <div className="flex gap-4 flex-wrap mb-12">
            <a href="#cadastro" className="btn-primary">Analisar Ser de Atração</a>
            <a href="#colecoes" className="btn-outline">Explorar Coleções</a>
          </div>

          {/* Divider visível agora (border-strong em vez de cor invisível) */}
          <div className="flex flex-wrap gap-8 md:gap-12 pt-8 border-t border-border-strong">
            {[
              { value: '925', label: 'Prata Pura' },
              { value: 'B2B', label: 'Exclusivo' },
              { value: '100%', label: 'Fab. Própria' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-serif text-[2rem] text-primary font-medium tracking-[-0.02em] leading-none mb-[0.4rem]">
                  {value}
                </div>
                <div className="font-sans text-[0.72rem] font-semibold tracking-[0.24em] uppercase text-accent">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — vídeo do produto */}
        <div className="flex justify-center md:justify-end items-center md:items-end">
          <video
            src="/jew.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            className="max-h-[60vh] md:max-h-[78vh] w-full object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.5)] animate-[float_6s_ease-in-out_infinite]"
          />
        </div>
      </div>

      {/* Logo watermark — decorativo, oculto em mobile */}
      <img
        src="/logo.png"
        alt=""
        className="logo-img absolute top-1/2 right-10 -translate-y-1/2 opacity-[0.07] pointer-events-none w-[320px] hidden lg:block"
        aria-hidden="true"
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 hidden sm:flex items-center gap-4 animate-[fadeIn_1.5s_1.2s_ease_both]">
        <div className="w-7 h-px bg-border-strong" aria-hidden="true" />
        <span className="font-sans text-[0.68rem] tracking-[0.3em] uppercase text-tertiary">Scroll</span>
      </div>
    </section>
  )
}
