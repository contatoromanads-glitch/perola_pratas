import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ShieldAlert, TrendingDown, Compass, UserX, Clock } from 'lucide-react';

const PROBLEMS = [
  {
    icon: ShieldAlert,
    title: 'Insegurança com Pureza do Metal',
    desc: 'Comprar joias que oxidam precocemente ou contêm ligas impuras destrói a reputação da sua marca e gera devoluções de clientes exigentes.',
  },
  {
    icon: TrendingDown,
    title: 'Margem Asfixiada por Intermediários',
    desc: 'Preços inflacionados por atravessadores reduzem o seu lucro líquido e limitam sua capacidade de oferecer condições competitivas de vitrine.',
  },
  {
    icon: Compass,
    title: 'Falta de Orientação para Montar Mix',
    desc: 'Investir em peças que não giram ou em aros desbalanceados imobiliza seu capital de giro com estoque parado.',
  },
  {
    icon: UserX,
    title: 'Ausência de Suporte Pós-Pedido',
    desc: 'Fornecedores que desaparecem após o pagamento, não fornecem fotos profissionais de alta definição e deixam o lojista desassistido.',
  },
  {
    icon: Clock,
    title: 'Prazos Excessivos de Fabricação',
    desc: 'Demora de semanas para reposição, fazendo você perder vendas no momento mais aquecido do mês.',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Problems() {
  return (
    <section id="problemas" className="py-20 md:py-28 px-5 md:px-8 relative z-10 bg-[#06110C] border-b border-emerald-500/10">
      <div className="max-w-[1160px] mx-auto">
        <div className="text-center max-w-[680px] mx-auto mb-14">
          <span className="text-[0.72rem] font-semibold tracking-widest uppercase text-emerald-400 mb-3 block">
            Desafios Operacionais da Revenda
          </span>
          <h2 className="font-serif font-normal text-[clamp(2.2rem,4vw,3.2rem)] tracking-tight mb-4 text-slate-100 leading-[1.12]">
            Os gargalos que comprometem a lucratividade de quem revende joias
          </h2>
          <p className="text-slate-400 text-[1.02rem] leading-relaxed font-light">
            Trabalhar com joalheria exige precisão técnica, confiança no metal e agilidade no abastecimento. Conheça as falhas que nossa estrutura elimina:
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {PROBLEMS.map((p, idx) => {
            const Icon = p.icon;
            const isLast = idx === PROBLEMS.length - 1;
            return (
              <motion.div 
                key={p.title} 
                variants={itemVariants}
                className={`p-6 rounded-lg bg-[#0B1B14]/80 border border-emerald-500/15 hover:border-emerald-500/30 transition-all ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-950/70 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-[1.25rem] text-slate-100 font-medium mb-2.5 leading-snug">
                  {p.title}
                </h3>
                <p className="text-[0.88rem] leading-relaxed text-slate-400 font-light">
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
