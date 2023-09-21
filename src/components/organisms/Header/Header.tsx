import { FC } from 'react';
import { HeaderActions } from '../HeaderActions/HeaderActions';
import { Navigation } from '../Navigation/Navigation';
import styles from './header.module.scss';
import { NAV_LINKS } from '@/utils/constants';
import Link from 'next/link';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link href='/' className={styles.logo}>{"<MitinArt />"}</Link>
      <div className={styles.buttons}>
        <Navigation links={NAV_LINKS} />
        <HeaderActions />
      </div>
    </header>
  )
}

