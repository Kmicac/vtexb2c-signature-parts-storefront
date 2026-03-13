import styles from './common.module.scss'

type OverlayProps = {
  onClick: () => void
  transparent?: boolean
}

function Overlay({ onClick, transparent = false }: OverlayProps) {
  return (
    <div
      aria-hidden="true"
      className={transparent ? styles.overlayTransparent : styles.overlay}
      onClick={onClick}
      role="presentation"
    />
  )
}

export default Overlay
