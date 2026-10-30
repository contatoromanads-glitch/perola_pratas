import React from 'react';
import { motion, type Variants } from 'framer-motion';

export default function ProductPreview() {
  const products = [
    { 
      src: '/produtos/16715282306.jpg', 
      alt: 'Colar Ponto Luz Caixa Alta Cristal', 
      label: 'Colar Ponto de Luz', 
      desc: 'Veneziana 45cm em Prata 925 com zircônia cristal' 
    },
    { 
      src: '/produtos/16553786499.jpg', 
      alt: 'Bracelete Redondo Liso em Prata 925', 
      label: 'Bracelete Rígido', 
      desc: 'Prata 925 maciça com acabamento polido espelhado' 
    },
    { 
      src: '/produtos/16670004027.jpg', 
      alt: 'Pulseira Olho Grego Prata 925', 
      label: 'Pulseira Proteção', 
      desc: 'Elo refinado com berloque esmaltado e fecho italiano' 
    },
    { 
      src: '/produtos/16639700878.jpg', 
      alt: 'Brinco Ponto de Luz 08mm', 
      label: 'Brinco Ponto de Luz', 
      desc: 'Pedra de 8mm em garra fina de alta joalheria' 
    },
    { 
      src: '/produtos/16460515197.jpg', 
      alt: 'Colar Cora Trevo 2 em 1', 
      label: 'Colar Versátil 2 em 1', 
      desc: 'Sistema magnético de trevo para coração' 
    },
    { 
      src: '/produtos/16622165089.jpg', 
      alt: 'Conjunto Ponto Luz Cristal', 
      label: 'Conjunto Clássico', 
      desc: 'Brinco e gargantilha harmonizados de alto giro' 
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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

  return (
    <section id="mostruario" className="py-20 md:py-28 px-5 md:px-8 relative z-10 bg-[#06110C] border-b border-emerald-500/10">
      <div className="max-w-[1160px] mx-auto">
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <span className="text-[0.72rem] font-semibold tracking-widest uppercase text-emerald-400 mb-3 block">
            Mostruário Oficial de Fábrica
          </span>
          <h2 className="font-serif font-normal text-[clamp(2.2rem,4vw,3.2rem)] tracking-tight mb-4 text-slate-100 leading-[1.12]">
            Peças do catálogo real com pronta-entrega
          </h2>
          <p className="text-slate-400 text-[1.02rem] leading-relaxed font-light">
            Modelos de alto giro comercial com garantia vitalícia do metal e timbragem 925. Mais de 1.200 opções disponíveis no atacado.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
        >
          {products.map((item) => (
            <motion.div
              key={item.alt}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl bg-[#0B1B14] border border-emerald-500/15 hover:border-emerald-500/35 transition-all shadow-xl"
            >
              <div className="aspect-square overflow-hidden bg-[#06110C]">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="p-3.5 sm:p-4 border-t border-emerald-500/10">
                <span className="text-[0.65rem] font-semibold tracking-wider uppercase text-emerald-400 block mb-1">
                  {item.label}
                </span>
                <p className="text-slate-200 text-[0.82rem] sm:text-sm font-serif font-medium line-clamp-1">
                  {item.alt}
                </p>
                <span className="text-slate-400 text-[0.7rem] block mt-0.5 font-light">
                  Prata 925 Legítima
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
