import {
  useEffect,
  useMemo,
  type Dispatch,
  type ElementType,
  type SetStateAction,
} from 'react'

import { useBuyButton } from 'src/sdk/cart/useBuyButton'
import { usePriceFormatter } from 'src/sdk/product/useFormattedPrice'
import { useOverrideComponents } from 'src/sdk/overrides/OverrideContext'

import styles from './signature-pdp.module.scss'

type SignatureProductDetailsSettingsProps = {
  product: any
  buyButtonTitle?: string
  quantity: number
  setQuantity: Dispatch<SetStateAction<number>>
  notAvailableButtonTitle?: string
  taxesConfiguration?: {
    usePriceWithTaxes?: boolean
  }
}

function SignatureProductDetailsSettings({
  product,
  buyButtonTitle,
  quantity,
  setQuantity,
  notAvailableButtonTitle,
  taxesConfiguration,
}: SignatureProductDetailsSettingsProps) {
  const { BuyButton, Icon } = useOverrideComponents<'ProductDetails'>()
  const priceFormatter = usePriceFormatter()

  const {
    id,
    sku,
    gtin,
    unitMultiplier,
    name: variantName,
    brand,
    isVariantOf,
    image,
    additionalProperty,
    offers: {
      offers: [
        {
          availability,
          price,
          priceWithTaxes,
          listPrice,
          listPriceWithTaxes,
          seller,
        },
      ],
    },
  } = product

  const currentPriceBase = taxesConfiguration?.usePriceWithTaxes
    ? priceWithTaxes
    : price
  const listPriceBase = taxesConfiguration?.usePriceWithTaxes
    ? listPriceWithTaxes
    : listPrice
  const currentPrice = currentPriceBase
  const comparePrice = listPriceBase

  const outOfStock = useMemo(
    () => availability === 'https://schema.org/OutOfStock',
    [availability]
  )
  const BuyButtonComponent = BuyButton.Component as ElementType
  const IconComponent = Icon.Component as ElementType

  useEffect(() => {
    setQuantity(1)
  }, [id, setQuantity])

  const buyProps = useBuyButton({
    id,
    price,
    priceWithTaxes,
    listPrice,
    listPriceWithTaxes,
    seller,
    quantity,
    itemOffered: {
      sku,
      name: variantName,
      gtin,
      image,
      brand,
      isVariantOf,
      additionalProperty,
      unitMultiplier,
    },
  })

  const handleBuyClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    buyProps.onClick(event)
    setQuantity(1)
  }

  return (
    <div className={styles.purchasePanel}>
      <div className={styles.metaRow}>
        <span className={styles.brandPill}>{brand?.name ?? 'Repuesto premium'}</span>
        <span
          className={`${styles.stockPill} ${
            outOfStock ? styles.stockPillMuted : ''
          }`}
        >
          {outOfStock ? 'Sin stock' : 'Disponible'}
        </span>
      </div>

      <div className={styles.priceBlock}>
        <strong className={styles.currentPrice}>
          {priceFormatter(currentPrice)}
        </strong>
        {comparePrice > currentPrice && (
          <span className={styles.comparePrice}>
            {priceFormatter(comparePrice)}
          </span>
        )}
      </div>

      <p className={styles.microcopy}>
        Compatibilidad y disponibilidad sujetas al inventario real de VTEX.
      </p>

      <div className={styles.purchaseRow}>
        <div className={styles.quantityBox}>
          <button
            type="button"
            className={styles.qtyButton}
            onClick={() => setQuantity((value) => Math.max(1, value - 1))}
            disabled={quantity <= 1}
            aria-label="Disminuir cantidad"
          >
            -
          </button>
          <span className={styles.qtyValue}>{quantity}</span>
          <button
            type="button"
            className={styles.qtyButton}
            onClick={() => setQuantity((value) => value + 1)}
            aria-label="Aumentar cantidad"
          >
            +
          </button>
        </div>

        {outOfStock ? (
          <button
            type="button"
            className={`${styles.buyButton} ${styles.buyButtonDisabled}`}
            disabled
          >
            {notAvailableButtonTitle ?? 'Sin stock'}
          </button>
        ) : (
          <BuyButtonComponent
            className={styles.buyButton}
            icon={
              <IconComponent
                {...Icon.props}
                name="ShoppingCart"
                aria-label="Agregar al carrito"
              />
            }
            {...buyProps}
            onClick={handleBuyClick}
          >
            {buyButtonTitle ?? 'Agregar al carrito'}
          </BuyButtonComponent>
        )}
      </div>

      <div className={styles.summaryGrid}>
        <div className={styles.summaryCell}>
          <span className={styles.summaryLabel}>Marca</span>
          <span className={styles.summaryValue}>{brand?.name ?? '-'}</span>
        </div>
        <div className={styles.summaryCell}>
          <span className={styles.summaryLabel}>SKU</span>
          <span className={styles.summaryValue}>{sku ?? '-'}</span>
        </div>
        <div className={styles.summaryCell}>
          <span className={styles.summaryLabel}>Referencia</span>
          <span className={styles.summaryValue}>{gtin || 'No informada'}</span>
        </div>
      </div>
    </div>
  )
}

export default SignatureProductDetailsSettings
