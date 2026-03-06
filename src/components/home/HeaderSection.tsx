import { homeMock } from '../../data/homeMock'

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

function HeaderSection() {
  return (
    <div className={`${styles.headerSticky} ${styles.surface}`}>
      <header className={`${styles.container} ${styles.header}`} id="busqueda">
        <div className={styles.logoBlock}>
          <h1 className={styles.logo}>{homeMock.brand.name}</h1>
          <span className={styles.tagline}>{homeMock.brand.tagline}</span>
        </div>

        <div className={styles.searchWrap}>
          <input
            aria-label="Buscar repuestos"
            className={styles.searchInput}
            type="search"
            placeholder={homeMock.header.searchPlaceholder}
          />
        </div>

        <div className={styles.actionIcons}>
          <a href="#cuenta" className={styles.iconButton}>
            <AccountIcon />
            <span>Cuenta</span>
          </a>
          <a href="#carrito" className={styles.iconButton}>
            <CartIcon />
            <span>Carrito</span>
          </a>
        </div>
      </header>

      <nav className={styles.navbar} aria-label="Categorías">
        <div className={styles.container}>
          <ul className={styles.navbarList}>
            {homeMock.navbar.categories.map((category) => (
              <li key={category.name}>
                <a className={styles.navLink} href={category.href}>
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default HeaderSection
