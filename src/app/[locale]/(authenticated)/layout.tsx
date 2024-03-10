import { Header } from '@/components/commons/header'
import { Navbar } from '@/components/commons/navbar'
import { Separator } from '@/components/ui/separator'
import { ReactNode } from 'react'

export default async function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="container sticky left-0 right-0 top-0 w-full pt-8">
        <Header />
        <Navbar />
      </div>
      <Separator />
      <main className="container mt-8 w-full">{children}</main>
    </>
  )
}
