import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import type { ImageGalleryProps as UIImageGalleryProps } from '@faststore/ui'

import { Image } from 'src/components/ui/Image'

import styles from './signature-pdp.module.scss'

type SignatureImageGalleryProps = {
  images: UIImageGalleryProps['images']
}

function SignatureImageGallery({ images }: SignatureImageGalleryProps) {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0)
  const currentImage = images[selectedImageIdx] ?? images[0]
  const { asPath } = useRouter()

  useEffect(() => {
    setSelectedImageIdx(0)
  }, [asPath])

  if (!currentImage) {
    return null
  }

  return (
    <div className={styles.galleryShell}>
      <div className={styles.thumbRail}>
        {images.map((image, index) => (
          <button
            key={`${image.url}-${index}`}
            type="button"
            className={`${styles.thumbButton} ${
              index === selectedImageIdx ? styles.thumbButtonActive : ''
            }`}
            onClick={() => setSelectedImageIdx(index)}
            aria-label={`Ver imagen ${index + 1}`}
          >
            <Image
              src={image.url}
              alt={image.alternateName ?? ''}
              width={72}
              height={72}
              className={styles.thumbImage}
            />
          </button>
        ))}
      </div>

      <div className={styles.heroMedia}>
        <div className={styles.heroCanvas}>
          <Image
            src={currentImage.url}
            alt={currentImage.alternateName ?? ''}
            width={1280}
            height={1280}
            sizes="(max-width: 980px) 100vw, 64vw"
            loading="eager"
            className={styles.heroImage}
          />
        </div>
      </div>
    </div>
  )
}

export default SignatureImageGallery
