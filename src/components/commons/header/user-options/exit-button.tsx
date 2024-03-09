import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { useTranslations } from 'next-intl'
import React from 'react'

export const ExitButton = () => {
  const t = useTranslations('commons')
  return (
    <DropdownMenuItem>
      <a>{t('exit')}</a>
    </DropdownMenuItem>
  )
}
