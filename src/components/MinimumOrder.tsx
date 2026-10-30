import React from 'react'
import { motion } from 'framer-motion'
import { Award, Package, Clock, ShieldCheck } from 'lucide-react'

export default function MinimumOrder() {
  return (
    <section
      id="pedido-minimo"
      className="py-16 md:py-28 px-4 sm:px-6 md:px-8 relative z-10 border-t border-emerald-500/10 bg-[#06110C] overflow-hidden"
    >
      <div className="max-w-[1160px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-14 items-center border border-emerald-500/15 rounded-2xl p-4 sm:p-8 md:p-12 bg-[#0B1B14]/70 w-full min-w-0"
        >
          <div className="lg:col-span-6 space-y-4 sm:space-y-5 min-w-0">
            <span className="text-[0.72rem] font-semibold tracking-widest uppercase text-emerald-400 block font-mono">
              Regra Comercial de Fábrica
            </span>
            <h2 className="font-serif text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.1] text-slate-100 font-normal tracking-tight">
              Pedido mínimo estruturado de{' '}
              <span className="italic text-emerald-300 font-serif">R$ 899</span>
            </h2>
            <p className="font-sans text-sm sm:text-base md:text-[1.02rem] leading-relaxed text-slate-300 font-light">
              Operamos exclusivamente em regime de atacado B2B. O pedido mínimo de
              <strong className="text-white font-medium"> R$ 899 em até 3x sem juros</strong> garante condições de indústria, prioridade na expedição
              e acesso ao mesmo padrão de acabamento entregue às maiores joalherias do país.
            </p>
            <p className="font-sans text-xs sm:text-sm leading-relaxed text-slate-400 font-light">
              É o ponto de entrada planejado para que lojistas e revendedoras autônomas iniciem com
              variedade real de mostruário — sem imobilizar capital excessivo e preservando a margem nobre da Prata 925.
            </p>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-2">
              <div className="p-3 sm:p-3.5 rounded-lg bg-[#06110C]/80 border border-emerald-500/15 flex items-center gap-2.5 sm:gap-3 min-w-0">
                <Package className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 flex-shrink-0" />
                <div className="min-w-0">
                  <div className="font-serif text-base sm:text-lg text-slate-100 font-medium">R$ 899</div>
                  <div className="text-[0.62rem] sm:text-[0.68rem] text-slate-400 uppercase tracking-wider truncate">Até 3x s/ Juros</div>
                </div>
              </div>
              <div className="p-3 sm:p-3.5 rounded-lg bg-[#06110C]/80 border border-emerald-500/15 flex items-center gap-2.5 sm:gap-3 min-w-0">
                <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 flex-shrink-0" />
                <div className="min-w-0">
                  <div className="font-serif text-base sm:text-lg text-slate-100 font-medium">24h</div>
                  <div className="text-[0.62rem] sm:text-[0.68rem] text-slate-400 uppercase tracking-wider truncate">Envio Seguro</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center w-full min-w-0">
            <div className="relative w-full max-w-[290px] sm:max-w-[340px] md:max-w-[360px] mx-auto rounded-2xl overflow-hidden border border-emerald-500/30 group shadow-2xl bg-[#06110C]">
              <div className="relative aspect-[9/16] w-full overflow-hidden">
                <video
                  src="/videos/mostruario-web.mp4"
                  poster="/videos/mostruario-poster.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06110C] via-transparent to-transparent opacity-80 pointer-events-none" />
                
                {/* Badge de vídeo do mostruário real */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#06110C]/90 backdrop-blur-md border border-emerald-500/35 text-[0.62rem] sm:text-[0.65rem] font-mono text-emerald-300 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Vídeo Real • Pronta-Entrega</span>
                  </div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#06110C]/90 backdrop-blur-md border border-emerald-500/35 text-[0.6rem] text-emerald-300 font-mono">
                    <Award className="w-3 h-3 text-emerald-400" />
                    <span>Prata 925</span>
                  </div>
                </div>

                <div className="absolute bottom-3 left-3.5 right-3.5 pointer-events-none">
                  <span className="text-[0.62rem] sm:text-[0.65rem] font-semibold text-emerald-400 uppercase tracking-widest block font-mono">
                    Mostruário Executivo B2B
                  </span>
                  <p className="text-xs sm:text-sm font-serif text-slate-100 font-medium">
                    Prata 925 Maciça • Envio com Seguro
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
