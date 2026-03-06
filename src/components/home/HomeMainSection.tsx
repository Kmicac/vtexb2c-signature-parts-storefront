import BrandTiles from './BrandTiles'
import CategoryGrid from './CategoryGrid'
import FeaturedProducts from './FeaturedProducts'
import HeroCarousel from './HeroCarousel'
import NewArrivals from './NewArrivals'
import PromoBanner from './PromoBanner'
import { homeMock } from '../../data/homeMock'
import styles from './home.module.scss'

function HomeMainSection() {
  return (
    <main className={styles.surface}>
      <HeroCarousel slides={homeMock.hero.slides} logos={homeMock.logos} />
      <BrandTiles title={homeMock.brands.title} items={homeMock.brands.items} />
      <CategoryGrid title={homeMock.categories.title} items={homeMock.categories.items} />
      <FeaturedProducts
        title={homeMock.featuredProducts.title}
        items={homeMock.featuredProducts.items}
      />
      <NewArrivals
        title={homeMock.newArrivals.title}
        subtitle={homeMock.newArrivals.subtitle}
        items={homeMock.newArrivals.items}
      />
      <PromoBanner
        title={homeMock.promoBanner.title}
        ctaLabel={homeMock.promoBanner.ctaLabel}
        ctaHref={homeMock.promoBanner.ctaHref}
        image={homeMock.promoBanner.image}
      />
    </main>
  )
}

export default HomeMainSection
