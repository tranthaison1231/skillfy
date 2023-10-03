import { getUsers } from '@/apis/users'
import { Button } from '@/components/Button'
import { Card, CardTitle } from '@/components/Card'
import { DataTable } from '@/components/DataTable'
import { Input } from '@/components/Input'
import { useSearchParamsState } from '@/hooks/useSearchParamsState'
import { Edit, FileDown, FileUp, Search, Trash } from 'lucide-react'
import { useEffect, useState } from 'react'
import CountrySelector from './_components/CountrySelector'
import CreateUserModal from './_components/CreateUserModal'
import UserSelector from './_components/UserSelector'

export default function User() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useSearchParamsState('user', '')
  const [country, setCountry] = useSearchParamsState('country', '')
  const [search, setSearch] = useSearchParamsState('search', '')
  const [modal, setModal] = useState(false)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers(country, user, search)
        setUsers(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchUsers()
  }, [country, user, search])

  const columns = [
    {
      header: 'ID',
      accessorKey: 'id'
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
            <Edit className="cursor-pointer" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => {
              setUsers(users =>
                users.filter(user => user.id !== column.row.original.id)
              )
            }}
          >
            <Trash className="cursor-pointer text-red-500" />
          </Button>
        </div>
      )
    }
  ]

  const createUser = data => {
    setUsers(users => [
      ...users,
      {
        id: Date.now(),
        ...data
      }
    ])
    setModal(false)
  }

  return (
    <Card className="p-10 m-10 space-y-5">
      <CardTitle> User List </CardTitle>
      <div className="flex justify-between">
        <div className="flex gap-5">
          <div className="space-y-3">
            <p className="text-muted-foreground">Select Country</p>
            <CountrySelector value={country} onValueChange={setCountry} />
          </div>
          <div className="space-y-3">
            <p className="text-muted-foreground">Select User</p>
            <UserSelector value={user} onValueChange={setUser} />
          </div>
          <div className="space-y-3">
            <p className="text-muted-foreground">Search by Email</p>
            <Input
              value={search}
              placeholder="Search by Email"
              icon={Search}
              onChange={e => setSearch(e.target.value)}
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
            onSubmit={createUser}
            isOpen={modal}
            onClose={() => setModal(false)}
            onOpen={() => setModal(true)}
          />
        </div>
      </div>
      <DataTable className="mt-4" data={users} columns={columns} />
    </Card>
  )
}
