import { motion } from 'framer-motion'

const WA = 'https://wa.me/5543991312661?text=Ol%C3%A1!%20Quero%20saber%20como%20resolver%20meus%20problemas%20com%20fornecedores.'

const ITEMS = [
  { problem: 'Prata falsa', solution: 'Prata 925 legítima com certificado e garantia vitalícia.' },
  { problem: 'Margem apertada', solution: 'Preço de fábrica. Margem de 100% a 300% em cada peça.' },
  { problem: 'Sem experiência', solution: 'Suporte completo: fotos profissionais, tabela de preços, dicas de venda.' },
  { problem: 'Capital alto pra começar', solution: 'Pedido mínimo acessível de R$ 899 — entrada planejada para o lojista.' },
  { problem: 'Sozinho(a) depois da compra', solution: 'Atendimento humanizado via WhatsApp. Ajuda pra montar vitrine & coleções.' },
  { problem: 'Demora na entrega', solution: 'Estoque próprio + envio em até 48h.' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const rowVariants = {
  hidden: { opacity: 0, x: -30, filter: 'blur(10px)' },
  show: { 
    opacity: 1, x: 0, filter: 'blur(0px)',
    transition: { type: 'spring' as const, stiffness: 200, damping: 20 }
  }
}

export default function Solution() {
  return (
    <section id="solucao" className="py-20 md:py-28 px-5 md:px-8 relative z-10 bg-surface-1/50">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-center max-w-[640px] mx-auto mb-14"
        >
          <span className="section-label block mb-4">A Solução</span>
          <h2 className="font-serif font-normal text-[clamp(2.5rem,4.5vw,3.5rem)] tracking-[-0.02em] mb-5 leading-[1.05]">
            Cada problema tem uma <span className="gradient-text">solução concreta</span>
          </h2>
          <p className="text-secondary text-[1.02rem] leading-[1.75]">
            A Pérola Pratas não é só um fornecedor. É um parceiro que resolve
            os problemas reais de quem quer ganhar dinheiro com prata.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col gap-4"
        >
          {ITEMS.map((s) => (
            <motion.div 
              key={s.problem} 
              variants={rowVariants}
              whileHover={{ scale: 1.02, x: 10, backgroundColor: 'hsl(var(--surface-2))' }}
              transition={{ type: 'spring' as const, stiffness: 300, damping: 20 }}
              className="solution-card grid grid-cols-1 md:grid-cols-[1fr_auto_1.3fr] gap-4 md:gap-6 items-center cursor-default"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[hsl(var(--danger))] text-sm font-bold">✕</span>
                  <span className="text-[0.78rem] font-semibold text-tertiary tracking-wide uppercase">Problema</span>
                </div>
                <p className="font-serif text-[1.25rem] text-primary font-medium tracking-[-0.01em]">{s.problem}</p>
              </div>
              <motion.div 
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-[hsl(var(--accent)_/_0.12)] flex-shrink-0"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(38,60%,62%)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </motion.div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#25D366] text-sm font-bold">✓</span>
                  <span className="text-[0.78rem] font-semibold text-[#25D366]/80 tracking-wide uppercase">Solução Pérola</span>
                </div>
                <p className="text-secondary text-[0.95rem] leading-[1.7]">{s.solution}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-14"
        >
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-[0.85rem]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.317 0-4.477-.67-6.314-1.822l-.44-.265-3.265 1.094 1.094-3.265-.265-.44A9.959 9.959 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            Quero Essa Solução — Falar no WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
