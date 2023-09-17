import { request } from '@/utils/request'

export const signIn = async (email, password) => {
  return request.post(`/sign-in`, {
    email,
    password
  })
}
export const signUp = async (
  email,
  password,
  firstName,
  lastName,
  phone,
  confirmPassword
) => {
  return request.post(`/sign-up`, {
    email,
    password,
    firstName,
    lastName,
    phone,
    confirmPassword
  })
}

export const getProfile = async () => {
  return request.get(`/profile`)
}
