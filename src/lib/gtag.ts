declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const QUOTE_CONVERSION_SEND_TO = 'AW-17674963106/QbCKCPil5tQcEKKRiuxB'

/** Google Ads conversion — cotação enviada (contato - cardapio livre). */
export function reportQuoteConversion(onComplete?: () => void): void {
  if (typeof window.gtag !== 'function') {
    onComplete?.()
    return
  }
  window.gtag('event', 'conversion', {
    send_to: QUOTE_CONVERSION_SEND_TO,
    event_callback: onComplete,
  })
}
