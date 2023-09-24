import Link from 'next/link';
import styles from './headerActions.module.scss';
import { FC } from 'react';
import { HeaderActionsProps } from './types';

export const HeaderActions: FC<HeaderActionsProps> = ({ buttonText }) => {
  return (
    <Link href='cv.pdf' target={'_blank'} className={styles.button}>{buttonText}</Link>
  )
}
