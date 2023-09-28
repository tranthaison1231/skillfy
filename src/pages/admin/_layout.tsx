import { getProfile } from '@/apis/auth'
import { withAuth } from '@/hocs/withAuth'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './_components/Header'
import SideBar from './_components/SideBar'
import Footer from './_components/Footer'
import { cn } from '@/lib/utils'

function Layout() {
  const [isToggler, setIsToggler] = useState(false)
  const [user, setUser] = useState({
    email: '',
    avatarURL: '',
    firstName: '',
    lastName: ''
  })

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await getProfile()
      setUser(res.data.user)
    }
    fetchProfile()
  }, [])

  const onToggle = () => {
    setIsToggler(isToggler => !isToggler)
  }

  return (
    <div>
      <Header user={user} isToggler={isToggler} onToggle={onToggle} />
      <div className="flex">
        <SideBar isToggler={isToggler} />
        <div
          className={cn(
            'h-[calc(100vh-78px)] flex flex-col justify-between bg-gray-100 overflow-y-auto',
            {
              'w-[calc(100%-17.5rem)]': isToggler,
              'w-[calc(100%-6rem)]': !isToggler
            }
          )}
        >
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default withAuth(Layout)
