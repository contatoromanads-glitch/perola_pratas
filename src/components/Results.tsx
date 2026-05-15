import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function Counter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [counted, setCounted] = useState(false)
  const isInView = useInView(wrapRef, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView || counted || !ref.current) return
    setCounted(true)
    const el = ref.current
    const start = performance.now()
    const duration = 2000
    function update(ts: number) {
      const p = Math.min((ts - start) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      el.textContent = prefix + String(Math.round(ease * target)) + suffix
      if (p < 1) requestAnimationFrame(update)
    }
    requestAnimationFrame(update)
  }, [isInView, counted, target, suffix, prefix])

  return (
    <motion.div 
      ref={wrapRef} 
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } }
      }}
      className="stat-card"
    >
      <div className="text-[clamp(2.2rem,4vw,3rem)] font-bold gradient-text mb-2 leading-none">
        <span ref={ref}>0</span>
      </div>
    </motion.div>
  )
}

const STATS = [
  { target: 925, suffix: '', label: 'Prata Legítima' },
  { target: 300, suffix: '%', label: 'Margem de Lucro' },
  { target: 48, suffix: 'h', label: 'Envio Rápido' },
  { target: 100, suffix: '%', label: 'Fabricação Própria' },
]

export default function Results() {
  return (
    <section id="resultados" className="py-20 md:py-28 px-5 md:px-8 relative z-10 bg-surface-1/50">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-center max-w-[580px] mx-auto mb-14"
        >
          <span className="section-label block mb-4">Resultados Reais</span>
          <h2 className="font-serif font-normal text-[clamp(2.5rem,4.5vw,3.5rem)] tracking-[-0.02em] mb-5 leading-[1.05]">
            Números que <span className="gradient-text">falam por si</span>
          </h2>
          <p className="text-secondary text-[1.02rem]">
            Não é promessa. São fatos da nossa operação real.
          </p>
        </motion.div>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <Counter target={s.target} suffix={s.suffix} />
              <p className="text-center text-[0.82rem] font-semibold text-tertiary tracking-wide uppercase mt-3">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
