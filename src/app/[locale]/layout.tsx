import { Inter } from 'next/font/google'
import { Footer } from '@/components/organisms/Footer/Footer'
import '../../styles/index.scss'
import { Header } from '@/components/organisms/Header/Header'
import { getCurrentLocale } from '@/locales/server'
import MenuProvider from '@/contexts/menuProvider'
import { MobileMenu } from '@/components/organisms/MobileMenu/MobileMenu'
import { getLinksNames } from '@/utils/getLinksNames'

const inter = Inter({
  display: 'swap',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800']
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = getCurrentLocale();
  const [aboutLinkName, worksLinkName, contactsLinkName, downloadButtonText, anotherLanguage] = await getLinksNames();
  return (
    <html lang={locale} className={inter.className}>
      <body>
        <MenuProvider>
          <Header
            aboutLinkName={aboutLinkName}
            anotherLanguage={anotherLanguage}
            contactsLinkName={contactsLinkName}
            downloadButtonText={downloadButtonText}
            worksLinkName={worksLinkName} />
          <main>
            {children}
            <MobileMenu
              aboutLinkName={aboutLinkName}
              anotherLanguage={anotherLanguage}
              contactsLinkName={contactsLinkName}
              downloadButtonText={downloadButtonText}
              worksLinkName={worksLinkName} />
          </main>
          <Footer />
        </MenuProvider>
      </body>
    </html>
  )
}
