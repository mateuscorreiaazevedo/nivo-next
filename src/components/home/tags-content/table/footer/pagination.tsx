import { Icon } from '@/components/ui/icons'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination'

export function PaginationTableTags() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink size={'sm'} className="cursor-pointer">
            <Icon name="ChevronsLeft" className="size-4" />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink size={'sm'} className="cursor-pointer">
            <Icon name="ChevronLeft" className="size-4" />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink size={'sm'} className="cursor-pointer">
            <Icon name="ChevronRight" className="size-4" />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink size={'sm'} className="cursor-pointer">
            <Icon name="ChevronsRight" className="size-4" />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
