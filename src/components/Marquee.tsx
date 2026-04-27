const ITEMS = [
  'Prata 925 Legítima', 'Fabricação Própria', 'Garantia Vitalícia',
  'Atacado Exclusivo', 'Alta Joalheria', 'Margens Otimizadas', 'Suporte Editorial',
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    // FIX CRÍTICO: bg trocado de near-white para surface-light → contraste real com o texto
    <div className="bg-surface-light border-y border-border-subtle py-[1.1rem] overflow-hidden relative z-[2]">
      <div className="flex whitespace-nowrap animate-[marquee_28s_linear_infinite]" aria-hidden="true">
        {doubled.map((text, i) => (
          // texto secondary → AA garantido sobre surface-light
          <span key={i} className="font-sans text-[0.72rem] font-medium tracking-[0.3em] uppercase text-secondary px-10">
            <span className="text-accent mr-10" aria-hidden="true">◆</span>
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
