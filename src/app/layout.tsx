import { Footer } from '@/components/organisms/Footer/Footer'
import '../styles/index.scss'
import { Header } from '@/components/organisms/Header/Header'


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
