import Image from 'next/image';
import styles from './hero.module.scss';
import { HERO_TEXT } from '@/utils/constants';
import photo from '@/images/photo_2023-04-01_23-00-52.jpg';
import { FC } from 'react';

export const Hero: FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.about}>
        <h1 className={styles.header}>
          {HERO_TEXT.header}
        </h1>
        <p className={styles.text}>
          {HERO_TEXT.about}
        </p>
        <p className={styles.location}>{HERO_TEXT.location}</p>
        <p className={styles.available}>{HERO_TEXT.available ? "Available for new projects" : "Don't disturb ;)"}</p>
      </div>
      <div className={styles.photoContainer}>
        <Image src={photo} alt='photo' className={styles.photo}/>
      </div>
    </section>
  )
}
