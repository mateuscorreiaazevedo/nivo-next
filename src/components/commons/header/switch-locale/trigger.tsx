import { DropdownMenuSubTrigger } from '@/components/ui/dropdown-menu'
import { Icon } from '@/components/ui/icons'
import { useTranslations } from 'next-intl'

export function SwitchLocaleTrigger() {
  const t = useTranslations('commons.locale')
  return (
    <DropdownMenuSubTrigger className="gap-2 text-base">
      <Icon name="Languages" className="size-4" />
      {t('title')}
    </DropdownMenuSubTrigger>
  )
}
