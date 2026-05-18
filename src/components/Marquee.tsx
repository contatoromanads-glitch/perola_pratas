const ITEMS = [
  "Prata 925 Legítima",
  "Margem de até 300%",
  "Envio em 24H",
  "Fabricação Própria",
  "Garantia Vitalícia",
  "Atacado a partir de R$ 899",
  "Suporte Completo",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="bg-surface-1 border-y border-border-strong/8 py-[0.9rem] overflow-hidden relative z-[2]">
      <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]" aria-hidden="true">
        {doubled.map((text, i) => (
          <span key={i} className="font-sans text-[0.72rem] font-medium tracking-[0.25em] uppercase text-tertiary px-8">
            <span className="text-[hsl(var(--accent))] mr-8" aria-hidden="true">
              ✦
            </span>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
