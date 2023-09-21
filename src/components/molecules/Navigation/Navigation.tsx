'use client'

import Link from 'next/link'
import { Navlinks } from './types'
import { usePathname } from 'next/navigation'
import styles from './navigation.module.scss'
import { FC } from 'react'

export const Navigation: FC<Navlinks> = ({ links }) => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className={styles.linksContainer}>
        {links.map((link) => {
          const isActive = pathname === link.href
          return (
            <li key={link.href} >
              <Link href={link.href}
                className={`${styles.link} ${isActive ? `${styles.link_active}` : ``}`}>
                {link.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav >
  )
}
