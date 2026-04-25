import { useReveal } from '../hooks/useReveal'

export default function LeadCapture() {
  const { ref: h2Ref, visible: h2Visible } = useReveal()
  const { ref: pRef, visible: pVisible } = useReveal()
  const { ref: btnRef, visible: btnVisible } = useReveal()

  return (
    <section id="cadastro" style={{
      background: '#011a12', textAlign: 'center',
      position: 'relative', overflow: 'hidden', padding: '8rem 2.5rem',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '28px 28px', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(16,185,129,0.14) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', maxWidth: 640, margin: '0 auto', zIndex: 1 }}>
        <img src="/logo.png" alt="Pérola Pratas" style={{
          height: 48, marginBottom: '1rem', filter: 'invert(1)', opacity: 0.9,
        }} />
        <span className="section-label" style={{ display: 'block', color: 'rgba(16,185,129,0.9)', marginBottom: '0.5rem' }}>
          Aplicação
        </span>

        <h2 ref={h2Ref as React.RefObject<HTMLHeadingElement>}
          className={`reveal${h2Visible ? ' visible' : ''}`}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.6rem, 5.5vw, 4.5rem)', lineHeight: 1.1,
            color: '#fff', fontWeight: 400, letterSpacing: '-0.025em', margin: '2rem 0 1.75rem',
          }}>
          Aplique para ser um<br />
          <em style={{ fontStyle: 'italic', color: 'var(--teal)' }}>Revendedor Exclusivo</em>
        </h2>

        <p ref={pRef as React.RefObject<HTMLParagraphElement>}
          className={`reveal reveal-delay-1${pVisible ? ' visible' : ''}`}
          style={{
            fontFamily: "'Jost', sans-serif", fontSize: '1.05rem', lineHeight: 1.9,
            color: 'rgba(255,255,255,0.6)', fontWeight: 300, marginBottom: '3rem',
          }}>
          Preencha as condições de parceiro revendedor e faça parte de uma rede
          exclusiva de distribuidores da alta joalheria em prata 925.
        </p>

        <a ref={btnRef as React.RefObject<HTMLAnchorElement>}
          className={`btn-teal reveal reveal-delay-2${btnVisible ? ' visible' : ''}`}
          href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20P%C3%A9rola%20Pratas%20e%20gostaria%20de%20aplicar%20para%20ser%20um%20Revendedor%20Exclusivo."
          target="_blank" rel="noopener noreferrer"
          style={{
            fontSize: '0.78rem', letterSpacing: '0.18em',
            padding: '1.15rem 3rem', background: 'var(--teal)', color: '#fff',
          }}
        >
          Iniciar Conversa no WhatsApp
        </a>
      </div>
    </section>
  )
}
