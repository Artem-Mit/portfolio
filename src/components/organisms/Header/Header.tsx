import { FC } from 'react';
import { HeaderActions } from '../../molecules/HeaderActions/HeaderActions';
import { Navigation } from '../../molecules/Navigation/Navigation';
import styles from './header.module.scss';
import Link from 'next/link';
import { LanguageButton } from '@/components/atoms/LanguageButton/LanguageButton';
import { getLinksNames } from '@/utils/getLinksNames';


export const Header: FC = async () => {
  const [aboutLinkName, worksLinkName, contactsLinkName, downloadButtonText, anotherLanguage] = await getLinksNames();
  return (
    <header className={styles.header}>
      <Link href='/' className={styles.logo}>{"<Mitin.Art />"}</Link>
      <div className={styles.buttons}>
        <Navigation aboutLinkName={aboutLinkName} contactsLinkName={contactsLinkName} worksLinkName={worksLinkName} />
        <HeaderActions buttonText={downloadButtonText} language={anotherLanguage} />
      </div>
    </header >

  )
}

