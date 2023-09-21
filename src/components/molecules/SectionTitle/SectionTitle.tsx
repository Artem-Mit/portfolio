import { FC } from 'react';
import styles from './sectionTitle.module.scss';
import { TitleText } from './types';

export const SectionTitle: FC<TitleText> = ({ header , text }) => {
  return (
    <>
      <h1 className={styles.title}>{header}</h1>
      {!!text &&
        <p className={styles.text}>
          {text}
        </p>}
    </>
  )
}