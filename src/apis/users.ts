import { mockRequest } from '@/utils/request'

export interface User {
  id: string
  country: string
  avatar: string
  name: string
  username: string
  email: string
  phoneNumber: string
}

export const fetchUser = async ({
  search,
  country,
  page = 1,
  limit = 5
}: {
  search: string
  country: string
  page?: number
  limit?: number
}) => {
  return mockRequest.get('/users', {
    params: {
      search: search || undefined,
      country: country || undefined,
      page,
      limit
    }
  })
}

export const createUser = async user => {
  return mockRequest.post('/users', user)
}

export const deleteUser = async (id: string) => {
  return mockRequest.delete(`/users/${id}`)
}

export const editUser = async ({ id, ...data }: User) => {
  return mockRequest.put(`/users/${id}`, data)
}

export const getCountries = async () => {
  return Promise.resolve([
    'Turkmenistan',
    'Venezuela',
    'Monaco',
    'Montserrat',
    'Guam'
  ])
}
