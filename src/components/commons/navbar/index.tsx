'use client'

import { navbarList } from '@/utils/mock-list/navbar-list'
import { useNavbar } from './navbar.model'
import { NavbarItem } from './item'

export function Navbar() {
  return (
    <nav className="flex items-center justify-start gap-x-2 pb-4">
      {navbarList.map(item => (
        <NavbarItem key={item.tag} {...{ ...item, ...useNavbar() }} />
      ))}
    </nav>
  )
}
