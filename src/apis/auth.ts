import { request } from '@/utils/request'

export const signIn = async (email, password) => {
  return request.post(`/sign-in`, {
    email,
    password
  })
}

export const getProfile = async () => {
  return request.get(`/profile`)
}
