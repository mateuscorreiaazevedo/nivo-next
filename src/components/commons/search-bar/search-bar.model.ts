import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import queryString from 'query-string'

import * as yup from 'yup'

const searchSchema = yup.object({
  search: yup.string().nullable(),
})

type SearchType = yup.InferType<typeof searchSchema>

export const useSearchBar = () => {
  const router = useRouter()
  const path = usePathname()
  const value = useSearchParams().get('search')
  const tab = useSearchParams().get('tab')

  const { register, handleSubmit } = useForm<SearchType>({
    resolver: yupResolver(searchSchema),
    defaultValues: {
      search: value,
    },
  })

  const handleSearch = ({ search }: SearchType) => {
    const url = queryString.stringifyUrl({
      url: path,
      query: {
        search,
        tab,
      },
    })
    router.push(url)
  }

  const onSubmit = handleSubmit(handleSearch)

  return { onSubmit, register: register('search') }
}
