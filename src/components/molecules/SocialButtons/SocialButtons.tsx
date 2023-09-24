import styles from './socialButtons.module.scss'
import { SocialButton } from '@/components/atoms/SocialButton/SocialButton'
import githubIcon from '/public/images/github-icon.svg';
import tgIcon from '/public/images/telegram-icon.svg';
import gmailIcon from '/public/images/gmail-icon.svg';
import { FC } from 'react';

export const SocialButtons: FC = () => {
  return (
    <div className={styles.buttons}>
      <SocialButton socialLink={'https://github.com/Artem-Mit'} imgUrl={githubIcon} />
      <SocialButton socialLink={'mailto:mitin.art.web@gmail.ru'} imgUrl={gmailIcon} />
      <SocialButton socialLink={'https://t.me/+79219139121'} imgUrl={tgIcon} />
    </div>
  )
}
