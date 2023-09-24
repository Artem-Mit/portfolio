'use client'
import { FC } from 'react';
import styles from './languageButton.module.scss';
import { LanguageButtonProps } from './types';
import { useChangeLocale, useCurrentLocale } from '@/locales/client'

export const LanguageButton: FC<LanguageButtonProps> = ({ language }) => {
  const locale = useCurrentLocale()
  const changeLocale = useChangeLocale()
  return (
    <div onClick={() => locale == 'ru' ? changeLocale('en') : changeLocale('ru')} className={styles.button}>{language}</div>
  )
}
