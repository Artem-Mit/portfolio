'use client'
import { usePathname } from 'next/navigation'
import styles from './navigation.module.scss'
import Link from 'next/link'
import { FC } from 'react'
import { NavigationProps } from './types'

export const Navigation: FC<NavigationProps> = ({ aboutLinkName, worksLinkName, contactsLinkName, onClick }) => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className={styles.linksContainer}>
        <li>
          <Link href={'/about'} onClick={onClick}
            className={`${styles.link} ${pathname === '/about' ? `${styles.link_active}` : ``}`}>
            {aboutLinkName}
          </Link>
        </li>
        <li>
          <Link href={'/works'} onClick={onClick}
            className={`${styles.link} ${pathname === '/works' ? `${styles.link_active}` : ``}`}>
            {worksLinkName}
          </Link>
        </li>
        <li>
          <Link href={'/contacts'} onClick={onClick}
            className={`${styles.link} ${pathname === '/contacts' ? `${styles.link_active}` : ``}`}>
            {contactsLinkName}
          </Link>
        </li>
      </ul>
    </nav >
  )
}

