import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Sparkles, 
  Gem, 
  TrendingUp, 
  PackageCheck, 
  ChevronDown, 
  UserCheck, 
  CalendarCheck,
  Award,
  ArrowRight,
  Coffee,
  Briefcase,
  Store,
  Building2,
  Car,
  ShieldCheck
} from 'lucide-react'

const WA_DEST = '5543991312661'
const WA_PHRASE = 'Olá, vim do Google, quero conhecer a Pérola Pratas'
const WA_LINK = `https://wa.me/${WA_DEST}?text=${encodeURIComponent(WA_PHRASE)}`

// WhatsApp Icon SVG component
function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.317 0-4.477-.67-6.314-1.822l-.44-.265-3.265 1.094 1.094-3.265-.265-.44A9.959 9.959 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  )
}

// Reusable WhatsApp Button with micro-interactions (lightweight, motion only on button)
function CtaButton({ 
  label = 'Solicitar Atendimento Presencial no WhatsApp', 
  subtitle,
  className = '',
  size = 'md'
}: { 
  label?: string
  subtitle?: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}) {
  const sizeClasses = {
    sm: 'py-2.5 px-5 text-[0.75rem]',
    md: 'py-3.5 px-7 text-[0.82rem]',
    lg: 'py-4 px-9 text-[0.88rem]'
  }[size]

  return (
    <div className="flex flex-col items-center gap-1.5 w-full sm:w-auto">
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative inline-flex items-center justify-center gap-3 font-sans font-semibold tracking-wider uppercase text-white bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] rounded-xl shadow-[0_8px_24px_rgba(37,211,102,0.25)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.4)] transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer text-center no-underline ${sizeClasses} ${className}`}
      >
        <WhatsAppIcon className={size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} />
        <span>{label}</span>
        <ArrowRight className="w-4 h-4 opacity-75 group-hover:translate-x-1 transition-transform duration-200" />
      </a>
      {subtitle && (
        <span className="text-[0.72rem] text-muted text-center tracking-wide">
          {subtitle}
        </span>
      )}
    </div>
  )
}

const PAINS = [
  {
    icon: '❌',
    title: 'Insegurança com Fotos e Vídeos da Internet',
    desc: 'Comprar joias apenas pela tela é arriscado. Você não sente o peso real da prata, não testa os fechos e fica refém de iluminação artificial que esconde imperfeições de polimento.'
  },
  {
    icon: '❌',
    title: 'Falta de Tempo e Custos Altos com Viagens',
    desc: 'Ter que fechar sua loja, viajar centenas de quilômetros até polos atacadistas e gastar com pedágio, combustível e hospedagem apenas para renovar o mostruário de joias.'
  },
  {
    icon: '❌',
    title: 'Medo de Prata Impura sem Garantia de Fábrica',
    desc: 'Comprar de fornecedores sem sede comprovada traz o perigo de receber peças banhadas ou com teor duvidoso, colocando em jogo a confiança das suas clientes fiéis.'
  },
  {
    icon: '❌',
    title: 'Mix Desalinhado que Encalha e Drena seu Caixa',
    desc: 'Escolher sozinho no catálogo sem a orientação de um consultor que conhece os itens com maior giro e saída rápida na sua região, amargando prejuízo com peças paradas.'
  }
]

const FAQS = [
  {
    q: 'Como funciona a visita do consultor no meu endereço?',
    a: 'Você nos chama no WhatsApp e alinhamos o melhor dia e horário. Nosso representante vai até a sua loja, boutique ou residência levando a maleta de mostruário completa para você avaliar e escolher com total comodidade.'
  },
  {
    q: 'A visita do representante tem algum custo?',
    a: 'Não! A visita do nosso consultor comercial para apresentação do mostruário e condições de atacado é gratuita e sem taxa de deslocamento na nossa região de cobertura.'
  },
  {
    q: 'O consultor já leva peças para pronta entrega imediata?',
    a: 'Sim! Nosso representante leva um acervo abastecido com as principais joias da fábrica. Você escolhe, confere peça por peça e já fica com elas no mesmo instante para começar a vender.'
  },
  {
    q: 'Também posso ir até o escritório/showroom da Pérola Pratas?',
    a: 'Com certeza! Temos sede física própria em Londrina - PR, com sala de atendimento privativa e cantinho do café. Você pode escolher: ou o representante vai até você, ou você agenda um horário para nos visitar.'
  },
  {
    q: 'Preciso ter CNPJ para ser atendido?',
    a: 'Não! Atendemos tanto lojistas com CNPJ constituído quanto revendedores(as) autônomos que buscam joias de alta qualidade direto de fábrica no atacado.'
  },
  {
    q: 'As joias acompanham garantia de autenticidade da Prata 925?',
    a: 'Sim. Todas as peças produzidas e distribuídas pela Pérola Pratas acompanham certificado de garantia vitalícia na pureza e teor nobre da Prata 925 legítima.'
  }
]

export default function LpAtenPre() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-[#050D0A] text-primary font-sans antialiased selection:bg-[#25D366] selection:text-[#050D0A]">
      
      {/* ─── FIXED NAV ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050D0A]/90 backdrop-blur-md border-b border-border-strong/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-3 no-underline">
            <img src="/logo.png" alt="Pérola Pratas" className="logo-img h-7 sm:h-8 block" />
          </Link>

          <div className="flex items-center gap-4">
            <span className="hidden lg:inline-flex items-center gap-2 text-[0.72rem] tracking-widest uppercase text-tertiary">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              Atendimento Presencial · Na Sua Loja ou no Escritório
            </span>
            <CtaButton 
              size="sm" 
              label="Agendar Visita" 
              className="!py-2 !px-4 !text-[0.7rem]" 
            />
          </div>
        </div>
      </header>

      <main className="pt-16">
        
        {/* ─── HERO SECTION ─── */}
        <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 px-4 sm:px-6 md:px-8 overflow-hidden border-b border-border-strong/10 bg-gradient-to-b from-[#07130e] via-[#050D0A] to-[#050D0A]">
          <div className="max-w-[1020px] mx-auto text-center flex flex-col items-center">
            
            {/* Top pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-2/80 border border-border-strong/15 text-tertiary text-[0.72rem] tracking-wider uppercase mb-6 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[hsl(var(--accent))]" />
              <span>Atendimento Presencial VIP · Nosso Consultor Vai Até Você</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-[clamp(2.3rem,5.5vw,4.2rem)] font-normal leading-[1.12] tracking-tight mb-6 text-primary">
              Compre <span className="text-[hsl(var(--accent))] italic font-normal">Prata 925</span> Direto da Fábrica com{' '}
              <span className="underline decoration-[hsl(var(--accent))]/40 underline-offset-8">Atendimento Presencial no Seu Espaço</span>
            </h1>

            {/* Subtitle */}
            <p className="text-secondary text-[1.05rem] md:text-[1.25rem] leading-relaxed max-w-[780px] mx-auto mb-10 font-light">
              Levamos a nossa <strong>maleta completa de mostruário até a sua loja ou residência</strong> — ou receba um atendimento exclusivo em nossa sede própria. Toque nas joias, comprove o peso real e monte seu estoque com pronta entrega.
            </p>

            {/* Hero CTA Button with exact user phrase */}
            <div className="mb-12 w-full flex justify-center">
              <CtaButton 
                size="lg"
                label="Agendar Atendimento Presencial no WhatsApp"
                subtitle="Receba nosso consultor na sua loja ou agende no escritório · Sem compromisso"
              />
            </div>

            {/* 3 Key Trust Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-[900px] pt-8 border-t border-border-strong/10">
              <div className="flex items-center justify-center gap-3 p-3.5 rounded-lg bg-surface-1/40 border border-border-strong/10 text-left">
                <Store className="w-5 h-5 text-[hsl(var(--accent))] shrink-0" />
                <div>
                  <div className="font-serif text-lg font-medium text-primary leading-tight">Visita no Seu Endereço</div>
                  <div className="text-[0.72rem] text-tertiary">Comodidade total na sua loja</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 p-3.5 rounded-lg bg-surface-1/40 border border-border-strong/10 text-left">
                <Gem className="w-5 h-5 text-[hsl(var(--accent))] shrink-0" />
                <div>
                  <div className="font-serif text-lg font-medium text-primary leading-tight">Prata 925 Legítima</div>
                  <div className="text-[0.72rem] text-tertiary">Garantia vitalícia no teor</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 p-3.5 rounded-lg bg-surface-1/40 border border-border-strong/10 text-left">
                <PackageCheck className="w-5 h-5 text-[hsl(var(--accent))] shrink-0" />
                <div>
                  <div className="font-serif text-lg font-medium text-primary leading-tight">Pronta Entrega na Maleta</div>
                  <div className="text-[0.72rem] text-tertiary">Escolha e abasteça na hora</div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ─── DORES (PROBLEMAS DE COMPRAR SEM VER DE PERTO E SEM TEMPO DE VIAJAR) ─── */}
        <section className="py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-surface-0/60 border-b border-border-strong/10">
          <div className="max-w-[1100px] mx-auto">
            
            <div className="text-center max-w-[700px] mx-auto mb-14">
              <span className="section-label block mb-3 text-[hsl(var(--accent))]">Mais segurança e zero perda de tempo</span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-normal text-primary leading-tight mb-4">
                Cansado da insegurança da internet e do <span className="text-[hsl(var(--danger))]">cansaço de viajar</span> para comprar joias?
              </h2>
              <p className="text-secondary text-[0.98rem] leading-relaxed">
                Abastecer seu mostruário não precisa ser um jogo de sorte na tela nem uma maratona exaustiva de estrada.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {PAINS.map((pain, idx) => (
                <div 
                  key={idx}
                  className="p-6 md:p-8 rounded-xl bg-surface-1/70 border border-border-strong/15 flex flex-col justify-between hover:border-[hsl(var(--accent))]/40 transition-colors"
                >
                  <div>
                    <div className="text-2xl mb-4 p-2.5 w-fit rounded-lg bg-surface-2 border border-border-strong/10">
                      {pain.icon}
                    </div>
                    <h3 className="font-serif text-xl md:text-[1.35rem] font-medium text-primary mb-2.5">
                      {pain.title}
                    </h3>
                    <p className="text-secondary text-[0.92rem] leading-relaxed font-light">
                      {pain.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section WhatsApp CTA Button */}
            <div className="p-8 rounded-2xl bg-gradient-to-r from-surface-1 via-surface-2 to-surface-1 border border-border-strong/15 text-center flex flex-col items-center">
              <h3 className="font-serif text-2xl md:text-3xl font-normal text-primary mb-3">
                A fábrica vem até você com estoque físico e transparência
              </h3>
              <p className="text-secondary text-[0.95rem] max-w-[640px] mb-6 font-light">
                Receba nosso consultor na sua loja para ver as peças de perto, sem custo de deslocamento e com a tranquilidade de quem negocia direto com a fonte.
              </p>
              <CtaButton 
                label="Agendar Atendimento Presencial no WhatsApp"
                subtitle="Fale com nossa equipe e agende a visita no seu endereço"
              />
            </div>

          </div>
        </section>

        {/* ─── SESSÃO INFORMATIVA 1: O REPRESENTANTE VAI ATÉ O CLIENTE (MALETA FÍSICA) ─── */}
        <section className="py-20 md:py-24 px-4 sm:px-6 md:px-8 border-b border-border-strong/10 bg-surface-1/20">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 text-[0.7rem] uppercase tracking-wider text-[hsl(var(--accent))] font-medium border border-border-strong/10">
                  <Briefcase className="w-3.5 h-3.5 text-[hsl(var(--accent))]" />
                  <span>Sessão 01 · A Fábrica na Sua Loja</span>
                </div>
                
                <h2 className="font-serif text-[clamp(2.2rem,4vw,3.4rem)] font-normal text-primary leading-[1.15]">
                  Nosso Consultor Vai Até Você com a <span className="text-[hsl(var(--accent))] italic">Maleta de Mostruário Completa</span>
                </h2>

                <p className="text-secondary text-[1rem] leading-relaxed font-light">
                  Esqueça a dor de cabeça de fechar a loja para ir a feiras ou pagar fretes caros no escuro. O representante da <strong>Pérola Pratas</strong> visita o seu estabelecimento levando um acervo real de joias em Prata 925.
                </p>

                <div className="space-y-3.5 pt-2">
                  {[
                    'Toque nas peças, avalie espessura, fechos e acabamento na iluminação da sua própria loja;',
                    'Centenas de modelos organizados em maletas de mostruário prontas para revenda;',
                    'Conferência manual e detalhada item por item antes de qualquer fechamento;',
                    'Pronta entrega física: você escolhe e já fica com o estoque em mãos para faturar.'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                      <span className="text-secondary text-[0.92rem] font-light">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <CtaButton 
                    label="Solicitar Visita do Consultor via WhatsApp"
                    subtitle="Clique para combinar data e horário no seu endereço"
                  />
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative p-6 sm:p-8 rounded-2xl bg-surface-2/90 border border-border-strong/20 shadow-2xl">
                  {/* Foto do Mostruário Real */}
                  <div className="relative overflow-hidden rounded-xl mb-6 border border-border-strong/15 aspect-[4/3] group shadow-lg">
                    <img 
                      src="/showroom-mostruario.jpg" 
                      alt="Maleta com mostruário de joias de Prata 925 a pronta entrega no atacado" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050D0A]/95 via-[#050D0A]/20 to-transparent flex items-end p-4">
                      <div className="flex items-center gap-2">
                        <PackageCheck className="w-4 h-4 text-[#25D366]" />
                        <span className="text-[0.75rem] font-medium text-primary tracking-wide drop-shadow">
                          Estoque Físico à Pronta Entrega na Maleta
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 pb-4 border-b border-border-strong/10">
                      <div className="w-12 h-12 rounded-xl bg-[hsl(var(--accent))]/15 flex items-center justify-center text-[hsl(var(--accent))]">
                        <Car className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-serif text-xl text-primary font-medium">Comodidade no seu Espaço</h4>
                        <p className="text-xs text-muted">Zero custo de viagem ou frete antecipado</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-xl bg-surface-1/80 border border-border-strong/10">
                        <div className="text-2xl font-serif text-[hsl(var(--accent))] font-medium mb-1">+1.500</div>
                        <div className="text-xs text-tertiary">Modelos disponíveis para escolha presencial</div>
                      </div>
                      <div className="p-4 rounded-xl bg-surface-1/80 border border-border-strong/10">
                        <div className="text-2xl font-serif text-[hsl(var(--accent))] font-medium mb-1">100%</div>
                        <div className="text-xs text-tertiary">Prata 925 pura com garantia vitalícia</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20">
                      <div className="flex items-center gap-2 text-[#25D366] text-xs font-semibold uppercase tracking-wider mb-1">
                        <Award className="w-4 h-4" />
                        Garantia Vitalícia no Teor
                      </div>
                      <p className="text-xs text-secondary leading-relaxed">
                        Cada joia adquirida com o nosso representante acompanha certificado de garantia vitalícia da fábrica Pérola Pratas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── SESSÃO INFORMATIVA 2: CONSULTORIA ESPECIALIZADA 1 A 1 & RETAGUARDA ─── */}
        <section className="py-20 md:py-24 px-4 sm:px-6 md:px-8 border-b border-border-strong/10 bg-[#050D0A]">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative p-6 sm:p-8 rounded-2xl bg-surface-2/90 border border-border-strong/20 shadow-2xl">
                  {/* Foto do Escritório com a Equipe */}
                  <div className="relative overflow-hidden rounded-xl mb-6 border border-border-strong/15 aspect-[4/3] group shadow-lg">
                    <img 
                      src="/showroom-escritorio.jpg" 
                      alt="Sede corporativa e equipe ativa da Pérola Pratas" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050D0A]/95 via-[#050D0A]/20 to-transparent flex items-end p-4">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse shadow-[0_0_8px_#25D366]" />
                        <span className="text-[0.75rem] font-medium text-primary tracking-wide drop-shadow">
                          Sede Corporativa & Equipe de Suporte da Fábrica
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 pb-4 border-b border-border-strong/10">
                      <div className="w-12 h-12 rounded-xl bg-[hsl(var(--accent))]/15 flex items-center justify-center text-[hsl(var(--accent))]">
                        <UserCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-serif text-xl text-primary font-medium">Estrutura Real & Suporte Contínuo</h4>
                        <p className="text-xs text-muted">A segurança de comprar de quem tem sede e equipe ativa</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="p-3.5 rounded-lg bg-surface-1/70 border border-border-strong/10">
                        <div className="text-sm font-medium text-primary mb-1">1. Consultoria de Mix Estratégico</div>
                        <p className="text-xs text-muted">O consultor avalia o perfil dos seus clientes para selecionar apenas joias com alta rotatividade.</p>
                      </div>
                      <div className="p-3.5 rounded-lg bg-surface-1/70 border border-border-strong/10">
                        <div className="text-sm font-medium text-primary mb-1">2. Margem de Lucro de até 200%</div>
                        <p className="text-xs text-muted">Preços reais de fábrica no atacado para você ter margem saudável e competitiva no varejo.</p>
                      </div>
                      <div className="p-3.5 rounded-lg bg-surface-1/70 border border-border-strong/10">
                        <div className="text-sm font-medium text-primary mb-1">3. Reposição Ágil e Sem Fricção</div>
                        <p className="text-xs text-muted">Canal direto de pós-venda para reposição contínua dos seus modelos campeões de venda.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 text-[0.7rem] uppercase tracking-wider text-[hsl(var(--accent))] font-medium border border-border-strong/10">
                  <UserCheck className="w-3.5 h-3.5 text-[hsl(var(--accent))]" />
                  <span>Sessão 02 · Consultoria Estratégica</span>
                </div>

                <h2 className="font-serif text-[clamp(2.2rem,4vw,3.4rem)] font-normal text-primary leading-[1.15]">
                  Mais que um Mostruário: tenha uma <span className="text-[hsl(var(--accent))] italic">Consultoria de Vendas</span>
                </h2>

                <p className="text-secondary text-[1rem] leading-relaxed font-light">
                  Nosso representante não vai até você apenas para vender peças: ele atua como um <strong>consultor do seu negócio</strong>, trazendo insights de mercado e orientações para acelerar o seu giro financeiro.
                </p>

                <div className="space-y-3.5 pt-2">
                  {[
                    'Indicação das joias mais vendidas da estação (anéis, correntes, brincos e pulseiras);',
                    'Sugestões de precificação praticadas no mercado de luxo e semijoias finas;',
                    'Combinações de mix para kits de presente que aumentam o ticket médio;',
                    'Retaguarda de um escritório próprio estruturado garantindo reposição rápida.'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                      <span className="text-secondary text-[0.92rem] font-light">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <CtaButton 
                    label="Quero Consultoria Presencial no WhatsApp"
                    subtitle="Envie a mensagem e reserve a visita do representante"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── SESSÃO INFORMATIVA 3: SEDE PRÓPRIA, SHOWROOM & CREDIBILIDADE DE FÁBRICA ─── */}
        <section className="py-20 md:py-24 px-4 sm:px-6 md:px-8 border-b border-border-strong/10 bg-surface-1/20">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 text-[0.7rem] uppercase tracking-wider text-[hsl(var(--accent))] font-medium border border-border-strong/10">
                  <Building2 className="w-3.5 h-3.5 text-[hsl(var(--accent))]" />
                  <span>Sessão 03 · Credibilidade & Showroom</span>
                </div>

                <h2 className="font-serif text-[clamp(2.2rem,4vw,3.4rem)] font-normal text-primary leading-[1.15]">
                  Segurança de Fábrica: <span className="text-[hsl(var(--accent))] italic">Sede Própria</span> e Portas Abertas
                </h2>

                <p className="text-secondary text-[1rem] leading-relaxed font-light">
                  A visita do nosso consultor é respaldada por uma <strong>empresa sólida com estrutura física em Londrina - PR</strong>. E se preferir vir nos visitar pessoalmente, nosso escritório está de portas abertas para receber você com um café expresso.
                </p>

                <div className="space-y-3.5 pt-2">
                  {[
                    'Empresa consolidada, com CNPJ ativo e sede física própria em Londrina - PR;',
                    'Espaço corporativo com sala de reunião privativa e equipe de atendimento;',
                    'Você escolhe: receba o consultor na sua loja ou venha nos visitar no showroom;',
                    'Condições comerciais de atacado direto de fábrica em ambas as modalidades.'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                      <span className="text-secondary text-[0.92rem] font-light">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <CtaButton 
                    label="Conversar com a Fábrica pelo WhatsApp"
                    subtitle="Clique para tirar dúvidas ou agendar seu atendimento"
                  />
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative p-6 sm:p-8 rounded-2xl bg-surface-2/90 border border-border-strong/20 shadow-2xl">
                  {/* Foto do Cantinho do Café */}
                  <div className="relative overflow-hidden rounded-xl mb-6 border border-border-strong/15 aspect-[4/3] group shadow-lg">
                    <img 
                      src="/showroom-cafe.jpg" 
                      alt="Cantinho do café e hospitalidade na sede da Pérola Pratas" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050D0A]/95 via-[#050D0A]/20 to-transparent flex items-end p-4">
                      <div className="flex items-center gap-2">
                        <Coffee className="w-4 h-4 text-[hsl(var(--accent))]" />
                        <span className="text-[0.75rem] font-medium text-primary tracking-wide drop-shadow">
                          Recepção com Café Expresso na Sede em Londrina
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 pb-4 border-b border-border-strong/10">
                      <div className="w-12 h-12 rounded-xl bg-[hsl(var(--accent))]/15 flex items-center justify-center text-[hsl(var(--accent))]">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-serif text-xl text-primary font-medium">Transparência Total</h4>
                        <p className="text-xs text-muted">Compre com a segurança de um fornecedor estabelecido</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3.5 rounded-lg bg-surface-1/80 border border-border-strong/10">
                        <span className="text-sm text-secondary">Modalidade Principal:</span>
                        <span className="text-sm font-semibold text-[#25D366]">Visita no seu endereço</span>
                      </div>
                      <div className="flex items-center justify-between p-3.5 rounded-lg bg-surface-1/80 border border-border-strong/10">
                        <span className="text-sm text-secondary">Modalidade Opcional:</span>
                        <span className="text-sm font-semibold text-primary">Showroom na sede da fábrica</span>
                      </div>
                      <div className="flex items-center justify-between p-3.5 rounded-lg bg-surface-1/80 border border-border-strong/10">
                        <span className="text-sm text-secondary">Conferência de peças:</span>
                        <span className="text-sm font-semibold text-primary">Ao vivo e em mãos</span>
                      </div>
                    </div>

                    <div className="pt-2 text-center">
                      <p className="text-xs text-muted">
                        Condições exclusivas de atacado para lojistas e revendedores.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── COMO FUNCIONA O ATENDIMENTO PRESENCIAL (3 PASSOS) ─── */}
        <section className="py-20 md:py-24 px-4 sm:px-6 md:px-8 border-b border-border-strong/10 bg-[#050D0A]">
          <div className="max-w-[1000px] mx-auto text-center">
            
            <span className="section-label block mb-3 text-[hsl(var(--accent))]">Fluxo prático e sem burocracia</span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-normal text-primary leading-tight mb-4">
              Como agendar o seu <span className="italic text-[hsl(var(--accent))]">Atendimento Presencial</span>
            </h2>
            <p className="text-secondary text-[0.98rem] max-w-[640px] mx-auto mb-14 font-light">
              Escolha receber o consultor na sua loja ou agendar uma visita ao nosso escritório. O processo leva menos de 2 minutos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
              {[
                {
                  step: '01',
                  title: 'Chame no WhatsApp',
                  desc: 'Clique em qualquer botão da página. A mensagem de identificação já estará pronta para envio.'
                },
                {
                  step: '02',
                  title: 'Defina o Local e Data',
                  desc: 'Informe o endereço da sua loja para receber o representante ou marque o horário para nos visitar.'
                },
                {
                  step: '03',
                  title: 'Toque, Escolha e Fature',
                  desc: 'Manuseie a maleta com joias de Prata 925, monte seu mix estratégico e já fique com as peças na hora.'
                }
              ].map((s, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-xl bg-surface-1/80 border border-border-strong/10 relative overflow-hidden"
                >
                  <div className="font-serif text-3xl font-normal text-[hsl(var(--accent))]/40 mb-3">
                    {s.step}
                  </div>
                  <h3 className="font-serif text-xl font-medium text-primary mb-2">
                    {s.title}
                  </h3>
                  <p className="text-secondary text-sm font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            <CtaButton 
              size="lg"
              label="Agendar Visita Presencial no WhatsApp"
              subtitle="Receba nosso consultor com a maleta ou venha nos visitar"
            />

          </div>
        </section>

        {/* ─── REGIÃO ATENDIDA & PROVA SOCIAL FÍSICA ─── */}
        <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 border-b border-border-strong/10 bg-surface-1/30">
          <div className="max-w-[960px] mx-auto text-center">
            
            <div className="p-8 md:p-10 rounded-2xl bg-surface-2/80 border border-border-strong/15">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--accent))]/15 flex items-center justify-center text-[hsl(var(--accent))] mx-auto mb-4">
                <MapPin className="w-6 h-6" />
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-normal text-primary mb-3">
                Regiões Atendidas & Sede Corporativa
              </h3>

              <p className="text-secondary text-[0.95rem] max-w-[650px] mx-auto mb-8 font-light">
                Nosso consultor atende presencialmente lojas e revendedoras em <strong>Londrina, Maringá, Arapongas, Apucarana, Cambé, Rolândia, Ibiporã e toda a região norte do Paraná</strong>.
              </p>

              {/* Galeria Visual de Credibilidade */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <div className="overflow-hidden rounded-xl border border-border-strong/15 aspect-[4/3] relative group shadow-md">
                  <img src="/showroom-mostruario.jpg" alt="Maleta com Mostruário de Joias Pérola Pratas" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050D0A]/90 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[0.72rem] font-medium text-primary">Mostruário que Vai Até Você</span>
                  </div>
                </div>
                <div className="overflow-hidden rounded-xl border border-border-strong/15 aspect-[4/3] relative group shadow-md">
                  <img src="/showroom-escritorio.jpg" alt="Sede Corporativa Pérola Pratas" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050D0A]/90 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[0.72rem] font-medium text-primary">Sede Corporativa & Equipe</span>
                  </div>
                </div>
                <div className="overflow-hidden rounded-xl border border-border-strong/15 aspect-[4/3] relative group shadow-md">
                  <img src="/showroom-cafe.jpg" alt="Cantinho do Café Pérola Pratas" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050D0A]/90 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[0.72rem] font-medium text-primary">Recepção no Showroom</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[550px] mx-auto text-left mb-8">
                <div className="p-4 rounded-xl bg-surface-1/70 border border-border-strong/10">
                  <div className="flex items-center gap-2 text-[hsl(var(--accent))] text-xs font-semibold uppercase mb-1">
                    <Car className="w-4 h-4" />
                    Visita Comercial
                  </div>
                  <div className="text-sm text-primary font-medium">No seu estabelecimento</div>
                  <div className="text-xs text-muted">Sem taxa de deslocamento na região</div>
                </div>

                <div className="p-4 rounded-xl bg-surface-1/70 border border-border-strong/10">
                  <div className="flex items-center gap-2 text-[hsl(var(--accent))] text-xs font-semibold uppercase mb-1">
                    <Building2 className="w-4 h-4" />
                    Sede em Londrina - PR
                  </div>
                  <div className="text-sm text-primary font-medium">Showroom e Sala VIP</div>
                  <div className="text-xs text-muted">Com hora marcada de seg. a sex.</div>
                </div>
              </div>

              <CtaButton 
                label="Agendar Atendimento Presencial no WhatsApp"
                subtitle="Destino direto: (43) 99131-2661"
              />
            </div>

          </div>
        </section>

        {/* ─── FAQ SESSÃO ─── */}
        <section className="py-20 md:py-24 px-4 sm:px-6 md:px-8 border-b border-border-strong/10 bg-[#050D0A]">
          <div className="max-w-[800px] mx-auto">
            
            <div className="text-center mb-12">
              <span className="section-label block mb-3 text-[hsl(var(--accent))]">Tire suas dúvidas</span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-normal text-primary leading-tight mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-secondary text-[0.95rem] font-light">
                Tudo o que você precisa saber sobre o atendimento presencial da Pérola Pratas.
              </p>
            </div>

            <div className="space-y-3 mb-12">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx
                return (
                  <div 
                    key={idx}
                    className="border border-border-strong/15 rounded-xl bg-surface-1/60 overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-serif text-[1.1rem] md:text-[1.2rem] text-primary hover:text-[hsl(var(--accent))] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-tertiary shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[hsl(var(--accent))]' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-secondary text-[0.92rem] leading-relaxed border-t border-border-strong/10 font-light">
                        {faq.a}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="text-center">
              <p className="text-secondary text-sm mb-4">
                Quer saber se atendemos a sua cidade hoje? Fale diretamente com nossa equipe.
              </p>
              <CtaButton 
                label="Consultar Minha Cidade no WhatsApp"
                subtitle="Atendimento rápido e personalizado"
              />
            </div>

          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section className="py-20 md:py-28 px-4 sm:px-6 md:px-8 bg-gradient-to-t from-[#07130e] via-[#050D0A] to-[#050D0A] text-center">
          <div className="max-w-[850px] mx-auto flex flex-col items-center">
            
            <div className="w-16 h-16 rounded-full bg-[hsl(var(--accent))]/15 flex items-center justify-center text-[hsl(var(--accent))] mb-6">
              <Sparkles className="w-8 h-8" />
            </div>

            <h2 className="font-serif text-[clamp(2.4rem,5vw,3.8rem)] font-normal leading-[1.15] text-primary mb-6">
              Receba o Mostruário na Sua Loja e Abasteça com <span className="text-[hsl(var(--accent))] italic">Prata 925 Legítima</span>
            </h2>

            <p className="text-secondary text-[1.05rem] md:text-[1.2rem] leading-relaxed max-w-[680px] mb-10 font-light">
              Agende agora o atendimento presencial. Seja com a visita do nosso consultor no seu espaço ou em nossa sede em Londrina, nós levamos a fábrica até você.
            </p>

            <CtaButton 
              size="lg"
              label="Agendar Atendimento Presencial no WhatsApp"
              subtitle="Mensagem pronta: 'Olá, vim do Google, quero conhecer a Pérola Pratas'"
            />

          </div>
        </section>

      </main>

      {/* ─── FOOTER ─── */}
      <footer className="bg-surface-0 border-t border-border-strong/10 pt-12 px-5 md:px-8 pb-8 text-center md:text-left">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <Link to="/" className="inline-flex items-center">
              <img src="/logo.png" alt="Pérola Pratas" className="logo-img h-8" />
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.82rem] text-tertiary hover:text-primary transition-colors flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              WhatsApp: (43) 99131-2661
            </a>
          </div>

          <div className="h-px bg-border-strong/10 mb-6" />

          <div className="text-[0.7rem] text-muted/80 leading-relaxed max-w-[900px] mx-auto mb-6 text-center">
            <p>
              <strong>Aviso Legal:</strong> Este site destina-se exclusivamente ao fornecimento no atacado de joias em Prata 925 para lojistas e revendedores autônomos. Quaisquer menções a valores sugeridos, estimativas de margem ou exemplos de mercado são ilustrativos. A Pérola Pratas não promete nem garante resultados financeiros, lucros ou faturamento, os quais dependem da estratégia comercial e do esforço de cada revendedor.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-[0.72rem] text-muted tracking-wide uppercase">
              © {new Date().getFullYear()} Pérola Pratas — Todos os Direitos Reservados | CNPJ: 61271311000180
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/termos" className="text-[0.72rem] text-muted hover:text-primary transition-colors underline">Termos de Uso</Link>
              <Link to="/privacidade" className="text-[0.72rem] text-muted hover:text-primary transition-colors underline">Política de Privacidade</Link>
            </div>
            <p className="text-[0.72rem] text-muted">
              Fornecedor de Prata 925 no Atacado · Atendimento com Representante & Showroom
            </p>
          </div>
        </div>
      </footer>

      {/* ─── FLOATING WHATSAPP BUTTON ─── */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] flex items-center justify-center text-white shadow-[0_6px_24px_rgba(37,211,102,0.4)] transform hover:scale-110 active:scale-95 transition-all duration-200"
        aria-label="Falar no WhatsApp: Olá, vim do Google, quero conhecer a Pérola Pratas"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>

    </div>
  )
}
