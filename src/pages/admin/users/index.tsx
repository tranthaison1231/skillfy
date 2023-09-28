import { getUsers } from '@/apis/users'
import { Button } from '@/components/Button'
import { Card, CardTitle } from '@/components/Card'
import { DataTable } from '@/components/DataTable'
import { Input } from '@/components/Input'
import { Edit, FileDown, Search, Trash } from 'lucide-react'
import { useEffect, useState } from 'react'
import CountrySelector from './_components/CountrySelector'
import UserSelector from './_components/UserSelector'

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
    accessorKey: 'id',
    cell: () => (
      <div className="flex gap-2 justify-center">
        <Button variant="outline" className="h-8 w-8 p-0">
          <Edit className="cursor-pointer" />
        </Button>
        <Button variant="outline" className="h-8 w-8 p-0">
          <Trash className="cursor-pointer text-red-500" />
        </Button>
      </div>
    )
  }
]

export default function User() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers()
        setUsers(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchUsers()
  })

  return (
    <Card className="p-10 m-10 space-y-5">
      <CardTitle> User List </CardTitle>
      <div className="flex justify-between">
        <div className="flex gap-5">
          <div className="space-y-3">
            <p className="text-muted-foreground">Select Country</p>
            <CountrySelector />
          </div>
          <div className="space-y-3">
            <p className="text-muted-foreground">Select User</p>
            <UserSelector />
          </div>
          <div className="space-y-3">
            <p className="text-muted-foreground">Search by Email</p>
            <Input placeholder="Search by Email" icon={Search} />
          </div>
        </div>
        <Button variant="sheet">
          <FileDown />
          Export Excel
        </Button>
      </div>
      <DataTable className="mt-4" data={users} columns={columns} />
    </Card>
  )
}
