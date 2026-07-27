import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import type { PortfolioPhoto } from '../data/portfolioPhotos'

interface PortfolioCarouselProps {
  photos: PortfolioPhoto[]
}

const AUTOPLAY_MS = 3000
const MOBILE_MQ = '(max-width: 639px)'

function wrapOffset(diff: number, length: number): number {
  if (length === 0) return 0
  let d = ((diff % length) + length) % length
  if (d > length / 2) d -= length
  return d
}

function slideStyle(offset: number, isMobile: boolean): CSSProperties {
  const hidden: CSSProperties = {
    opacity: 0,
    transform: `translateX(${offset * 55}%) rotateY(${offset * -42}deg) scale(0.7)`,
    zIndex: 0,
    pointerEvents: 'none',
  }

  // Mobile: only current (0) + previous (-1)
  if (isMobile) {
    if (offset === 0) {
      return {
        opacity: 1,
        transform: 'translateX(14%) rotateY(0deg) scale(1)',
        zIndex: 20,
      }
    }
    if (offset === -1) {
      return {
        opacity: 0.7,
        transform: 'translateX(-36%) rotateY(42deg) scale(0.82)',
        zIndex: 10,
      }
    }
    return hidden
  }

  const abs = Math.abs(offset)
  if (abs >= 2) return hidden

  if (offset === 0) {
    return {
      opacity: 1,
      transform: 'translateX(0) rotateY(0deg) scale(1)',
      zIndex: 20,
    }
  }

  const dir = offset > 0 ? 1 : -1
  return {
    opacity: 0.7,
    transform: `translateX(${dir * 58}%) rotateY(${dir * -42}deg) scale(0.82)`,
    zIndex: 10,
  }
}

function isSlideVisible(offset: number, isMobile: boolean): boolean {
  if (isMobile) return offset === 0 || offset === -1
  return Math.abs(offset) < 2
}

export function PortfolioCarousel({ photos }: PortfolioCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const motionMq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mobileMq = window.matchMedia(MOBILE_MQ)
    const syncMotion = () => setReduceMotion(motionMq.matches)
    const syncMobile = () => setIsMobile(mobileMq.matches)
    syncMotion()
    syncMobile()
    motionMq.addEventListener('change', syncMotion)
    mobileMq.addEventListener('change', syncMobile)
    return () => {
      motionMq.removeEventListener('change', syncMotion)
      mobileMq.removeEventListener('change', syncMobile)
    }
  }, [])

  useEffect(() => {
    if (photos.length <= 1 || paused || reduceMotion) return
    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % photos.length)
    }, AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [photos.length, paused, reduceMotion])

  if (photos.length === 0) return null

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false)
        }
      }}
    >
      <div
        role="region"
        aria-roledescription="carrossel"
        aria-label="Portfólio de fotos profissionais de produtos"
        className="relative mx-auto h-[400px] w-full max-w-5xl overflow-x-clip sm:h-[384px] md:h-[432px]"
        style={{ perspective: '1200px' }}
      >
        <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
          {photos.map((photo, index) => {
            const offset = wrapOffset(index - activeIndex, photos.length)
            const isActive = offset === 0
            const visible = isSlideVisible(offset, isMobile)
            const style = slideStyle(offset, isMobile)

            return (
              <figure
                key={`${photo.src}-${index}`}
                className={[
                  'absolute left-1/2 top-1/2 aspect-[4/5] -translate-x-1/2 -translate-y-1/2',
                  'h-auto w-[78%] max-w-[300px]',
                  'sm:h-[92%] sm:w-auto sm:max-w-[min(48%,384px)] md:max-w-[432px]',
                  reduceMotion ? '' : 'transition-[transform,opacity] duration-500 ease-out',
                  visible ? '' : 'pointer-events-none',
                ]
                  .filter(Boolean)
                  .join(' ')}
                style={style}
                aria-hidden={!isActive}
                {...(isActive ? { 'aria-live': 'polite' as const } : {})}
              >
                <div className="h-full overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-ink/5">
                  <img
                    src={photo.src}
                    alt={isActive ? photo.alt : ''}
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                </div>
              </figure>
            )
          })}
        </div>
      </div>
    </div>
  )
}
