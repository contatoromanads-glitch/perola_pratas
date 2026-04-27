import { useReveal } from '@/hooks/useReveal'

const CARDS = [
  {
    num: '01',
    title: 'Margens Otimizadas',
    desc: 'Estruturas de aquisição direto da fonte garantindo lucratividade excepcional sem comprometer o valor intrínseco da prata pura.',
    icon: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>,
  },
  {
    num: '02',
    title: 'Arquivos Exclusivos',
    desc: 'Acesso a designs de tiragem limitada e coleções sob medida, permitindo que seu catálogo permaneça distinto em um mercado saturado.',
    icon: <><path d="M6 3h12l4 6-10 13L2 9z" /><path d="M11 3L8 9l4 13 4-13-3-6" /><path d="M2 9h20" /></>,
  },
  {
    num: '03',
    title: 'Suporte Editorial',
    desc: 'Acesso à nossa biblioteca de ativos de alta resolução com qualidade de lookbook para garantir que sua presença digital reflita puro luxo.',
    icon: <><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" /><path d="M19 3v4" /><path d="M21 5h-4" /></>,
  },
]

function AdvCard({ num, title, desc, icon, delay = 0 }: {
  num: string; title: string; desc: string; icon: React.ReactNode; delay?: number
}) {
  const { ref, visible } = useReveal()
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal${visible ? ' visible' : ''}${delay ? ` reveal-delay-${delay}` : ''} bg-black/20 border border-white/10 backdrop-blur-[12px] py-12 px-10 flex flex-col gap-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_24px_64px_rgba(16,185,129,0.18)] hover:border-[#10b981]/60`}
    >
      <span className="absolute top-2 right-5 font-serif text-[6rem] text-forest opacity-[0.04] font-light leading-none pointer-events-none select-none">
        {num}
      </span>
      <div className="w-[46px] h-[46px] flex items-center justify-center border-[1.5px] border-[#10b981]/35 bg-[#10b981]/[0.08]">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#10b981"
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
      </div>
      <div className="font-serif text-[1.75rem] text-forest font-normal tracking-[-0.01em] leading-[1.1]">
        {title}
      </div>
      <p className="font-sans text-[0.97rem] leading-[1.9] text-forest-soft font-light">
        {desc}
      </p>
    </div>
  )
}

export default function Advantage() {
  const { ref: headerRef, visible: headerVisible } = useReveal()

  return (
    <section className="py-32 px-10 relative z-10 border-t border-border">
      <div className="max-w-[1320px] mx-auto">
        <div ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal${headerVisible ? ' visible' : ''} grid grid-cols-1 md:grid-cols-2 gap-16 items-end mb-[4.5rem]`}>
          <div>
            <span className="section-label block">À Vantagem</span>
            <h2 className="font-serif text-[clamp(2.4rem,4.2vw,4rem)] text-forest font-normal tracking-[-0.025em] leading-[1.05] mt-5">
              Além da Transação
            </h2>
          </div>
          <p className="font-sans text-base leading-[1.9] text-forest-soft font-light md:justify-self-end">
            Fornecemos mais do que estoque; oferecemos uma classe de ativos curada
            para maximizar sua margem e elevar a narrativa da sua marca.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card, i) => <AdvCard key={card.num} {...card} delay={i} />)}
        </div>
      </div>
    </section>
  )
}
