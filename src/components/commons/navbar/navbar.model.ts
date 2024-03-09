import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import queryString from 'query-string'

export function useNavbar() {
  const tabActive = useSearchParams().get('tab')
  const path = usePathname()
  const router = useRouter()

  const handleAction = (tab: string | null) => {
    const query = queryString.stringify({ tab })
    const urlRouter = tab ? `${path}?${query}` : path
    router.push(urlRouter)
  }

  return { tabActive, handleAction }
}
