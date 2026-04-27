/**
 * Hero — Pérola Pratas
 *
 * Substituição completa do layout anterior (sem vídeo, sem logo watermark).
 * A peça central é uma cena SVG construída inteiramente em código:
 *   • Silhueta feminina abstrata em traços contínuos (linha-arte editorial)
 *   • Colar de prata 925 que se "desenha" e assenta no pescoço
 *   • Brincos com brilho pulsante
 *   • Partículas de prata orbitando em ritmo lento e contínuo
 *   • Ondas concêntricas suaves emanando do pingente
 *
 * Toda animação é CSS (keyframes em index.css) + atributos SVG nativos
 * (stroke-dasharray para o efeito "draw-on" do colar e da silhueta).
 *
 * Responsivo: empilha em mobile (cena acima, conteúdo abaixo) e
 * usa grid 5fr/4fr no desktop. Respeita prefers-reduced-motion via
 * regra global em index.css.
 */
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-[80px] pb-16 md:pb-0 relative overflow-hidden">
      {/* ─── Fundo: malha de pontos com máscara radial ─── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, hsl(var(--accent) / 0.10) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage:
            'radial-gradient(ellipse 70% 90% at 30% 50%, black, transparent)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 90% at 30% 50%, black, transparent)',
        }}
        aria-hidden="true"
      />

      {/* ─── Texto fantasma "925" decorativo ─── */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute right-[-4%] bottom-[-12%] font-serif text-[clamp(18rem,36vw,55rem)] leading-[0.8] text-primary font-semibold opacity-[0.04] tracking-[-0.06em] pointer-events-none select-none italic"
      >
        925
      </div>

      <div className="max-w-[1320px] mx-auto px-6 md:px-10 w-full grid grid-cols-1 md:grid-cols-[5fr_4fr] items-center gap-12 md:gap-8 relative z-10">
        {/* ═══════════════════ CONTEÚDO ═══════════════════ */}
        <div className="flex flex-col animate-[fadeUp_1s_ease_forwards] order-2 md:order-1">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-7 h-[2px] bg-accent" aria-hidden="true" />
            <span className="section-label">Parceiros B2B Exclusivos</span>
          </div>

          <h1 className="font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.95] text-primary font-normal tracking-[-0.025em] mb-7">
            O<br />
            <em
              className="italic text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  'linear-gradient(130deg, hsl(var(--accent)) 0%, hsl(var(--accent-soft)) 60%, hsl(150 70% 88%) 100%)',
              }}
            >
              Reflexo
            </em>
            <br />
            Curado.
          </h1>

          <p className="font-sans text-[1.1rem] leading-[1.85] text-secondary max-w-[440px] font-light mb-9">
            Eleve seu portfólio com prata de atacado de qualidade editorial.
            Feito para visionários, desenhado para distinção.
          </p>

          <div className="flex gap-4 flex-wrap mb-12">
            <a href="#cadastro" className="btn-primary">Analisar Ser de Atração</a>
            <a href="#colecoes" className="btn-outline">Explorar Coleções</a>
          </div>

          <div className="flex flex-wrap gap-8 md:gap-12 pt-8 border-t border-border-strong">
            {[
              { value: '925', label: 'Prata Pura' },
              { value: 'B2B', label: 'Exclusivo' },
              { value: '100%', label: 'Fab. Própria' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-serif text-[2rem] text-primary font-medium tracking-[-0.02em] leading-none mb-[0.4rem]">
                  {value}
                </div>
                <div className="font-sans text-[0.72rem] font-semibold tracking-[0.24em] uppercase text-accent">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════ CENA SVG ═══════════════════ */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end items-center w-full">
          <HeroScene />
        </div>
      </div>

      {/* ─── Indicador de scroll ─── */}
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 hidden sm:flex items-center gap-4 animate-[fadeIn_1.5s_1.2s_ease_both]">
        <div className="w-7 h-px bg-border-strong" aria-hidden="true" />
        <span className="font-sans text-[0.68rem] tracking-[0.3em] uppercase text-tertiary">
          Scroll
        </span>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   HeroScene — animação SVG vanguardista
   ──────────────────────────────────────────────────────────────
   Estrutura em camadas (do fundo para o primeiro plano):
     1. Anéis concêntricos pulsantes (aura)
     2. Partículas de prata orbitando
     3. Silhueta feminina em line-art (draw-on)
     4. Colar com pingente (draw-on, depois flutuação sutil)
     5. Brincos com brilho pulsante
     6. Reflexos diamantinos (sparkles) cintilando
   ══════════════════════════════════════════════════════════════ */
function HeroScene() {
  return (
    // Wrapper sem animação contínua — cena estabiliza após o pouso das joias
    <div
      className="relative w-full max-w-[520px] aspect-[4/5]"
      role="img"
      aria-label="Silhueta feminina com cabelos fluidos adornada por joias de prata"
    >
      <svg
        viewBox="0 0 400 500"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Gradiente da silhueta — tons esmeralda */}
          <linearGradient id="silhouetteGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(150 70% 88%)" stopOpacity="0.95" />
            <stop offset="50%" stopColor="hsl(160 60% 72%)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(160 70% 45%)" stopOpacity="0.75" />
          </linearGradient>

          {/* Gradiente prata polida para o colar */}
          <linearGradient id="silverGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(150 30% 70%)" />
            <stop offset="50%" stopColor="hsl(150 40% 95%)" />
            <stop offset="100%" stopColor="hsl(150 30% 70%)" />
          </linearGradient>

          {/* Glow radial para o pingente */}
          <radialGradient id="pendantGlow">
            <stop offset="0%" stopColor="hsl(150 50% 95%)" stopOpacity="0.95" />
            <stop offset="40%" stopColor="hsl(160 60% 72%)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="hsl(160 70% 45%)" stopOpacity="0" />
          </radialGradient>

          {/* Filtro de glow suave — pingente e brincos */}
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Símbolo reutilizável: sparkle de 4 pontas */}
          <symbol id="sparkle" viewBox="-10 -10 20 20">
            <path
              d="M0,-10 L2,-2 L10,0 L2,2 L0,10 L-2,2 L-10,0 L-2,-2 Z"
              fill="hsl(150 40% 95%)"
            />
          </symbol>
        </defs>

        {/* ─── 1. AURA: anéis concêntricos pulsando ─── */}
        <g>
          {[110, 150, 195].map((r, i) => (
            <circle
              key={r}
              cx="200"
              cy="280"
              r={r}
              fill="none"
              stroke="hsl(160 70% 45%)"
              strokeWidth="0.6"
              opacity="0.18"
              style={{
                animation: `auraPulse 6s ease-in-out ${i * 1.5}s infinite`,
                transformOrigin: '200px 280px',
              }}
            />
          ))}
        </g>

        {/* ─── 2. PARTÍCULAS orbitando ─── */}
        <g>
          {Array.from({ length: 14 }).map((_, i) => {
            const angle = (i / 14) * Math.PI * 2
            const radius = 170 + (i % 3) * 18
            const cx = 200 + Math.cos(angle) * radius
            const cy = 280 + Math.sin(angle) * radius * 0.85
            const size = 0.8 + (i % 3) * 0.6
            return (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r={size}
                fill="hsl(150 40% 92%)"
                opacity={0.4 + (i % 3) * 0.2}
                style={{
                  animation: `particleDrift ${10 + i * 0.4}s ease-in-out ${i * 0.3}s infinite`,
                  transformOrigin: `${cx}px ${cy}px`,
                }}
              />
            )
          })}
        </g>

        {/* ─── 3. SILHUETA feminina em line-art (efeito "draw-on") ─── */}
        <g>
          {/* Cabelo / topo da cabeça */}
          <path
            d="M 130 90 C 120 60, 160 30, 200 32 C 240 30, 285 55, 280 100 C 295 110, 300 140, 285 165 C 280 175, 268 178, 260 175"
            fill="none"
            stroke="url(#silhouetteGrad)"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeDasharray="600"
            strokeDashoffset="600"
            style={{ animation: 'drawLine 2.4s ease-out 0.2s forwards' }}
          />

          {/* Linha do queixo / mandíbula */}
          <path
            d="M 145 130 C 140 165, 152 200, 175 220 C 188 230, 210 232, 225 225 C 248 213, 262 188, 265 155"
            fill="none"
            stroke="url(#silhouetteGrad)"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeDasharray="500"
            strokeDashoffset="500"
            style={{ animation: 'drawLine 2.4s ease-out 0.6s forwards' }}
          />

          {/* Pescoço */}
          <path
            d="M 178 232 C 178 252, 175 270, 170 290 M 222 228 C 224 250, 230 270, 235 290"
            fill="none"
            stroke="url(#silhouetteGrad)"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeDasharray="200"
            strokeDashoffset="200"
            style={{ animation: 'drawLine 1.8s ease-out 1.2s forwards' }}
          />

          {/* Ombros / decote */}
          <path
            d="M 60 380 C 90 340, 130 305, 168 295 C 178 292, 195 290, 205 290 C 215 290, 230 292, 240 296 C 280 310, 320 345, 345 385"
            fill="none"
            stroke="url(#silhouetteGrad)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeDasharray="700"
            strokeDashoffset="700"
            style={{ animation: 'drawLine 2.6s ease-out 1.4s forwards' }}
          />

          {/* Sutil V do decote */}
          <path
            d="M 178 290 C 195 320, 210 320, 230 290"
            fill="none"
            stroke="url(#silhouetteGrad)"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.55"
            strokeDasharray="120"
            strokeDashoffset="120"
            style={{ animation: 'drawLine 1.6s ease-out 2.4s forwards' }}
          />

          {/* Marcação minimalista dos olhos */}
          <line
            x1="172" y1="160" x2="188" y2="160"
            stroke="url(#silhouetteGrad)"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0"
            style={{ animation: 'fadeInDelayed 1s ease-out 2.6s forwards' }}
          />
          <line
            x1="212" y1="160" x2="228" y2="160"
            stroke="url(#silhouetteGrad)"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0"
            style={{ animation: 'fadeInDelayed 1s ease-out 2.7s forwards' }}
          />
        </g>

        {/* ─── 4. COLAR — corrente em arco passando pelo pescoço ─── */}
        <g>
          {/* Corrente principal */}
          <path
            d="M 168 295 Q 200 360, 232 295"
            fill="none"
            stroke="url(#silverGrad)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeDasharray="180"
            strokeDashoffset="180"
            style={{ animation: 'drawLine 2s ease-out 2.6s forwards' }}
          />

          {/* Pequenos elos pontilhados sobre a corrente */}
          <path
            d="M 168 295 Q 200 360, 232 295"
            fill="none"
            stroke="hsl(150 40% 92%)"
            strokeWidth="0.5"
            strokeDasharray="2 4"
            opacity="0"
            style={{ animation: 'fadeInDelayed 1s ease-out 4.2s forwards' }}
          />

          {/* Halo do pingente */}
          <circle
            cx="200" cy="350" r="22"
            fill="url(#pendantGlow)"
            opacity="0"
            style={{ animation: 'pendantGlow 4s ease-in-out 4.4s infinite' }}
          />

          {/* Pingente diamantino */}
          <g
            opacity="0"
            style={{ animation: 'fadeInDelayed 0.8s ease-out 4.4s forwards' }}
            filter="url(#softGlow)"
          >
            <path
              d="M 200 338 L 207 350 L 200 365 L 193 350 Z"
              fill="url(#silverGrad)"
              stroke="hsl(150 40% 95%)"
              strokeWidth="0.6"
            />
            <line x1="200" y1="338" x2="200" y2="365" stroke="hsl(150 30% 60%)" strokeWidth="0.4" opacity="0.6" />
            <line x1="193" y1="350" x2="207" y2="350" stroke="hsl(150 30% 60%)" strokeWidth="0.4" opacity="0.6" />
          </g>

          {/* Ondas concêntricas saindo do pingente (signal) */}
          {[0, 1, 2].map((i) => (
            <circle
              key={i}
              cx="200" cy="350" r="8"
              fill="none"
              stroke="hsl(160 60% 72%)"
              strokeWidth="0.5"
              opacity="0"
              style={{
                animation: `signalWave 4s ease-out ${4.8 + i * 1.2}s infinite`,
                transformOrigin: '200px 350px',
              }}
            />
          ))}
        </g>

        {/* ─── 5. BRINCOS ─── */}
        <g filter="url(#softGlow)">
          {/* Brinco esquerdo */}
          <g
            opacity="0"
            style={{ animation: 'fadeInDelayed 1s ease-out 3.4s forwards' }}
          >
            <line x1="148" y1="178" x2="148" y2="195" stroke="url(#silverGrad)" strokeWidth="0.8" />
            <ellipse
              cx="148" cy="200" rx="2.5" ry="3.5"
              fill="url(#silverGrad)"
              style={{ animation: 'earringTwinkle 3s ease-in-out 4s infinite' }}
            />
          </g>
          {/* Brinco direito */}
          <g
            opacity="0"
            style={{ animation: 'fadeInDelayed 1s ease-out 3.6s forwards' }}
          >
            <line x1="252" y1="178" x2="252" y2="195" stroke="url(#silverGrad)" strokeWidth="0.8" />
            <ellipse
              cx="252" cy="200" rx="2.5" ry="3.5"
              fill="url(#silverGrad)"
              style={{ animation: 'earringTwinkle 3s ease-in-out 4.3s infinite' }}
            />
          </g>
        </g>

        {/* ─── 6. SPARKLES espalhados ─── */}
        {[
          { x: 90, y: 140, s: 6, d: 0 },
          { x: 320, y: 110, s: 5, d: 1.2 },
          { x: 350, y: 280, s: 7, d: 2.4 },
          { x: 70, y: 320, s: 5, d: 0.6 },
          { x: 200, y: 60, s: 8, d: 1.8 },
          { x: 310, y: 420, s: 6, d: 3 },
          { x: 80, y: 440, s: 5, d: 2.2 },
        ].map((sp, i) => (
          <use
            key={i}
            href="#sparkle"
            x={sp.x - sp.s}
            y={sp.y - sp.s}
            width={sp.s * 2}
            height={sp.s * 2}
            opacity="0"
            style={{
              animation: `sparkleTwinkle 5s ease-in-out ${sp.d}s infinite`,
              transformOrigin: `${sp.x}px ${sp.y}px`,
            }}
          />
        ))}

        {/* ─── Linha base editorial ─── */}
        <line
          x1="40" y1="475" x2="360" y2="475"
          stroke="hsl(160 70% 45%)" strokeWidth="0.4" opacity="0.3"
          strokeDasharray="2 6"
        />
        <text
          x="50" y="492"
          fill="hsl(160 70% 45%)"
          fontFamily="Jost, sans-serif"
          fontSize="7"
          letterSpacing="3"
          opacity="0.55"
        >
          PÉROLA · PRATAS · 925
        </text>
        <text
          x="350" y="492"
          textAnchor="end"
          fill="hsl(150 20% 70%)"
          fontFamily="Jost, sans-serif"
          fontSize="7"
          letterSpacing="3"
          opacity="0.55"
        >
          ATELIÊ · BR
        </text>
      </svg>
    </div>
  )
}
