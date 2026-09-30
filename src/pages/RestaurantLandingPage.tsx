import { LandingPage, type LandingPageContent } from './LandingPage'

const restaurantPlanFeatures: NonNullable<LandingPageContent['planFeatures']> = [
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
  { label: 'Frente de caixa (PDV)', isNew: true },
  { label: 'Gestão de pedidos', isNew: true },
  { label: 'Relatórios integrados', isNew: true },
  { label: 'Dashboard de pedidos' },
  { label: 'Sistema de cupons de desconto', isNew: true },
  { label: 'Fidelização de clientes', isNew: true },
  { label: 'Suporte direto pelo WhatsApp' },
  { label: 'Setup em até 10 dias' },
  { label: 'Sem taxa de marketplace' },
  { label: 'Planos flexíveis' },
]

const restaurantContent: LandingPageContent = {
  heroTitle: 'Simplifica Food',
  heroSubtitle:
    'Tornamos o seu negócio mais profissional com um cardápio digital, sistema de gestão e sem taxas de marketplace.',
  planIntroTitle:
    'Você sente que não tem o controle real do que acontece no seu restaurante? Isso está custando vendas.',
  planIntroBody: [
    'Você sabia que um sistema integrado evita pedidos esquecidos e falhas no estoque que frustram seus clientes todos os dias?',
    'Desenvolvemos uma plataforma completa para você gerenciar vendas, mesas e caixa como os grandes restaurantes do mercado, sem precisar de uma equipe de TI.',
    'Nós entregamos a casa arrumada e o sistema rodando em até 10 dias.',
  ],
  planFeatures: restaurantPlanFeatures,
  sourcePrefix: 'restaurante-',
}

export function RestaurantLandingPage() {
  return <LandingPage content={restaurantContent} />
}
