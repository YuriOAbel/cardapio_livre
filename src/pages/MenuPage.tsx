import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ImageLightbox } from '../components/ImageLightbox'
import { MenuBrandMark } from '../components/MenuBrandMark'
import { formatBRL, getMenuBySlug } from '../data/menus'
import type { CartLine, MenuItem } from '../types'
import { useQuote } from '../context/QuoteContext'

/** Dark ink text on light accents (e.g. gold); white on dark primaries. */
function contrastOn(hex: string): string {
  const h = hex.replace('#', '')
  if (h.length < 6) return '#ffffff'
  const r = Number.parseInt(h.slice(0, 2), 16)
  const g = Number.parseInt(h.slice(2, 4), 16)
  const b = Number.parseInt(h.slice(4, 6), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 > 160 ? '#212024' : '#ffffff'
}

export function MenuPage() {
  const { slug = '' } = useParams()
  const menu = getMenuBySlug(slug)
  const { openQuote } = useQuote()
  const [cart, setCart] = useState<CartLine[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const [cartPop, setCartPop] = useState(false)
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  const categories = useMemo(() => {
    if (!menu) return [] as string[]
    return [...new Set(menu.items.map((i: MenuItem) => i.category))]
  }, [menu])

  const total = cart.reduce((sum, l) => sum + l.item.price * l.qty, 0)
  const count = cart.reduce((sum, l) => sum + l.qty, 0)

  if (!menu) return <Navigate to="/" replace />

  const onPrimary = contrastOn(menu.theme.primary)
  const onAccent = contrastOn(menu.theme.accent)

  function addItem(item: MenuItem) {
    setCart((prev) => {
      const found = prev.find((l) => l.item.id === item.id)
      if (found) {
        return prev.map((l) => (l.item.id === item.id ? { ...l, qty: l.qty + 1 } : l))
      }
      return [...prev, { item, qty: 1 }]
    })
    setCartPop(true)
    setTimeout(() => setCartPop(false), 350)
  }

  function changeQty(id: string, delta: number) {
    setCart((prev) =>
      prev
        .map((l) => (l.item.id === id ? { ...l, qty: l.qty + delta } : l))
        .filter((l) => l.qty > 0),
    )
  }

  function finishOrder() {
    setConfirmed(true)
    setCart([])
    setCartOpen(false)
  }

  function openItemImage(item: MenuItem) {
    if (!item.imageSrc) return
    setLightbox({ src: item.imageSrc, alt: item.name })
  }

  return (
    <div className="min-h-screen pb-24" style={{ background: menu.theme.bg }}>
      {/* Demo banner */}
      <div className="bg-ink px-4 py-2 text-center text-xs font-medium text-lime sm:text-sm">
        Exemplo entregue pela Cardápio Livre ·{' '}
        <button
          type="button"
          onClick={() => openQuote(`cardapio-${menu.slug}`)}
          className="underline underline-offset-2 font-bold"
        >
          Quero o meu
        </button>
      </div>

      <header
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${menu.theme.primary} 0%, ${menu.theme.accent} 100%)`,
          color: onPrimary,
        }}
      >
        <div className="mx-auto max-w-lg px-4 pb-8 pt-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur"
              style={{
                background: onPrimary === '#ffffff' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)',
                color: onPrimary,
              }}
            >
              ← Voltar à LP
            </Link>
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className={`relative rounded-full bg-white px-3 py-1.5 text-xs font-bold text-ink ${
                cartPop ? 'animate-cart-pop' : ''
              }`}
            >
              Carrinho
              {count > 0 && (
                <span
                  className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-bold text-white"
                  style={{ background: menu.theme.accent }}
                >
                  {count}
                </span>
              )}
            </button>
          </div>
          <div className="mt-8 flex items-end gap-4">
            <div className="flex-1">
              <p className="text-sm font-medium opacity-80">
                {menu.area} · {menu.city}
              </p>
              <h1 className="font-display text-3xl font-extrabold sm:text-4xl">{menu.clientName}</h1>
              <p className="mt-1 opacity-85">{menu.tagline}</p>
            </div>
            <MenuBrandMark menu={menu} variant="wordmark" size="lg" onDark />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-lg px-4 py-6">
        {categories.map((cat) => (
          <section key={cat} className="mb-8">
            <h2 className="mb-3 font-display text-lg font-bold" style={{ color: menu.theme.primary }}>
              {cat}
            </h2>
            <ul className="space-y-3">
              {menu.items
                .filter((i) => i.category === cat)
                .map((item) => (
                  <li
                    key={item.id}
                    className="flex gap-3 rounded-2xl bg-white p-3 shadow-sm border border-black/5"
                  >
                    {item.imageSrc ? (
                      <button
                        type="button"
                        onClick={() => openItemImage(item)}
                        className="group relative h-14 w-14 shrink-0 overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2"
                        style={{ outlineColor: menu.theme.primary }}
                        aria-label={`Ampliar foto de ${item.name}`}
                      >
                        <img
                          src={item.imageSrc}
                          alt=""
                          className="h-full w-full object-cover transition group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/15" />
                      </button>
                    ) : (
                      <span
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl"
                        style={{ background: menu.theme.secondary }}
                      >
                        {item.emoji}
                      </span>
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-bold text-ink">{item.name}</h3>
                        <span className="shrink-0 font-bold text-ink">
                          {formatBRL(item.price)}
                        </span>
                      </div>
                      <p className="mt-0.5 text-sm text-ink/55 leading-snug">{item.description}</p>
                      <button
                        type="button"
                        onClick={() => addItem(item)}
                        className="mt-2 rounded-full px-3 py-1 text-xs font-bold transition active:scale-95"
                        style={{ background: menu.theme.primary, color: onPrimary }}
                      >
                        Adicionar
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </main>

      {/* Sticky cart bar */}
      {count > 0 && !cartOpen && (
        <div className="fixed inset-x-0 bottom-0 z-40 p-3 sm:p-4">
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="mx-auto flex w-full max-w-lg items-center justify-between rounded-2xl px-5 py-4 font-bold shadow-2xl"
            style={{ background: menu.theme.primary, color: onPrimary }}
          >
            <span>Ver carrinho ({count})</span>
            <span>{formatBRL(total)}</span>
          </button>
        </div>
      )}

      {/* Cart drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label="Fechar carrinho"
            onClick={() => setCartOpen(false)}
          />
          <div className="relative z-10 w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white shadow-2xl">
            <div className="sticky top-0 flex items-center justify-between border-b border-black/5 bg-white px-5 py-4">
              <h2 className="font-display text-xl font-bold">Seu pedido</h2>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-mist"
              >
                ✕
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="px-5 py-10 text-center text-ink/55">Carrinho vazio. Adicione itens!</p>
            ) : (
              <>
                <ul className="divide-y divide-black/5 px-5">
                  {cart.map((line) => (
                    <li key={line.item.id} className="flex items-center gap-3 py-4">
                      {line.item.imageSrc ? (
                        <img
                          src={line.item.imageSrc}
                          alt=""
                          className="h-10 w-10 shrink-0 rounded-lg object-cover"
                        />
                      ) : (
                        <span className="text-2xl">{line.item.emoji}</span>
                      )}
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold truncate">{line.item.name}</p>
                        <p className="text-sm text-ink/50">{formatBRL(line.item.price)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => changeQty(line.item.id, -1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-mist font-bold"
                        >
                          −
                        </button>
                        <span className="w-5 text-center font-bold">{line.qty}</span>
                        <button
                          type="button"
                          onClick={() => changeQty(line.item.id, 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-mist font-bold"
                        >
                          +
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-black/5 px-5 py-5">
                  <div className="mb-4 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>{formatBRL(total)}</span>
                  </div>
                  <button
                    type="button"
                    onClick={finishOrder}
                    className="w-full rounded-full py-3.5 font-bold transition active:scale-[0.98]"
                    style={{ background: menu.theme.accent, color: onAccent }}
                  >
                    Finalizar pedido
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Fake confirmation */}
      {confirmed && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label="Fechar"
            onClick={() => setConfirmed(false)}
          />
          <div className="relative z-10 w-full max-w-sm rounded-3xl bg-white p-8 text-center shadow-2xl animate-rise">
            <div
              className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-3xl"
              style={{ background: menu.theme.primary, color: onPrimary }}
            >
              ✓
            </div>
            <h3 className="font-display text-2xl font-bold text-ink">Pedido confirmado!</h3>
            <p className="mt-3 text-ink/65 leading-relaxed">
              Seu pedido na <strong>{menu.clientName}</strong> foi recebido. Em breve a cozinha
              começa o preparo. (Demonstração — sem cobrança real.)
            </p>
            <button
              type="button"
              onClick={() => setConfirmed(false)}
              className="mt-6 w-full rounded-full py-3 font-bold"
              style={{ background: menu.theme.primary, color: onPrimary }}
            >
              Continuar explorando
            </button>
          </div>
        </div>
      )}

      {lightbox && (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  )
}
