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
import { useState } from 'react'

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
  const [openDropdown, setDropdown] = useState(false)
  const { setTheme } = useTheme()

  const handleToggleTheme = (value: string) => {
    setTheme(value)
  }

  return (
    <DropdownMenu open={openDropdown} onOpenChange={() => setDropdown(prev => !prev)}>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} size={'sm'} className="relative gap-2 px-2">
          <Icon
            name="Sun"
            className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Icon
            name="Moon"
            className="size-4 absolute bottom-1/2 left-2 translate-y-1/2 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          <Icon
            name="ChevronDown"
            data-open={openDropdown}
            className="size-4 text-muted-foreground transition-all data-[open=true]:rotate-180"
          />
          <span className="sr-only">change theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map(item => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => handleToggleTheme(item.value)}
          >
            {t(item.label)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
