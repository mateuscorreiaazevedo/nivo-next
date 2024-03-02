'use client'

import { useParams, usePathname, useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Switch } from '../ui/switch'

type Params = {
  locale: string
}

export const SwitchLocale = () => {
  const { locale } = useParams() as Params
  const t = useTranslations()
  const pathname = usePathname()
  const router = useRouter()

  const handleChange = () => {
    const newLocale = locale === 'pt-br' ? 'en' : 'pt-br'
    const newPathname = pathname.replace(locale, newLocale)

    router.push(newPathname)
  }

  return (
    <label className="flex items-center gap-1">
      {t('commons.toggle.locale')}
      <Switch checked={locale === 'pt-br'} onCheckedChange={handleChange} />
    </label>
  )
}
