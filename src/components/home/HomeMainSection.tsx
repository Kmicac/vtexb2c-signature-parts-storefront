import Head from 'next/head'

import BrandTiles from './BrandTiles'
import CategoryGrid from './CategoryGrid'
import FeaturedProducts from './FeaturedProducts'
import HeroCarousel from './HeroCarousel'
import NewArrivals from './NewArrivals'
import PromoBanner from './PromoBanner'
import { homeAssets } from '../../assets/homeAssets'
import { homeMock } from '../../data/homeMock'
import styles from './home.module.scss'

const isDefined = <T,>(value: T | null): value is T => value !== null

function HomeMainSection() {
  const heroSlides = (homeMock.hero?.slides ?? [])
    .map((slide) => {
      const image =
        homeAssets.heroSlides[slide.id as keyof typeof homeAssets.heroSlides]

      return image ? { ...slide, image } : null
    })
    .filter(isDefined)

  const brandItems = (homeMock.brands?.items ?? [])
    .map((item) => {
      const assets = homeAssets.brands[item.id as keyof typeof homeAssets.brands]

      return assets ? { ...item, ...assets } : null
    })
    .filter(isDefined)

  const categoryItems = (homeMock.categories?.items ?? [])
    .map((item) => {
      const image =
        homeAssets.categories[item.id as keyof typeof homeAssets.categories]

      return image ? { ...item, image } : null
    })
    .filter(isDefined)

  const featuredItems = (homeMock.featuredProducts?.items ?? [])
    .map((item) => {
      const image =
        homeAssets.products[item.id as keyof typeof homeAssets.products]

      return image ? { ...item, image } : null
    })
    .filter(isDefined)

  const newArrivalItems = (homeMock.newArrivals?.items ?? [])
    .map((item) => {
      const image =
        homeAssets.products[item.id as keyof typeof homeAssets.products]

      return image ? { ...item, image } : null
    })
    .filter(isDefined)

  return (
    <>
      <Head>
        <title>Signature Parts</title>
        <meta
          name="description"
          content="Repuestos premium para Mercedes-Benz y BMW"
        />
      </Head>

      <main className={styles.surface}>
        <HeroCarousel slides={heroSlides} logos={homeAssets.logos} />
        <BrandTiles title={homeMock.brands.title} items={brandItems} />
        <CategoryGrid title={homeMock.categories.title} items={categoryItems} />
        <FeaturedProducts
          title={homeMock.featuredProducts.title}
          items={featuredItems}
        />
        <NewArrivals
          title={homeMock.newArrivals.title}
          subtitle={homeMock.newArrivals.subtitle}
          items={newArrivalItems}
        />
        <PromoBanner
          title={homeMock.promoBanner.title}
          ctaLabel={homeMock.promoBanner.ctaLabel}
          ctaHref={homeMock.promoBanner.ctaHref}
          image={homeAssets.promoBanner}
        />
      </main>
    </>
  )
}

export default HomeMainSection
