import { Outlet, Navigate } from 'react-router-dom'

export default function Layout() {
  if (localStorage.getItem('access_token')) {
    return <Navigate to="/admin" />
  }
  return <Outlet />
}
