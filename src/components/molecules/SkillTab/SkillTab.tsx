import { FC } from 'react'
import styles from './skillTab.module.scss';
import { SkillTabProps } from './types';
import Image from 'next/image';


export const SkillTab: FC<SkillTabProps> = ({imgUrl, name}) => {
  return (
    <div className={styles.skilltab}>
      <Image src={imgUrl} alt={`${name}-icon`} className={styles.image} width={64} height={64}/>
      <p className={styles.name}>{name}</p>
    </div>
  )
}