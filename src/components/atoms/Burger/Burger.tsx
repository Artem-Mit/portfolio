'use client'

import { FC, useContext } from 'react';
import styles from './burges.module.scss'
import { MenuContext } from '@/contexts/menuProvider';

export const Burger: FC = () => {
  const { isOpened, setIsOpened } = useContext(MenuContext);

  return (
    <>
      <div className={styles.burger} onClick={() => setIsOpened(!isOpened)} />
    </>
  )
}
