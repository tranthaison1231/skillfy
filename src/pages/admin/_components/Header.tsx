import arrowLeft from '@/assets/svgs/arrow-left.svg'
import Logo from '@/assets/svgs/logo-1.svg'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/DropdownMenu'
import { Input } from '@/components/ui/Input'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/Tooltip'
import { LogOut, Search } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('access_token')
    navigate('/login')
  }

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
        <div className="w-52 mt-3 h-[1px] bg-[#E9ECEF]"></div>
      </div>
      <div className="flex justify-around w-4/5 ml-auto">
        <Input icon={Search} placeholder="Search" className="w-64" />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="flex space-x-4">
                    <Avatar>
                      <AvatarImage src={user.avatarURL} alt="@shadcn" />
                      <AvatarFallback>{user.firstName}</AvatarFallback>
                    </Avatar>
                    <div className="w-max">
                      <h2 className="text-slate-800">
                        {user.firstName + ' ' + user.lastName}
                      </h2>
                      <p className="text-xs text-gray-400">
                        Marketing Administrator
                      </p>
                    </div>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem
                      onClick={logout}
                      className="cursor-pointer"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </TooltipTrigger>
            <TooltipContent>Account</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}
