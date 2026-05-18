import { useEffect, useState } from 'react'
import { useReveal } from '@/hooks/useReveal'
import { MessageCircle, Camera, Sparkles, ArrowUpRight, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'
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

type ReviewItem = {
  name: string
  date: string
  text: string
}

// ─── Edite aqui os destinos da bio ───
const LINKS: LinkItem[] = [
  {
    icon: MessageCircle,
    label: 'WhatsApp Atendimento',
    description: 'Fale com nosso time',
    href: 'https://wa.me/5543991312661?text=Ol%C3%A1%21%20Vim%20pelo%20link%20da%20bio%20da%20P%C3%A9rola%20Pratas.',
    external: true,
  },
  {
    icon: Sparkles,
    label: 'CATÁLOGO ATACADO',
    description: 'Explore o site oficial',
    href: '/#colecoes',
  },
  {
    icon: Camera,
    label: 'Instagram',
    description: '@perolapratas__',
    href: 'https://www.instagram.com/perolapratas__/',
    external: true,
  },
  {
    icon: MapPin,
    label: 'Google Meu Negócio',
    description: 'Veja avaliações e perfil da loja',
    href: 'https://share.google/ZrUh41f9qtUiOGjC8',
    external: true,
  },
]

const REVIEWS: ReviewItem[] = [
  {
    name: 'Suzi Lourenço',
    date: '22 de fev. de 2025',
    text: 'Peças lindas e modernas bem elaboradas, excelente qualidade, apresentação visual impecável muita variedade, muito bem representada pelo representante Jhonatan.',
  },
  {
    name: 'Jane Veloso',
    date: '22 de fev. de 2025',
    text: 'A empresa Pérola Pratas possui qualidade em suas peças e um atendimento extraordinário com preço excelente.',
  },
  {
    name: 'raphael ribeiro ferreira',
    date: '21 de fev. de 2025',
    text: 'São peças de excelente qualidade, o atendimento é impecável. Trabalho com as peças há algum tempo e minhas clientes ficam super satisfeitas! Recomendo demais!',
  },
  {
    name: 'vinicius bertoni',
    date: '8 de nov. de 2023',
    text: 'Peças de ótima qualidade e num preço super acessível, vendedor super atencioso e prestativo... Super recomendo',
  },
]

export default function Links() {
  return (
    <main className="min-h-screen relative overflow-hidden flex items-start justify-center py-10 md:py-12 px-6">
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

        <ul className="w-full flex flex-col gap-3 mt-10">
          {LINKS.map((link, i) => (
            <LinkRow key={link.label} item={link} index={i} />
          ))}
        </ul>

        <SocialProof />
        <ReviewCarousel />

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
        Joalheria em prata 925 para atacado e varejo.
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

function SocialProof() {
  const { ref, visible } = useReveal()

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal reveal-delay-4${visible ? ' visible' : ''} w-full mt-4 rounded-md border border-white/10 bg-[hsl(var(--surface-2)_/_0.58)] px-5 py-4 shadow-[0_16px_44px_hsl(0_0%_0%_/_0.22)] backdrop-blur-md`}
      aria-label="Avaliação no Google: 5,0, 32 avaliações"
    >
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
        <span className="font-serif text-[1.8rem] leading-none text-primary">5,0</span>
        <span className="font-sans text-[1.15rem] leading-none tracking-[0.08em] text-[#F6C453]" aria-hidden="true">
          ★★★★★
        </span>
        <span className="font-sans text-[0.78rem] font-medium leading-tight text-accent">
          32 avaliações no Google
        </span>
      </div>
    </div>
  )
}

function ReviewCarousel() {
  const { ref, visible } = useReveal()
  const [active, setActive] = useState(0)
  const review = REVIEWS[active]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % REVIEWS.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setActive((current) => (current - 1 + REVIEWS.length) % REVIEWS.length)
  }

  const goToNext = () => {
    setActive((current) => (current + 1) % REVIEWS.length)
  }

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`reveal reveal-delay-4${visible ? ' visible' : ''} w-full mt-3 rounded-md border border-white/10 bg-[hsl(var(--surface-1)_/_0.72)] p-4 shadow-[0_16px_44px_hsl(0_0%_0%_/_0.18)] backdrop-blur-md`}
      aria-label="Carrossel de avaliações reais no Google"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <p className="font-sans text-[0.78rem] font-semibold leading-tight text-primary">
              {review.name}
            </p>
            <span className="font-sans text-[0.66rem] leading-tight text-tertiary">
              {review.date}
            </span>
          </div>
          <p className="mt-1 font-sans text-[0.78rem] leading-none tracking-[0.08em] text-[#F6C453]" aria-label="5 estrelas">
            ★★★★★
          </p>
        </div>

        <div className="flex flex-shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={goToPrevious}
            className="flex h-8 w-8 items-center justify-center rounded-sm border border-white/10 bg-white/5 text-tertiary transition-colors duration-200 hover:border-accent/50 hover:text-accent"
            aria-label="Avaliação anterior"
            title="Avaliação anterior"
          >
            <ChevronLeft size={15} strokeWidth={1.7} />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="flex h-8 w-8 items-center justify-center rounded-sm border border-white/10 bg-white/5 text-tertiary transition-colors duration-200 hover:border-accent/50 hover:text-accent"
            aria-label="Próxima avaliação"
            title="Próxima avaliação"
          >
            <ChevronRight size={15} strokeWidth={1.7} />
          </button>
        </div>
      </div>

      <p className="mt-3 min-h-[4.4rem] font-sans text-[0.82rem] leading-[1.55] text-secondary" aria-live="polite">
        “{review.text}”
      </p>

      <div className="mt-3 flex justify-center gap-1.5" aria-hidden="true">
        {REVIEWS.map((item, index) => (
          <span
            key={item.name}
            className={`h-1.5 rounded-full transition-all duration-300 ${index === active ? 'w-5 bg-accent' : 'w-1.5 bg-white/20'}`}
          />
        ))}
      </div>
    </section>
  )
}

function FooterMini() {
  return (
    <p className="font-sans text-[0.65rem] tracking-[0.24em] uppercase text-tertiary mt-16 text-center">
      © {new Date().getFullYear()} Pérola Pratas
    </p>
  )
}
