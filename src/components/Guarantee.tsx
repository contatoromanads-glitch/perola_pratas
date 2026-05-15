import { motion } from 'framer-motion'

export default function Guarantee() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-8 relative z-10 bg-surface-1/50 overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[hsl(var(--accent)_/_0.05)] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="w-16 h-16 rounded-full bg-[hsl(var(--accent)_/_0.15)] flex items-center justify-center mb-8">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            
            <h2 className="font-serif font-normal text-[clamp(2.5rem,4.5vw,3.5rem)] tracking-[-0.02em] mb-6 leading-[1.05]">
              Prata 925 com <span className="gradient-text">Garantia Vitalícia</span>
            </h2>
            
            <p className="text-secondary text-[1.1rem] leading-[1.75] mb-8">
              Sua cliente quer segurança ao comprar. Nós entregamos isso a você. Toda joia Pérola Pratas acompanha certificado de autenticidade e garantia eterna na cor da prata.
            </p>

            <ul className="space-y-4">
              {[
                'Certificado de garantia para você entregar à sua cliente',
                'Troca facilitada em caso de defeito de fabricação',
                'Material hipoalergênico e duradouro',
                'Qualidade de joalheria com preço de fábrica'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[hsl(var(--accent)_/_0.2)] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <span className="text-primary/90">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden relative">
              <img 
                src="https://images.pexels.com/photos/9431535/pexels-photo-9431535.jpeg?auto=compress&cs=tinysrgb&w=800&q=80" 
                alt="Garantia Prata 925" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating badge */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 md:-left-10 bg-surface-1 border border-white/10 p-5 rounded-2xl shadow-2xl backdrop-blur-xl max-w-[200px]"
            >
              <div className="flex gap-2 text-[hsl(var(--accent))] mb-2">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <p className="text-sm text-primary font-medium">Qualidade comprovada por centenas de revendedoras.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
