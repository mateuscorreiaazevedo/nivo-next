import { useParams, usePathname, useRouter } from 'next/navigation'

export function useSwitchLocale() {
  const { locale } = useParams() as LocaleParams
  const pathname = usePathname()
  const router = useRouter()

  const handleChange = (value: string) => {
    const newPathname = pathname.replace(locale, value)

    router.replace(newPathname)
  }

  return {
    handleChange,
  }
}
