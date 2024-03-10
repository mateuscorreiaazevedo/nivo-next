import { Header } from '@/components/commons/header'
import { Navbar } from '@/components/commons/navbar'
import { Separator } from '@/components/ui/separator'
import { ReactNode } from 'react'

export default async function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="container sticky left-0 right-0 top-0 z-30 w-full bg-background/85 pt-8 backdrop-blur-sm">
        <Header />
        <Navbar />
      </header>
      <Separator className="sticky top-[152px] z-30" />
      <main className="container mt-8 w-full">{children}</main>
      <footer className="container flex items-center justify-between py-10">
        <p className="text-sm font-medium text-muted-foreground">
          &copy; Nivo - {new Date().getFullYear()}
        </p>
        <span className="text-sm font-medium text-muted-foreground">
          Powered by:{' '}
          <strong className="text-accent-foreground">Mateus Azevedo</strong>
        </span>
      </footer>
    </>
  )
}
