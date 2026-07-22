import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Reseta scroll ao topo em toda troca de rota (SPA). */
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
