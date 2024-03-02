'use client'

import { useParams, usePathname, useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Icon } from '../ui/icons'
import { useState } from 'react'

type Params = {
  locale: string
}

const languages = ['pt-br', 'en']

export const SwitchLocale = () => {
  const { locale } = useParams() as Params
  const [openDrodown, setOpenDropdown] = useState(false)
  const t = useTranslations('commons.locale')
  const pathname = usePathname()
  const router = useRouter()

  const handleChange = (value: string) => {
    const newPathname = pathname.replace(locale, value)

    router.push(newPathname)
  }

  return (
    <DropdownMenu
      open={openDrodown}
      onOpenChange={() => setOpenDropdown(prev => !prev)}
    >
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} size={'sm'} className="gap-2 px-2">
          <Icon name="Languages" className="size-4" />
          <Icon
            name="ChevronDown"
            data-open={openDrodown}
            className="size-4 text-muted-foreground transition-all data-[open=true]:rotate-180"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map(item => (
          <DropdownMenuItem key={item} onClick={() => handleChange(item)}>
            {t(item)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
