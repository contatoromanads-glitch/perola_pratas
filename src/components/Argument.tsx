import { useReveal } from '@/hooks/useReveal'

export default function Argument() {
  const { ref: leftRef, visible: leftVisible } = useReveal()
  const { ref: rightRef, visible: rightVisible } = useReveal()

  return (
    <section id="atacado" className="bg-[#011a12] relative overflow-hidden py-32 px-10">
      {/* Ghost */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[clamp(16rem,28vw,44rem)] leading-[0.85] text-white opacity-[0.04] font-semibold tracking-[-0.08em] pointer-events-none select-none whitespace-nowrap italic">
        100
      </div>

      <img src="/logo.png" alt="" aria-hidden="true" className="absolute right-[5%] bottom-[5%] w-[200px] opacity-5 invert pointer-events-none" />

      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 relative z-10">
        <div ref={leftRef as React.RefObject<HTMLDivElement>}
          className={`reveal${leftVisible ? ' visible' : ''} p-[clamp(4.5rem,9vw,9rem)_clamp(2.5rem,5vw,5.5rem)] flex flex-col justify-center gap-6 border-r border-white/5`}>
          <span className="section-label text-[#10b981]/90">Potencial</span>
          <h2 className="font-serif text-[clamp(3rem,6.5vw,6.5rem)] leading-[0.92] text-white font-normal tracking-[-0.03em]">
            Escale<br />para<br />
            <em className="italic text-transparent bg-clip-text" style={{
              backgroundImage: 'linear-gradient(130deg, #7dd9c4 0%, #00c4a0 50%, #a0f0e0 100%)',
            }}>R$ 100<br />Mil/mês</em>
          </h2>
        </div>

        <div ref={rightRef as React.RefObject<HTMLDivElement>}
          className={`reveal reveal-delay-1${rightVisible ? ' visible' : ''} p-[clamp(4.5rem,9vw,9rem)_clamp(2.5rem,5vw,5.5rem)] flex flex-col justify-center gap-8 bg-white/5`}>
          <p className="font-sans text-[clamp(1rem,1.6vw,1.15rem)] leading-[2] text-white/70 font-light">
            Estruturamos modelos de negócio onde a alta liquidez da prata 925 encontra
            tickets médios de R$ 1.000,00. Nossa metodologia de escala é desenhada para
            que parceiros alcancem faturamentos superiores a R$ 100 mil/mês, com margens
            líquidas agressivas e um suporte comercial focado exclusivamente em expansão
            financeira.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <div className="w-6 h-[1.5px] bg-teal" />
            <span className="font-sans text-[0.85rem] text-white/55 tracking-[0.08em]">
              Retorno comprovado em 90 dias
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
