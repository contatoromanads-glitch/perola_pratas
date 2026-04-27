export default function Nav() {
  const links = [
    { href: '#colecoes', label: 'Coleções' },
    { href: '#atacado', label: 'Atacado' },
    { href: '#artesanal', label: 'Artesanal' },
    { href: '#portfolio', label: 'Portfólio' },
  ]

  return (
    // Nav com fundo escuro consistente + borda visível
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-surface-0/85 backdrop-blur-[20px] border-b border-border-strong animate-[fadeIn_0.6s_ease_forwards]">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 flex items-center justify-between h-[68px]">
        <a href="#" className="no-underline inline-flex items-center" aria-label="Pérola Pratas — Início">
          <img src="/logo.png" alt="Pérola Pratas" className="logo-img h-9 block" />
        </a>

        {/* Desktop nav — links em tertiary (AA) → primary no hover */}
        <div className="hidden md:flex gap-8 lg:gap-10 items-center">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-sans text-[0.72rem] font-medium tracking-[0.18em] uppercase text-tertiary no-underline transition-colors duration-200 hover:text-primary py-2"
            >
              {label}
            </a>
          ))}
          <a
            href="#cadastro"
            className="font-sans text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-accent no-underline py-[0.6rem] px-5 border-[1.5px] border-accent rounded-sm transition-all duration-200 hover:bg-accent hover:text-accent-on min-h-[44px] inline-flex items-center"
          >
            Aplicar Agora
          </a>
        </div>

        {/* Mobile — apenas o CTA visível, links acessíveis via âncoras nas seções */}
        <a
          href="#cadastro"
          className="md:hidden font-sans text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-accent-on bg-accent no-underline py-[0.55rem] px-4 rounded-sm min-h-[40px] inline-flex items-center"
        >
          Aplicar
        </a>
      </div>
    </nav>
  )
}
