import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { QuoteFormData } from '../types'

type QuoteContextValue = {
  isOpen: boolean
  source: string
  openQuote: (source: string) => void
  closeQuote: () => void
  initialArea: QuoteFormData['area']
}

const QuoteContext = createContext<QuoteContextValue | null>(null)

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [source, setSource] = useState('lp')
  const [initialArea, setInitialArea] = useState<QuoteFormData['area']>('')

  const openQuote = useCallback((ctaSource: string) => {
    setSource(ctaSource)
    const areaMatch = ctaSource.match(/sorveteria|lanchonete|cafeteria/)
    setInitialArea((areaMatch?.[0] as QuoteFormData['area']) || '')
    setIsOpen(true)
  }, [])

  const closeQuote = useCallback(() => setIsOpen(false), [])

  const value = useMemo(
    () => ({ isOpen, source, openQuote, closeQuote, initialArea }),
    [isOpen, source, openQuote, closeQuote, initialArea],
  )

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
}

export function useQuote() {
  const ctx = useContext(QuoteContext)
  if (!ctx) throw new Error('useQuote must be used within QuoteProvider')
  return ctx
}
