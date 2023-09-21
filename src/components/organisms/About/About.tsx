import { FC } from 'react';
import styles from './about.module.scss';
import { SectionTitle } from '../../molecules/SectionTitle/SectionTitle';
import { ABOUT_SECTION } from '@/utils/constants';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import photo from '@/images/photo_2023-01-06_16-58-38.jpg'
import { Skills } from '../Skills/Skills';

export const About: FC = () => {
  return (
    <>
      <section className={styles.about}>
        <SectionTitle header={ABOUT_SECTION.header} />
        <div className={styles.content}>
          <Image className={styles.photo} src={photo} alt='photo' height={400} width={300} />
          <ReactMarkdown linkTarget={'_blank'} className={styles.text}>{ABOUT_SECTION.text}</ReactMarkdown>
        </div>
      </section>
      <Skills />
    </>
  )
}