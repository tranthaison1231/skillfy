import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './style.css'
import Home from './pages/home'
import Courses from './pages/courses'
import Search from './pages/search'
import CourseDetail from './pages/course-detail'
import Layout from './layouts/Layout'
import NotFound from './pages/404'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/courses',
        element: <Courses />
      },
      {
        path: '/course/:id',
        element: <CourseDetail />
      },
      {
        path: '/search',
        element: <Search />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

function App() {
  return <RouterProvider router={router} />
}

const root = createRoot(document.getElementById('root'))

root.render(<App />)
