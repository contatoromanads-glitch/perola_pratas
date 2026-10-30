import React, { useState } from 'react'
import { CheckCircle2, ShieldCheck, ArrowRight, Store, Briefcase, Sparkles, Layers, FileText } from 'lucide-react'

const WA_DEST = '554396784294'

interface LeadTriagemProps {
  className?: string
}

export default function LeadTriagem({ className = '' }: LeadTriagemProps) {
  const [perfil, setPerfil] = useState<'loja' | 'revendedora' | 'novo'>('loja')
  const [faixa, setFaixa] = useState<'899' | '1800' | '3500'>('899')
  const [mix, setMix] = useState<'completo' | 'brincos_colares' | 'aneis_solitarios'>('completo')

  // Dados auditados diretamente no ERP Bling da Pérola Pratas (base com 1.296 produtos de Prata 925)
  const faixasInfo = {
    '899': {
      label: 'R$ 899,00',
      tag: 'Pedido Mínimo Oficial',
      parcelamento: 'Até 3x de R$ 299,67 sem juros no cartão',
      totalPecas: '12 a 16 peças nobres',
      composicao: [
        { item: '4 a 5 Anéis Solitários & Cravejados', sub: 'Aros 14 ao 22 com zircônias' },
        { item: '5 a 6 Brincos & Argolas de Zircônia', sub: 'Clássicos de alto giro para 1º e 2º furos' },
        { item: '2 a 3 Colares Venezianos Italianos', sub: 'Correntes 40/45cm com pingente' },
        { item: '2 Pulseiras com Fecho Reforçado', sub: 'Elo português e veneziana timbrada' },
      ],
      beneficios: [
        'Prata 925 legítima com certificado físico e garantia vitalícia',
        'Fotos profissionais em alta resolução liberadas para suas vendas',
        'Estoque a pronta-entrega com envio em até 24 horas',
      ],
    },
    '1800': {
      label: 'R$ 1.800,00',
      tag: 'Mostruário Completo',
      parcelamento: 'Até 3x de R$ 600,00 sem juros no cartão',
      totalPecas: '25 a 32 peças selecionadas',
      composicao: [
        { item: '8 a 10 Anéis Solitários & Meia Aliança', sub: 'Grade diversificada para pronta entrega' },
        { item: '10 a 12 Brincos, Ear Cuffs & Argolinhas', sub: 'Mix moderno para montagem de vitrine' },
        { item: '5 a 6 Colares, Chokers & Pontos de Luz', sub: 'Peças finas com brilho espelhado' },
        { item: '4 a 5 Pulseiras & Tornozeleiras', sub: 'Acabamento italiano com garantia vitalícia' },
      ],
      beneficios: [
        'Frete expresso com seguro total incluso na remessa',
        'Certificados físicos individuais para cada peça do lote',
        'Acesso prioritário a reposições e lançamentos de catálogo',
      ],
    },
    '3500': {
      label: 'R$ 3.500,00+',
      tag: 'Coleção Estruturada',
      parcelamento: 'Condição especial de parcelamento ou desconto agressivo à vista',
      totalPecas: '50 a 65 peças de fábrica',
      composicao: [
        { item: '16 a 20 Anéis de Alto Padrão', sub: 'Solitários nobres e peças cravejadas' },
        { item: '20 a 25 Brincos & Argolas Premium', sub: 'Volume ideal para abastecimento de loja física' },
        { item: '10 a 12 Colares & Gargantilhas', sub: 'Modelos de destaque para mostruário de luxo' },
        { item: '8 a 10 Pulseiras & Tornozeleiras', sub: 'Joalheria fina com laudo de pureza 925' },
      ],
      beneficios: [
        'Consultoria comercial individual de mix e tendências',
        'Prioridade máxima na separação, conferência e expedição',
        'Condições diferenciadas para recompras recorrentes',
      ],
    },
  }

  const currentFaixa = faixasInfo[faixa]

  // Montar mensagem qualificada, fluida e natural para o WhatsApp comercial
  const buildWhatsAppLink = () => {
    let perfilText = ''
    if (perfil === 'loja') {
      perfilText = 'Tenho loja física de joias/acessórios e gostaria de conhecer as condições de fábrica de vocês.'
    } else if (perfil === 'revendedora') {
      perfilText = 'Trabalho com revenda autônoma de joias e tenho interesse em revender as peças de vocês.'
    } else {
      perfilText = 'Estou abrindo um novo negócio de joias e quero começar com Prata 925 direto de fábrica.'
    }

    let loteText = ''
    if (faixa === '899') {
      loteText = 'Me interessei pelo pedido mínimo de R$ 899'
    } else if (faixa === '1800') {
      loteText = 'Me interessei pelo mostruário completo de R$ 1.800'
    } else {
      loteText = 'Tenho interesse no lote estruturado de R$ 3.500+'
    }

    let mixText = ''
    if (mix === 'brincos_colares') {
      mixText = ' (com preferência por brincos e colares)'
    } else if (mix === 'aneis_solitarios') {
      mixText = ' (com foco em anéis e solitários cravejados)'
    } else {
      mixText = ' (com mix variado para pronta entrega)'
    }

    const texto = `Olá! Vim pelo site da Pérola Pratas. ${perfilText}
${loteText}${mixText}. Poderiam me enviar o catálogo de atacado com a tabela de preços?`

    return `https://wa.me/${WA_DEST}?text=${encodeURIComponent(texto)}`
  }

  return (
    <section id="triagem-atacado" className={`py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-[#06110C] border-t border-emerald-500/10 text-slate-100 ${className}`}>
      <div className="max-w-[1140px] mx-auto space-y-10">
        
        {/* Cabeçalho Clean & Editorial */}
        <div className="text-center max-w-[640px] mx-auto space-y-2.5">
          <span className="text-[0.72rem] font-semibold tracking-widest uppercase text-emerald-400 block">
            Simulador de Atacado
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal font-serif text-slate-100 tracking-tight">
            Monte a composição do seu mostruário
          </h2>
          <p className="text-sm sm:text-[0.95rem] text-slate-400 font-light leading-relaxed">
            Selecione seu perfil e veja a estimativa de peças calculada sobre o nosso catálogo real de Prata 925.
          </p>
        </div>

        {/* Container Principal */}
        <div className="bg-[#0B1B14]/80 border border-emerald-500/15 rounded-2xl p-5 sm:p-8 md:p-9 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Coluna da Esquerda: Controles Compactos & Composição */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* 1. Perfil de Compra */}
              <div className="space-y-2">
                <span className="text-[0.75rem] font-semibold uppercase tracking-wider text-slate-400 block">
                  1. Modelo de Atuação
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'loja', label: 'Loja Física', icon: Store },
                    { id: 'revendedora', label: 'Revendedora', icon: Briefcase },
                    { id: 'novo', label: 'Nova Operação', icon: Sparkles },
                  ].map((item) => {
                    const Icon = item.icon
                    const active = perfil === item.id
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setPerfil(item.id as any)}
                        className={`p-3 rounded-lg border text-center transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                          active
                            ? 'bg-emerald-950/80 border-emerald-400 text-white shadow-[0_2px_12px_rgba(27,110,85,0.3)]'
                            : 'bg-[#06110C]/60 border-emerald-500/15 text-slate-400 hover:text-slate-200 hover:border-emerald-500/30'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${active ? 'text-emerald-300' : 'text-slate-400'}`} />
                        <span className="text-[0.75rem] font-medium leading-tight">{item.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* 2. Faixa de Investimento */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[0.75rem] font-semibold uppercase tracking-wider text-slate-400">
                    2. Faixa de Lote Inicial
                  </span>
                  <span className="text-[0.68rem] text-emerald-400 bg-emerald-950/60 border border-emerald-500/20 px-2 py-0.5 rounded font-medium">
                    Mínimo R$ 899
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: '899', val: 'R$ 899', desc: 'Mínimo de Atacado' },
                    { id: '1800', val: 'R$ 1.800', desc: 'Mostruário Amplo' },
                    { id: '3500', val: 'R$ 3.500+', desc: 'Lote Estruturado' },
                  ].map((f) => {
                    const active = faixa === f.id
                    return (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setFaixa(f.id as any)}
                        className={`p-3 rounded-lg border text-center transition-all cursor-pointer ${
                          active
                            ? 'bg-emerald-950/80 border-emerald-400 text-white shadow-[0_2px_12px_rgba(27,110,85,0.3)]'
                            : 'bg-[#06110C]/60 border-emerald-500/15 text-slate-400 hover:text-slate-200 hover:border-emerald-500/30'
                        }`}
                      >
                        <div className="font-serif text-base sm:text-lg font-medium text-slate-100">{f.val}</div>
                        <div className="text-[0.68rem] text-slate-400 mt-0.5">{f.desc}</div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* 3. Foco de Mix */}
              <div className="space-y-2">
                <span className="text-[0.75rem] font-semibold uppercase tracking-wider text-slate-400 block">
                  3. Preferência de Mix
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'completo', label: 'Mix Equilibrado' },
                    { id: 'brincos_colares', label: 'Brincos & Colares' },
                    { id: 'aneis_solitarios', label: 'Anéis & Solitários' },
                  ].map((m) => {
                    const active = mix === m.id
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setMix(m.id as any)}
                        className={`py-2 px-2.5 rounded-lg border text-center text-[0.75rem] font-medium transition-all cursor-pointer ${
                          active
                            ? 'bg-emerald-900/40 border-emerald-400 text-white'
                            : 'bg-[#06110C]/60 border-emerald-500/15 text-slate-400 hover:text-slate-200 hover:border-emerald-500/30'
                        }`}
                      >
                        {m.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Composição Estimada do Lote */}
              <div className="bg-[#06110C]/80 border border-emerald-500/15 rounded-xl p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-emerald-500/10 pb-2.5">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-emerald-400" />
                    <span className="text-[0.78rem] font-semibold uppercase tracking-wider text-slate-200">
                      Composição ({currentFaixa.totalPecas})
                    </span>
                  </div>
                  <span className="text-[0.68rem] text-emerald-400 font-medium">
                    Prata 925 de Lei
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentFaixa.composicao.map((c, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-[#0B1B14]/60 border border-emerald-500/10">
                      <div className="text-[0.82rem] font-medium text-slate-200">{c.item}</div>
                      <div className="text-[0.72rem] text-slate-400 mt-0.5 font-light">{c.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Coluna da Direita: Resumo Comercial & CTA Direto */}
            <div className="lg:col-span-5 bg-[#06110C] border border-emerald-500/20 rounded-xl p-6 sm:p-7 space-y-6">
              
              <div className="border-b border-emerald-500/15 pb-4">
                <span className="text-[0.68rem] uppercase tracking-widest text-emerald-400 block mb-1 font-semibold">
                  {currentFaixa.tag}
                </span>
                <div className="font-serif text-3xl sm:text-4xl font-normal text-slate-100">
                  {currentFaixa.label}
                </div>
                <div className="text-[0.82rem] font-medium text-emerald-300 mt-1">
                  {currentFaixa.parcelamento}
                </div>
              </div>

              {/* Benefícios Inclusos */}
              <div className="space-y-3 text-[0.82rem] text-slate-300">
                {currentFaixa.beneficios.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="font-light">{b}</span>
                  </div>
                ))}
              </div>

              {/* Botão de Ação Direto */}
              <div className="pt-2 space-y-3">
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-lg bg-[#1B6E55] hover:bg-[#228769] text-white font-medium text-[0.88rem] tracking-wide transition-all shadow-[0_4px_20px_rgba(27,110,85,0.4)] no-underline cursor-pointer group"
                >
                  <FileText className="w-4 h-4 text-emerald-200" />
                  <span>Solicitar Catálogo com Preços de Atacado</span>
                  <ArrowRight className="w-4 h-4 text-emerald-200 group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="flex items-center justify-center gap-2 text-[0.72rem] text-slate-400 text-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Venda exclusiva no atacado com pedido mínimo de R$ 899</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
