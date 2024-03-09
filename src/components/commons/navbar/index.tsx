'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { NavbarItem } from './item'
import qs from 'query-string'
import { navbarList } from '@/utils/mock-list/navbar-list'

export function Navbar() {
  const tabActive = useSearchParams().get('tab')
  const path = usePathname()
  const router = useRouter()

  const handleAction = (tab: string | null) => {
    const query = qs.stringify({ tab })
    const urlRouter = tab ? `${path}?${query}` : path
    router.replace(urlRouter)
  }

  return (
    <nav className="flex items-center justify-start gap-x-2 pb-4">
      {navbarList.map(item => (
        <NavbarItem key={item.tag} {...{ ...item, handleAction, tabActive }} />
      ))}
    </nav>
  )
}
