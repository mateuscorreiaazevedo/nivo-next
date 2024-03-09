'use client'

import { useTheme } from 'next-themes'
import {
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
} from '@/components/ui/dropdown-menu'
import { useTranslations } from 'next-intl'
import { themes } from '@/utils/mock-list/themes-list'
import { ThemeTrigger } from './trigger'

export const SwitchTheme = () => {
  const t = useTranslations('commons.theme')
  const { setTheme } = useTheme()

  return (
    <DropdownMenuSub>
      <ThemeTrigger />
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          {themes.map(item => (
            <DropdownMenuItem key={item.value} onClick={() => setTheme(item.value)}>
              {t(item.label)}
            </DropdownMenuItem>
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  )
}
