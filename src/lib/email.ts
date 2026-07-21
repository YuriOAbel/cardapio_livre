import type { QuoteFormData } from '../types'

const QUOTE_EMAIL = 'sistemasoliveira.abel@gmail.com'

export async function sendQuoteEmail(data: QuoteFormData): Promise<void> {
  const body = {
    _subject: `[Cardápio Livre] Nova cotação — ${data.businessName}`,
    _template: 'table',
    _captcha: 'false',
    nome: data.name,
    negocio: data.businessName,
    area_atuacao: data.area,
    produtos_estimados: data.estimatedProducts,
    possui_site: data.hasWebsite,
    possui_logo: data.hasLogo,
    email: data.email,
    whatsapp: data.whatsapp,
    origem_cta: data.source || 'formulario',
  }

  const res = await fetch(`https://formsubmit.co/ajax/${QUOTE_EMAIL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(text || 'Falha ao enviar cotação')
  }
}
