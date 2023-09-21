import Image from 'next/image';
import styles from './hero.module.scss';
import { HERO_TEXT } from '@/utils/constants';
import { FC } from 'react';
import photo from '/public/images/photo_2023-04-01_23-00-52.jpg';
import githubIcon from '/public/images/github-icon.svg';
import tgIcon from '/public/images/telegram-icon.svg';
import gmailIcon from '/public/images/gmail-icon.svg';
import { SocialButton } from '@/components/atoms/SocialButton/SocialButton';

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
        <div className={styles.buttons}>
          <SocialButton socialLink={'https://github.com/Artem-Mit'} imgUrl={githubIcon} />
          <SocialButton socialLink={'mailto:artem.v.mitin@yandex.ru'} imgUrl={gmailIcon} />
          <SocialButton socialLink={'https://t.me/+79219139121'} imgUrl={tgIcon} />
        </div>
      </div>
      <div className={styles.photoContainer}>
        <Image src={photo} alt='photo' className={styles.photo} />
      </div>
    </section>
  )
}
