import { useEffect, useRef, useState } from 'react'
import { useReveal } from '@/hooks/useReveal'

function animateCounter(el: HTMLSpanElement, target: number, duration: number) {
  const start = performance.now()
  function update(ts: number) {
    const progress = Math.min((ts - start) / (duration * 1000), 1)
    const ease = 1 - Math.pow(1 - progress, 3)
    el.textContent = String(Math.round(ease * target))
    if (progress < 1) requestAnimationFrame(update)
  }
  requestAnimationFrame(update)
}

export default function Heritage() {
  const { ref: textRef, visible: textVisible } = useReveal()
  const { ref: imgRef, visible: imgVisible } = useReveal()
  const counter925Ref = useRef<HTMLSpanElement>(null)
  const counter100Ref = useRef<HTMLSpanElement>(null)
  const [counted, setCounted] = useState(false)

  useEffect(() => {
    if (!textVisible || counted) return
    setCounted(true)
    if (counter925Ref.current) animateCounter(counter925Ref.current, 925, 2.2)
    if (counter100Ref.current) animateCounter(counter100Ref.current, 100, 1.8)
  }, [textVisible, counted])

  return (
    <section id="artesanal" className="py-24 md:py-32 px-6 md:px-10 relative z-10 border-t border-border-subtle">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div
            ref={textRef as React.RefObject<HTMLDivElement>}
            className={`reveal${textVisible ? ' visible' : ''}`}
          >
            <span className="section-label">Nossa Herança</span>
            <h2 className="font-serif text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.98] text-primary font-normal tracking-[-0.03em] my-6">
              Forjado na<br />
              <em className="italic text-accent">Tradição.</em>
            </h2>

            {[
              'Dedicamos o propósito da Pérola Pratas à ciência artesanal, à elevação da prata 925 e ao estímulo da excelência em cada peça produzida.',
              'Nossas instalações combinam métodos centenários com fundição de precisão moderna, garantindo que cada peça entregue aos nossos parceiros possua integridade estrutural e acabamento inigualável.',
            ].map((p, i) => (
              <p key={i} className="font-sans text-base leading-[1.95] text-secondary font-light mb-4">
                {p}
              </p>
            ))}

            <div className="flex flex-wrap gap-10 md:gap-14 pt-8 border-t border-border-strong mt-6">
              {[
                { ref: counter925Ref, label: 'Prata 925' },
                { ref: counter100Ref, label: 'Produção Própria', suffix: '%' },
              ].map(({ ref, label, suffix }) => (
                <div key={label}>
                  <div className="font-serif text-[clamp(2.5rem,4.5vw,4rem)] text-primary font-medium leading-none tracking-[-0.03em] mb-[0.6rem]">
                    <span ref={ref}>0</span>{suffix}
                  </div>
                  <span className="section-label">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={imgRef as React.RefObject<HTMLDivElement>}
            className={`reveal reveal-delay-1${imgVisible ? ' visible' : ''} relative aspect-[4/5] overflow-hidden group rounded-sm`}
          >
            <img
              src="/hero.png"
              alt="Pérola Pratas — tradição artesanal"
              loading="lazy"
              className="w-full h-full object-cover brightness-[0.85] saturate-[0.7] transition-all duration-[0.9s] group-hover:brightness-[0.95] group-hover:saturate-100 group-hover:scale-[1.03]"
            />
            {/* Overlay para garantir contraste e dar profundidade */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface-0/60 to-transparent pointer-events-none" />
            {/* Cantos decorativos */}
            <div className="absolute w-9 h-9 pointer-events-none top-6 right-6 border-t-[1.5px] border-r-[1.5px] border-accent/60" />
            <div className="absolute w-9 h-9 pointer-events-none bottom-6 left-6 border-b-[1.5px] border-l-[1.5px] border-accent/60" />
          </div>
        </div>
      </div>
    </section>
  )
}
