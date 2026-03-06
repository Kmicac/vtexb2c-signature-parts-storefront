import { useState } from 'react'

import styles from './home.module.scss'

type NewsletterProps = {
  title: string
  nameLabel: string
  emailLabel: string
  ctaLabel: string
}

function Newsletter({ title, nameLabel, emailLabel, ctaLabel }: NewsletterProps) {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.newsletter}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          <form
            className={styles.newsletterForm}
            onSubmit={(event) => {
              event.preventDefault()
              setSubmitted(true)
            }}
          >
            <input
              className={styles.formInput}
              type="text"
              placeholder={nameLabel}
              aria-label={nameLabel}
              required
              name="name"
            />
            <input
              className={styles.formInput}
              type="email"
              placeholder={emailLabel}
              aria-label={emailLabel}
              required
              name="email"
            />
            <button className={styles.primaryButton} type="submit">
              {ctaLabel}
            </button>
          </form>
          {submitted ? (
            <p className={styles.sectionSubtitle}>Gracias por suscribirte.</p>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default Newsletter
