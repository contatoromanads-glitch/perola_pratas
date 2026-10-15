import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  CheckCircle2, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Gem, 
  TrendingUp, 
  PackageCheck, 
  ChevronDown, 
  UserCheck, 
  Eye, 
  CalendarCheck,
  Award,
  ArrowRight,
  Coffee
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
  label = 'Agendar Atendimento Presencial no WhatsApp', 
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
    title: 'Insegurança com o Acabamento e Peso Real',
    desc: 'Comprar joias apenas por fotos na internet pode ser frustrante. Ao vivo, você percebe que a peça é oca, com fecho frágil ou acabamento grosseiro que espanta suas clientes mais exigentes.'
  },
  {
    icon: '❌',
    title: 'Medo de Prata Impura ou Banho de Baixa Qualidade',
    desc: 'Sem ver a peça e sem poder atestar sua pureza com especialistas, fica o receio de adquirir peças que escurecem em dias ou descascam, queimando a sua reputação no mercado.'
  },
  {
    icon: '❌',
    title: 'Dificuldade de Montar um Mix Vencedor Sozinho(a)',
    desc: 'Sem um consultor de atacado para orientar os itens de maior giro da estação, é fácil gastar capital com produtos que encalham no mostruário e drenam o seu fluxo de caixa.'
  },
  {
    icon: '❌',
    title: 'Frete Caro e Ansiedade com Prazos de Encomenda',
    desc: 'Ficar refém do envio, com prazos incertos e risco de extravio enquanto suas clientes pedem novidades para o final de semana. No presencial, você escolhe e já sai com o estoque pronto.'
  }
]

const FAQS = [
  {
    q: 'Preciso ter CNPJ para ser atendido no presencial?',
    a: 'Não! Atendemos tanto lojistas com CNPJ quanto revendedores autônomos e pessoas que desejam começar seu negócio com Prata 925. Você terá acesso às mesmas condições de fábrica no atacado.'
  },
  {
    q: 'Como funciona o agendamento presencial?',
    a: 'É muito simples: você clica no botão do WhatsApp com a mensagem automática, conversa diretamente com nossa equipe e nós reservamos o melhor dia e horário para seu atendimento privativo.'
  },
  {
    q: 'Posso escolher as peças uma a uma no showroom?',
    a: 'Sim! Essa é a maior vantagem do atendimento presencial. Você pega na mão, avalia o brilho, o fecho e o acabamento, e monta seu pedido com as peças exatas que seu público procura.'
  },
  {
    q: 'As peças têm garantia de autenticidade da Prata 925?',
    a: 'Sim. Todas as peças da Pérola Pratas são produzidas em Prata 925 legítima, acompanham garantia vitalícia no teor do metal nobre e certificado de autenticidade da fábrica.'
  },
  {
    q: 'Já posso sair com as joias na hora?',
    a: 'Com certeza! Nosso showroom conta com acervo completo para pronta entrega. Você escolhe, efetua o pagamento com condições facilitadas e já leva suas peças prontas para revender.'
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
              Showroom & Atendimento Presencial
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
          <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
            
            {/* Top pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-2/80 border border-border-strong/15 text-tertiary text-[0.72rem] tracking-wider uppercase mb-6 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[hsl(var(--accent))]" />
              <span>Showroom em Londrina - PR · Atendimento Exclusivo 1 a 1</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-[clamp(2.3rem,5.5vw,4.2rem)] font-normal leading-[1.12] tracking-tight mb-6 text-primary">
              Compre <span className="text-[hsl(var(--accent))] italic font-normal">Prata 925</span> Direto da Fábrica com{' '}
              <span className="underline decoration-[hsl(var(--accent))]/40 underline-offset-8">Atendimento Presencial</span>
            </h1>

            {/* Subtitle */}
            <p className="text-secondary text-[1.05rem] md:text-[1.25rem] leading-relaxed max-w-[760px] mx-auto mb-10 font-light">
              Toque nas peças, comprove o peso e acabamento de cada joia e receba uma <strong>consultoria especializada</strong> para montar o mix com maior margem de lucro para o seu negócio.
            </p>

            {/* Hero CTA Button with exact user phrase */}
            <div className="mb-12 w-full flex justify-center">
              <CtaButton 
                size="lg"
                label="Agendar Atendimento Presencial no WhatsApp"
                subtitle="Atendimento VIP com horário exclusivo · Sem compromisso"
              />
            </div>

            {/* 3 Key Trust Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-[850px] pt-8 border-t border-border-strong/10">
              <div className="flex items-center justify-center gap-3 p-3 rounded-lg bg-surface-1/40 border border-border-strong/10 text-left">
                <Gem className="w-5 h-5 text-[hsl(var(--accent))] shrink-0" />
                <div>
                  <div className="font-serif text-lg font-medium text-primary leading-tight">Prata 925 Legítima</div>
                  <div className="text-[0.72rem] text-tertiary">Garantia vitalícia no teor</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 p-3 rounded-lg bg-surface-1/40 border border-border-strong/10 text-left">
                <PackageCheck className="w-5 h-5 text-[hsl(var(--accent))] shrink-0" />
                <div>
                  <div className="font-serif text-lg font-medium text-primary leading-tight">Pronta Entrega</div>
                  <div className="text-[0.72rem] text-tertiary">Escolha e leve na hora</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 p-3 rounded-lg bg-surface-1/40 border border-border-strong/10 text-left">
                <TrendingUp className="w-5 h-5 text-[hsl(var(--accent))] shrink-0" />
                <div>
                  <div className="font-serif text-lg font-medium text-primary leading-tight">Até 200% de Margem</div>
                  <div className="text-[0.72rem] text-tertiary">Condição direto de fábrica</div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ─── DORES (PROBLEMAS DE COMPRAR SEM VER DE PERTO) ─── */}
        <section className="py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-surface-0/60 border-b border-border-strong/10">
          <div className="max-w-[1100px] mx-auto">
            
            <div className="text-center max-w-[680px] mx-auto mb-14">
              <span className="section-label block mb-3 text-[hsl(var(--accent))]">Segurança para o seu investimento</span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-normal text-primary leading-tight mb-4">
                Cansado da insegurança de comprar joias <span className="text-[hsl(var(--danger))]">sem tocar na peça?</span>
              </h2>
              <p className="text-secondary text-[0.98rem] leading-relaxed">
                Revender joias exige confiança absoluta na qualidade. Comprar no escuro traz riscos que custam caro para quem quer crescer.
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
                Elimine todas essas dúvidas no nosso atendimento presencial
              </h3>
              <p className="text-secondary text-[0.95rem] max-w-[620px] mb-6 font-light">
                Venha conhecer o showroom da Pérola Pratas. Você confere cada detalhe com seus próprios olhos antes de fechar qualquer pedido.
              </p>
              <CtaButton 
                label="Agendar Atendimento Presencial no WhatsApp"
                subtitle="Fale agora com a equipe da fábrica e escolha seu horário"
              />
            </div>

          </div>
        </section>

        {/* ─── SESSÃO INFORMATIVA 1: SHOWROOM & TOQUE REAL ─── */}
        <section className="py-20 md:py-24 px-4 sm:px-6 md:px-8 border-b border-border-strong/10 bg-surface-1/20">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 text-[0.7rem] uppercase tracking-wider text-[hsl(var(--accent))] font-medium border border-border-strong/10">
                  <span>Sessão 01 · Experiência Sensorial</span>
                </div>
                
                <h2 className="font-serif text-[clamp(2.2rem,4vw,3.4rem)] font-normal text-primary leading-[1.15]">
                  Veja o Brilho, Sinta o Peso e Comprove o <span className="text-[hsl(var(--accent))] italic">Padrão da Prata 925</span>
                </h2>

                <p className="text-secondary text-[1rem] leading-relaxed font-light">
                  No showroom presencial da <strong>Pérola Pratas</strong>, você sai da teoria e entra no controle total do que oferece às suas clientes. Tenha acesso a gaveteiros completos com centenas de modelos selecionados.
                </p>

                <div className="space-y-3.5 pt-2">
                  {[
                    'Avalie fechos, cravação de zircônias e polimento espelhado em detalhes;',
                    'Verifique a pureza da Prata 925 com suporte de balança de precisão e certificados;',
                    'Compare espessuras de correntes venezianas, grumet, elo português e fita;',
                    'Ambiente seguro, privativo e climatizado para fazer suas escolhas com calma.'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                      <span className="text-secondary text-[0.92rem] font-light">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <CtaButton 
                    label="Agendar Visita no Showroom via WhatsApp"
                    subtitle="Clique para marcar seu horário exclusivo"
                  />
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative p-6 sm:p-8 rounded-2xl bg-surface-2/90 border border-border-strong/20 shadow-2xl">
                  {/* Foto do Showroom & Escritório */}
                  <div className="relative overflow-hidden rounded-xl mb-6 border border-border-strong/15 aspect-[4/3] group shadow-lg">
                    <img 
                      src="/showroom-escritorio.jpg" 
                      alt="Showroom e sala de atendimento presencial da Pérola Pratas" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050D0A]/95 via-[#050D0A]/20 to-transparent flex items-end p-4">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse shadow-[0_0_8px_#25D366]" />
                        <span className="text-[0.75rem] font-medium text-primary tracking-wide drop-shadow">
                          Showroom Oficial & Sala de Atendimento VIP
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 pb-4 border-b border-border-strong/10">
                      <div className="w-12 h-12 rounded-xl bg-[hsl(var(--accent))]/15 flex items-center justify-center text-[hsl(var(--accent))]">
                        <Eye className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-serif text-xl text-primary font-medium">Toque Real & Transparência</h4>
                        <p className="text-xs text-muted">Sem surpresas desagradáveis na entrega</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-xl bg-surface-1/80 border border-border-strong/10">
                        <div className="text-2xl font-serif text-[hsl(var(--accent))] font-medium mb-1">+1.500</div>
                        <div className="text-xs text-tertiary">Modelos em pronta entrega no showroom</div>
                      </div>
                      <div className="p-4 rounded-xl bg-surface-1/80 border border-border-strong/10">
                        <div className="text-2xl font-serif text-[hsl(var(--accent))] font-medium mb-1">100%</div>
                        <div className="text-xs text-tertiary">Prata 925 legítima e pura garantida</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20">
                      <div className="flex items-center gap-2 text-[#25D366] text-xs font-semibold uppercase tracking-wider mb-1">
                        <Award className="w-4 h-4" />
                        Garantia Vitalícia
                      </div>
                      <p className="text-xs text-secondary leading-relaxed">
                        Cada joia adquirida em nossa fábrica acompanha termo de garantia vitalícia na autenticidade e pureza da prata.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── SESSÃO INFORMATIVA 2: CONSULTORIA ESPECIALIZADA 1 A 1 ─── */}
        <section className="py-20 md:py-24 px-4 sm:px-6 md:px-8 border-b border-border-strong/10 bg-[#050D0A]">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative p-6 sm:p-8 rounded-2xl bg-surface-2/90 border border-border-strong/20 shadow-2xl">
                  {/* Foto do Cantinho do Café */}
                  <div className="relative overflow-hidden rounded-xl mb-6 border border-border-strong/15 aspect-[4/3] group shadow-lg">
                    <img 
                      src="/showroom-cafe.jpg" 
                      alt="Cantinho do café e hospitalidade para clientes da Pérola Pratas" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050D0A]/95 via-[#050D0A]/20 to-transparent flex items-end p-4">
                      <div className="flex items-center gap-2">
                        <Coffee className="w-4 h-4 text-[hsl(var(--accent))]" />
                        <span className="text-[0.75rem] font-medium text-primary tracking-wide drop-shadow">
                          Recepção com Café Expresso · Conforto para suas escolhas
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
                        <h4 className="font-serif text-xl text-primary font-medium">Consultoria Estratégica</h4>
                        <p className="text-xs text-muted">Apoio prático de quem entende do mercado</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="p-3.5 rounded-lg bg-surface-1/70 border border-border-strong/10">
                        <div className="text-sm font-medium text-primary mb-1">1. Diagnóstico do seu Público</div>
                        <p className="text-xs text-muted">Ajudamos a identificar a faixa de preço e o estilo que tem mais aderência aos seus clientes.</p>
                      </div>
                      <div className="p-3.5 rounded-lg bg-surface-1/70 border border-border-strong/10">
                        <div className="text-sm font-medium text-primary mb-1">2. Mix com Giro Rápido</div>
                        <p className="text-xs text-muted">Seleção balanceada entre peças âncora (alto volume) e joias de alto ticket para maximizar seu lucro.</p>
                      </div>
                      <div className="p-3.5 rounded-lg bg-surface-1/70 border border-border-strong/10">
                        <div className="text-sm font-medium text-primary mb-1">3. Orientação de Precificação</div>
                        <p className="text-xs text-muted">Sugestões de markup praticadas no mercado de joias para você precificar com segurança e rentabilidade.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 text-[0.7rem] uppercase tracking-wider text-[hsl(var(--accent))] font-medium border border-border-strong/10">
                  <span>Sessão 02 · Atendimento 1 a 1</span>
                </div>

                <h2 className="font-serif text-[clamp(2.2rem,4vw,3.4rem)] font-normal text-primary leading-[1.15]">
                  Você não escolhe sozinho(a): tenha uma <span className="text-[hsl(var(--accent))] italic">Consultoria Dedicada</span>
                </h2>

                <p className="text-secondary text-[1rem] leading-relaxed font-light">
                  Diferente de um site impessoal, no atendimento presencial você é recebido por um <strong>especialista em atacado de joias</strong> que senta com você para estruturar o seu estoque.
                </p>

                <div className="space-y-3.5 pt-2">
                  {[
                    'Indicação das peças "top-sellers" com menor tempo de prateleira;',
                    'Dicas de apresentação, composição de mix e kits presenteáveis;',
                    'Auxílio para iniciantes: monte seu primeiro mostruário sem desperdiçar dinheiro;',
                    'Atendimento acolhedor e focado no crescimento de longo prazo do seu negócio.'
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
                    subtitle="Envie a mensagem e reserve seu atendimento exclusivo"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── SESSÃO INFORMATIVA 3: CONDIÇÕES DE FÁBRICA & RETIRADA IMEDIATA ─── */}
        <section className="py-20 md:py-24 px-4 sm:px-6 md:px-8 border-b border-border-strong/10 bg-surface-1/20">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 text-[0.7rem] uppercase tracking-wider text-[hsl(var(--accent))] font-medium border border-border-strong/10">
                  <span>Sessão 03 · Vantagens de Fábrica</span>
                </div>

                <h2 className="font-serif text-[clamp(2.2rem,4vw,3.4rem)] font-normal text-primary leading-[1.15]">
                  Preço Real de Fábrica e <span className="text-[hsl(var(--accent))] italic">Retirada Imediata</span> no Balcão
                </h2>

                <p className="text-secondary text-[1rem] leading-relaxed font-light">
                  Elimine intermediários e custos de frete. No showroom presencial, você compra no atacado direto da fonte produtora e já sai com as joias embaladas na mão para começar a vender no mesmo dia.
                </p>

                <div className="space-y-3.5 pt-2">
                  {[
                    'Tabela de atacado direto de fábrica para margens líquidas superiores;',
                    'Zero espera de transporte e zero custo de frete na retirada;',
                    'Pagamento facilitado: Pix com desconto ou parcelamento para abastecer seu negócio;',
                    'Agilidade para suprir reposições urgentes de clientes e datas comemorativas.'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                      <span className="text-secondary text-[0.92rem] font-light">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <CtaButton 
                    label="Garantir Preços de Fábrica via WhatsApp"
                    subtitle="Clique para conversar direto com a equipe de vendas"
                  />
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative p-6 sm:p-8 rounded-2xl bg-surface-2/90 border border-border-strong/20 shadow-2xl">
                  {/* Foto do Mostruário de Joias */}
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
                          Estoque Físico à Pronta Entrega · Conferência no Balcão
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 pb-4 border-b border-border-strong/10">
                      <div className="w-12 h-12 rounded-xl bg-[hsl(var(--accent))]/15 flex items-center justify-center text-[hsl(var(--accent))]">
                        <PackageCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-serif text-xl text-primary font-medium">Agilidade Operacional</h4>
                        <p className="text-xs text-muted">Compre hoje, venda hoje</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3.5 rounded-lg bg-surface-1/80 border border-border-strong/10">
                        <span className="text-sm text-secondary">Frete e envio:</span>
                        <span className="text-sm font-semibold text-[#25D366]">R$ 0,00 (Retirada Imediata)</span>
                      </div>
                      <div className="flex items-center justify-between p-3.5 rounded-lg bg-surface-1/80 border border-border-strong/10">
                        <span className="text-sm text-secondary">Tempo de espera:</span>
                        <span className="text-sm font-semibold text-primary">Zero (Você leva na hora)</span>
                      </div>
                      <div className="flex items-center justify-between p-3.5 rounded-lg bg-surface-1/80 border border-border-strong/10">
                        <span className="text-sm text-secondary">Conferência de peças:</span>
                        <span className="text-sm font-semibold text-primary">Item por item no balcão</span>
                      </div>
                    </div>

                    <div className="pt-2 text-center">
                      <p className="text-xs text-muted">
                        Condições exclusivas para compras e retiradas presenciais agendadas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── COMO FUNCIONA O AGENDAMENTO ─── */}
        <section className="py-20 md:py-24 px-4 sm:px-6 md:px-8 border-b border-border-strong/10 bg-[#050D0A]">
          <div className="max-w-[1000px] mx-auto text-center">
            
            <span className="section-label block mb-3 text-[hsl(var(--accent))]">Passo a passo simples</span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-normal text-primary leading-tight mb-4">
              Como agendar o seu <span className="italic text-[hsl(var(--accent))]">Atendimento Presencial</span>
            </h2>
            <p className="text-secondary text-[0.98rem] max-w-[600px] mx-auto mb-14 font-light">
              Garantimos um horário reservado exclusivamente para você, sem filas e com consultor à disposição.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
              {[
                {
                  step: '01',
                  title: 'Clique no WhatsApp',
                  desc: 'Você será direcionado com a mensagem automática pronta para nossa equipe comercial.'
                },
                {
                  step: '02',
                  title: 'Escolha seu Horário',
                  desc: 'Definimos o dia e horário mais conveniente para o seu atendimento no showroom.'
                },
                {
                  step: '03',
                  title: 'Visite & Fature',
                  desc: 'Venha tomar um café, escolha suas joias de Prata 925 com nossa consultoria e saia pronta para lucrar.'
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
              label="Agendar Meu Horário no Showroom Agora"
              subtitle="Atendimento VIP com horário reservado"
            />

          </div>
        </section>

        {/* ─── SHOWROOM INFO & LOCALIZAÇÃO ─── */}
        <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 border-b border-border-strong/10 bg-surface-1/30">
          <div className="max-w-[900px] mx-auto text-center">
            
            <div className="p-8 md:p-10 rounded-2xl bg-surface-2/80 border border-border-strong/15">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--accent))]/15 flex items-center justify-center text-[hsl(var(--accent))] mx-auto mb-4">
                <MapPin className="w-6 h-6" />
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-normal text-primary mb-3">
                Localização e Horários do Showroom Pérola Pratas
              </h3>

              <p className="text-secondary text-[0.95rem] max-w-[600px] mx-auto mb-8 font-light">
                Nosso showroom está preparado para receber você com total conforto, segurança e estacionamento fácil em Londrina e região.
              </p>

              {/* Galeria Visual do Espaço */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <div className="overflow-hidden rounded-xl border border-border-strong/15 aspect-[4/3] relative group shadow-md">
                  <img src="/showroom-escritorio.jpg" alt="Showroom e Escritório Pérola Pratas" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050D0A]/90 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[0.72rem] font-medium text-primary">Sala de Atendimento VIP</span>
                  </div>
                </div>
                <div className="overflow-hidden rounded-xl border border-border-strong/15 aspect-[4/3] relative group shadow-md">
                  <img src="/showroom-cafe.jpg" alt="Cantinho do Café Pérola Pratas" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050D0A]/90 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[0.72rem] font-medium text-primary">Cantinho do Café</span>
                  </div>
                </div>
                <div className="overflow-hidden rounded-xl border border-border-strong/15 aspect-[4/3] relative group shadow-md">
                  <img src="/showroom-mostruario.jpg" alt="Mostruário de Prata 925" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050D0A]/90 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[0.72rem] font-medium text-primary">Pronta Entrega de Joias</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[500px] mx-auto text-left mb-8">
                <div className="p-4 rounded-xl bg-surface-1/70 border border-border-strong/10">
                  <div className="flex items-center gap-2 text-[hsl(var(--accent))] text-xs font-semibold uppercase mb-1">
                    <Clock className="w-4 h-4" />
                    Horários
                  </div>
                  <div className="text-sm text-primary font-medium">Segunda a Sexta</div>
                  <div className="text-xs text-muted">08h30 às 18h00 (Com agendamento)</div>
                </div>

                <div className="p-4 rounded-xl bg-surface-1/70 border border-border-strong/10">
                  <div className="flex items-center gap-2 text-[hsl(var(--accent))] text-xs font-semibold uppercase mb-1">
                    <CalendarCheck className="w-4 h-4" />
                    Formato
                  </div>
                  <div className="text-sm text-primary font-medium">Com Hora Marcada</div>
                  <div className="text-xs text-muted">Atendimento 1 a 1 sem espera</div>
                </div>
              </div>

              <CtaButton 
                label="Confirmar Horário pelo WhatsApp"
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
                Ainda tem alguma dúvida específica? Fale agora com nossa equipe.
              </p>
              <CtaButton 
                label="Tirar Dúvidas no WhatsApp"
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
              Pronto para Conhecer a Fábrica e Abastecer seu Mostruário com <span className="text-[hsl(var(--accent))] italic">Prata 925 Legítima?</span>
            </h2>

            <p className="text-secondary text-[1.05rem] md:text-[1.2rem] leading-relaxed max-w-[650px] mb-10 font-light">
              Agende seu atendimento presencial agora mesmo. Venha ver de perto a pureza e a elegância de cada joia e leve seu negócio de revenda para o próximo nível.
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
              Fornecedor de Prata 925 no Atacado · Showroom Presencial
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
