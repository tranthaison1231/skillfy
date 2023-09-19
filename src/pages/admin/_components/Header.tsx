import { Input } from '@/components/ui/Input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Search } from 'lucide-react'

interface User {
  email: string
  avatarURL: string
  firstName: string
  lastName: string
}

interface Props {
  user: User
}

export default function Header({ user }: Props) {
  return (
    <div className="px-8 py-4 flex justify-between">
      <Input icon={Search} placeholder="Search" className="w-56" />
      <div className="space-x-4 flex">
        <Avatar>
          <AvatarImage src={user.avatarURL} alt="@shadcn" />
          <AvatarFallback>{user.firstName}</AvatarFallback>
        </Avatar>
        <div className="w-max">
          <h2 className="text-slate-800">
            {user.firstName + ' ' + user.lastName}
          </h2>
          <p className="text-gray-400 text-xs">Marketing Administrator</p>
        </div>
      </div>
    </div>
  )
}
