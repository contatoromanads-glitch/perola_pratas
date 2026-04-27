export default function Footer() {
  return (
    <footer className="bg-[#0a3a1e] border-t border-white/10 pt-20 px-10 pb-12 text-center relative z-10">
      <div className="max-w-[560px] mx-auto flex flex-col items-center">
        <img src="/logo.png" alt="Pérola Pratas" className="logo-img h-11 mb-8" />

        <div className="flex items-center gap-6 my-10 w-full">
          <div className="flex-1 h-px bg-border" />
          <span className="text-teal text-[0.5rem]">◆</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <h2 className="font-serif text-[clamp(1.75rem,4vw,3rem)] leading-[1.15] text-forest font-normal tracking-[-0.02em] mb-5">
          Eleve seu negócio ao patamar<br />
          <em className="italic text-teal">da alta joalheria.</em>
        </h2>

        <p className="font-sans text-base leading-[1.9] text-muted font-light mb-10">
          Junte-se a uma rede estruturada de revendedores e leve mais do que luxo.
        </p>

        <a href="#cadastro" className="btn-outline text-[0.72rem]">
          Solicitar Acesso ao Atacado
        </a>

        <p className="font-sans text-[0.7rem] tracking-[0.2em] uppercase text-white/25 mt-16">
          © {new Date().getFullYear()} Pérola Pratas B2B — Todos os Direitos Reservados
        </p>
      </div>
    </footer>
  )
}
