export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      paddingTop: 68, position: 'relative', overflow: 'hidden',
    }}>
      {/* Grid bg */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(6,78,59,0.07) 1px, transparent 1px)',
        backgroundSize: '32px 32px', pointerEvents: 'none',
        maskImage: 'radial-gradient(ellipse 70% 90% at 30% 50%, black, transparent)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 90% at 30% 50%, black, transparent)',
      }} />

      {/* Ghost text */}
      <div style={{
        position: 'absolute', right: '-4%', bottom: '-12%',
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(18rem, 36vw, 55rem)', lineHeight: 0.8,
        color: 'var(--forest)', fontWeight: 600, opacity: 0.04,
        letterSpacing: '-0.06em', pointerEvents: 'none', userSelect: 'none', fontStyle: 'italic',
      }}>925</div>

      <div style={{
        maxWidth: 1320, margin: '0 auto', padding: '0 2.5rem', width: '100%',
        display: 'grid', gridTemplateColumns: '5fr 4fr',
        alignItems: 'center', gap: '2rem', position: 'relative', zIndex: 1,
      }}>
        {/* LEFT */}
        <div style={{ display: 'flex', flexDirection: 'column', animation: 'fadeUp 1s ease forwards' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ width: 28, height: 2, background: 'var(--teal)' }} />
            <span className="section-label">Parceiros B2B Exclusivos</span>
          </div>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(4rem, 8.5vw, 8.5rem)', lineHeight: 0.92,
            color: 'var(--forest)', fontWeight: 400, letterSpacing: '-0.025em', marginBottom: '1.75rem',
          }}>
            O<br />
            <em style={{
              fontStyle: 'italic',
              background: 'linear-gradient(130deg, #34d399 0%, #6ee7b7 50%, #a7f3d0 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Reflexo</em><br />
            Curado.
          </h1>

          <p style={{
            fontFamily: "'Jost', sans-serif", fontSize: '1.1rem', lineHeight: 1.85,
            color: 'var(--forest-soft)', maxWidth: 380, fontWeight: 300, marginBottom: '2.25rem',
          }}>
            Eleve seu portfólio com prata de atacado de qualidade editorial.
            Feito para visionários, desenhado para distinção.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a href="#cadastro" className="btn-teal">Analisar Ser de Atração</a>
            <a href="#colecoes" className="btn-outline">Explorar Coleções</a>
          </div>

          <div style={{
            display: 'flex', gap: '3rem', paddingTop: '2rem',
            borderTop: '1.5px solid rgba(6,78,59,0.12)',
          }}>
            {[
              { value: '925', label: 'Prata Pura' },
              { value: 'B2B', label: 'Exclusivo' },
              { value: '100%', label: 'Fab. Própria' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem',
                  color: 'var(--forest)', fontWeight: 500, letterSpacing: '-0.02em',
                  lineHeight: 1, marginBottom: '0.4rem',
                }}>{value}</div>
                <div style={{
                  fontFamily: "'Jost', sans-serif", fontSize: '0.72rem', fontWeight: 600,
                  letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--muted)',
                }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
          <video
            src="/jew.mp4"
            autoPlay muted loop playsInline
            style={{
              maxHeight: '78vh', width: '100%', objectFit: 'contain',
              filter: 'drop-shadow(0 30px 80px rgba(0,0,0,0.5)) drop-shadow(0 0 60px rgba(52,211,153,0.15))',
              animation: 'float 6s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      {/* Logo watermark */}
      <img src="/logo.png" alt="" className="logo-img" aria-hidden="true" style={{
        position: 'absolute', top: '50%', right: '2.5rem',
        transform: 'translateY(-50%)', opacity: 0.07, pointerEvents: 'none', width: 320,
      }} />

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2.5rem', left: '2.5rem',
        display: 'flex', alignItems: 'center', gap: '1rem',
        animation: 'fadeIn 1.5s 1.2s ease both',
      }}>
        <div style={{ width: 28, height: 1, background: 'rgba(255,255,255,0.15)' }} />
        <span style={{
          fontFamily: "'Jost', sans-serif", fontSize: '0.68rem',
          letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--muted)',
        }}>Scroll</span>
      </div>
    </section>
  )
}
