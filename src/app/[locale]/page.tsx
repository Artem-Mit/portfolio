import { Hero } from "@/components/organisms/Hero/Hero";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mitin Artem | Frontend developer from Saint.P',
  description: 'Personal portfolio website of frontend developer Mitin Artem',
}

export default async function Page() {

  return (
    <Hero />
  )
}
