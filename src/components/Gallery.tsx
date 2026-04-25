import { useReveal } from '../hooks/useReveal'

const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?w=600&q=80',
    alt: 'Anéis', label: 'Anéis', title: 'Conjunto Obsidian Band', sub: 'Atacado Nível 1',
    style: { marginTop: '5rem', aspectRatio: '3/4' },
    delay: 0,
  },
  {
    src: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
    alt: 'Correntes', label: 'Correntes Assinatura', title: 'Corrente Lumina Anchor', sub: 'Atacado Nível 2',
    style: { boxShadow: '0 40px 100px rgba(0,0,0,0.2)', aspectRatio: '4/5' },
    titleStyle: { fontSize: '1.45rem' },
    delay: 1,
  },
  {
    src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    alt: 'Pulseiras', label: 'Pulseiras', title: 'Braceletes Arquitetônicos', sub: 'Atacado Nível 1',
    style: { marginTop: '-2rem', aspectRatio: '1/1' },
    delay: 2,
  },
]

export default function Gallery() {
  const { ref: headerRef, visible: headerVisible } = useReveal()
  const { ref: footerRef, visible: footerVisible } = useReveal()

  return (
    <section id="portfolio" style={{
      padding: '8rem 2.5rem', position: 'relative', zIndex: 1,
      background: 'rgba(0,0,0,0.12)', borderTop: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal${headerVisible ? ' visible' : ''}`}
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', marginBottom: '4rem' }}>
          <div>
            <span className="section-label" style={{ display: 'block', marginBottom: '1.25rem' }}>Nossa Curadoria</span>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.4rem, 4.2vw, 4rem)', color: 'var(--forest)',
              fontWeight: 400, letterSpacing: '-0.025em', lineHeight: 1.05,
            }}>Arquivos Curados</h2>
          </div>
          <p style={{
            fontFamily: "'Jost', sans-serif", fontSize: '1rem', color: 'var(--forest-soft)',
            lineHeight: 1.8, maxWidth: 340, fontWeight: 300, textAlign: 'right',
          }}>
            Uma seleção das nossas silhuetas mais cobiçadas, estruturadas para ambientes de varejo premium.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '4fr 5fr 3fr', gap: '1.5rem', alignItems: 'start' }}>
          {IMAGES.map((img) => {
            const { ref, visible } = useReveal()
            return (
              <div key={img.alt}
                ref={ref as React.RefObject<HTMLDivElement>}
                className={`reveal${visible ? ' visible' : ''}${img.delay ? ` reveal-delay-${img.delay}` : ''}`}
                style={img.style}>
                <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--forest-mid)', cursor: 'pointer', aspectRatio: img.style.aspectRatio }}>
                  <img src={img.src} alt={img.alt} style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    opacity: 0.75, transition: 'opacity 0.6s, transform 0.8s', display: 'block',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = '0.95'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '0.75'; e.currentTarget.style.transform = ''; }}
                  />
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.75rem',
                    background: 'linear-gradient(to top, rgba(6,78,59,0.92) 0%, transparent 100%)',
                  }}>
                    <span style={{
                      fontFamily: "'Jost', sans-serif", fontSize: '0.68rem', fontWeight: 600,
                      letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--teal)',
                      display: 'block', marginBottom: '0.4rem',
                    }}>{img.label}</span>
                    <div style={{
                      fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem',
                      color: '#fff', fontWeight: 400, letterSpacing: '-0.01em', marginBottom: '0.3rem',
                      ...(img.titleStyle ?? {}),
                    }}>{img.title}</div>
                    <div style={{
                      fontFamily: "'Jost', sans-serif", fontSize: '0.8rem',
                      color: 'rgba(255,255,255,0.55)', fontWeight: 300,
                    }}>{img.sub}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div ref={footerRef as React.RefObject<HTMLDivElement>}
          className={`reveal${footerVisible ? ' visible' : ''}`}
          style={{ marginTop: '4rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          <a href="#lookbook" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            fontFamily: "'Jost', sans-serif", fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--teal-dark)', textDecoration: 'none', transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.65')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Ver Lookbook Completo
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>
      </div>
    </section>
  )
}
