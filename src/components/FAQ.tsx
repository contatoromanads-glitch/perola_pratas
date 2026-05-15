import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQS = [
  {
    q: 'Qual o valor mínimo para atacado?',
    a: 'A melhor parte: não temos pedido mínimo em valor! Você pode começar com o que couber no seu bolso e montar seu kit inicial como preferir.'
  },
  {
    q: 'Como funciona o envio?',
    a: 'Enviamos para todo o Brasil. Os pedidos são despachados em até 48h úteis após a confirmação do pagamento. O frete é calculado de acordo com sua região.'
  },
  {
    q: 'A prata tem garantia?',
    a: 'Sim! Todas as nossas peças são de Prata 925 legítima e acompanham certificado de garantia vitalícia sobre a cor do metal.'
  },
  {
    q: 'Quais são as formas de pagamento?',
    a: 'Aceitamos Pix, cartão de crédito (parcelamos suas compras) e boleto bancário (sujeito a aprovação).'
  },
  {
    q: 'Vocês fornecem material para divulgação?',
    a: 'Com certeza! Ao se tornar nossa revendedora, você recebe acesso ao nosso banco de imagens com fotos profissionais e vídeos em alta resolução para postar no seu Instagram e WhatsApp.'
  },
  {
    q: 'Como sei que a empresa é confiável?',
    a: 'Somos fornecedores atacadistas com fabricação própria e operação transparente. Nosso CNPJ e todos os termos de uso estão disponíveis, e já transformamos a vida de centenas de revendedoras por todo o Brasil.'
  },
  {
    q: 'E se eu receber uma peça com defeito?',
    a: 'Nossa garantia e política de trocas cobre 100% de qualquer defeito de fabricação. O processo é simples, rápido e feito diretamente pelo nosso suporte no WhatsApp.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 md:py-28 px-5 md:px-8 relative z-10 bg-surface-1">
      <div className="max-w-[800px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-center mb-14"
        >
          <span className="section-label block mb-4">Tira Dúvidas</span>
          <h2 className="font-serif font-normal text-[clamp(2.5rem,4.5vw,3.5rem)] tracking-[-0.02em] mb-5 leading-[1.05]">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="border border-white/5 bg-surface-2/30 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-serif text-lg text-primary">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 ml-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-secondary text-[0.95rem] leading-[1.7]">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
