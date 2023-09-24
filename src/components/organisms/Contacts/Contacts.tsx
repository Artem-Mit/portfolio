import { FC } from 'react';
import styles from './contacts.module.scss';
import { SectionTitle } from '@/components/molecules/SectionTitle/SectionTitle';
import Link from 'next/link';
import { SocialButtons } from '@/components/molecules/SocialButtons/SocialButtons';
import { getScopedI18n } from '@/locales/server';

export const Contacts: FC = async () => {
  const t = await getScopedI18n('CONTACTS_SECTION');
  return (
    <section className={styles.contacts}>
      <SectionTitle header={t('title')} text={t('subTitle')} />
      <div className={styles.info}>
        <Link className={styles.email} href={'mailto:artem.v.mitin@yandex.ru'}>{t('email')}</Link>
        <Link className={styles.phone} href={'tel:+79219139121'}>{t('phone')}</Link>
      </div>
      <SocialButtons />
    </section>
  )
}
