import { FC } from 'react';
import { HeaderActions } from '../../molecules/HeaderActions/HeaderActions';
import { Navigation } from '../../molecules/Navigation/Navigation';
import styles from './header.module.scss';
import Link from 'next/link';
import { Burger } from '@/components/atoms/Burger/Burger';
import { HeaderProps } from './types';


export const Header: FC<HeaderProps> = async ({ aboutLinkName, worksLinkName, contactsLinkName, downloadButtonText, anotherLanguage }) => {

  return (
    <header className={styles.header}>
      <Link href='/' className={styles.logo}>{"<Mitin.Art />"}</Link>
      <div className={styles.buttons}>
        <Navigation aboutLinkName={aboutLinkName} contactsLinkName={contactsLinkName} worksLinkName={worksLinkName} />
        <HeaderActions buttonText={downloadButtonText} language={anotherLanguage} />
      </div>
      <Burger />
    </header >

  )
}

