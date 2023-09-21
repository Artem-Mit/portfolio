import React, { FC } from 'react';
import styles from './skills.module.scss';
import { SectionTitle } from '../../molecules/SectionTitle/SectionTitle';
import { SKILLS_SECTION } from '@/utils/constants';
import { SkillTab } from '@/components/molecules/SkillTab/SkillTab';

export const Skills: FC = () => {
  return (
    <section className={styles.skills}>
      <SectionTitle header={SKILLS_SECTION.title} text={SKILLS_SECTION.subTitle} />
      <div className={styles.technologies}>
        {!!SKILLS_SECTION.skills &&
          SKILLS_SECTION.skills.map((technology) => (
            <SkillTab imgUrl={technology.imgUrl} name={technology.name} key={technology.name} />
          ))
        }
      </div>
    </section>
  )
}
