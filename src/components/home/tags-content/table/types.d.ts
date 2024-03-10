interface DataTableInterface {
  id: string
  title: string
  amount: number
}

interface TableTagsBodyInterface {
  data: DataTableInterface[]
}
