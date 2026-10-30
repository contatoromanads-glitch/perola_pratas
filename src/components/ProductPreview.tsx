import React from 'react';
import { motion, type Variants } from 'framer-motion';

export default function ProductPreview() {
  const images = [
    { src: '/gallery-1.png', alt: 'Colar Ponto Luz Redondo Crav G', label: 'Colares & Gargantilhas', desc: 'Venezianas italianas e pingentes maciços' },
    { src: '/brinco-trio.jpg', alt: 'Brinco Trio Estrela', label: 'Brincos & Argolas', desc: 'Tarraxas reforçadas e pedras cravadas' },
    { src: '/anel-borboleta.jpg', alt: 'Anel Borboletas Renda Italiana', label: 'Anéis & Solitários', desc: 'Aros 14 ao 22 com acabamento de alta joalheria' },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
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
            Mostruário de Pronta Entrega
          </span>
          <h2 className="font-serif font-normal text-[clamp(2.2rem,4vw,3.2rem)] tracking-tight mb-4 text-slate-100 leading-[1.12]">
            Acabamento espelhado e padrão alta joalheria
          </h2>
          <p className="text-slate-400 text-[1.02rem] leading-relaxed font-light">
            Joias 100% em Prata 925 legítima, fundidas sem níquel, antialérgicas e com laudo de pureza do metal.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {images.map((img) => (
            <motion.div
              key={img.alt}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl aspect-[4/5] bg-[#0B1B14] border border-emerald-500/15 hover:border-emerald-500/35 transition-all shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06110C] via-[#06110C]/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
                <span className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-emerald-400 block mb-1">
                  {img.label}
                </span>
                <p className="text-slate-100 text-[0.95rem] font-serif font-medium">{img.desc}</p>
                <span className="text-slate-400 text-[0.72rem] block mt-1">Prata 925 · Garantia Vitalícia</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
