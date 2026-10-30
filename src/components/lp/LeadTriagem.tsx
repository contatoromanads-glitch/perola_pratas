import React, { useState } from 'react'
import { CheckCircle2, ShieldCheck, ArrowRight, Store, Briefcase, Sparkles, Truck, Award, Gem, FileText, Layers } from 'lucide-react'

const WA_DEST = '5543991312661'

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
      tag: 'Pedido Mínimo de Atacado',
      custoMedio: 'Peças legítimas com preço de fábrica entre R$ 39,90 e R$ 89,90',
      parcelamento: 'Até 5x de R$ 179,80 sem juros no cartão',
      totalPecas: 'Aprox. 12 a 16 peças nobres de alto giro',
      composicao: [
        { item: '4 a 5 Anéis Solitários & Cravejados', desc: 'Prata 925 maciça com zircônias (aros 14 ao 22)' },
        { item: '5 a 6 Brincos & Argolas de Zircônia', desc: 'Peças clássicas de 1º e 2º furos de alta saída' },
        { item: '2 a 3 Colares & Gargantilhas Venezianas', desc: 'Correntes de 40cm e 45cm com pingente' },
        { item: '2 Pulseiras com Fecho Italiano', desc: 'Acabamento timbrado 925 com elos reforçados' },
      ],
      beneficios: [
        'Frete Grátis na 1ª compra para todo o Brasil',
        'Certificados Físicos de Garantia Vitalícia inclusos',
        'Prata 925 de Lei com acabamento fino de joalheria',
      ],
    },
    '1800': {
      label: 'R$ 1.800,00',
      tag: 'Reposição Ampla de Mostruário',
      custoMedio: 'Mix diversificado para vitrine completa de loja ou maleta',
      parcelamento: 'Até 5x de R$ 360,00 sem juros no cartão',
      totalPecas: 'Aprox. 25 a 32 peças selecionadas',
      composicao: [
        { item: '8 a 10 Anéis Solitários e Alianças', desc: 'Grade variada para pronta-entrega imediata' },
        { item: '10 a 12 Brincos, Ear Cuffs e Argolinhas', desc: 'Composições modernas para manequim' },
        { item: '5 a 6 Colares, Chokers e Venezianas', desc: 'Modelos delicados e pontos de luz' },
        { item: '4 a 5 Pulseiras e Tornozeleiras', desc: 'Fecho resistente e polimento espelhado' },
      ],
      beneficios: [
        'Frete Expresso com Seguro Total incluso',
        'Certificados Físicos de Garantia Vitalícia para cada peça',
        'Material gráfico e tags de apoio para revenda',
      ],
    },
    '3500': {
      label: 'R$ 3.500,00+',
      tag: 'Lote Estruturado de Fábrica',
      custoMedio: 'Máxima margem comercial direta da indústria para grandes revendas',
      parcelamento: 'Faturamento especial PJ ou até 5x sem juros',
      totalPecas: 'Aprox. 50 a 65 peças de alta joalheria',
      composicao: [
        { item: '16 a 20 Anéis de alta rotatividade', desc: 'Linhas clássicas e novidades semanais de fábrica' },
        { item: '20 a 25 Brincos e Argolas nobres', desc: 'Volume ideal para abastecimento de vitrine' },
        { item: '10 a 12 Colares e Gargantilhas', desc: 'Modelos de destaque para compor mostruário' },
        { item: '8 a 10 Pulseiras e Berloques variados', desc: 'Acabamento italiano com garantia vitalícia' },
      ],
      beneficios: [
        'Consultoria dedicada de mix e exclusividade regional',
        'Prioridade máxima na linha de separação e expedição',
        'Acesso antecipado a lançamentos e reposições da fábrica',
      ],
    },
  }

  const perfisInfo = {
    loja: 'Tenho Loja Física / Boutique',
    revendedora: 'Revendedora Autônoma / Vendas Online',
    novo: 'Estou Abrindo Nova Operação',
  }

  const mixInfo = {
    completo: 'Mix Completo de Prata 925',
    brincos_colares: 'Foco em Brincos e Colares',
    aneis_solitarios: 'Foco em Anéis e Solitários Cravejados',
  }

  const currentFaixa = faixasInfo[faixa]

  // Montar mensagem qualificada para o WhatsApp comercial
  const buildWhatsAppLink = () => {
    const texto = `Olá! Vim pelo site da Pérola Pratas. 
Sou ${perfisInfo[perfil]}. 
Selecionei o lote de ${currentFaixa.label} com foco em ${mixInfo[mix]}. 
Gostaria de liberar o catálogo com preços de atacado e tirar dúvidas com o consultor comercial.`

    return `https://wa.me/${WA_DEST}?text=${encodeURIComponent(texto)}`
  }

  return (
    <section id="triagem-atacado" className={`py-16 md:py-24 px-4 sm:px-6 md:px-10 bg-surface-1 border-t border-border-subtle text-primary ${className}`}>
      <div className="max-w-[1120px] mx-auto space-y-10">
        
        {/* Cabeçalho Institucional da Seção */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 border border-border-subtle text-xs font-mono uppercase tracking-widest text-[hsl(var(--accent-soft))]">
            <Award className="w-3.5 h-3.5 text-[hsl(var(--accent-soft))]" />
            <span>Condição Comercial de Fábrica • Pronta-Entrega</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-primary font-serif">
            Simulador de Mostruário & Atendimento B2B
          </h2>
          <p className="text-sm sm:text-base text-secondary font-light leading-relaxed">
            Veja a composição real do seu lote de fábrica antes de solicitar o catálogo exclusivo para lojistas e revendedoras autônomas.
          </p>
        </div>

        {/* Card Principal de Triagem */}
        <div className="bg-surface-2 border border-border-subtle rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Coluna da Esquerda: Controles de Seleção + Composição Visual */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Passo 1: Perfil */}
              <div className="space-y-3">
                <label className="text-xs font-mono uppercase tracking-wider text-secondary block">
                  1. Seu modelo de atuação:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'loja', label: 'Loja Física', icon: Store },
                    { id: 'revendedora', label: 'Revendedora Autônoma', icon: Briefcase },
                    { id: 'novo', label: 'Nova Operação', icon: Sparkles },
                  ].map((item) => {
                    const Icon = item.icon
                    const active = perfil === item.id
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setPerfil(item.id as any)}
                        className={`p-3 rounded-xl border text-left transition-all flex items-center sm:flex-col sm:items-start gap-2.5 ${
                          active
                            ? 'bg-surface-3 border-[hsl(var(--accent-soft))] text-primary shadow-[0_2px_12px_rgba(0,0,0,0.5)]'
                            : 'bg-surface-0/60 border-border-subtle text-secondary hover:border-white/20 hover:text-primary'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${active ? 'text-[hsl(var(--accent-soft))]' : 'text-muted'}`} />
                        <span className="text-xs font-medium">{item.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Passo 2: Faixa de Pedido de Fábrica */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono uppercase tracking-wider text-secondary block">
                    2. Volume planejado de abastecimento:
                  </label>
                  <span className="text-[11px] font-mono text-[hsl(var(--accent-soft))] bg-surface-3 border border-border-subtle px-2 py-0.5 rounded">
                    Mínimo: R$ 899
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: '899', val: 'R$ 899', desc: 'Mínimo de Atacado' },
                    { id: '1800', val: 'R$ 1.800', desc: 'Reposição Ampla' },
                    { id: '3500', val: 'R$ 3.500+', desc: 'Lote Estruturado' },
                  ].map((f) => {
                    const active = faixa === f.id
                    return (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setFaixa(f.id as any)}
                        className={`p-3.5 rounded-xl border text-center transition-all ${
                          active
                            ? 'bg-surface-3 border-[hsl(var(--accent-soft))] text-primary shadow-[0_2px_12px_rgba(0,0,0,0.5)]'
                            : 'bg-surface-0/60 border-border-subtle text-secondary hover:border-white/20 hover:text-primary'
                        }`}
                      >
                        <div className="font-mono text-sm sm:text-base font-bold text-primary">{f.val}</div>
                        <div className="text-[10px] text-tertiary mt-0.5">{f.desc}</div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Passo 3: Foco de Categoria */}
              <div className="space-y-3">
                <label className="text-xs font-mono uppercase tracking-wider text-secondary block">
                  3. Linha prioritária para o seu mostruário:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'completo', label: 'Mix Completo' },
                    { id: 'brincos_colares', label: 'Brincos & Colares' },
                    { id: 'aneis_solitarios', label: 'Anéis & Solitários' },
                  ].map((m) => {
                    const active = mix === m.id
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setMix(m.id as any)}
                        className={`py-2 px-3 rounded-lg border text-center text-xs font-medium transition-all ${
                          active
                            ? 'bg-surface-3 border-white/30 text-primary'
                            : 'bg-surface-0/60 border-border-subtle text-secondary hover:border-white/20'
                        }`}
                      >
                        {m.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* BLOCO: Composição Detalhada Auditada no Bling */}
              <div className="bg-surface-0/80 border border-border-subtle rounded-xl p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-border-subtle pb-2.5">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[hsl(var(--accent-soft))]" />
                    <span className="text-xs font-bold font-mono uppercase tracking-wider text-primary">
                      Composição do Lote ({currentFaixa.totalPecas})
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[hsl(var(--accent-soft))]">
                    Prata 925 Maciça
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {currentFaixa.composicao.map((c, idx) => (
                    <div key={idx} className="bg-surface-2/60 border border-border-subtle/60 rounded-lg p-2.5">
                      <div className="text-xs font-semibold text-primary">{c.item}</div>
                      <div className="text-[11px] text-tertiary mt-0.5 font-light">{c.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="text-[11px] font-mono text-tertiary pt-1 flex items-center gap-1.5">
                  <Gem className="w-3.5 h-3.5 text-[hsl(var(--accent-soft))]" />
                  <span>{currentFaixa.custoMedio}</span>
                </div>
              </div>

            </div>

            {/* Coluna da Direita: Resumo Comercial & Botão Irresistível */}
            <div className="lg:col-span-5 bg-surface-0 border border-border-subtle rounded-xl p-5 sm:p-6 space-y-5">
              
              <div className="border-b border-border-subtle pb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[hsl(var(--accent-soft))] block mb-1">
                  Resumo da Condição Comercial
                </span>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-primary flex items-baseline gap-2">
                  <span>{currentFaixa.label}</span>
                </div>
                <div className="text-xs font-medium text-[hsl(var(--accent-soft))] mt-0.5">
                  {currentFaixa.parcelamento}
                </div>
                <p className="text-xs text-secondary mt-1">{currentFaixa.tag}</p>
              </div>

              {/* Benefícios Inclusos */}
              <div className="space-y-2.5 text-xs text-secondary">
                {currentFaixa.beneficios.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent-soft))] shrink-0 mt-0.5" />
                    <span><strong>{b}</strong></span>
                  </div>
                ))}
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[hsl(var(--accent-soft))] shrink-0 mt-0.5" />
                  <span><strong>Garantia Vitalícia:</strong> Prata 925 legítima hipoalergênica.</span>
                </div>
              </div>

              {/* CTA Gancho do Catálogo Irresistível */}
              <div className="pt-2 space-y-2.5">
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !w-full !py-4 !px-6 !rounded-xl !text-xs sm:!text-sm !font-semibold !tracking-wider !uppercase cursor-pointer text-center no-underline shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                >
                  <span className="flex items-center justify-center gap-2">
                    <FileText className="w-4 h-4" />
                    Liberar Catálogo com Preços de Fábrica
                    <ArrowRight className="w-4 h-4 text-white" />
                  </span>
                </a>
                
                <p className="text-[11px] text-center text-secondary font-light">
                  Acesso imediato à tabela oficial de atacado com mais de 1.200 modelos.
                </p>
              </div>

              {/* Disclaimer de Conformidade Google Ads */}
              <div className="p-3 bg-surface-2 rounded-lg border border-border-subtle text-[10px] text-muted leading-relaxed">
                <strong>Aviso de Atacado B2B:</strong> Venda exclusiva em regime atacadista para revendedoras autônomas e lojistas com pedido mínimo de R$ 899. Não realizamos vendas fracionadas a preço de varejo.
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
