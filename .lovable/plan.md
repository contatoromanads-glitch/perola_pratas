# Página "Link na Bio" — Pérola Pratas

Criar uma nova rota `/links` no estilo Linktree, reaproveitando integralmente a identidade visual da landing page (paleta esmeralda escura, tipografia Cormorant Garamond + Jost, gradientes, glow accent, animações reveal).

## Estrutura visual

```text
┌─────────────────────────────────┐
│   ✦ glow accent radial fundo    │
│   pattern de pontos decorativo  │
│                                 │
│         [logo branco]           │
│      ── ◆ divisor ◆ ──          │
│                                 │
│    Pérola Pratas                │  ← Cormorant serif
│    Soberana em Prata 925        │  ← itálico accent
│                                 │
│  Joalheria de atacado para      │  ← Jost light
│  revendedores exclusivos.       │
│                                 │
│  ┌───────────────────────────┐  │
│  │ ▶  WhatsApp Atacado    →  │  │  ← card link
│  └───────────────────────────┘  │
│  ┌───────────────────────────┐  │
│  │ ✦  Catálogo Coleções   →  │  │
│  └───────────────────────────┘  │
│  ┌───────────────────────────┐  │
│  │ ◆  Instagram           →  │  │
│  └───────────────────────────┘  │
│  ┌───────────────────────────┐  │
│  │ ◇  Site Oficial        →  │  │
│  └───────────────────────────┘  │
│  ┌───────────────────────────┐  │
│  │ ⬢  Showroom / Localização→ │  │
│  └───────────────────────────┘  │
│                                 │
│  © 2026 Pérola Pratas B2B       │
└─────────────────────────────────┘
```

Layout single-column centralizado, max-width ~480px, padding generoso. Sem `<Nav>` nem `<Footer>` da landing — página standalone full-screen.

## Links propostos (placeholders editáveis)

1. **WhatsApp Atacado** → `https://wa.me/5511999999999`
2. **Catálogo de Coleções** → `/#colecoes` (volta pra landing)
3. **Instagram** → `https://instagram.com/perolapratas`
4. **Site Oficial** → `/` (landing)
5. **Showroom** → link Google Maps placeholder

(URLs ficam fáceis de editar num array no topo do componente.)

## Estilo dos cards de link

Reaproveitar a classe `.card` existente (surface-2, blur, hover lift accent) com padding interno generoso, ícone à esquerda (lucide-react ou símbolo decorativo ◆), label em Jost uppercase tracking, seta `→` à direita aparecendo no hover. Min-height 64px (alvo de toque AA).

Hover: translateY(-2px) + borda accent + glow accent suave (já no `.card`).

## Detalhes técnicos

**Arquivos novos:**
- `src/pages/Links.tsx` — página completa (header + lista de links + footer minimal)

**Arquivos editados:**
- `src/App.tsx` — adicionar `<Route path="/links" element={<Links />} />` antes do catch-all

**Reuso do design system:**
- Fundo: herda do `body` (gradiente esmeralda já global)
- Glow accent radial absoluto (mesmo padrão do `LeadCapture`)
- Pattern de pontos decorativo (mesmo do `LeadCapture`)
- Tipografia: `font-serif` para nome da marca, `font-sans` para descrição/links
- Logo: `<img src="/logo.png" className="h-14 brightness-0 invert opacity-90" />`
- Animação de entrada: hook `useReveal` com delays escalonados nos cards
- Ícones: `lucide-react` já presumivelmente disponível (MessageCircle, Instagram, MapPin, Sparkles, ExternalLink)

**Responsividade:** padding lateral `px-6` no mobile, `px-8` desktop. Tudo centralizado, funciona sem ajustes de breakpoint além do que o Tailwind já dá.

**Acessibilidade:** links externos com `target="_blank" rel="noopener noreferrer"`, `aria-label` descritivos, foco visível herdado do CSS global.

## Como acessar

Após implementação: `/links` (ex: `https://...lovable.app/links`). Pronto para colar na bio do Instagram/WhatsApp.
