import Link from 'next/link';
import styles from './headerActions.module.scss';
import { FC } from 'react';
import { HeaderActionsProps } from './types';
import { LanguageButton } from '@/components/atoms/LanguageButton/LanguageButton';

export const HeaderActions: FC<HeaderActionsProps> = ({ buttonText, language }) => {
  return (
    <>
      <Link href='cv.pdf' target={'_blank'} className={styles.button}>{buttonText}</Link>
      <LanguageButton language={language}/>
    </>
  )
}
