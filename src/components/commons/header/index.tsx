import Image from 'next/image'
import { Anchor } from '../anchor'
import { useTranslations } from 'next-intl'
import image from '@/assets/image'
import { Badge } from '@/components/ui/badge'
import { Icon } from '@/components/ui/icons'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { fallbackFormat } from '@/utils/fallback-format'
import { UserOptions } from './user-options'

export const Header = () => {
  const t = useTranslations('')

  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between pb-4">
      <div className="flex items-center justify-center gap-3">
        <Anchor to="/" className="flex cursor-pointer items-center gap-2.5">
          <Image
            src={image.nivo}
            alt={t('commons.logoAlt')}
            title={t('commons.logoAlt')}
            width={24}
            height={24}
          />
          <Badge variant={'secondary'} className="rounded-full">
            {t('commons.tags.beta')}
          </Badge>
        </Anchor>

        <Icon name="Slash" className="-rotate-12 text-secondary-foreground" />
        <Avatar className="h-5 w-5">
          <AvatarFallback className="text-xs">
            {fallbackFormat(t('commons.avatar.name'))}
          </AvatarFallback>
          <AvatarImage src={t('commons.avatar.src')} />
        </Avatar>
        <h4 className="text-sm font-medium">John Doe</h4>
      </div>
      <UserOptions />
    </header>
  )
}
