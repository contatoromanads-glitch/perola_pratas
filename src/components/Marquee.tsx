const ITEMS = [
  'Prata 925 Legítima', 'Fabricação Própria', 'Garantia Vitalícia',
  'Atacado Exclusivo', 'Alta Joalheria', 'Margens Otimizadas', 'Suporte Editorial',
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div style={{
      background: 'var(--forest)', padding: '1.1rem 0',
      overflow: 'hidden', position: 'relative', zIndex: 2,
    }}>
      <div style={{
        display: 'flex', whiteSpace: 'nowrap',
        animation: 'marquee 28s linear infinite',
      }}>
        {doubled.map((text, i) => (
          <span key={i} style={{
            fontFamily: "'Jost', sans-serif", fontSize: '0.72rem', fontWeight: 500,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.55)', padding: '0 2.5rem',
          }}>
            <span style={{ color: 'var(--teal)', marginRight: '2.5rem' }}>◆</span>
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
