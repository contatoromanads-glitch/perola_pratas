import { useReveal } from '@/hooks/useReveal'

export default function LeadCapture() {
  const { ref: h2Ref, visible: h2Visible } = useReveal()
  const { ref: pRef, visible: pVisible } = useReveal()
  const { ref: btnRef, visible: btnVisible } = useReveal()

  return (
    <section id="cadastro" className="bg-surface-0 text-center relative overflow-hidden py-24 md:py-32 px-6 md:px-10">
      {/* Pattern de pontos decorativo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--text-primary) / 0.05) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Glow accent */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent) / 0.16) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-[640px] mx-auto z-10 flex flex-col items-center">
        <img src="/logo.png" alt="Pérola Pratas" className="h-12 mb-4 opacity-90 brightness-0 invert" />
        <span className="section-label block mb-2">Aplicação</span>

        <h2
          ref={h2Ref as React.RefObject<HTMLHeadingElement>}
          className={`reveal${h2Visible ? ' visible' : ''} font-serif text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.1] text-primary font-normal tracking-[-0.025em] my-7`}
        >
          Aplique para ser um<br />
          <em className="italic text-accent">Revendedor Exclusivo</em>
        </h2>

        <p
          ref={pRef as React.RefObject<HTMLParagraphElement>}
          className={`reveal reveal-delay-1${pVisible ? ' visible' : ''} font-sans text-[1.05rem] leading-[1.9] text-secondary font-light mb-12 max-w-[520px]`}
        >
          Preencha as condições de parceiro revendedor e faça parte de uma rede
          exclusiva de distribuidores da alta joalheria em prata 925.
        </p>

        {/* CTA primário com classe global → contraste 8.5:1 garantido */}
        <a
          ref={btnRef as React.RefObject<HTMLAnchorElement>}
          className={`reveal reveal-delay-2${btnVisible ? ' visible' : ''} btn-primary`}
          href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20P%C3%A9rola%20Pratas%20e%20gostaria%20de%20aplicar%20para%20ser%20um%20Revendedor%20Exclusivo."
          target="_blank"
          rel="noopener noreferrer"
        >
          Iniciar Conversa no WhatsApp
        </a>
      </div>
    </section>
  )
}
