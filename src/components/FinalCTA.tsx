import { motion } from 'framer-motion'

const WA = 'https://wa.me/5543991312661?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20come%C3%A7ar%20a%20revender%20prata%20925!'

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 px-5 md:px-8 relative z-10 overflow-hidden">
      {/* Glow */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(var(--accent) / 0.12) 0%, transparent 65%)' }} 
      />

      <div className="max-w-[680px] mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <span className="section-label block mb-4">Última Chamada</span>
          <h2 className="font-serif font-normal text-[clamp(2.8rem,5vw,4rem)] tracking-[-0.025em] mb-6 leading-[1.05]">
            Pare de <span className="text-strike">perder dinheiro</span> com
            fornecedores ruins.
            <br />
            <span className="gradient-text">Comece a lucrar de verdade.</span>
          </h2>
          <p className="text-secondary text-[1.05rem] leading-[1.8] mb-10 max-w-[520px] mx-auto">
            Junte-se a centenas de revendedores que já transformaram prata 925
            em um negócio lucrativo com a Pérola Pratas. O próximo passo é seu.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(37,211,102,0.4)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-[0.9rem] !py-4 !px-8"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.317 0-4.477-.67-6.314-1.822l-.44-.265-3.265 1.094 1.094-3.265-.265-.44A9.959 9.959 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            Quero Começar Agora — Falar no WhatsApp
          </motion.a>
          <span className="text-[0.78rem] text-tertiary">Compromisso com você · Resposta em minutos</span>
        </motion.div>
      </div>
    </section>
  )
}
