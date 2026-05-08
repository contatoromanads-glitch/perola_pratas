import type { RefObject } from 'react'
import {
  BadgeCheck,
  ExternalLink,
  Gem,
  MessageCircle,
  ShieldCheck,
  Star,
  Store,
  TrendingUp,
} from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'
import './SocialProof.css'

const GOOGLE_REVIEW_URL =
  'https://www.google.com/search?q=p%C3%A9rola+pratas+atacado#lrd=0x8dbf88615bf9b6b3:0x30a95f6f6cd661bf,1,,,,'

const TRUST_SIGNALS = [
  {
    icon: BadgeCheck,
    value: '5,0',
    label: 'nota exibida no Google',
  },
  {
    icon: TrendingUp,
    value: '+8 anos',
    label: 'experiência declarada no perfil',
  },
  {
    icon: Gem,
    value: '925',
    label: 'prata para revenda qualificada',
  },
]

const PROOF_CARDS = [
  {
    icon: Store,
    title: 'Perfil público consistente',
    text: 'Pérola Pratas aparece no Google como atacado de joias em prata, joalheria e fabricante.',
  },
  {
    icon: ShieldCheck,
    title: 'Compra com contexto',
    text: 'A decisão do revendedor passa por conversa assistida, curadoria e validação do mix ideal.',
  },
  {
    icon: MessageCircle,
    title: 'Contato comercial direto',
    text: 'O institucional conduz para WhatsApp, mantendo a jornada consultiva antes do pedido.',
  },
]

export default function SocialProof() {
  const { ref: headerRef, visible: headerVisible } = useReveal()
  const { ref: stageRef, visible: stageVisible } = useReveal()

  return (
    <section id="prova-social" className="relative overflow-hidden border-t border-border-subtle px-6 py-24 md:px-10 md:py-32">
      <div className="social-proof-aura" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-[1320px] grid-cols-1 gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div
          ref={headerRef as RefObject<HTMLDivElement>}
          className={`reveal${headerVisible ? ' visible' : ''} max-w-[600px]`}
        >
          <span className="section-label block">Prova Social</span>
          <h2 className="mt-5 font-serif text-[clamp(2.3rem,4.8vw,5rem)] font-normal leading-[0.98] tracking-[-0.025em] text-primary">
            Reputação que acompanha a primeira conversa.
          </h2>
          <p className="mt-7 max-w-[520px] font-sans text-base font-light leading-[1.9] text-secondary">
            A presença pública da Pérola Pratas reforça o posicionamento atacadista premium:
            nota máxima exibida no Google, atuação em prata 925 e atendimento comercial direto
            para revendedores.
          </p>

          <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {TRUST_SIGNALS.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="motion-surface social-metric rounded-sm border border-border-strong/35 bg-surface-2/65 p-5 backdrop-blur-[14px]"
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <Icon className="mb-5 h-5 w-5 text-accent" strokeWidth={1.55} />
                  <strong className="block font-serif text-[2rem] font-normal leading-none text-primary">
                    {item.value}
                  </strong>
                  <span className="mt-3 block font-sans text-[0.72rem] font-medium uppercase leading-[1.5] tracking-[0.18em] text-tertiary">
                    {item.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        <div
          ref={stageRef as RefObject<HTMLDivElement>}
          className={`reveal reveal-delay-1${stageVisible ? ' visible' : ''} social-proof-stage motion-surface rounded-sm border border-border-strong/35 bg-surface-2/45 p-4 backdrop-blur-[18px] md:p-6`}
        >
          <div className="social-proof-orbit" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className="relative z-10 grid min-h-[560px] grid-cols-1 gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="social-rating-panel flex flex-col justify-between rounded-sm border border-border-strong/35 bg-surface-0/60 p-7 md:p-8">
              <div>
                <div className="flex items-center gap-2 text-accent" aria-label="Nota 5 de 5 no Google">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="social-rating-star h-5 w-5 fill-current"
                      strokeWidth={1.4}
                      style={{ animationDelay: `${index * 120}ms` }}
                    />
                  ))}
                </div>

                <div className="mt-10 font-serif text-[clamp(4.5rem,9vw,8rem)] font-normal leading-[0.82] tracking-[-0.05em] text-primary">
                  5,0
                </div>
                <p className="mt-5 max-w-[300px] font-sans text-sm font-light leading-[1.85] text-secondary">
                  Nota máxima exibida no perfil público do Google para Pérola Pratas - Atacado de Joias em Prata.
                </p>
              </div>

              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noreferrer"
                className="motion-link mt-10 inline-flex w-fit items-center gap-2 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent no-underline"
                aria-label="Ver avaliações da Pérola Pratas no Google"
              >
                Ver no Google
                <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.8} />
              </a>
            </div>

            <div className="relative min-h-[440px] overflow-hidden rounded-sm border border-border-subtle bg-surface-1/50 p-5 md:p-6">
              <div className="social-proof-rail" aria-hidden="true" />

              <div className="relative z-10 flex h-full flex-col justify-between gap-4">
                {PROOF_CARDS.map((card, index) => {
                  const Icon = card.icon
                  return (
                    <article
                      key={card.title}
                      className="social-proof-card rounded-sm border border-border-strong/35 bg-surface-2/75 p-6 backdrop-blur-[16px]"
                      style={{ animationDelay: `${index * 420}ms` }}
                    >
                      <div className="mb-6 flex items-center justify-between gap-4">
                        <Icon className="h-5 w-5 text-accent" strokeWidth={1.55} />
                        <span className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-tertiary">
                          Sinal {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="font-serif text-[1.7rem] font-normal leading-[1.08] text-primary">
                        {card.title}
                      </h3>
                      <p className="mt-4 font-sans text-[0.95rem] font-light leading-[1.75] text-secondary">
                        {card.text}
                      </p>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
