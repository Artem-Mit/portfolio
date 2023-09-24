import { FC } from 'react';
import Image from 'next/image';
import styles from './hero.module.scss';
import photo from '/public/images/photo_2023-04-01_23-00-52.jpg';
import { SocialButtons } from '@/components/molecules/SocialButtons/SocialButtons';
import { getScopedI18n } from '@/locales/server';

export const Hero: FC = async () => {
  const t = await getScopedI18n('HERO_TEXT');
  return (
    <section className={styles.hero}>
      <div className={styles.about}>
        <h1 className={styles.header}>
          {t('header')}
        </h1>
        <p className={styles.text}>
          {t('about')}
        </p>
        <p className={styles.location}>{t('location')}</p>
        <p className={styles.available}>{t('available')}</p>
        <SocialButtons />
      </div>
      <div className={styles.photoContainer}>
        <Image src={photo} alt='photo' className={styles.photo} priority/>
      </div>
    </section>
  )
}
