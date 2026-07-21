import { useEffect } from 'react'

type ImageLightboxProps = {
  src: string
  alt: string
  onClose: () => void
}

/** Full-screen product photo expand. Escape / backdrop / button close. */
export function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        aria-label="Fechar imagem"
        onClick={onClose}
      />
      <div className="relative z-10 flex max-h-full w-full max-w-lg flex-col items-center animate-rise">
        <button
          type="button"
          onClick={onClose}
          className="mb-3 self-end flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-lg font-bold text-white backdrop-blur hover:bg-white/25"
          aria-label="Fechar"
        >
          ✕
        </button>
        <img
          src={src}
          alt={alt}
          className="max-h-[min(80vh,640px)] w-full rounded-2xl object-cover shadow-2xl"
        />
        <p className="mt-3 text-center text-sm font-semibold text-white/90">{alt}</p>
      </div>
    </div>
  )
}
