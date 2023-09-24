import { Inter } from 'next/font/google'
import { Footer } from '@/components/organisms/Footer/Footer'
import '../../styles/index.scss'
import { Header } from '@/components/organisms/Header/Header'
import { getCurrentLocale } from '@/locales/server'

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = getCurrentLocale()
  return (
    <html lang={locale} className={inter.className}>
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
