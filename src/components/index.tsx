import {
  FooterSection,
  HeaderSection,
  HomeMainSection,
  NewsletterSection,
  NullSection,
  TopbarSection,
} from './home'
import SignatureCrossSellingShelf from './pdp/SignatureCrossSellingShelf'

const COMPONENTS = {
  Alert: TopbarSection,
  Navbar: HeaderSection,
  Hero: HomeMainSection,
  Newsletter: NewsletterSection,
  Footer: FooterSection,
  BannerNewsletter: NullSection,
  CrossSellingShelf: SignatureCrossSellingShelf,

  Incentives: NullSection,
  ProductShelf: NullSection,
  ProductTiles: NullSection,
  BannerText: NullSection,
  RegionBar: NullSection,
  CartSidebar: NullSection,
}

export default COMPONENTS
