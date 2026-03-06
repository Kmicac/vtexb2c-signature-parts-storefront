import { homeMock } from '../../data/homeMock'

import styles from './home.module.scss'

function TopbarSection() {
  return (
    <div className={`${styles.topbar} ${styles.surface}`}>
      <div className={`${styles.container} ${styles.topbarInner}`}>
        <span>{homeMock.topbar.text}</span>
        <a href={homeMock.topbar.ctaHref} className={styles.topbarCta}>
          {homeMock.topbar.ctaLabel}
        </a>
      </div>
    </div>
  )
}

export default TopbarSection
