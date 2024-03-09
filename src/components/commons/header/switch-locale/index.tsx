'use client'

import {
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
} from '@/components/ui/dropdown-menu'
import { SwitchLocaleTrigger } from './trigger'
import { SwitchLocaleItem } from './item'
import { useSwitchLocale } from './switch-locale.model'
import { localeList } from '@/utils/mock-list/locale-list'

export const SwitchLocale = () => {
  return (
    <DropdownMenuSub>
      <SwitchLocaleTrigger />
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          {localeList.map(item => (
            <SwitchLocaleItem key={item} {...{ item, ...useSwitchLocale() }} />
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  )
}
