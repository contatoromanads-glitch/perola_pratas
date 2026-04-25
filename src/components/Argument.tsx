import { useReveal } from '../hooks/useReveal'

export default function Argument() {
  const { ref: leftRef, visible: leftVisible } = useReveal()
  const { ref: rightRef, visible: rightVisible } = useReveal()

  return (
    <section id="atacado" style={{ background: '#011a12', position: 'relative', overflow: 'hidden', padding: '8rem 2.5rem' }}>
      {/* Ghost */}
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%,-50%)',
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(16rem, 28vw, 44rem)', lineHeight: 0.85,
        color: '#fff', opacity: 0.04, fontWeight: 600,
        letterSpacing: '-0.08em', pointerEvents: 'none', userSelect: 'none',
        whiteSpace: 'nowrap', fontStyle: 'italic',
      }}>100</div>

      <img src="/logo.png" alt="" aria-hidden="true" style={{
        position: 'absolute', right: '5%', bottom: '5%', width: 200,
        opacity: 0.05, filter: 'invert(1)', pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 1320, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        position: 'relative', zIndex: 1,
      }}>
        <div ref={leftRef as React.RefObject<HTMLDivElement>}
          className={`reveal${leftVisible ? ' visible' : ''}`}
          style={{
            padding: 'clamp(4.5rem,9vw,9rem) clamp(2.5rem,5vw,5.5rem)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.5rem',
            borderRight: '1px solid rgba(255,255,255,0.08)',
          }}>
          <span className="section-label" style={{ color: 'rgba(16,185,129,0.9)' }}>Potencial</span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(3rem, 6.5vw, 6.5rem)', lineHeight: 0.92,
            color: '#fff', fontWeight: 400, letterSpacing: '-0.03em',
          }}>
            Escale<br />para<br />
            <em style={{
              fontStyle: 'italic',
              background: 'linear-gradient(130deg, #7dd9c4 0%, #00c4a0 50%, #a0f0e0 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>R$ 100<br />Mil/mês</em>
          </h2>
        </div>

        <div ref={rightRef as React.RefObject<HTMLDivElement>}
          className={`reveal reveal-delay-1${rightVisible ? ' visible' : ''}`}
          style={{
            padding: 'clamp(4.5rem,9vw,9rem) clamp(2.5rem,5vw,5.5rem)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2rem',
            background: 'rgba(255,255,255,0.04)',
          }}>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', lineHeight: 2,
            color: 'rgba(255,255,255,0.7)', fontWeight: 300,
          }}>
            Estruturamos modelos de negócio onde a alta liquidez da prata 925 encontra
            tickets médios de R$ 1.000,00. Nossa metodologia de escala é desenhada para
            que parceiros alcancem faturamentos superiores a R$ 100 mil/mês, com margens
            líquidas agressivas e um suporte comercial focado exclusivamente em expansão
            financeira.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '0.5rem' }}>
            <div style={{ width: 24, height: 1.5, background: 'var(--teal)' }} />
            <span style={{
              fontFamily: "'Jost', sans-serif", fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.55)', letterSpacing: '0.08em',
            }}>Retorno comprovado em 90 dias</span>
          </div>
        </div>
      </div>
    </section>
  )
}
