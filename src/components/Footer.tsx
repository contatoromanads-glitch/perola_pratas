export default function Footer() {
  return (
    <footer className="bg-surface-0 border-t border-border-strong/10 pt-12 px-5 md:px-8 pb-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <img src="/logo.png" alt="Pérola Pratas" className="logo-img h-8" />
          <a
            href="https://wa.me/5543991312661"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.82rem] text-tertiary hover:text-primary transition-colors"
          >
            WhatsApp: (43) 99131-2661
          </a>
        </div>

        <div className="h-px bg-border-strong/10 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="text-[0.72rem] text-muted tracking-wide uppercase">
            © {new Date().getFullYear()} Pérola Pratas — Todos os Direitos Reservados
          </p>
          <p className="text-[0.72rem] text-muted">
            Prata 925 · Fabricação Própria · Atacado e Varejo
          </p>
        </div>
      </div>
    </footer>
  )
}
