import type { SectionOverride } from 'src/typings/overrides'

import SignatureProductDescription from '../pdp/SignatureProductDescription'
import SignatureProductDetailsSettings from '../pdp/SignatureProductDetailsSettings'
import SignatureShippingSimulation from '../pdp/SignatureShippingSimulation'

const SECTION = 'ProductDetails' as const

const override: SectionOverride = {
  section: SECTION,
  className: 'signature-product-details',
  components: {
    __experimentalProductDetailsSettings: {
      Component: SignatureProductDetailsSettings,
    },
    __experimentalProductDescription: {
      Component: SignatureProductDescription,
    },
    __experimentalShippingSimulation: {
      Component: SignatureShippingSimulation,
    },
  },
}

export { override }
