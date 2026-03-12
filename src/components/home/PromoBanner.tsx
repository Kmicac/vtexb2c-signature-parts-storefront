import Image from 'next/image'
import type { StaticImageData } from 'next/image'

import styles from './home.module.scss'

type PromoBannerProps = {
  title: string
  ctaLabel: string
  ctaHref: string
  image: StaticImageData
}

function PromoBanner({ title, ctaLabel, ctaHref, image }: PromoBannerProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.promoBanner}>
          <div className={styles.promoMedia}>
            <Image
              src={image}
              alt={title}
              fill
              sizes="100vw"
              className={styles.mediaCover}
            />
          </div>
          <div className={styles.promoContent}>
            <div className={styles.reveal}>
              <h2 className={styles.promoTitle}>{title}</h2>
              <a className={styles.primaryButton} href={ctaHref}>
                {ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromoBanner
