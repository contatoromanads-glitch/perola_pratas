import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const WA_LINK = 'https://wa.me/554396784294?text=Ol%C3%A1!%20Vim%20pelo%20site%20institucional%20e%20quero%20iniciar%20minha%20parceria%20com%20a%20P%C3%A9rola%20Pratas.';

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 px-5 md:px-8 relative z-10 overflow-hidden bg-[#06110C] border-t border-emerald-500/10">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-900/15 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[720px] mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[0.72rem] font-semibold tracking-widest uppercase text-emerald-400 mb-3 block">
            Parceria de Longo Prazo
          </span>
          <h2 className="font-serif font-normal text-[clamp(2.4rem,4.5vw,3.6rem)] tracking-tight mb-6 text-slate-100 leading-[1.1]">
            Eleve o padrão das joias da sua loja com fornecimento direto de fábrica
          </h2>
          <p className="text-slate-300 text-[1.05rem] leading-relaxed mb-10 max-w-[580px] mx-auto font-light">
            Conecte sua empresa a um polo de fabricação em Prata 925 com pronta entrega, reposição ágil e suporte consultivo contínuo.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-4">
          <a 
            href={WA_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 px-9 py-4 rounded-lg bg-[#1B6E55] hover:bg-[#228769] text-white font-medium text-[0.95rem] tracking-wide transition-all shadow-[0_4px_24px_rgba(27,110,85,0.4)] no-underline group"
          >
            <span>Iniciar Atendimento com a Fábrica</span>
            <ArrowRight className="w-4 h-4 text-emerald-200 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="flex items-center gap-2 text-[0.78rem] text-slate-400 mt-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Condição de atacado · Pedido mínimo R$ 899 em até 3x sem juros</span>
          </div>
        </div>
      </div>
    </section>
  );
}
