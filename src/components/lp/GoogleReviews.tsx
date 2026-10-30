import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, CheckCircle2, ExternalLink, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react'

interface Review {
  name: string
  role: string
  date: string
  text: string
  highlight?: string
}

const GOOGLE_REVIEWS_URL = 'https://share.google/ZrUh41f9qtUiOGjC8'

const REVIEWS: Review[] = [
  {
    name: 'Suzi Lourenço',
    role: 'Lojista / Revendedora',
    date: 'Fevereiro de 2025',
    highlight: 'Peças lindas, excelente qualidade e apresentação impecável',
    text: 'Peças lindas e modernas bem elaboradas, excelente qualidade, apresentação visual impecável muita variedade, muito bem representada pelo representante Jhonatan.'
  },
  {
    name: 'Jane Veloso',
    role: 'Revendedora de Joias',
    date: 'Fevereiro de 2025',
    highlight: 'Qualidade nas peças e atendimento extraordinário',
    text: 'A empresa Pérola Pratas possui qualidade em suas peças e um atendimento extraordinário com preço excelente.'
  },
  {
    name: 'Raphael Ribeiro Ferreira',
    role: 'Lojista Parceiro',
    date: 'Fevereiro de 2025',
    highlight: 'Clientes super satisfeitas, recomendo demais!',
    text: 'São peças de excelente qualidade, o atendimento é impecável. Trabalho com as peças há algum tempo e minhas clientes ficam super satisfeitas! Recomendo demais!'
  },
  {
    name: 'Vinicius Bertoni',
    role: 'Comprador Atacado',
    date: 'Novembro de 2023',
    highlight: 'Ótima qualidade e preço super acessível',
    text: 'Peças de ótima qualidade e num preço super acessível, vendedor super atencioso e prestativo... Super recomendo.'
  }
]

export default function GoogleReviews() {
  const [activeSlide, setActiveSlide] = useState(0)

  const prevSlide = () => {
    setActiveSlide((curr) => (curr === 0 ? REVIEWS.length - 1 : curr - 1))
  }

  const nextSlide = () => {
    setActiveSlide((curr) => (curr === REVIEWS.length - 1 ? 0 : curr + 1))
  }

  return (
    <section id="avaliacoes" className="py-20 md:py-28 px-4 sm:px-6 md:px-8 relative z-10 bg-[#06110C] border-t border-emerald-500/10 overflow-hidden">
      
      {/* Luz ambiente esmeralda */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1160px] mx-auto w-full relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-[700px] mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1B14] border border-emerald-500/20 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Perfil Oficial no Google</span>
          </div>
          
          <h2 className="font-serif text-[clamp(2.1rem,4vw,3.3rem)] leading-[1.12] text-slate-100 font-normal tracking-tight mb-4">
            Avaliado com <span className="italic text-emerald-300 font-serif">Nota Máxima</span> por quem Revende
          </h2>
          
          <p className="font-sans text-sm sm:text-base text-slate-300 font-light max-w-[560px] mx-auto">
            A reputação e a confiança de quem compra no atacado e constrói seu negócio com a Prata 925 legítima da Pérola Pratas.
          </p>
        </div>

        {/* Card Badge Principal do Google (Nota 5.0) */}
        <div className="max-w-[840px] mx-auto mb-12">
          <div className="p-5 sm:p-6 rounded-2xl bg-[#0B1B14]/80 border border-emerald-500/20 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md">
            
            {/* Bloco de Classificação */}
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center p-2.5 shadow-md flex-shrink-0">
                {/* Logo G do Google */}
                <svg className="w-full h-full" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
              </div>

              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-white leading-none">5,0</span>
                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-sans mt-1">
                  Classificação máxima com base em <strong className="text-emerald-400 font-medium">32 avaliações no Google</strong>
                </p>
              </div>
            </div>

            {/* Link para o perfil verificado */}
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/40 text-xs sm:text-sm font-sans font-medium text-slate-200 hover:text-white transition-all group flex-shrink-0"
            >
              <span>Ver perfil no Google Maps</span>
              <ExternalLink className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

          </div>
        </div>

        {/* Grid de Avaliações em Desktop / Cards Elegantes */}
        <div className="hidden md:grid grid-cols-2 gap-5 mb-10">
          {REVIEWS.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#0B1B14]/60 border border-emerald-500/15 flex flex-col justify-between hover:border-emerald-500/35 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">{rev.date}</span>
                </div>

                {rev.highlight && (
                  <p className="font-serif text-base text-emerald-300 font-medium mb-2.5">
                    "{rev.highlight}"
                  </p>
                )}

                <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-4">
                  “{rev.text}”
                </p>
              </div>

              <div className="pt-3 border-t border-emerald-500/10 flex items-center justify-between">
                <div>
                  <h4 className="font-sans text-xs font-semibold text-white">{rev.name}</h4>
                  <span className="text-[11px] text-slate-400">{rev.role}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Avaliação Verificada</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Versão Mobile Interativa (Carrossel) */}
        <div className="md:hidden relative mb-8">
          <div className="p-5 rounded-2xl bg-[#0B1B14]/70 border border-emerald-500/20">
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                ))}
              </div>
              <span className="text-[10px] font-mono text-slate-400">{REVIEWS[activeSlide].date}</span>
            </div>

            {REVIEWS[activeSlide].highlight && (
              <p className="font-serif text-sm text-emerald-300 font-medium mb-2">
                "{REVIEWS[activeSlide].highlight}"
              </p>
            )}

            <p className="font-sans text-xs text-slate-200 leading-relaxed font-light min-h-[4.5rem]">
              “{REVIEWS[activeSlide].text}”
            </p>

            <div className="pt-3 mt-3 border-t border-emerald-500/10 flex items-center justify-between">
              <div>
                <h4 className="font-sans text-xs font-semibold text-white">{REVIEWS[activeSlide].name}</h4>
                <span className="text-[10px] text-slate-400">{REVIEWS[activeSlide].role}</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                <CheckCircle2 className="w-3 h-3" />
                <span>Google</span>
              </div>
            </div>
          </div>

          {/* Controles de Navegação Mobile */}
          <div className="flex items-center justify-between mt-4 px-2">
            <div className="flex items-center gap-1.5">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === activeSlide ? 'w-6 bg-emerald-400' : 'w-1.5 bg-white/20'}`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="w-8 h-8 rounded-lg bg-surface-2 border border-border-subtle flex items-center justify-center text-slate-300 hover:text-white"
                aria-label="Avaliação anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-8 h-8 rounded-lg bg-surface-2 border border-border-subtle flex items-center justify-center text-slate-300 hover:text-white"
                aria-label="Próxima avaliação"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Rodapé da Prova Social */}
        <div className="text-center">
          <p className="text-xs text-slate-400 font-sans inline-flex items-center gap-1.5">
            <MessageSquareQuote className="w-4 h-4 text-emerald-400" />
            Depoimentos públicos e autênticos registrados no perfil oficial da Pérola Pratas no Google.
          </p>
        </div>

      </div>
    </section>
  )
}
