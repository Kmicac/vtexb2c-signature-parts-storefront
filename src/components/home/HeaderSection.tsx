import { FocusEvent, useEffect, useMemo, useRef, useState } from 'react'

import { AccountModal, MinicartSidebar } from '../common'
import { homeMock } from '../../data/homeMock'
import useUIState from '../../hooks/useUIState'
import { useCart } from 'src/sdk/cart'
import { useCartToggleButton } from 'src/sdk/cart/useCartToggleButton'

import styles from './home.module.scss'

function AccountIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 12.2a5.1 5.1 0 1 0 0-10.2 5.1 5.1 0 0 0 0 10.2Zm0 1.8c-4.42 0-8 2.43-8 5.42V22h16v-2.58c0-2.99-3.58-5.42-8-5.42Z"
      />
    </svg>
  )
}

function CartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 .001 4A2 2 0 0 0 17 18ZM6.3 14h10.95a2 2 0 0 0 1.91-1.4L22 4H6.1l-.4-2H2v2h2.1l2.7 11.4A2 2 0 0 0 8.76 17H20v-2H8.76l-.46-1Z"
      />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M10.5 3a7.5 7.5 0 1 0 4.7 13.35l4.22 4.22 1.42-1.42-4.21-4.22A7.5 7.5 0 0 0 10.5 3Zm0 2a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Z"
      />
    </svg>
  )
}

const categoryParts: Record<string, string[]> = {
  frenos: [
    'Pastillas de freno',
    'Discos ventilados',
    'Sensores ABS',
    'Bombines',
    'Calipers',
    'Líquido DOT 4',
  ],
  suspension: [
    'Amortiguadores',
    'Bieletas',
    'Bujes',
    'Cazoletas',
    'Resortes',
    'Brazos de control',
  ],
  motor: [
    'Filtros de aceite',
    'Filtros de aire',
    'Bobinas',
    'Bujías',
    'Correas',
    'Bombas de agua',
  ],
  accesorios: [
    'Tapetes premium',
    'Escobillas',
    'Aceites y aditivos',
    'Sensores TPMS',
    'Limpieza técnica',
    'Iluminación LED',
  ],
  rines: [
    'Rines de aleación',
    'Tapas centrales',
    'Tuercas de seguridad',
    'Válvulas',
    'Anillos centradores',
    'Separadores',
  ],
  baterias: [
    'Baterías AGM',
    'Baterías EFB',
    'Cargadores inteligentes',
    'Bornes',
    'Protectores',
    'Probadores',
  ],
  'partes-carro': [
    'Paragolpes',
    'Ópticas delanteras',
    'Faros traseros',
    'Guardabarros',
    'Capot',
    'Rejillas',
  ],
}

function HeaderSection() {
  const { isAccountModalOpen, openAccountModal, closeAccountModal } = useUIState()
  const cartBtnProps = useCartToggleButton()
  const { items } = useCart()
  const cartItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  )
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const searchWrapRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  const activeParts = useMemo(
    () => (activeCategory ? categoryParts[activeCategory] ?? [] : []),
    [activeCategory]
  )

  const handleNavbarBlur = (event: FocusEvent<HTMLElement>) => {
    const nextFocus = event.relatedTarget as Node | null

    if (nextFocus && event.currentTarget.contains(nextFocus)) {
      return
    }

    setActiveCategory(null)
  }

  useEffect(() => {
    if (!isSearchOpen) {
      return
    }

    searchInputRef.current?.focus()

    const handleOutsideClick = (event: MouseEvent) => {
      if (searchWrapRef.current?.contains(event.target as Node)) {
        return
      }

      setIsSearchOpen(false)
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSearchOpen(false)
      }
    }

    window.addEventListener('mousedown', handleOutsideClick)
    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('mousedown', handleOutsideClick)
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isSearchOpen])

  return (
    <div className={`${styles.headerSticky} ${styles.surface}`}>
      <header className={`${styles.headerContainer} ${styles.header}`} id="busqueda">
        <div className={styles.logoBlock}>
          <h1 className={styles.logo}>{homeMock.brand.name}</h1>
          <span className={styles.tagline}>{homeMock.brand.tagline}</span>
        </div>

        <div className={styles.searchWrap} ref={searchWrapRef}>
          <button
            aria-controls="header-search"
            aria-expanded={isSearchOpen}
            aria-label="Abrir búsqueda"
            className={`${styles.iconButton} ${styles.searchToggle}`}
            onClick={() => setIsSearchOpen((current) => !current)}
            type="button"
          >
            <SearchIcon />
          </button>

          <div
            className={`${styles.searchDropdown} ${
              isSearchOpen ? styles.searchDropdownOpen : ''
            }`}
          >
            <input
              id="header-search"
              aria-label="Buscar repuestos"
              className={styles.searchInput}
              placeholder={homeMock.header.searchPlaceholder}
              ref={searchInputRef}
              type="search"
            />
          </div>
        </div>

        <div className={styles.actionIcons}>
          <button
            aria-controls="account-modal-title"
            aria-expanded={isAccountModalOpen}
            aria-haspopup="dialog"
            aria-label="Abrir cuenta"
            className={styles.iconButton}
            onClick={openAccountModal}
            type="button"
          >
            <AccountIcon />
          </button>
          <button
            aria-label="Abrir carrito"
            className={styles.iconButton}
            type="button"
            {...cartBtnProps}
          >
            <CartIcon />
            {cartItems > 0 ? <span className={styles.iconBadge}>{cartItems}</span> : null}
          </button>
        </div>
      </header>

      <nav
        aria-label="Categorías"
        className={styles.navbar}
        onBlurCapture={handleNavbarBlur}
        onMouseLeave={() => setActiveCategory(null)}
      >
        <div className={styles.container}>
          <ul className={styles.navbarList}>
            {homeMock.navbar.categories.map((category) => (
              <li
                key={category.name}
                onFocusCapture={() => setActiveCategory(category.href.replace('#', ''))}
                onMouseEnter={() => setActiveCategory(category.href.replace('#', ''))}
              >
                <a className={styles.navLink} href={category.href}>
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {activeCategory && activeParts.length > 0 ? (
          <div className={styles.navDropdownWrap}>
            <div className={`${styles.container} ${styles.navDropdown}`}>
              {activeParts.map((part) => (
                <a
                  className={styles.navDropdownLink}
                  href={`#${activeCategory}`}
                  key={`${activeCategory}-${part}`}
                >
                  {part}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </nav>

      <AccountModal isOpen={isAccountModalOpen} onClose={closeAccountModal} />
      <MinicartSidebar />
    </div>
  )
}

export default HeaderSection
