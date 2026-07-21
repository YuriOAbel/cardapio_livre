import { Link } from 'react-router-dom'
import { MenuBrandMark } from '../components/MenuBrandMark'
import { menus } from '../data/menus'
import { useQuote } from '../context/QuoteContext'

export function LandingPage() {
  const { openQuote } = useQuote()

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-ink/5 bg-mist/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
          <a href="#topo" className="font-display text-lg font-extrabold text-ink sm:text-xl">
            Cardápio<span className="text-accent"> Livre</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-ink/70 md:flex">
            <a href="#modelos" className="hover:text-ink transition">
              Modelos
            </a>
            <a href="#vantagens" className="hover:text-ink transition">
              Vantagens
            </a>
            <a href="#como-funciona" className="hover:text-ink transition">
              Como funciona
            </a>
          </nav>
          <button
            type="button"
            onClick={() => openQuote('nav-garantir')}
            className="rounded-full bg-ink px-4 py-2 text-sm font-bold text-lime transition hover:bg-ink-soft sm:px-5"
          >
            Garantir o seu
          </button>
        </div>
      </header>

      {/* HERO — brand first, one composition */}
      <section id="topo" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink-soft to-[#244a35]" />
        <div className="absolute inset-0 grain opacity-40" />
        <div
          className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-lime/20 blur-3xl animate-float"
          aria-hidden
        />
        <div
          className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-accent/25 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-8 lg:pt-20">
          <div>
            <p className="animate-rise font-display text-4xl font-extrabold leading-[1.05] text-lime sm:text-5xl md:text-6xl lg:text-7xl">
              Cardápio Livre
            </p>
            <h1 className="animate-rise-delay mt-5 max-w-xl font-display text-2xl font-bold leading-[1.25] text-white text-balance sm:text-3xl md:text-4xl">
              Seu cardápio online, pedidos no WhatsApp — sem taxa de marketplace.
            </h1>
            <p className="animate-rise-delay-2 mt-4 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
              Entregamos cardápios digitais prontos para vender. Veja três negócios reais que já
              usam o nosso modelo.
            </p>
            <div className="animate-rise-delay-2 mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => openQuote('hero-comece')}
                className="inline-flex h-12 items-center justify-center rounded-full bg-lime px-7 font-bold text-ink transition hover:bg-lime-deep"
              >
                Comece agora
              </button>
              <a
                href="#modelos"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 font-semibold text-white transition hover:bg-white/10"
              >
                Ver exemplos
              </a>
            </div>
          </div>

          <div className="animate-rise-delay relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5 shadow-2xl sm:p-6">
              <span className="inline-flex rounded-full bg-lime/90 px-3 py-1 text-xs font-bold text-ink">
                Preview ao vivo
              </span>
              <div className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
                {menus.map((m, i) => (
                  <Link
                    key={m.slug}
                    to={`/cardapio/${m.slug}`}
                    className="flex items-center gap-3 rounded-2xl bg-white/95 p-3 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                    style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                  >
                    <span
                      className="flex h-12 w-14 shrink-0 items-center justify-center rounded-xl"
                      style={{ background: m.theme.secondary }}
                    >
                      <MenuBrandMark menu={m} variant="icon" size="sm" />
                    </span>
                    <span className="min-w-0 flex-1 text-left">
                      <span className="block truncate font-bold text-ink">{m.clientName}</span>
                      <span className="block truncate text-xs text-ink/55">
                        {m.area} · {m.city}
                      </span>
                    </span>
                    <span className="text-ink/40">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <section className="border-y border-ink/5 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-4 sm:px-6 sm:py-10">
          {[
            { k: '0%', v: 'Não cobramos comissão' },
            { k: '293', v: 'clientes satisfeitos' },
            { k: '48h', v: 'até a entrega final' },
            { k: 'Sem Instalação', v: 'para o seu cliente' },
          ].map((s) => (
            <div key={s.v} className="text-center sm:text-left">
              <p className="font-display text-2xl font-extrabold leading-tight text-ink sm:text-3xl lg:text-4xl">
                {s.k}
              </p>
              <p className="mt-1 text-sm text-ink/55">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client menus showcase */}
      <section id="modelos" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">Cases entregues</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold leading-[1.2] text-ink sm:text-4xl text-balance">
            Três cardápios reais que montamos para clientes
          </h2>
          <p className="mt-3 text-ink/65 leading-relaxed">
            Abra cada página como se fosse o link do estabelecimento. Navegue, monte o pedido e
            finalize — exatamente a experiência que o cliente final vê.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {menus.map((m) => (
            <article
              key={m.slug}
              className="group flex flex-col overflow-hidden rounded-3xl border border-ink/8 bg-white transition hover:shadow-xl"
            >
              <div
                className="relative flex h-44 items-end overflow-hidden p-5"
                style={{ background: m.theme.secondary }}
              >
                {m.logoWordmarkSrc && (
                  <img
                    src={m.logoWordmarkSrc}
                    alt=""
                    aria-hidden
                    className="pointer-events-none absolute inset-0 h-full w-full object-contain p-8 pb-16 opacity-95 transition duration-300 group-hover:scale-105"
                  />
                )}
                <span className="absolute right-3 top-3 z-10 transition group-hover:scale-105">
                  <MenuBrandMark menu={m} variant="icon" size="md" onDark />
                </span>
                <div className="relative z-10 text-ink">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink/55">
                    Cliente · {m.city}
                  </p>
                  <h3 className="font-display text-2xl font-bold">{m.clientName}</h3>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm font-semibold text-ink/50">{m.area}</p>
                <p className="mt-1 text-ink/70">{m.tagline}</p>
                <div className="mt-auto flex gap-2 pt-6">
                  <Link
                    to={`/cardapio/${m.slug}`}
                    className="flex-1 rounded-full bg-ink py-2.5 text-center text-sm font-bold text-lime transition hover:bg-ink-soft"
                  >
                    Ver cardápio
                  </Link>
                  <button
                    type="button"
                    onClick={() => openQuote(`modelo-${m.slug}`)}
                    className="rounded-full border border-ink/15 px-4 py-2.5 text-sm font-bold text-ink transition hover:bg-mist"
                  >
                    Quero o meu
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section id="vantagens" className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-widest text-lime">Por que digitalizar</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold leading-[1.2] sm:text-4xl text-balance">
              Pare de perder margem para o marketplace
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: 'Canal próprio',
                d: 'Link e WhatsApp do seu negócio. O cliente e o dado ficam com você.',
              },
              {
                t: 'Pedido sem erro',
                d: 'Fotos, categorias e carrinho reduzem anotações erradas no balcão.',
              },
              {
                t: 'Mais ticket',
                d: 'Combos e adicionais visíveis aumentam o valor médio do pedido.',
              },
              {
                t: 'Mobile-first',
                d: 'Feito para o celular do cliente — onde o pedido realmente acontece.',
              },
              {
                t: 'Setup rápido',
                d: 'Usamos o perfil do seu negócio para cotar o modelo certo em até 1 hora.',
              },
              {
                t: 'Sem hardware obrigatório',
                d: 'Comece pelo link. Tablet e QR entram quando fizer sentido.',
              },
            ].map((b) => (
              <div key={b.t} className="border-t border-white/15 pt-5">
                <h3 className="font-display text-xl font-bold text-lime">{b.t}</h3>
                <p className="mt-2 text-white/70 leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <button
              type="button"
              onClick={() => openQuote('vantagens-garantir')}
              className="inline-flex h-12 items-center justify-center rounded-full bg-lime px-8 font-bold text-ink transition hover:bg-lime-deep"
            >
              Garantir o seu
            </button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="font-display text-3xl font-extrabold leading-[1.2] text-ink sm:text-4xl">Como funciona</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              n: '01',
              t: 'Conte sobre o negócio',
              d: 'Nome, área, volume de produtos, site e logo — leva menos de 2 minutos.',
            },
            {
              n: '02',
              t: 'Receba a proposta',
              d: 'Em até 1 hora montamos a cotação do modelo ideal para o seu cardápio.',
            },
            {
              n: '03',
              t: 'Publique e venda',
              d: 'Seu link no ar, pronto para compartilhar no Instagram e WhatsApp.',
            },
          ].map((s) => (
            <li key={s.n} className="rounded-3xl bg-white p-6 border border-ink/8">
              <span className="font-display text-4xl font-extrabold text-lime-deep">{s.n}</span>
              <h3 className="mt-3 font-display text-xl font-bold text-ink">{s.t}</h3>
              <p className="mt-2 text-ink/65 leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => openQuote('como-comece')}
            className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-8 font-bold text-lime transition hover:bg-ink-soft"
          >
            Comece agora
          </button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-accent to-[#ff8f5c]">
        <div className="absolute inset-0 grain opacity-30" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2 className="font-display text-3xl font-extrabold leading-[1.2] text-white sm:text-5xl text-balance">
            Pronto para o seu cardápio online?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/90">
            Responda algumas perguntas sobre o negócio e receba uma proposta sob medida.
          </p>
          <button
            type="button"
            onClick={() => openQuote('final-quero')}
            className="mt-8 inline-flex h-13 items-center justify-center rounded-full bg-ink px-10 py-3.5 font-bold text-lime transition hover:scale-[1.02]"
          >
            Quero o meu
          </button>
        </div>
      </section>

      <footer className="border-t border-ink/5 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="font-display font-bold text-ink">
            Cardápio<span className="text-accent"> Livre</span>
          </p>
          <p className="text-sm text-ink/45">
            Cardápios digitais para foodservice · © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  )
}
