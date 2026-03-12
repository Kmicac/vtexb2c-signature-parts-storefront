import {
  FooterSection,
  HeaderSection,
  HomeMainSection,
  NewsletterSection,
  NullSection,
  TopbarSection,
} from './home'

const COMPONENTS = {
  Alert: TopbarSection,
  Navbar: HeaderSection,
  Hero: HomeMainSection,
  Newsletter: NewsletterSection,
  Footer: FooterSection,

  Incentives: NullSection,
  ProductShelf: NullSection,
  ProductTiles: NullSection,
  BannerText: NullSection,
  RegionBar: NullSection,
  CartSidebar: NullSection,
}

export default COMPONENTS
