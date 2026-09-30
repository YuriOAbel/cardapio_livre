import { Link } from 'react-router-dom'
import { MenuBrandMark } from '../components/MenuBrandMark'
import { PortfolioCarousel } from '../components/PortfolioCarousel'
import { QuoteForm } from '../components/QuoteForm'
import { homeMenus } from '../data/menus'
import { portfolioPhotos } from '../data/portfolioPhotos'
import avatar01 from '../assets/avatar/avatar-01.jpg'
import avatar02 from '../assets/avatar/avatar-2.png'
import avatar03 from '../assets/avatar/avatar-3.png'
import logoSrc from '../assets/logo_escrito.png'
import { CONTACT, MAILTO_URL, WHATSAPP_URL } from '../lib/contact'
import { useQuote } from '../context/QuoteContext'

const BRAND_NAME = 'Simplifica Food'

const testimonials = [
  {
    name: 'Marina Santos',
    business: 'Sabor da Vila Lanches',
    avatarSrc: avatar02,
    result: '+38% nos pedidos no 1º mês',
    message: `Eu precisava organizar pedidos no WhatsApp sem confusão. Com o ${BRAND_NAME}, meu atendimento ficou rápido e os clientes compram com mais segurança.`,
  },
  {
    name: 'Rafael Costa',
    business: 'Café Estação 27',
    avatarSrc: avatar01,
    result: 'Zero pedido perdido no balcão',
    message:
      'O cardápio digital facilitou muito rotina da equipe. Agora cliente escolhe com calma e chega no caixa já decidido, sem fila travando atendimento.',
  },
  {
    name: 'Aline Lima',
    business: 'Doce Brisa Açaí',
    avatarSrc: avatar03,
    result: 'Aumento de 52% no faturamento',
    message:
      'Indico para quem quer aumentar vendas sem depender de marketplace. O link ficou lindo, fácil de usar e melhorou muito percepção do meu negócio.',
  },
]

type PlanFeature = { label: string; isNew?: boolean }

const defaultPlanFeatures: PlanFeature[] = [
  { label: 'Criação de logotipo profissional' },
  { label: 'Identidade visual completa' },
  { label: 'Fotos profissionais dos produtos' },
  { label: 'Edição e tratamento das fotos' },
  { label: 'Cardápio digital responsivo' },
  { label: 'Cardápio via QR Code' },
  { label: 'Link com domínio próprio' },
  { label: 'Pedidos organizados no WhatsApp' },
  { label: 'Sistema de delivery online' },
  { label: 'Pagamento online integrado' },
  { label: 'Dashboard de pedidos' },
  { label: 'Sistema de cupons de desconto', isNew: true },
  { label: 'Fidelização de clientes', isNew: true },
  { label: 'Suporte direto pelo WhatsApp' },
  { label: 'Setup em até 10 dias' },
  { label: 'Sem taxa de marketplace' },
  { label: 'Planos flexíveis' },
]

export interface LandingPageContent {
  heroTitle: string
  heroTitleClassName?: string
  heroSubtitle: string
  planIntroTitle: string
  planIntroBody: string[]
  planFeatures?: PlanFeature[]
  sourcePrefix?: string
}

const defaultContent: LandingPageContent = {
  heroTitle: BRAND_NAME,
  heroSubtitle:
    'Tornamos o seu negócio mais profissional com um cardápio digital, sistema de gestão e sem taxas de marketplace.',
  planIntroTitle: 'Seu delivery parece amador? Isso está custando suas vendas.',
  planIntroBody: [
    'Você sabia que a aparência do seu cardápio e a facilidade de pagamento podem aumentar em até 63% o volume dos seus pedidos?',
    'Nós criamos a solução definitiva para profissionalizar o seu negócio de alimentação, sem você precisar contratar vários profissionais diferentes.',
    'Nós entregamos a casa arrumada e o sistema rodando em até 10 dias.',
  ],
}

interface LandingPageProps {
  content?: LandingPageContent
}

export function LandingPage({ content }: LandingPageProps) {
  const { openQuote } = useQuote()
  const {
    heroTitle,
    heroTitleClassName,
    heroSubtitle,
    planIntroTitle,
    planIntroBody,
    planFeatures = defaultPlanFeatures,
    sourcePrefix = '',
  } = { ...defaultContent, ...content }

  const brandMark = <img src={logoSrc} alt={BRAND_NAME} className="h-9 w-auto sm:h-11" />

  const src = (id: string) => `${sourcePrefix}${id}`

  const plan = {
    name: 'Completo',
    description:
      'A casa arrumada e o sistema rodando: visual, tecnologia e gestão em um só pacote.',
    features: planFeatures,
    ctaSource: src('plano-completo'),
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-ink/5 bg-mist/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
          <a href="#topo" className="font-display text-lg font-extrabold text-ink sm:text-xl">
            {brandMark}
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-ink/70 md:flex">
            <a href="#modelos" className="hover:text-ink transition">
              Modelos
            </a>
            <a href="#planos" className="hover:text-ink transition">
              Planos
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
            onClick={() => openQuote(src('nav-garantir'))}
            className="rounded-full bg-ink px-4 py-2 text-sm font-bold text-lime transition hover:bg-ink-soft sm:px-5"
          >
            Garantir o seu
          </button>
        </div>
      </header>

      {/* HERO — brand first, one composition */}
      <section id="topo" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink-soft to-ink-hero" />
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
            <p
              className={[
                'animate-rise font-display font-extrabold leading-[1.05] text-lime',
                heroTitleClassName ?? 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
              ].join(' ')}
            >
              {heroTitle}
            </p>
            <h1 className="animate-rise-delay mt-5 max-w-xl font-display text-2xl font-bold leading-[1.25] text-white text-balance sm:text-3xl md:text-4xl">
              {heroSubtitle}
            </h1>
            <p className="animate-rise-delay-2 mt-4 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
              Aumente as vendas do seu negócio em até 63% com cardápios digitais prontos para
              vender.
            </p>
            <div className="animate-rise-delay-2 mt-8 flex flex-wrap gap-3">
              <a
                href="#cotacao"
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.getElementById('cotacao-nome')
                  document.getElementById('cotacao')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                  el?.focus({ preventScroll: true })
                }}
                className="inline-flex h-12 items-center justify-center rounded-full bg-lime px-7 font-bold text-ink transition hover:bg-lime-deep"
              >
                Comece agora
              </a>
              <a
                href="#planos"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 font-semibold text-white transition hover:bg-white/10"
              >
                Ver planos
              </a>
            </div>
          </div>

          <div className="animate-rise-delay relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              id="cotacao"
              className="relative overflow-hidden rounded-[2rem] bg-white p-5 shadow-2xl sm:p-6"
            >
              <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">
                Fale com a nossa equipe
              </h2>
              <div className="mt-4">
                <QuoteForm source={src('hero-form')} variant="hero" />
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

      {/* Plans */}
      <section id="planos" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-extrabold leading-[1.12] text-ink sm:text-4xl md:text-5xl text-balance">
              {planIntroTitle}
            </h2>
            {planIntroBody.map((paragraph, index) => (
              <p
                key={paragraph}
                className={[
                  'text-base leading-relaxed text-ink/70 sm:text-lg',
                  index === 0 ? 'mt-5' : 'mt-3',
                ].join(' ')}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-lg">
            <article className="flex flex-col rounded-3xl border-2 border-accent bg-white p-6 shadow-[0_18px_50px_-28px_rgba(214,40,40,0.55)] sm:p-8">
              <h3 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60 sm:text-base">
                {plan.description}
              </p>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature.label} className="flex items-start gap-2.5">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-base font-bold text-lime-deep"
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span className="text-sm font-medium leading-snug text-ink/80 sm:text-[0.95rem]">
                      {feature.label}
                      {feature.isNew ? (
                        <span className="ml-2 inline-flex align-middle text-[0.65rem] font-extrabold uppercase tracking-wide text-accent">
                          Nova
                        </span>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => openQuote(plan.ctaSource)}
                className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-2xl bg-ink text-sm font-bold text-lime transition hover:bg-ink-soft sm:text-base"
              >
                Saiba Mais
              </button>
            </article>
          </div>
        </div>
      </section>

      {/* Social proof testimonials */}
      <section className="bg-mist/55">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex rounded-full border border-fog bg-mist px-4 py-1 text-xs font-bold uppercase tracking-wider text-accent">
              O que nossos clientes dizem
            </p>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.12] text-ink sm:text-5xl text-balance">
              Histórias reais de quem transformou o atendimento e viu{' '}
              <span className="text-lime-deep">resultados de verdade</span>
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="flex h-full flex-col rounded-3xl border border-ink/6 bg-white p-6 shadow-[0_14px_40px_-26px_rgba(61,10,10,0.45)]"
              >
                <p className="text-lg tracking-wide text-[#f5b301]">★★★★★</p>
                <p className="mt-4 text-[1.04rem] leading-relaxed text-ink/72">
                  "{testimonial.message}"
                </p>
                <span className="mt-5 inline-flex w-fit rounded-xl bg-mist px-3 py-1.5 text-sm font-semibold text-accent">
                  {testimonial.result}
                </span>
                <div className="mt-6 border-t border-ink/10 pt-5">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatarSrc}
                      alt={`Foto de ${testimonial.name}`}
                      className="h-11 w-11 shrink-0 rounded-full object-cover shadow-sm"
                      loading="lazy"
                    />
                    <span>
                      <span className="block font-bold text-ink">{testimonial.name}</span>
                      <span className="block text-sm text-ink/55">{testimonial.business}</span>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
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
          {homeMenus.map((m) => (
            <article
              key={m.slug}
              className="group flex flex-col overflow-hidden rounded-3xl border border-ink/8 bg-white transition hover:shadow-xl"
            >
              <div
                className="relative flex h-44 items-end overflow-hidden p-5"
                style={{ background: m.coverImageSrc ? undefined : m.theme.secondary }}
              >
                {m.coverImageSrc ? (
                  <>
                    <img
                      src={m.coverImageSrc}
                      alt=""
                      aria-hidden
                      className="pointer-events-none absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
                  </>
                ) : (
                  m.logoWordmarkSrc && (
                    <img
                      src={m.logoWordmarkSrc}
                      alt=""
                      aria-hidden
                      className="pointer-events-none absolute inset-0 h-full w-full object-contain p-8 pb-16 opacity-95 transition duration-300 group-hover:scale-105"
                    />
                  )
                )}
                <span className="absolute right-3 top-3 z-10 transition group-hover:scale-105">
                  <MenuBrandMark menu={m} variant="icon" size="md" onDark />
                </span>
                <div className={`relative z-10 ${m.coverImageSrc ? 'text-white' : 'text-ink'}`}>
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider ${m.coverImageSrc ? 'text-white/75' : 'text-ink/55'}`}
                  >
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
                    onClick={() => openQuote(src(`modelo-${m.slug}`))}
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

      {/* Professional photo portfolio */}
      <section id="portfolio" className="overflow-x-hidden border-y border-ink/5 bg-warm">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">
              Fotos profissionais
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold leading-[1.2] text-ink sm:text-4xl text-balance">
              O seu negócio está profissional?
            </h2>
            <p className="mt-3 text-ink/65 leading-relaxed">
              77% dos clientes escolhem seus pedidos observando as fotos. Aqui você recebe todo o
              portfólio profissional de produtos — aproveite!
            </p>
          </div>

          <div className="mt-[1.6rem] sm:mt-8">
            <PortfolioCarousel photos={portfolioPhotos} />
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => openQuote(src('portfolio-quero'))}
              className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-8 font-bold text-lime transition hover:bg-ink-soft"
            >
              Quero o meu
            </button>
          </div>
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
                t: 'Disponível para celular',
                d: 'Feito para o celular do cliente — onde o pedido realmente acontece.',
              },
              {
                t: 'Setup rápido',
                d: 'Usamos o perfil do seu negócio para cotar o modelo certo em até 1 hora.',
              },
              {
                t: 'Tudo 100% digital',
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
              onClick={() => openQuote(src('vantagens-garantir'))}
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
            onClick={() => openQuote(src('como-comece'))}
            className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-8 font-bold text-lime transition hover:bg-ink-soft"
          >
            Comece agora
          </button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-accent to-accent-soft">
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
            onClick={() => openQuote(src('final-quero'))}
            className="mt-8 inline-flex h-13 items-center justify-center rounded-full bg-ink px-10 py-3.5 font-bold text-lime transition hover:scale-[1.02]"
          >
            Quero o meu
          </button>
        </div>
      </section>

      <footer className="border-t border-ink/5 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2">
          <div>
            <p className="font-display text-lg font-bold text-ink">{brandMark}</p>
            <dl className="mt-4 space-y-2 text-sm text-ink/65">
              <div>
                <dt className="font-semibold text-ink/80">Empresa</dt>
                <dd>{CONTACT.company}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink/80">CNPJ</dt>
                <dd>{CONTACT.cnpj}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink/80">Endereço</dt>
                <dd>{CONTACT.address}</dd>
              </div>
            </dl>
            <p className="mt-4 text-xs text-ink/40">
              Cardápios digitais para foodservice · © {new Date().getFullYear()}
            </p>
          </div>

          <div>
            <p className="font-semibold text-ink">Entre em contato</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-bold text-white transition hover:bg-[#1ebe57]"
              >
                WhatsApp
              </a>
              <a
                href={MAILTO_URL}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-lime transition hover:bg-ink-soft"
              >
                E-mail
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
