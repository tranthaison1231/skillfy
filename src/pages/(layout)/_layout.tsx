import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Layout() {
  return (
    <div className="">
      <div className="max-w-5xl pt-10 mx-auto">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
