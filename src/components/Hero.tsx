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

      {/* ─── MOBILE + TABLET: cena SVG como background atrás do texto ───
          Em telas <lg (até 1023px), a cena fica posicionada absolutamente,
          centralizada, com um overlay vinheta para garantir legibilidade.
          Em lg+ é escondida aqui (renderizada no grid à direita). */}
      <div
        className="lg:hidden absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        aria-hidden="true"
      >
        {/* Mais visível em tablet (md+) que em mobile */}
        <div className="w-[115%] max-w-none opacity-[0.28] md:opacity-[0.4] md:w-[80%] translate-y-4">
          <HeroScene />
        </div>
        {/* Overlay para reforçar contraste do texto sobre a animação — mais leve em tablet */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              'radial-gradient(ellipse 80% 70% at 50% 55%, hsl(var(--background) / 0.78) 0%, hsl(var(--background) / 0.55) 50%, hsl(var(--background) / 0.85) 100%)',
          }}
        />
        <div
          className="absolute inset-0 hidden md:block lg:hidden"
          style={{
            background:
              'radial-gradient(ellipse 65% 80% at 30% 50%, hsl(var(--background) / 0.85) 0%, hsl(var(--background) / 0.55) 45%, hsl(var(--background) / 0.25) 100%)',
          }}
        />
      </div>

      <div className="max-w-[1320px] mx-auto px-6 md:px-10 w-full grid grid-cols-1 lg:grid-cols-[5fr_4fr] items-center gap-12 lg:gap-8 relative z-10">
        {/* ═══════════════════ CONTEÚDO ═══════════════════ */}
        <div className="flex flex-col animate-[fadeUp_1s_ease_forwards] order-1 lg:order-1 text-center lg:text-left items-center lg:items-start relative z-10">
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
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

          <p className="font-sans text-[1.1rem] leading-[1.85] text-secondary max-w-[440px] mx-auto lg:mx-0 font-light mb-9">
            Eleve seu portfólio com prata de atacado de qualidade editorial.
            Feito para visionários, desenhado para distinção.
          </p>

          <div className="flex gap-4 flex-wrap justify-center lg:justify-start mb-12">
            <a href="#cadastro" className="btn-primary">Analisar Ser de Atração</a>
            <a href="#colecoes" className="btn-outline">Explorar Coleções</a>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12 pt-8 border-t border-border-strong w-full">
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

        {/* ═══════════════════ CENA SVG (somente desktop ≥ lg) ═══════════════════
            Em mobile/tablet a cena foi movida para o background acima.
            Garantimos largura mínima para que o SVG sempre seja bem visível. */}
        <div className="hidden lg:flex order-2 justify-end items-center">
          <div className="flex-shrink-0 w-[clamp(380px,38vw,560px)]">
            <HeroScene />
          </div>
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
          {/*
            CABELO REALISTA — silhueta feminina com cabelos fluidos.
            Construído em 4 camadas para dar volume e movimento natural:
              a) Massa principal (volume superior + topo da cabeça)
              b) Mecha lateral esquerda caindo sobre o ombro
              c) Mecha lateral direita ondulada (mais longa)
              d) Fios soltos / wisps na frente do rosto
          */}

          {/* (a) Volume principal do cabelo — coroa, laterais e nuca */}
          <path
            d="M 138 145
               C 118 130, 108 95, 128 65
               C 148 38, 195 28, 230 38
               C 272 50, 295 80, 290 120
               C 298 140, 302 165, 295 190
               C 290 205, 280 215, 270 218
               L 268 200
               C 270 185, 268 170, 263 160"
            fill="none"
            stroke="url(#silhouetteGrad)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="900"
            strokeDashoffset="900"
            style={{ animation: 'drawLine 2.6s ease-out 0.2s forwards' }}
          />

          {/* (b) Mecha lateral esquerda — caindo sobre o ombro com curvatura natural */}
          <path
            d="M 138 145
               C 125 175, 118 215, 122 255
               C 124 285, 132 315, 142 345
               C 148 365, 155 380, 165 390"
            fill="none"
            stroke="url(#silhouetteGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="500"
            strokeDashoffset="500"
            style={{ animation: 'drawLine 2.4s ease-out 0.8s forwards' }}
          />

          {/* (b.2) Mecha interna esquerda — paralela, dando profundidade ao volume */}
          <path
            d="M 148 160
               C 142 195, 140 230, 145 265
               C 150 295, 158 320, 165 335"
            fill="none"
            stroke="url(#silhouetteGrad)"
            strokeWidth="0.9"
            strokeLinecap="round"
            opacity="0.55"
            strokeDasharray="350"
            strokeDashoffset="350"
            style={{ animation: 'drawLine 2.2s ease-out 1.1s forwards' }}
          />

          {/* (c) Mecha lateral direita — mais longa, ondulada, passando do ombro */}
          <path
            d="M 295 145
               C 308 178, 312 220, 305 260
               C 298 295, 285 325, 268 355
               C 258 375, 248 390, 240 400"
            fill="none"
            stroke="url(#silhouetteGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="520"
            strokeDashoffset="520"
            style={{ animation: 'drawLine 2.4s ease-out 0.8s forwards' }}
          />

          {/* (c.2) Mecha interna direita — fio paralelo dando textura */}
          <path
            d="M 285 160
               C 295 195, 298 230, 292 265
               C 286 295, 276 320, 265 340"
            fill="none"
            stroke="url(#silhouetteGrad)"
            strokeWidth="0.9"
            strokeLinecap="round"
            opacity="0.55"
            strokeDasharray="380"
            strokeDashoffset="380"
            style={{ animation: 'drawLine 2.2s ease-out 1.1s forwards' }}
          />

          {/* (d) Fios soltos sobre a testa — wisps suaves de franja lateral */}
          <path
            d="M 165 90
               C 175 100, 183 110, 188 122
               M 235 90
               C 228 102, 222 115, 218 128"
            fill="none"
            stroke="url(#silhouetteGrad)"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.7"
            strokeDasharray="120"
            strokeDashoffset="120"
            style={{ animation: 'drawLine 1.6s ease-out 1.6s forwards' }}
          />

          {/* (d.2) Risca / repartido sutil no topo da cabeça */}
          <path
            d="M 200 38 C 198 55, 200 72, 202 88"
            fill="none"
            stroke="url(#silhouetteGrad)"
            strokeWidth="0.7"
            strokeLinecap="round"
            opacity="0.5"
            strokeDasharray="60"
            strokeDashoffset="60"
            style={{ animation: 'drawLine 1.4s ease-out 1.8s forwards' }}
          />

          {/* Linha do queixo / mandíbula */}
          <path
            d="M 152 138 C 145 170, 155 205, 178 222 C 192 232, 212 234, 226 226 C 248 214, 262 188, 262 152"
            fill="none"
            stroke="url(#silhouetteGrad)"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeDasharray="500"
            strokeDashoffset="500"
            style={{ animation: 'drawLine 2.2s ease-out 0.6s forwards' }}
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

          {/*
            Halo do pingente — pulsa UMA vez no impacto e estabiliza.
            forwards + sem 'infinite' garante que pare no estado final.
          */}
          <circle
            cx="200" cy="350" r="22"
            fill="url(#pendantGlow)"
            opacity="0"
            style={{
              animation: 'pendantSettle 1.4s ease-out 4.4s forwards',
              transformOrigin: '200px 350px',
            }}
          />

          {/* Pingente diamantino — assenta no lugar e fica estático */}
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

          {/*
            Ondas de impacto — emitidas UMA vez no momento do pouso.
            Sem 'infinite': cada onda toca a animação e desaparece, sem ciclo.
          */}
          {[0, 1, 2].map((i) => (
            <circle
              key={i}
              cx="200" cy="350" r="8"
              fill="none"
              stroke="hsl(160 60% 72%)"
              strokeWidth="0.5"
              opacity="0"
              style={{
                animation: `signalImpact 1.4s ease-out ${4.6 + i * 0.25}s forwards`,
                transformOrigin: '200px 350px',
              }}
            />
          ))}
        </g>

        {/* ─── 5. BRINCOS — assentam com UM brilho final e param ─── */}
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
              opacity="0"
              style={{
                animation: 'earringSettle 1.2s ease-out 4s forwards',
                transformOrigin: '148px 200px',
              }}
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
              opacity="0"
              style={{
                animation: 'earringSettle 1.2s ease-out 4.15s forwards',
                transformOrigin: '252px 200px',
              }}
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
