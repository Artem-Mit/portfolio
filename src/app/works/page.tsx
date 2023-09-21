import { Works } from "@/components/organisms/Works/Works";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mitin Artem | Works',
  description: 'Personal website-portfolio of frontend developer Mitin Artem'
}

export default function Page() {
  return (
    <Works />
  )
}
