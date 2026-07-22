export const CONTACT = {
  company: 'OLIVEIRA & ABEL SISTEMAS LTDA',
  cnpj: '48.132.340/0001-00',
  address: 'R. Octávio de Lucca · CEP 88810-438 · Mina do Mato · Criciúma/SC',
  phoneDisplay: '(48) 99649-8239',
  phoneE164: '5548996498239',
  email: 'sistemasoliveira.abel@gmail.com',
} as const

export const WHATSAPP_URL = `https://wa.me/${CONTACT.phoneE164}`
export const MAILTO_URL = `mailto:${CONTACT.email}`
