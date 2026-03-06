import Footer from './Footer'
import { homeMock } from '../../data/homeMock'

function FooterSection() {
  return (
    <Footer
      brandName={homeMock.brand.name}
      sections={homeMock.footer.sections}
      disclaimer={homeMock.footer.disclaimer}
      logos={homeMock.logos}
    />
  )
}

export default FooterSection
