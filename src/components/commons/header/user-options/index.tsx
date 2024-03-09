'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import React, { useId, useState } from 'react'
import { SwitchLocale } from '../switch-locale'
import { SwitchTheme } from '../switch-theme'
import { UserOptionsTrigger } from './trigger'
import { ExitButton } from './exit-button'

export const UserOptions = () => {
  const [open, setOpen] = useState(false)
  const idKey = useId()

  const contentList: Array<() => JSX.Element> = [
    SwitchLocale,
    SwitchTheme,
    ExitButton,
  ]

  return (
    <DropdownMenu open={open} onOpenChange={() => setOpen(prev => !prev)}>
      <UserOptionsTrigger open={open} />
      <DropdownMenuContent align="end" className="w-52">
        {contentList.map((Item, index) => (
          <DropdownMenuGroup key={idKey}>
            <Item />
            {index !== contentList.length - 1 && <DropdownMenuSeparator />}
          </DropdownMenuGroup>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
