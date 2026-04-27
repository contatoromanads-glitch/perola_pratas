const ITEMS = [
  'Prata 925 Legítima', 'Fabricação Própria', 'Garantia Vitalícia',
  'Atacado Exclusivo', 'Alta Joalheria', 'Margens Otimizadas', 'Suporte Editorial',
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="bg-forest py-[1.1rem] overflow-hidden relative z-[2]">
      <div className="flex whitespace-nowrap animate-[marquee_28s_linear_infinite]">
        {doubled.map((text, i) => (
          <span key={i} className="font-sans text-[0.72rem] font-medium tracking-[0.3em] uppercase text-white/55 px-10">
            <span className="text-teal mr-10">◆</span>
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
