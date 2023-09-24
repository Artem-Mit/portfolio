import { FC } from 'react';
import Image from 'next/image';
import styles from './works.module.scss';
import { SectionTitle } from '@/components/molecules/SectionTitle/SectionTitle';
import workInProgress from '/public/images/work-progress_5578703.png';
import { getScopedI18n } from '@/locales/server';

export const Works: FC = async () => {
  const t = await getScopedI18n('WORKS_SECTION');
  return (
    <section className={styles.works}>
      <SectionTitle header={t('title')} text={t('subTitle')} />
      <Image src={workInProgress} width={300} height={300} alt='work-in-progress' className={styles.image} priority/>
    </section>
  )
}
