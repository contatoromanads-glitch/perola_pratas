import { motion } from 'framer-motion'

const EXAMPLES = [
  { item: 'Anel Solitário', cost: 'R$19,90', sell: 'R$79,60', profit: 'R$59,70' },
  { item: 'Colar Ponto de Luz', cost: 'R$19,90', sell: 'R$119,60', profit: 'R$99,70' },
  { item: 'Trio de Brinco', cost: 'R$19,90', sell: 'R$119,60', profit: 'R$99,70' },
]

export default function ProfitMargin() {
  return (
    <section id="margem" className="py-20 md:py-28 px-5 md:px-8 relative z-10 bg-surface-1">
      <div className="max-w-[1000px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-center max-w-[640px] mx-auto mb-14"
        >
          <span className="section-label block mb-4">Como funciona a Margem de Lucro?</span>
          <h2 className="font-serif font-normal text-[clamp(2.5rem,4.5vw,3.5rem)] tracking-[-0.02em] mb-5 leading-[1.05]">
            Ganhe de <span className="gradient-text">100% a 300%</span> em cada peça
          </h2>
          <p className="text-secondary text-[1.02rem] leading-[1.75]">
            Trabalhamos com preço de fábrica real. Veja como é fácil triplicar o seu investimento com peças que se vendem sozinhas. Exemplos:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXAMPLES.map((ex, i) => (
            <motion.div
              key={ex.item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-surface-2/50 border border-white/5 rounded-2xl p-6 md:p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              
              <h3 className="font-serif text-xl text-primary mb-6 relative z-10">{ex.item}</h3>
              
              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-center pb-3 border-b border-white/5">
                  <span className="text-secondary text-sm">Seu Custo</span>
                  <span className="text-primary font-medium">{ex.cost}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/5">
                  <span className="text-secondary text-sm">Preço de Venda</span>
                  <span className="text-primary font-medium">{ex.sell}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-[hsl(var(--accent))] text-sm font-semibold uppercase tracking-wider">Lucro Limpo</span>
                  <span className="text-[hsl(var(--accent))] font-bold text-xl">{ex.profit}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
