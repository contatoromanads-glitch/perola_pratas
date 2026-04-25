import { useReveal } from '../hooks/useReveal'

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
      className={`reveal${visible ? ' visible' : ''}${delay ? ` reveal-delay-${delay}` : ''}`}
      style={{
        background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(12px)', padding: '3rem 2.5rem',
        display: 'flex', flexDirection: 'column', gap: '1.5rem',
        position: 'relative', overflow: 'hidden',
        transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.boxShadow = '0 24px 64px rgba(16,185,129,0.18)'
        e.currentTarget.style.borderColor = 'rgba(16,185,129,0.6)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = ''
        e.currentTarget.style.boxShadow = ''
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
      }}
    >
      <span style={{
        position: 'absolute', top: '0.5rem', right: '1.25rem',
        fontFamily: "'Cormorant Garamond', serif", fontSize: '6rem',
        color: 'var(--forest)', opacity: 0.04, fontWeight: 300,
        lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
      }}>{num}</span>
      <div style={{
        width: 46, height: 46, display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '1.5px solid rgba(16,185,129,0.35)', background: 'rgba(16,185,129,0.08)',
      }}>
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#10b981"
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
      </div>
      <div style={{
        fontFamily: "'Cormorant Garamond', serif", fontSize: '1.75rem',
        color: 'var(--forest)', fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.1,
      }}>{title}</div>
      <p style={{
        fontFamily: "'Jost', sans-serif", fontSize: '0.97rem', lineHeight: 1.9,
        color: 'var(--forest-soft)', fontWeight: 300,
      }}>{desc}</p>
    </div>
  )
}

export default function Advantage() {
  const { ref: headerRef, visible: headerVisible } = useReveal()

  return (
    <section style={{ padding: '8rem 2.5rem', position: 'relative', zIndex: 1, borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal${headerVisible ? ' visible' : ''}`}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'end', marginBottom: '4.5rem' }}>
          <div>
            <span className="section-label" style={{ display: 'block' }}>À Vantagem</span>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.4rem, 4.2vw, 4rem)', color: 'var(--forest)',
              fontWeight: 400, letterSpacing: '-0.025em', lineHeight: 1.05, marginTop: '1.25rem',
            }}>Além da Transação</h2>
          </div>
          <p style={{
            fontFamily: "'Jost', sans-serif", fontSize: '1rem', lineHeight: 1.9,
            color: 'var(--forest-soft)', fontWeight: 300, alignSelf: 'end',
          }}>
            Fornecemos mais do que estoque; oferecemos uma classe de ativos curada
            para maximizar sua margem e elevar a narrativa da sua marca.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {CARDS.map((card, i) => <AdvCard key={card.num} {...card} delay={i} />)}
        </div>
      </div>
    </section>
  )
}
