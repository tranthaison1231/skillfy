import { getProfile } from '@/apis/auth'
import { Input } from '@/components/ui/Input'
import { withAuth } from '@/hocs/withAuth'
import { useEffect, useState } from 'react'

function Admin() {
  const [value, setValue] = useState('')
  const [user, setUser] = useState({
    email: '',
    avatarURL: ''
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await getProfile()
      setUser(res.data.user)
    }
    fetchProfile()
  }, [])
  return (
    <div className="w-40 p-3">
      <Input onChange={handleChange} value={value} />
      <p>{user?.email}</p>
      <img src={user?.avatarURL} alt="" />
    </div>
  )
}

export default withAuth(Admin)
