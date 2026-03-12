import Image from 'next/image'
import type { StaticImageData } from 'next/image'

import type { FooterSection } from '../../data/homeMock'

import styles from './home.module.scss'

type FooterProps = {
  brandName: string
  sections: FooterSection[]
  disclaimer: string
  logos: {
    mercedes: StaticImageData | string
    bmw: StaticImageData | string
  }
}

function Footer({ brandName, sections, disclaimer, logos }: FooterProps) {
  return (
    <footer className={`${styles.footer} ${styles.surface}`}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div>
            <strong className={styles.footerBrand}>{brandName}</strong>
          </div>
          <div className={styles.footerLogoStrip}>
            <Image src={logos.mercedes} alt="Logo Mercedes-Benz" width={30} height={30} />
            <Image src={logos.bmw} alt="Logo BMW" width={30} height={30} />
          </div>
        </div>

        <div className={styles.footerGrid}>
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className={styles.footerTitle}>{section.title}</h3>
              <ul className={styles.footerLinks}>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a className={styles.footerLink} href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.footerBottom}>
          <p>{disclaimer}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
