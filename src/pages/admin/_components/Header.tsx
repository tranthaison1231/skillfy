import { Input } from '@/components/ui/Input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'
import { Search } from 'lucide-react'
import Logo from '@/assets/svgs/logo-1.svg'
import arrowLeft from '@/assets/svgs/arrow-left.svg'
import { Link } from 'react-router-dom'

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
    <div className="flex px-8 py-4">
      <div className="w-1/5 ">
        <div className="flex items-center font-medium">
          <Link to="/" className="flex gap-3">
            <img src={Logo} alt="logo" />
            <h1 className="text-4xl">Hope Ui</h1>
          </Link>
          <div className="flex items-center justify-center bg-blue-600 rounded-full h-7 w-7 ml-7">
            <img src={arrowLeft} alt="" />
          </div>
        </div>
        <div className="w-205 mt-3 h-[1px] bg-[#E9ECEF]"></div>
      </div>
      <div className="flex justify-around w-4/5 ml-auto">
        <Input icon={Search} placeholder="Search" className="w-64" />
        <div className="flex space-x-4">
          <Avatar>
            <AvatarImage src={user.avatarURL} alt="@shadcn" />
            <AvatarFallback>{user.firstName}</AvatarFallback>
          </Avatar>
          <div className="w-max">
            <h2 className="text-slate-800">
              {user.firstName + ' ' + user.lastName}
            </h2>
            <p className="text-xs text-gray-400">Marketing Administrator</p>
          </div>
        </div>
      </div>
    </div>
  )
}
