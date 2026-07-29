import { useEffect } from 'react'
import { QuoteForm } from './QuoteForm'
import { useQuote } from '../context/QuoteContext'

export function QuoteModal() {
  const { isOpen, closeQuote, source } = useQuote()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

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
            <h2 id="quote-title" className="font-display text-xl font-bold text-ink">
              Fale com a nossa equipe
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

        <QuoteForm
          key={source}
          source={source}
          variant="modal"
          onSuccessClose={closeQuote}
        />
      </div>
    </div>
  )
}
