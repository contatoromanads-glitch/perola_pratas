import { motion } from 'framer-motion'

const PROBLEMS = [
  {
    emoji: '😰',
    title: 'Fornecedores não confiáveis',
    desc: 'Você compra prata que descasca, escurece ou não é legítima. Seu cliente reclama, pede reembolso e nunca mais volta.',
  },
  {
    emoji: '📉',
    title: 'Margem de lucro apertada',
    desc: 'Os preços dos fornecedores são altos demais. Quando você coloca sua margem, fica caro pro cliente e você vende pouco.',
  },
  {
    emoji: '😵',
    title: 'Não sabe por onde começar',
    desc: 'Quer empreender com joias mas não tem experiência, não conhece fornecedor de confiança e não sabe precificar.',
  },
  {
    emoji: '🤷',
    title: 'Zero suporte depois da venda',
    desc: 'Comprou, virou-se. Sem fotos profissionais, sem ajuda pra vender, sem troca facilitada. Você fica sozinho(a).',
  },
  {
    emoji: '⏳',
    title: 'Estoque sempre atrasado',
    desc: 'O fornecedor demora semanas pra entregar. Você perde o timing da venda e o cliente compra de outro.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)', scale: 0.95 },
  show: { 
    opacity: 1, y: 0, filter: 'blur(0px)', scale: 1,
    transition: { type: 'spring' as const, stiffness: 250, damping: 25 }
  }
}

export default function Problems() {
  return (
    <section id="problemas" className="py-20 md:py-28 px-5 md:px-8 relative z-10">
      <div className="max-w-[1200px] mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-center max-w-[640px] mx-auto mb-14"
        >
          <span className="section-label block mb-4">Reconhece algum desses?</span>
          <h2 className="font-serif font-normal text-[clamp(2.5rem,4.5vw,3.5rem)] tracking-[-0.02em] mb-5 leading-[1.05]">
            Os <span className="text-[hsl(var(--danger))]">5 problemas</span> que travam
            quem quer revender joias
          </h2>
          <p className="text-secondary text-[1.02rem] leading-[1.75]">
            Se você já sentiu algum desses, saiba que não é culpa sua.
            É do modelo antigo de trabalho com fornecedores.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-wrap justify-center gap-5"
        >
          {PROBLEMS.map((p) => (
            <motion.div 
              key={p.title} 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                y: -8, 
                transition: { type: 'spring' as const, stiffness: 400, damping: 15 } 
              }}
              className="problem-card cursor-default w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
            >
              <motion.div 
                className="text-3xl mb-4"
                initial={{ rotate: -15, scale: 0.8 }}
                whileInView={{ rotate: 0, scale: 1 }}
                transition={{ type: 'spring' as const, stiffness: 200, delay: 0.5 }}
              >
                {p.emoji}
              </motion.div>
              <h3 className="font-serif text-[1.4rem] text-primary font-medium mb-3 leading-[1.1] tracking-[-0.01em]">{p.title}</h3>
              <p className="text-[0.92rem] leading-[1.7] text-secondary font-light">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
