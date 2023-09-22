import { Works } from "@/components/organisms/Works/Works";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mitin Artem | Works',
  description: 'Works performed by a frontend developer Mitin Artem.'
}

export default function Page() {
  return (
    <Works />
  )
}
