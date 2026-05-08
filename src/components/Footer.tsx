import { useReveal } from '@/hooks/useReveal'

export default function Footer() {
  const { ref: headRef, visible: headVisible } = useReveal()
  const { ref: bodyRef, visible: bodyVisible } = useReveal()
  const { ref: metaRef, visible: metaVisible } = useReveal()

  return (
    <footer className="relative z-10 bg-surface-0 border-t border-border-strong overflow-hidden">
      {/* Glow sutil de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'radial-gradient(60% 50% at 50% 0%, hsl(var(--accent) / 0.35), transparent 70%)',
        }}
      />

      <div className="relative max-w-[1320px] mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-12">
        {/* Bloco encerramento — manifesto */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`reveal${headVisible ? ' visible' : ''} grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end`}
        >
          <div className="lg:col-span-7">
            <span className="section-label block mb-6">Encerramento</span>
            <h2 className="font-serif text-[clamp(2.4rem,5.4vw,5rem)] leading-[1.02] tracking-[-0.03em] text-primary font-normal">
              O silêncio da prata.
              <br />
              <em className="italic text-accent">A presença da marca.</em>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-border-subtle">
            <p className="font-sans text-base md:text-[1.02rem] leading-[1.9] text-secondary font-light max-w-[440px]">
              Pérola Pratas é construída para revendedores que entendem
              hierarquia, acabamento e intenção. Cada peça que sai do nosso
              atelier carrega o compromisso de elevar a vitrine de quem a
              representa.
            </p>
          </div>
        </div>

        {/* Régua dourada de assinatura */}
        <div
          ref={bodyRef as React.RefObject<HTMLDivElement>}
          className={`reveal${bodyVisible ? ' visible' : ''} mt-20 md:mt-24 flex items-center gap-6`}
          aria-hidden="true"
        >
          <div className="flex-1 h-px bg-border-strong" />
          <span className="text-accent text-[0.55rem] tracking-[0.4em]">◆ ◆ ◆</span>
          <div className="flex-1 h-px bg-border-strong" />
        </div>

        {/* Pilares */}
        <div
          className={`reveal${bodyVisible ? ' visible' : ''} mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12`}
        >
          {[
            { k: '925', l: 'Prata legítima certificada' },
            { k: 'Atacado', l: 'Operação exclusiva para revenda' },
            { k: '∞', l: 'Curadoria contínua de coleção' },
          ].map((p) => (
            <div key={p.k} className="flex flex-col">
              <span className="font-serif text-[2.4rem] md:text-[2.8rem] leading-none text-accent font-normal">
                {p.k}
              </span>
              <span className="mt-3 font-sans text-[0.78rem] tracking-[0.2em] uppercase text-tertiary font-medium">
                {p.l}
              </span>
            </div>
          ))}
        </div>

        {/* Assinatura institucional */}
        <div
          ref={metaRef as React.RefObject<HTMLDivElement>}
          className={`reveal${metaVisible ? ' visible' : ''} mt-20 md:mt-24 pt-10 border-t border-border-subtle flex flex-col md:flex-row md:items-center md:justify-between gap-8`}
        >
          <div className="flex items-center gap-5">
            <img
              src="/logo.png"
              alt="Pérola Pratas"
              className="h-9 w-auto opacity-90"
            />
            <div className="hidden md:block h-8 w-px bg-border-strong" aria-hidden="true" />
            <span className="font-sans text-[0.72rem] tracking-[0.24em] uppercase text-tertiary">
              Atacado · Prata 925
            </span>
          </div>

          <div className="flex flex-col md:items-end gap-2">
            <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-tertiary">
              © {new Date().getFullYear()} Pérola Pratas
            </span>
            <span className="font-sans text-[0.68rem] tracking-[0.18em] uppercase text-tertiary/70">
              Todos os direitos reservados
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
