import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import storeConfig from '../../../discovery.config'
import { useSession } from 'src/sdk/session'
import Overlay from './Overlay'
import styles from './common.module.scss'

type AccountModalProps = {
  isOpen: boolean
  onClose: () => void
}

type AuthMode = 'login' | 'register'

function AccountModal({ isOpen, onClose }: AccountModalProps) {
  const router = useRouter()
  const dialogRef = useRef<HTMLDivElement>(null)
  const [mode, setMode] = useState<AuthMode>('login')
  const { person } = useSession()

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    const previousFocus = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'

    const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
      'button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    )

    focusables?.[0]?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
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
  }, [isOpen, onClose])

  const handleContinue = () => {
    if (person?.id) {
      const enableFaststoreMyAccount =
        storeConfig.experimental?.enableFaststoreMyAccount
      const destination = enableFaststoreMyAccount
        ? '/pvt/account'
        : storeConfig.accountUrl

      window.location.href = destination
      return
    }

    const params = new URLSearchParams()
    params.set('returnUrl', `${window.location.pathname}${window.location.search}`)
    params.set('authMode', mode)

    onClose()
    router.push(`/login?${params.toString()}`)
  }

  if (!isOpen) {
    return null
  }

  if (typeof document === 'undefined') {
    return null
  }

  return createPortal(
    <div className={styles.modalRoot}>
      <Overlay onClick={onClose} />
      <div
        aria-labelledby="account-modal-title"
        aria-modal="true"
        className={styles.accountModal}
        ref={dialogRef}
        role="dialog"
      >
        <button
          aria-label="Cerrar modal"
          className={styles.modalClose}
          onClick={onClose}
          type="button"
        >
          ×
        </button>

        <p className={styles.modalEyebrow}>Signature Parts</p>
        <h2 className={styles.modalTitle} id="account-modal-title">
          {mode === 'login' ? 'Iniciar sesión' : 'Crear cuenta'}
        </h2>
        <p className={styles.modalSubtitle}>
          Accede con VTEX ID en un entorno seguro para gestionar pedidos y datos.
        </p>

        <div className={styles.authSwitch} role="tablist" aria-label="Tipo de acceso">
          <button
            aria-selected={mode === 'login'}
            className={`${styles.authTab} ${mode === 'login' ? styles.authTabActive : ''}`}
            onClick={() => setMode('login')}
            role="tab"
            type="button"
          >
            Iniciar sesión
          </button>
          <button
            aria-selected={mode === 'register'}
            className={`${styles.authTab} ${
              mode === 'register' ? styles.authTabActive : ''
            }`}
            onClick={() => setMode('register')}
            role="tab"
            type="button"
          >
            Registrarme
          </button>
        </div>

        <form
          className={styles.authForm}
          onSubmit={(event) => {
            event.preventDefault()
            handleContinue()
          }}
        >
          {mode === 'register' ? (
            <input
              className={styles.authInput}
              name="name"
              placeholder="Nombre completo"
              type="text"
            />
          ) : null}
          <input
            className={styles.authInput}
            name="email"
            placeholder="Correo electrónico"
            type="email"
          />
          <input
            className={styles.authInput}
            name="password"
            placeholder={mode === 'login' ? 'Contraseña' : 'Crea una contraseña'}
            type="password"
          />
          <button className={styles.authPrimaryCta} type="submit">
            {mode === 'login' ? 'Continuar con tu cuenta' : 'Continuar con registro'}
          </button>
        </form>

        <p className={styles.authHelp}>
          {mode === 'login' ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}{' '}
          <button
            className={styles.authInlineLink}
            onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
            type="button"
          >
            {mode === 'login' ? 'Regístrate aquí' : 'Inicia sesión'}
          </button>
        </p>

        <p className={styles.authTrust}>
          Al continuar, el acceso y registro se completan en el flujo oficial de VTEX.
        </p>
      </div>
    </div>,
    document.body
  )
}

export default AccountModal
