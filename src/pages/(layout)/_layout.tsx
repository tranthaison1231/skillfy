import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Layout() {
  return (
    <div className="max-w-5xl mx-auto pt-10">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
