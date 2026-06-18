import { useState, useCallback } from 'react'

// ────────────────────────────────────────────────────────────
// IMPORTANT: This page is protected by a local password to
// avoid exposing the Mercado Pago access token to the public.
// The token is embedded here for convenience since there is no
// dedicated backend. Never share or publish this page publicly.
// ────────────────────────────────────────────────────────────
const ACCESS_TOKEN = 'APP_USR-4879369062166829-061013-de58c414871860783ef87ca1dadb1a3f-5868625'
const PAGE_PASSWORD = 'perola2025' // Change this to your preferred password

type Status = 'idle' | 'loading' | 'success' | 'error'

interface PaymentLink {
  id: string
  init_point: string
  sandbox_init_point: string
  title: string
  amount: number
  payer_name: string
}

// ────────────────────────────────────────────────────────────
// MERCADO PAGO — Create preference (payment link)
// ────────────────────────────────────────────────────────────
async function createPreference(data: {
  title: string
  description: string
  amount: number
  quantity: number
  installments: number
  payerName: string
  payerEmail: string
}): Promise<{ id: string; init_point: string; sandbox_init_point: string }> {
  const body = {
    items: [
      {
        title: data.title,
        description: data.description || data.title,
        quantity: data.quantity,
        currency_id: 'BRL',
        unit_price: data.amount,
      },
    ],
    payer: {
      name: data.payerName || undefined,
      email: data.payerEmail || undefined,
    },
    payment_methods: {
      excluded_payment_types: [],
      // Fixar exatamente a quantidade de parcelas escolhida — cliente não pode alterar
      installments: data.installments,
      default_installments: data.installments,
    },
    back_urls: {
      success: 'https://www.perolapratas.com.br',
      failure: 'https://www.perolapratas.com.br',
      pending: 'https://www.perolapratas.com.br',
    },
    auto_return: 'approved',
  }

  const res = await fetch('https://api.mercadopago.com/checkout/preferences', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err?.message || `Erro ${res.status}: ${res.statusText}`)
  }

  return res.json()
}

// ────────────────────────────────────────────────────────────
// COMPONENT
// ────────────────────────────────────────────────────────────
export default function GeradorLinks() {
  // Auth
  const [authed, setAuthed] = useState(false)
  const [pwInput, setPwInput] = useState('')
  const [pwError, setPwError] = useState(false)

  // Form
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [quantity, setQuantity] = useState('1')
  const [installments, setInstallments] = useState('1')
  const [payerName, setPayerName] = useState('')
  const [payerEmail, setPayerEmail] = useState('')

  // State
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [links, setLinks] = useState<PaymentLink[]>([])
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (pwInput === PAGE_PASSWORD) {
      setAuthed(true)
      setPwError(false)
    } else {
      setPwError(true)
    }
  }

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      if (!title || !amount) return

      const parsedAmount = parseFloat(amount.replace(',', '.'))
      if (isNaN(parsedAmount) || parsedAmount <= 0) {
        setErrorMsg('Informe um valor válido maior que zero.')
        setStatus('error')
        return
      }

      setStatus('loading')
      setErrorMsg('')

      try {
        const result = await createPreference({
          title,
          description,
          amount: parsedAmount,
          quantity: parseInt(quantity) || 1,
          installments: parseInt(installments) || 1,
          payerName,
          payerEmail,
        })

        const newLink: PaymentLink = {
          id: result.id,
          init_point: result.init_point,
          sandbox_init_point: result.sandbox_init_point,
          title,
          amount: parsedAmount,
          payer_name: payerName,
        }

        setLinks((prev) => [newLink, ...prev])
        setStatus('success')

        // Reset form
        setTitle('')
        setDescription('')
        setAmount('')
        setQuantity('1')
        setInstallments('1')
        setPayerName('')
        setPayerEmail('')
      } catch (err: unknown) {
        setErrorMsg(err instanceof Error ? err.message : 'Erro desconhecido ao criar link.')
        setStatus('error')
      }
    },
    [title, description, amount, quantity, installments, payerName, payerEmail]
  )

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2500)
    } catch {
      // fallback
    }
  }

  const formatCurrency = (v: number) =>
    v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  // ── LOGIN SCREEN ──────────────────────────────────────────
  if (!authed) {
    return (
      <div className="gl-bg gl-center">
        <div className="gl-login-card">
          <div className="gl-logo-mark">💎</div>
          <h1 className="gl-login-title">Área Restrita</h1>
          <p className="gl-login-sub">Gerador de Links de Pagamento · Pérola Pratas</p>
          <form onSubmit={handleLogin} className="gl-login-form">
            <input
              type="password"
              placeholder="Senha de acesso"
              value={pwInput}
              onChange={(e) => setPwInput(e.target.value)}
              className={`gl-input${pwError ? ' gl-input-error' : ''}`}
              autoFocus
            />
            {pwError && <p className="gl-error-msg">Senha incorreta. Tente novamente.</p>}
            <button type="submit" className="gl-btn-primary">
              Entrar
            </button>
          </form>
        </div>
      </div>
    )
  }

  // ── MAIN SCREEN ───────────────────────────────────────────
  return (
    <div className="gl-bg">
      <div className="gl-container">
        {/* Header */}
        <header className="gl-header">
          <div className="gl-header-left">
            <span className="gl-gem">💎</span>
            <div>
              <h1 className="gl-page-title">Gerador de Links de Pagamento</h1>
              <p className="gl-page-sub">Pérola Pratas · Mercado Pago</p>
            </div>
          </div>
          <button className="gl-btn-ghost" onClick={() => setAuthed(false)}>
            Sair
          </button>
        </header>

        <div className="gl-layout">
          {/* Form */}
          <section className="gl-card gl-form-card">
            <h2 className="gl-section-title">Novo Link de Pagamento</h2>
            <form onSubmit={handleSubmit} className="gl-form">
              <div className="gl-field">
                <label className="gl-label">Título / Produto *</label>
                <input
                  type="text"
                  className="gl-input"
                  placeholder="Ex: Anel Solitário Prata 925"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="gl-field">
                <label className="gl-label">Descrição (opcional)</label>
                <textarea
                  className="gl-input gl-textarea"
                  placeholder="Descrição adicional do produto ou serviço"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={2}
                />
              </div>

              <div className="gl-row">
                <div className="gl-field gl-field-grow">
                  <label className="gl-label">Valor (R$) *</label>
                  <input
                    type="text"
                    inputMode="decimal"
                    className="gl-input"
                    placeholder="0,00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </div>
                <div className="gl-field gl-field-shrink">
                  <label className="gl-label">Quantidade</label>
                  <input
                    type="number"
                    min="1"
                    className="gl-input"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
              </div>

              <div className="gl-field">
                <label className="gl-label">Parcelamento (fixo para o cliente)</label>
                <select
                  className="gl-input gl-select"
                  value={installments}
                  onChange={(e) => setInstallments(e.target.value)}
                >
                  <option value="1">À vista (1x)</option>
                  {[2,3,4,5,6,7,8,9,10,11,12].map((n) => (
                    <option key={n} value={n}>{n}x sem juros</option>
                  ))}
                </select>
                <span className="gl-field-hint">O cliente verá essa opção já selecionada e não poderá alterá-la.</span>
              </div>

              <div className="gl-divider-label">Dados do cliente (opcional)</div>

              <div className="gl-row">
                <div className="gl-field gl-field-grow">
                  <label className="gl-label">Nome do cliente</label>
                  <input
                    type="text"
                    className="gl-input"
                    placeholder="Nome completo"
                    value={payerName}
                    onChange={(e) => setPayerName(e.target.value)}
                  />
                </div>
                <div className="gl-field gl-field-grow">
                  <label className="gl-label">E-mail do cliente</label>
                  <input
                    type="email"
                    className="gl-input"
                    placeholder="email@exemplo.com"
                    value={payerEmail}
                    onChange={(e) => setPayerEmail(e.target.value)}
                  />
                </div>
              </div>

              {status === 'error' && (
                <div className="gl-alert gl-alert-error">
                  <span>⚠️</span> {errorMsg}
                </div>
              )}

              {status === 'success' && (
                <div className="gl-alert gl-alert-success">
                  <span>✅</span> Link gerado com sucesso! Confira abaixo.
                </div>
              )}

              <button
                type="submit"
                className="gl-btn-primary gl-btn-full"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <span className="gl-spinner-row">
                    <span className="gl-spinner" /> Gerando link...
                  </span>
                ) : (
                  '✦ Gerar Link de Pagamento'
                )}
              </button>
            </form>
          </section>

          {/* Links History */}
          <section className="gl-card gl-history-card">
            <h2 className="gl-section-title">Links Gerados</h2>
            {links.length === 0 ? (
              <div className="gl-empty">
                <span className="gl-empty-icon">🔗</span>
                <p>Nenhum link gerado ainda.</p>
                <p className="gl-empty-sub">Preencha o formulário e clique em "Gerar Link".</p>
              </div>
            ) : (
              <ul className="gl-links-list">
                {links.map((lnk) => (
                  <li key={lnk.id} className="gl-link-item">
                    <div className="gl-link-info">
                      <span className="gl-link-title">{lnk.title}</span>
                      <span className="gl-link-meta">
                        {formatCurrency(lnk.amount)}
                        {lnk.payer_name && ` · Para: ${lnk.payer_name}`}
                      </span>
                      <span className="gl-link-url">{lnk.init_point}</span>
                    </div>
                    <div className="gl-link-actions">
                      <button
                        className="gl-btn-copy"
                        onClick={() => copyToClipboard(lnk.init_point, lnk.id)}
                      >
                        {copiedId === lnk.id ? '✓ Copiado!' : '📋 Copiar'}
                      </button>
                      <a
                        href={lnk.init_point}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gl-btn-open"
                      >
                        🔗 Abrir
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>

      <style>{`
        /* ── Variables ─────────────────────────────────────── */
        .gl-bg {
          min-height: 100vh;
          background: hsl(160 60% 6%);
          font-family: 'Inter', 'Outfit', system-ui, sans-serif;
          color: hsl(150 40% 96%);
        }
        .gl-center {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── Login ─────────────────────────────────────────── */
        .gl-login-card {
          background: hsl(160 50% 10%);
          border: 1px solid hsl(160 40% 22% / 0.6);
          border-radius: 20px;
          padding: 3rem 2.5rem;
          width: 100%;
          max-width: 400px;
          text-align: center;
          box-shadow: 0 24px 80px hsl(160 60% 3% / 0.6);
        }
        .gl-logo-mark {
          font-size: 2.8rem;
          margin-bottom: 1rem;
          display: block;
        }
        .gl-login-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: hsl(150 40% 96%);
          margin-bottom: 0.3rem;
        }
        .gl-login-sub {
          font-size: 0.85rem;
          color: hsl(150 20% 65%);
          margin-bottom: 2rem;
        }
        .gl-login-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        /* ── Header ────────────────────────────────────────── */
        .gl-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 2rem 1.5rem 4rem;
        }
        .gl-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid hsl(160 40% 22% / 0.5);
        }
        .gl-header-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .gl-gem {
          font-size: 2rem;
        }
        .gl-page-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: hsl(150 40% 96%);
        }
        .gl-page-sub {
          font-size: 0.8rem;
          color: hsl(150 20% 65%);
        }

        /* ── Layout ────────────────────────────────────────── */
        .gl-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          align-items: start;
        }
        @media (max-width: 820px) {
          .gl-layout { grid-template-columns: 1fr; }
        }

        /* ── Cards ─────────────────────────────────────────── */
        .gl-card {
          background: hsl(160 50% 10%);
          border: 1px solid hsl(160 40% 22% / 0.6);
          border-radius: 16px;
          padding: 1.75rem;
          box-shadow: 0 8px 40px hsl(160 60% 3% / 0.4);
        }
        .gl-section-title {
          font-size: 1rem;
          font-weight: 600;
          color: hsl(160 70% 58%);
          margin-bottom: 1.5rem;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          font-size: 0.78rem;
        }

        /* ── Form elements ─────────────────────────────────── */
        .gl-form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }
        .gl-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .gl-field-grow { flex: 1; }
        .gl-field-shrink { flex: 0 0 90px; }
        .gl-label {
          font-size: 0.78rem;
          font-weight: 500;
          color: hsl(150 25% 75%);
          letter-spacing: 0.01em;
        }
        .gl-input {
          background: hsl(160 45% 8%);
          border: 1px solid hsl(160 40% 22% / 0.7);
          border-radius: 10px;
          padding: 0.65rem 0.9rem;
          color: hsl(150 40% 96%);
          font-size: 0.9rem;
          font-family: inherit;
          transition: border-color 0.2s, box-shadow 0.2s;
          width: 100%;
          outline: none;
        }
        .gl-input:focus {
          border-color: hsl(160 70% 45%);
          box-shadow: 0 0 0 3px hsl(160 70% 45% / 0.15);
        }
        .gl-input::placeholder { color: hsl(150 15% 45%); }
        .gl-input-error { border-color: hsl(0 72% 55%) !important; }
        .gl-textarea { resize: vertical; min-height: 64px; }
        .gl-select {
          appearance: none;
          -webkit-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2368c9a0' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.9rem center;
          padding-right: 2.2rem;
          cursor: pointer;
        }
        .gl-field-hint {
          font-size: 0.72rem;
          color: hsl(150 15% 50%);
          font-style: italic;
        }
        .gl-row {
          display: flex;
          gap: 0.8rem;
          align-items: flex-start;
        }
        .gl-divider-label {
          font-size: 0.72rem;
          font-weight: 500;
          color: hsl(150 15% 55%);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 0.4rem 0;
          border-top: 1px solid hsl(160 40% 18%);
          margin-top: 0.3rem;
        }

        /* ── Buttons ───────────────────────────────────────── */
        .gl-btn-primary {
          background: hsl(160 70% 45%);
          color: hsl(160 60% 6%);
          font-weight: 700;
          font-family: inherit;
          border: none;
          border-radius: 10px;
          padding: 0.75rem 1.5rem;
          font-size: 0.9rem;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          letter-spacing: 0.02em;
        }
        .gl-btn-primary:hover:not(:disabled) {
          background: hsl(160 75% 38%);
          transform: translateY(-1px);
          box-shadow: 0 6px 20px hsl(160 70% 45% / 0.35);
        }
        .gl-btn-primary:disabled { opacity: 0.55; cursor: not-allowed; }
        .gl-btn-full { width: 100%; }
        .gl-btn-ghost {
          background: transparent;
          border: 1px solid hsl(160 40% 25%);
          color: hsl(150 25% 75%);
          border-radius: 8px;
          padding: 0.45rem 1rem;
          font-size: 0.82rem;
          cursor: pointer;
          font-family: inherit;
          transition: background 0.2s, color 0.2s;
        }
        .gl-btn-ghost:hover { background: hsl(160 40% 15%); color: hsl(150 40% 96%); }
        .gl-btn-copy {
          background: hsl(160 45% 14%);
          border: 1px solid hsl(160 40% 22%);
          color: hsl(160 70% 58%);
          border-radius: 7px;
          padding: 0.35rem 0.75rem;
          font-size: 0.78rem;
          cursor: pointer;
          font-family: inherit;
          transition: background 0.15s;
          white-space: nowrap;
        }
        .gl-btn-copy:hover { background: hsl(160 45% 18%); }
        .gl-btn-open {
          background: hsl(160 70% 45% / 0.15);
          border: 1px solid hsl(160 70% 45% / 0.4);
          color: hsl(160 70% 58%);
          border-radius: 7px;
          padding: 0.35rem 0.75rem;
          font-size: 0.78rem;
          text-decoration: none;
          font-family: inherit;
          transition: background 0.15s;
          white-space: nowrap;
        }
        .gl-btn-open:hover { background: hsl(160 70% 45% / 0.25); }

        /* ── Alerts ────────────────────────────────────────── */
        .gl-alert {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.75rem 1rem;
          border-radius: 10px;
          font-size: 0.85rem;
          font-weight: 500;
        }
        .gl-alert-error {
          background: hsl(0 72% 55% / 0.12);
          border: 1px solid hsl(0 72% 55% / 0.4);
          color: hsl(0 72% 80%);
        }
        .gl-alert-success {
          background: hsl(145 60% 45% / 0.12);
          border: 1px solid hsl(145 60% 45% / 0.4);
          color: hsl(145 60% 72%);
        }
        .gl-error-msg {
          font-size: 0.8rem;
          color: hsl(0 72% 72%);
          text-align: left;
          margin-top: -0.3rem;
        }

        /* ── Spinner ───────────────────────────────────────── */
        .gl-spinner-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
        }
        .gl-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid hsl(160 60% 6% / 0.4);
          border-top-color: hsl(160 60% 6%);
          border-radius: 50%;
          animation: spin 0.75s linear infinite;
          display: inline-block;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* ── Links list ────────────────────────────────────── */
        .gl-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .gl-link-item {
          background: hsl(160 45% 8%);
          border: 1px solid hsl(160 40% 20%);
          border-radius: 12px;
          padding: 1rem 1.1rem;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          transition: border-color 0.2s;
        }
        .gl-link-item:hover { border-color: hsl(160 40% 28%); }
        .gl-link-info {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          min-width: 0;
        }
        .gl-link-title {
          font-weight: 600;
          font-size: 0.9rem;
          color: hsl(150 40% 95%);
        }
        .gl-link-meta {
          font-size: 0.78rem;
          color: hsl(160 70% 55%);
          font-weight: 500;
        }
        .gl-link-url {
          font-size: 0.72rem;
          color: hsl(150 15% 55%);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 260px;
          display: block;
        }
        .gl-link-actions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex-shrink: 0;
        }

        /* ── Empty state ───────────────────────────────────── */
        .gl-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 1rem;
          text-align: center;
          color: hsl(150 15% 55%);
          gap: 0.5rem;
        }
        .gl-empty-icon { font-size: 2.5rem; margin-bottom: 0.5rem; }
        .gl-empty-sub { font-size: 0.82rem; color: hsl(150 15% 45%); }
      `}</style>
    </div>
  )
}
