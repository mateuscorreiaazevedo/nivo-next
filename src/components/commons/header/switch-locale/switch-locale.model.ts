import { useParams, usePathname, useRouter } from 'next/navigation'

export function useSwitchLocale() {
  const { locale } = useParams() as LocaleParams
  const pathname = usePathname()
  const router = useRouter()
  const { search } = location

  const handleChange = (value: string) => {
    const newPathname = pathname.replace(locale, value)

    router.replace(`${newPathname}${search}`)
  }

  return {
    handleChange,
  }
}
