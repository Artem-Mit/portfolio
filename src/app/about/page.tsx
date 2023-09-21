import { About } from '@/components/About/About';
import './aboutPage.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mitin Artem | About',
  description: 'Personal website-portfolio of frontend developer Mitin Artem'
}

export default function aboutPage() {
  return (
    <About />
  )
}
