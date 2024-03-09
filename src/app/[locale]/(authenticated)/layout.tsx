import { Header } from '@/components/commons/header'
import { Navbar } from '@/components/commons/navbar'
import { ReactNode } from 'react'

export default async function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="sticky left-0 right-0 top-0 w-full border-b border-b-secondary px-6 pt-10 md:px-10 xl:px-32">
        <Header />
        <Navbar />
      </div>
      {children}
    </>
  )
}
