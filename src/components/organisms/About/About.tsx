import { FC } from 'react';
import styles from './about.module.scss';
import { SectionTitle } from '../../molecules/SectionTitle/SectionTitle';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Skills } from '../Skills/Skills';
import photo from '/public/images/photo_2023-01-06_16-58-38.jpg'
import { getScopedI18n } from '@/locales/server';


export const About: FC = async() => {
  const t = await getScopedI18n('ABOUT_SECTION');
  return (
    <>
      <section className={styles.about}>
        <SectionTitle header={t('title')} text={t('subTitle')}/>
        <div className={styles.content}>
          <Image className={styles.photo} src={photo} alt='photo' height={400} width={300} />
          <ReactMarkdown linkTarget={'_blank'} className={styles.text}>{t('text')}</ReactMarkdown>
        </div>
      </section>
      <Skills />
    </>
  )
}