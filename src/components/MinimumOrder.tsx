import { motion } from 'framer-motion'

export default function MinimumOrder() {
  return (
    <section
      id="pedido-minimo"
      className="py-24 md:py-32 px-6 md:px-10 relative z-10 border-t border-border-subtle bg-surface-1/40"
    >
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-center border border-border-subtle rounded-sm p-8 md:p-14 bg-surface-2/30"
        >
          <div>
            <span className="section-label block mb-5">Condição de Atacado</span>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.05] text-primary font-normal tracking-[-0.025em] mb-6">
              Pedido mínimo de{' '}
              <em
                className="italic text-transparent bg-clip-text not-italic md:italic"
                style={{
                  backgroundImage:
                    'linear-gradient(130deg, hsl(var(--accent-soft)) 0%, hsl(var(--accent)) 60%, hsl(150 70% 88%) 100%)',
                }}
              >
                R$ 899
              </em>
            </h2>
            <p className="font-sans text-base md:text-[1.05rem] leading-[1.85] text-secondary font-light mb-5">
              Operamos exclusivamente em regime de atacado. O pedido mínimo de
              R$ 899 garante condições estruturais de preço, prioridade logística
              e acesso ao mesmo padrão de acabamento entregue às marcas que já
              revendem nossas peças.
            </p>
            <p className="font-sans text-sm leading-[1.8] text-tertiary font-light">
              É o ponto de entrada planejado para que o lojista inicie com
              variedade real de mostruário — sem pulverizar capital e sem abrir
              mão da margem premium da prata 925.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px bg-border-subtle border border-border-subtle rounded-sm overflow-hidden">
            {[
              { k: 'R$ 899', l: 'Pedido Mínimo' },
              { k: '925', l: 'Prata Legítima' },
              { k: '48h', l: 'Despacho' },
              { k: '100%', l: 'Produção Própria' },
            ].map((s) => (
              <div
                key={s.l}
                className="bg-surface-0 px-5 py-8 md:px-7 md:py-10 flex flex-col gap-2"
              >
                <div className="font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] text-primary font-medium leading-none tracking-[-0.02em]">
                  {s.k}
                </div>
                <span className="section-label !text-[0.62rem]">{s.l}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
