import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import Link from 'next/link'

import { formatArs, type ProductItem } from '../../data/homeMock'

import styles from './home.module.scss'

type ProductItemWithImage = ProductItem & {
  image: StaticImageData
}

type NewArrivalsProps = {
  title: string
  subtitle: string
  items: ProductItemWithImage[]
}

function NewArrivals({ title, subtitle, items }: NewArrivalsProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          <p className={styles.sectionSubtitle}>{subtitle}</p>
        </header>

        <div className={styles.arrivalsGrid}>
          {items.map((item) => (
            <article key={item.id} className={styles.productCard}>
              <Link href={item.href} aria-label={`Abrir ${item.name}`}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={900}
                  height={900}
                  sizes="(max-width: 820px) 100vw, 25vw"
                  className={styles.productImage}
                />
              </Link>
              <div className={styles.productBody}>
                <div className={styles.productMeta}>
                  <span
                    className={`${styles.pill} ${
                      item.badge === 'Oferta' ? styles.pillOffer : styles.pillNew
                    }`}
                  >
                    {item.badge}
                  </span>
                  <span className={styles.pill}>{item.tag}</span>
                </div>
                <h3 className={styles.productName}>
                  <Link href={item.href}>{item.name}</Link>
                </h3>
                <p className={styles.productPrice}>{formatArs(item.priceArs)}</p>
                <p className={styles.productStock}>Stock: {item.stock} unidades</p>
                <Link className={styles.productCta} href={item.href}>
                  Ver producto
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewArrivals
