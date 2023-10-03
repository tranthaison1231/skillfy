import { getUsers } from '@/apis/users'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/Select'
import { SelectProps } from '@radix-ui/react-select'
import { useEffect, useState } from 'react'

export default function UserSelector({ value, onValueChange }: SelectProps) {
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
  }, [])
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-40" onValueChange={onValueChange}>
        <SelectValue placeholder="Select a user" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {users.map(user => (
            <SelectItem key={user.id} value={user.id}>
              {user.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
