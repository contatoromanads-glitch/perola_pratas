import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

const EXAMPLES = [
  { 
    item: 'Anel Solitário Cravejado', 
    category: 'Prata 925 com Zircônia 6mm',
    cost: 'R$ 59,90', 
    sell: 'R$ 139,90', 
    profit: 'R$ 80,00' 
  },
  { 
    item: 'Colar Veneziana V15 + Pingente', 
    category: 'Prata 925 Maciça 45cm',
    cost: 'R$ 69,90', 
    sell: 'R$ 159,90', 
    profit: 'R$ 90,00' 
  },
  { 
    item: 'Trio de Argolinhas Click Cravejadas', 
    category: 'Prata 925 com Microzircônias',
    cost: 'R$ 49,90', 
    sell: 'R$ 119,90', 
    profit: 'R$ 70,00' 
  },
];

export default function ProfitMargin() {
  return (
    <section id="margem" className="py-20 md:py-28 px-5 md:px-8 relative z-10 bg-[#06110C] border-b border-emerald-500/10">
      <div className="max-w-[1160px] mx-auto">
        <div className="text-center max-w-[680px] mx-auto mb-14">
          <span className="text-[0.72rem] font-semibold tracking-widest uppercase text-emerald-400 mb-3 block">
            Margem & Precificação no Varejo
          </span>
          <h2 className="font-serif font-normal text-[clamp(2.2rem,4vw,3.2rem)] tracking-tight mb-4 text-slate-100 leading-[1.12]">
            Competitividade real com preço direto de fábrica
          </h2>
          <p className="text-slate-400 text-[1.02rem] leading-relaxed font-light">
            Trabalhamos com custos de atacado calculados para permitir precificação equilibrada na sua loja ou mostruário. Veja exemplos médios com base em nosso catálogo de pronta entrega:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXAMPLES.map((ex, i) => (
            <motion.div
              key={ex.item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0B1B14]/80 border border-emerald-500/15 rounded-xl p-6 sm:p-7 relative overflow-hidden group hover:border-emerald-500/35 transition-all"
            >
              <div className="flex items-center gap-2 mb-3 text-emerald-400">
                <Sparkles className="w-4 h-4" />
                <span className="text-[0.7rem] font-semibold tracking-wider uppercase text-slate-400">{ex.category}</span>
              </div>
              
              <h3 className="font-serif text-[1.3rem] text-slate-100 font-medium mb-6">{ex.item}</h3>
              
              <div className="space-y-3.5 mb-6">
                <div className="flex justify-between items-center pb-2.5 border-b border-emerald-500/10 text-sm">
                  <span className="text-slate-400 font-light">Custo Fábrica (Atacado)</span>
                  <span className="text-slate-200 font-medium font-mono">{ex.cost}</span>
                </div>
                <div className="flex justify-between items-center pb-2.5 border-b border-emerald-500/10 text-sm">
                  <span className="text-slate-400 font-light">Venda Sugerida Varejo</span>
                  <span className="text-slate-200 font-medium font-mono">{ex.sell}</span>
                </div>
                <div className="flex justify-between items-center pt-1 text-sm">
                  <span className="text-emerald-400 font-semibold tracking-wide">Margem Bruta Estimada</span>
                  <span className="text-emerald-300 font-bold text-lg font-mono">{ex.profit}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-emerald-500/15 flex items-center gap-2 text-[0.75rem] text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Giro contínuo e reposição imediata</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
