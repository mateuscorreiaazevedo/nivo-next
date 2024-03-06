'use client'

import { useTheme } from 'next-themes'
import {
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/components/ui/dropdown-menu'
import { useTranslations } from 'next-intl'
import { Icon } from '@/components/ui/icons'

const themes = [
  {
    label: 'light',
    value: 'light',
  },
  {
    label: 'dark',
    value: 'dark',
  },
  {
    label: 'system',
    value: 'system',
  },
]

export const SwitchTheme = () => {
  const t = useTranslations('commons.theme')
  const { setTheme } = useTheme()

  const handleToggleTheme = (value: string) => {
    setTheme(value)
  }

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger className="relative gap-2">
        <Icon
          name="Sun"
          className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Icon
          name="Moon"
          className="absolute bottom-1/2 left-2 size-4 translate-y-1/2 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span className="text-sm">{t('title')}</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          {themes.map(item => (
            <DropdownMenuItem
              key={item.value}
              onClick={() => handleToggleTheme(item.value)}
            >
              {t(item.label)}
            </DropdownMenuItem>
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  )
}
