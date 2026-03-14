import { useEffect, useMemo, useRef } from 'react'
import { createPortal } from 'react-dom'

import { useUI } from '@faststore/ui'
import { Image } from 'src/components/ui/Image'
import { cartStore, useCart } from 'src/sdk/cart'
import { useCheckoutButton } from 'src/sdk/cart/useCheckoutButton'
import { usePriceFormatter } from 'src/sdk/product/useFormattedPrice'
import Overlay from './Overlay'

import styles from './common.module.scss'

function MinicartSidebar() {
  const { cart: displayCart, closeCart } = useUI()
  const checkoutBtnProps = useCheckoutButton()
  const { items, gifts, isValidating, subTotal, total, totalItems } = useCart()
  const formatPrice = usePriceFormatter({ decimals: true })
  const panelRef = useRef<HTMLDivElement>(null)

  const isEmpty = useMemo(() => items.length === 0, [items.length])

  useEffect(() => {
    if (!displayCart) {
      return
    }

    const previousOverflow = document.body.style.overflow
    const previousFocus = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'

    const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
      'button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    )

    focusables?.[0]?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeCart()
        return
      }

      if (event.key !== 'Tab' || !focusables || focusables.length === 0) {
        return
      }

      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const current = document.activeElement

      if (event.shiftKey && current === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && current === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [closeCart, displayCart])

  if (!displayCart) {
    return null
  }

  if (typeof document === 'undefined') {
    return null
  }

  return createPortal(
    <div className={styles.sidebarRoot}>
      <Overlay onClick={closeCart} transparent />
      <aside
        aria-label="Carrito de compra"
        aria-modal="true"
        aria-busy={isValidating}
        className={styles.minicartPanel}
        onClick={(event) => event.stopPropagation()}
        ref={panelRef}
        role="dialog"
      >
        <header className={styles.minicartHeader}>
          <h2 className={styles.minicartTitle}>Carrito de compras</h2>
          <button
            aria-label="Cerrar carrito"
            className={styles.minicartClose}
            onClick={closeCart}
            type="button"
          >
            ×
          </button>
        </header>

        {isEmpty ? (
          <div className={styles.minicartEmpty}>
            <p className={styles.minicartEmptyTitle}>Tu carrito está vacío</p>
            <p className={styles.minicartEmptyCopy}>
              Agrega repuestos premium para Mercedes-Benz y BMW.
            </p>
            <a
              className={styles.minicartPrimaryGhost}
              href="#catalogo"
              onClick={closeCart}
            >
              Seguir comprando
            </a>
          </div>
        ) : (
          <>
            <div className={styles.minicartList}>
              {items.map((item) => {
                const imageUrl = item.itemOffered.image?.[0]?.url
                const imageAlt = item.itemOffered.image?.[0]?.alternateName ?? item.itemOffered.name
                const productName = item.itemOffered.isVariantOf.name

                return (
                  <article className={styles.minicartItem} key={item.id}>
                    <div className={styles.minicartItemImageWrap}>
                      {imageUrl ? (
                        <Image alt={imageAlt} height={84} src={imageUrl} width={84} />
                      ) : null}
                    </div>
                    <div className={styles.minicartItemBody}>
                      <div className={styles.minicartItemTop}>
                        <p className={styles.minicartItemName}>{productName}</p>
                        <button
                          className={styles.minicartRemove}
                          disabled={isValidating}
                          onClick={() => cartStore.removeItem(item.id)}
                          type="button"
                        >
                          Borrar
                        </button>
                      </div>
                      <p className={styles.minicartItemPrice}>
                        {formatPrice(item.price)}
                      </p>
                      <div className={styles.minicartQty}>
                        <button
                          aria-label="Disminuir cantidad"
                          className={styles.minicartQtyBtn}
                          disabled={isValidating || item.quantity <= 1}
                          onClick={() =>
                            cartStore.updateItemQuantity(item.id, Math.max(1, item.quantity - 1))
                          }
                          type="button"
                        >
                          −
                        </button>
                        <span className={styles.minicartQtyValue}>{item.quantity}</span>
                        <button
                          aria-label="Aumentar cantidad"
                          className={styles.minicartQtyBtn}
                          disabled={isValidating}
                          onClick={() => cartStore.updateItemQuantity(item.id, item.quantity + 1)}
                          type="button"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
              {gifts.map((gift) => (
                <article className={styles.minicartGift} key={gift.id}>
                  <span>¡Genial! Tenés envío gratis</span>
                </article>
              ))}
            </div>

            <div className={styles.minicartSummary}>
              <div className={styles.minicartRow}>
                <span>Subtotal (sin envío)</span>
                <strong>{formatPrice(subTotal)}</strong>
              </div>

              <div className={styles.minicartShipping}>
                <label htmlFor="minicart-postal">Medios de envío</label>
                <div className={styles.minicartShippingForm}>
                  <input id="minicart-postal" placeholder="Tu código postal" type="text" />
                  <button type="button">Calcular</button>
                </div>
                <a href="https://www.correoargentino.com.ar/formularios/cpa" target="_blank" rel="noreferrer">
                  No sé mi código postal
                </a>
              </div>

              <div className={styles.minicartTotal}>
                <span>Total</span>
                <strong>{formatPrice(total)}</strong>
              </div>

              <button className={styles.minicartPrimaryCta} type="button" {...checkoutBtnProps}>
                {isValidating ? 'Procesando...' : 'Iniciar compra'}
              </button>

              <a className={styles.minicartSecondaryLink} href="#catalogo" onClick={closeCart}>
                Ver más productos
              </a>

              <p className={styles.minicartMeta}>
                {totalItems} artículos en tu carrito
              </p>
            </div>
          </>
        )}
      </aside>
    </div>,
    document.body
  )
}

export default MinicartSidebar
