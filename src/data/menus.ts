import type { MenuConfig } from '../types'
import gelateriaAuroraLogo from '../assets/gelateria-aurora-wordmark.svg'
import burguerSportIcon from '../assets/burguer-sport-icon.svg'
import burguerSportWordmark from '../assets/burguer-sport-wordmark.svg'
import villaBurgerMasterLogo from '../assets/villa-burger/villa-burger-master-logo.svg'
import cafeNuvemIcon from '../assets/cafe-nuvem-icon.svg'
import cafeNuvemWordmark from '../assets/cafe-nuvem-wordmark.svg'
import imgCasquinha from '../assets/gelateria-aurora/casquinha-classica.jpg'
import imgSundae from '../assets/gelateria-aurora/sundae-chocolate.jpg'
import imgMilkshake from '../assets/gelateria-aurora/milkshake-morango.jpg'
import imgAcai from '../assets/gelateria-aurora/acai-bowl-500ml.jpg'
import imgPicole from '../assets/gelateria-aurora/picole-gourmet.jpg'
import imgBananaSplit from '../assets/gelateria-aurora/banana-split.jpg'
import imgSmashDuplo from '../assets/burguer-sport/smash-duplo.jpg'
import imgChickenCrispy from '../assets/burguer-sport/chicken-crispy.jpg'
import imgBatataRustica from '../assets/burguer-sport/batata-rustica.jpg'
import imgOnionRings from '../assets/burguer-sport/onion-rings.jpg'
import imgRefrigeranteLata from '../assets/burguer-sport/refrigerante-lata.jpg'
import imgMilkshakeOreo from '../assets/burguer-sport/milkshake-oreo.jpg'
import imgEspressoDuplo from '../assets/cafe-nuvem/espresso-duplo.jpg'
import imgCappuccinoCremoso from '../assets/cafe-nuvem/cappuccino-cremoso.jpg'
import imgCroissantAmendoas from '../assets/cafe-nuvem/croissant-amendoas.jpg'
import imgPaoNaChapa from '../assets/cafe-nuvem/pao-na-chapa.jpg'
import imgBowlAcaiGranola from '../assets/cafe-nuvem/bowl-acai-granola.jpg'
import imgChaGeladoHibisco from '../assets/cafe-nuvem/cha-gelado-hibisco.jpg'

export const menus: MenuConfig[] = [
  {
    slug: 'sorveteria',
    clientName: 'Gelateria Aurora',
    tagline: 'Sabores artesanais feitos na hora',
    area: 'Sorveteria',
    city: 'Campinas/SP',
    theme: {
      primary: '#5B2C6F',
      secondary: '#F8E8FF',
      accent: '#FF6BA8',
      bg: '#FDF7FF',
    },
    coverEmoji: '🍦',
    logoWordmarkSrc: gelateriaAuroraLogo,
    items: [
      {
        id: 'sorv-1',
        name: 'Casquinha Clássica',
        description: 'Dois sabores à escolha com casquinha crocante',
        price: 12,
        category: 'Casquinhas',
        emoji: '🍦',
        imageSrc: imgCasquinha,
      },
      {
        id: 'sorv-2',
        name: 'Sundae de Chocolate',
        description: 'Sorvete de creme, calda belga e granulado',
        price: 18,
        category: 'Sundaes',
        emoji: '🍫',
        imageSrc: imgSundae,
      },
      {
        id: 'sorv-3',
        name: 'Milkshake Morango',
        description: '400ml cremoso com calda natural de morango',
        price: 22,
        category: 'Bebidas',
        emoji: '🥤',
        imageSrc: imgMilkshake,
      },
      {
        id: 'sorv-4',
        name: 'Açaí Bowl 500ml',
        description: 'Açaí puro com granola, banana e leite condensado',
        price: 28,
        category: 'Açaí',
        emoji: '🫐',
        imageSrc: imgAcai,
      },
      {
        id: 'sorv-5',
        name: 'Picolé Gourmet',
        description: 'Frutas da estação, sem corante artificial',
        price: 9,
        category: 'Picolés',
        emoji: '🍡',
        imageSrc: imgPicole,
      },
      {
        id: 'sorv-6',
        name: 'Banana Split',
        description: 'Banana, três bolas, chantilly e calda',
        price: 26,
        category: 'Sundaes',
        emoji: '🍌',
        imageSrc: imgBananaSplit,
      },
    ],
  },
  {
    slug: 'lanchonete',
    clientName: 'Burguer Sport',
    tagline: 'Smash burgers e batata crocante',
    area: 'Lanchonete',
    city: 'Sorocaba/SP',
    theme: {
      primary: '#1C1917',
      secondary: '#FEF3C7',
      accent: '#F97316',
      bg: '#FFFBEB',
    },
    coverEmoji: '🍔',
    logoIconSrc: burguerSportIcon,
    logoWordmarkSrc: burguerSportWordmark,
    items: [
      {
        id: 'lan-1',
        name: 'Smash Duplo',
        description: 'Dois blends 90g, queijo cheddar e molho da casa',
        price: 32,
        category: 'Burgers',
        emoji: '🍔',
        imageSrc: imgSmashDuplo,
      },
      {
        id: 'lan-2',
        name: 'Chicken Crispy',
        description: 'Frango empanado, alface, tomate e maionese especial',
        price: 28,
        category: 'Burgers',
        emoji: '🍗',
        imageSrc: imgChickenCrispy,
      },
      {
        id: 'lan-3',
        name: 'Batata Rustica',
        description: 'Porção 400g com alecrim e páprica',
        price: 18,
        category: 'Porções',
        emoji: '🍟',
        imageSrc: imgBatataRustica,
      },
      {
        id: 'lan-4',
        name: 'Onion Rings',
        description: 'Anéis crocantes com molho barbecue',
        price: 16,
        category: 'Porções',
        emoji: '🧅',
        imageSrc: imgOnionRings,
      },
      {
        id: 'lan-5',
        name: 'Refrigerante Lata',
        description: 'Coca, Guaraná ou Sprite 350ml',
        price: 7,
        category: 'Bebidas',
        emoji: '🥫',
        imageSrc: imgRefrigeranteLata,
      },
      {
        id: 'lan-6',
        name: 'Milkshake Oreo',
        description: 'Shake cremoso com biscoito e calda de chocolate',
        price: 20,
        category: 'Bebidas',
        emoji: '🥛',
        imageSrc: imgMilkshakeOreo,
      },
    ],
  },
  {
    slug: 'villa-burger-master',
    clientName: 'Villa Burger Master',
    tagline: 'Burgers no ponto, sabor de verdade',
    area: 'Lanchonete',
    city: 'São Paulo/SP',
    theme: {
      primary: '#DDC837',
      secondary: '#F5E6A3',
      accent: '#C89829',
      bg: '#212024',
    },
    coverEmoji: '🍔',
    logoIconSrc: villaBurgerMasterLogo,
    logoWordmarkSrc: villaBurgerMasterLogo,
    items: [
      {
        id: 'vbm-1',
        name: 'Smash Duplo',
        description: 'Dois blends 90g, queijo cheddar e molho da casa',
        price: 32,
        category: 'Burgers',
        emoji: '🍔',
        imageSrc: imgSmashDuplo,
      },
      {
        id: 'vbm-2',
        name: 'Chicken Crispy',
        description: 'Frango empanado, alface, tomate e maionese especial',
        price: 28,
        category: 'Burgers',
        emoji: '🍗',
        imageSrc: imgChickenCrispy,
      },
      {
        id: 'vbm-3',
        name: 'Batata Rustica',
        description: 'Porção 400g com alecrim e páprica',
        price: 18,
        category: 'Porções',
        emoji: '🍟',
        imageSrc: imgBatataRustica,
      },
      {
        id: 'vbm-4',
        name: 'Onion Rings',
        description: 'Anéis crocantes com molho barbecue',
        price: 16,
        category: 'Porções',
        emoji: '🧅',
        imageSrc: imgOnionRings,
      },
      {
        id: 'vbm-5',
        name: 'Refrigerante Lata',
        description: 'Coca, Guaraná ou Sprite 350ml',
        price: 7,
        category: 'Bebidas',
        emoji: '🥫',
        imageSrc: imgRefrigeranteLata,
      },
      {
        id: 'vbm-6',
        name: 'Milkshake Oreo',
        description: 'Shake cremoso com biscoito e calda de chocolate',
        price: 20,
        category: 'Bebidas',
        emoji: '🥛',
        imageSrc: imgMilkshakeOreo,
      },
    ],
  },
  {
    slug: 'cafeteria',
    clientName: 'Café Nuvem',
    tagline: 'Grãos especiais e brunch leve',
    area: 'Cafeteria',
    city: 'Curitiba/PR',
    theme: {
      primary: '#3D2914',
      secondary: '#E8D5C4',
      accent: '#C4A484',
      bg: '#FAF6F1',
    },
    coverEmoji: '☕',
    logoIconSrc: cafeNuvemIcon,
    logoWordmarkSrc: cafeNuvemWordmark,
    items: [
      {
        id: 'caf-1',
        name: 'Espresso Duplo',
        description: 'Blend da casa, extração 28s',
        price: 10,
        category: 'Cafés',
        emoji: '☕',
        imageSrc: imgEspressoDuplo,
      },
      {
        id: 'caf-2',
        name: 'Cappuccino Cremoso',
        description: 'Leite vaporizado e espuma aveludada',
        price: 14,
        category: 'Cafés',
        emoji: '🧋',
        imageSrc: imgCappuccinoCremoso,
      },
      {
        id: 'caf-3',
        name: 'Croissant Amêndoas',
        description: 'Massa folhada com creme de amêndoas',
        price: 16,
        category: 'Padaria',
        emoji: '🥐',
        imageSrc: imgCroissantAmendoas,
      },
      {
        id: 'caf-4',
        name: 'Pão na Chapa',
        description: 'Francês na manteiga com queijo minas',
        price: 12,
        category: 'Padaria',
        emoji: '🍞',
        imageSrc: imgPaoNaChapa,
      },
      {
        id: 'caf-5',
        name: 'Bowl Açaí & Granola',
        description: 'Açaí, banana, mel e granola artesanal',
        price: 24,
        category: 'Brunch',
        emoji: '🥣',
        imageSrc: imgBowlAcaiGranola,
      },
      {
        id: 'caf-6',
        name: 'Chá Gelado Hibisco',
        description: 'Infusão gelada com limão siciliano',
        price: 11,
        category: 'Bebidas',
        emoji: '🍵',
        imageSrc: imgChaGeladoHibisco,
      },
    ],
  },
]

const HIDDEN_FROM_HOME = new Set(['villa-burger-master', 'brenda-foods'])

/** Old slug kept so shared links still resolve. */
const SLUG_ALIASES: Record<string, string> = {
  'brenda-foods': 'villa-burger-master',
}

export function getMenuBySlug(slug: string): MenuConfig | undefined {
  const resolved = SLUG_ALIASES[slug] ?? slug
  return menus.find((m) => m.slug === resolved)
}

/** Menus listed on the marketing LP (hidden demos stay reachable by slug). */
export const homeMenus: MenuConfig[] = menus.filter((m) => !HIDDEN_FROM_HOME.has(m.slug))

export function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
