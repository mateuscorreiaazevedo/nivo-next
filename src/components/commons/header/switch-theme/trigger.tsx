import { DropdownMenuSubTrigger } from '@/components/ui/dropdown-menu'
import { Icon } from '@/components/ui/icons'
import { useTranslations } from 'next-intl'

export function ThemeTrigger() {
  const t = useTranslations('commons.theme')
  return (
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
  )
}
