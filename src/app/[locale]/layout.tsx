import { ThemeProvider } from '@/contexts/commons'
import { Montserrat } from 'next/font/google'
import '@/assets/styles/globals.css'
import { ReactNode } from 'react'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  fallback: ['sans serif']
})

export const metadata = {
  title: '@mateuscorreiaazevedo',
  description: 'My boilerplate using Next.js 13. Powered by Mateus Azevedo'
}

export default function RootLayout({
  children,
  params
}: {
  children: ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={params.locale}>
      <body
        className={`${montserrat.variable} min-h-screen w-full bg-background font-sans text-foreground`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
