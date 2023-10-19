import type { Pagination } from '@/types/pagination'
import { request } from '@/utils/request'

export interface Company {
  id?: string
  name: string
  logo: string
}

export const getCompanies = async ({
  search,
  page = 1,
  limit = 5
}: {
  search: string
  page?: number
  limit?: number
}) => {
  return request.get<Pagination<Company>>('/companies', {
    params: {
      q: search || undefined,
      page: page + 1,
      limit
    }
  })
}

export const createCompany = async company => {
  return request.post('/companies', company)
}

export const deleteCompany = async (id: string) => {
  return request.delete(`/companies/${id}`)
}

export const editCompany = async ({ id, ...data }: Company) => {
  return request.put(`/companies/${id}`, data)
}

export const exportCompanies = async () => {
  return request.get('/companies/export-excel', {
    responseType: 'blob'
  })
}
