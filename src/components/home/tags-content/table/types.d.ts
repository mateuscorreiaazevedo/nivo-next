interface DataTableInterface {
  id: string
  title: string
  amount: number
}

interface TableTagsBodyInterface {
  data: DataTableInterface[]
}

interface TableTagsSelectRowsPerPage {
  handleSelectAmountOfRows: (value: string) => void
  itemsPerPage: string
}

interface TableTagsFooterInterface {
  select: TableTagsSelectRowsPerPage
  text: {
    itemsPerPage: string | number
    total: number
  }
}
