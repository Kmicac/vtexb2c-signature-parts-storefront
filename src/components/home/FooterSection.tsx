import Footer from './Footer'
import { homeAssets } from '../../assets/homeAssets'
import { homeMock } from '../../data/homeMock'

function FooterSection() {
  return (
    <Footer
      brandName={homeMock.brand.name}
      sections={homeMock.footer.sections}
      disclaimer={homeMock.footer.disclaimer}
      logos={homeAssets.logos}
    />
  )
}

export default FooterSection
