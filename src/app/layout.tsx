import { Footer } from '@/components/Footer/Footer'
import '../styles/index.scss'
import { Header } from '@/components/Header/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mitin Artem | Frontend developer from Saint.P',
  description: 'Personal website-portfolio of frontend developer Mitin Artem'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
