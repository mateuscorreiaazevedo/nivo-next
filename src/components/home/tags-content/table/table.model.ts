import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import queryString from 'query-string'
import { useMemo } from 'react'

export const useTableTags = (data: DataTableInterface[]) => {
  const pathName = usePathname()
  const tab = useSearchParams().get('tab')
  const search = useSearchParams().get('search')
  const itemsPerPage = useSearchParams().get('itemsPerPage') || '10'
  const router = useRouter()

  const filteredData = useMemo(() => {
    const dataFiltered = search
      ? data.filter(item => item.title.toLowerCase().includes(search?.toLowerCase()))
      : data

    const dataFilteredPerPage = itemsPerPage
      ? dataFiltered.slice(0, parseInt(itemsPerPage))
      : dataFiltered

    return tab === 'tags' ? dataFilteredPerPage : []
  }, [search, itemsPerPage, tab])

  const handleSelectAmountOfRows = (value: string) => {
    const url = queryString.stringifyUrl({
      url: pathName,
      query: {
        tab,
        itemsPerPage: value,
        ...(search && { search }),
      },
    })

    router.push(url)
  }

  return {
    data: filteredData,
    select: {
      handleSelectAmountOfRows,
      itemsPerPage,
    },
    text: {
      itemsPerPage: filteredData.length,
      total: data.length,
    },
  }
}
