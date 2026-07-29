import { useState, type FormEvent, type ReactNode } from 'react'
import { sendQuoteEmail } from '../lib/email'
import { reportQuoteConversion } from '../lib/gtag'
import type { QuoteFormData } from '../types'

const empty: QuoteFormData = {
  name: '',
  whatsapp: '',
  email: '',
}

interface QuoteFormProps {
  source: string
  variant?: 'modal' | 'hero'
  onSuccessClose?: () => void
}

export function QuoteForm({ source, variant = 'modal', onSuccessClose }: QuoteFormProps) {
  const [form, setForm] = useState<QuoteFormData>(empty)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

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

  const pad = variant === 'modal' ? 'px-5 py-5' : 'pt-1'
  const successPad = variant === 'modal' ? 'px-5 py-10' : 'py-6'

  if (status === 'success') {
    return (
      <div className={`${successPad} text-center animate-rise`}>
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lime text-3xl">
          ✓
        </div>
        <h3 className="font-display text-2xl font-bold text-ink">Recebemos seus dados!</h3>
        <p className="mt-3 text-ink/70 leading-relaxed">
          Vamos entrar em contato em até <strong>1 hora</strong> para concluirmos uma proposta
          personalizada para o seu negócio.
        </p>
        {variant === 'modal' && onSuccessClose ? (
          <button
            type="button"
            onClick={onSuccessClose}
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-ink px-8 font-semibold text-lime transition hover:bg-ink-soft"
          >
            Fechar
          </button>
        ) : null}
      </div>
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={`space-y-4 ${pad}`}>
        <Field label="Nome" required>
          <input
            id={variant === 'hero' ? 'cotacao-nome' : undefined}
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
          {status === 'loading' ? 'Enviando...' : 'Falar com o consultor'}
        </button>
        <p className="pb-2 text-center text-xs text-ink/45">
          Sem spam. Resposta comercial em até 1 hora em horário comercial.
        </p>
      </form>
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
    </>
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
