import { Contacts } from "@/components/organisms/Contacts/Contacts";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mitin Artem | Contacts',
  description: 'Personal website-portfolio of frontend developer Mitin Artem'
}

export default function Page() {
  return (
    <Contacts />
  )
}
