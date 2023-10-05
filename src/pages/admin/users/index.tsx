import {
  type User,
  createUser,
  deleteUser,
  fetchUser,
  editUser
} from '@/apis/users'
import { Avatar, AvatarImage } from '@/components/Avatar'
import { Button } from '@/components/Button'
import { Card, CardTitle } from '@/components/Card'
import { DataTable } from '@/components/DataTable'
import { Input } from '@/components/Input'
import { useSearchParamsState } from '@/hooks/useSearchParamsState'
import { Edit, FileDown, FileUp, Search, Trash } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import CountrySelector from './_components/CountrySelector'
import CreateUserModal from './_components/CreateUserModal'
import debounce from 'lodash.debounce'
import EditUserModal from './_components/EditUserModal'
// import UserSelector from './_components/UserSelector'

export default function User() {
  const queryClient = useQueryClient()
  const [country, setCountry] = useSearchParamsState('country', '')
  const [search, setSearch] = useSearchParamsState('search', '')
  const [modal, setModal] = useState(false)
  const [user, setUser] = useState<User>()
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(5)

  const { data: users, isLoading } = useQuery<{ data: User[] }>(
    ['users', { search, country, page, limit }],
    () => fetchUser({ search, country })
  )

  const createUserMutation = useMutation(createUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })

  const deleteUserMutation = useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })

  const editUserMutation = useMutation(editUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })

  const columns = useMemo(
    () => [
      {
        header: 'ID',
        accessorKey: 'id'
      },
      {
        header: 'Avatar',
        accessorKey: 'avatar',
        cell: column => (
          <Avatar>
            <AvatarImage
              src={column.row.original.avatar}
              alt={column.row.original.name}
            />
          </Avatar>
        )
      },
      {
        header: 'Country',
        accessorKey: 'country'
      },
      {
        header: 'Name',
        accessorKey: 'name'
      },
      {
        header: 'UserName',
        accessorKey: 'username'
      },
      {
        header: 'Email',
        accessorKey: 'email'
      },
      {
        header: 'PhoneNumber',
        accessorKey: 'phoneNumber'
      },
      {
        header: () => <div className="text-center">Action</div>,
        accessorKey: 'action',
        cell: column => (
          <div className="flex gap-2 justify-center">
            <Button variant="outline" className="h-8 w-8 p-0">
              <Edit
                className="cursor-pointer"
                onClick={() => {
                  setUser(column.row.original)
                }}
              />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => {
                deleteUserMutation.mutateAsync(column.row.original.id)
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

  const handleCreateUser = async data => {
    await createUserMutation.mutateAsync(data)
    setModal(false)
  }

  const handleEditUser = async data => {
    await editUserMutation.mutateAsync(data)
    setUser(undefined)
  }

  const debouncedSearch = debounce(e => {
    setSearch(e.target.value)
  }, 400)

  return (
    <Card className="p-10 m-10 space-y-5">
      <CardTitle> User List </CardTitle>
      <div className="flex justify-between">
        <div className="flex gap-5">
          <div className="space-y-3">
            <p className="text-muted-foreground">Select Country</p>
            <CountrySelector value={country} onValueChange={setCountry} />
          </div>
          {/* <div className="space-y-3">
            <p className="text-muted-foreground">Select User</p>
            <UserSelector value={user} onValueChange={setUser} />
          </div> */}
          <div className="space-y-3">
            <p className="text-muted-foreground">Search by Email</p>
            <Input
              defaultValue={search}
              placeholder="Search by Email"
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
          <CreateUserModal
            loading={createUserMutation.isLoading}
            onSubmit={handleCreateUser}
            isOpen={modal}
            onClose={() => setModal(false)}
            onOpen={() => setModal(true)}
          />
        </div>
      </div>
      {user && (
        <EditUserModal
          loading={editUserMutation.isLoading}
          isOpen={!!user}
          user={user}
          onSubmit={handleEditUser}
          onClose={() => setUser(undefined)}
        />
      )}
      <DataTable
        size={limit}
        page={page}
        loading={isLoading}
        className="mt-4"
        data={users?.data ?? []}
        columns={columns}
      />
    </Card>
  )
}
