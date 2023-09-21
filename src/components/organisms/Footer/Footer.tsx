import { FC } from 'react';
import styles from './footer.module.scss';

export const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.text}>{new Date().getFullYear()} | Сoded with ❤️️ by Mitin.Art</p>
    </div>
  )
}