import { httpClient } from '@/shared/api'
import type { UserResponse } from '../types'

export const usersApi = {
  async getAll(): Promise<UserResponse[]> {
    const response = await httpClient.get<UserResponse[]>('')

    return response.data
  },
}
