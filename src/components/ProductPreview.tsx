import { motion } from 'framer-motion'

export default function ProductPreview() {
  const images = [
    { src: '/gallery-1.png', alt: 'Colar Ponto Luz Redondo Crav G', label: 'Colares' },
    { src: '/brinco-trio.jpg', alt: 'Brinco Trio Estrela', label: 'Brincos' },
    { src: '/anel-borboleta.jpg', alt: 'Anel Borboletas Renda Italiana', label: 'Anéis' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: { 
      opacity: 1, y: 0, scale: 1,
      transition: { type: 'spring' as const, stiffness: 200, damping: 20 }
    }
  }

  return (
    <section className="py-20 md:py-28 px-5 md:px-8 relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-center max-w-[580px] mx-auto mb-14"
        >
          <span className="section-label block mb-4">O que você vai vender</span>
          <h2 className="font-serif font-normal text-[clamp(2.5rem,4.5vw,3.5rem)] tracking-[-0.02em] mb-5 leading-[1.05]">
            Peças que <span className="gradient-text">vendem sozinhas</span>
          </h2>
          <p className="text-secondary text-[1.02rem]">
            Prata 925 legítima com acabamento impecável. Seus clientes vão querer mais.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
        >
          {images.map((img) => (
            <motion.div
              key={img.alt}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { type: 'spring' as const, stiffness: 400, damping: 15 } }}
              className="group relative overflow-hidden rounded-xl aspect-[4/5] cursor-pointer"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
                <span className="text-[0.72rem] font-bold tracking-[0.2em] uppercase text-[hsl(var(--accent))]">{img.label}</span>
                <p className="text-white text-sm font-light mt-1 opacity-80">Prata 925 · Garantia Vitalícia</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
