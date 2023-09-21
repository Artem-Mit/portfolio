import { Hero } from "@/components/organisms/Hero/Hero";

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mitin Artem | Frontend developer from Saint.P',
  description: 'Personal website-portfolio of frontend developer Mitin Artem',  
}

export default function Page() {
  return (
    <Hero />
  )
}
