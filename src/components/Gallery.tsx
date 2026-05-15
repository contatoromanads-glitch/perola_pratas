import { useReveal } from '@/hooks/useReveal'

interface GalleryImage {
  src: string
  alt: string
  label: string
  title: string
  sub: string
  className: string
  titleClassName?: string
  delay: number
}

const IMAGES: GalleryImage[] = [
  {
    src: '/gallery-1.png',
    alt: 'Colar Ponto Luz Redondo Crav G',
    label: 'Colares',
    title: 'Colar Ponto Luz Redondo Crav G',
    sub: 'Atacado Nível 1',
    className: 'aspect-[4/5]',
    delay: 0,
  },
  {
    src: '/brinco-trio.jpg',
    alt: 'Brinco Trio Estrela',
    label: 'Brincos',
    title: 'Brinco Trio Estrela',
    sub: 'Atacado Nível 2',
    className: 'shadow-[0_40px_100px_rgba(0,0,0,0.35)] aspect-[4/5]',
    titleClassName: 'text-[1.45rem]',
    delay: 1,
  },
  {
    src: '/anel-borboleta.jpg',
    alt: 'Anel Borboletas Renda Italiana',
    label: 'Anéis',
    title: 'Anel Borboletas Renda Italiana',
    sub: 'Atacado Nível 1',
    className: 'aspect-[4/5]',
    delay: 2,
  },
]

function GalleryCard({ img }: { img: GalleryImage }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal${visible ? ' visible' : ''}${img.delay ? ` reveal-delay-${img.delay}` : ''} ${img.className}`}
    >
      <div className="relative overflow-hidden bg-surface-2 cursor-pointer group h-full rounded-sm">
        <img
          src={img.src}
          alt={img.alt}
          loading="lazy"
          className="w-full h-full object-cover opacity-85 transition-all duration-[0.8s] group-hover:opacity-100 group-hover:scale-105 block"
        />
        {/* Overlay com gradiente forte → texto branco AAA garantido */}
        <div className="absolute bottom-0 left-0 right-0 p-7 bg-gradient-to-t from-surface-0/95 via-surface-0/70 to-transparent">
          <span className="font-sans text-[0.68rem] font-semibold tracking-[0.3em] uppercase text-accent block mb-[0.4rem]">
            {img.label}
          </span>
          <div className={`font-serif text-[1.2rem] text-primary font-normal tracking-[-0.01em] mb-[0.3rem] ${img.titleClassName || ''}`}>
            {img.title}
          </div>
          <div className="font-sans text-[0.8rem] text-tertiary font-light">
            {img.sub}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const { ref: headerRef, visible: headerVisible } = useReveal()
  const { ref: footerRef, visible: footerVisible } = useReveal()

  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 md:px-10 relative z-10 bg-surface-0/40 border-t border-border-subtle">
      <div className="max-w-[1320px] mx-auto">
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal${headerVisible ? ' visible' : ''} flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-16`}
        >
          <div>
            <span className="section-label block mb-5">Nossa Curadoria</span>
            <h2 className="font-serif text-[clamp(2.2rem,4.2vw,4rem)] text-primary font-normal tracking-[-0.025em] leading-[1.05]">
              Arquivos Curados
            </h2>
          </div>
          <p className="font-sans text-base text-secondary leading-[1.8] max-w-[340px] font-light md:text-right">
            Uma seleção das nossas silhuetas mais cobiçadas, estruturadas para ambientes de varejo premium.
          </p>
        </div>

        {/* Grid totalmente responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {IMAGES.map((img) => (
            <GalleryCard key={img.alt} img={img} />
          ))}
        </div>

        <div
          ref={footerRef as React.RefObject<HTMLDivElement>}
          className={`reveal${footerVisible ? ' visible' : ''} mt-16 flex items-center gap-6`}
        >
          <div className="flex-1 h-px bg-border-strong" aria-hidden="true" />
          <a
            href="https://atacado.perolapratas.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-[0.75rem] font-semibold tracking-[0.22em] uppercase text-accent no-underline transition-opacity duration-200 hover:opacity-75 min-h-[44px]"
          >
            Ver Lookbook Completo
            <svg
              width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <div className="flex-1 h-px bg-border-strong" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
