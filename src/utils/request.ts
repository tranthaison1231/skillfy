import axios from 'axios'

const accessToken = localStorage.getItem('access_token')

export const request = axios.create({
  baseURL: 'https://safelet-api.vercel.app/api',
  timeout: 5000,
  headers: {
    ...(accessToken && { Authorization: `Bearer ${accessToken}` })
  }
})
