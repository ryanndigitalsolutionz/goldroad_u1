import { FiX } from 'react-icons/fi'
import LottieAnimation from './LottieAnimation'

export default function LottieModal({
  isOpen,
  onClose,
  src,
  title = 'GoldRoad U1',
  description = '',
}) {
  if (!isOpen) {
    return null
  }

  return (
    <div
      className="lottie-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <section className="lottie-modal">
        <button
          type="button"
          className="lottie-modal-close"
          onClick={onClose}
          aria-label="Close animation"
        >
          <FiX />
        </button>

        <div className="lottie-modal-animation">
          <LottieAnimation src={src} autoplay loop />
        </div>

        <div className="lottie-modal-copy">
          <span>GOLDROAD U1</span>
          <h2>{title}</h2>

          {description ? <p>{description}</p> : null}
        </div>
      </section>
    </div>
  )
}
