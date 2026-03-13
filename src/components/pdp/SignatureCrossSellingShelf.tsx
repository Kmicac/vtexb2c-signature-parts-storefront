import type { ComponentProps } from 'react'

import CrossSellingShelfSection from 'src/components/sections/CrossSellingShelf'

type SignatureCrossSellingShelfProps = ComponentProps<
  typeof CrossSellingShelfSection
>

function SignatureCrossSellingShelf(props: SignatureCrossSellingShelfProps) {
  if (props.kind === 'buy') {
    return null
  }

  return <CrossSellingShelfSection {...props} />
}

export default SignatureCrossSellingShelf
