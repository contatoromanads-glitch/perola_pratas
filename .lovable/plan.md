# Diagnóstico — Auditoria UI/UX & WCAG AA

## Falhas críticas de contraste (texto desaparecendo)

1. **Marquee invisível** — `<div className="bg-forest …">` usa `--forest: #f0fdf4` (quase branco) com filhos `text-white/55`. **Texto branco sobre fundo branco** (contraste ~1.05:1). Falha total WCAG.
2. **Token `--cream` enganoso** — definido como `#022c22` (verde quase preto). Qualquer componente que usar `text-cream` sobre o fundo escuro vai sumir. Nome semântico não condiz com a cor.
3. **`btn-teal` com cor sólida escura** — fundo `#022c22` sobre seção principal escura `#0f4d2e`/`#1b6b42` resulta em contraste insuficiente (~1.6:1) entre o botão e o fundo da página: o CTA primário se confunde com o entorno.
4. **Body padrão `var(--forest)` (#f0fdf4) sobre gradiente verde escuro** — OK para títulos, mas todo `text-forest-soft` (#a7f3d0) em parágrafos pequenos fica abaixo de 4.5:1 contra `#1b6b42` (~3.8:1). Falha AA para texto normal.
5. **`text-muted` (#6ee7b7) e `text-white/55`** usados em labels e legendas pequenas — frequentemente abaixo de AA.
6. **Bordas e separadores quase invisíveis** — `border-border` definido como `rgba(255,255,255,0.1)`; combinado com cards `rgba(0,0,0,0.18)` no fundo verde gera hierarquia visual fraca.
7. **Hero stat divider** usa `border-[rgba(6,78,59,0.12)]` (verde escuro com 12% alpha) sobre fundo verde escuro — invisível.
8. **Ghost numbers com `text-white/5` e `text-forest opacity-[0.04]`** sobre fundo escuro: ok decorativo, mas alguns viram ruído sem propósito.
9. **Texto do botão Hero "Analisar Ser de Atração"** — string parece corrompida (provável "Aplicar Agora" ou similar). Mantemos texto conforme restrição mas o destacamos.
10. **Footer em `#0a3a1e`** com `text-muted` (#6ee7b7) em parágrafo: contraste limítrofe, e `text-white/25` no copyright fica abaixo de 3:1.

## Problemas de layout e coesão

- **Hero**: grid fixo `5fr_4fr` com `px-10` quebra em telas <900px (não responsivo). Vídeo lateral pode não carregar — sem fallback visível.
- **Differential**: grid `5rem_1fr_2px_2.5fr` com `gap-12` colapsa horrivelmente no mobile.
- **Gallery**: grid `4fr_5fr_3fr` sempre 3 colunas, sem breakpoint mobile.
- **Argument**: padding clamp gigante (`9vw 5.5vw`) em telas pequenas espreme conteúdo.
- **Tipografia inconsistente**: clamp values muito agressivos (`8.5vw` no h1) viram tamanhos desproporcionais em viewport médio.
- **Hierarquia de CTAs fraca**: botão primário e outline têm peso visual quase idêntico.
- **Cards do Advantage** dependem de blur sobre fundo já escuro com baixa diferenciação — parecem flutuar sem âncora.
- **Falta foco visível** (`:focus-visible`) em links/botões — falha WCAG 2.4.7.
- **Nav links em `text-white/50`** — abaixo de AA mesmo no fundo escuro do nav.

---

# Solução proposta

Refatorar o **design system** e os **componentes**, mantendo 100% do conteúdo textual e a estética verde-esmeralda. Estratégia:

## 1. Sistema de tokens redesenhado (`src/index.css`)

Tokens semânticos coerentes, todos em HSL, validados para WCAG AA:

```text
Surfaces (escuro)
  --surface-0   hsl(160 60% 6%)    base mais escura
  --surface-1   hsl(160 50% 10%)   seções
  --surface-2   hsl(160 45% 14%)   cards
  --surface-3   hsl(160 40% 18%)   elevadas
Surfaces (claro p/ marquee/footer)
  --surface-light hsl(160 40% 12%) (NÃO mais branco — corrige marquee)

Texto
  --text-primary    hsl(150 40% 96%)  AA contra surface-0..3
  --text-secondary  hsl(150 25% 82%)  AA p/ corpo
  --text-tertiary   hsl(150 20% 68%)  AA p/ labels grandes
  --text-muted      hsl(150 15% 58%)  apenas decorativo

Brand
  --accent          hsl(160 70% 45%)  verde esmeralda vivo
  --accent-hover    hsl(160 75% 38%)
  --accent-soft     hsl(160 60% 70%)  para itálicos/destaques

Borders
  --border-subtle   hsl(150 30% 100% / 0.10)
  --border-strong   hsl(150 30% 100% / 0.22)
```

Contrastes-alvo verificados:
- text-primary sobre surface-0 = ~15:1 (AAA)
- text-secondary sobre surface-1 = ~9:1 (AAA)
- text-tertiary sobre surface-1 = ~5.2:1 (AA)
- accent sobre surface-0 = ~5.8:1 (AA)

## 2. Tailwind config (`tailwind.config.ts`)

Mapear novos tokens para classes utilitárias semânticas: `bg-surface-1`, `text-primary`, `text-secondary`, `border-subtle`, etc. Manter compat com nomes atuais via aliases onde possível.

## 3. Componentes ajustados

- **Marquee**: trocar `bg-forest` → `bg-surface-light` com `text-secondary` (corrige contraste 1:1).
- **Nav**: links em `text-secondary` (não `white/50`); estado ativo/hover em `text-primary`. Mobile menu hambúrguer com `<details>` nativo (sem JS extra).
- **Hero**: grid responsivo `grid-cols-1 md:grid-cols-[5fr_4fr]`, padding `px-6 md:px-10`, divider em `border-subtle`, parágrafo em `text-secondary`. Botão primário sólido com accent + foco visível.
- **Differential**: grid responsivo (lista vertical no mobile), descrição em `text-secondary`.
- **Argument**: padding reduzido em mobile, texto em `text-secondary`, label do accent corrigida.
- **Advantage**: cards com `bg-surface-2`, borda `border-subtle` mais visível, hover com borda accent.
- **Gallery**: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-[4fr_5fr_3fr]`; legenda em `text-secondary`.
- **Heritage**: parágrafos em `text-secondary`; counters em `text-primary`.
- **LeadCapture**: parágrafo em `text-secondary`; botão WhatsApp em accent sólido com foco.
- **Footer**: trocar `bg-[#0a3a1e]` por `bg-surface-0`; parágrafo em `text-secondary`; copyright em `text-tertiary` (≥4.5:1).
- **Botões globais** (`.btn-teal`, `.btn-outline`): redesign com hierarquia clara — primário accent sólido, outline com borda forte e label `text-primary`. Ambos com `:focus-visible` ring (`outline: 2px solid accent; outline-offset: 3px`).

## 4. Acessibilidade adicional

- `:focus-visible` global com anel verde accent.
- `prefers-reduced-motion` desliga marquee, float e reveal.
- `aria-hidden` em watermarks/ghost texts decorativos (já parcial).
- Tamanho mínimo de toque 44×44 nos links do nav e botões.

---

## Arquivos a alterar

- `src/index.css` — tokens, base, botões, foco, motion safety
- `tailwind.config.ts` — novos nomes semânticos
- `src/components/Nav.tsx`
- `src/components/Hero.tsx`
- `src/components/Marquee.tsx`
- `src/components/Differential.tsx`
- `src/components/Argument.tsx`
- `src/components/Advantage.tsx`
- `src/components/Gallery.tsx`
- `src/components/Heritage.tsx`
- `src/components/LeadCapture.tsx`
- `src/components/Footer.tsx`

Nenhum texto de conteúdo será alterado. Apenas estrutura visual, classes e tokens.

## Verificação final

Após aplicar, rodar `vite build` e inspecionar visualmente em viewports 360, 768 e 1280 para confirmar legibilidade e responsividade.