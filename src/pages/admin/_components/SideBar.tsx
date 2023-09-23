import menu from '@/assets/svgs/menu.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  ChevronRight,
  LayoutDashboard,
  Settings2,
  ShieldCheck
} from 'lucide-react'
import { cn } from '@/lib/utils'

const SIDER_BAR = [
  {
    label: 'Home',
    items: [
      {
        label: 'Dashboard',
        icon: <LayoutDashboard />,
        href: '/admin/'
      },
      {
        label: 'Authentication',
        icon: <ShieldCheck />,
        href: '/admin/authentication'
      },
      {
        label: 'Menu Styles',
        icon: <Settings2 />,
        children: [
          {
            label: 'Menu Styles Children',
            icon: menu
          }
        ]
      }
    ]
  }
]

export default function SideBar() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className="w-1/5 h-screen px-8 py-2">
      {SIDER_BAR.map(sidebar => (
        <div key={sidebar.label}>
          <h1 className="text-gray-400 mb-4 font font-semibold">
            {sidebar.label}
          </h1>
          <div className="pl-3">
            {sidebar.items.map(item => {
              return item.children?.length > 0 ? (
                <div
                  key={item.label}
                  className="hover:bg-primary  text-gray-400 pl-3 rounded-md w-60 hover:text-white flex h-11 items-center cursor-pointer gap-4"
                >
                  {item.icon}
                  <h1>{item.label}</h1>
                  <ChevronRight />
                </div>
              ) : (
                <div
                  onClick={() => navigate(item.href)}
                  key={item.label}
                  className={cn(
                    'hover:bg-primary my-1 text-gray-400 pl-3 rounded-md w-60 hover:text-white flex h-11 items-center cursor-pointer gap-4',
                    {
                      'bg-primary text-white': item.href === location.pathname
                    }
                  )}
                >
                  {item.icon}
                  <h1>{item.label}</h1>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
