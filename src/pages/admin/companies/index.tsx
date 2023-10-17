import {
  Company,
  createCompany,
  deleteCompany,
  getCompanies
} from '@/apis/companies'
import { Avatar, AvatarImage } from '@/components/Avatar'
import { Button } from '@/components/Button'
import { Card, CardTitle } from '@/components/Card'
import { DataTable } from '@/components/DataTable'
import { Input } from '@/components/Input'
import { usePersistState } from '@/hooks/usePersistState'
import { useSearchParamsState } from '@/hooks/useSearchParamsState'
import { PaginationState } from '@tanstack/react-table'
import debounce from 'lodash.debounce'
import { Edit, FileDown, FileUp, Search, Trash } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { toast } from 'sonner'
import CreateCompanyModal from './_components/CreateCompanyModal'

export default function User() {
  const [modal, setModal] = useState(false)
  const queryClient = useQueryClient()
  const [search, setSearch] = useSearchParamsState('search', '')
  const [{ pageIndex, pageSize }, setPagination] =
    usePersistState<PaginationState>({
      pageIndex: 0,
      pageSize: 10
    })

  const { data: companies, isLoading } = useQuery(
    ['companies', { search, pageIndex, pageSize }],
    () =>
      getCompanies({
        search,
        page: pageIndex,
        limit: pageSize
      })
  )

  const createCompanyMutation = useMutation(createCompany, {
    onSuccess: () => {
      queryClient.invalidateQueries('companies')
      toast.success('Created successfully!')
      setModal(false)
    }
  })

  const deleteCompanyMutation = useMutation(deleteCompany, {
    onSuccess: () => {
      queryClient.invalidateQueries('companies')
      toast.success('Deleted successfully!')
    }
  })

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize
    }),
    [pageIndex, pageSize]
  )

  const columns = useMemo(
    () => [
      {
        header: 'Logo',
        accessorKey: 'logo',
        cell: column => (
          <Avatar>
            <AvatarImage
              src={column.row.original.logo}
              alt={column.row.original.name}
            />
          </Avatar>
        )
      },
      {
        header: 'Name',
        accessorKey: 'name'
      },
      {
        header: () => <div className="text-center">Action</div>,
        accessorKey: 'action',
        cell: column => (
          <div className="flex gap-2 justify-center">
            <Button variant="outline" className="h-8 w-8 p-0">
              <Edit className="cursor-pointer" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => {
                deleteCompanyMutation.mutateAsync(column.row.original.id)
              }}
            >
              <Trash className="cursor-pointer text-red-500" />
            </Button>
          </div>
        )
      }
    ],
    []
  )

  const handleCreateCompany = (data: Company) => {
    createCompanyMutation.mutate(data)
  }

  const debouncedSearch = debounce(e => {
    setSearch(e.target.value)
  }, 400)

  return (
    <Card className="p-10 m-10 space-y-5">
      <CardTitle> Company List </CardTitle>
      <div className="flex justify-between">
        <div className="flex gap-5">
          <div className="space-y-3">
            <p className="text-muted-foreground">Search by name</p>
            <Input
              defaultValue={search}
              placeholder="Search by name"
              icon={Search}
              onChange={debouncedSearch}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant="sheet">
            <FileDown />
            Export Excel
          </Button>
          <Button>
            <FileUp />
            Import Excel
          </Button>
          <CreateCompanyModal
            loading={createCompanyMutation.isLoading}
            onSubmit={handleCreateCompany}
            isOpen={modal}
            onClose={() => setModal(false)}
            onOpen={() => setModal(true)}
          />
        </div>
      </div>
      <DataTable
        pagination={pagination}
        onPaginationChange={setPagination}
        total={companies?.data?.total ?? 0}
        loading={isLoading || deleteCompanyMutation.isLoading}
        className="mt-4"
        data={companies?.data?.items ?? []}
        columns={columns}
      />
    </Card>
  )
}
