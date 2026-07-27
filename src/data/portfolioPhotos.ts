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
import imgCasquinha from '../assets/gelateria-aurora/casquinha-classica.jpg'
import imgSundae from '../assets/gelateria-aurora/sundae-chocolate.jpg'
import imgMilkshake from '../assets/gelateria-aurora/milkshake-morango.jpg'
import imgAcai from '../assets/gelateria-aurora/acai-bowl-500ml.jpg'
import imgPicole from '../assets/gelateria-aurora/picole-gourmet.jpg'
import imgBananaSplit from '../assets/gelateria-aurora/banana-split.jpg'

export type PortfolioPhoto = {
  src: string
  alt: string
}

/** Product photos interleaved across the three demo clients for visual variety. */
export const portfolioPhotos: PortfolioPhoto[] = [
  { src: imgSmashDuplo, alt: 'Smash duplo — Burguer Sport' },
  { src: imgEspressoDuplo, alt: 'Espresso duplo — Café Nuvem' },
  { src: imgCasquinha, alt: 'Casquinha clássica — Gelateria Aurora' },
  { src: imgChickenCrispy, alt: 'Chicken crispy — Burguer Sport' },
  { src: imgCappuccinoCremoso, alt: 'Cappuccino cremoso — Café Nuvem' },
  { src: imgSundae, alt: 'Sundae de chocolate — Gelateria Aurora' },
  { src: imgBatataRustica, alt: 'Batata rústica — Burguer Sport' },
  { src: imgCroissantAmendoas, alt: 'Croissant de amêndoas — Café Nuvem' },
  { src: imgMilkshake, alt: 'Milkshake de morango — Gelateria Aurora' },
  { src: imgOnionRings, alt: 'Onion rings — Burguer Sport' },
  { src: imgPaoNaChapa, alt: 'Pão na chapa — Café Nuvem' },
  { src: imgAcai, alt: 'Açaí bowl 500ml — Gelateria Aurora' },
  { src: imgRefrigeranteLata, alt: 'Refrigerante lata — Burguer Sport' },
  { src: imgBowlAcaiGranola, alt: 'Bowl açaí e granola — Café Nuvem' },
  { src: imgPicole, alt: 'Picolé gourmet — Gelateria Aurora' },
  { src: imgMilkshakeOreo, alt: 'Milkshake Oreo — Burguer Sport' },
  { src: imgChaGeladoHibisco, alt: 'Chá gelado de hibisco — Café Nuvem' },
  { src: imgBananaSplit, alt: 'Banana split — Gelateria Aurora' },
]
