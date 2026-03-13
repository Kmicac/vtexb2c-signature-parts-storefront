import { useEffect, useState } from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'

import type { HeroSlide } from '../../data/homeMock'

import styles from './home.module.scss'

type HeroSlideWithImage = HeroSlide & {
  image: StaticImageData
}

type HeroCarouselProps = {
  slides: HeroSlideWithImage[]
  logos: {
    mercedes: StaticImageData | string
    bmw: StaticImageData | string
  }
}

function HeroCarousel({ slides, logos }: HeroCarouselProps) {
  const hasSlides = slides.length > 0
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) {
      return
    }

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 5200)

    return () => {
      window.clearInterval(interval)
    }
  }, [slides.length])

  if (!hasSlides) {
    return null
  }

  return (
    <section className={`${styles.section} ${styles.hero}`} id="catalogo">
      <div className={styles.container}>
        <div className={styles.heroShell}>
          {slides.map((slide, index) => {
            const isActive = index === activeSlide

            return (
              <article
                key={slide.id}
                className={`${styles.heroSlide} ${
                  isActive ? styles.heroSlideActive : ''
                }`}
                aria-hidden={!isActive}
              >
                <div className={styles.heroMedia}>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className={styles.mediaCover}
                  />
                </div>
                <div className={styles.heroContent}>
                  <div className={styles.logoStrip}>
                    {logos.mercedes ? (
                      <span className={styles.brandBadge}>
                        <Image
                          src={logos.mercedes}
                          alt="Logo Mercedes-Benz"
                          width={24}
                          height={24}
                        />
                      </span>
                    ) : null}
                    {logos.bmw ? (
                      <span className={styles.brandBadge}>
                        <Image src={logos.bmw} alt="Logo BMW" width={24} height={24} />
                      </span>
                    ) : null}
                  </div>
                  <h2 className={styles.heroTitle}>{slide.title}</h2>
                  <a className={styles.primaryButton} href={slide.ctaHref}>
                    {slide.ctaLabel}
                  </a>
                </div>
              </article>
            )
          })}

          <div className={styles.heroControls} aria-label="Controles de slider">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Ir al slide ${index + 1}`}
                className={`${styles.heroDot} ${
                  index === activeSlide ? styles.heroDotActive : ''
                }`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroCarousel
