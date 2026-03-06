import Image from 'next/image'

import { formatArs, type ProductItem } from '../../data/homeMock'

import styles from './home.module.scss'

type FeaturedProductsProps = {
  title: string
  items: ProductItem[]
}

function FeaturedProducts({ title, items }: FeaturedProductsProps) {
  return (
    <section className={styles.section} id="ofertas">
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{title}</h2>
        </header>

        <div className={styles.productsGrid}>
          {items.map((item) => (
            <article key={item.id} className={styles.productCard}>
              <Image
                src={item.image}
                alt={item.name}
                width={900}
                height={900}
                sizes="(max-width: 820px) 100vw, (max-width: 1080px) 33vw, 20vw"
                className={styles.productImage}
              />
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

                <h3 className={styles.productName}>{item.name}</h3>
                <p className={styles.productPrice}>{formatArs(item.priceArs)}</p>
                <p className={styles.productStock}>Stock: {item.stock} unidades</p>
                <a className={styles.productCta} href={item.href}>
                  Ver producto
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
