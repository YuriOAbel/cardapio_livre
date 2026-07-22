import { useEffect, useState, type FormEvent, type ReactNode } from 'react'
import { sendQuoteEmail } from '../lib/email'
import { reportQuoteConversion } from '../lib/gtag'
import type { QuoteFormData } from '../types'
import { useQuote } from '../context/QuoteContext'

const empty: QuoteFormData = {
  name: '',
  whatsapp: '',
  email: '',
}

export function QuoteModal() {
  const { isOpen, closeQuote, source } = useQuote()
  const [form, setForm] = useState<QuoteFormData>(empty)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  useEffect(() => {
    if (isOpen) {
      setForm(empty)
      setStatus('idle')
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  function update<K extends keyof QuoteFormData>(key: K, value: QuoteFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      await sendQuoteEmail({ ...form, source })
      reportQuoteConversion()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        aria-label="Fechar"
        onClick={closeQuote}
      />
      <div className="relative z-10 w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white shadow-2xl">
        <div className="sticky top-0 flex items-center justify-between gap-3 border-b border-fog bg-white/95 px-5 py-4 backdrop-blur">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink/50">Cotação gratuita</p>
            <h2 id="quote-title" className="font-display text-xl font-bold text-ink">
              Monte sua proposta
            </h2>
          </div>
          <button
            type="button"
            onClick={closeQuote}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-mist text-ink hover:bg-fog transition"
            aria-label="Fechar formulário"
          >
            ✕
          </button>
        </div>

        {status === 'success' ? (
          <div className="px-5 py-10 text-center animate-rise">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lime text-3xl">
              ✓
            </div>
            <h3 className="font-display text-2xl font-bold text-ink">Recebemos seus dados!</h3>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Vamos entrar em contato em até <strong>1 hora</strong> para concluirmos uma proposta
              personalizada para o seu negócio.
            </p>
            <button
              type="button"
              onClick={closeQuote}
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-ink px-8 font-semibold text-lime transition hover:bg-ink-soft"
            >
              Fechar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 px-5 py-5">
            <Field label="Nome" required>
              <input
                required
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                className="field"
                placeholder="Como podemos te chamar?"
                autoComplete="name"
              />
            </Field>

            <Field label="WhatsApp" required>
              <input
                required
                type="tel"
                value={form.whatsapp}
                onChange={(e) => update('whatsapp', e.target.value)}
                className="field"
                placeholder="(11) 99999-9999"
                autoComplete="tel"
              />
            </Field>

            <Field label="E-mail" required>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                className="field"
                placeholder="seu@email.com"
                autoComplete="email"
              />
            </Field>

            {status === 'error' && (
              <p className="rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700">
                Não foi possível enviar agora. Tente novamente em instantes.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="flex h-13 w-full items-center justify-center rounded-full bg-ink py-3.5 font-bold text-lime transition hover:bg-ink-soft disabled:opacity-60"
            >
              {status === 'loading' ? 'Enviando...' : 'Quero minha proposta'}
            </button>
            <p className="pb-2 text-center text-xs text-ink/45">
              Sem spam. Resposta comercial em até 1 hora em horário comercial.
            </p>
          </form>
        )}
      </div>
      <style>{`
        .field {
          width: 100%;
          border-radius: 0.875rem;
          border: 1.5px solid #dce5df;
          background: #f8faf8;
          padding: 0.75rem 0.9rem;
          font-size: 0.95rem;
          color: #0f2e1f;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .field:focus {
          border-color: #0f2e1f;
          box-shadow: 0 0 0 3px rgba(212, 255, 74, 0.45);
          background: #fff;
        }
      `}</style>
    </div>
  )
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink/80">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      {children}
    </label>
  )
}
