export default function Footer() {
  return (
    // Fundo surface-0 (consistente com sistema) — antes era hex hardcoded
    <footer className="bg-surface-0 border-t border-border-strong pt-20 px-6 md:px-10 pb-12 text-center relative z-10">
      <div className="max-w-[560px] mx-auto flex flex-col items-center">
        <img src="/logo.png" alt="Pérola Pratas" className="logo-img h-11 mb-8" />

        <div className="flex items-center gap-6 my-10 w-full">
          <div className="flex-1 h-px bg-border-strong" aria-hidden="true" />
          <span className="text-accent text-[0.5rem]" aria-hidden="true">◆</span>
          <div className="flex-1 h-px bg-border-strong" aria-hidden="true" />
        </div>

        <h2 className="font-serif text-[clamp(1.75rem,4vw,3rem)] leading-[1.2] text-primary font-normal tracking-[-0.02em] mb-5">
          Eleve seu negócio ao patamar<br />
          <em className="italic text-accent">da alta joalheria.</em>
        </h2>

        {/* Texto em secondary → AA garantido */}
        <p className="font-sans text-base leading-[1.9] text-secondary font-light mb-10">
          Junte-se a uma rede estruturada de revendedores e leve mais do que luxo.
        </p>

        <a href="#cadastro" className="btn-outline text-[0.72rem]">
          Solicitar Acesso ao Atacado
        </a>

        {/* Copyright em tertiary → ≥4.5:1 (antes era white/25 = invisível) */}
        <p className="font-sans text-[0.7rem] tracking-[0.2em] uppercase text-tertiary mt-16">
          © {new Date().getFullYear()} Pérola Pratas — Todos os Direitos Reservados
        </p>
      </div>
    </footer>
  )
}
