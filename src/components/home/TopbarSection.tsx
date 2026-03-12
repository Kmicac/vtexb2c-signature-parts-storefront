import { useEffect } from 'react'

import { homeMock } from '../../data/homeMock'

import styles from './home.module.scss'

function TopbarSection() {
  useEffect(() => {
    const originalFetch = window.fetch.bind(window)
    const analyticsPromises = new WeakSet<Promise<unknown>>()

    window.fetch = (async (...args: Parameters<typeof fetch>) => {
      const [input, init] = args
      const requestUrl =
        typeof input === 'string'
          ? input
          : input instanceof Request
            ? input.url
            : String(input)

      if (!requestUrl.includes('https://sp.vtex.com/event-api/v1/')) {
        return originalFetch(input, init)
      }

      const requestPromise = originalFetch(input, init)
      analyticsPromises.add(requestPromise)

      try {
        return await requestPromise
      } catch (error) {
        const isFailedToFetch =
          error instanceof TypeError && error.message.includes('Failed to fetch')

        if (isFailedToFetch) {
          return new Response(null, { status: 204, statusText: 'No Content' })
        }

        throw error
      }
    }) as typeof fetch

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const isAnalyticsPromise = analyticsPromises.has(
        event.promise as Promise<unknown>
      )

      if (isAnalyticsPromise) {
        event.preventDefault()
      }
    }

    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    return () => {
      window.fetch = originalFetch
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [])

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
