import { useEffect, useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'

function animateCounter(
  el: HTMLSpanElement,
  target: number,
  duration: number,
) {
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
    <section id="artesanal" style={{
      padding: '8rem 2.5rem', position: 'relative', zIndex: 1,
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <div ref={textRef as React.RefObject<HTMLDivElement>}
            className={`reveal${textVisible ? ' visible' : ''}`}>
            <span className="section-label">Nossa Herança</span>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.75rem, 5.5vw, 5rem)', lineHeight: 0.95,
              color: 'var(--forest)', fontWeight: 400, letterSpacing: '-0.03em',
              margin: '1.5rem 0 2rem',
            }}>
              Forjado na<br />
              <em style={{ fontStyle: 'italic', color: 'var(--teal)' }}>Tradição.</em>
            </h2>
            {[
              'Dedicamos o propósito da Pérola Pratas à ciência artesanal, à elevação da prata 925 e ao estímulo da excelência em cada peça produzida.',
              'Nossas instalações combinam métodos centenários com fundição de precisão moderna, garantindo que cada peça entregue aos nossos parceiros possua integridade estrutural e acabamento inigualável.',
            ].map((p, i) => (
              <p key={i} style={{
                fontFamily: "'Jost', sans-serif", fontSize: '1rem', lineHeight: 2,
                color: 'var(--forest-soft)', fontWeight: 300, marginBottom: '1rem',
              }}>{p}</p>
            ))}

            <div style={{
              display: 'flex', gap: '3.5rem', paddingTop: '2rem',
              borderTop: '1.5px solid var(--border)', marginTop: '1rem',
            }}>
              {[
                { ref: counter925Ref, label: 'Prata 925' },
                { ref: counter100Ref, label: 'Produção Própria', suffix: '%' },
              ].map(({ ref, label, suffix }) => (
                <div key={label}>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(2.75rem, 4.5vw, 4rem)', color: 'var(--forest)',
                    fontWeight: 500, lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '0.6rem',
                  }}>
                    <span ref={ref}>0</span>{suffix}
                  </div>
                  <span className="section-label">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div ref={imgRef as React.RefObject<HTMLDivElement>}
            className={`reveal reveal-delay-1${imgVisible ? ' visible' : ''}`}
            style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}
            onMouseEnter={e => {
              const img = e.currentTarget.querySelector('img') as HTMLImageElement
              if (img) { img.style.filter = 'brightness(0.9) saturate(1)'; img.style.transform = 'scale(1.03)'; }
            }}
            onMouseLeave={e => {
              const img = e.currentTarget.querySelector('img') as HTMLImageElement
              if (img) { img.style.filter = 'brightness(0.85) saturate(0.7)'; img.style.transform = ''; }
            }}
          >
            <img src="/hero.png" alt="Pérola Pratas — tradição artesanal" style={{
              width: '100%', height: '100%', objectFit: 'cover',
              filter: 'brightness(0.85) saturate(0.7)', transition: 'filter 0.9s, transform 0.9s',
            }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(6,78,59,0.5) 0%, transparent 55%)',
              pointerEvents: 'none',
            }} />
            {/* Corners */}
            {[
              { style: { top: '1.5rem', right: '1.5rem', borderTop: '1.5px solid rgba(16,185,129,0.5)', borderRight: '1.5px solid rgba(16,185,129,0.5)' } },
              { style: { bottom: '1.5rem', left: '1.5rem', borderBottom: '1.5px solid rgba(16,185,129,0.5)', borderLeft: '1.5px solid rgba(16,185,129,0.5)' } },
            ].map((corner, i) => (
              <div key={i} style={{
                position: 'absolute', width: 36, height: 36, pointerEvents: 'none', ...corner.style,
              }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
