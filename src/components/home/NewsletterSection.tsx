import Newsletter from './Newsletter'
import { homeMock } from '../../data/homeMock'
import styles from './home.module.scss'

function NewsletterSection() {
  return (
    <div className={styles.surface}>
      <Newsletter
        title={homeMock.newsletter.title}
        nameLabel={homeMock.newsletter.nameLabel}
        emailLabel={homeMock.newsletter.emailLabel}
        ctaLabel={homeMock.newsletter.ctaLabel}
      />
    </div>
  )
}

export default NewsletterSection
