const HIGHLIGHTS = [
  { value: '925', label: 'Prata 925' },
  { value: 'Alto', label: 'Padrão' },
  { value: 'Direto', label: 'Atendimento' },
]

const QUALITY_POINTS = [
  'Acabamento refinado para vitrines premium',
  'Curadoria para atacado, varejo e revenda',
  'Contato consultivo antes do acesso às condições comerciais',
]

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-[92px] pb-16 md:pb-20 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(120deg, hsl(var(--accent) / 0.08), transparent 34%), radial-gradient(circle, hsl(var(--text-primary) / 0.045) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 34px 34px',
          maskImage:
            'linear-gradient(90deg, black 0%, black 68%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(90deg, black 0%, black 68%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1320px] mx-auto px-6 md:px-10 w-full min-w-0 grid grid-cols-1 lg:grid-cols-[minmax(0,1.03fr)_minmax(360px,0.86fr)] items-center gap-12 lg:gap-16 relative z-10">
        <div className="flex flex-col animate-[fadeUp_1s_ease_forwards] text-center lg:text-left items-center lg:items-start w-full min-w-0">
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
            <div className="fine-line w-7 h-[2px] bg-accent" aria-hidden="true" />
            <span className="section-label">Atacado e Varejo</span>
          </div>

          <h1 className="hero-title font-serif leading-[0.95] text-primary font-normal mb-7 text-[clamp(2.95rem,12.5vw,3.55rem)] md:text-[clamp(4.4rem,10vw,6.5rem)] lg:text-[clamp(5.4rem,8vw,8.5rem)]">
            <span className="hero-title-line">Prata</span><br />
            <em
              className="hero-title-line hero-title-line-accent italic text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  'linear-gradient(130deg, hsl(var(--accent)) 0%, hsl(var(--accent-soft)) 66%, hsl(150 70% 88%) 100%)',
              }}
            >
              925.
            </em>
            <br />
            <span className="hero-title-line hero-title-line-last">Genuína.</span>
          </h1>

          <p className="hero-copy font-sans text-[1.05rem] md:text-[1.1rem] leading-[1.85] text-secondary max-w-[500px] mx-auto lg:mx-0 font-light mb-9">
            Eleve seu portfólio com prata de atacado de alto padrão. Feito para
            visionários, desenhado para distinção.
          </p>

          <div className="hero-cta flex gap-4 flex-wrap justify-center lg:justify-start mb-12">
            <a
              href="https://wa.me/5543991312661"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Fale Conosco
            </a>
          </div>

          <div className="hero-stats grid grid-cols-3 gap-3 md:gap-8 pt-8 border-t border-border-strong w-full max-w-[560px]">
            {HIGHLIGHTS.map(({ value, label }) => (
              <div key={label} className="min-w-0">
                <div className="font-serif text-[1.45rem] md:text-[2rem] text-primary font-medium leading-none mb-[0.45rem]">
                  {value}
                </div>
                <div className="font-sans text-[0.58rem] sm:text-[0.66rem] md:text-[0.72rem] font-semibold tracking-[0.16em] sm:tracking-[0.22em] uppercase text-accent leading-relaxed">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-media-enter ambient-float relative w-full max-w-[min(100%,540px)] min-w-0 mx-auto lg:mx-0">
          <div className="motion-surface relative border border-border-strong bg-surface-2/45 p-3 md:p-4 rounded-sm overflow-hidden">
            <figure className="relative aspect-[4/5] overflow-hidden rounded-sm bg-surface-0">
              <img
                src="/gallery-1.png"
                alt="Colar de prata 925 sobre veludo verde"
                className="motion-image h-full w-full object-cover object-center opacity-95"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-surface-0/72 via-transparent to-surface-0/10"
              />
              <figcaption className="absolute left-5 right-5 bottom-5 border-t border-border-strong pt-4">
                <span className="block font-sans text-[0.66rem] md:text-[0.72rem] font-semibold tracking-[0.24em] uppercase text-accent mb-2">
                  Peças em prata 925
                </span>
                <span className="block font-serif text-[1.65rem] md:text-[2rem] leading-tight text-primary">
                  Presença premium, acabamento claro, venda com intenção.
                </span>
              </figcaption>
            </figure>
          </div>

          <div className="mt-5 grid gap-3 min-w-0">
            {QUALITY_POINTS.map((point) => (
              <div
                key={point}
                className="motion-surface flex items-center gap-3 border border-border-subtle bg-surface-0/45 px-4 py-3 rounded-sm"
              >
                <span className="quiet-pulse h-px w-7 bg-accent flex-shrink-0" aria-hidden="true" />
                <span className="min-w-0 font-sans text-[0.82rem] md:text-[0.88rem] text-secondary leading-relaxed">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
