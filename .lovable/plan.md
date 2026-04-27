# Hero redesign — Cena SVG vanguardista

## O que será feito

Substituir completamente o `<video>` lateral e o logo watermark do Hero por uma **cena SVG animada** construída em código puro: silhueta feminina em line-art editorial sendo adornada por um colar de prata com pingente diamantino, brincos cintilantes, partículas orbitando e ondas concêntricas saindo do pingente.

Tudo é **SVG inline + CSS keyframes** (sem GSAP/Framer Motion) — zero dependências novas, totalmente performático.

## Arquivos alterados

- **`src/components/Hero.tsx`** — reescrito com a nova cena SVG (componente `<HeroScene/>` interno).
- **`src/index.css`** — novos keyframes adicionados ao final do bloco "ANIMATIONS".

## Camadas da cena (do fundo para o primeiro plano)

```text
┌─ aura: 3 anéis concêntricos pulsantes
├─ partículas: 14 pontos de prata orbitando em loop lento
├─ silhueta: traços contínuos (cabelo → rosto → pescoço → ombros)
│            efeito "draw-on" via stroke-dasharray
├─ colar:    arco passando pelo pescoço + pingente diamantino
│            ondas concêntricas (signal) saindo do pingente
├─ brincos:  ponto + gota de prata, brilho pulsante
└─ sparkles: 7 estrelas diamantinas cintilando fora de fase
```

## Animações (keyframes a adicionar em `index.css`)

- `drawLine` — desenha cada path da silhueta/colar progressivamente (3s sequenciados).
- `auraPulse` — anéis concêntricos respiram (escala + opacidade), 6s.
- `particleDrift` — partículas oscilam em ciclos de 10–15s, fora de fase.
- `pendantGlow` — halo do pingente pulsa (4s).
- `signalWave` — ondas radiais expandem do pingente (4s loop).
- `earringTwinkle` — brincos brilham (3s).
- `sparkleTwinkle` — estrelas surgem/somem com rotação (5s).
- `fadeInDelayed` — utilitário para revelações sequenciadas.

A `floating` global existente (`@keyframes float`) embala o container inteiro suavemente.

## Sequência temporal (storytelling)

```text
0.0s ──► silhueta começa a se desenhar (cabeça)
0.6s ──► linha do rosto
1.2s ──► pescoço aparece
1.4s ──► ombros / decote
2.4s ──► detalhes do rosto (olhos, V do decote)
2.6s ──► colar se desenha em arco
3.4s ──► brincos surgem
4.4s ──► pingente aparece e começa a brilhar
4.8s+ ──► ondas radiais e partículas em loop perpétuo
```

## Aspectos técnicos

- **`viewBox="0 0 400 500"`** com `preserveAspectRatio` → escala perfeita sem distorção.
- **Gradientes definidos uma vez em `<defs>`**: silhueta verde, prata polida, glow radial.
- **`<filter id="softGlow">`** com `feGaussianBlur` → brilho real nos brincos e pingente.
- **`<symbol id="sparkle">`** reutilizado via `<use>` → 7 estrelas com 1 definição.
- **Acessibilidade**: container com `role="img"` + `aria-label` descritivo; elementos decorativos com `aria-hidden`.
- **`prefers-reduced-motion`** já tratado globalmente em `index.css` → desliga todas animações para usuários sensíveis.
- **Responsivo**: container `aspect-[4/5] max-w-[520px]`; em mobile a cena vai para o topo (`order-1`) e o conteúdo abaixo (`order-2`); no desktop volta ao layout original.

## Layout responsivo

- **Mobile (<768px)**: cena empilhada acima, conteúdo abaixo, padding reduzido.
- **Tablet/Desktop**: grid `5fr_4fr`, cena à direita ocupando até 520px.

## Conteúdo preservado

Headline, parágrafo, CTAs e stats permanecem idênticos — apenas a metade visual direita foi reinventada.