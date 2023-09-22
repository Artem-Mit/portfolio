import { FC } from 'react';
import Image from 'next/image';
import styles from './works.module.scss';
import { SectionTitle } from '@/components/molecules/SectionTitle/SectionTitle';
import workInProgress from '/public/images/work-progress_5578703.png';


export const Works: FC = () => {
  return (
    <section className={styles.works}>
      <SectionTitle header={'Works'} text={`Sorry... This page is still under reconstruction 😒`}/>
      <Image src={workInProgress} width={300} height={300} alt='work-in-progress' className={styles.image} />
    </section>
  )
}
