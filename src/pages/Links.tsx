import { useReveal } from '@/hooks/useReveal'
import { MessageCircle, Camera, Sparkles, BookOpen, ArrowUpRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/**
 * Links — Página "link na bio" (estilo Linktree)
 *
 * Reaproveita inteiramente o design system da landing:
 *  - Paleta esmeralda escura (surfaces + accent)
 *  - Tipografia Cormorant Garamond + Jost
 *  - Glow accent radial + pattern de pontos decorativo
 *  - Classe .card global (hover lift + borda accent)
 *  - Hook useReveal para entrada escalonada dos links
 *
 * Rota: /links — pronta para colar na bio do Instagram/WhatsApp.
 */

type LinkItem = {
  icon: LucideIcon
  label: string
  href: string
  external?: boolean
  description?: string
}

// ─── Edite aqui os destinos da bio ───
const LINKS: LinkItem[] = [
  {
    icon: MessageCircle,
    label: 'WhatsApp Atacado',
    description: 'Fale com nosso time B2B',
    href: 'https://wa.me/5543991312661?text=Ol%C3%A1%21%20Vim%20pelo%20link%20da%20bio%20da%20P%C3%A9rola%20Pratas.',
    external: true,
  },
  {
    icon: Sparkles,
    label: 'Catálogo de Coleções',
    description: 'Explore nossas peças em prata 925',
    href: '/#colecoes',
  },
  {
    icon: BookOpen,
    label: 'Ver Lookbook Completo',
    description: 'Acesse o portal de atacado',
    href: 'https://atacado.perolapratas.com.br/',
    external: true,
  },
  {
    icon: Camera,
    label: 'Instagram',
    description: '@perolapratas__',
    href: 'https://www.instagram.com/perolapratas__/',
    external: true,
  },
]

export default function Links() {
  return (
    <main className="min-h-screen relative overflow-hidden flex items-center justify-center py-16 px-6">
      {/* Pattern de pontos decorativo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, hsl(var(--text-primary) / 0.05) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Glow accent radial */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, hsl(var(--accent) / 0.18) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full max-w-[480px] flex flex-col items-center">
        <Header />

        <ul className="w-full flex flex-col gap-3 mt-12">
          {LINKS.map((link, i) => (
            <LinkRow key={link.label} item={link} index={i} />
          ))}
        </ul>

        <FooterMini />
      </div>
    </main>
  )
}

function Header() {
  const { ref: titleRef, visible: titleVisible } = useReveal()
  const { ref: subRef, visible: subVisible } = useReveal()

  return (
    <div className="flex flex-col items-center text-center">
      <img
        src="/logo.png"
        alt="Pérola Pratas"
        className="h-14 mb-6 opacity-90 brightness-0 invert"
      />

      <div className="flex items-center gap-4 mb-6 w-full max-w-[280px]">
        <div className="flex-1 h-px bg-border-strong" aria-hidden="true" />
        <span className="text-accent text-[0.5rem]" aria-hidden="true">◆</span>
        <div className="flex-1 h-px bg-border-strong" aria-hidden="true" />
      </div>

      <h1
        ref={titleRef as React.RefObject<HTMLHeadingElement>}
        className={`reveal${titleVisible ? ' visible' : ''} font-serif text-5xl md:text-6xl leading-[1] text-primary font-normal tracking-[-0.02em] mb-4`}
      >
        Pérola{' '}
        <em
          className="italic text-transparent bg-clip-text"
          style={{
            backgroundImage:
              'linear-gradient(130deg, hsl(var(--accent)) 0%, hsl(var(--accent-soft)) 60%, hsl(150 70% 88%) 100%)',
          }}
        >
          Pratas
        </em>
      </h1>

      <p
        ref={subRef as React.RefObject<HTMLParagraphElement>}
        className={`reveal reveal-delay-1${subVisible ? ' visible' : ''} font-sans text-[0.95rem] leading-[1.7] text-secondary font-light max-w-[360px]`}
      >
        Joalheria de atacado em prata 925 para revendedores exclusivos.
      </p>
    </div>
  )
}

function LinkRow({ item, index }: { item: LinkItem; index: number }) {
  const { ref, visible } = useReveal()
  const Icon = item.icon
  const delayClass =
    index === 0 ? '' : index === 1 ? 'reveal-delay-1' : index === 2 ? 'reveal-delay-2' : 'reveal-delay-3'

  return (
    <li
      ref={ref as React.RefObject<HTMLLIElement>}
      className={`reveal ${delayClass}${visible ? ' visible' : ''}`}
    >
      <a
        href={item.href}
        target={item.external ? '_blank' : undefined}
        rel={item.external ? 'noopener noreferrer' : undefined}
        aria-label={`${item.label}${item.description ? ` — ${item.description}` : ''}`}
        className="card group flex items-center gap-4 px-5 py-4 min-h-[72px] no-underline"
      >
        {/* Ícone em "selo" accent suave */}
        <span
          className="flex-shrink-0 w-11 h-11 rounded-sm flex items-center justify-center border border-accent/40 bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-on group-hover:border-accent"
          aria-hidden="true"
        >
          <Icon size={18} strokeWidth={1.6} />
        </span>

        {/* Label + descrição */}
        <span className="flex-1 flex flex-col text-left">
          <span className="font-sans text-[0.78rem] font-semibold tracking-[0.18em] uppercase text-primary leading-tight">
            {item.label}
          </span>
          {item.description && (
            <span className="font-sans text-[0.78rem] text-tertiary font-light mt-1 leading-tight normal-case tracking-normal">
              {item.description}
            </span>
          )}
        </span>

        {/* Seta — aparece e desliza no hover */}
        <ArrowUpRight
          size={18}
          strokeWidth={1.6}
          className="flex-shrink-0 text-tertiary opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </a>
    </li>
  )
}

function FooterMini() {
  return (
    <p className="font-sans text-[0.65rem] tracking-[0.24em] uppercase text-tertiary mt-16 text-center">
      © {new Date().getFullYear()} Pérola Pratas B2B
    </p>
  )
}
