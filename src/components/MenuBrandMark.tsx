import type { MenuConfig } from '../types'

type BrandVariant = 'icon' | 'wordmark'

type MenuBrandMarkProps = {
  menu: MenuConfig
  /** icon = square mark; wordmark = written logo */
  variant?: BrandVariant
  size?: 'sm' | 'md' | 'lg'
  /** Soft plate behind logo (helps on dark gradients) */
  onDark?: boolean
  className?: string
}

const iconSizeClass = {
  sm: 'h-8 w-8',
  md: 'h-14 w-14',
  lg: 'h-16 w-16 sm:h-20 sm:w-20',
} as const

const wordmarkSizeClass = {
  sm: 'h-7 w-auto max-w-[5rem]',
  md: 'h-10 w-auto max-w-[8rem]',
  lg: 'h-12 w-auto max-w-[11rem] sm:h-14 sm:max-w-[13rem]',
} as const

const emojiClass = {
  sm: 'text-2xl',
  md: 'text-5xl',
  lg: 'text-6xl',
} as const

function resolveLogoSrc(menu: MenuConfig, variant: BrandVariant): string | undefined {
  if (variant === 'icon') {
    return menu.logoIconSrc ?? menu.logoWordmarkSrc
  }
  return menu.logoWordmarkSrc ?? menu.logoIconSrc
}

/** Brand mark for demo menus — not for product row emojis. */
export function MenuBrandMark({
  menu,
  variant = 'icon',
  size = 'md',
  onDark = false,
  className = '',
}: MenuBrandMarkProps) {
  const src = resolveLogoSrc(menu, variant)

  if (src) {
    const sizeClass = variant === 'icon' ? iconSizeClass[size] : wordmarkSizeClass[size]
    return (
      <span
        className={`inline-flex items-center justify-center ${onDark ? 'rounded-xl bg-white/95 px-2 py-1.5 shadow-sm' : ''} ${className}`}
      >
        <img
          src={src}
          alt={menu.clientName}
          className={`object-contain ${sizeClass}`}
          decoding="async"
        />
      </span>
    )
  }

  return (
    <span className={`${emojiClass[size]} ${onDark ? 'drop-shadow opacity-90' : ''} ${className}`}>
      {menu.coverEmoji}
    </span>
  )
}
