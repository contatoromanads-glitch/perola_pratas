import { motion } from 'framer-motion'

const WA = 'https://wa.me/5543991312661?text=Ol%C3%A1!%20Quero%20come%C3%A7ar%20a%20revender%20prata%20925!'

const STEPS = [
  {
    num: '1',
    title: 'Fale com a gente',
    desc: 'Clique no botão do WhatsApp e diga que quer revender. Sem burocracia, sem formulário chato.',
    icon: '💬',
  },
  {
    num: '2',
    title: 'Escolha suas peças',
    desc: 'Nosso time te apresenta o catálogo. Você monta seu mix a partir do pedido mínimo de R$ 899.',
    icon: '💎',
  },
  {
    num: '3',
    title: 'Receba rápido',
    desc: 'Enviamos em até 24h. Tudo pronto pra você iniciar sua vitrine!',
    icon: '📦',
  },
  {
    num: '4',
    title: 'Venda e lucre',
    desc: 'Com margem de 100% a 300%, fotos profissionais e suporte, suas vendas começam no primeiro dia.',
    icon: '💰',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
}

const stepVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { 
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring' as const, stiffness: 200, damping: 20 }
  }
}

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-28 px-5 md:px-8 relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-center max-w-[580px] mx-auto mb-16"
        >
          <span className="section-label block mb-4">Como Funciona</span>
          <h2 className="font-serif font-normal text-[clamp(2.5rem,4.5vw,3.5rem)] tracking-[-0.02em] mb-5 leading-[1.05]">
            4 passos pra <span className="gradient-text">começar a lucrar</span>
          </h2>
          <p className="text-secondary text-[1.02rem]">
            É simples, rápido e sem burocracia. Você pode começar hoje.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              variants={stepVariants}
              whileHover={{ y: -5, transition: { type: 'spring' as const, stiffness: 400, damping: 10 } }}
              className="relative cursor-default group"
            >
              {/* Connector line (desktop only, not on last) */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(50%+30px)] right-[-24px] h-[2px] bg-gradient-to-r from-[hsl(var(--accent)_/_0.3)] to-[hsl(var(--accent)_/_0.05)]" />
              )}

              <div className="text-center">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10, backgroundColor: 'hsl(var(--accent) / 0.2)' }}
                  className="step-number mx-auto mb-5 transition-colors duration-300"
                >
                  {step.num}
                </motion.div>
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring' as const, stiffness: 200, delay: 0.4 + (i * 0.1) }}
                  className="text-3xl mb-4"
                >
                  {step.icon}
                </motion.div>
                <h3 className="font-serif text-[1.4rem] font-medium text-primary mb-3 leading-[1.1] tracking-[-0.01em]">{step.title}</h3>
                <p className="text-[0.9rem] text-secondary leading-[1.7] font-light">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-14"
        >
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-[0.85rem]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.317 0-4.477-.67-6.314-1.822l-.44-.265-3.265 1.094 1.094-3.265-.265-.44A9.959 9.959 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            Começar Agora — Passo 1
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
