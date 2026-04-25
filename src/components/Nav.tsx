export default function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(10,50,28,0.88)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      animation: 'fadeIn 0.6s ease forwards',
    }}>
      <div style={{
        maxWidth: 1320, margin: '0 auto', padding: '0 2.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68,
      }}>
        <a href="#" style={{ textDecoration: 'none' }}>
          <img src="/logo.png" alt="Pérola Pratas" className="logo-img"
            style={{ height: 36, display: 'block' }} />
        </a>
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {[
            { href: '#colecoes', label: 'Coleções' },
            { href: '#atacado',  label: 'Atacado' },
            { href: '#artesanal', label: 'Artesanal' },
            { href: '#portfolio', label: 'Portfólio' },
          ].map(({ href, label }) => (
            <a key={href} href={href} style={{
              fontFamily: "'Jost', sans-serif", fontSize: '0.72rem', fontWeight: 500,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
            >{label}</a>
          ))}
          <a href="#cadastro" style={{
            fontFamily: "'Jost', sans-serif", fontSize: '0.7rem', fontWeight: 600,
            letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--teal)',
            textDecoration: 'none', padding: '0.55rem 1.25rem',
            border: '1.5px solid var(--teal)', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--teal)'; e.currentTarget.style.color = '#022c22'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--teal)'; }}
          >Aplicar Agora</a>
        </div>
      </div>
    </nav>
  )
}
