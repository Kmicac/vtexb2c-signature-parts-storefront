import type { SectionOverride } from 'src/typings/overrides'

const SECTION = 'CrossSellingShelf' as const

const override: SectionOverride = {
  section: SECTION,
  components: {
    __experimentalProductCard: {
      props: {
        bordered: false,
        showDiscountBadge: false,
      },
    },
  },
}

export { override }
