import Image from 'next/image'
import type { StaticImageData } from 'next/image'

import type { BrandItem } from '../../data/homeMock'

import styles from './home.module.scss'

type BrandItemWithAssets = BrandItem & {
  logo: StaticImageData | string
  cover: StaticImageData
}

type BrandTilesProps = {
  title: string
  items: BrandItemWithAssets[]
}

function BrandTiles({ title, items }: BrandTilesProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{title}</h2>
        </header>

        <div className={styles.gridTwo}>
          {items.map((item) => (
            <a key={item.id} className={styles.brandCard} href={item.href}>
              <div className={styles.brandMedia}>
                <Image
                  src={item.cover}
                  alt={`Imagen ${item.name}`}
                  fill
                  sizes="(max-width: 820px) 100vw, 50vw"
                  className={styles.mediaCover}
                />
              </div>
              <span className={styles.brandCardContent}>
                <Image src={item.logo} alt={`Logo ${item.name}`} width={36} height={36} />
                <strong>{item.name}</strong>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandTiles
