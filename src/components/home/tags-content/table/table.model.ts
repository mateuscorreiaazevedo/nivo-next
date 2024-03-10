import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

export const useTableTags = (data: DataTableInterface[]) => {
  const tab = useSearchParams().get('tab')
  const search = useSearchParams().get('search')

  const filteredData = useMemo(() => {
    return tab === 'tags' && search
      ? data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
      : data
  }, [search])

  return {
    data: filteredData,
  }
}
