export type QuoteFormData = {
  name: string
  whatsapp: string
  email: string
  source?: string
}

export type MenuItem = {
  id: string
  name: string
  description: string
  price: number
  category: string
  emoji: string
  /** Optional product photo URL */
  imageSrc?: string
}

export type MenuConfig = {
  slug: string
  clientName: string
  tagline: string
  area: string
  city: string
  theme: {
    primary: string
    secondary: string
    accent: string
    bg: string
  }
  coverEmoji: string
  /** Hero / case-card photo (menu header, LP showcase). */
  coverImageSrc?: string
  /** Square brand icon (preview chips, case cards). */
  logoIconSrc?: string
  /** Wordmark for menu header / large brand spots. */
  logoWordmarkSrc?: string
  items: MenuItem[]
}

export type CartLine = {
  item: MenuItem
  qty: number
}
