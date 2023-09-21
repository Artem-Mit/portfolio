import { FC } from 'react';
import styles from './footer.module.scss';

export const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.text}>{new Date().getFullYear()} | Designed and coded with ❤️️ by Mitin.Art</p>
    </div>
  )
}