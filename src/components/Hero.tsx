export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-[68px] relative overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(6,78,59,0.07) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        maskImage: 'radial-gradient(ellipse 70% 90% at 30% 50%, black, transparent)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 90% at 30% 50%, black, transparent)',
      }} />

      {/* Ghost text */}
      <div className="absolute right-[-4%] bottom-[-12%] font-serif text-[clamp(18rem,36vw,55rem)] leading-[0.8] text-forest font-semibold opacity-[0.04] tracking-[-0.06em] pointer-events-none select-none italic">
        925
      </div>

      <div className="max-w-[1320px] mx-auto px-10 w-full grid grid-cols-[5fr_4fr] items-center gap-8 relative z-10">
        {/* LEFT */}
        <div className="flex flex-col animate-[fadeUp_1s_ease_forwards]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-7 h-[2px] bg-teal" />
            <span className="section-label">Parceiros B2B Exclusivos</span>
          </div>

          <h1 className="font-serif text-[clamp(4rem,8.5vw,8.5rem)] leading-[0.92] text-forest font-normal tracking-[-0.025em] mb-7">
            O<br />
            <em className="italic text-transparent bg-clip-text" style={{
              backgroundImage: 'linear-gradient(130deg, #34d399 0%, #6ee7b7 50%, #a7f3d0 100%)',
            }}>Reflexo</em><br />
            Curado.
          </h1>

          <p className="font-sans text-[1.1rem] leading-[1.85] text-forest-soft max-w-[380px] font-light mb-9">
            Eleve seu portfólio com prata de atacado de qualidade editorial.
            Feito para visionários, desenhado para distinção.
          </p>

          <div className="flex gap-4 flex-wrap mb-12">
            <a href="#cadastro" className="btn-teal">Analisar Ser de Atração</a>
            <a href="#colecoes" className="btn-outline">Explorar Coleções</a>
          </div>

          <div className="flex gap-12 pt-8 border-t-[1.5px] border-[rgba(6,78,59,0.12)]">
            {[
              { value: '925', label: 'Prata Pura' },
              { value: 'B2B', label: 'Exclusivo' },
              { value: '100%', label: 'Fab. Própria' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-serif text-[2rem] text-forest font-medium tracking-[-0.02em] leading-none mb-[0.4rem]">
                  {value}
                </div>
                <div className="font-sans text-[0.72rem] font-semibold tracking-[0.24em] uppercase text-muted">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-end items-end">
          <video
            src="/jew.mp4"
            autoPlay muted loop playsInline
            className="max-h-[78vh] w-full object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.5)] drop-shadow-[0_0_60px_rgba(52,211,153,0.15)] animate-[float_6s_ease-in-out_infinite]"
          />
        </div>
      </div>

      {/* Logo watermark */}
      <img src="/logo.png" alt="" className="logo-img absolute top-1/2 right-10 -translate-y-1/2 opacity-[0.07] pointer-events-none w-[320px]" aria-hidden="true" />

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-10 flex items-center gap-4 animate-[fadeIn_1.5s_1.2s_ease_both]">
        <div className="w-7 h-px bg-white/15" />
        <span className="font-sans text-[0.68rem] tracking-[0.3em] uppercase text-muted">Scroll</span>
      </div>
    </section>
  )
}
