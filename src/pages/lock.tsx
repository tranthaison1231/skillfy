import React from 'react'
import Avatar from '@/assets/images/avatar.png'
import bgLogo from '@/assets/icons/bg-logo.png'
import { Button } from '@/components/ui/Button'
import { useNavigate } from '@/router'
import Logo1 from '@/assets/svgs/logo-1.svg'
import Background from '@/assets/images/bg-circle.png'
import { Input } from '@/components/ui/Input'
import { useToast } from '@/components/ui/use-toast'
const username = [
  {
    id: 1,
    name: 'Austin Robertson'
  }
]
export default function lock() {
  const navigate = useNavigate()
  const { toast } = useToast()
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const password = data.get('password')
    if (password === '123456') {
      localStorage.setItem('isAuth', 'true')
      navigate('/')
      toast({
        title: 'Successfully!',
        description: 'Login successfully',
        variant: 'success'
      })
    } else {
      toast({
        title: 'Error',
        description: 'Email or password is incorrect',
        variant: 'destructive'
      })
    }
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="z-0 opacity-70">
        <img
          src={bgLogo}
          alt="background-color-lock-screen"
          className="absolute top-[-100px] left-[-195px]"
        />
      </div>
      <div className="w-[40%] flex justify-start mr-auto">
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center justify-center m-auto w-[391px]"
        >
          <div className="flex mr-auto mb-[30px] gap-2">
            <img src={Logo1} alt="logo" />
            <div className="text-slate-800 text-[33px] font-normal font-['Inter'] leading-[42.90px]">
              Hope Ui
            </div>
          </div>
          <div className="flex flex-col items-center justify-center m-auto w-[391px]">
            <img
              src={Avatar}
              alt="avatar-user"
              className="w-[100px] h-[100px] flex "
            />
            {username.map(user => (
              <h1
                className="text-slate-800 text-[33px] font-medium "
                key={user.id}
              >
                Hi ! {user.name}
              </h1>
            ))}
            <p className="w-[490px] text-center text-gray-400 mb-7">
              Enter your password to acess the admin.
            </p>
            <div className="">
              <label
                htmlFor="password"
                className="w-[111px] flex text-gray-400 mb-2 cursor-pointer"
              >
                Password
              </label>
              <Input
                placeholder="Password"
                className="mb-8 w-[400px]"
                type="password"
                id="password"
                name="password"
              />
            </div>
            <Button className="w-48" type="submit">
              Login
            </Button>
          </div>
        </form>
      </div>
      <div className="relative w-[60%] h-screen bg-gradient-to-br from-blue-500 to-blue-900 ">
        <img
          className="absolute top-0 h-screen m-0 ml-[157px] opacity-10 right 0"
          src={Background}
          alt="background"
        />
      </div>
    </div>
  )
}
