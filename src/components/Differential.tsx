import { useReveal } from '@/hooks/useReveal'

const ROWS = [
  {
    num: '01',
    title: 'Fabricação Própria',
    desc: 'Controle absoluto dos nossos padrões — exclusividade e distinção em cada detalhe da peça.',
    icon: <path d="M7 17l9.2-9.2M17 17V7H7" />,
  },
  {
    num: '02',
    title: 'Garantia Vitalícia',
    desc: 'Prata 925 legítima. Garantia para você e confiança total para o seu cliente final.',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    num: '03',
    title: 'Margem de Lucro',
    desc: 'Preços de atacado otimizados para maximizar o seu faturamento e escalar o seu negócio.',
    icon: (
      <>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </>
    ),
  },
]

function DiffRow({
  num, title, desc, icon, delay = 0,
}: {
  num: string; title: string; desc: string; icon: React.ReactNode; delay?: number
}) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal${visible ? ' visible' : ''}${delay ? ` reveal-delay-${delay}` : ''}
        grid grid-cols-1 md:grid-cols-[4rem_1fr_2.5fr] items-start md:items-center
        gap-6 md:gap-12 py-10 md:py-11 border-b border-border-subtle
        motion-surface group cursor-default hover:bg-surface-2/40 px-2 md:px-0`}
    >
      {/* Numeração decorativa — agora ligeiramente mais visível */}
      <span
        aria-hidden="true"
        className="font-serif text-[3.5rem] text-accent/15 font-light tracking-[-0.02em] leading-none select-none transition-colors duration-700 group-hover:text-accent/25"
      >
        {num}
      </span>

      <div>
        <div className="w-11 h-11 border-[1.5px] border-accent/50 flex items-center justify-center mb-4 rounded-sm transition-transform duration-700 group-hover:scale-105">
          <svg
            width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            className="text-accent" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          >
            {icon}
          </svg>
        </div>
        <div className="font-serif text-[clamp(1.5rem,2.2vw,2.2rem)] text-primary font-normal tracking-[-0.01em] leading-[1.15]">
          {title}
        </div>
      </div>

      {/* Descrição em secondary → AA */}
      <p className="font-sans text-base leading-[1.85] text-secondary font-light max-w-[460px]">
        {desc}
      </p>
    </div>
  )
}

export default function Differential() {
  const { ref: headerRef, visible: headerVisible } = useReveal()

  return (
    <section id="colecoes" className="py-24 md:py-32 px-6 md:px-10 relative z-10">
      <div className="max-w-[1320px] mx-auto">
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal${headerVisible ? ' visible' : ''} flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-12 md:mb-16`}
        >
          <span className="section-label">Diferencial</span>
          <div className="hidden md:block flex-1 h-px bg-border-strong" aria-hidden="true" />
          <h2 className="font-serif text-[clamp(1.7rem,2.6vw,2.5rem)] text-primary font-normal tracking-[-0.01em]">
            O Diferencial Pérola Pratas
          </h2>
        </div>

        <div className="border-t border-border-subtle">
          {ROWS.map((row, i) => (
            <DiffRow key={row.num} {...row} delay={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
