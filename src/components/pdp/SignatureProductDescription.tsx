import { useMemo } from 'react'

import { usePDP } from 'src/sdk/overrides/PageProvider'

import styles from './signature-pdp.module.scss'

type SignatureProductDescriptionProps = {
  descriptionData?: Array<{
    title: string
    content: string
  }>
}

function normalizeValue(value: unknown) {
  if (Array.isArray(value)) {
    return value.filter(Boolean).join(', ')
  }

  if (typeof value === 'string') {
    return value
  }

  return ''
}

function SignatureProductDescription({
  descriptionData = [],
}: SignatureProductDescriptionProps) {
  const context = usePDP()
  const product = context?.data?.product

  const description =
    descriptionData[0]?.content || product?.description || '<p>Sin descripción.</p>'

  const specs = useMemo(() => {
    const baseSpecs = [
      { name: 'Marca', value: product?.brand?.name ?? '' },
      { name: 'SKU', value: product?.sku ?? '' },
      { name: 'GTIN', value: product?.gtin ?? '' },
    ]

    const additionalSpecs = (product?.additionalProperty ?? [])
      .map((item: any) => ({
        name: item?.name ?? '',
        value: normalizeValue(item?.valueReference || item?.value),
      }))
      .filter((item: { name: string; value: string }) => item.name && item.value)

    return [...baseSpecs, ...additionalSpecs].filter(
      (item, index, current) =>
        item.value &&
        current.findIndex((entry) => entry.name === item.name) === index
    )
  }, [product])

  return (
    <section className={styles.detailsGrid} data-fs-product-description>
      <article className={styles.detailsBlock}>
        <h2 className={styles.detailsTitle}>Detalles del producto</h2>
        <div
          className={styles.detailsBody}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </article>

      <aside className={styles.detailsBlock}>
        <h2 className={styles.detailsTitle}>Especificaciones</h2>
        <div className={styles.specList}>
          {specs.length > 0 ? (
            specs.map((spec) => (
              <div key={`${spec.name}-${spec.value}`} className={styles.specRow}>
                <span className={styles.specName}>{spec.name}</span>
                <span className={styles.specValue}>{spec.value}</span>
              </div>
            ))
          ) : (
            <div className={styles.specRow}>
              <span className={styles.specName}>Información</span>
              <span className={styles.specValue}>
                Este producto todavía no tiene especificaciones cargadas.
              </span>
            </div>
          )}
        </div>
      </aside>
    </section>
  )
}

export default SignatureProductDescription
