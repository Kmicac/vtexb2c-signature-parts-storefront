import Image from 'next/image'

import type { CategoryItem } from '../../data/homeMock'

import styles from './home.module.scss'

type CategoryGridProps = {
  title: string
  items: CategoryItem[]
}

function CategoryGrid({ title, items }: CategoryGridProps) {
  return (
    <section className={styles.section} id="categorias">
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{title}</h2>
        </header>

        <div className={styles.categoryGrid}>
          {items.map((item) => (
            <a key={item.id} href={item.href} className={styles.categoryCard}>
              <Image
                src={item.image}
                alt={item.name}
                width={800}
                height={600}
                sizes="(max-width: 820px) 100vw, 25vw"
                className={styles.categoryImage}
              />
              <span className={styles.categoryName}>{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryGrid
