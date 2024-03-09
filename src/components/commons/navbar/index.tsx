import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icons'
import { useTranslations } from 'next-intl'

export function Navbar() {
  const t = useTranslations('commons.navbar')

  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-start gap-x-2 pb-4">
      <Button variant={'secondary'} size={'sm'} className="gap-2 rounded-full">
        <Icon name="ListVideo" className="size-4" />
        {t('buttons.uploads')}
      </Button>
      <Button variant={'ghost'} size={'sm'} className="gap-x-2 rounded-full">
        <Icon name="Tags" className="size-4" />
        {t('buttons.tags')}
      </Button>
      <Button variant={'ghost'} size={'sm'} className="gap-x-2 rounded-full">
        <Icon name="Settings" className="size-4" />
        {t('buttons.settings')}
      </Button>
      <Button variant={'ghost'} size={'sm'} className="gap-x-2 rounded-full">
        <Icon name="Code2" className="size-4" />
        {t('buttons.dev')}
      </Button>
    </nav>
  )
}
