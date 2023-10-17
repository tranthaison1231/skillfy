import type { Pagination } from '@/types/pagination'
import { request } from '@/utils/request'

export interface Country {
  id: string
  name: string
}

export const getCountries = async ({
  page = 1,
  limit = 5
}: {
  page?: number
  limit?: number
}) => {
  return request.get<Pagination<Country>>('/countries', {
    params: {
      page,
      limit
    }
  })
}
