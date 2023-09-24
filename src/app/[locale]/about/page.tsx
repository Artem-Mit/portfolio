import { About } from '@/components/organisms/About/About';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mitin Artem | About',
  description: 'About frontend developer Mitin Artem and the modern technologies he works with'
}

export default function Page() {
  return (
    <About />
  )
}
