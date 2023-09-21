import { FC } from 'react';
import styles from './contacts.module.scss';
import { SectionTitle } from '@/components/molecules/SectionTitle/SectionTitle';
import { CONTACTS_SECTION } from '@/utils/constants';
import Link from 'next/link';
import { SocialButtons } from '@/components/molecules/SocialButtons/SocialButtons';

export const Contacts: FC = () => {
  return (
    <section className={styles.contacts}>
      <SectionTitle header={CONTACTS_SECTION.title} text={CONTACTS_SECTION.subTitle} />
      <div className={styles.info}>
        <Link className={styles.email} href={'mailto:artem.v.mitin@yandex.ru'}>{CONTACTS_SECTION.email}</Link>
        <Link className={styles.phone} href={'tel:+79219139121'}>{CONTACTS_SECTION.phone}</Link>
      </div>
      <SocialButtons />
    </section>
  )
}
