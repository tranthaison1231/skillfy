import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function Layout() {
  return (
    <div className="font-primary bg-transparent text-white">
      <Header />
      <Outlet />
    </div>
  )
}
