'use client'

import { useParams, usePathname, useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import {
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/components/ui/dropdown-menu'
import { Icon } from '@/components/ui/icons'

type Params = {
  locale: string
}

const languages = ['pt-br', 'en']

export const SwitchLocale = () => {
  const { locale } = useParams() as Params
  const t = useTranslations('commons.locale')
  const pathname = usePathname()
  const router = useRouter()

  const handleChange = (value: string) => {
    const newPathname = pathname.replace(locale, value)

    router.push(newPathname)
  }

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger className="gap-2 text-base">
        <Icon name="Languages" className="size-2" />
        {t('title')}
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          {languages.map(item => (
            <DropdownMenuItem key={item} onClick={() => handleChange(item)}>
              {t(item)}
            </DropdownMenuItem>
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  )
}
