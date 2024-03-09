import { Button } from '@/components/ui/button'
import { Icon, IconName } from '@/components/ui/icons'
import { useTranslations } from 'next-intl'

export function NavbarItem(props: NavLinkItemProps) {
  const t = useTranslations('commons.navbar.buttons')

  const { icon, tag, handleAction: action, tabActive: paramsValue, value } = props

  const isActive = paramsValue === value

  return (
    <Button
      size={'sm'}
      onClick={!isActive ? () => action(value) : undefined}
      className="gap-2 rounded-full data-[active=true]:cursor-default data-[active=true]:hover:bg-secondary"
      data-active={isActive}
      variant={isActive ? 'secondary' : 'ghost'}
    >
      <Icon name={icon as IconName} className="size-4" />
      {t(tag)}
    </Button>
  )
}
