import { useReveal } from '../hooks/useReveal'

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
    icon: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>,
  },
]

function DiffRow({ num, title, desc, icon, delay = 0 }: {
  num: string; title: string; desc: string; icon: React.ReactNode; delay?: number
}) {
  const { ref, visible } = useReveal()
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal${visible ? ' visible' : ''}${delay ? ` reveal-delay-${delay}` : ''}`}
      style={{
        display: 'grid', gridTemplateColumns: '5rem 1fr 2px 2.5fr',
        alignItems: 'center', gap: '3rem', padding: '2.75rem 0',
        borderBottom: '1px solid var(--border)', cursor: 'default', transition: 'background 0.3s',
      }}
      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
    >
      <span style={{
        fontFamily: "'Cormorant Garamond', serif", fontSize: '3.5rem',
        color: 'rgba(255,255,255,0.08)', fontWeight: 300, letterSpacing: '-0.02em',
        lineHeight: 1, userSelect: 'none',
      }}>{num}</span>
      <div>
        <div style={{
          width: 44, height: 44, border: '1.5px solid rgba(16,185,129,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem',
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981"
            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
        </div>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.6rem, 2.2vw, 2.2rem)',
          color: 'var(--forest)', fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.1,
        }}>{title}</div>
      </div>
      <div style={{ height: 60, background: 'var(--border)', width: 1 }} />
      <p style={{
        fontFamily: "'Jost', sans-serif", fontSize: '1rem', lineHeight: 1.9,
        color: 'var(--forest-soft)', fontWeight: 300, maxWidth: 420,
      }}>{desc}</p>
    </div>
  )
}

export default function Differential() {
  const { ref: headerRef, visible: headerVisible } = useReveal()

  return (
    <section id="colecoes" style={{ padding: '8rem 2.5rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal${headerVisible ? ' visible' : ''}`}
          style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '4rem' }}>
          <span className="section-label">Diferencial</span>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.7rem, 2.6vw, 2.5rem)', color: 'var(--forest)',
            fontWeight: 400, letterSpacing: '-0.01em',
          }}>O Diferencial Pérola Pratas</h2>
        </div>

        <div style={{ borderTop: '1px solid var(--border)' }}>
          {ROWS.map((row, i) => (
            <DiffRow key={row.num} {...row} delay={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
