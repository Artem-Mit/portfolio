import { Contacts } from "@/components/organisms/Contacts/Contacts";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mitin Artem | Contacts',
  description: 'Contacts of frontend developer Mitin Artem. You can contact me using them.'
}

export default function Page() {
  return (
    <Contacts />
  )
}
