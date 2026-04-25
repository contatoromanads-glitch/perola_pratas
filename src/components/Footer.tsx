export default function Footer() {
  return (
    <footer style={{
      background: '#0a3a1e', borderTop: '1px solid rgba(255,255,255,0.08)',
      padding: '5rem 2.5rem 3rem', textAlign: 'center', position: 'relative', zIndex: 1,
    }}>
      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        <img src="/logo.png" alt="Pérola Pratas" className="logo-img"
          style={{ height: 44, marginBottom: '2rem' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', margin: '2.5rem 0' }}>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          <span style={{ color: 'var(--teal)', fontSize: '0.5rem' }}>◆</span>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: 1.15,
          color: 'var(--forest)', fontWeight: 400, letterSpacing: '-0.02em', marginBottom: '1.25rem',
        }}>
          Eleve seu negócio ao patamar<br />
          <em style={{ fontStyle: 'italic', color: 'var(--teal)' }}>da alta joalheria.</em>
        </h2>

        <p style={{
          fontFamily: "'Jost', sans-serif", fontSize: '1rem', lineHeight: 1.9,
          color: 'var(--muted)', fontWeight: 300, marginBottom: '2.5rem',
        }}>
          Junte-se a uma rede estruturada de revendedores e leve mais do que luxo.
        </p>

        <a href="#cadastro" className="btn-outline" style={{ fontSize: '0.72rem' }}>
          Solicitar Acesso ao Atacado
        </a>

        <p style={{
          fontFamily: "'Jost', sans-serif", fontSize: '0.7rem',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.25)', marginTop: '4rem',
        }}>
          © {new Date().getFullYear()} Pérola Pratas B2B — Todos os Direitos Reservados
        </p>
      </div>
    </footer>
  )
}
