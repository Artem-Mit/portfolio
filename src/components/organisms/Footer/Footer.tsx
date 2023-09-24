import { FC } from 'react';
import styles from './footer.module.scss';
import { getFooterText } from '@/utils/getFooterText';


export const Footer: FC = async () => {
  const [footerText, anotherLanguage] = await getFooterText()
  return (
    <div className={styles.footer}>
      <p className={styles.text}>&copy; {new Date().getFullYear()} | {footerText}</p>
    </div>
  )
}