import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Icon } from '@/components/ui/icons'
import { useTranslations } from 'next-intl'
import React from 'react'

export const TableActions = () => {
  const t = useTranslations('home.tab.tags.table.actions')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'outline'} size={'icon'}>
          <Icon name="MoreHorizontal" className="size-5" strokeWidth={2} />
          <span className="sr-only">{t('title')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8}>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Icon name="PencilLine" className="mr-2 size-4" />
            {t('edit')}
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon name="Trash" className="mr-2 size-4" />
            {t('delete')}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
