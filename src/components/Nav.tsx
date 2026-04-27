export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[rgba(10,50,28,0.88)] backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.08)] animate-[fadeIn_0.6s_ease_forwards]">
      <div className="max-w-[1320px] mx-auto px-10 flex items-center justify-between h-[68px]">
        <a href="#" className="no-underline">
          <img src="/logo.png" alt="Pérola Pratas" className="logo-img h-9 block" />
        </a>
        <div className="flex gap-10 items-center">
          {[
            { href: '#colecoes', label: 'Coleções' },
            { href: '#atacado',  label: 'Atacado' },
            { href: '#artesanal', label: 'Artesanal' },
            { href: '#portfolio', label: 'Portfólio' },
          ].map(({ href, label }) => (
            <a key={href} href={href} className="font-sans text-[0.72rem] font-medium tracking-[0.18em] uppercase text-white/50 no-underline transition-colors duration-200 hover:text-white">
              {label}
            </a>
          ))}
          <a href="#cadastro" className="font-sans text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-teal no-underline py-[0.55rem] px-5 border-[1.5px] border-teal transition-all duration-200 hover:bg-teal hover:text-[#022c22]">
            Aplicar Agora
          </a>
        </div>
      </div>
    </nav>
  )
}
