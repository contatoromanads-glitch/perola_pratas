import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

const WA_LINK = 'https://wa.me/554396784294?text=Ol%C3%A1!%20Vim%20pelo%20site%20institucional%20e%20quero%20conhecer%20as%20solu%C3%A7%C3%B5es%20de%20f%C3%A1brica%20da%20P%C3%A9rola%20Pratas.';

const ITEMS = [
  { problem: 'Prata com liga duvidosa', solution: 'Prata 925 legítima fundida com garantia vitalícia e laudo de teor.' },
  { problem: 'Margem estrangulada', solution: 'Preço de fábrica direto da indústria, sem atravessadores no atacado.' },
  { problem: 'Incerteza na escolha do mix', solution: 'Curadoria comercial com indicação dos itens de maior giro no mercado.' },
  { problem: 'Capital excessivo para iniciar', solution: 'Pedido mínimo acessível de R$ 899 em até 3x sem juros.' },
  { problem: 'Falta de suporte no pós-venda', solution: 'Fotos profissionais em alta resolução e atendimento dedicado via WhatsApp.' },
  { problem: 'Lentidão na reposição', solution: 'Estoque próprio para pronta entrega e despacho em até 24 horas úteis.' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
};

export default function Solution() {
  return (
    <section id="solucao" className="py-20 md:py-28 px-5 md:px-8 relative z-10 bg-[#081510] border-b border-emerald-500/10">
      <div className="max-w-[1160px] mx-auto">
        <div className="text-center max-w-[680px] mx-auto mb-14">
          <span className="text-[0.72rem] font-semibold tracking-widest uppercase text-emerald-400 mb-3 block">
            Estrutura & Engenharia de Atacado
          </span>
          <h2 className="font-serif font-normal text-[clamp(2.2rem,4vw,3.2rem)] tracking-tight mb-4 text-slate-100 leading-[1.12]">
            Cada obstáculo resolvido com padrão industrial
          </h2>
          <p className="text-slate-400 text-[1.02rem] leading-relaxed font-light">
            A Pérola Pratas atua como o braço produtivo e logístico do seu negócio, garantindo previsibilidade de entrega e rentabilidade sólida.
          </p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col gap-3.5"
        >
          {ITEMS.map((s) => (
            <motion.div 
              key={s.problem} 
              variants={rowVariants}
              className="p-5 sm:p-6 rounded-lg bg-[#0B1B14]/80 border border-emerald-500/15 grid grid-cols-1 md:grid-cols-[1fr_auto_1.4fr] gap-4 md:gap-6 items-center hover:border-emerald-500/30 transition-all"
            >
              <div>
                <div className="flex items-center gap-1.5 mb-1.5 text-rose-400/90 text-[0.72rem] font-semibold tracking-wider uppercase">
                  <XCircle className="w-3.5 h-3.5" />
                  <span>Cenário Comum de Mercado</span>
                </div>
                <p className="font-serif text-[1.15rem] text-slate-200 font-medium">{s.problem}</p>
              </div>

              <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-emerald-950/60 border border-emerald-500/20 text-emerald-400 flex-shrink-0">
                <ArrowRight className="w-4 h-4" />
              </div>

              <div>
                <div className="flex items-center gap-1.5 mb-1.5 text-emerald-400 text-[0.72rem] font-semibold tracking-wider uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Solução Pérola Pratas</span>
                </div>
                <p className="text-slate-300 text-[0.92rem] leading-relaxed font-light">{s.solution}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a 
            href={WA_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-[#1B6E55] hover:bg-[#228769] text-white font-medium text-[0.92rem] tracking-wide transition-all shadow-[0_4px_20px_rgba(27,110,85,0.35)] no-underline"
          >
            <span>Conhecer Condições para o Seu Negócio</span>
            <ArrowRight className="w-4 h-4 text-emerald-200" />
          </a>
        </div>
      </div>
    </section>
  );
}
