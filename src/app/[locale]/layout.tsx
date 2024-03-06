import { ThemeProvider } from '@/contexts/commons'
import { Montserrat } from 'next/font/google'
import '@/assets/styles/globals.css'
import { ReactNode } from 'react'
import { NextIntlClientProvider, useMessages } from 'next-intl'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  fallback: ['sans serif'],
})

export const metadata = {
  title: 'Nivo',
  description: 'Nivo app for data list videos',
}

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode
  params: { locale: string }
}) {
  const messages = useMessages()
  return (
    <html lang={params.locale}>
      <body
        className={`${montserrat.variable} min-h-screen w-full bg-background font-sans text-foreground`}
      >
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <ThemeProvider>{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
