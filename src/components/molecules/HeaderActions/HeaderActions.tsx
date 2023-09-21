import Link from 'next/link';
import styles from './headerActions.module.scss';
import { FC } from 'react';

export const HeaderActions: FC = () => {
  return (
    <>
      <Link href='cv.pdf' target={'_blank'} className={styles.button}>Download CV</Link>
    </>
  )
}
