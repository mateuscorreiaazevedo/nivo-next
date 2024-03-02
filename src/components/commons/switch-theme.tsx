'use client'

import { useTheme } from 'next-themes'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'
import { Icon } from '../ui/icons'

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
  const { setTheme } = useTheme()
  const t = useTranslations('commons.theme')

  const handleToggleTheme = (value: string) => {
    setTheme(value)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} size={'icon'}>
          <Icon
            name="Sun"
            className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Icon
            name="Moon"
            className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map(item => (
          <DropdownMenuItem
            key={item.value}
            className="cursor-pointer"
            onClick={() => handleToggleTheme(item.value)}
          >
            {t(item.label)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
