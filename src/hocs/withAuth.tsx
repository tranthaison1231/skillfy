import { Navigate } from '@/router'

export function withAuth<Props>(Component: React.ComponentType<Props>) {
  return function (props: Props & React.HTMLAttributes<HTMLElement>) {
    const isAuth = localStorage.getItem('access_token')
    if (!isAuth) {
      return <Navigate to="/login" />
    }
    return <Component {...props} />
  }
}
