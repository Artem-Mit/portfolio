import React, { FC } from 'react';
import styles from './skills.module.scss';
import { SectionTitle } from '../atoms/SectionTitle/SectionTitle';
import { SKILLS_SECTION } from '@/utils/constants';

export const Skills: FC = () => {
  return (
    <section className={styles.skills}>
      <SectionTitle header={SKILLS_SECTION.title} text={SKILLS_SECTION.subTitle}/>
    </section>
  )
}
