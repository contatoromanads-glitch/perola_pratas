import { useReveal } from '@/hooks/useReveal'

export default function Argument() {
  const { ref: leftRef, visible: leftVisible } = useReveal()
  const { ref: rightRef, visible: rightVisible } = useReveal()

  return (
    // Fundo surface-0 (consistente com sistema) em vez de hex hard-coded
    <section id="atacado" className="bg-surface-0 relative overflow-hidden py-24 md:py-32 px-6 md:px-10">
      {/* Ghost number decorativo */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[clamp(14rem,28vw,40rem)] leading-[0.85] text-primary opacity-[0.04] font-semibold tracking-[-0.08em] pointer-events-none select-none whitespace-nowrap italic"
      >
        100
      </div>

      <img
        src="/logo.png"
        alt=""
        aria-hidden="true"
        className="absolute right-[5%] bottom-[5%] w-[200px] opacity-5 invert pointer-events-none hidden md:block"
      />

      {/* Padding controlado em mobile (clamp era exagerado em telas pequenas) */}
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 relative z-10 border border-border-subtle rounded-sm overflow-hidden">
        <div
          ref={leftRef as React.RefObject<HTMLDivElement>}
          className={`reveal${leftVisible ? ' visible' : ''} px-6 py-12 md:p-[clamp(3rem,7vw,7rem)_clamp(2rem,4.5vw,4.5rem)] flex flex-col justify-center gap-6 border-b md:border-b-0 md:border-r border-border-subtle`}
        >
          <span className="section-label">Potencial</span>
          <h2 className="font-serif text-[clamp(2.5rem,6vw,6rem)] leading-[0.95] text-primary font-normal tracking-[-0.03em]">
            Escale<br />para<br />
            <em
              className="italic text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  'linear-gradient(130deg, hsl(var(--accent-soft)) 0%, hsl(var(--accent)) 50%, hsl(150 70% 88%) 100%)',
              }}
            >
              R$ 100<br />Mil/mês
            </em>
          </h2>
        </div>

        <div
          ref={rightRef as React.RefObject<HTMLDivElement>}
          className={`reveal reveal-delay-1${rightVisible ? ' visible' : ''} px-6 py-12 md:p-[clamp(3rem,7vw,7rem)_clamp(2rem,4.5vw,4.5rem)] flex flex-col justify-center gap-8 bg-surface-2/40`}
        >
          {/* Texto em secondary → contraste forte */}
          <p className="font-sans text-[clamp(1rem,1.6vw,1.15rem)] leading-[1.95] text-secondary font-light">
            Estruturamos modelos de negócio onde a alta liquidez da prata 925 encontra
            tickets médios de R$ 1.000,00. Nossa metodologia de escala é desenhada para
            que parceiros alcancem faturamentos superiores a R$ 100 mil/mês, com margens
            líquidas agressivas e um suporte comercial focado exclusivamente em expansão
            financeira.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <div className="w-6 h-[1.5px] bg-accent" aria-hidden="true" />
            <span className="font-sans text-[0.85rem] text-tertiary tracking-[0.08em]">
              Retorno comprovado em 90 dias
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
