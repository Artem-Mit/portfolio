import { FC } from 'react';
import styles from './socialButton.module.css';
import Link from 'next/link';
import { SocialLink } from './types';
import Image from 'next/image';

export const SocialButton: FC<SocialLink> = ({ socialLink, imgUrl }) => {
  return (
    <Link href={socialLink} target='_blank' className={styles.link}>
      <Image src={imgUrl} width={30} height={30} alt='social-img' className={styles.button}/>
    </Link>
  )
}