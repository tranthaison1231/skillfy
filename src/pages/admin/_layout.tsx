import { getProfile } from '@/apis/auth'
import { withAuth } from '@/hocs/withAuth'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './_components/Header'

function Layout() {
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
  return (
    <div>
      <Header user={user} />
      <Outlet />
      <div> Footer </div>
    </div>
  )
}

export default withAuth(Layout)
