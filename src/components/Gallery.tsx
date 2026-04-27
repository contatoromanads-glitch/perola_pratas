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
    src: 'https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?w=600&q=80',
    alt: 'Anéis', label: 'Anéis', title: 'Conjunto Obsidian Band', sub: 'Atacado Nível 1',
    className: 'mt-20 aspect-[3/4]',
    delay: 0,
  },
  {
    src: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
    alt: 'Correntes', label: 'Correntes Assinatura', title: 'Corrente Lumina Anchor', sub: 'Atacado Nível 2',
    className: 'shadow-[0_40px_100px_rgba(0,0,0,0.2)] aspect-[4/5]',
    titleClassName: 'text-[1.45rem]',
    delay: 1,
  },
  {
    src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    alt: 'Pulseiras', label: 'Pulseiras', title: 'Braceletes Arquitetônicos', sub: 'Atacado Nível 1',
    className: '-mt-8 aspect-square',
    delay: 2,
  },
]

function GalleryCard({ img }: { img: GalleryImage }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal${visible ? ' visible' : ''}${img.delay ? ` reveal-delay-${img.delay}` : ''} ${img.className}`}>
      <div className="relative overflow-hidden bg-forest-mid cursor-pointer group h-full">
        <img src={img.src} alt={img.alt} className="w-full h-full object-cover opacity-75 transition-all duration-[0.8s] group-hover:opacity-95 group-hover:scale-105 block" />
        <div className="absolute bottom-0 left-0 right-0 p-7 bg-gradient-to-t from-[rgba(6,78,59,0.92)] to-transparent">
          <span className="font-sans text-[0.68rem] font-semibold tracking-[0.3em] uppercase text-teal block mb-[0.4rem]">
            {img.label}
          </span>
          <div className={`font-serif text-[1.2rem] text-white font-normal tracking-[-0.01em] mb-[0.3rem] ${img.titleClassName || ''}`}>
            {img.title}
          </div>
          <div className="font-sans text-[0.8rem] text-white/55 font-light">
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
    <section id="portfolio" className="py-32 px-10 relative z-10 bg-black/10 border-t border-border">
      <div className="max-w-[1320px] mx-auto">
        <div ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal${headerVisible ? ' visible' : ''} flex items-end justify-between gap-8 mb-16`}>
          <div>
            <span className="section-label block mb-5">Nossa Curadoria</span>
            <h2 className="font-serif text-[clamp(2.4rem,4.2vw,4rem)] text-forest font-normal tracking-[-0.025em] leading-[1.05]">
              Arquivos Curados
            </h2>
          </div>
          <p className="font-sans text-base text-forest-soft leading-[1.8] max-w-[340px] font-light text-right">
            Uma seleção das nossas silhuetas mais cobiçadas, estruturadas para ambientes de varejo premium.
          </p>
        </div>

        <div className="grid grid-cols-[4fr_5fr_3fr] gap-6 items-start">
          {IMAGES.map((img) => (
            <GalleryCard key={img.alt} img={img} />
          ))}
        </div>

        <div ref={footerRef as React.RefObject<HTMLDivElement>}
          className={`reveal${footerVisible ? ' visible' : ''} mt-16 flex items-center gap-6`}>
          <div className="flex-1 h-px bg-border" />
          <a href="#lookbook" className="inline-flex items-center gap-2 font-sans text-[0.75rem] font-semibold tracking-[0.22em] uppercase text-teal-dark no-underline transition-opacity duration-200 hover:opacity-65">
            Ver Lookbook Completo
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <div className="flex-1 h-px bg-border" />
        </div>
      </div>
    </section>
  )
}
