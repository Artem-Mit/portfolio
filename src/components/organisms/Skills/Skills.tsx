import { FC } from 'react';
import styles from './skills.module.scss';
import { SectionTitle } from '../../molecules/SectionTitle/SectionTitle';
import { SKILLS } from '@/utils/constants';
import { SkillTab } from '@/components/molecules/SkillTab/SkillTab';
import { getScopedI18n } from '@/locales/server';

export const Skills: FC = async () => {
  const t = await getScopedI18n('SKILLS_SECTION');
  return (
    <section className={styles.skills}>
      <SectionTitle header={t('title')} text={t('subTitle')} />
      <div className={styles.technologies}>
        {!!SKILLS &&
          SKILLS.map((technology) => (
            <SkillTab imgUrl={technology.imgUrl} name={technology.name} key={technology.name} />
          ))
        }
      </div>
    </section>
  )
}
